'use client'

import React from 'react'
import { Video } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function VideoShoppingCTA() {
  return (
    <section className="py-8 bg-[#FAF8F5]">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        {/* Yellow/Gold-tinted Card matching Krishaz exactly */}
        <ScrollReveal direction="up" distance={24} duration={650}>
          <div className="bg-[#F5ECD7] rounded-xl sm:rounded-2xl border-2 border-[#C9A84C] p-7 sm:p-10 text-center shadow-[0_4px_16px_rgba(0,0,0,0.06)] card-hover-lift group">
            {/* Gold Camera Icon */}
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center text-[#C9A84C] group-hover:scale-105 transition-transform duration-300">
              <Video className="w-9 h-9 sm:w-10 sm:h-10 stroke-[1.8]" />
            </div>

            {/* Heading in Georgia Serif */}
            <h3
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[26px] sm:text-[32px] md:text-[34px] font-bold text-[#121212] mb-2 tracking-normal leading-tight"
            >
              Book a Live Video Call
            </h3>

            {/* Subtitle */}
            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
              className="text-[15px] sm:text-[16px] text-[#3A3A3A] mb-6 font-medium"
            >
              See products in real before ordering
            </p>

            {/* "Book Now →" Button */}
            <div>
              <a
                href="https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20would%20like%20to%20Book%20a%20Live%20Video%20Call%20shopping%20session%20now."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center justify-center gap-2.5 py-3.5 sm:py-4 px-9 rounded-full bg-[#195799] hover:bg-[#124378] text-white font-bold text-[15px] sm:text-[16px] tracking-wide shadow-lg hover:shadow-xl active:scale-[0.985] transition-all w-full max-w-[320px]"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <Video className="w-5 h-5" />
                <span>Book Now &rarr;</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
