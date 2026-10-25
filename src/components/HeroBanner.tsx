'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function HeroBanner() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Trigger entrance sequence after initial render
    const timer = setTimeout(() => {
      setMounted(true)
    }, 50)
    return () => clearTimeout(timer)
  }, [])

  const points = [
    'Premium Brass Earrings',
    'Live Video Call Available',
    'Worldwide Shipping',
    '500+ Unique Designs',
  ]

  return (
    <section className="relative min-h-[580px] sm:min-h-[640px] flex flex-col justify-between text-center text-white overflow-hidden select-none">
      {/* 1. Full-bleed background photography with Continuous Cinema Drift (Living Animation) */}
      <div
        className={`absolute inset-0 bg-cover bg-center will-change-transform ${
          mounted ? 'animate-cinema-drift opacity-100' : 'scale-110 opacity-70'
        } transition-opacity duration-1000`}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1600&auto=format&fit=crop')`,
        }}
      ></div>

      {/* 2. Dark warm vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90 pointer-events-none"></div>

      {/* 3. Ambient Living Gold Light Ray (Breathes gently behind content while user stays on site) */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full pointer-events-none animate-light-breathe"
        style={{
          background:
            'radial-gradient(circle, rgba(201, 168, 76, 0.22) 0%, rgba(107, 26, 42, 0.12) 50%, transparent 75%)',
          filter: 'blur(45px)',
        }}
      ></div>

      {/* Center Content */}
      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8 flex flex-col items-center flex-1 justify-center">
        {/* Pre-heading: India's Trusted with Crown Sparkle & Tracking Expansion */}
        <div
          className={`flex flex-col items-center mb-2 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            mounted
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A84C] animate-sparkle-float flex-shrink-0" />
            <span
              style={{ fontFamily: 'Georgia, serif' }}
              className={`text-lg sm:text-2xl font-normal text-[#FAF8F5]/90 transition-all duration-1000 ease-out ${
                mounted ? 'tracking-[0.2em]' : 'tracking-normal'
              }`}
            >
              India&apos;s Trusted
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#C9A84C] animate-sparkle-float flex-shrink-0 [animation-delay:1.5s]" />
          </div>

          {/* Delicate Hairline Gold Rule that unrolls from center on load */}
          <div
            className={`h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mt-1.5 transition-all duration-1000 ease-out ${
              mounted ? 'w-24 sm:w-32 opacity-80' : 'w-0 opacity-0'
            }`}
            style={{ transitionDelay: '350ms' }}
          ></div>
        </div>

        {/* Main Headline: Curtain Reveal (Words slide up smoothly from behind an overflow mask) */}
        <div className="overflow-hidden mb-3">
          <h1
            style={{ fontFamily: 'Georgia, serif', transitionDelay: '240ms' }}
            className={`text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.2] transition-all duration-800 ease-[cubic-bezier(0.19,1,0.22,1)] ${
              mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Brass Jewellery Manufacturer &amp; Exporters
          </h1>
        </div>

        {/* Subtitle with soft optical focus entrance */}
        <p
          className={`text-xs sm:text-sm text-neutral-200 max-w-sm sm:max-w-md mx-auto mb-6 sm:mb-8 font-light leading-relaxed transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            mounted
              ? 'opacity-100 translate-y-0 filter-none'
              : 'opacity-0 translate-y-4 blur-[2px]'
          }`}
          style={{ transitionDelay: '380ms' }}
        >
          Supplying 10,000+ Retailers, Boutiques &amp; Resellers<br className="hidden sm:inline" />
          {' '}Across 50+ Countries.
        </p>

        {/* 4 Trust points with Animated SVG Stroke Draw & Continuous Gold Ring Breathing */}
        <div className="space-y-2.5 sm:space-y-3 mb-7 sm:mb-8 w-full max-w-xs text-left mx-auto">
          {points.map((pt, idx) => (
            <div
              key={pt}
              className={`group/item flex items-center gap-3 transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] cursor-default ${
                mounted
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-5'
              }`}
              style={{ transitionDelay: `${500 + idx * 85}ms` }}
            >
              {/* Gold Ring with Ambient Breathing Pulse & Smooth Scale on Touch/Hover */}
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] flex-shrink-0 bg-black/40 animate-gold-ring-breathe group-hover/item:scale-110 group-hover/item:border-[#E8CE7B] transition-transform duration-300">
                {/* SVG Checkmark with physical Stroke Draw Animation on load */}
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline
                    points="20 6 9 17 4 12"
                    style={{
                      strokeDasharray: 24,
                      strokeDashoffset: mounted ? 0 : 24,
                      transition: `stroke-dashoffset 500ms ease-out ${600 + idx * 85}ms`,
                    }}
                  />
                </svg>
              </div>

              {/* Point Label with subtle tactile nudge on hover */}
              <span className="text-xs sm:text-sm font-medium text-neutral-100 tracking-wide group-hover/item:translate-x-1 transition-transform duration-250">
                {pt}
              </span>
            </div>
          ))}
        </div>

        {/* Action Buttons: Primary with Living Ambient Halo + Glass Shine Streak Sweep */}
        <div
          className={`w-full max-w-[290px] sm:max-w-xs space-y-3 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            mounted
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-5 scale-95'
          }`}
          style={{ transitionDelay: '880ms' }}
        >
          {/* Button 1: Solid Maroon Pill Button with Living Halo Glow and Light Sheen */}
          <a
            href="#categories"
            className="group relative w-full inline-flex items-center justify-center gap-2 py-3 sm:py-3.5 px-6 rounded-full bg-[#6B1A2A] hover:bg-[#521320] text-white font-bold text-xs sm:text-sm tracking-wide overflow-hidden animate-gold-halo active:scale-98 transition-transform duration-150"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {/* Periodic Diagonal Glass Shine Sweep that glides across every 5.5s */}
            <span
              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none animate-glass-shine"
            ></span>

            <span className="relative z-10">Shop Wholesale</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A84C] relative z-10 group-hover:translate-x-1 transition-transform duration-250 ease-out" />
          </a>

          {/* Button 2: Transparent White Outline with Frosted Glass Blur */}
          <Link
            href="/collections/all"
            className="w-full inline-block py-3 sm:py-3.5 px-6 rounded-full bg-black/20 hover:bg-white/15 text-white font-bold text-xs sm:text-sm tracking-wide border border-white/80 hover:border-white backdrop-blur-sm active:scale-98 transition-all duration-250 text-center"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            View Catalog
          </Link>
        </div>

        {/* Bottom Social Proof */}
        <p
          className={`text-[10px] sm:text-[11px] text-neutral-300 mt-5 sm:mt-6 font-normal transition-all duration-700 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          Trusted by 10,000+ Retailers Across 50+ Countries
        </p>
      </div>

      {/* Bottom Trust Statistics Bar with Staggered 3-Column Entrance & Vertical Dividers */}
      <div
        className={`relative z-10 w-full bg-[#150408]/95 border-t border-[#C9A84C]/30 py-3.5 sm:py-5 transition-all duration-800 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          mounted
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: '1080ms' }}
      >
        <div className="max-w-4xl mx-auto px-2 sm:px-4 flex items-center justify-around text-center">
          {/* Column 1: 27+ Years Experience */}
          <div
            className={`px-2 sm:px-6 flex-1 transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transitionDelay: '1100ms' }}
          >
            <span className="font-bold text-sm sm:text-2xl text-transparent bg-clip-text bg-gradient-to-b from-white via-[#FFF8EC] to-[#EAE3D8] block tracking-tight drop-shadow-sm">
              27+ Years
            </span>
            <span className="text-[8px] sm:text-xs uppercase tracking-widest text-[#EAE3D8] font-medium block mt-0.5">
              EXPERIENCE
            </span>
          </div>

          {/* Vertical Divider 1 that expands vertically */}
          <div
            className={`w-[1px] h-8 sm:h-10 bg-[#C9A84C]/40 transition-transform duration-700 ease-out origin-center ${
              mounted ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
            }`}
            style={{ transitionDelay: '1180ms' }}
          ></div>

          {/* Column 2: 90,000+ Orders Dispatched */}
          <div
            className={`px-2 sm:px-6 flex-1 transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transitionDelay: '1180ms' }}
          >
            <span className="font-bold text-sm sm:text-2xl text-transparent bg-clip-text bg-gradient-to-b from-white via-[#FFF8EC] to-[#EAE3D8] block tracking-tight drop-shadow-sm">
              90,000+
            </span>
            <span className="text-[8px] sm:text-xs uppercase tracking-widest text-[#EAE3D8] font-medium block mt-0.5">
              ORDERS DISPATCHED
            </span>
          </div>

          {/* Vertical Divider 2 that expands vertically */}
          <div
            className={`w-[1px] h-8 sm:h-10 bg-[#C9A84C]/40 transition-transform duration-700 ease-out origin-center ${
              mounted ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
            }`}
            style={{ transitionDelay: '1240ms' }}
          ></div>

          {/* Column 3: 10,000+ Retailers Served */}
          <div
            className={`px-2 sm:px-6 flex-1 transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transitionDelay: '1260ms' }}
          >
            <span className="font-bold text-sm sm:text-2xl text-transparent bg-clip-text bg-gradient-to-b from-white via-[#FFF8EC] to-[#EAE3D8] block tracking-tight drop-shadow-sm">
              10,000+
            </span>
            <span className="text-[8px] sm:text-xs uppercase tracking-widest text-[#EAE3D8] font-medium block mt-0.5">
              RETAILERS SERVED
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
