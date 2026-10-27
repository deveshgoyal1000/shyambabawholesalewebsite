'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Star, CheckCircle2 } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const reviews = [
    {
      id: 1,
      author: 'NoaDha Vlogs',
      location: 'Retailer, USA',
      tag: 'Air Cargo Delivery',
      text: "Farjih from USA, they have high quality jewelry, also most unique products. Also they're trustworthy you can buy from cross the world and they ship front of you door. No damage, no scam at all. Love it and will buy again.",
    },
    {
      id: 2,
      author: 'Baishali Bhowal',
      location: 'Boutique Owner, Delhi',
      tag: 'Regular Buyer',
      text: "I've received the earrings, and I must say the craftsmanship and quality are excellent. Thank you for delivering such beautiful pieces. I look forward to continuing our business together.",
    },
    {
      id: 3,
      author: 'Puja Virdi',
      location: 'Fashion Store, Gurugram',
      tag: 'Wholesale Buyer',
      text: 'I bought some jhumkas from Shyambaba and the courier reached on time without any fuss. The pieces are very beautiful with good quality. Must buy from them. Thank you team! 🙂',
    },
    {
      id: 4,
      author: 'Arya S.',
      location: 'Online Reseller, Bangalore',
      tag: 'Repeat Partner',
      text: 'Thank you so much, a big shout out to the Shyambaba team and all the artisans behind the jewellery! Fast shipping, excellent finishing, and prompt WhatsApp response. ❤️👍',
    },
    {
      id: 5,
      author: 'Ash Mehr',
      location: 'Exhibitions, Noida',
      tag: 'Verified Client',
      text: 'Jewellery is beautiful. Every piece is unique. Customer care is really very good. Had a very good experience shopping with Shyambaba Wholesale on video call.',
    },
    {
      id: 6,
      author: 'Noushin Rafiq',
      location: 'Boutique, Hyderabad',
      tag: 'Store Owner',
      text: 'Highly recommend them. Their service is really good, with great communication and on-time delivery. The items are amazing, every piece is super pretty, and the quality is amazing. Very affordable factory rates.',
    },
  ]

  // Auto-scrolling from right to left every 3.8s
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % reviews.length)
    }, 3800)
    return () => clearInterval(interval)
  }, [isPaused, reviews.length])

  // Synchronize scroll container whenever activeIdx changes
  useEffect(() => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const cards = container.querySelectorAll<HTMLElement>('.testimonial-card')
    if (cards[activeIdx]) {
      const card = cards[activeIdx]
      const scrollPos = card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2
      container.scrollTo({
        left: scrollPos,
        behavior: 'smooth',
      })
    }
  }, [activeIdx])

  const scrollToIdx = (idx: number) => {
    setActiveIdx(idx)
  }

  const scrollPrev = () => {
    setActiveIdx((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const scrollNext = () => {
    setActiveIdx((prev) => (prev + 1) % reviews.length)
  }

  // Handle manual touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true)
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      if (diff > 0) scrollNext()
      else scrollPrev()
    }
    touchStartX.current = null
    // Resume auto-scroll after a short delay
    setTimeout(() => setIsPaused(false), 2000)
  }

  return (
    <section className="py-12 md:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle matching Krishaz Wholesale */}
        <ScrollReveal direction="up" distance={20} duration={800}>
          <div className="text-center mb-8 sm:mb-12">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[28px] sm:text-[36px] md:text-[44px] font-normal text-[#121212] tracking-[0.5px] leading-tight mb-2 sm:mb-2.5"
            >
              What Our Retailers Say
            </h2>

            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
              className="text-[14px] sm:text-[15.5px] text-[#333333] font-normal text-center"
            >
              Trusted by 10,000+ Retailers Across India &amp; Worldwide
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel Wrapper */}
        <ScrollReveal direction="up" distance={22} delay={100} duration={800}>
          <div
            className="relative max-w-6xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Testimonials Auto-scroll & Swipe Track */}
            <div
              ref={scrollRef}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="flex gap-4 sm:gap-6 overflow-x-auto overflow-y-hidden py-3 px-1 scrollbar-none snap-x snap-mandatory"
              style={{
                WebkitOverflowScrolling: 'touch',
                overscrollBehaviorX: 'contain',
              }}
            >
              {reviews.map((r, i) => (
                <div
                  key={r.id}
                  onClick={() => scrollToIdx(i)}
                  className={`testimonial-card flex-shrink-0 w-[90vw] max-w-[460px] sm:w-[500px] md:w-[560px] lg:w-[600px] min-h-[220px] sm:min-h-[240px] snap-center bg-white rounded-2xl p-6 sm:p-7 border-2 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    activeIdx === i
                      ? 'border-[#195799] shadow-[0_8px_24px_rgba(25,87,153,0.14)] scale-[1.01]'
                      : 'border-[#D8CEBF] shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-[#C9A84C]'
                  }`}
                >
                  <div>
                    {/* Top Row: Google "G" Logo + Rating + Quotation Motif */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {/* Official Google "G" Icon */}
                        <svg
                          className="w-5 h-5 flex-shrink-0"
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
                        <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                          Google Verified
                        </span>
                      </div>

                      {/* Soft Quotation Marks SVG */}
                      <svg
                        className="w-5 h-5 text-[#C9A84C]/50"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* 5 Gold Stars */}
                    <div className="flex items-center gap-1 mb-3.5 text-[#C9A84C]">
                      {[...Array(5)].map((_, starIdx) => (
                        <Star key={starIdx} className="w-4 h-4 fill-current stroke-none" />
                      ))}
                    </div>

                    {/* Review Quote Body with comfortable line-height */}
                    <p className="text-[13.5px] sm:text-[14.5px] text-[#2C2C2C] font-normal leading-[1.7] italic">
                      &ldquo;{r.text}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer Details at bottom with divider */}
                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-[14px] sm:text-[15px] text-[#195799] block leading-tight">
                        {r.author}
                      </span>
                      <span className="text-[12px] text-neutral-500 font-normal block mt-0.5">
                        {r.location}
                      </span>
                    </div>

                    {/* Verified Badge */}
                    <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{r.tag}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sliding Indicator Dots (Auto-scroll progress) */}
            <div className="flex items-center justify-center gap-2 mt-7">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIdx(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIdx === i ? 'w-8 bg-[#195799]' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
