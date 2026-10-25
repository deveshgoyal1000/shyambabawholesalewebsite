'use client'

import React from 'react'
import { ShieldCheck, Users, Globe } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function WholesaleLeadCTA() {
  return (
    <section className="w-full bg-[#FAF8F5]">
      {/* 1. Maroon Banner matching Krishaz exactly */}
      <div className="bg-[#6B1A2A] text-white py-12 sm:py-16 px-4 sm:px-8 text-center">
        <ScrollReveal direction="up" distance={20} duration={650}>
          <div className="max-w-2xl mx-auto">
            {/* Headline */}
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-2xl sm:text-3xl md:text-4xl font-normal text-white leading-tight"
            >
              Boost your sales with Shyambaba&apos;s premium brass earrings
            </h2>

            {/* Subtitle */}
            <p className="text-white/80 text-xs sm:text-sm mt-3 max-w-md mx-auto leading-relaxed font-normal font-sans">
              Join thousands of retailers worldwide who trust SHYAMBABA for premium quality &amp; designer brass jewellery.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-7 max-w-[290px] sm:max-w-sm mx-auto space-y-3">
              <a
                href="#categories"
                className="btn-tactile block w-full bg-[#D4AF37] hover:bg-[#C9A84C] text-neutral-950 font-semibold text-xs sm:text-sm py-3 sm:py-3.5 px-6 rounded-full shadow-md hover:shadow-lg text-center font-sans"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                Shop Wholesale
              </a>

              <a
                href="https://wa.me/919876543210?text=Hello%20Shyambaba%20Wholesale%2C%20I%20want%20to%20contact%20you%20regarding%20wholesale%20partnership."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile block w-full bg-transparent hover:bg-white/10 text-white font-semibold text-xs sm:text-sm py-3 sm:py-3.5 px-6 rounded-full border border-white text-center font-sans"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                Contact Us
              </a>
            </div>

            {/* 3 Trust Badges matching Krishaz */}
            <div className="mt-7 sm:mt-8 space-y-2 text-[#EFE7D6] text-xs font-medium font-sans">
              <div className="flex items-center justify-center gap-6">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> Premium Quality
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#D4AF37]" /> 10000+ Retailers
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-[#D4AF37]" /> Worldwide Shipping
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* 2. On-Model Jewellery Photo matching Krishaz */}
      <ScrollReveal direction="up" distance={24} delay={100} duration={650}>
        <div className="w-full max-w-4xl mx-auto overflow-hidden bg-[#FAF8F5]">
          <img
            src="/images/cta/model_jewellery_perfect.png"
            alt="Shyambaba Wholesale Premium Jewellery Model"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </ScrollReveal>

      {/* 3. Contact Us Box matching Krishaz */}
      <div className="bg-white py-7 sm:py-8 px-4 text-center border-t border-[#EAE4DA]">
        <h3
          style={{ fontFamily: 'Georgia, serif' }}
          className="text-xl sm:text-2xl font-normal text-neutral-900 mb-2"
        >
          Contact Us
        </h3>
        <p className="text-xs sm:text-sm text-neutral-700 font-medium font-sans">
          Whatsapp:{' '}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B1A2A] font-semibold hover:underline transition-colors"
          >
            +91 98765 43210
          </a>
          {' '}/{' '}
          <a
            href="https://wa.me/917742126346"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B1A2A] font-semibold hover:underline transition-colors"
          >
            +91 77421 26346
          </a>
        </p>
      </div>
    </section>
  )
}
