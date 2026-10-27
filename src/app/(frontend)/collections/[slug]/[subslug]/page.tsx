import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingActionButtons from '@/components/FloatingActionButtons'
import CatalogImageGallery from '@/components/CatalogImageGallery'
import ScrollReveal from '@/components/ScrollReveal'
import { getSubcategory, getAllCategories } from '@/lib/catalog'
import { ArrowLeft } from 'lucide-react'

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

      <main className="flex-1 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between pb-4 border-b border-[#EAE3D8] mb-6 sm:mb-8">
            <Link
              href={`/collections/${category.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-[#195799] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to {category.name}</span>
            </Link>

            <nav aria-label="Breadcrumb" className="text-xs text-neutral-500 truncate max-w-[240px] sm:max-w-none">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-1.5">/</span>
              <Link href={`/collections/${category.slug}`} className="hover:underline">
                {category.name}
              </Link>
              <span className="mx-1.5">/</span>
              <span className="text-[#195799] font-semibold">{subcategory.name}</span>
            </nav>
          </div>

          {/* Subcategory Title Banner */}
          <ScrollReveal direction="up" distance={20} duration={650}>
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <span className="text-[10.5px] sm:text-xs font-bold uppercase tracking-widest text-[#9A7E2E] block mb-1">
                {category.name} Collection
              </span>

              <h1
                style={{ fontFamily: 'Georgia, serif' }}
                className="text-[26px] sm:text-[34px] md:text-[42px] font-normal text-[#121212] tracking-[0.5px] leading-tight"
              >
                {subcategory.name}
              </h1>

              {/* Gold Accent Divider Bar */}
              <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#C9A84C] mx-auto my-3"></div>

              <p className="text-[13px] sm:text-[14.5px] text-neutral-600">
                {subcategory.itemCount} Exclusive Designs &bull; Product Code Listed Below Each Item &bull; Factory Rates
              </p>
            </div>
          </ScrollReveal>

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
