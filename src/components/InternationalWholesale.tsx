'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Globe, ShieldCheck, PackageCheck, ChevronRight } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function InternationalWholesale() {
  const [showAll, setShowAll] = useState(false)

  const countries = [
    {
      country: 'United States',
      slug: 'united-states',
      flag: 'https://flagcdn.com/w80/us.png',
      popular: true,
    },
    {
      country: 'United Kingdom',
      slug: 'united-kingdom',
      flag: 'https://flagcdn.com/w80/gb.png',
      popular: false,
    },
    {
      country: 'Bangladesh',
      slug: 'bangladesh',
      flag: 'https://flagcdn.com/w80/bd.png',
      popular: false,
    },
    {
      country: 'Canada',
      slug: 'canada',
      flag: 'https://flagcdn.com/w80/ca.png',
      popular: false,
    },
    {
      country: 'Dubai (Emirates)',
      slug: 'dubai',
      flag: 'https://flagcdn.com/w80/ae.png',
      popular: false,
    },
    {
      country: 'Malaysia',
      slug: 'malaysia',
      flag: 'https://flagcdn.com/w80/my.png',
      popular: false,
    },
    {
      country: 'Australia',
      slug: 'australia',
      flag: 'https://flagcdn.com/w80/au.png',
      popular: false,
    },
    {
      country: 'Singapore',
      slug: 'singapore',
      flag: 'https://flagcdn.com/w80/sg.png',
      popular: false,
    },
  ]

  const displayed = showAll ? countries : countries.slice(0, 5)

  return (
    <section id="international" className="py-10 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Heading & Subtitle */}
        <ScrollReveal direction="up" distance={20} duration={650}>
          <h2
            style={{ fontFamily: 'Georgia, serif' }}
            className="text-[26px] sm:text-[34px] md:text-[42px] font-normal text-[#6B1A2A] tracking-[0.5px] leading-tight text-center"
          >
            We Serve Retailers Worldwide
          </h2>

          {/* Gold Accent Divider Bar matching Krishaz */}
          <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#C9A84C] mx-auto my-2.5 sm:my-3.5"></div>

          <p
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
            className="text-[13px] sm:text-[14px] text-[#2C2C2C] mb-6 sm:mb-8 font-normal text-center"
          >
            Delivering Premium Jewellery to Your Country
          </p>
        </ScrollReveal>

        {/* Stacked Country Cards - Enhanced Height, Distinct Luxury Borders, Country Name Only */}
        <div className="space-y-3.5 sm:space-y-4">
          {displayed.map((c, idx) => (
            <ScrollReveal
              key={c.country}
              direction="up"
              distance={20}
              duration={550}
              delay={Math.min(idx * 50, 250)}
            >
              <Link
                href={`/international/${c.slug}`}
                className="flex items-center justify-between p-4 sm:py-5 sm:px-6 bg-white rounded-2xl border-2 border-[#E5DAC1] hover:border-[#6B1A2A] shadow-[0_3px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(107,26,42,0.1)] transition-all duration-300 group text-left active:scale-[0.99] select-none"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  {/* Flag Image with crisp outline & shadow */}
                  <div className="w-10 h-6 sm:w-12 sm:h-7 rounded-md overflow-hidden shadow-xs flex-shrink-0 border border-neutral-300">
                    <img
                      src={c.flag}
                      alt={`${c.country} Flag`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Country Name Only */}
                  <span className="text-sm sm:text-base md:text-[17px] font-bold text-neutral-900 group-hover:text-[#6B1A2A] transition-colors leading-none tracking-tight">
                    {c.country}
                  </span>
                </div>

                {/* Refined Circular Arrow Button */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FAF5E8] group-hover:bg-[#6B1A2A] text-[#6B1A2A] group-hover:text-white flex items-center justify-center transition-all duration-300 flex-shrink-0 border border-[#C9A84C]/40 group-hover:border-[#6B1A2A] shadow-xs">
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View More / Less Button */}
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-6 text-xs sm:text-sm font-semibold text-[#6B1A2A] hover:text-[#521320] flex items-center gap-1.5 mx-auto underline decoration-[#C9A84C] underline-offset-4 active:scale-98 transition-transform"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <span>View All 50+ Countries</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}

        {/* Maroon Trust Bar */}
        <ScrollReveal direction="up" distance={22} delay={150} duration={650}>
          <div className="mt-8 sm:mt-10 bg-[#6B1A2A] rounded-2xl p-4 sm:p-5 text-white shadow-md border border-[#8C2337]">
            <div className="grid grid-cols-3 gap-2 text-center divide-x divide-white/20">
              <div className="px-1 sm:px-2">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A84C] mx-auto mb-1" />
                <span className="text-[10px] sm:text-xs font-bold block">50+ Countries</span>
                <span className="text-[8px] sm:text-[10px] text-white/70 block">Direct Export</span>
              </div>
              <div className="px-1 sm:px-2">
                <PackageCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A84C] mx-auto mb-1" />
                <span className="text-[10px] sm:text-xs font-bold block">100% Insured</span>
                <span className="text-[8px] sm:text-[10px] text-white/70 block">Air Cargo</span>
              </div>
              <div className="px-1 sm:px-2">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A84C] mx-auto mb-1" />
                <span className="text-[10px] sm:text-xs font-bold block">Customs Clear</span>
                <span className="text-[8px] sm:text-[10px] text-white/70 block">Documentation</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
