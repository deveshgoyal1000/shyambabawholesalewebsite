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
    <section id="categories" className="py-12 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-2xl lg:max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading & Subtitle matching Inspector - Font Finder:
            Heading: font-family: Georgia, serif; font-size: 42px; font-weight: 400; color: #6B1A2A; text-align: center
            Subtitle: font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 14px; font-weight: 400; color: #2C2C2C; text-align: center */}
        <ScrollReveal>
          <div className="text-center mb-7 sm:mb-9">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[#6B1A2A] text-3xl sm:text-[42px] font-normal tracking-normal leading-tight"
            >
              Shop By Categories
            </h2>
            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
              className="text-[#2C2C2C] text-[14px] font-normal mt-2 text-center"
            >
              Explore our premium brass jewellery collections
            </p>
          </div>
        </ScrollReveal>

        {/* Categories Grid matching Krishaz (2 cols mobile, 4 cols desktop) with Card Lift */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 md:gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/collections/${cat.slug}`}
                className="group block rounded-xl overflow-hidden bg-white border border-[#EAE3D8] hover:border-[#C9A84C] shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(201,168,76,0.22)] card-hover-lift"
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

                {/* Category Name Line Box matching Krishaz exactly:
                    border-top: 2px solid #C9A84C
                    padding: 14px-16px (mobile) to 18px-20px (desktop)
                    min-height: 52px (mobile) to 60px (desktop) */}
                <div className="px-4 py-4 sm:px-5 sm:py-5 bg-white border-t-2 border-[#C9A84C] flex items-center justify-between min-h-[52px] sm:min-h-[60px]">
                  <span
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                    className="text-[#2C2C2C] font-semibold text-[15px] sm:text-[17px] md:text-[18px] leading-tight group-hover:text-[#6B1A2A] transition-colors duration-300 truncate"
                  >
                    {cat.title}
                  </span>
                  <span className="text-[#C9A84C] text-[18px] sm:text-[20px] font-normal group-hover:translate-x-1.5 transition-transform duration-300 ease-out ml-2 shrink-0">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>

        {/* "View Full Catalog" Maroon Pill Button matching Krishaz */}
        <div className="mt-9 sm:mt-12 text-center">
          <Link
            href="/collections/all"
            className="btn-tactile w-full sm:w-auto max-w-xs inline-block py-3.5 px-10 rounded-full bg-[#6B1A2A] hover:bg-[#521320] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg text-center font-sans"
          >
            View Full Catalog
          </Link>
        </div>
      </div>
    </section>
  )
}
