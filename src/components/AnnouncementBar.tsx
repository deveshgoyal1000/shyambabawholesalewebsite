'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  Sparkles,
  Globe,
  Phone,
  Clock,
  Video,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from 'lucide-react'

export default function AnnouncementBar() {
  const [currency, setCurrency] = useState('INR')
  const [activeIdx, setActiveIdx] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const announcements = [
    {
      id: 1,
      badge: 'FACTORY DIRECT',
      badgeClass: 'bg-[#C9A84C] text-[#121212]',
      Icon: Sparkles,
      iconColor: 'text-[#C9A84C]',
      highlight: 'Low MOV ₹3,000/-',
      text: 'Direct Jaipur Manufacturer Pricing',
      href: '#categories',
      isExternal: false,
    },
    {
      id: 2,
      badge: 'WORLDWIDE B2B',
      badgeClass: 'bg-white/20 text-white backdrop-blur-xs',
      Icon: Globe,
      iconColor: 'text-[#C9A84C]',
      highlight: 'Doorstep Global Export',
      text: 'Express Air Cargo to 50+ Countries',
      href: '#international',
      isExternal: false,
    },
    {
      id: 3,
      badge: 'LIVE SHOWROOM',
      badgeClass: 'bg-[#25D366]/25 text-emerald-200 border border-[#25D366]/40',
      Icon: Video,
      iconColor: 'text-[#25D366]',
      highlight: 'Live Video Call Shopping',
      text: 'Inspect Finish & Stones Before Dispatch',
      href: 'https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20want%20to%20book%20a%20live%20video%20call%20for%20wholesale%20selection',
      isExternal: true,
    },
    {
      id: 4,
      badge: 'GUARANTEED QUALITY',
      badgeClass: 'bg-white/20 text-white backdrop-blur-xs',
      Icon: ShieldCheck,
      iconColor: 'text-[#C9A84C]',
      highlight: '10,000+ Retailers Trust Us',
      text: '3-Layer Anti-Tarnish Finish on Virgin Brass',
      href: '#about',
      isExternal: false,
    },
  ]

  // Auto-rotate announcement every 3.8s
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      triggerSlide((activeIdx + 1) % announcements.length)
    }, 3800)
    return () => clearInterval(interval)
  }, [activeIdx, isPaused, announcements.length])

  const triggerSlide = (nextIdx: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveIdx(nextIdx)
      setIsTransitioning(false)
    }, 220)
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

  const current = announcements[activeIdx]

  return (
    <div
      className="relative bg-gradient-to-r from-[#113a66] via-[#195799] to-[#113a66] text-[#FAF8F5] border-b border-[#C9A84C]/40 select-none w-full overflow-hidden shadow-xs"
      style={{
        paddingTop: 'max(0.35rem, env(safe-area-inset-top))',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle Ambient Shimmer Highlight Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(201,168,76,0.12),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-2.5 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-1 sm:gap-4 min-h-[42px] sm:min-h-[40px] relative z-10">
        {/* Left: Contact Info & Hours (Desktop Only) */}
        <div className="hidden xl:flex items-center space-x-3 text-[#FAF8F5]/85 text-[11px] shrink-0 font-sans">
          <a
            href="tel:+919680865791"
            className="flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span className="font-semibold">+91 96808 65791</span>
          </a>
          <span className="text-[#C9A84C]/40">•</span>
          <span className="flex items-center gap-1.5 text-white/75">
            <Clock className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>Factory: 10:30 AM – 7:30 PM IST</span>
          </span>
        </div>

        {/* Center: Dynamic Animated Announcement Ticker */}
        <div className="flex-1 flex items-center justify-center gap-1 sm:gap-2.5 min-w-0">
          {/* Previous Arrow Button */}
          <button
            onClick={goPrev}
            aria-label="Previous announcement"
            className="w-6 h-6 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 active:scale-90 transition-all shrink-0"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          {/* Animated Announcement Card / Link */}
          <a
            href={current.href}
            target={current.isExternal ? '_blank' : undefined}
            rel={current.isExternal ? 'noopener noreferrer' : undefined}
            className={`group inline-flex items-center justify-center gap-1.5 sm:gap-2 text-center text-xs px-1 sm:px-2 py-0.5 rounded-full hover:bg-white/5 transition-all duration-200 overflow-hidden max-w-[85vw] sm:max-w-none ${
              isTransitioning
                ? 'opacity-0 -translate-y-1 scale-[0.98]'
                : 'opacity-100 translate-y-0 scale-100'
            }`}
            style={{
              transitionProperty: 'opacity, transform',
              transitionDuration: '220ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {/* Category / Pillar Tag Badge */}
            <span
              className={`text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-sm shrink-0 shadow-2xs ${current.badgeClass}`}
            >
              {current.badge}
            </span>

            {/* Glowing Icon */}
            <current.Icon
              className={`w-3.5 h-3.5 shrink-0 ${current.iconColor} group-hover:scale-110 transition-transform`}
            />

            {/* Headline Highlight */}
            <strong className="text-[#C9A84C] font-bold tracking-tight text-[11.5px] sm:text-[12.5px] shrink-0">
              {current.highlight}
            </strong>

            {/* Bullet separator (hidden on very small screens if overflowing) */}
            <span className="hidden xs:inline text-[#C9A84C]/50 text-xs shrink-0">•</span>

            {/* Subtext description */}
            <span className="hidden sm:inline text-white/90 text-xs font-normal truncate max-w-[260px] md:max-w-none">
              {current.text}
            </span>

            {/* Subtle Link Chevron */}
            <span className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all text-[11px] shrink-0">
              &rarr;
            </span>
          </a>

          {/* Next Arrow Button */}
          <button
            onClick={goNext}
            aria-label="Next announcement"
            className="w-6 h-6 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 active:scale-90 transition-all shrink-0"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right: Currency Selector & Live Video Call Booking (Desktop & Tablet) */}
        <div className="hidden md:flex items-center space-x-2.5 text-[#FAF8F5]/90 text-[11px] shrink-0 font-sans">
          {/* Glass Currency Dropdown */}
          <div className="relative flex items-center gap-1 bg-[#103a66]/80 hover:bg-[#103a66] px-2.5 py-1 rounded-full border border-[#C9A84C]/35 transition-colors">
            <Globe className="w-3 h-3 text-[#C9A84C]" />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent text-white focus:outline-none cursor-pointer text-[11px] font-medium appearance-none pr-3"
            >
              <option value="INR" className="bg-[#195799] text-white">🇮🇳 INR (₹)</option>
              <option value="USD" className="bg-[#195799] text-white">🇺🇸 USD ($)</option>
              <option value="GBP" className="bg-[#195799] text-white">🇬🇧 GBP (£)</option>
              <option value="AED" className="bg-[#195799] text-white">🇦🇪 AED (د.إ)</option>
              <option value="CAD" className="bg-[#195799] text-white">🇨🇦 CAD ($)</option>
              <option value="MYR" className="bg-[#195799] text-white">🇲🇾 MYR (RM)</option>
              <option value="EUR" className="bg-[#195799] text-white">🇪🇺 EUR (€)</option>
              <option value="AUD" className="bg-[#195799] text-white">🇦🇺 AUD ($)</option>
            </select>
            <ChevronDown className="w-2.5 h-2.5 text-white/50 absolute right-2 pointer-events-none" />
          </div>

          {/* Live Video Call Quick Link with Pulsing Dot */}
          <a
            href="https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20want%20to%20book%20a%20video%20call%20for%20wholesale%20selection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5E8]/10 hover:bg-[#FAF5E8]/20 border border-[#C9A84C]/50 text-[#C9A84C] font-semibold text-[11px] transition-all hover:scale-102"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
            </span>
            <span>Live Video Call</span>
          </a>
        </div>
      </div>

      {/* Micro Slide Indicator Dots */}
      <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 flex items-center gap-1 pointer-events-none">
        {announcements.map((_, i) => (
          <span
            key={i}
            className={`h-0.5 rounded-full transition-all duration-300 ${
              activeIdx === i ? 'w-4 bg-[#C9A84C]' : 'w-1 bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
