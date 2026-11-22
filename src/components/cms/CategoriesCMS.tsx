'use client'

import React, { useState, useEffect } from 'react'
import { FolderTree, ExternalLink, Layers, Sparkles, RefreshCw, Loader2 } from 'lucide-react'

export default function CategoriesCMS() {
  const [categories, setCategories] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchCategories = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/catalog?limit=1')
      const data = await res.json()
      if (data.success && data.categories) {
        setCategories(data.categories)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className="w-full h-full flex flex-col bg-[#FAF8F5] text-neutral-900 overflow-y-auto">
      {/* Top Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-5 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h2 style={{ fontFamily: 'Georgia, serif' }} className="text-xl sm:text-2xl font-bold text-neutral-900">
              Categories &amp; Collections Manager
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
              Organize your jewellery inventory into collections, subcategories &amp; wholesale filters.
            </p>
          </div>
          <button
            onClick={() => fetchCategories()}
            className="p-2.5 rounded-xl border border-neutral-300 hover:bg-neutral-100 text-neutral-700 transition-colors"
            title="Refresh"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 flex-1 w-full">
        {loading ? (
          <div className="py-24 text-center">
            <Loader2 className="w-8 h-8 text-[#195799] animate-spin mx-auto mb-3" />
            <p className="text-sm font-semibold text-neutral-500">Loading categories...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {categories.map((cat) => (
              <div
                key={cat.slug}
                className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs"
              >
                <div className="p-5 sm:p-6 bg-gradient-to-r from-neutral-50 to-white border-b border-neutral-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#195799]/10 text-[#195799] flex items-center justify-center shrink-0">
                      <FolderTree className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                        <span>{cat.name}</span>
                        <span className="text-xs font-mono font-normal text-neutral-400">({cat.slug})</span>
                      </h3>
                      <p className="text-xs text-neutral-500">
                        Total items: <strong className="text-neutral-800">{cat.totalItems}</strong> &bull; Subcategories: <strong className="text-neutral-800">{cat.subcategories?.length || 0}</strong>
                      </p>
                    </div>
                  </div>

                  <a
                    href={`/collections/${cat.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold self-start sm:self-auto transition-colors"
                  >
                    <span>View on Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Subcategories Grid */}
                {cat.subcategories && cat.subcategories.length > 0 && (
                  <div className="p-5 sm:p-6 bg-white">
                    <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">
                      Subcategories / Design Lines
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {cat.subcategories.map((sub: any) => (
                        <div
                          key={sub.slug}
                          className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:bg-neutral-50 transition-colors flex items-center justify-between"
                        >
                          <div>
                            <p className="font-bold text-xs text-neutral-900">{sub.name}</p>
                            <p className="text-[11px] text-neutral-500 font-mono mt-0.5">{sub.slug}</p>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-[11px] font-bold text-[#195799]">
                            {sub.itemCount} items
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
