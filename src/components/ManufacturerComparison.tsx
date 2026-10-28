'use client'

import React, { useEffect, useRef, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

export interface ComparisonRow {
  feature: string
  shyambaba: boolean
  others: boolean
}

export const DEFAULT_COMPARISON_ROWS: ComparisonRow[] = [
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
    others: true,
  },
  {
    feature: 'Low Investment *High Returns',
    shyambaba: true,
    others: false,
  },
]

export interface ManufacturerComparisonProps {
  heading?: string
  subheading?: string
  companyName?: string
  otherName?: string
  rows?: ComparisonRow[]
}

export default function ManufacturerComparison({
  heading = 'ShyamBabaWholesale vs Other Suppliers',
  subheading = 'Why 10,000+ Retailers Choose Direct Manufacturing',
  companyName = 'ShyamBabaWholesale',
  otherName = 'Other Suppliers',
  rows = DEFAULT_COMPARISON_ROWS,
}: ManufacturerComparisonProps) {
  const tableRef = useRef<HTMLDivElement>(null)
  const [tableInView, setTableInView] = useState(false)

  const displayRows = rows && rows.length > 0 ? rows : DEFAULT_COMPARISON_ROWS

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
              {subheading || 'Why 10,000+ Retailers Choose Direct Manufacturing'}
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison Table */}
        <div
          ref={tableRef}
          className="rounded-2xl border-2 border-[#D4C7B4] overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
        >
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-gradient-to-r from-[#195799] to-[#124378] text-white p-3.5 sm:p-5 items-center font-bold text-xs sm:text-base border-b-2 border-[#C9A84C]">
            <div className="col-span-6 sm:col-span-6 tracking-wide">
              Features
            </div>
            <div className="col-span-3 sm:col-span-3 text-center text-[#FFD700] tracking-wide">
              {companyName}
            </div>
            <div className="col-span-3 sm:col-span-3 text-center text-white/80 tracking-wide font-medium">
              {otherName}
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#EAE4DA]">
            {displayRows.map((row, idx) => (
              <div
                key={row.feature ?? idx}
                className={`grid grid-cols-12 p-3 sm:p-4 items-center text-xs sm:text-sm font-medium transition-colors ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'
                }`}
              >
                <div className="col-span-6 text-neutral-800 pr-2">
                  {row.feature}
                </div>
                <div className="col-span-3 flex justify-center items-center">
                  {row.shyambaba ? (
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm sm:text-base shadow-xs">
                      ✓
                    </span>
                  ) : (
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-bold text-xs sm:text-sm">
                      ✕
                    </span>
                  )}
                </div>
                <div className="col-span-3 flex justify-center items-center">
                  {row.others ? (
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm sm:text-base">
                      ✓
                    </span>
                  ) : (
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-red-50 text-red-400 flex items-center justify-center font-bold text-xs sm:text-sm">
                      ✕
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
