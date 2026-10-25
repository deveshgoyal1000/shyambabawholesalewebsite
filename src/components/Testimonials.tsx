'use client'

import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
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
      const offset = direction === 'left' ? -300 : 300
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-10 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <ScrollReveal>
          <div className="text-center mb-6 sm:mb-9">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[26px] sm:text-[34px] md:text-[42px] font-normal text-[#6B1A2A] tracking-[0.5px] leading-tight"
            >
              What Our Retailers Say
            </h2>

            {/* Gold Accent Divider Bar matching Krishaz */}
            <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#C9A84C] mx-auto my-2.5 sm:my-3.5"></div>

            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
              className="text-[13px] sm:text-[14px] text-[#2C2C2C] font-normal text-center"
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
              className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-neutral-200 text-[#6B1A2A] items-center justify-center hover:bg-[#6B1A2A] hover:text-white transition-all active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-neutral-200 text-[#6B1A2A] items-center justify-center hover:bg-[#6B1A2A] hover:text-white transition-all active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Testimonials Swipe Container */}
            <div
              ref={scrollRef}
              className="flex gap-3.5 sm:gap-5 overflow-x-auto pb-4 scrollbar-none snap-x touch-pan-x"
            >
              {reviews.map((r) => (
                <div
                  key={r.id}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] snap-center bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] card-hover-lift flex flex-col justify-between"
                >
                  <div>
                    {/* 5 Gold Stars */}
                    <div className="flex items-center gap-1 mb-3 text-[#C9A84C]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    {/* Review Quote */}
                    <p className="text-xs sm:text-sm text-neutral-700 font-normal leading-relaxed italic mb-4">
                      &ldquo;{r.text}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer Details */}
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-xs sm:text-sm text-neutral-900 block">
                        {r.author}
                      </span>
                      <span className="text-[10px] sm:text-xs text-[#9A7E2E] font-medium block">
                        {r.location}
                      </span>
                    </div>
                    <span className="text-[10px] bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-medium border border-green-200/60">
                      Verified Buyer
                    </span>
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
