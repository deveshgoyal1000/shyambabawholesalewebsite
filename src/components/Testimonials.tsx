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

  // Synchronize scroll container whenever activeIdx changes (anchored to left corner)
  useEffect(() => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const cards = container.querySelectorAll<HTMLElement>('.testimonial-card')
    if (cards[activeIdx]) {
      const card = cards[activeIdx]
      const firstCardOffset = cards[0]?.offsetLeft || 0
      const scrollPos = card.offsetLeft - firstCardOffset
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
        <ScrollReveal direction="none" distance={0} delay={100} duration={600}>
          <div
            className="relative w-full max-w-6xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Testimonials Auto-scroll & Swipe Track - Exact Krishaz Wholesale shape & side-by-side peek */}
            <div
              ref={scrollRef}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="flex gap-3.5 sm:gap-5 overflow-x-auto overflow-y-hidden py-3 px-1 scrollbar-none snap-x snap-mandatory"
              style={{
                WebkitOverflowScrolling: 'touch',
                overscrollBehaviorX: 'contain',
              }}
            >
              {reviews.map((r, i) => (
                <div
                  key={r.id}
                  onClick={() => scrollToIdx(i)}
                  className={`testimonial-card flex-shrink-0 w-[70vw] max-w-[285px] sm:w-[320px] md:w-[340px] min-h-[390px] sm:min-h-[420px] snap-start bg-white rounded-2xl p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    activeIdx === i
                      ? 'border-[#D4C7B4] shadow-[0_6px_20px_rgba(0,0,0,0.08)]'
                      : 'border-[#EAE3D8] shadow-[0_3px_12px_rgba(0,0,0,0.04)] hover:border-[#D4C7B4]'
                  }`}
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                  }}
                >
                  <div className="flex-1 flex flex-col">
                    {/* Top Row: Google "G" Logo + Quotation Motif matching Krishaz */}
                    <div className="flex items-center justify-between mb-3.5">
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

                      {/* Soft Quotation Marks SVG */}
                      <svg
                        className="w-5 h-5 text-[#C9A84C]/40"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* 5 Gold Stars */}
                    <div className="flex items-center gap-1 mb-4 text-[#C9A84C]">
                      {[...Array(5)].map((_, starIdx) => (
                        <Star key={starIdx} className="w-4 h-4 fill-current stroke-none" />
                      ))}
                    </div>

                    {/* Review Quote Body with comfortable line-height matching Krishaz */}
                    <p className="text-[13px] sm:text-[14px] md:text-[14.5px] text-[#2C2C2C] font-normal leading-[1.7] italic">
                      &ldquo;{r.text}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer Details at bottom matching Krishaz Wholesale exactly */}
                  <div className="pt-4 mt-4">
                    <span className="font-bold text-[14.5px] sm:text-[15.5px] text-[#195799] block leading-tight">
                      {r.author}
                    </span>
                    <span className="text-[12px] sm:text-[13px] text-neutral-500 font-normal block mt-1">
                      {r.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Sliding Indicator Dots (Auto-scroll progress) */}
            <div className="flex items-center justify-center gap-2 mt-6 sm:mt-7">
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
