'use client'

import React, { useState } from 'react'
import { Play, Building2, Users2, Award } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function FactoryStory() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="about" className="py-10 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Main Heading - Bigger on Mobile */}
        <ScrollReveal direction="none" distance={0} duration={650}>
          <h2
            style={{ fontFamily: 'Georgia, serif' }}
            className="text-[28px] sm:text-[36px] md:text-[42px] font-normal text-[#121212] leading-[1.22] mb-2.5 tracking-[0.5px]"
          >
            <span className="block">We Don&apos;t Source.</span>
            <span className="block font-medium">We Are Manufacture.</span>
          </h2>

          {/* Gold Accent Divider Bar matching Krishaz */}
          <div className="w-[60px] sm:w-[80px] h-[2.5px] bg-[#C9A84C] mx-auto my-3 sm:my-4"></div>

          {/* Subtitle - Bigger & Clearer on mobile */}
          <p
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
            className="text-[14.5px] sm:text-[16px] text-[#1a1a1a] max-w-lg mx-auto mb-7 font-normal leading-relaxed"
          >
            From our manufacturing unit in Jaipur, every piece is designed, crafted and quality-checked by our skilled artisans.
          </p>
        </ScrollReveal>

        {/* 3 Circular Badges - Bigger & Bolder on mobile */}
        <ScrollReveal direction="none" distance={0} delay={100} duration={650}>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-7 sm:mb-9 max-w-lg mx-auto">
            {/* Badge 1 */}
            <div className="flex flex-col items-center text-center space-y-2 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#C9A84C] flex items-center justify-center text-[#195799] bg-white shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:shadow-lg">
                <Building2 className="w-6.5 h-6.5 sm:w-7 sm:h-7 stroke-[1.8]" />
              </div>
              <span className="text-[12.5px] sm:text-[14px] font-bold text-[#121212] leading-snug">
                In-house<br />Manufacturing
              </span>
            </div>

            {/* Badge 2 */}
            <div className="flex flex-col items-center text-center space-y-2 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#C9A84C] flex items-center justify-center text-[#195799] bg-white shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:shadow-lg">
                <Users2 className="w-6.5 h-6.5 sm:w-7 sm:h-7 stroke-[1.8]" />
              </div>
              <span className="text-[12.5px] sm:text-[14px] font-bold text-[#121212] leading-snug">
                Skilled<br />Artisans
              </span>
            </div>

            {/* Badge 3 */}
            <div className="flex flex-col items-center text-center space-y-2 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#C9A84C] flex items-center justify-center text-[#195799] bg-white shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:shadow-lg">
                <Award className="w-6.5 h-6.5 sm:w-7 sm:h-7 stroke-[1.8]" />
              </div>
              <span className="text-[12.5px] sm:text-[14px] font-bold text-[#121212] leading-snug">
                100% Quality<br />Inspection
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Video Card Container with ScrollReveal */}
        <ScrollReveal direction="none" distance={0} delay={150} duration={650}>
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
                  href="https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20want%20to%20watch%20your%20factory%20manufacturing%20videos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#195799] text-white flex items-center justify-center shadow-xl group-hover:scale-110 active:scale-95 transition-all"
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

        {/* Visit Our Manufacturing Unit Action Button matching Krishaz Wholesale */}
        <ScrollReveal direction="none" distance={0} delay={200} duration={650}>
          <div className="mt-5 sm:mt-6">
            <a
              href="https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20would%20like%20to%20visit%20your%20manufacturing%20unit%20in%20Jaipur."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile w-full inline-flex items-center justify-center py-4 px-6 rounded-xl sm:rounded-2xl bg-[#80142B] hover:bg-[#681023] text-white font-bold text-[16px] sm:text-[18px] tracking-wide shadow-md hover:shadow-lg active:scale-98 transition-all text-center"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              Visit Our Manufacturing Unit
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
