'use client'

import React, { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)

  const reviews = [
    {
      id: 1,
      author: 'NoaDha Vlogs',
      location: 'Retailer, USA',
      text: "Farjih from USA, they have high quality jewelry, also most unique products. Also they're trustworthy you can buy from cross the world and they ship front of you door. No damage, no scam at all. Love it and will buy again.",
    },
    {
      id: 2,
      author: 'Baishali Bhowal',
      location: 'Boutique Owner, Delhi',
      text: "I've received the earrings, and I must say the craftsmanship and quality are excellent. Thank you for delivering such beautiful pieces. I look forward to continuing our business together.",
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

  const scrollToIdx = (idx: number) => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const cards = container.querySelectorAll('.testimonial-card')
    if (cards[idx]) {
      (cards[idx] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
      setActiveIdx(idx)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    const next =
      direction === 'left'
        ? Math.max(0, activeIdx - 1)
        : Math.min(reviews.length - 1, activeIdx + 1)
    scrollToIdx(next)
  }

  const handleScroll = () => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const scrollLeft = container.scrollLeft
    const card = container.querySelector('.testimonial-card') as HTMLElement
    const cardWidth = card ? card.offsetWidth + 16 : 300
    const newIdx = Math.round(scrollLeft / cardWidth)
    setActiveIdx(Math.min(Math.max(newIdx, 0), reviews.length - 1))
  }

  return (
    <section className="py-10 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle matching Krishaz exactly */}
        <ScrollReveal direction="up" distance={20} duration={800}>
          <div className="text-center mb-7 sm:mb-10">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[26px] sm:text-[34px] md:text-[42px] font-normal text-[#121212] tracking-[0.5px] leading-tight mb-2 sm:mb-2.5"
            >
              What Our Retailers Say
            </h2>

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
        <ScrollReveal direction="up" distance={22} delay={100} duration={800}>
          <div className="relative max-w-5xl mx-auto">
            {/* Desktop Side Navigation Arrows */}
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-[#C9A84C]/40 text-[#195799] items-center justify-center hover:bg-[#195799] hover:text-white transition-all active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-[#C9A84C]/40 text-[#195799] items-center justify-center hover:bg-[#195799] hover:text-white transition-all active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Testimonials Swipe Container: unlocked horizontal movement with CSS snap */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-4 sm:gap-6 overflow-x-auto overflow-y-hidden pb-4 scrollbar-none snap-x snap-mandatory"
              style={{
                WebkitOverflowScrolling: 'touch',
                overscrollBehaviorX: 'contain',
                touchAction: 'pan-x pan-y',
              }}
            >
              {reviews.map((r) => (
                <div
                  key={r.id}
                  className="testimonial-card flex-shrink-0 w-[84vw] max-w-[320px] sm:w-[335px] snap-center bg-white rounded-2xl p-6 sm:p-7 border border-[#E5DAC1] shadow-[0_2px_12px_rgba(0,0,0,0.03)] card-hover-lift flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Google "G" Logo & Pale Quotation Mark Motif */}
                    <div className="flex items-center justify-between mb-4">
                      {/* Full-Color Official Google "G" Logo */}
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        aria-label="Google Review"
                      >
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.36 7.33 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.27 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>

                      {/* Soft Quotation Marks SVG */}
                      <svg
                        className="w-5 h-5 text-[#E8DFC9]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* 5 Gold Stars */}
                    <div className="flex items-center gap-1 mb-4 text-[#C9A84C]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current stroke-none" />
                      ))}
                    </div>

                    {/* Review Quote Body in Italic */}
                    <p className="text-[12.5px] sm:text-[13.5px] text-[#4A4A4A] font-normal leading-[1.65] italic mb-6">
                      {r.text}
                    </p>
                  </div>

                  {/* Reviewer Details matching Krishaz: Reddish-Maroon Bold Name + Sub-label */}
                  <div className="pt-2">
                    <span className="font-bold text-xs sm:text-sm text-[#195799] block leading-tight">
                      {r.author}
                    </span>
                    <span className="text-[11px] sm:text-xs text-neutral-500 font-normal block mt-0.5">
                      {r.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Navigation Arrows & Indicators Bar */}
            <div className="flex items-center justify-between mt-3 px-2 md:hidden">
              <button
                onClick={() => scroll('left')}
                disabled={activeIdx === 0}
                className="w-8 h-8 rounded-full bg-white border border-[#C9A84C]/50 text-[#195799] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center shadow-xs active:scale-95 transition-all"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Indicator Pills */}
              <div className="flex items-center gap-1.5">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToIdx(i)}
                    aria-label={`Go to review ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIdx === i ? 'w-6 bg-[#C9A84C]' : 'w-2 bg-neutral-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => scroll('right')}
                disabled={activeIdx === reviews.length - 1}
                className="w-8 h-8 rounded-full bg-white border border-[#C9A84C]/50 text-[#195799] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center shadow-xs active:scale-95 transition-all"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
