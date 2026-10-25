'use client'

import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const reviews = [
    {
      id: 1,
      author: 'Farjih',
      location: 'Retailer, USA',
      text: "Farjih from USA, they have high quality jewelry, also most unique products. Also they're trustworthy you can buy from cross the world and they ship front of you door. No damage, no scam at all. Love it and will buy again.",
    },
    {
      id: 2,
      author: 'Baishali Bhowal',
      location: 'Boutique Owner, Delhi',
      text: "I've received the earrings, and must say the craftsmanship and quality are excellent. Thank you for delivering beautiful pieces. I look forward to continuing our business together.",
    },
    {
      id: 3,
      author: 'Puja Virdi',
      location: 'Fashion Store, Gurugram',
      text: 'I bought some jhumkas from Shyambaba and the courier reached on time without any fuss. The pieces are very beautiful with good quality. Must buy from them. Thank you team! 🙂',
    },
    {
      id: 4,
      author: 'Arya S.',
      location: 'Online Seller, Bangalore',
      text: 'Thank you so much, a big shout out to the Shyambaba team and all the artisans behind the jewellery! Fast shipping and excellent finish. ❤️👍',
    },
    {
      id: 5,
      author: 'Ash Mehr',
      location: 'Exhibitions, Noida',
      text: 'Jewellery is beautiful. Every piece is unique. Customer care is really very good. Had a very good experience shopping with Shyambaba Wholesale.',
    },
    {
      id: 6,
      author: 'Noushin Rafiq',
      location: 'Boutique, Hyderabad',
      text: 'Highly recommend them. Their service is really good, with great communication and on-time delivery. The items are amazing, every piece is super pretty, and the quality is amazing. Very affordable factory rates.',
    },
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -320 : 320
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-12 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-3xl sm:text-[42px] font-normal text-[#6B1A2A] tracking-normal leading-tight"
            >
              What Our Retailers Say
            </h2>
            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
              className="text-[14px] text-[#2C2C2C] font-normal mt-2 text-center"
            >
              Trusted by 10,000+ Retailers Across India &amp; Worldwide
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel Wrapper */}
        <ScrollReveal delay={100}>
          <div className="relative max-w-5xl mx-auto">
            {/* Navigation Buttons (Desktop) */}
            <button
              onClick={() => scroll('left')}
              className="btn-tactile hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-[#EFEAE2] items-center justify-center text-neutral-600 hover:text-[#6B1A2A] hover:border-[#6B1A2A]"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scroll('right')}
              className="btn-tactile hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-[#EFEAE2] items-center justify-center text-neutral-600 hover:text-[#6B1A2A] hover:border-[#6B1A2A]"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Reviews Scrollable Container */}
            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory px-1"
            >
              {reviews.map((r) => (
                <div
                  key={r.id}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] snap-center bg-white rounded-2xl p-6 sm:p-7 border border-[#EFEAE2] shadow-[0_2px_8px_rgba(0,0,0,0.03)] card-hover-lift flex flex-col justify-between text-left relative"
                >
                  <div>
                    {/* Top: Google 'G' Logo + Quote Mark */}
                    <div className="flex items-center justify-between mb-3">
                    {/* Google Multi-Color SVG Logo */}
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>

                    {/* Subtle Quote Icon */}
                    <span className="font-serif text-3xl text-[#EADBCA] select-none leading-none">
                      ”
                    </span>
                  </div>

                  {/* 5 Golden Stars matching screenshot */}
                  <div className="flex gap-1 text-[#C9A84C] text-sm mb-3">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                    {r.text}
                  </p>
                </div>

                {/* Author Info matching screenshot */}
                <div className="pt-5 mt-4 border-t border-[#F5EFE6]">
                  <h4 className="font-serif font-bold text-sm sm:text-base text-neutral-900">
                    {r.author}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-500 mt-0.5">
                    {r.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
