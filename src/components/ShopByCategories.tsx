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
        <ScrollReveal direction="up" distance={20} duration={850} threshold={0.15}>
          <div className="text-center mb-7 sm:mb-10">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[#121212] text-[28px] sm:text-[36px] md:text-[42px] font-normal tracking-[0.5px] leading-tight"
            >
              Shop By Categories
            </h2>

            {/* Gold Accent Divider Bar matching Krishaz */}
            <div className="w-[64px] sm:w-[80px] h-[2px] bg-[#C9A84C] mx-auto my-3 sm:my-3.5"></div>

            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
              className="text-[#2C2C2C] text-[15px] sm:text-[16px] font-normal text-center leading-relaxed"
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
                <div className="px-4 py-3.5 sm:px-5 sm:py-4 bg-white border-t-2 border-[#C9A84C] flex items-center justify-between min-h-[52px] sm:min-h-[58px]">
                  <span
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                    className="text-[#2C2C2C] font-semibold text-[15px] sm:text-[16px] md:text-[17px] leading-tight group-hover:text-[#195799] transition-colors duration-250 truncate"
                  >
                    {cat.title}
                  </span>
                  <span className="text-[#C9A84C] text-[18px] sm:text-[20px] font-normal group-hover:translate-x-1.5 transition-transform duration-250 ease-out ml-1.5 shrink-0">
                    &rarr;
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* "View Full Catalog" Pill Button with ScrollReveal */}
        <ScrollReveal direction="up" distance={18} delay={100} duration={800} threshold={0.15}>
          <div className="mt-9 sm:mt-12 text-center">
            <Link
              href="/collections/all"
              className="btn-tactile inline-flex items-center justify-center py-3.5 sm:py-4 px-8 sm:px-10 rounded-full bg-[#195799] hover:bg-[#124378] text-white font-semibold text-[13px] sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg"
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
