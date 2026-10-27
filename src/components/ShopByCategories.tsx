'use client'

import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function ShopByCategories() {
  const categories = [
    {
      title: 'Earrings',
      slug: 'earrings',
      image: '/images/catalog/earrings/meenakari-earrings/meenakari-earrings-001.jpg',
      count: '337 Designs',
      subtitle: '8 Subcategories',
    },
    {
      title: 'Necklaces',
      slug: 'necklaces',
      image: '/images/catalog/necklaces/delicate-ethnic-necklace/delicate-ethnic-necklace-001.jpg',
      count: '201 Designs',
      subtitle: '6 Subcategories',
    },
    {
      title: 'Bangles',
      slug: 'bangles',
      image: '/images/catalog/bangles/american-diamond-bangles/american-diamond-bangles-001.jpg',
      count: '49 Designs',
      subtitle: '2 Subcategories',
    },
    {
      title: 'Bracelets',
      slug: 'bracelets',
      image: '/images/catalog/bracelets/diamond-bracelets/diamond-bracelets-001.jpg',
      count: '138 Designs',
      subtitle: '3 Subcategories',
    },
    {
      title: 'Finger Rings',
      slug: 'rings',
      image: '/images/catalog/rings/diamond-rings/diamond-rings-001.jpg',
      count: '134 Designs',
      subtitle: '2 Subcategories',
    },
    {
      title: 'Kanchain',
      slug: 'kanchain',
      image: '/images/catalog/kanchain/kanchain-001.jpg',
      count: '11 Designs',
      subtitle: 'Direct Catalogue',
    },
    {
      title: 'Kundan Pendants',
      slug: 'kundan-pendants',
      image: '/images/catalog/kundan-pendants/kundan-pendants-001.jpg',
      count: '87 Designs',
      subtitle: 'Direct Catalogue',
    },
    {
      title: 'Kundan Tika',
      slug: 'kundan-tika',
      image: '/images/catalog/kundan-tika/kundan-tika-001.jpg',
      count: '55 Designs',
      subtitle: 'Direct Catalogue',
    },
    {
      title: 'Mangalsutra',
      slug: 'mangalsutra',
      image: '/images/catalog/mangalsutra/mangalsutra-001.jpg',
      count: '30 Designs',
      subtitle: 'Direct Catalogue',
    },
    {
      title: 'Tika & Earrings Combo',
      slug: 'tika-earrings-combo',
      image: '/images/catalog/tika-earrings-combo/tika-earrings-combo-001.jpg',
      count: '19 Designs',
      subtitle: 'Direct Catalogue',
    },
  ]

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
              Shop By Categories
            </h2>

            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
              className="text-[#2C2C2C] text-[14px] sm:text-[16px] font-normal text-center leading-relaxed mt-2.5 sm:mt-3"
            >
              Explore our 10 authentic wholesale brass jewellery collections
            </p>
          </div>
        </ScrollReveal>

        {/* Categories Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 md:gap-5">
          {categories.map((cat, idx) => (
            <ScrollReveal
              key={cat.slug}
              direction="up"
              distance={20}
              duration={850}
              delay={(idx % 2) * 80}
              threshold={0.18}
              rootMargin="0px 0px -60px 0px"
            >
              <Link
                href={`/collections/${cat.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white border-2 border-[#D4C7B4] hover:border-[#195799] shadow-[0_4px_18px_rgba(0,0,0,0.09)] hover:shadow-[0_8px_24px_rgba(25,87,153,0.18)] active:scale-[0.98] transition-all duration-300 card-hover-lift"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {/* Image Container with 4:5 aspect ratio matching Krishaz */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F7F4EE]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover card-img-zoom"
                    loading="lazy"
                  />
                  {/* Item count tag */}
                  <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full">
                    {cat.count}
                  </div>
                </div>

                {/* Category Name Line Box */}
                <div className="px-3.5 py-3 sm:px-4 sm:py-4 bg-white border-t-2 border-[#D4C7B4] flex items-center justify-between min-h-[64px] sm:min-h-[70px]">
                  <div className="flex-1 min-w-0 pr-1.5">
                    <span
                      style={{
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      }}
                      className="block text-[#121212] font-semibold text-[14px] sm:text-[16px] leading-tight group-hover:text-[#195799] transition-colors duration-200 truncate"
                    >
                      {cat.title}
                    </span>
                    <span className="text-[11px] text-neutral-500 block mt-0.5 font-normal">
                      {cat.subtitle}
                    </span>
                  </div>
                  <span className="text-[#C9A84C] group-hover:text-[#195799] text-[20px] sm:text-[22px] font-bold group-hover:translate-x-1 transition-all duration-200 shrink-0">
                    &rarr;
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* "View Full Catalog" Pill Button */}
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
