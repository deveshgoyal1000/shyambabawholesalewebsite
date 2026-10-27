import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingActionButtons from '@/components/FloatingActionButtons'
import CatalogImageGallery from '@/components/CatalogImageGallery'
import { findCategoryOrSubcategory, getAllCategories } from '@/lib/catalog'

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

  // View for /collections/all
  if (slug === 'all') {
    const allCategories = getAllCategories()
    return (
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#121212]">
        <Header />

        <main className="flex-1 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
            {/* Single Page Title */}
            <h1
              style={{ fontFamily: 'Georgia, serif' }}
              className="fade-in-stagger text-[26px] sm:text-[34px] md:text-[38px] font-normal text-center text-[#121212] mb-8 sm:mb-10"
            >
              All Categories
            </h1>

            {/* Grid of Main Categories */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 sm:gap-5">
              {allCategories.map((cat, idx) => (
                <Link
                  key={cat.slug}
                  href={`/collections/${cat.slug}`}
                  className="fade-in-stagger group block rounded-2xl overflow-hidden bg-white border-2 border-[#D4C7B4] hover:border-[#195799] shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(25,87,153,0.16)] transition-all duration-300 card-hover-lift"
                  style={{
                    animationDelay: `${idx * 45}ms`,
                    WebkitTapHighlightColor: 'transparent',
                  }}
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
                  </div>
                  <div className="p-3.5 sm:p-4 text-center bg-white border-t-2 border-[#D4C7B4]">
                    <h2
                      style={{ fontFamily: 'Georgia, serif' }}
                      className="text-[15px] sm:text-[17px] font-bold text-[#121212] group-hover:text-[#195799] transition-colors leading-tight"
                    >
                      {cat.name}
                    </h2>
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
  const displayName = type === 'subcategory' ? subcategory?.name : category.name

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#121212]">
      <Header />

      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          {/* One Single Category/Subcategory Name - Clean, No Breadcrumbs, No Extra Blog Text */}
          <h1
            style={{ fontFamily: 'Georgia, serif' }}
            className="fade-in-stagger text-[26px] sm:text-[34px] md:text-[38px] font-normal text-center text-[#121212] mb-8 sm:mb-10 tracking-[0.3px]"
          >
            {displayName}
          </h1>

          {/* VIEW 1: Main Category with Subcategories -> Subcategories Grid */}
          {type === 'category-with-subs' && category.subcategories && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 sm:gap-5">
              {category.subcategories.map((sub, idx) => (
                <Link
                  key={sub.slug}
                  href={`/collections/${category.slug}/${sub.slug}`}
                  className="fade-in-stagger group block rounded-2xl overflow-hidden bg-white border-2 border-[#D4C7B4] hover:border-[#195799] shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(25,87,153,0.16)] transition-all duration-300 card-hover-lift"
                  style={{
                    animationDelay: `${idx * 45}ms`,
                    WebkitTapHighlightColor: 'transparent',
                  }}
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
                  </div>

                  {/* Clean Subcategory Name Box */}
                  <div className="p-3.5 sm:p-4 text-center bg-white border-t-2 border-[#D4C7B4]">
                    <h2
                      style={{ fontFamily: 'Georgia, serif' }}
                      className="text-[14px] sm:text-[16px] font-bold text-[#121212] group-hover:text-[#195799] transition-colors leading-tight line-clamp-2"
                    >
                      {sub.name}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* VIEW 2: Direct Category (No Subcategories) -> 2-in-one-row Images Grid */}
          {type === 'category-direct' && category.images && (
            <CatalogImageGallery
              images={category.images}
              categoryName={category.name}
            />
          )}

          {/* VIEW 3: Direct Subcategory Page -> 2-in-one-row Images Grid */}
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
