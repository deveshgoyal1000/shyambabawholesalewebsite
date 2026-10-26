'use client'

import React, { useEffect, useRef, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

export default function ManufacturerComparison() {
  const tableRef = useRef<HTMLDivElement>(null)
  const [tableInView, setTableInView] = useState(false)

  const rows = [
    {
      feature: 'Manufacturer (Not Trader)',
      shyambaba: true,
      others: false,
    },
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
      feature: 'Bulk Discounts',
      shyambaba: true,
      others: false,
    },
    {
      feature: 'Low Investment *High Returns',
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
              ShyamBabaWholesale vs Other Suppliers
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

        {/* Comparison Table Card with line-by-line staggered reveal */}
        <div
          ref={tableRef}
          className="bg-white rounded-2xl border-2 border-[#C9A84C]/60 overflow-hidden shadow-[0_6px_24px_rgba(25, 87, 153,0.06)] transition-all duration-700"
          style={{
            opacity: tableInView ? 1 : 0,
            transform: tableInView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
            transition: 'opacity 750ms cubic-bezier(0.22, 1, 0.36, 1), transform 750ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-[#C9A84C] bg-[#FAF8F5]">
                <th className="py-3.5 px-3 sm:px-5 text-left font-bold text-[11px] sm:text-xs text-[#2C2C2C] uppercase tracking-wider">
                  Features
                </th>
                <th className="py-3.5 px-2 sm:px-4 text-center font-bold text-[11px] sm:text-xs text-[#195799] uppercase tracking-wider bg-[#FAF5E8] border-x-2 border-[#C9A84C]/50">
                  <span className="font-extrabold text-[#195799] text-xs sm:text-sm tracking-tight block">
                    ShyamBabaWholesale
                  </span>
                </th>
                <th className="py-3.5 px-2 sm:px-4 text-center font-bold text-[11px] sm:text-xs text-neutral-500 uppercase tracking-wider">
                  Other Suppliers
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE3D8]">
              {rows.map((row, idx) => (
                <tr
                  key={row.feature}
                  className={`transition-all ${
                    idx % 2 === 1 ? 'bg-[#FCFAF7]' : 'bg-white'
                  }`}
                  style={{
                    opacity: tableInView ? 1 : 0,
                    transform: tableInView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 16px, 0)',
                    transition: `opacity 750ms cubic-bezier(0.22, 1, 0.36, 1) ${idx * 140}ms, transform 750ms cubic-bezier(0.22, 1, 0.36, 1) ${idx * 140}ms`,
                    willChange: 'opacity, transform',
                  }}
                >
                  <td className="py-3.5 px-3 sm:px-5 text-xs sm:text-sm font-semibold text-[#2C2C2C]">
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-2 sm:px-4 text-center bg-[#FAF5E8]/60 border-x-2 border-[#C9A84C]/40">
                    <div
                      className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 shadow-2xs"
                      style={{
                        transform: tableInView ? 'scale(1)' : 'scale(0.8)',
                        transition: `transform 600ms cubic-bezier(0.22, 1, 0.36, 1) ${idx * 140 + 100}ms`,
                      }}
                    >
                      <svg
                        className="w-3.5 h-3.5 stroke-[3]"
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
                  <td className="py-3.5 px-2 sm:px-4 text-center">
                    {row.others ? (
                      <div
                        className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 shadow-2xs"
                        style={{
                          transform: tableInView ? 'scale(1)' : 'scale(0.8)',
                          transition: `transform 600ms cubic-bezier(0.22, 1, 0.36, 1) ${idx * 140 + 100}ms`,
                        }}
                      >
                        <svg
                          className="w-3.5 h-3.5 stroke-[2.5]"
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
                        className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-rose-100 text-rose-600 border border-rose-300 shadow-2xs"
                        style={{
                          transform: tableInView ? 'scale(1)' : 'scale(0.8)',
                          transition: `transform 600ms cubic-bezier(0.22, 1, 0.36, 1) ${idx * 140 + 100}ms`,
                        }}
                      >
                        <svg
                          className="w-3.5 h-3.5 stroke-[3]"
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

        {/* CTA Button below Table */}
        <ScrollReveal direction="up" distance={16} delay={200} duration={750}>
          <div className="mt-7 text-center">
            <a
              href="https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20want%20to%20partner%20with%20your%20factory%20for%20wholesale%20supply."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile inline-block py-3 sm:py-3.5 px-8 rounded-full bg-[#195799] hover:bg-[#124378] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md w-full max-w-[280px]"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              Start Growing With Us &rarr;
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
