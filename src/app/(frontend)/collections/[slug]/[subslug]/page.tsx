import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingActionButtons from '@/components/FloatingActionButtons'
import CatalogImageGallery from '@/components/CatalogImageGallery'
import { getSubcategory, getAllCategories } from '@/lib/catalog'

export async function generateStaticParams() {
  const categories = getAllCategories()
  const params: { slug: string; subslug: string }[] = []

  categories.forEach((cat) => {
    if (cat.subcategories) {
      cat.subcategories.forEach((sub) => {
        params.push({ slug: cat.slug, subslug: sub.slug })
        // Include aliases
        cat.aliases.forEach((alias) => {
          params.push({ slug: alias, subslug: sub.slug })
        })
      })
    }
  })

  return params
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ slug: string; subslug: string }>
}) {
  const { slug, subslug } = await params
  const result = getSubcategory(slug, subslug)

  if (!result) {
    notFound()
  }

  const { category, subcategory } = result

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#121212]">
      <AnnouncementBar />
      <Header />

      {/* Title Banner with Theme Blue Background */}
      <div className="w-full bg-[#195799] border-b-2 border-[#C9A84C] py-3.5 sm:py-5 px-4 text-center shadow-sm relative">
        <div className="max-w-7xl mx-auto flex items-center justify-center relative">
          <Link
            href={`/collections/${category.slug}`}
            className="absolute left-0 inline-flex items-center gap-1 text-white/90 hover:text-white transition-colors py-1 px-2 rounded-lg hover:bg-white/10 text-xs sm:text-sm font-semibold select-none"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Back</span>
          </Link>
          <h1
            style={{ fontFamily: 'Georgia, serif' }}
            className="fade-in-stagger text-[20px] sm:text-[26px] md:text-[30px] font-bold text-white tracking-wide"
          >
            {subcategory.name}
          </h1>
        </div>
      </div>

      <main className="flex-1 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          {/* 2-in-one-row Images Gallery */}
          <CatalogImageGallery
            images={subcategory.images}
            categoryName={subcategory.name}
            parentCategoryName={category.name}
          />
        </div>
      </main>

      <Footer />
      <FloatingActionButtons />
    </div>
  )
}
