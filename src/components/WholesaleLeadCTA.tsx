'use client'

import React from 'react'
import { ShieldCheck, Users, Globe } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export interface WholesaleLeadCTAProps {
  title?: string
  description?: string
  button1Text?: string
  button1Link?: string
  button2Text?: string
  button2Link?: string
  badge1?: string
  badge2?: string
  badge3?: string
  modelImage?: string
  contactTitle?: string
  contactPhone?: string
}

export default function WholesaleLeadCTA({
  title = "Boost your sales with Shyambaba's premium brass earrings",
  description = 'Join thousands of retailers worldwide who trust SHYAMBABA for premium quality & designer brass jewellery.',
  button1Text = 'Shop Wholesale',
  button1Link = '#categories',
  button2Text = 'Contact Us',
  button2Link = 'https://wa.me/919680865791?text=Hello%20Shyambaba%20Wholesale%2C%20I%20want%20to%20contact%20you%20regarding%20wholesale%20partnership.',
  badge1 = 'Premium Quality',
  badge2 = '10000+ Retailers',
  badge3 = 'Worldwide Shipping',
  modelImage = '/images/cta/model_jewellery_perfect.png',
  contactTitle = 'Contact Us',
  contactPhone = '+91 96808 65791',
}: WholesaleLeadCTAProps) {
  return (
    <section className="w-full bg-[#FAF8F5]">
      {/* 1. Royal Blue Banner matching Krishaz */}
      <div className="bg-[#195799] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 text-center">
        <ScrollReveal direction="none" distance={0} duration={650}>
          <div className="max-w-2xl mx-auto">
            {/* Headline */}
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[26px] sm:text-[34px] md:text-[42px] font-normal text-white leading-[1.22] tracking-[0.5px]"
            >
              {title}
            </h2>

            {/* Subtitle */}
            <p className="text-white/95 text-[15px] sm:text-[17px] mt-3.5 sm:mt-4 max-w-lg mx-auto leading-relaxed font-normal font-sans">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="mt-7 sm:mt-8 max-w-[320px] sm:max-w-sm mx-auto space-y-3.5">
              <a
                href={button1Link}
                className="btn-tactile block w-full bg-[#D4AF37] hover:bg-[#C9A84C] text-neutral-950 font-bold text-[15px] sm:text-[17px] py-4 sm:py-4.5 px-8 rounded-full shadow-lg hover:shadow-xl text-center font-sans tracking-wide active:scale-98 transition-all"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {button1Text}
              </a>

              <a
                href={button2Link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile block w-full bg-transparent hover:bg-white/15 text-white font-bold text-[15px] sm:text-[17px] py-4 sm:py-4.5 px-8 rounded-full border-2 border-white text-center font-sans tracking-wide active:scale-98 transition-all"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {button2Text}
              </a>
            </div>

            {/* 3 Trust Badges */}
            <div className="mt-8 sm:mt-9 space-y-2.5 text-[#FAF8F5] text-[13.5px] sm:text-[15px] font-semibold font-sans">
              <div className="flex items-center justify-center gap-6 sm:gap-8">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#FFD700] stroke-[2.2]" /> {badge1}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#FFD700] stroke-[2.2]" /> {badge2}
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="flex items-center gap-2">
                  <Globe className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#FFD700] stroke-[2.2]" /> {badge3}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* 2. On-Model Jewellery Photo */}
      <ScrollReveal direction="none" distance={0} delay={100} duration={650}>
        <div className="w-full max-w-4xl mx-auto overflow-hidden bg-[#FAF8F5]">
          <img
            src={modelImage || '/images/cta/model_jewellery_perfect.png'}
            alt="Shyambaba Wholesale Premium Jewellery Model"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </ScrollReveal>

      {/* 3. Contact Us Box */}
      <div className="bg-white py-7 sm:py-8 px-4 text-center border-t border-[#EAE4DA]">
        <h3
          style={{ fontFamily: 'Georgia, serif' }}
          className="text-xl sm:text-2xl font-normal text-neutral-900 mb-2"
        >
          {contactTitle}
        </h3>
        <p className="text-xs sm:text-sm text-neutral-700 font-medium font-sans">
          Whatsapp:{' '}
          <a
            href={`https://wa.me/${contactPhone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#195799] font-semibold hover:underline transition-colors"
          >
            {contactPhone}
          </a>
        </p>
      </div>
    </section>
  )
}
