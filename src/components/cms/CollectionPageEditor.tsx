'use client'

import React, { useState, useEffect } from 'react'
import {
  ChevronLeft,
  Upload,
  Plus,
  Trash2,
  Edit2,
  ExternalLink,
  Loader2,
  Image as ImageIcon,
  Check,
  Search,
  Sparkles,
  Layers,
  ArrowRight,
  FolderOpen,
} from 'lucide-react'
import BulkUploadModal from '@/components/cms/BulkUploadModal'

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

  // Modals & Panels
  const [isBulkModalOpen, setIsBulkModalOpen] = useState<boolean>(false)
  const [bulkTargetSubslug, setBulkTargetSubslug] = useState<string>('')
  const [editingSubcategory, setEditingSubcategory] = useState<SubcategoryData | null>(null)
  const [subNameInput, setSubNameInput] = useState<string>('')
  const [subDescInput, setSubDescInput] = useState<string>('')
  const [subImageInput, setSubImageInput] = useState<string>('')
  const [savingSub, setSavingSub] = useState<boolean>(false)
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
          // If we had an active subcategory, refresh its reference
          if (activeSubcategory && found.subcategories) {
            const refreshedSub = found.subcategories.find((s: any) => s.slug === activeSubcategory.slug)
            if (refreshedSub) setActiveSubcategory(refreshedSub)
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

  const handleOpenBulkModal = (subSlug: string = '') => {
    setBulkTargetSubslug(subSlug)
    setIsBulkModalOpen(true)
  }

  const handleEditSubcategory = (sub: SubcategoryData) => {
    setEditingSubcategory(sub)
    setSubNameInput(sub.name)
    setSubDescInput(sub.description || '')
    setSubImageInput(sub.coverImage || '')
  }

  const handleSaveSubcategory = async () => {
    if (!editingSubcategory || !category) return
    setSavingSub(true)

    try {
      const res = await fetch('/api/catalog/category', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          categorySlug: category.slug,
          subcategorySlug: editingSubcategory.slug,
          name: subNameInput,
          description: subDescInput,
          coverImage: subImageInput,
        }),
      })

      const json = await res.json()
      if (json.success) {
        showToast('Subcategory updated successfully!')
        setEditingSubcategory(null)
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

  const handleDeleteProduct = async (productId: string, code: string) => {
    if (!confirm(`Are you sure you want to delete product "${code}"?`)) return

    try {
      const res = await fetch(`/api/catalog?id=${encodeURIComponent(productId)}`, {
        method: 'DELETE',
      })
      const json = await res.json()
      if (json.success) {
        showToast(`Product ${code} removed!`)
        await loadCategoryData()
      } else {
        alert(json.error || 'Failed to delete')
      }
    } catch (e: any) {
      alert('Error deleting product: ' + e.message)
    }
  }

  const handleImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      const formData = new FormData()
      formData.append('file', file)
      const res = await fetch('/api/upload', { method: 'POST', body: formData })
      const json = await res.json()
      if (json.success && json.url) {
        setSubImageInput(json.url)
        showToast('Image uploaded!')
      }
    } catch (e) {
      console.error(e)
    }
  }

  if (loading) {
    return (
      <div className="w-full h-full bg-[#FAF8F5] flex flex-col items-center justify-center space-y-3">
        <Loader2 className="w-8 h-8 text-[#195799] animate-spin" />
        <p className="text-neutral-600 text-sm font-semibold">Loading Collection Page Editor...</p>
      </div>
    )
  }

  if (!category) {
    return (
      <div className="p-8 text-center bg-[#FAF8F5] h-full flex flex-col items-center justify-center">
        <p className="text-neutral-700 font-semibold mb-4">Collection "{collectionSlug}" not found.</p>
        <button
          onClick={onBackToHome}
          className="px-5 py-2.5 rounded-xl bg-[#195799] text-white text-xs font-bold"
        >
          ← Return to Home Page Editor
        </button>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col bg-[#FAF8F5] text-neutral-900 overflow-y-auto relative select-none">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-16 right-6 z-50 bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl shadow-xl text-xs flex items-center gap-2 animate-fade-in border border-emerald-400">
          <Check className="w-4 h-4 text-white" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Banner Matching Real Site Design with Editor Controls */}
      <div className="w-full bg-[#195799] border-b-2 border-[#C9A84C] py-3.5 px-4 sm:px-6 shadow-sm sticky top-0 z-30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {activeSubcategory ? (
            <button
              onClick={() => setActiveSubcategory(null)}
              className="inline-flex items-center gap-1.5 text-white/95 hover:text-white bg-white/10 hover:bg-white/20 py-1.5 px-3 rounded-lg text-xs font-bold transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to {category.name}</span>
            </button>
          ) : (
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-white/95 hover:text-white bg-white/10 hover:bg-white/20 py-1.5 px-3 rounded-lg text-xs font-bold transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>← Back to Home Page Editor</span>
            </button>
          )}

          <div className="flex items-center gap-2">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-base sm:text-lg font-bold text-white tracking-wide"
            >
              {activeSubcategory ? activeSubcategory.name : category.name}
            </h2>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400 text-neutral-950 font-mono">
              Live Visual Editor Mode
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => handleOpenBulkModal(activeSubcategory?.slug || '')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs shadow-sm transition-all"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>⚡ Bulk Upload Products</span>
          </button>

          <a
            href={
              activeSubcategory
                ? `/collections/${category.slug}/${activeSubcategory.slug}`
                : `/collections/${category.slug}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/20"
          >
            <span>View Live</span>
            <ExternalLink className="w-3 h-3 text-white/70" />
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8 flex-1">
        {/* VIEW 1: Subcategories Grid (When inside category, e.g. Premium Jewellery) */}
        {!activeSubcategory && (
          <div>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-xl sm:text-2xl font-bold text-neutral-900">
                  {category.name} Subcategories &amp; Lines
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                  Click on any subcategory card to edit details &amp; image, or click "Enter Gallery" to view and bulk-upload products.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-neutral-200 text-neutral-800">
                  Total Items: {category.totalItems || 0}
                </span>
              </div>
            </div>

            {/* Grid of Real Subcategories */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {category.subcategories?.map((sub, idx) => (
                <div
                  key={sub.slug}
                  className="group relative rounded-2xl overflow-hidden bg-white border-2 border-[#D4C7B4] hover:border-amber-400 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Floating Action Bar at Top of Subcategory Card */}
                  <div className="absolute top-2 left-2 right-2 z-20 flex items-center justify-between pointer-events-auto">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/70 text-white backdrop-blur-xs font-mono">
                      {sub.itemCount || sub.images?.length || 0} items
                    </span>

                    <button
                      type="button"
                      onClick={() => handleOpenBulkModal(sub.slug)}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-[10px] shadow-sm transition-transform active:scale-95"
                      title="Bulk Upload to this subcategory"
                    >
                      <Upload className="w-3 h-3" />
                      <span>Bulk Upload</span>
                    </button>
                  </div>

                  {/* Image Container with Hover Overlay */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F7F4EE] group-hover:brightness-95 transition-all">
                    <img
                      src={sub.coverImage || '/images/categories/cat-premium-earrings.jpg'}
                      alt={sub.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Hover Quick Edit Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-3">
                      <button
                        type="button"
                        onClick={() => setActiveSubcategory(sub)}
                        className="w-full py-2 px-3 rounded-xl bg-[#195799] hover:bg-[#124378] text-white text-xs font-bold shadow-md flex items-center justify-center gap-1.5 transition-transform active:scale-95"
                      >
                        <FolderOpen className="w-3.5 h-3.5" />
                        <span>Enter Product Gallery ↗</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleEditSubcategory(sub)}
                        className="w-full py-1.5 px-3 rounded-xl bg-white/90 hover:bg-white text-neutral-900 text-xs font-semibold shadow-xs flex items-center justify-center gap-1.5"
                      >
                        <Edit2 className="w-3 h-3 text-neutral-600" />
                        <span>Edit Name &amp; Image</span>
                      </button>
                    </div>
                  </div>

                  {/* Clean Subcategory Footer */}
                  <div className="p-3.5 sm:p-4 text-center bg-white border-t-2 border-[#D4C7B4] flex flex-col justify-between">
                    <h4
                      style={{ fontFamily: 'Georgia, serif' }}
                      className="text-[14px] sm:text-[16px] font-bold text-neutral-900 leading-tight line-clamp-2"
                    >
                      {sub.name}
                    </h4>

                    {/* Bottom Action Pill */}
                    <button
                      type="button"
                      onClick={() => setActiveSubcategory(sub)}
                      className="mt-2.5 w-full py-1.5 rounded-lg bg-neutral-100 hover:bg-amber-100 text-neutral-800 hover:text-amber-900 text-[11px] font-bold flex items-center justify-center gap-1 border border-neutral-200 transition-colors"
                    >
                      <span>Manage Products</span>
                      <ArrowRight className="w-3 h-3 text-amber-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: Subcategory Products Gallery (When viewing Kundan, Rajwadi, Studs, etc.) */}
        {activeSubcategory && (
          <div>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-xl sm:text-2xl font-bold text-neutral-900 flex items-center gap-2">
                  <span>{activeSubcategory.name}</span>
                  <span className="text-xs font-normal text-neutral-500 font-sans">
                    ({activeSubcategory.images?.length || 0} Products)
                  </span>
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Live products in this subcategory. Wholesale price is calculated as <span className="font-mono font-bold text-neutral-700">Code × 3.6</span>.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleOpenBulkModal(activeSubcategory.slug)}
                  className="px-4 py-2 rounded-xl bg-[#195799] hover:bg-[#124378] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Bulk Upload More Products</span>
                </button>
              </div>
            </div>

            {/* Products Grid */}
            {(!activeSubcategory.images || activeSubcategory.images.length === 0) ? (
              <div className="py-20 text-center bg-white rounded-3xl border border-neutral-200 p-8">
                <ImageIcon className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
                <h4 className="text-base font-bold text-neutral-800">No products in {activeSubcategory.name} yet</h4>
                <p className="text-xs text-neutral-500 mt-1 mb-4">Click below to upload jewellery photos in bulk.</p>
                <button
                  type="button"
                  onClick={() => handleOpenBulkModal(activeSubcategory.slug)}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs inline-flex items-center gap-2 shadow-sm"
                >
                  <Upload className="w-4 h-4" />
                  <span>Bulk Upload Photos Now</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {activeSubcategory.images.map((item) => {
                  const numMatch = item.code.match(/\d+/)
                  const price = numMatch ? Math.round(parseInt(numMatch[0]) * 3.6) : null

                  return (
                    <div
                      key={item.id}
                      className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div className="relative aspect-square bg-[#F7F4EE] overflow-hidden">
                        <img
                          src={item.src}
                          alt={item.code}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        <button
                          type="button"
                          onClick={() => handleDeleteProduct(item.id, item.code)}
                          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-red-600/80 hover:bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                          title="Delete Product"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="p-3 bg-white border-t border-neutral-100">
                        <p className="font-mono font-bold text-xs text-neutral-900 truncate">
                          {item.code}
                        </p>
                        {price && (
                          <p className="text-[11px] font-semibold text-amber-700 mt-0.5">
                            Wholesale ₹{price.toLocaleString('en-IN')}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Edit Subcategory Modal */}
      {editingSubcategory && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-neutral-200 animate-scale-up space-y-4">
            <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-lg font-bold text-neutral-900">
              Edit Subcategory Details
            </h3>

            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                Subcategory Name
              </label>
              <input
                type="text"
                value={subNameInput}
                onChange={(e) => setSubNameInput(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-xl text-xs font-semibold text-neutral-900 focus:ring-2 focus:ring-[#195799]/30"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                Subcategory Cover Image
              </label>
              <div className="flex items-center gap-3 mb-2">
                {subImageInput ? (
                  <img
                    src={subImageInput}
                    alt="cover preview"
                    className="w-16 h-16 rounded-xl object-cover border border-neutral-200"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-400">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                )}
                <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold border border-neutral-300">
                  <Upload className="w-3.5 h-3.5 text-neutral-600" />
                  <span>Upload New Cover</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageFileChange}
                  />
                </label>
              </div>
              <input
                type="text"
                value={subImageInput}
                onChange={(e) => setSubImageInput(e.target.value)}
                placeholder="/images/categories/..."
                className="w-full px-3 py-1.5 border border-neutral-200 rounded-lg text-[11px] text-neutral-600 font-mono"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-neutral-200">
              <button
                type="button"
                onClick={() => setEditingSubcategory(null)}
                className="px-4 py-2 rounded-xl border border-neutral-300 text-neutral-700 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={savingSub}
                onClick={handleSaveSubcategory}
                className="px-5 py-2 rounded-xl bg-[#195799] hover:bg-[#124378] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
              >
                {savingSub ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bulk Upload Modal */}
      <BulkUploadModal
        isOpen={isBulkModalOpen}
        onClose={() => setIsBulkModalOpen(false)}
        initialCategorySlug={category.slug}
        initialSubcategorySlug={bulkTargetSubslug}
        onSuccess={() => {
          showToast('Bulk upload completed!')
          loadCategoryData()
        }}
      />
    </div>
  )
}
