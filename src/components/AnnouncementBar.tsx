'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  Sparkles,
  Globe,
  Phone,
  Video,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

export default function AnnouncementBar() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const announcements = [
    {
      id: 1,
      Icon: Sparkles,
      iconColor: 'text-[#C9A84C]',
      highlight: 'Low MOV ₹3,000 / $50',
      text: 'Direct Jaipur Manufacturer Wholesale Pricing',
      href: '/collections/all',
      isExternal: false,
    },
    {
      id: 2,
      Icon: Globe,
      iconColor: 'text-[#195799]',
      highlight: 'Worldwide Express Cargo',
      text: 'Doorstep Air Delivery to 50+ Countries',
      href: '/#international',
      isExternal: false,
    },
    {
      id: 3,
      Icon: ShieldCheck,
      iconColor: 'text-[#C9A84C]',
      highlight: '5,000+ Exclusive Designs',
      text: 'Premium Brass & Oxidised Silver Jewellery',
      href: '/collections/all',
      isExternal: false,
    },
    {
      id: 4,
      Icon: Video,
      iconColor: 'text-[#25D366]',
      highlight: 'Live Video Call Shopping',
      text: 'Inspect Finish & Real Pieces Before Dispatch',
      href: 'https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20want%20to%20book%20a%20live%20video%20call%20for%20wholesale%20selection',
      isExternal: true,
    },
  ]

  // Auto-rotate announcement every 4 seconds
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      triggerSlide((activeIdx + 1) % announcements.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [activeIdx, isPaused, announcements.length])

  const triggerSlide = (nextIdx: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveIdx(nextIdx)
      setIsTransitioning(false)
    }, 180)
  }

  const goNext = (e?: React.MouseEvent) => {
    e?.preventDefault()
    e?.stopPropagation()
    triggerSlide((activeIdx + 1) % announcements.length)
  }

  const goPrev = (e?: React.MouseEvent) => {
    e?.preventDefault()
    e?.stopPropagation()
    triggerSlide((activeIdx - 1 + announcements.length) % announcements.length)
  }

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      if (diff > 0) goNext()
      else goPrev()
    }
    touchStartX.current = null
  }

  const current = announcements[activeIdx]

  return (
    <div
      className="relative bg-white border-b border-[#ECE6DC] text-[#121212] select-none w-full"
      style={{
        paddingTop: 'env(safe-area-inset-top, 0px)',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-2 min-h-[46px] sm:min-h-[50px]">
        {/* Left: Contact Info & Factory Direct (Desktop Only) */}
        <div className="hidden lg:flex items-center space-x-4 text-neutral-600 text-[12px]">
          <a
            href="https://wa.me/919680865791"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#195799] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#195799]" />
            <span className="font-medium">+91 96808 65791</span>
          </a>
          <span className="text-neutral-300">|</span>
          <span className="text-neutral-500">Jaipur Factory Direct</span>
        </div>

        {/* Center: Main Rotating Announcement Ticker (No boxes/chips, pure luxury typography) */}
        <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3 text-center overflow-hidden">
          {/* Previous Arrow */}
          <button
            onClick={goPrev}
            aria-label="Previous announcement"
            className="p-1 text-neutral-400 hover:text-neutral-900 active:scale-95 transition-transform flex-shrink-0 focus-visible:outline-none"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <ChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>

          {/* Current Announcement Content */}
          <div
            className={`flex items-center justify-center gap-2 px-1 transition-all duration-200 ${
              isTransitioning
                ? 'opacity-0 -translate-y-1 scale-98'
                : 'opacity-100 translate-y-0 scale-100'
            }`}
          >
            <current.Icon className={`w-4 h-4 ${current.iconColor} flex-shrink-0`} />

            {current.isExternal ? (
              <a
                href={current.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12.5px] sm:text-[13.5px] md:text-[14px] leading-normal font-normal text-neutral-800 hover:text-[#195799] transition-colors truncate sm:overflow-visible"
              >
                <strong className="font-semibold text-[#121212] tracking-tight">
                  {current.highlight}
                </strong>
                <span className="mx-1.5 text-neutral-400 hidden xs:inline">•</span>
                <span className="text-neutral-600 hidden xs:inline">{current.text}</span>
              </a>
            ) : (
              <Link
                href={current.href}
                className="text-[12.5px] sm:text-[13.5px] md:text-[14px] leading-normal font-normal text-neutral-800 hover:text-[#195799] transition-colors truncate sm:overflow-visible"
              >
                <strong className="font-semibold text-[#121212] tracking-tight">
                  {current.highlight}
                </strong>
                <span className="mx-1.5 text-neutral-400 hidden xs:inline">•</span>
                <span className="text-neutral-600 hidden xs:inline">{current.text}</span>
              </Link>
            )}
          </div>

          {/* Next Arrow */}
          <button
            onClick={goNext}
            aria-label="Next announcement"
            className="p-1 text-neutral-400 hover:text-neutral-900 active:scale-95 transition-transform flex-shrink-0 focus-visible:outline-none"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>
        </div>

        {/* Right: Live Video Call CTA (Desktop Only) */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href="https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20want%20to%20book%20a%20live%20video%20call%20for%20wholesale%20selection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[12px] text-neutral-700 hover:text-[#195799] font-medium transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
            </span>
            <span>Live Video Call Selection</span>
          </a>
        </div>
      </div>
    </div>
  )
}
