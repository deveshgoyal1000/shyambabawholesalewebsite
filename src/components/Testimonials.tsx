'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Star, CheckCircle2 } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export interface ReviewItem {
  id?: number | string
  author: string
  location: string
  tag: string
  text: string
}

export const DEFAULT_REVIEWS: ReviewItem[] = [
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

export interface TestimonialsProps {
  heading?: string
  subheading?: string
  reviews?: ReviewItem[]
}

export default function Testimonials({
  heading = 'Trusted by 10,000+ Retailers & Boutiques Worldwide',
  subheading = 'Real feedback from boutique owners and resellers worldwide',
  reviews = DEFAULT_REVIEWS,
}: TestimonialsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const displayReviews = reviews && reviews.length > 0 ? reviews : DEFAULT_REVIEWS

  // Auto-scrolling from right to left every 3.8s
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % displayReviews.length)
    }, 3800)
    return () => clearInterval(interval)
  }, [isPaused, displayReviews.length])

  // Synchronize scroll container whenever activeIdx changes
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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setIsPaused(true)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    if (diff > 40) {
      setActiveIdx((prev) => (prev + 1) % displayReviews.length)
    } else if (diff < -40) {
      setActiveIdx((prev) => (prev - 1 + displayReviews.length) % displayReviews.length)
    }
    touchStartX.current = null
    setTimeout(() => setIsPaused(false), 2500)
  }

  return (
    <section className="py-10 md:py-16 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading & Subtitle */}
        <ScrollReveal direction="up" distance={20} duration={650}>
          <div className="text-center mb-6 sm:mb-9">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[26px] sm:text-[34px] md:text-[42px] font-normal text-[#121212] tracking-[0.5px] leading-tight"
            >
              {heading || 'Trusted by 10,000+ Retailers & Boutiques Worldwide'}
            </h2>

            {/* Gold Accent Divider Bar */}
            <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#C9A84C] mx-auto my-2.5 sm:my-3.5"></div>

            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
              className="text-[13px] sm:text-[14px] text-[#2C2C2C] font-normal"
            >
              {subheading || 'Real feedback from boutique owners and resellers worldwide'}
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none pb-4 pt-2 snap-x snap-mandatory"
          style={{
            overscrollBehaviorX: 'contain',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {displayReviews.map((r, idx) => (
            <div
              key={r.id ?? idx}
              className="testimonial-card flex-shrink-0 w-[85vw] max-w-[340px] sm:w-[320px] snap-center bg-white rounded-2xl p-5 sm:p-6 border-2 border-[#E5DAC1] shadow-[0_3px_12px_rgba(0,0,0,0.04)] flex flex-col justify-between select-none"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3 text-[#FFD700]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed mb-4 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>

              {/* Reviewer Info */}
              <div className="pt-3 border-t border-[#F2ECE1] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">{r.author}</h4>
                  <p className="text-neutral-500 text-xs">{r.location}</p>
                </div>
                {r.tag && (
                  <span className="text-[10px] bg-[#195799]/10 text-[#195799] font-semibold px-2 py-0.5 rounded-full">
                    {r.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {displayReviews.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveIdx(dotIdx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIdx === dotIdx ? 'w-6 bg-[#195799]' : 'w-2 bg-neutral-300'
              }`}
              aria-label={`Go to review ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
