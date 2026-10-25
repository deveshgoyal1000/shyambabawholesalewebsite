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
    <section id="international" className="py-12 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Heading & Subtitle */}
        <ScrollReveal>
          <h2
            style={{ fontFamily: 'Georgia, serif' }}
            className="text-3xl sm:text-[42px] font-normal text-[#6B1A2A] mb-2 tracking-normal leading-tight text-center"
          >
            We Serve Retailers Worldwide
          </h2>
          <p
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
            className="text-[14px] text-[#2C2C2C] mb-8 font-normal text-center"
          >
            Delivering Premium Jewellery to Your Country
          </p>
        </ScrollReveal>

        {/* Stacked Country Cards */}
        <ScrollReveal delay={100}>
          <div className="space-y-3">
            {displayed.map((c) => (
              <a
                key={c.country}
                href={c.queryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-2xl border border-neutral-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] card-hover-lift hover:border-[#C9A84C]/60 group text-left"
              >
                <div className="flex items-center gap-3.5">
                  {/* Flag Image */}
                  <div className="w-9 h-6 sm:w-10 sm:h-7 rounded overflow-hidden shadow-sm flex-shrink-0 border border-neutral-200">
                    <img
                      src={c.flag}
                      alt={c.country}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Country Name + Popular Badge */}
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm sm:text-base text-[#121212] group-hover:text-[#6B1A2A] transition-colors duration-250">
                      {c.country}
                    </span>
                    {c.popular && (
                      <span className="px-2 py-0.5 rounded-full bg-[#C9A84C] text-white text-[9px] font-bold uppercase tracking-wider">
                        POPULAR
                      </span>
                    )}
                  </div>
                </div>

                {/* Arrow Circle */}
                <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:border-[#6B1A2A] group-hover:text-[#6B1A2A] group-hover:bg-[#6B1A2A]/5 group-hover:translate-x-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <ChevronRight className="w-4 h-4 stroke-[2]" />
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* "+ More Countries" Button */}
        <div className="mt-6 mb-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-tactile px-8 py-3 rounded-full bg-[#6B1A2A] hover:bg-[#521320] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md"
          >
            {showAll ? 'Show Fewer Countries' : '+ More Countries'}
          </button>
        </div>
      </div>

      {/* Full-Width Solid Maroon Strip */}
      <div className="bg-[#6B1A2A] text-white py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-2 text-center">
          <div className="flex flex-col items-center justify-center space-y-2 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#C9A84C] flex items-center justify-center text-[#C9A84C] transition-transform duration-200 group-hover:scale-105">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[11px] sm:text-xs font-semibold text-[#FDF8F3] tracking-wide">
              Worldwide Shipping
            </span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#C9A84C] flex items-center justify-center text-[#C9A84C] transition-transform duration-200 group-hover:scale-105">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[11px] sm:text-xs font-semibold text-[#FDF8F3] tracking-wide">
              Safe &amp; Secure Delivery
            </span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#C9A84C] flex items-center justify-center text-[#C9A84C] transition-transform duration-200 group-hover:scale-105">
              <PackageCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[11px] sm:text-xs font-semibold text-[#FDF8F3] tracking-wide">
              Customs Support
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
