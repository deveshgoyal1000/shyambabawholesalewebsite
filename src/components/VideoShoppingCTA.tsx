'use client'

import React from 'react'
import { Video } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function VideoShoppingCTA() {
  return (
    <section className="py-8 bg-[#FAF8F5]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Yellow-tinted Card */}
        <ScrollReveal>
          <div className="bg-[#FFFDF4] rounded-2xl border border-[#F5ECD7] p-8 sm:p-10 text-center shadow-sm card-hover-lift group">
            {/* Gold Camera Icon */}
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center text-[#C9A84C] group-hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
              <Video className="w-9 h-9 stroke-[1.5]" />
            </div>

            {/* Heading */}
            <h3
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-2xl sm:text-3xl font-normal text-[#121212] mb-1 tracking-normal"
            >
              Book a Live Video Call
            </h3>

            {/* Subtitle */}
            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
              className="text-[14px] text-[#2C2C2C] mb-6 font-normal"
            >
              See products in real before ordering
            </p>

            {/* "Book Now →" Button */}
            <div>
              <a
                href="https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20I%20would%20like%20to%20Book%20a%20Live%20Video%20Call%20shopping%20session%20now."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile w-full inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl sm:rounded-2xl bg-[#6B1A2A] hover:bg-[#521320] text-white font-bold text-sm tracking-wide shadow-md"
              >
                <Video className="w-4 h-4" />
                <span>Book Now →</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
