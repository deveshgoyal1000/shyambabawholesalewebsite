'use client'

import React, { useEffect, useRef, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import { Video } from 'lucide-react'

export interface ManufacturerComparisonProps {
  heading?: string
}

export default function ManufacturerComparison({ heading }: ManufacturerComparisonProps = {}) {
  const tableRef = useRef<HTMLDivElement>(null)
  const [tableInView, setTableInView] = useState(false)

  const rows = [
    {
      feature: 'Video Call Selection',
      shyambaba: true,
      others: true,
    },
    {
      feature: 'International Shipping',
      shyambaba: true,
      others: false,
    },
    {
      feature: 'Custom Designs',
      shyambaba: true,
      others: false,
    },
    {
      feature: 'Quality Guarantee',
      shyambaba: true,
      others: false,
    },
    {
      feature: 'Wholesale Prices',
      shyambaba: true,
      others: false,
    },
    {
      feature: 'Replacement & Repair',
      shyambaba: true,
      others: false,
    },
    {
      feature: 'Wide & Latest Design Collection',
      shyambaba: true,
      others: false,
    },
    {
      feature: 'Made in Jaipur',
      subfeature: '(In-House Manufacturing)',
      shyambaba: true,
      others: false,
    },
  ]

  useEffect(() => {
    const el = tableRef.current
    if (!el) return

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setTableInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTableInView(true)
          observer.unobserve(el)
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -70px 0px',
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-10 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-2xl mx-auto px-3.5 sm:px-6">
        {/* Section Heading & Subtitle */}
        <ScrollReveal direction="up" distance={20} duration={800}>
          <div className="text-center mb-6 sm:mb-8">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[26px] sm:text-[34px] md:text-[42px] font-normal text-[#121212] tracking-[0.5px] leading-tight"
            >
              {heading || 'ShyamBabaWholesale vs Other Suppliers'}
            </h2>

            {/* Gold Accent Divider Bar matching Krishaz */}
            <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#C9A84C] mx-auto my-2.5 sm:my-3.5"></div>

            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
              className="text-[13px] sm:text-[14px] text-[#2C2C2C] font-normal"
            >
              Why 10,000+ Retailers Choose Direct Manufacturing
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison Table Card with Warm Cream & Gold Borders */}
        <div
          ref={tableRef}
          className="bg-[#FAF7F0] rounded-[22px] border-2 border-[#D4AF37] overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-all duration-700"
          style={{
            opacity: tableInView ? 1 : 0,
            transform: tableInView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
            transition: 'opacity 750ms cubic-bezier(0.22, 1, 0.36, 1), transform 750ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#D4AF37] bg-[#FAF4E6]/90">
                <th className="py-3 sm:py-3.5 px-3 sm:px-5 text-left font-bold text-[11px] sm:text-[13px] text-[#121212] uppercase tracking-wider">
                  FEATURES
                </th>
                <th className="py-3 sm:py-3.5 px-2 sm:px-4 text-center font-extrabold text-[11px] sm:text-[13px] text-[#8C5818] uppercase tracking-wider border-l border-[#D4AF37]">
                  SHYAMBABAWHOLESALE
                </th>
                <th className="py-3 sm:py-3.5 px-2 sm:px-4 text-center font-bold text-[11px] sm:text-[13px] text-[#555555] uppercase tracking-wider border-l border-[#D4AF37]">
                  OTHER SUPPLIERS
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={row.feature}
                  className="border-b border-[#D4AF37] last:border-b-0 transition-colors bg-transparent"
                  style={{
                    opacity: tableInView ? 1 : 0,
                    transform: tableInView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 16px, 0)',
                    transition: `opacity 750ms cubic-bezier(0.22, 1, 0.36, 1) ${idx * 100}ms, transform 750ms cubic-bezier(0.22, 1, 0.36, 1) ${idx * 100}ms`,
                    willChange: 'opacity, transform',
                  }}
                >
                  <td className="py-3 sm:py-3.5 px-3 sm:px-5 text-left text-[13px] sm:text-[14px] font-semibold text-[#121212] leading-tight">
                    <span>{row.feature}</span>
                    {row.subfeature && (
                      <span className="block text-[11px] sm:text-[12px] font-normal text-neutral-600 mt-0.5">
                        {row.subfeature}
                      </span>
                    )}
                  </td>

                  {/* ShyamBabaWholesale Column */}
                  <td className="py-3 sm:py-3.5 px-2 sm:px-4 text-center border-l border-[#D4AF37]">
                    <div
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#2E9B36] text-white shadow-xs"
                      style={{
                        transform: tableInView ? 'scale(1)' : 'scale(0.8)',
                        transition: `transform 500ms cubic-bezier(0.22, 1, 0.36, 1) ${idx * 100 + 80}ms`,
                      }}
                    >
                      <svg
                        className="w-3.5 h-3.5 stroke-[3.5]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </td>

                  {/* Other Suppliers Column */}
                  <td className="py-3 sm:py-3.5 px-2 sm:px-4 text-center border-l border-[#D4AF37]">
                    {row.others ? (
                      <div
                        className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#2E9B36] text-white shadow-xs"
                        style={{
                          transform: tableInView ? 'scale(1)' : 'scale(0.8)',
                          transition: `transform 500ms cubic-bezier(0.22, 1, 0.36, 1) ${idx * 100 + 80}ms`,
                        }}
                      >
                        <svg
                          className="w-3.5 h-3.5 stroke-[3.5]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div
                        className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#E03131] text-white shadow-xs"
                        style={{
                          transform: tableInView ? 'scale(1)' : 'scale(0.8)',
                          transition: `transform 500ms cubic-bezier(0.22, 1, 0.36, 1) ${idx * 100 + 80}ms`,
                        }}
                      >
                        <svg
                          className="w-3.5 h-3.5 stroke-[3.5]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Dual-Action Blue Pill Button Matching Theme */}
        <ScrollReveal direction="up" distance={16} delay={200} duration={750}>
          <div className="mt-6 sm:mt-8">
            <div
              className="w-full rounded-full bg-[#195799] hover:bg-[#134477] text-white shadow-[0_6px_22px_rgba(25,87,153,0.3)] transition-all duration-300 py-3 sm:py-3.5 px-3 sm:px-6 flex items-center justify-between text-center select-none"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {/* Left Action: Book Video Call */}
              <a
                href="https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20want%20to%20book%20a%20live%20video%20call%20for%20wholesale%20selection"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2.5 font-bold text-[13px] xs:text-[14px] sm:text-[16px] text-white hover:text-white/90 active:scale-98 transition-all px-1"
              >
                <Video className="w-4.5 h-4.5 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-white/40 font-light mx-0.5">|</span>
                <span className="tracking-tight whitespace-nowrap">Book Video Call</span>
              </a>

              {/* Center Divider */}
              <div className="h-6 w-[1px] bg-white/40 mx-1 flex-shrink-0" />

              {/* Right Action: Growing With Us */}
              <a
                href="https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20want%20to%20partner%20with%20your%20factory%20for%20wholesale%20supply."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 font-bold text-[13px] xs:text-[14px] sm:text-[16px] text-white hover:text-white/90 active:scale-98 transition-all px-1"
              >
                <span className="tracking-tight whitespace-nowrap">Growing With Us</span>
                <span className="text-[16px] sm:text-[18px] font-bold leading-none">&rarr;</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
