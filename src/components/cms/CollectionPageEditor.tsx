'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  ChevronLeft,
  Upload,
  Plus,
  Trash2,
  ExternalLink,
  Loader2,
  Image as ImageIcon,
  Check,
  FolderOpen,
  ArrowRight,
  AlertTriangle,
  RefreshCw,
  X,
  Layers,
} from 'lucide-react'

interface ProductItem {
  id: string
  code: string
  src: string
  rawFilename?: string
}

interface SubcategoryData {
  slug: string
  name: string
  description?: string
  parentSlug?: string
  parentName?: string
  coverImage?: string
  itemCount?: number
  images?: ProductItem[]
}

interface CategoryData {
  slug: string
  name: string
  description?: string
  coverImage?: string
  totalItems?: number
  subcategories?: SubcategoryData[]
  images?: ProductItem[]
}

interface CollectionPageEditorProps {
  collectionSlug: string
  onBackToHome: () => void
  onOpenLiveSite?: (path: string) => void
}

export default function CollectionPageEditor({
  collectionSlug,
  onBackToHome,
  onOpenLiveSite,
}: CollectionPageEditorProps) {
  const [category, setCategory] = useState<CategoryData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [activeSubcategory, setActiveSubcategory] = useState<SubcategoryData | null>(null)

  // Selected subcategory for editing in the right inspector (Subcategory view)
  const [selectedSubcategory, setSelectedSubcategory] = useState<SubcategoryData | null>(null)
  const [subNameInput, setSubNameInput] = useState<string>('')
  const [subDescInput, setSubDescInput] = useState<string>('')
  const [subImageInput, setSubImageInput] = useState<string>('')
  const [savingSub, setSavingSub] = useState<boolean>(false)

  // Selected product in the gallery view
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null)

  // Direct Bulk Upload in the right panel
  const [uploadFiles, setUploadFiles] = useState<File[]>([])
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const coverInputRef = useRef<HTMLInputElement>(null)

  // Clear all images confirmation
  const [isClearingAll, setIsClearingAll] = useState<boolean>(false)
  const [confirmClearOpen, setConfirmClearOpen] = useState<boolean>(false)

  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3000)
  }

  const loadCategoryData = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/catalog?limit=1')
      const json = await res.json()
      if (json.success && json.categories) {
        const found = json.categories.find((c: any) => c.slug === collectionSlug)
        if (found) {
          setCategory(found)

          // Set default selected subcategory if none selected
          if (!selectedSubcategory && found.subcategories && found.subcategories.length > 0) {
            selectSubcategoryForEditing(found.subcategories[0])
          } else if (selectedSubcategory && found.subcategories) {
            const refreshed = found.subcategories.find((s: any) => s.slug === selectedSubcategory.slug)
            if (refreshed) {
              selectSubcategoryForEditing(refreshed)
            }
          }

          // If inside a gallery view, refresh active subcategory
          if (activeSubcategory && found.subcategories) {
            const refreshedSub = found.subcategories.find((s: any) => s.slug === activeSubcategory.slug)
            if (refreshedSub) {
              setActiveSubcategory(refreshedSub)
              if (selectedProduct && refreshedSub.images) {
                const refreshedProd = refreshedSub.images.find((p: any) => p.id === selectedProduct.id)
                setSelectedProduct(refreshedProd || null)
              }
            }
          }
        }
      }
    } catch (err) {
      console.error('Failed to load collection data:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCategoryData()
  }, [collectionSlug])

  const selectSubcategoryForEditing = (sub: SubcategoryData) => {
    setSelectedSubcategory(sub)
    setSubNameInput(sub.name)
    setSubDescInput(sub.description || '')
    setSubImageInput(sub.coverImage || '')
  }

  const handleSaveSubcategory = async () => {
    if (!selectedSubcategory || !category) return
    setSavingSub(true)

    try {
      const res = await fetch('/api/catalog/category', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          categorySlug: category.slug,
          subcategorySlug: selectedSubcategory.slug,
          name: subNameInput,
          description: subDescInput,
          coverImage: subImageInput,
        }),
      })

      const json = await res.json()
      if (json.success) {
        showToast('Subcategory updated successfully!')
        await loadCategoryData()
      } else {
        alert(json.error || 'Failed to update')
      }
    } catch (e: any) {
      alert('Error updating subcategory: ' + e.message)
    } finally {
      setSavingSub(false)
    }
  }

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      const formData = new FormData()
      formData.append('file', file)
      const res = await fetch('/api/upload', { method: 'POST', body: formData })
      const json = await res.json()
      if (json.success && json.url) {
        setSubImageInput(json.url)
        showToast('Cover photo uploaded!')
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleDirectBulkUpload = async () => {
    const targetSub = activeSubcategory || selectedSubcategory
    if (!category || !targetSub || uploadFiles.length === 0) return

    setIsUploading(true)
    setUploadSuccess(null)

    try {
      const formData = new FormData()
      formData.append('categorySlug', category.slug)
      formData.append('subcategorySlug', targetSub.slug)
      uploadFiles.forEach((file) => {
        formData.append('files', file)
      })

      const res = await fetch('/api/catalog/bulk', {
        method: 'POST',
        body: formData,
      })

      const json = await res.json()
      if (json.success) {
        showToast(`Uploaded ${uploadFiles.length} photos! Filenames saved as product codes.`)
        setUploadSuccess(`Successfully uploaded ${uploadFiles.length} items!`)
        setUploadFiles([])
        if (fileInputRef.current) fileInputRef.current.value = ''
        await loadCategoryData()
      } else {
        alert(json.error || 'Upload failed')
      }
    } catch (err: any) {
      alert('Error during upload: ' + err.message)
    } finally {
      setIsUploading(false)
    }
  }

  const handleDeleteProduct = async (productId: string, code: string) => {
    if (!confirm(`Are you sure you want to delete product "${code}"?`)) return

    try {
      const res = await fetch(`/api/catalog?id=${encodeURIComponent(productId)}`, {
        method: 'DELETE',
      })
      const json = await res.json()
      if (json.success) {
        showToast(`Product ${code} removed!`)
        if (selectedProduct?.id === productId) setSelectedProduct(null)
        await loadCategoryData()
      } else {
        alert(json.error || 'Failed to delete')
      }
    } catch (e: any) {
      alert('Error deleting product: ' + e.message)
    }
  }

  const handleClearAllSubcategoryImages = async () => {
    const targetSub = activeSubcategory || selectedSubcategory
    if (!category || !targetSub) return

    setIsClearingAll(true)
    try {
      const res = await fetch(
        `/api/catalog?clearSubcategory=true&category=${encodeURIComponent(
          category.slug
        )}&subcategory=${encodeURIComponent(targetSub.slug)}`,
        { method: 'DELETE' }
      )
      const json = await res.json()
      if (json.success) {
        showToast(`Cleared all images from ${targetSub.name}`)
        setConfirmClearOpen(false)
        setSelectedProduct(null)
        await loadCategoryData()
      } else {
        alert(json.error || 'Failed to clear subcategory images')
      }
    } catch (e: any) {
      alert('Error clearing images: ' + e.message)
    } finally {
      setIsClearingAll(false)
    }
  }

  if (loading) {
    return (
      <div className="w-full h-full bg-[#FAF8F5] flex flex-col items-center justify-center space-y-3 font-sans">
        <Loader2 className="w-8 h-8 text-[#195799] animate-spin" />
        <p className="text-neutral-600 text-sm font-medium">Loading Visual Editor...</p>
      </div>
    )
  }

  if (!category) {
    return (
      <div className="p-8 text-center bg-[#FAF8F5] h-full flex flex-col items-center justify-center font-sans">
        <p className="text-neutral-700 font-semibold mb-4">Collection "{collectionSlug}" not found.</p>
        <button
          onClick={onBackToHome}
          className="px-5 py-2.5 rounded-xl bg-[#195799] text-white text-xs font-semibold"
        >
          ← Return to Home Page Editor
        </button>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col bg-[#F9F9F8] text-neutral-900 font-sans select-none overflow-hidden">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-16 right-6 z-50 bg-neutral-900 text-white font-medium px-4 py-2.5 rounded-xl shadow-xl text-xs flex items-center gap-2 border border-neutral-700">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header Matching Puck Editor / Live Website */}
      <header className="w-full bg-[#195799] border-b border-[#124378] py-2.5 px-4 sm:px-6 shadow-xs z-30 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          {activeSubcategory ? (
            <button
              onClick={() => {
                setActiveSubcategory(null)
                setSelectedProduct(null)
              }}
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 py-1.5 px-3 rounded-lg text-xs font-medium transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to {category.name}</span>
            </button>
          ) : (
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 py-1.5 px-3 rounded-lg text-xs font-medium transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Home Editor</span>
            </button>
          )}

          <div className="flex items-center gap-2">
            <h1 className="text-sm sm:text-base font-semibold text-white tracking-tight">
              {activeSubcategory ? `${category.name} / ${activeSubcategory.name}` : category.name}
            </h1>
            <span className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20 text-white border border-white/20">
              Internal Page Editor
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={
              activeSubcategory
                ? `/collections/${category.slug}/${activeSubcategory.slug}`
                : `/collections/${category.slug}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/20 transition-colors"
          >
            <span>View Live Site</span>
            <ExternalLink className="w-3 h-3 text-white/70" />
          </a>
        </div>
      </header>

      {/* Two-Column Editor Layout: Left Canvas + Right Editing Panel */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT COLUMN: Main Interactive Canvas */}
        <main className="flex-1 overflow-y-auto p-5 sm:p-7">
          {/* VIEW 1: Subcategories Overview (e.g. Premium Jewellery) */}
          {!activeSubcategory && (
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-neutral-900 tracking-tight">
                    {category.name} Subcategories
                  </h2>
                  <p className="text-xs text-neutral-500 mt-1">
                    Select any subcategory card to edit details on the right panel, or enter its product gallery.
                  </p>
                </div>
                <div className="text-xs font-medium px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-700 border border-neutral-200">
                  Total Items: {category.totalItems || 0}
                </div>
              </div>

              {/* Subcategories Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.subcategories?.map((sub) => {
                  const isSelected = selectedSubcategory?.slug === sub.slug

                  return (
                    <div
                      key={sub.slug}
                      onClick={() => selectSubcategoryForEditing(sub)}
                      className={`group cursor-pointer rounded-xl overflow-hidden bg-white border transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#195799] ring-2 ring-[#195799]/20 shadow-md'
                          : 'border-neutral-200 hover:border-neutral-300 hover:shadow-sm'
                      }`}
                    >
                      {/* Image Container */}
                      <div className="relative aspect-4/5 bg-neutral-100 overflow-hidden">
                        <img
                          src={sub.coverImage || '/images/categories/cat-premium-earrings.jpg'}
                          alt={sub.name}
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                        />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono">
                          {sub.itemCount || sub.images?.length || 0} items
                        </div>

                        {isSelected && (
                          <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-[#195799] text-white text-[10px] font-medium flex items-center gap-1 shadow-xs">
                            <Check className="w-3 h-3" />
                            <span>Editing</span>
                          </div>
                        )}
                      </div>

                      {/* Card Content & Action */}
                      <div className="p-3 bg-white border-t border-neutral-100 flex flex-col gap-2">
                        <h3 className="text-xs font-bold text-neutral-900 truncate">
                          {sub.name}
                        </h3>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            selectSubcategoryForEditing(sub)
                            setActiveSubcategory(sub)
                          }}
                          className="w-full py-1.5 px-2 rounded-lg bg-neutral-50 hover:bg-[#195799] text-neutral-700 hover:text-white text-[11px] font-semibold border border-neutral-200 hover:border-[#195799] flex items-center justify-center gap-1 transition-colors"
                        >
                          <span>Open Gallery</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* VIEW 2: Subcategory Products Gallery (e.g. Kundan, Rajwadi) */}
          {activeSubcategory && (
            <div className="max-w-6xl mx-auto space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-neutral-900 tracking-tight flex items-center gap-2">
                    <span>{activeSubcategory.name}</span>
                    <span className="text-xs font-normal text-neutral-500">
                      ({activeSubcategory.images?.length || 0} Photos)
                    </span>
                  </h2>
                  <p className="text-xs text-neutral-500 mt-1">
                    Wholesale product codes and catalog photos. Upload more or manage items on the right panel.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setActiveSubcategory(null)
                    setSelectedProduct(null)
                  }}
                  className="px-3 py-1.5 rounded-lg border border-neutral-300 hover:bg-neutral-100 text-neutral-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>All Subcategories</span>
                </button>
              </div>

              {/* Products Grid - Wholesale Only: NO PRICES */}
              {(!activeSubcategory.images || activeSubcategory.images.length === 0) ? (
                <div className="py-20 text-center bg-white rounded-2xl border border-dashed border-neutral-300 p-8">
                  <ImageIcon className="w-10 h-10 text-neutral-300 mx-auto mb-2" />
                  <h3 className="text-sm font-semibold text-neutral-800">No photos in {activeSubcategory.name} yet</h3>
                  <p className="text-xs text-neutral-500 mt-1 mb-4">
                    Use the upload box on the right panel to add jewellery photos in bulk.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
                  {activeSubcategory.images.map((item) => {
                    const isSelected = selectedProduct?.id === item.id

                    return (
                      <div
                        key={item.id}
                        onClick={() => setSelectedProduct(item)}
                        className={`group cursor-pointer bg-white rounded-xl border overflow-hidden transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#195799] ring-2 ring-[#195799]/20 shadow-md'
                            : 'border-neutral-200 hover:border-neutral-300 hover:shadow-xs'
                        }`}
                      >
                        <div className="relative aspect-square bg-[#F7F4EE] overflow-hidden">
                          <img
                            src={item.src}
                            alt={item.code}
                            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-200"
                          />

                          {/* Quick delete button */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleDeleteProduct(item.id, item.code)
                            }}
                            className="absolute top-1.5 right-1.5 w-6 h-6 rounded-md bg-neutral-900/80 hover:bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xs"
                            title="Delete photo"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>

                          {isSelected && (
                            <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-[#195799] text-white text-[9px] font-medium">
                              Selected
                            </div>
                          )}
                        </div>

                        {/* Card Info - ONLY Product Code / Image Title. NO PRICES! */}
                        <div className="p-2.5 bg-white border-t border-neutral-100">
                          <p className="font-mono font-bold text-xs text-neutral-900 truncate" title={item.code}>
                            {item.code}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )}
        </main>

        {/* RIGHT COLUMN: Persistent Inspector & Editing Panel (340px) */}
        <aside className="w-[340px] shrink-0 border-l border-neutral-200 bg-white flex flex-col overflow-y-auto">
          {/* Header of Right Panel */}
          <div className="p-4 border-b border-neutral-200 bg-neutral-50/70 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                {activeSubcategory ? 'Gallery & Upload Panel' : 'Subcategory Details'}
              </span>
            </div>
            {activeSubcategory && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-200 text-neutral-700">
                {activeSubcategory.images?.length || 0} items
              </span>
            )}
          </div>

          <div className="p-4 space-y-6 flex-1">
            {/* PANEL STATE 1: Subcategory Overview Editing (When browsing subcategories) */}
            {!activeSubcategory && selectedSubcategory && (
              <div className="space-y-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    Selected Subcategory
                  </span>
                  <h3 className="text-sm font-bold text-neutral-900 mt-0.5">
                    {selectedSubcategory.name}
                  </h3>
                </div>

                {/* Name Input */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Subcategory Title
                  </label>
                  <input
                    type="text"
                    value={subNameInput}
                    onChange={(e) => setSubNameInput(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-xs font-medium text-neutral-900 focus:outline-hidden focus:ring-2 focus:ring-[#195799]/30 focus:border-[#195799]"
                  />
                </div>

                {/* Description Input */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Description / Subtitle
                  </label>
                  <textarea
                    rows={2}
                    value={subDescInput}
                    onChange={(e) => setSubDescInput(e.target.value)}
                    placeholder="Brief description of this collection..."
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-xs font-normal text-neutral-900 focus:outline-hidden focus:ring-2 focus:ring-[#195799]/30 focus:border-[#195799] resize-none"
                  />
                </div>

                {/* Cover Image Upload & Input */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Cover Image
                  </label>
                  <div className="flex items-center gap-3 mb-2">
                    {subImageInput ? (
                      <img
                        src={subImageInput}
                        alt="cover preview"
                        className="w-14 h-14 rounded-lg object-cover border border-neutral-200 shrink-0"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-400 shrink-0">
                        <ImageIcon className="w-5 h-5" />
                      </div>
                    )}
                    <div className="flex-1">
                      <button
                        type="button"
                        onClick={() => coverInputRef.current?.click()}
                        className="w-full py-1.5 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-neutral-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Upload className="w-3.5 h-3.5 text-neutral-500" />
                        <span>Upload New Cover</span>
                      </button>
                      <input
                        ref={coverInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleCoverUpload}
                      />
                    </div>
                  </div>
                  <input
                    type="text"
                    value={subImageInput}
                    onChange={(e) => setSubImageInput(e.target.value)}
                    placeholder="/images/categories/..."
                    className="w-full px-2.5 py-1.5 border border-neutral-200 rounded-md text-[11px] text-neutral-600 font-mono"
                  />
                </div>

                {/* Save Changes Button */}
                <button
                  type="button"
                  disabled={savingSub}
                  onClick={handleSaveSubcategory}
                  className="w-full py-2 px-3 rounded-lg bg-[#195799] hover:bg-[#124378] disabled:opacity-50 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                >
                  {savingSub ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
                  <span>Save Subcategory Details</span>
                </button>

                {/* Primary Action to Enter Gallery */}
                <div className="pt-4 border-t border-neutral-200">
                  <button
                    type="button"
                    onClick={() => setActiveSubcategory(selectedSubcategory)}
                    className="w-full py-2.5 px-3 rounded-lg bg-neutral-900 hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
                  >
                    <FolderOpen className="w-4 h-4 text-amber-400" />
                    <span>Enter &amp; Edit Product Gallery →</span>
                  </button>
                  <p className="text-[11px] text-neutral-400 text-center mt-1.5">
                    Upload photos, delete items or clear all gallery images.
                  </p>
                </div>

                {/* Quick subcategory switcher list */}
                <div className="pt-4 border-t border-neutral-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                    All Subcategories ({category.subcategories?.length || 0})
                  </span>
                  <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
                    {category.subcategories?.map((s) => (
                      <button
                        key={s.slug}
                        onClick={() => selectSubcategoryForEditing(s)}
                        className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs flex items-center justify-between transition-colors ${
                          selectedSubcategory.slug === s.slug
                            ? 'bg-[#195799]/10 text-[#195799] font-bold'
                            : 'hover:bg-neutral-100 text-neutral-700 font-normal'
                        }`}
                      >
                        <span className="truncate">{s.name}</span>
                        <span className="font-mono text-[10px] text-neutral-400">
                          {s.itemCount || s.images?.length || 0}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PANEL STATE 2: Product Gallery & Bulk Upload (When inside a subcategory) */}
            {activeSubcategory && (
              <div className="space-y-6">
                {/* Section A: Bulk Upload Directly in the Right Panel */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                      Upload Photos
                    </label>
                    <span className="text-[10px] text-neutral-400 font-mono">Multiple allowed</span>
                  </div>

                  {/* Drop / Pick Zone */}
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="cursor-pointer border-2 border-dashed border-neutral-300 hover:border-[#195799] bg-neutral-50 hover:bg-[#195799]/5 rounded-xl p-4 text-center transition-colors"
                  >
                    <Upload className="w-6 h-6 text-neutral-400 mx-auto mb-1.5" />
                    <p className="text-xs font-semibold text-neutral-800">
                      {uploadFiles.length > 0 ? `${uploadFiles.length} file(s) selected` : 'Choose photos to upload'}
                    </p>
                    <p className="text-[10px] text-neutral-500 mt-0.5">
                      Filename automatically becomes product code (e.g., SB-015.jpg → SB-015)
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files) {
                          setUploadFiles(Array.from(e.target.files))
                          setUploadSuccess(null)
                        }
                      }}
                    />
                  </div>

                  {/* Preview Selected Files Count & Upload Button */}
                  {uploadFiles.length > 0 && (
                    <div className="space-y-2">
                      <div className="max-h-24 overflow-y-auto border border-neutral-200 rounded-lg p-2 bg-neutral-50 text-[11px] font-mono space-y-1">
                        {uploadFiles.slice(0, 5).map((f, idx) => (
                          <div key={idx} className="truncate text-neutral-600">
                            • {f.name}
                          </div>
                        ))}
                        {uploadFiles.length > 5 && (
                          <div className="text-neutral-400 font-sans italic">
                            + {uploadFiles.length - 5} more files...
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setUploadFiles([])
                            if (fileInputRef.current) fileInputRef.current.value = ''
                          }}
                          className="px-3 py-2 rounded-lg border border-neutral-300 hover:bg-neutral-100 text-neutral-600 text-xs font-medium"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          disabled={isUploading}
                          onClick={handleDirectBulkUpload}
                          className="flex-1 py-2 px-3 rounded-lg bg-[#195799] hover:bg-[#124378] disabled:opacity-50 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                        >
                          {isUploading ? (
                            <>
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              <span>Uploading...</span>
                            </>
                          ) : (
                            <>
                              <Upload className="w-3.5 h-3.5" />
                              <span>Upload {uploadFiles.length} Photos Now</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {uploadSuccess && (
                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{uploadSuccess}</span>
                    </div>
                  )}
                </div>

                {/* Section B: Selected Item Inspector */}
                {selectedProduct && (
                  <div className="pt-4 border-t border-neutral-200 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                      Selected Photo
                    </span>
                    <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 flex items-center gap-3">
                      <img
                        src={selectedProduct.src}
                        alt={selectedProduct.code}
                        className="w-14 h-14 rounded-lg object-cover border border-neutral-200 shrink-0 bg-white"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="font-mono font-bold text-xs text-neutral-900 truncate">
                          {selectedProduct.code}
                        </p>
                        <p className="text-[10px] text-neutral-500 truncate mt-0.5">
                          ID: {selectedProduct.id}
                        </p>
                        <button
                          type="button"
                          onClick={() => handleDeleteProduct(selectedProduct.id, selectedProduct.code)}
                          className="mt-1 text-red-600 hover:text-red-700 text-[11px] font-semibold flex items-center gap-1"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Delete this photo</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Section C: Danger Zone - Clear All Images */}
                <div className="pt-4 border-t border-neutral-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                    Manage Subcategory
                  </span>

                  {!confirmClearOpen ? (
                    <button
                      type="button"
                      onClick={() => setConfirmClearOpen(true)}
                      className="w-full py-2 px-3 rounded-lg border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5 text-red-600" />
                      <span>Clear All Images in {activeSubcategory.name}</span>
                    </button>
                  ) : (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 space-y-2.5">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <p className="text-xs text-red-800 font-medium">
                          Delete all {activeSubcategory.images?.length || 0} images in "{activeSubcategory.name}"? This cannot be undone.
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          disabled={isClearingAll}
                          onClick={handleClearAllSubcategoryImages}
                          className="flex-1 py-1.5 px-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center justify-center gap-1"
                        >
                          {isClearingAll ? <Loader2 className="w-3 h-3 animate-spin" /> : null}
                          <span>Yes, Clear All</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setConfirmClearOpen(false)}
                          className="px-3 py-1.5 rounded-lg border border-neutral-300 bg-white text-neutral-700 text-xs font-medium"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}
