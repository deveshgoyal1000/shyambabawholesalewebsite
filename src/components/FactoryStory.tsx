'use client'

import React, { useState } from 'react'
import { Video, Play, Phone, Building2, Users2, Award } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function FactoryStory() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="about" className="py-10 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Main Heading */}
        <ScrollReveal direction="up" distance={20} duration={650}>
          <h2
            style={{ fontFamily: 'Georgia, serif' }}
            className="text-[26px] sm:text-[34px] md:text-[42px] font-normal text-[#6B1A2A] leading-tight mb-2 tracking-[0.5px]"
          >
            We Don&apos;t Source. We Are<br />Manufacture.
          </h2>

          {/* Gold Accent Divider Bar matching Krishaz */}
          <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#C9A84C] mx-auto my-2.5 sm:my-3.5"></div>

          {/* Subtitle */}
          <p
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
            className="text-[13px] sm:text-[14px] text-[#2C2C2C] max-w-lg mx-auto mb-7 font-normal leading-relaxed"
          >
            From our manufacturing unit in Jaipur, every piece is designed, crafted and quality-checked by our skilled artisans.
          </p>
        </ScrollReveal>

        {/* 3 Circular Badges with ScrollReveal */}
        <ScrollReveal direction="up" distance={20} delay={100} duration={650}>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-7 max-w-lg mx-auto">
            {/* Badge 1 */}
            <div className="flex flex-col items-center text-center space-y-2 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] bg-white shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:shadow-md">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
              </div>
              <span className="text-[11px] sm:text-xs font-medium text-neutral-700 leading-tight">
                In-house<br />Manufacturing
              </span>
            </div>

            {/* Badge 2 */}
            <div className="flex flex-col items-center text-center space-y-2 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] bg-white shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:shadow-md">
                <Users2 className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
              </div>
              <span className="text-[11px] sm:text-xs font-medium text-neutral-700 leading-tight">
                Skilled<br />Artisans
              </span>
            </div>

            {/* Badge 3 */}
            <div className="flex flex-col items-center text-center space-y-2 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] bg-white shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:shadow-md">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
              </div>
              <span className="text-[11px] sm:text-xs font-medium text-neutral-700 leading-tight">
                100% Quality<br />Inspection
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Video Card Container with ScrollReveal */}
        <ScrollReveal direction="up" distance={24} delay={180} duration={650}>
          <div className="relative rounded-2xl overflow-hidden border border-neutral-200/90 shadow-md group">
            {/* Background Thumbnail Image */}
            <div className="relative aspect-[16/9] w-full bg-neutral-900">
              <img
                src="https://images.unsplash.com/photo-1611591475870-0f2d80d21051?q=80&w=1200&auto=format&fit=crop"
                alt="Shyambaba Factory Crafting"
                className="w-full h-full object-cover opacity-85 group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                <a
                  href="https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20I%20want%20to%20watch%20your%20factory%20manufacturing%20videos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#6B1A2A] text-white flex items-center justify-center shadow-xl group-hover:scale-110 active:scale-95 transition-all"
                  aria-label="Play Factory Video"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-1" />
                </a>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-4 right-4 text-left">
                <span className="text-white font-semibold text-xs sm:text-sm drop-shadow block">
                  Tour Our Jaipur Workshop
                </span>
                <span className="text-white/80 text-[10px] sm:text-xs font-light block">
                  Watch casting, polishing &amp; 22K gold-plating live
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
