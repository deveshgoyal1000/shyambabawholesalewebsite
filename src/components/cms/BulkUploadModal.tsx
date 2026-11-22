'use client'

import React, { useState, useEffect } from 'react'
import {
  Upload,
  X,
  Check,
  Loader2,
  Image as ImageIcon,
  AlertCircle,
  FileText,
  Folder,
  Layers,
} from 'lucide-react'

interface CategorySummary {
  slug: string
  name: string
  subcategories: { slug: string; name: string }[]
}

interface BulkUploadModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
  initialCategorySlug?: string
  initialSubcategorySlug?: string
}

export default function BulkUploadModal({
  isOpen,
  onClose,
  onSuccess,
  initialCategorySlug = 'premium-jewellery',
  initialSubcategorySlug = '',
}: BulkUploadModalProps) {
  const [categories, setCategories] = useState<CategorySummary[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategorySlug)
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>(initialSubcategorySlug)
  const [files, setFiles] = useState<{ file: File; preview: string; code: string }[]>([])
  const [uploading, setUploading] = useState<boolean>(false)
  const [progress, setProgress] = useState<number>(0)
  const [message, setMessage] = useState<string | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  // Fetch category list
  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch('/api/catalog?limit=1')
        const json = await res.json()
        if (json.success && json.categories) {
          setCategories(
            json.categories.map((c: any) => ({
              slug: c.slug,
              name: c.name,
              subcategories: (c.subcategories || []).map((s: any) => ({
                slug: s.slug,
                name: s.name,
              })),
            }))
          )
        }
      } catch (e) {
        console.error('Failed to load categories for modal:', e)
      }
    }
    loadCategories()
  }, [])

  useEffect(() => {
    if (initialCategorySlug) setSelectedCategory(initialCategorySlug)
    if (initialSubcategorySlug) setSelectedSubcategory(initialSubcategorySlug)
  }, [initialCategorySlug, initialSubcategorySlug])

  if (!isOpen) return null

  const currentCategoryData = categories.find((c) => c.slug === selectedCategory)
  const subcategories = currentCategoryData?.subcategories || []

  const handleFilesSelected = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return
    const newItems: { file: File; preview: string; code: string }[] = []

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i]
      if (!file.type.startsWith('image/')) continue

      const baseName = file.name.replace(/\.[^/.]+$/, '').toUpperCase()
      const codeMatch = baseName.match(/(SB-[A-Z0-9]+|[A-Z]{1,3}-[0-9]+|[0-9]{3,6})/)
      const derivedCode = codeMatch
        ? codeMatch[0].startsWith('SB-')
          ? codeMatch[0]
          : `SB-${codeMatch[0]}`
        : `SB-${baseName.slice(0, 8)}`

      newItems.push({
        file,
        preview: URL.createObjectURL(file),
        code: derivedCode,
      })
    }

    setFiles((prev) => [...prev, ...newItems])
    setErrorMsg(null)
  }

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== index))
  }

  const handleUploadAll = async () => {
    if (files.length === 0) {
      setErrorMsg('Please select at least one image file to upload')
      return
    }

    setUploading(true)
    setProgress(15)
    setErrorMsg(null)
    setMessage(null)

    try {
      const formData = new FormData()
      formData.append('categorySlug', selectedCategory)
      if (selectedSubcategory) {
        formData.append('subcategorySlug', selectedSubcategory)
      }

      files.forEach((item) => {
        formData.append('files', item.file)
      })

      setProgress(45)

      const res = await fetch('/api/catalog/bulk', {
        method: 'POST',
        body: formData,
      })

      const json = await res.json()
      setProgress(100)

      if (json.success) {
        setMessage(json.message || `Successfully added ${files.length} products!`)
        setTimeout(() => {
          setFiles([])
          onSuccess?.()
          onClose()
        }, 1500)
      } else {
        setErrorMsg(json.error || 'Failed to upload products')
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Error occurred during bulk upload')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 select-none animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-7 shadow-2xl border border-neutral-200 flex flex-col max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#195799] flex items-center justify-center shadow-xs">
              <Upload className="w-4.5 h-4.5 text-[#195799]" />
            </div>
            <div>
              <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-lg font-bold text-neutral-900 leading-tight">
                Bulk Upload Products &amp; Images
              </h3>
              <p className="text-xs text-neutral-500">
                Upload multiple jewellery photos at once with auto-detected product codes.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={uploading}
            className="p-2 rounded-xl text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto py-5 space-y-4">
          {/* Target Category & Subcategory Pickers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Folder className="w-3.5 h-3.5 text-neutral-500" />
                Target Collection / Category
              </label>
              <select
                value={selectedCategory}
                disabled={uploading}
                onChange={(e) => {
                  setSelectedCategory(e.target.value)
                  setSelectedSubcategory('')
                }}
                className="w-full px-3 py-2 rounded-xl border border-neutral-300 bg-white text-xs font-semibold text-neutral-800 focus:ring-2 focus:ring-[#195799]/30"
              >
                {categories.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-neutral-500" />
                Subcategory / Design Line
              </label>
              <select
                value={selectedSubcategory}
                disabled={uploading || subcategories.length === 0}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-neutral-300 bg-white text-xs font-semibold text-neutral-800 focus:ring-2 focus:ring-[#195799]/30 disabled:opacity-50"
              >
                <option value="">(All in {currentCategoryData?.name || 'Category'})</option>
                {subcategories.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Drag & Drop File Zone */}
          <div className="relative border-2 border-dashed border-neutral-300 hover:border-[#195799] bg-neutral-50/50 hover:bg-blue-50/20 rounded-2xl p-6 text-center transition-all cursor-pointer">
            <input
              type="file"
              multiple
              accept="image/*"
              disabled={uploading}
              onChange={(e) => handleFilesSelected(e.target.files)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
            />
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#195799]">
                <ImageIcon className="w-6 h-6" />
              </div>
              <p className="font-semibold text-neutral-800 text-sm">
                Drop multiple product images here or click to browse
              </p>
              <p className="text-[11px] text-neutral-500">
                Select photos (JPG, PNG, WEBP). Product codes like SB-015 are auto-detected from filenames.
              </p>
            </div>
          </div>

          {/* Files List Preview */}
          {files.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-neutral-700">
                  Ready to upload ({files.length} items)
                </span>
                <button
                  type="button"
                  onClick={() => setFiles([])}
                  disabled={uploading}
                  className="text-xs text-red-600 hover:underline"
                >
                  Clear All
                </button>
              </div>

              <div className="max-h-48 overflow-y-auto space-y-2 pr-1">
                {files.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 rounded-xl bg-neutral-50 border border-neutral-200 text-xs"
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <img
                        src={item.preview}
                        alt="preview"
                        className="w-10 h-10 object-cover rounded-lg border border-neutral-200 shrink-0"
                      />
                      <div className="overflow-hidden">
                        <p className="font-mono font-bold text-neutral-900 truncate">{item.code}</p>
                        <p className="text-[10px] text-neutral-500 truncate">{item.file.name}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      disabled={uploading}
                      onClick={() => handleRemoveFile(idx)}
                      className="p-1 rounded-lg text-neutral-400 hover:text-red-600 hover:bg-neutral-200/50"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upload Progress / Status */}
          {uploading && (
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs font-semibold text-neutral-600">
                <span>Uploading {files.length} products...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-amber-500 h-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {message && (
            <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-800 text-xs flex items-center gap-2 font-medium">
              <Check className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>{message}</span>
            </div>
          )}

          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-300 rounded-xl text-red-800 text-xs flex items-center gap-2 font-medium">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-neutral-200 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={uploading}
            className="px-5 py-2.5 rounded-xl border border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-semibold text-xs transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleUploadAll}
            disabled={uploading || files.length === 0}
            className="px-6 py-2.5 rounded-xl bg-[#195799] hover:bg-[#124378] text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Uploading...</span>
              </>
            ) : (
              <>
                <Upload className="w-4 h-4" />
                <span>Upload {files.length > 0 ? `${files.length} Products` : 'All'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
