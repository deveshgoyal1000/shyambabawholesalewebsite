import React from 'react'
import { notFound } from 'next/navigation'
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
      <Header />

      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          {/* One Single Subcategory Name - Clean, No Breadcrumbs, No Extra Blog Text */}
          <h1
            style={{ fontFamily: 'Georgia, serif' }}
            className="fade-in-stagger text-[26px] sm:text-[34px] md:text-[38px] font-normal text-center text-[#121212] mb-8 sm:mb-10 tracking-[0.3px]"
          >
            {subcategory.name}
          </h1>

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
