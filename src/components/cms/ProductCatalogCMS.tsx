'use client'

import React, { useState, useEffect } from 'react'
import {
  Search,
  Plus,
  Trash2,
  ExternalLink,
  Upload,
  Loader2,
  Check,
  Filter,
  Image as ImageIcon,
  Calculator,
  RefreshCw,
} from 'lucide-react'

interface Product {
  id: string
  code: string
  src: string
  rawFilename?: string
  categorySlug: string
  categoryName: string
  subcategorySlug?: string | null
  subcategoryName?: string | null
}

interface CategorySummary {
  slug: string
  name: string
  totalItems: number
  subcategories: { slug: string; name: string; itemCount: number }[]
}

export default function ProductCatalogCMS() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<CategorySummary[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [search, setSearch] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [page, setPage] = useState<number>(1)
  const [total, setTotal] = useState<number>(0)
  const limit = 40

  // Add Product Modal State
  const [showAddModal, setShowAddModal] = useState<boolean>(false)
  const [newCode, setNewCode] = useState<string>('')
  const [newCategory, setNewCategory] = useState<string>('premium-jewellery')
  const [newSubcategory, setNewSubcategory] = useState<string>('kundan')
  const [newImageSrc, setNewImageSrc] = useState<string>('')
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [actionMessage, setActionMessage] = useState<string>('')

  // Fetch catalog products
  const fetchProducts = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (selectedCategory && selectedCategory !== 'all') {
        params.append('category', selectedCategory)
      }
      if (search.trim()) {
        params.append('search', search.trim())
      }
      params.append('page', page.toString())
      params.append('limit', limit.toString())

      const res = await fetch(`/api/catalog?${params.toString()}`)
      const data = await res.json()

      if (data.success) {
        setProducts(data.products || [])
        setTotal(data.total || 0)
        if (data.categories) {
          setCategories(data.categories)
        }
      }
    } catch (err) {
      console.error('Error fetching catalog:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [selectedCategory, page])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPage(1)
    fetchProducts()
  }

  // Upload image handler
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()

      if (data.success && data.url) {
        setNewImageSrc(data.url)
        // Auto-fill code from filename if code is empty
        if (!newCode) {
          const rawName = file.name.replace(/\.[^/.]+$/, '').toUpperCase()
          setNewCode(rawName.startsWith('SB-') ? rawName : `SB-${rawName}`)
        }
      } else {
        alert(data.error || 'Upload failed')
      }
    } catch (err: any) {
      alert('Error uploading image: ' + err.message)
    } finally {
      setIsUploading(false)
    }
  }

  // Submit new product
  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newCode.trim() || !newImageSrc.trim()) {
      alert('Please provide product code and upload/enter an image.')
      return
    }

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/catalog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: newCode.trim(),
          src: newImageSrc.trim(),
          categorySlug: newCategory,
          subcategorySlug: newSubcategory || undefined,
        }),
      })

      const data = await res.json()
      if (data.success) {
        setActionMessage(`✓ Product ${newCode} added successfully!`)
        setShowAddModal(false)
        setNewCode('')
        setNewImageSrc('')
        fetchProducts()
        setTimeout(() => setActionMessage(''), 4000)
      } else {
        alert(data.error || 'Failed to add product')
      }
    } catch (err: any) {
      alert('Error adding product: ' + err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Delete product
  const handleDeleteProduct = async (id: string, code: string) => {
    if (!confirm(`Are you sure you want to delete product ${code}?`)) return

    try {
      const res = await fetch(`/api/catalog?id=${encodeURIComponent(id)}&code=${encodeURIComponent(code)}`, {
        method: 'DELETE',
      })
      const data = await res.json()
      if (data.success) {
        setActionMessage(`Deleted product ${code}`)
        fetchProducts()
        setTimeout(() => setActionMessage(''), 3000)
      } else {
        alert(data.error || 'Failed to delete')
      }
    } catch (err: any) {
      alert('Error deleting product: ' + err.message)
    }
  }

  // Available subcategories for selected modal category
  const activeModalCat = categories.find((c) => c.slug === newCategory)
  const availableSubcategories = activeModalCat?.subcategories || []

  return (
    <div className="w-full h-full flex flex-col bg-[#FAF8F5] text-neutral-900 overflow-y-auto">
      {/* Top Banner & Action Controls */}
      <div className="bg-white border-b border-neutral-200 px-6 py-5 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <h2 style={{ fontFamily: 'Georgia, serif' }} className="text-xl sm:text-2xl font-bold text-neutral-900">
                Jewellery Products &amp; Catalogue CMS
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
              Live catalogue database &bull; Total Products: <strong className="text-neutral-800">{total} items</strong> &bull; Multiplier: <code>Code &times; 3.6 = Wholesale Price (INR)</code>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchProducts()}
              className="p-2.5 rounded-xl border border-neutral-300 hover:bg-neutral-100 text-neutral-700 transition-colors"
              title="Refresh Catalogue"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>

            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#195799] hover:bg-[#124275] text-white font-bold text-sm shadow-md active:scale-98 transition-all"
            >
              <Plus className="w-4 h-4 text-white" />
              <span>Add New Product</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="max-w-7xl mx-auto mt-4 flex flex-col sm:flex-row items-center gap-3">
          <form onSubmit={handleSearchSubmit} className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by product code (e.g. SB-00B, ER-) or title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 bg-neutral-50 focus:bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-[#195799]/30 transition-all"
            />
          </form>

          {/* Category Filter Pills / Dropdown */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-neutral-500 shrink-0 hidden sm:block" />
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value)
                setPage(1)
              }}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm font-semibold text-neutral-800 focus:outline-hidden focus:ring-2 focus:ring-[#195799]/30"
            >
              <option value="all">All Categories ({total})</option>
              {categories.map((cat) => (
                <optgroup key={cat.slug} label={cat.name}>
                  <option value={cat.slug}>All {cat.name} ({cat.totalItems})</option>
                  {cat.subcategories?.map((sub) => (
                    <option key={sub.slug} value={sub.slug}>
                      &nbsp;&nbsp;&bull; {sub.name} ({sub.itemCount})
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Action Notification Toast */}
      {actionMessage && (
        <div className="fixed top-20 right-6 z-50 bg-emerald-600 text-white font-bold px-4 py-2.5 rounded-xl shadow-lg text-sm border border-emerald-400 animate-fade-in flex items-center gap-2">
          <Check className="w-4 h-4 text-white" />
          <span>{actionMessage}</span>
        </div>
      )}

      {/* Main Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex-1 w-full">
        {loading ? (
          <div className="py-24 text-center">
            <Loader2 className="w-8 h-8 text-[#195799] animate-spin mx-auto mb-3" />
            <p className="text-sm font-semibold text-neutral-500">Loading catalogue products...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-2xl border border-neutral-200 p-8">
            <ImageIcon className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-neutral-800">No products found</h3>
            <p className="text-xs text-neutral-500 mt-1">Try another search term or category filter.</p>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="relative aspect-square bg-[#F7F4EE] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.code}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />

                    {/* Top Category Badge */}
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold">
                      {item.subcategoryName || item.categoryName}
                    </span>

                    {/* Delete button */}
                    <button
                      onClick={() => handleDeleteProduct(item.id, item.code)}
                      className="absolute top-2 right-2 w-7 h-7 rounded-full bg-red-600/80 hover:bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                      title="Delete Product"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="p-3 bg-white border-t border-neutral-100">
                    <p className="font-mono font-bold text-xs sm:text-sm text-neutral-900 tracking-tight">
                      {item.code}
                    </p>
                    <p className="text-[11px] text-neutral-500 mt-0.5 truncate">
                      {item.categoryName} {item.subcategoryName ? `• ${item.subcategoryName}` : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {total > limit && (
              <div className="mt-8 flex items-center justify-between border-t border-neutral-200 pt-5">
                <p className="text-xs text-neutral-500">
                  Showing {(page - 1) * limit + 1} - {Math.min(page * limit, total)} of {total} products
                </p>
                <div className="flex items-center gap-2">
                  <button
                    disabled={page <= 1}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    className="px-4 py-2 rounded-lg border border-neutral-300 text-xs font-semibold disabled:opacity-40 hover:bg-white"
                  >
                    Previous
                  </button>
                  <span className="text-xs font-bold text-neutral-700 px-2">Page {page}</span>
                  <button
                    disabled={page * limit >= total}
                    onClick={() => setPage((p) => p + 1)}
                    className="px-4 py-2 rounded-lg border border-neutral-300 text-xs font-semibold disabled:opacity-40 hover:bg-white"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 animate-scale-up">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
              <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-lg sm:text-xl font-bold text-neutral-900">
                Add New Product to Catalogue
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-neutral-400 hover:text-neutral-600 text-lg font-bold"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="space-y-4 pt-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Product Code *
                </label>
                <input
                  type="text"
                  placeholder="e.g. SB-1029 or ER-401"
                  value={newCode}
                  onChange={(e) => setNewCode(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm font-mono focus:ring-2 focus:ring-[#195799]/30 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Main Category *
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => {
                      setNewCategory(e.target.value)
                      const target = categories.find((c) => c.slug === e.target.value)
                      if (target && target.subcategories?.[0]) {
                        setNewSubcategory(target.subcategories[0].slug)
                      } else {
                        setNewSubcategory('')
                      }
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm font-semibold focus:outline-hidden"
                  >
                    {categories.map((c) => (
                      <option key={c.slug} value={c.slug}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Subcategory
                  </label>
                  <select
                    value={newSubcategory}
                    onChange={(e) => setNewSubcategory(e.target.value)}
                    disabled={availableSubcategories.length === 0}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm font-semibold focus:outline-hidden disabled:bg-neutral-100"
                  >
                    {availableSubcategories.length === 0 ? (
                      <option value="">(None)</option>
                    ) : (
                      availableSubcategories.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.name}
                        </option>
                      ))
                    )}
                  </select>
                </div>
              </div>

              {/* Image Upload Area */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Product Photo *
                </label>

                {newImageSrc ? (
                  <div className="relative w-full h-40 rounded-xl overflow-hidden border border-neutral-200 bg-neutral-50 mb-2">
                    <img src={newImageSrc} alt="Preview" className="w-full h-full object-contain" />
                    <button
                      type="button"
                      onClick={() => setNewImageSrc('')}
                      className="absolute top-2 right-2 px-2.5 py-1 rounded-md bg-black/70 text-white text-xs font-bold hover:bg-black"
                    >
                      Change Photo
                    </button>
                  </div>
                ) : (
                  <label className="border-2 border-dashed border-neutral-300 hover:border-[#195799] rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors bg-neutral-50/50 hover:bg-neutral-50">
                    {isUploading ? (
                      <Loader2 className="w-8 h-8 text-[#195799] animate-spin mb-2" />
                    ) : (
                      <Upload className="w-8 h-8 text-neutral-400 mb-2" />
                    )}
                    <span className="text-xs font-bold text-neutral-700">
                      {isUploading ? 'Uploading Image...' : 'Click to Upload Product Image'}
                    </span>
                    <span className="text-[11px] text-neutral-500 mt-1">PNG, JPG, WEBP up to 10MB</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      disabled={isUploading}
                      className="hidden"
                    />
                  </label>
                )}

                <div className="mt-2">
                  <span className="text-[11px] text-neutral-400 block mb-1">Or paste image URL directly:</span>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={newImageSrc}
                    onChange={(e) => setNewImageSrc(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-xs"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-5 py-2.5 rounded-xl border border-neutral-300 font-semibold text-xs text-neutral-700 hover:bg-neutral-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || isUploading}
                  className="px-6 py-2.5 rounded-xl bg-[#195799] hover:bg-[#124275] font-bold text-xs text-white shadow-md active:scale-98 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Saving to Catalogue...' : 'Add to Catalogue'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
