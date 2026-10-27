'use client'

import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function ShopByCategories() {
  const categories = [
    {
      title: 'Premium Earrings',
      slug: 'premium-earrings',
      image: '/images/categories/cat-premium-earrings.jpg',
    },
    {
      title: 'Silver Earrings',
      slug: 'silver-earrings',
      image: '/images/categories/cat-silver-earrings.jpg',
    },
    {
      title: 'Studs',
      slug: 'studs',
      image: '/images/categories/cat-studs.jpg',
    },
    {
      title: 'Kundan',
      slug: 'kundan-earrings',
      image: '/images/categories/cat-kundan.jpg',
    },
    {
      title: 'Rajwadi',
      slug: 'rajwadi',
      image: '/images/categories/cat-rajwadi.jpg',
    },
    {
      title: 'Ear-Chain',
      slug: 'ear-chain',
      image: '/images/categories/cat-ear-chain.jpg',
    },
    {
      title: 'Anti Tarnish',
      slug: 'anti-tarnish',
      image: '/images/categories/cat-anti-tarnish.jpg',
    },
    {
      title: 'New Arrivals',
      slug: 'new-arrivals',
      image: '/images/categories/cat-new-arrivals.jpg',
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
              Explore our premium brass jewellery collections
            </p>
          </div>
        </ScrollReveal>

        {/* Categories Grid: Triggers strictly when each row scrolls into active view on mobile */}
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
                {/* Image Container with 4:5 aspect ratio matching Krishaz (padding-bottom: 125%) */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F7F4EE]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover card-img-zoom"
                    loading="lazy"
                  />
                </div>

                {/* Category Name Line Box - Crisp visible border, multi-line wrap with Earrings on new line */}
                <div className="px-3.5 py-3.5 sm:px-5 sm:py-5 md:py-6 bg-white border-t-2 border-[#D4C7B4] flex items-center justify-between min-h-[70px] sm:min-h-[76px] md:min-h-[82px]">
                  <div className="flex-1 min-w-0 pr-1.5">
                    <span
                      style={{
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      }}
                      className="block text-[#121212] font-semibold text-[15px] sm:text-[17px] md:text-[18.5px] leading-tight sm:leading-snug group-hover:text-[#195799] transition-colors duration-200"
                    >
                      {cat.title.endsWith('Earrings') ? (
                        <>
                          <span className="block">{cat.title.replace(/\s*Earrings$/, '')}</span>
                          <span className="block sm:inline sm:ml-1 text-[14px] sm:text-[17px] md:text-[18.5px] text-neutral-700 font-medium">
                            Earrings
                          </span>
                        </>
                      ) : (
                        <span className="block">{cat.title}</span>
                      )}
                    </span>
                  </div>
                  <span className="text-[#C9A84C] group-hover:text-[#195799] text-[22px] sm:text-[24px] font-bold group-hover:translate-x-1.5 transition-all duration-200 ml-1.5 shrink-0">
                    &rarr;
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
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
