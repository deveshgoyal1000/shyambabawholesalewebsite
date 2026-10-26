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
      <div className="max-w-2xl lg:max-w-6xl mx-auto px-3.5 sm:px-6">
        {/* Section Heading & Subtitle matching Krishaz Wholesale exactly */}
        <ScrollReveal direction="up" distance={20} duration={650}>
          <div className="text-center mb-6 sm:mb-9">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[#195799] text-[26px] sm:text-[34px] md:text-[42px] font-normal tracking-[0.5px] leading-tight"
            >
              Shop By Categories
            </h2>

            {/* Gold Accent Divider Bar matching Krishaz */}
            <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#C9A84C] mx-auto my-2.5 sm:my-3.5"></div>

            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
              className="text-[#2C2C2C] text-[13px] sm:text-[14px] font-normal text-center leading-relaxed"
            >
              Explore our premium brass jewellery collections
            </p>
          </div>
        </ScrollReveal>

        {/* Categories Grid: Staggered individual ScrollReveal cards for high-end feel */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {categories.map((cat, idx) => (
            <ScrollReveal
              key={cat.slug}
              direction="up"
              distance={24}
              duration={600}
              delay={Math.min(idx * 60, 360)}
            >
              <Link
                href={`/collections/${cat.slug}`}
                className="group block rounded-xl overflow-hidden bg-white border border-[#EAE3D8] hover:border-[#C9A84C] shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(201,168,76,0.22)] active:scale-[0.98] card-hover-lift"
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

                {/* Category Name Line Box matching Krishaz */}
                <div className="px-3.5 py-3 sm:px-5 sm:py-4 bg-white border-t-2 border-[#C9A84C] flex items-center justify-between min-h-[48px] sm:min-h-[58px]">
                  <span
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                    className="text-[#2C2C2C] font-semibold text-[14px] sm:text-[16px] md:text-[17px] leading-tight group-hover:text-[#195799] transition-colors duration-250 truncate"
                  >
                    {cat.title}
                  </span>
                  <span className="text-[#C9A84C] text-[17px] sm:text-[20px] font-normal group-hover:translate-x-1.5 transition-transform duration-250 ease-out ml-1.5 shrink-0">
                    &rarr;
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* "View Full Catalog" Maroon Pill Button with ScrollReveal */}
        <ScrollReveal direction="up" distance={16} delay={200} duration={600}>
          <div className="mt-8 sm:mt-12 text-center">
            <Link
              href="/collections/all"
              className="btn-tactile inline-flex items-center justify-center py-3 sm:py-3.5 px-8 sm:px-10 rounded-full bg-[#195799] hover:bg-[#124378] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg"
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
