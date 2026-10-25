'use client'

import React from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function HeroBanner() {
  const points = [
    'Premium Brass Earrings',
    'Live Video Call Available',
    'Worldwide Shipping',
    '500+ Unique Designs',
  ]

  return (
    <section className="relative min-h-[580px] sm:min-h-[640px] flex flex-col justify-between text-center text-white overflow-hidden">
      {/* Full-bleed background photography matching Screenshot */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1600&auto=format&fit=crop')`,
        }}
      ></div>

      {/* Dark warm overlay with subtle lens-flare gradient matching Krishaz */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

      {/* Center Content */}
      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8 flex flex-col items-center flex-1 justify-center">
        {/* Main Headline matching Krishaz: line 1 + line 2 in Georgia serif */}
        <h1
          style={{ fontFamily: 'Georgia, serif' }}
          className="text-white leading-[1.2] mb-3 text-center"
        >
          <span className="block text-xl sm:text-2xl font-normal text-[#FAF8F5]/90 mb-1 tracking-wide">
            India&apos;s Trusted
          </span>
          <span className="block text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Brass Jewellery Manufacturer &amp; Exporters
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-neutral-200 max-w-sm sm:max-w-md mx-auto mb-6 sm:mb-8 font-light leading-relaxed">
          Supplying 10,000+ Retailers, Boutiques &amp; Resellers<br className="hidden sm:inline" />
          {' '}Across 50+ Countries.
        </p>

        {/* 4 Trust points with Circular Gold Checkmarks */}
        <div className="space-y-2.5 sm:space-y-3 mb-7 sm:mb-8 w-full max-w-xs text-left mx-auto">
          {points.map((pt) => (
            <div key={pt} className="flex items-center gap-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] flex-shrink-0 bg-black/30">
                <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-neutral-100 tracking-wide">
                {pt}
              </span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="w-full max-w-[290px] sm:max-w-xs space-y-3">
          {/* Button 1: Solid Maroon Pill Button */}
          <a
            href="#categories"
            className="btn-tactile w-full inline-block py-3 sm:py-3.5 px-6 rounded-full bg-[#6B1A2A] hover:bg-[#521320] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-xl text-center"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            Shop Wholesale
          </a>

          {/* Button 2: Transparent with White Outline Pill Button */}
          <Link
            href="/collections/all"
            className="btn-tactile w-full inline-block py-3 sm:py-3.5 px-6 rounded-full bg-transparent hover:bg-white/10 text-white font-bold text-xs sm:text-sm tracking-wide border border-white text-center"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            View Catalog
          </Link>
        </div>

        {/* Bottom Social Proof */}
        <p className="text-[10px] sm:text-[11px] text-neutral-300 mt-5 sm:mt-6 font-normal">
          Trusted by 10,000+ Retailers Across 50+ Countries
        </p>
      </div>

      {/* Bottom Trust Statistics Bar matching Krishaz */}
      <div className="relative z-10 w-full bg-[#150408]/95 border-t border-[#C9A84C]/30 py-3.5 sm:py-5">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 flex items-center justify-around text-center divide-x divide-[#C9A84C]/30">
          <div className="px-2 sm:px-6">
            <span className="font-bold text-sm sm:text-2xl text-white block tracking-tight">27+ Years</span>
            <span className="text-[8px] sm:text-xs uppercase tracking-widest text-[#EAE3D8] font-medium block mt-0.5">EXPERIENCE</span>
          </div>
          <div className="px-2 sm:px-6">
            <span className="font-bold text-sm sm:text-2xl text-white block tracking-tight">90,000+</span>
            <span className="text-[8px] sm:text-xs uppercase tracking-widest text-[#EAE3D8] font-medium block mt-0.5">ORDERS DISPATCHED</span>
          </div>
          <div className="px-2 sm:px-6">
            <span className="font-bold text-sm sm:text-2xl text-white block tracking-tight">10,000+</span>
            <span className="text-[8px] sm:text-xs uppercase tracking-widest text-[#EAE3D8] font-medium block mt-0.5">RETAILERS SERVED</span>
          </div>
        </div>
      </div>
    </section>
  )
}
