'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function HeroBanner() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, 50)
    return () => clearTimeout(timer)
  }, [])

  const points = [
    'Premium Brass Earrings',
    'Video Call Available',
    'Worldwide Shipping',
    '500+ Unique Designs',
  ]

  return (
    <section className="relative min-h-[680px] sm:min-h-[720px] flex flex-col justify-between text-center text-white overflow-hidden select-none">
      {/* 1. Full-bleed background photography: Krishaz mobile hero background on mobile, desktop hero background on larger screens */}
      {/* Mobile Hero Background (Exact Krishaz Wholesale mobile background image) */}
      <div
        className={`absolute inset-0 bg-cover bg-center will-change-transform sm:hidden ${
          mounted ? 'animate-cinema-drift opacity-100' : 'scale-105 opacity-70'
        } transition-opacity duration-1000`}
        style={{
          backgroundImage: `url('/images/hero/hero-mobile-krishaz.jpg')`,
        }}
      ></div>

      {/* Desktop Hero Background */}
      <div
        className={`absolute inset-0 bg-cover bg-center will-change-transform hidden sm:block ${
          mounted ? 'animate-cinema-drift opacity-100' : 'scale-105 opacity-70'
        } transition-opacity duration-1000`}
        style={{
          backgroundImage: `url('/images/hero/hero-desktop-krishaz.png')`,
        }}
      ></div>

      {/* 2. Warm vignette overlay: subtle and warm on mobile to match Krishaz's golden bronze glow, deeper on desktop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/65 sm:from-black/80 sm:via-black/70 sm:to-black/85 pointer-events-none"></div>

      {/* 3. Ambient Living Gold Light Ray (Breathes gently behind content while user stays on site) */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full pointer-events-none animate-light-breathe"
        style={{
          background:
            'radial-gradient(circle, rgba(201, 168, 76, 0.18) 0%, rgba(25, 87, 153, 0.08) 50%, transparent 75%)',
          filter: 'blur(45px)',
        }}
      ></div>

      {/* Center Content matching Krishaz Wholesale exactly */}
      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-10 flex flex-col items-center flex-1 justify-center">
        {/* Pre-heading: India's Trusted (Clean, elegant serif matching Krishaz) */}
        <div
          className={`flex flex-col items-center mb-1.5 sm:mb-2 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <span
            style={{ fontFamily: 'Georgia, serif' }}
            className="text-[20px] sm:text-[24px] font-normal text-[#FAF8F5] tracking-wide"
          >
            India&apos;s Trusted
          </span>
        </div>

        {/* Main Headline: Two-line Serif matching Krishaz */}
        <div className="mb-3 sm:mb-4">
          <h1
            style={{ fontFamily: 'Georgia, serif', transitionDelay: '240ms' }}
            className={`text-[28px] sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.22] transition-all duration-800 ease-[cubic-bezier(0.19,1,0.22,1)] ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span>Brass Jewellery Manufacturer</span>
            <br />
            <span>&amp; Exporters</span>
          </h1>
        </div>

        {/* Subtitle with generous size matching Krishaz */}
        <p
          className={`text-[14px] sm:text-[16px] text-[#FAF8F5]/90 max-w-sm sm:max-w-md mx-auto mb-6 sm:mb-8 font-normal leading-relaxed transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '380ms' }}
        >
          Supplying 10,000+ Retailers, Boutiques &amp; Resellers<br className="hidden sm:inline" />
          {' '}Across 50+ Countries.
        </p>

        {/* 4 Feature Points with Clean Circular Icons matching Krishaz */}
        <div className="space-y-3 sm:space-y-3.5 mb-7 sm:mb-8 w-full max-w-[270px] sm:max-w-xs text-left mx-auto">
          {points.map((pt, idx) => (
            <div
              key={pt}
              className={`flex items-center gap-3 transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] cursor-default ${
                mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
              }`}
              style={{ transitionDelay: `${450 + idx * 80}ms` }}
            >
              {/* Circular Gold Icon matching Krishaz: 32px diameter, gold border */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] flex-shrink-0 bg-black/25">
                <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#C9A84C] stroke-[2.2]" />
              </div>

              {/* Point Label matching Krishaz: 15px on mobile, 16px on desktop */}
              <span className="text-[15px] sm:text-[16px] font-medium text-white tracking-wide">
                {pt}
              </span>
            </div>
          ))}
        </div>

        {/* Action Buttons matching Krishaz: Full-width stacked pills */}
        <div
          className={`w-full max-w-[290px] sm:max-w-xs space-y-3 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            mounted
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-5 scale-95'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          {/* Button 1: Solid Royal Blue Pill Button */}
          <a
            href="#categories"
            className="w-full inline-block py-3.5 px-6 rounded-full bg-[#195799] hover:bg-[#124378] text-white font-bold text-sm sm:text-base tracking-wide shadow-md active:scale-98 transition-transform duration-150 text-center"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            Shop Wholesale
          </a>

          {/* Button 2: Transparent White Outline Pill */}
          <Link
            href="/collections/all"
            className="w-full inline-block py-3.5 px-6 rounded-full bg-transparent hover:bg-white/10 text-white font-bold text-sm sm:text-base tracking-wide border border-white/80 active:scale-98 transition-all duration-200 text-center"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            View Catalog
          </Link>
        </div>

        {/* Bottom Social Proof matching Krishaz */}
        <p
          className={`text-[12px] sm:text-[13px] text-[#FAF8F5]/85 mt-6 sm:mt-7 font-normal transition-all duration-700 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '950ms' }}
        >
          Trusted by 10,000+ Retailers Across 50+ Countries
        </p>
      </div>

      {/* Desktop-only Trust Statistics Bar (Hidden on mobile just like Krishaz) */}
      <div
        className={`hidden sm:block relative z-10 w-full bg-[#150408]/90 border-t border-[#C9A84C]/30 py-4 transition-all duration-800 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: '1000ms' }}
      >
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-around text-center">
          <div className="px-6 flex-1">
            <span className="font-bold text-2xl text-white block tracking-tight">
              27+ Years
            </span>
            <span className="text-xs uppercase tracking-widest text-[#EAE3D8] font-medium block mt-0.5">
              EXPERIENCE
            </span>
          </div>

          <div className="w-[1px] h-10 bg-[#C9A84C]/40"></div>

          <div className="px-6 flex-1">
            <span className="font-bold text-2xl text-white block tracking-tight">
              90,000+
            </span>
            <span className="text-xs uppercase tracking-widest text-[#EAE3D8] font-medium block mt-0.5">
              ORDERS DISPATCHED
            </span>
          </div>

          <div className="w-[1px] h-10 bg-[#C9A84C]/40"></div>

          <div className="px-6 flex-1">
            <span className="font-bold text-2xl text-white block tracking-tight">
              10,000+
            </span>
            <span className="text-xs uppercase tracking-widest text-[#EAE3D8] font-medium block mt-0.5">
              RETAILERS SERVED
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
