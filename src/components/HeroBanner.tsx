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
        className={`absolute inset-0 bg-cover bg-[position:74%_10%] will-change-transform sm:hidden ${
          mounted ? 'animate-cinema-drift opacity-100' : 'scale-105 opacity-70'
        } transition-opacity duration-1000`}
        style={{
          backgroundImage: `url('/images/hero/hero-mobile-artisan.webp')`,
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
      <div className="absolute inset-0 sm:hidden bg-gradient-to-b from-black/85 via-black/60 to-black/95 pointer-events-none"></div>
      <div
        className="absolute inset-0 sm:hidden pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(201, 168, 76, 0.15) 0%, rgba(10, 8, 8, 0.35) 75%)',
        }}
      ></div>
      <div className="absolute inset-0 hidden sm:block bg-gradient-to-b from-black/80 via-black/70 to-black/85 pointer-events-none"></div>

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
      <div className="relative z-10 max-w-xl mx-auto px-3 sm:px-6 pt-12 sm:pt-20 pb-10 flex flex-col items-center flex-1 justify-center">
        {/* Pre-heading: India's Trusted (Clean, elegant serif matching Krishaz) */}
        <div
          className={`flex flex-col items-center mb-2 sm:mb-2.5 transition-opacity duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '80ms' }}
        >
          <span
            style={{ fontFamily: 'Georgia, serif' }}
            className="text-[22px] sm:text-[26px] md:text-[28px] font-normal text-[#FAF8F5] tracking-wide"
          >
            India&apos;s Trusted
          </span>
        </div>

        {/* Main Headline: Two-line Serif matching Krishaz */}
        <div className="mb-3.5 sm:mb-4.5">
          <h1
              style={{ fontFamily: 'Georgia, serif' }}
              className="font-bold tracking-tight text-white leading-[1.25] mb-4 mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] px-2 text-center"
            >
              <span className="block text-[22px] sm:text-[42px]">JAIPUR BIGGEST</span>
              <span className="block text-[22px] sm:text-[42px]">ARTIFICIAL JEWELLERY</span>
              <span className="block text-[17px] sm:text-[36px] text-[#FAF8F5] mt-1">MANUFACTURER &amp; WHOLESALER</span>
            </h1>
        </div>

        {/* Subtitle */}
        <p
          className={`text-[12px] sm:text-[14.5px] text-[#FAF8F5]/85 max-w-[340px] sm:max-w-md mx-auto mb-3 font-normal leading-relaxed text-center drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)] transition-opacity duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '320ms' }}
        >
          Supplying to Boutique Owners, Shopkeepers, Exhibition Customers, Customer with Website, B2B
        </p>

        {/* Note */}
        <p className="text-[10px] sm:text-[11.5px] text-red-200/95 font-medium tracking-tight mb-4 mx-auto text-center whitespace-nowrap drop-shadow-[0_1px_5px_rgba(0,0,0,0.95)]">
          🚫 Note : EXCEPT (PHOTO BASED RESELLERS ) are not allowed.
        </p>

        {/* 4 Feature Points with Clean Circular Icons - Bigger & More Prominent */}
        <div className="space-y-3.5 sm:space-y-4 mb-8 sm:mb-9 w-full max-w-[320px] sm:max-w-sm text-left mx-auto">
          {points.map((pt, idx) => (
            <div
              key={pt}
              className={`flex items-center gap-3.5 transition-opacity duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] cursor-default ${
                mounted ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${420 + idx * 80}ms` }}
            >
              {/* Circular Gold Icon: 34-36px diameter, prominent check */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-[1.5px] border-[#22c55e] flex items-center justify-center text-[#22c55e] flex-shrink-0 bg-black/50 shadow-[0_0_12px_rgba(34,197,94,0.3)]">
                <Check className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#22c55e] stroke-[2.8]" />
              </div>

              {/* Point Label: 17px on mobile, 18-19px on desktop */}
              <span className="text-[17px] sm:text-[19px] font-semibold text-white tracking-wide">
                {pt}
              </span>
            </div>
          ))}
        </div>

        {/* Action Buttons: Full-width stacked pills - Bigger size & generous padding */}
        <div
          className={`w-full max-w-[340px] sm:max-w-[380px] space-y-3.5 sm:space-y-4 transition-opacity duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '780ms' }}
        >
          {/* Button 1: Solid Royal Blue Pill Button */}
          <a
            href="#categories"
            className="w-full inline-flex items-center justify-center py-4 sm:py-4.5 px-8 rounded-full bg-[#195799] hover:bg-[#124378] text-white font-bold text-[16px] sm:text-[18px] tracking-wide shadow-lg active:scale-98 transition-all duration-200 text-center"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            Shop Wholesale
          </a>

          {/* Button 2: Transparent White Outline Pill */}
          <Link
            href="/collections/all"
            className="w-full inline-flex items-center justify-center py-4 sm:py-4.5 px-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-[16px] sm:text-[18px] tracking-wide border-2 border-white/90 active:scale-98 transition-all duration-200 text-center backdrop-blur-xs"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            View Catalog
          </Link>
        </div>

        {/* Bottom Social Proof matching Krishaz */}
        <p
          className={`text-[13px] sm:text-[14px] text-[#FAF8F5]/90 mt-7 sm:mt-8 font-normal transition-opacity duration-600 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '920ms' }}
        >
          Trusted by 10,000+ Retailers Across 50+ Countries
        </p>
      </div>

      {/* Desktop-only Trust Statistics Bar (Hidden on mobile just like Krishaz) */}
      <div
        className={`hidden sm:block relative z-10 w-full bg-[#150408]/90 border-t border-[#C9A84C]/30 py-4 transition-opacity duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1020ms' }}
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
