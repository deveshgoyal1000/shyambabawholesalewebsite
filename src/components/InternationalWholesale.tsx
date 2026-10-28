'use client'

import React from 'react'
import Link from 'next/link'
import { Globe, ShieldCheck, PackageCheck, ChevronRight, Plane } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export interface CountryItem {
  country: string
  slug: string
  flag: string
  popular?: boolean
}

export const DEFAULT_COUNTRIES: CountryItem[] = [
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

export interface InternationalWholesaleProps {
  heading?: string
  subheading?: string
  countries?: CountryItem[]
  ctaText?: string
  ctaLink?: string
  badge1Title?: string
  badge1Subtitle?: string
  badge2Title?: string
  badge2Subtitle?: string
  badge3Title?: string
  badge3Subtitle?: string
}

export default function InternationalWholesale({
  heading = 'We Serve Retailers Worldwide',
  subheading = 'Delivering Premium Jewellery to Your Country',
  countries = DEFAULT_COUNTRIES,
  ctaText = 'We ship to 50+ countries →',
  ctaLink = 'https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20am%20an%20international%20buyer%20and%20want%20to%20order%20wholesale%20jewellery%20with%20doorstep%20export%20to%20my%20country.',
  badge1Title = '50+ Countries',
  badge1Subtitle = 'Direct Export',
  badge2Title = '100% Insured',
  badge2Subtitle = 'Air Cargo',
  badge3Title = 'Customs Clear',
  badge3Subtitle = 'Documentation',
}: InternationalWholesaleProps) {
  const displayCountries = countries && countries.length > 0 ? countries : DEFAULT_COUNTRIES

  return (
    <section id="international" className="py-10 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Heading & Subtitle */}
        <ScrollReveal direction="up" distance={20} duration={650}>
          <h2
            style={{ fontFamily: 'Georgia, serif' }}
            className="text-[26px] sm:text-[34px] md:text-[42px] font-normal text-[#121212] tracking-[0.5px] leading-tight text-center"
          >
            {heading || 'We Serve Retailers Worldwide'}
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
            {subheading || 'Delivering Premium Jewellery to Your Country'}
          </p>
        </ScrollReveal>

        {/* Stacked Country Cards */}
        <div className="space-y-3.5 sm:space-y-4">
          {displayCountries.map((c, idx) => (
            <ScrollReveal
              key={c.slug || c.country}
              direction="up"
              distance={20}
              duration={550}
              delay={Math.min(idx * 50, 250)}
            >
              <Link
                href={`/international/${c.slug}`}
                scroll={false}
                className="flex items-center justify-between p-4 sm:py-5 sm:px-6 bg-white rounded-2xl border-2 border-[#E5DAC1] hover:border-[#C4B7A4] shadow-[0_3px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 group text-left active:scale-[0.98] active:bg-[#FAF5E8] select-none"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  {/* Flag Image with crisp outline & shadow */}
                  <div className="w-10 h-6 sm:w-12 sm:h-7 rounded-md overflow-hidden shadow-xs flex-shrink-0 border border-neutral-300">
                    <img
                      src={c.flag || 'https://flagcdn.com/w80/un.png'}
                      alt={`${c.country} Flag`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Country Name */}
                  <span className="text-[15px] sm:text-[16px] md:text-[17px] font-bold text-neutral-900 leading-none tracking-tight">
                    {c.country}
                  </span>
                </div>

                {/* Circular Arrow Button */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FAF5E8] text-[#195799] flex items-center justify-center transition-all duration-300 flex-shrink-0 border border-[#C9A84C]/40 shadow-xs">
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-6 text-center">
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile w-full inline-flex items-center justify-center gap-2.5 py-4 sm:py-4.5 px-8 sm:px-12 rounded-full bg-[#195799] hover:bg-[#124378] text-white font-bold text-[15px] sm:text-[17px] tracking-wide shadow-lg hover:shadow-xl active:scale-[0.985] transition-all text-center"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <Plane className="w-5 h-5 text-white shrink-0" />
            <span>{ctaText}</span>
          </a>
        </div>

        {/* Vibrant International Trust Bar */}
        <ScrollReveal direction="none" distance={0} delay={100} duration={600}>
          <div className="mt-6 sm:mt-9 bg-gradient-to-r from-[#124378] via-[#195799] to-[#124378] rounded-2xl p-4 sm:p-6 text-white shadow-lg border-2 border-[#C9A84C]/45">
            <div className="grid grid-cols-3 gap-2 text-center divide-x divide-white/25">
              <div className="px-1 sm:px-3 flex flex-col items-center justify-center">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/15 border border-white/25 flex items-center justify-center mb-1.5 sm:mb-2 shadow-inner">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD700]" />
                </div>
                <span className="text-[12.5px] sm:text-[15px] font-bold text-white block tracking-tight leading-tight">
                  {badge1Title}
                </span>
                <span className="text-[10.5px] sm:text-[12px] font-medium text-white/95 block mt-0.5">
                  {badge1Subtitle}
                </span>
              </div>

              <div className="px-1 sm:px-3 flex flex-col items-center justify-center">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/15 border border-white/25 flex items-center justify-center mb-1.5 sm:mb-2 shadow-inner">
                  <PackageCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD700]" />
                </div>
                <span className="text-[12.5px] sm:text-[15px] font-bold text-white block tracking-tight leading-tight">
                  {badge2Title}
                </span>
                <span className="text-[10.5px] sm:text-[12px] font-medium text-white/95 block mt-0.5">
                  {badge2Subtitle}
                </span>
              </div>

              <div className="px-1 sm:px-3 flex flex-col items-center justify-center">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/15 border border-white/25 flex items-center justify-center mb-1.5 sm:mb-2 shadow-inner">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD700]" />
                </div>
                <span className="text-[12.5px] sm:text-[15px] font-bold text-white block tracking-tight leading-tight">
                  {badge3Title}
                </span>
                <span className="text-[10.5px] sm:text-[12px] font-medium text-white/95 block mt-0.5">
                  {badge3Subtitle}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
