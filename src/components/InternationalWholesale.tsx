'use client'

import React, { useState } from 'react'
import { ArrowRight, Globe, ShieldCheck, PackageCheck, ChevronRight } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function InternationalWholesale() {
  const [showAll, setShowAll] = useState(false)

  const countries = [
    {
      country: 'United States',
      flag: 'https://flagcdn.com/w80/us.png',
      popular: true,
      queryUrl: 'https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20I%20am%20from%20USA%20and%20want%20to%20order%20jewellery%20with%20doorstep%20shipping.',
    },
    {
      country: 'United Kingdom',
      flag: 'https://flagcdn.com/w80/gb.png',
      popular: false,
      queryUrl: 'https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20I%20am%20from%20UK%20and%20want%20to%20order%20jewellery.',
    },
    {
      country: 'Bangladesh',
      flag: 'https://flagcdn.com/w80/bd.png',
      popular: false,
      queryUrl: 'https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20I%20am%20from%20Bangladesh%20and%20want%20to%20inquire%20about%20cargo%20delivery.',
    },
    {
      country: 'Canada',
      flag: 'https://flagcdn.com/w80/ca.png',
      popular: false,
      queryUrl: 'https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20I%20am%20from%20Canada%20and%20want%20to%20order%20jewellery.',
    },
    {
      country: 'Dubai (Emirates)',
      flag: 'https://flagcdn.com/w80/ae.png',
      popular: false,
      queryUrl: 'https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20I%20am%20from%20Dubai%20and%20want%20express%20shipping.',
    },
    {
      country: 'Malaysia',
      flag: 'https://flagcdn.com/w80/my.png',
      popular: false,
      queryUrl: 'https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20I%20am%20from%20Malaysia%20and%20want%20wholesale%20rates.',
    },
    {
      country: 'Australia',
      flag: 'https://flagcdn.com/w80/au.png',
      popular: false,
      queryUrl: 'https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20I%20am%20from%20Australia%20and%20want%20wholesale%20rates.',
    },
    {
      country: 'Singapore',
      flag: 'https://flagcdn.com/w80/sg.png',
      popular: false,
      queryUrl: 'https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20I%20am%20from%20Singapore%20and%20want%20wholesale%20rates.',
    },
  ]

  const displayed = showAll ? countries : countries.slice(0, 5)

  return (
    <section id="international" className="py-10 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-2xl mx-auto px-3.5 sm:px-6 text-center">
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

        {/* Stacked Country Cards with Staggered ScrollReveal */}
        <div className="space-y-2.5 sm:space-y-3">
          {displayed.map((c, idx) => (
            <ScrollReveal
              key={c.country}
              direction="up"
              distance={20}
              duration={550}
              delay={Math.min(idx * 50, 250)}
            >
              <a
                href={c.queryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-neutral-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] card-hover-lift hover:border-[#C9A84C]/60 group text-left active:scale-[0.99]"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <div className="flex items-center gap-3 sm:gap-3.5">
                  {/* Flag Image */}
                  <div className="w-8 h-5 sm:w-10 sm:h-7 rounded overflow-hidden shadow-sm flex-shrink-0 border border-neutral-200">
                    <img
                      src={c.flag}
                      alt={`${c.country} Flag`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-neutral-900 group-hover:text-[#6B1A2A] transition-colors flex items-center gap-1.5">
                      {c.country}
                      {c.popular && (
                        <span className="text-[9px] bg-[#FAF5E8] text-[#9A7E2E] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider border border-[#C9A84C]/30">
                          Popular
                        </span>
                      )}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-neutral-500 font-normal mt-0.5">
                      Express Air Cargo &bull; Doorstep Delivery
                    </p>
                  </div>
                </div>

                {/* Arrow Button */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-100 group-hover:bg-[#6B1A2A] text-neutral-600 group-hover:text-white flex items-center justify-center transition-all flex-shrink-0 ml-2">
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* View More / Less Button */}
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-5 text-xs font-semibold text-[#6B1A2A] hover:text-[#521320] flex items-center gap-1 mx-auto underline decoration-[#C9A84C] underline-offset-4"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <span>View All 50+ Countries</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Maroon Trust Bar matching Krishaz screenshot */}
        <ScrollReveal direction="up" distance={22} delay={150} duration={650}>
          <div className="mt-8 sm:mt-10 bg-[#6B1A2A] rounded-xl sm:rounded-2xl p-4 sm:p-5 text-white shadow-md">
            <div className="grid grid-cols-3 gap-2 text-center divide-x divide-white/20">
              <div className="px-1 sm:px-2">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A84C] mx-auto mb-1" />
                <span className="text-[10px] sm:text-xs font-bold block">50+ Countries</span>
                <span className="text-[8px] sm:text-[10px] text-white/70 block">Exported</span>
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
