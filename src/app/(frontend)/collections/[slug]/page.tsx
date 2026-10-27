import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingActionButtons from '@/components/FloatingActionButtons'
import CatalogImageGallery from '@/components/CatalogImageGallery'
import ScrollReveal from '@/components/ScrollReveal'
import { findCategoryOrSubcategory, getAllCategories } from '@/lib/catalog'
import { ArrowLeft, ChevronRight, Layers } from 'lucide-react'

export async function generateStaticParams() {
  const categories = getAllCategories()
  const params: { slug: string }[] = []

  categories.forEach((cat) => {
    params.push({ slug: cat.slug })
    cat.aliases.forEach((alias) => {
      params.push({ slug: alias })
    })
    if (cat.subcategories) {
      cat.subcategories.forEach((sub) => {
        params.push({ slug: sub.slug })
      })
    }
  })

  // Common aliases
  params.push({ slug: 'all' })

  return params
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // Special handle for /collections/all
  if (slug === 'all') {
    const allCategories = getAllCategories()
    return (
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#121212]">
        <Header />

        <main className="flex-1 py-6 sm:py-10">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center justify-between pb-4 border-b border-[#EAE3D8] mb-6 sm:mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-[#195799] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
              <div className="text-xs text-neutral-500">
                <Link href="/" className="hover:underline">Home</Link>
                <span className="mx-1.5">/</span>
                <span className="text-[#195799] font-semibold">All Categories</span>
              </div>
            </div>

            {/* Title Banner */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#9A7E2E] block mb-1">
                Jaipur Factory Wholesale Catalogue
              </span>
              <h1
                style={{ fontFamily: 'Georgia, serif' }}
                className="text-[28px] sm:text-[36px] md:text-[44px] font-normal text-[#121212] tracking-[0.5px] leading-tight"
              >
                Complete Jewellery Catalogue
              </h1>
              <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#C9A84C] mx-auto my-3"></div>
              <p className="text-[13px] sm:text-[14.5px] text-neutral-600">
                10 Exclusive Categories &bull; 1,060+ Live Designs &bull; Low MOV ₹3,000/-
              </p>
            </div>

            {/* Grid of Main Categories */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 sm:gap-5">
              {allCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/collections/${cat.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-white border-2 border-[#D4C7B4] hover:border-[#195799] shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(25,87,153,0.16)] transition-all duration-300 card-hover-lift"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F7F4EE]">
                    {cat.coverImage && (
                      <img
                        src={cat.coverImage}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      {cat.totalItems} Designs
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 text-center">
                    <h3
                      style={{ fontFamily: 'Georgia, serif' }}
                      className="text-[15px] sm:text-[17px] font-bold text-[#121212] group-hover:text-[#195799] transition-colors truncate"
                    >
                      {cat.name}
                    </h3>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">
                      {cat.hasSubcategories ? `${cat.subcategories?.length} Subcategories` : 'Direct Catalogue'}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>

        <Footer />
        <FloatingActionButtons />
      </div>
    )
  }

  const result = findCategoryOrSubcategory(slug)

  if (!result) {
    notFound()
  }

  const { type, category, subcategory } = result

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#121212]">
      <Header />

      <main className="flex-1 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between pb-4 border-b border-[#EAE3D8] mb-6 sm:mb-8">
            <Link
              href={type === 'subcategory' ? `/collections/${category.slug}` : '/'}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-[#195799] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{type === 'subcategory' ? `Back to ${category.name}` : 'Back to Home'}</span>
            </Link>

            <nav aria-label="Breadcrumb" className="text-xs text-neutral-500 truncate max-w-[240px] sm:max-w-none">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-1.5">/</span>
              {type === 'subcategory' ? (
                <>
                  <Link href={`/collections/${category.slug}`} className="hover:underline">
                    {category.name}
                  </Link>
                  <span className="mx-1.5">/</span>
                  <span className="text-[#195799] font-semibold">{subcategory?.name}</span>
                </>
              ) : (
                <span className="text-[#195799] font-semibold">{category.name}</span>
              )}
            </nav>
          </div>

          {/* Page Banner */}
          <ScrollReveal direction="up" distance={20} duration={650}>
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <span className="text-[10.5px] sm:text-xs font-bold uppercase tracking-widest text-[#9A7E2E] block mb-1">
                {type === 'subcategory'
                  ? `${category.name} Collection`
                  : type === 'category-with-subs'
                  ? 'Select Subcategory'
                  : 'Jaipur Factory Wholesale Catalogue'}
              </span>

              <h1
                style={{ fontFamily: 'Georgia, serif' }}
                className="text-[26px] sm:text-[34px] md:text-[42px] font-normal text-[#121212] tracking-[0.5px] leading-tight"
              >
                {type === 'subcategory' ? subcategory?.name : category.name}
              </h1>

              {/* Gold Accent Divider Bar */}
              <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#C9A84C] mx-auto my-3"></div>

              <p className="text-[13px] sm:text-[14.5px] text-neutral-600">
                {type === 'subcategory'
                  ? `${subcategory?.itemCount} Exclusive Designs &bull; Product Code Listed Below Each Item`
                  : type === 'category-with-subs'
                  ? `${category.subcategories?.length} Subcategories &bull; ${category.totalItems} Total Designs &bull; Click to explore`
                  : `${category.totalItems} Exclusive Designs &bull; Product Code Listed Below Each Item`}
              </p>
            </div>
          </ScrollReveal>

          {/* VIEW 1: Category WITH Subcategories -> Render Subcategory Selection Cards */}
          {type === 'category-with-subs' && category.subcategories && (
            <div>
              <div className="flex items-center gap-2 mb-4 px-1">
                <Layers className="w-4 h-4 text-[#195799]" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Subcategories ({category.subcategories.length})
                </span>
              </div>

              {/* Subcategories Grid: 2 columns on mobile, 3-4 on desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 sm:gap-5">
                {category.subcategories.map((sub, idx) => (
                  <ScrollReveal
                    key={sub.slug}
                    direction="up"
                    distance={20}
                    duration={600}
                    delay={Math.min(idx * 50, 250)}
                  >
                    <Link
                      href={`/collections/${category.slug}/${sub.slug}`}
                      className="group block rounded-2xl overflow-hidden bg-white border-2 border-[#D4C7B4] hover:border-[#195799] shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(25,87,153,0.16)] transition-all duration-300 card-hover-lift"
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      {/* Image Container 4:5 aspect ratio */}
                      <div className="relative aspect-[4/5] overflow-hidden bg-[#F7F4EE]">
                        {sub.coverImage && (
                          <img
                            src={sub.coverImage}
                            alt={sub.name}
                            loading={idx < 4 ? 'eager' : 'lazy'}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                        <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 rounded-full">
                          {sub.itemCount} Designs
                        </div>
                      </div>

                      {/* Card Content with Title & Clean Arrow */}
                      <div className="p-3 sm:p-4 bg-white border-t border-[#ECE6DC]">
                        <h3
                          style={{ fontFamily: 'Georgia, serif' }}
                          className="text-[14px] sm:text-[16px] font-bold text-[#121212] group-hover:text-[#195799] transition-colors leading-tight line-clamp-2"
                        >
                          {sub.name}
                        </h3>

                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-100">
                          <span className="text-[11px] sm:text-xs font-semibold text-[#195799]">
                            View Catalogue
                          </span>
                          <ChevronRight className="w-4 h-4 text-[#195799] group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}

          {/* VIEW 2: Direct Category (No Subcategories) -> Render 2-in-one-row Images Grid */}
          {type === 'category-direct' && category.images && (
            <CatalogImageGallery
              images={category.images}
              categoryName={category.name}
            />
          )}

          {/* VIEW 3: Direct Subcategory Page -> Render 2-in-one-row Images Grid */}
          {type === 'subcategory' && subcategory && (
            <CatalogImageGallery
              images={subcategory.images}
              categoryName={subcategory.name}
              parentCategoryName={category.name}
            />
          )}
        </div>
      </main>

      <Footer />
      <FloatingActionButtons />
    </div>
  )
}
