'use client'

import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export interface CategoryItem {
  title: string
  slug: string
  image: string
}

export const DEFAULT_CATEGORIES: CategoryItem[] = [
  {
    title: 'Premium Jewellery',
    slug: 'premium-jewellery',
    image: '/images/categories/cat-premium-jewellery.jpg',
  },
  {
    title: 'Normal Jewellery',
    slug: 'normal-jewellery',
    image: '/images/categories/cat-normal-jewellery.jpg',
  },
]

export interface ShopByCategoriesProps {
  heading?: string
  subheading?: string
  categories?: CategoryItem[]
}

export default function ShopByCategories({
  heading = 'Explore Catalog',
  subheading = 'Explore our premium brass jewellery collections',
  categories = DEFAULT_CATEGORIES,
}: ShopByCategoriesProps) {
  const displayCategories =
    categories && categories.length > 0 ? categories : DEFAULT_CATEGORIES

  const isEditor =
    typeof window !== 'undefined' &&
    (window.location.pathname.startsWith('/editor') ||
      window.location.search.includes('editor=true') ||
      (typeof window.parent !== 'undefined' && window.parent !== window))

  const dispatchEditorEvent = (name: string, detail: any) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(name, { detail }))
      try {
        if (window.parent && window.parent !== window) {
          window.parent.dispatchEvent(new CustomEvent(name, { detail }))
        }
      } catch (e) {}
    }
  }

  const handleCategoryClick = (e: React.MouseEvent, slug: string) => {
    if (isEditor) {
      e.preventDefault()
      dispatchEditorEvent('sb_open_collection_editor', { slug })
      return
    }
    try {
      if (typeof window !== 'undefined') {
        const path = window.location.pathname
        sessionStorage.setItem(`sb_scroll_${path}`, window.scrollY.toString())
        sessionStorage.setItem('sb_last_anchor', 'categories')
      }
    } catch (e) {}
  }

  return (
    <section id="categories" className="py-10 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-2xl lg:max-w-6xl mx-auto px-3 sm:px-6">
        {/* Section Heading & Subtitle matching Krishaz Wholesale exactly */}
        <ScrollReveal direction="up" distance={20} duration={850} threshold={0.15}>
          <div className="text-center mb-6 sm:mb-9">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[#121212] text-[28px] sm:text-[34px] md:text-[42px] font-normal tracking-[0.5px] leading-tight"
            >
              {heading || 'Explore Catalog'}
            </h2>

            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
              className="text-[#2C2C2C] text-[14px] sm:text-[16px] font-normal text-center leading-relaxed mt-2.5 sm:mt-3"
            >
              {subheading || 'Explore our premium brass jewellery collections'}
            </p>
          </div>
        </ScrollReveal>

        {/* Categories Grid: Centered 2-column layout when 2 categories, responsive grid otherwise */}
        <div
          className={
            displayCategories.length === 2
              ? 'grid grid-cols-2 max-w-3xl mx-auto gap-3.5 sm:gap-6'
              : 'grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 md:gap-5'
          }
        >
          {displayCategories.map((cat, idx) => {
            const href = cat.slug?.startsWith('http') || cat.slug?.startsWith('/')
              ? cat.slug
              : `/collections/${cat.slug || ''}`

            return (
              <ScrollReveal
                key={cat.slug || idx}
                direction="none"
                distance={0}
                duration={600}
                delay={idx * 60}
                threshold={0.12}
                rootMargin="0px 0px -40px 0px"
              >
                {cat.slug === 'premium-jewellery' ? (
                  <div className="relative h-full">
                    {/* Floating Editor Controls on Top of Card */}
                    {isEditor && (
                      <div className="absolute top-2.5 left-2.5 right-2.5 z-30 flex items-center justify-between gap-1 pointer-events-auto">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            dispatchEditorEvent('sb_open_collection_editor', { slug: cat.slug })
                          }}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/85 hover:bg-black text-amber-300 hover:text-amber-200 border border-amber-400/50 text-[10.5px] font-bold shadow-md backdrop-blur-xs transition-all active:scale-95 cursor-pointer"
                          title="Enter & Edit this page in Visual Editor"
                        >
                          <span>📂 Enter &amp; Edit Page ↗</span>
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            dispatchEditorEvent('sb_open_bulk_upload', { categorySlug: cat.slug })
                          }}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 text-[10.5px] font-bold shadow-md transition-all active:scale-95 cursor-pointer"
                          title="Bulk Upload Products"
                        >
                          <span>⚡ Bulk Upload</span>
                        </button>
                      </div>
                    )}
                    <Link
                      href={href}
                      onClick={(e) => handleCategoryClick(e, cat.slug)}
                      className="group relative flex flex-col justify-between h-full rounded-2xl overflow-hidden bg-[#8B0000] border-2 border-red-400/60 shadow-[0_6px_22px_rgba(139,0,0,0.25)] hover:shadow-[0_12px_32px_rgba(185,28,28,0.35)] active:scale-[0.98] transition-all duration-300 p-3.5 sm:p-5 text-center select-none"
                      style={{ WebkitTapHighlightColor: 'transparent', minHeight: '100%' }}
                    >
                      {/* Background ruby glow */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.18)_0%,transparent_75%)] pointer-events-none" />

                      {/* Center Big Bold Typography */}
                      <div className="my-auto py-8 sm:py-12 z-10 px-1">
                        <span
                          style={{ fontFamily: 'Georgia, serif' }}
                          className="block text-white text-[20px] xs:text-[23px] sm:text-[30px] md:text-[34px] font-bold leading-tight tracking-tight drop-shadow-md"
                        >
                          PREMIUM
                        </span>
                        <span
                          style={{ fontFamily: 'Georgia, serif' }}
                          className="block text-red-100 text-[15px] xs:text-[17px] sm:text-[22px] md:text-[25px] font-normal tracking-wider mt-1"
                        >
                          JEWELLERY
                        </span>
                      </div>

                      {/* Bottom Action Footer */}
                      <div className="w-full pt-3 border-t border-white/20 flex items-center justify-between z-10 text-white transition-colors">
                        <span className="text-[11px] sm:text-[13px] font-semibold tracking-wide">
                          View Catalogue
                        </span>
                        <span className="text-[18px] sm:text-[20px] font-bold group-hover:translate-x-1.5 transition-transform">
                          &rarr;
                        </span>
                      </div>
                    </Link>
                  </div>
                ) : cat.slug === 'normal-jewellery' ? (
                  <div className="relative h-full">
                    {/* Floating Editor Controls on Top of Card */}
                    {isEditor && (
                      <div className="absolute top-2.5 left-2.5 right-2.5 z-30 flex items-center justify-between gap-1 pointer-events-auto">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            dispatchEditorEvent('sb_open_collection_editor', { slug: cat.slug })
                          }}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/85 hover:bg-black text-amber-300 hover:text-amber-200 border border-amber-400/50 text-[10.5px] font-bold shadow-md backdrop-blur-xs transition-all active:scale-95 cursor-pointer"
                          title="Enter & Edit this page in Visual Editor"
                        >
                          <span>📂 Enter &amp; Edit Page ↗</span>
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            dispatchEditorEvent('sb_open_bulk_upload', { categorySlug: cat.slug })
                          }}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 text-[10.5px] font-bold shadow-md transition-all active:scale-95 cursor-pointer"
                          title="Bulk Upload Products"
                        >
                          <span>⚡ Bulk Upload</span>
                        </button>
                      </div>
                    )}
                    <Link
                      href={href}
                      onClick={(e) => handleCategoryClick(e, cat.slug)}
                      className="group relative flex flex-col justify-between h-full rounded-2xl overflow-hidden bg-[#1E3A8A] border-2 border-blue-400/60 shadow-[0_6px_22px_rgba(30,58,138,0.25)] hover:shadow-[0_12px_32px_rgba(59,130,246,0.3)] active:scale-[0.98] transition-all duration-300 p-3.5 sm:p-5 text-center select-none"
                      style={{ WebkitTapHighlightColor: 'transparent', minHeight: '100%' }}
                    >
                      {/* Background cyan/blue radial glow */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(96,165,250,0.22)_0%,transparent_75%)] pointer-events-none" />

                      {/* Center Big Bold Typography */}
                      <div className="my-auto py-8 sm:py-12 z-10 px-1">
                        <span
                          style={{ fontFamily: 'Georgia, serif' }}
                          className="block text-white text-[20px] xs:text-[23px] sm:text-[30px] md:text-[34px] font-bold leading-tight tracking-tight drop-shadow-md"
                        >
                          NORMAL
                        </span>
                        <span
                          style={{ fontFamily: 'Georgia, serif' }}
                          className="block text-blue-200 text-[15px] xs:text-[17px] sm:text-[22px] md:text-[25px] font-normal tracking-wider mt-1"
                        >
                          JEWELLERY
                        </span>
                      </div>

                      {/* Bottom Action Footer */}
                      <div className="w-full pt-3 border-t border-white/20 flex items-center justify-between z-10 text-white transition-colors">
                        <span className="text-[11px] sm:text-[13px] font-semibold tracking-wide">
                          View Catalogue
                        </span>
                        <span className="text-[18px] sm:text-[20px] font-bold group-hover:translate-x-1.5 transition-transform">
                          &rarr;
                        </span>
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div className="relative h-full">
                    {/* Floating Editor Controls on Top of Card */}
                    {isEditor && (
                      <div className="absolute top-2.5 left-2.5 right-2.5 z-30 flex items-center justify-between gap-1 pointer-events-auto">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            window.dispatchEvent(
                              new CustomEvent('sb_open_collection_editor', { detail: { slug: cat.slug } })
                            )
                          }}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/85 hover:bg-black text-amber-300 hover:text-amber-200 border border-amber-400/50 text-[10.5px] font-bold shadow-md backdrop-blur-xs transition-all active:scale-95 cursor-pointer"
                        >
                          <span>📂 Enter &amp; Edit ↗</span>
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            window.dispatchEvent(
                              new CustomEvent('sb_open_bulk_upload', { detail: { categorySlug: cat.slug } }))
                          }}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 text-[10.5px] font-bold shadow-md transition-all active:scale-95 cursor-pointer"
                        >
                          <span>⚡ Bulk</span>
                        </button>
                      </div>
                    )}
                    <Link
                      href={href}
                      onClick={(e) => handleCategoryClick(e, cat.slug)}
                      className="group block rounded-2xl overflow-hidden bg-white border-2 border-[#D4C7B4] hover:border-[#C4B7A4] shadow-[0_4px_18px_rgba(0,0,0,0.07)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)] active:scale-[0.98] transition-all duration-300 card-hover-lift"
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      <div className="relative aspect-[4/5] overflow-hidden bg-[#F7F4EE]">
                        <img
                          src={cat.image || '/images/categories/cat-premium-earrings.jpg'}
                          alt={cat.title || 'Category'}
                          className="w-full h-full object-cover card-img-zoom"
                          loading="lazy"
                        />
                      </div>

                      <div className="px-3.5 py-3.5 sm:px-5 sm:py-5 md:py-6 bg-white border-t-2 border-[#D4C7B4] flex items-center justify-between min-h-[70px] sm:min-h-[76px] md:min-h-[82px]">
                        <div className="flex-1 min-w-0 pr-1.5">
                          <span
                            style={{
                              fontFamily:
                                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            }}
                            className="block text-[#121212] font-semibold text-[15px] sm:text-[17px] md:text-[18.5px] leading-tight sm:leading-snug transition-colors duration-200"
                          >
                            {cat.title && cat.title.endsWith('Earrings') ? (
                              <>
                                <span className="block">{cat.title.replace(/\s*Earrings$/, '')}</span>
                                <span className="block sm:inline sm:ml-1 text-[14px] sm:text-[17px] md:text-[18.5px] text-neutral-700 font-medium">
                                  Earrings
                                </span>
                              </>
                            ) : (
                              <span className="block">{cat.title || 'Category'}</span>
                            )}
                          </span>
                        </div>
                        <span className="text-[#C9A84C] group-hover:text-[#9A7E2E] text-[22px] sm:text-[24px] font-bold group-hover:translate-x-1.5 transition-all duration-200 ml-1.5 shrink-0">
                          &rarr;
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
              </ScrollReveal>
            )
          })}
        </div>

        {/* "View Full Catalog" Pill Button - Expanded width matching the two categories' end points */}
        <ScrollReveal direction="up" distance={18} delay={100} duration={800} threshold={0.15}>
          <div className="mt-8 sm:mt-12 text-center w-full">
            <Link
              href="/collections/all"
              className="btn-tactile w-full sm:w-auto inline-flex items-center justify-center py-4 sm:py-4.5 px-8 sm:px-14 rounded-full bg-[#195799] hover:bg-[#124378] text-white font-bold text-[15px] sm:text-[16px] tracking-wider uppercase shadow-lg hover:shadow-xl active:scale-[0.98] transition-all text-center"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              View Full Catalog &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
