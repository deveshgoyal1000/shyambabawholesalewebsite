'use client'

import React, { useState } from 'react'
import { Video, Play, Phone, Building2, Users2, Award } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function FactoryStory() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="about" className="py-12 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Main Heading */}
        <ScrollReveal>
          <h2
            style={{ fontFamily: 'Georgia, serif' }}
            className="text-3xl sm:text-[42px] font-normal text-[#6B1A2A] leading-tight mb-3 tracking-normal"
          >
            We Don&apos;t Source. We Are<br />Manufacture.
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
            className="text-[14px] text-[#2C2C2C] max-w-lg mx-auto mb-8 font-normal leading-relaxed"
          >
            From our manufacturing unit in Jaipur, every piece is designed, crafted and quality-checked by our skilled artisans.
          </p>
        </ScrollReveal>

        {/* 3 Circular Badges */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 max-w-lg mx-auto">
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
                Premium<br />Quality
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Video Player Card */}
        <ScrollReveal delay={150}>
          <div className="relative rounded-3xl overflow-hidden bg-black aspect-[4/3] sm:aspect-[16/10] shadow-2xl border-2 border-neutral-800 card-hover-lift">
            {/* Background Factory / Showroom visual */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Top Left Speed Tag "1.00" */}
            <div className="absolute top-4 left-4 text-xs font-mono text-white/90 bg-black/50 px-2 py-0.5 rounded">
              1.00
            </div>

            {/* Top Right Phone Numbers */}
            <div className="absolute top-4 right-4 text-right text-[11px] sm:text-xs font-mono text-white font-bold bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10 space-y-0.5">
              <div>📞 9876543210</div>
              <div>📞 7742126346</div>
            </div>

            {/* Central Circular Red Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20please%20send%20me%20your%20Jaipur%20factory%20video%20tour."
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#800020] hover:bg-[#6B1A2A] text-white flex items-center justify-center shadow-2xl border-4 border-white/90 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 active:scale-95"
                aria-label="Play Factory Video"
              >
                <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white ml-1" />
              </a>
            </div>

            {/* Bottom Left "Book Video Call" Pill Button inside video */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <a
                href="https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20I%20would%20like%20to%20Book%20a%20Video%20Call."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6B1A2A] text-white text-xs font-bold shadow-lg hover:bg-[#521320] border border-white/20"
              >
                <Video className="w-4 h-4" />
                <span>Book Video Call</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
