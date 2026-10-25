'use client'

import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'

export default function ManufacturerComparison() {
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

  return (
    <section className="py-10 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-2xl mx-auto px-3.5 sm:px-6">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-6 sm:mb-8">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[26px] sm:text-[34px] md:text-[42px] font-normal text-[#6B1A2A] tracking-[0.5px] leading-tight"
            >
              Shyambaba vs Other Supplier
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

        {/* Comparison Table Card matching Krishaz exactly */}
        <ScrollReveal delay={100}>
          <div className="bg-white rounded-xl border border-[#C9A84C] overflow-hidden shadow-[0_4px_16px_rgba(107,26,42,0.06)]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-[#C9A84C] bg-[#FAF8F5]/80">
                  <th className="py-3 px-3 sm:px-4 text-left font-bold text-[11px] sm:text-xs text-[#2C2C2C] uppercase tracking-wider">
                    Features
                  </th>
                  <th className="py-3 px-2 sm:px-4 text-center font-bold text-[11px] sm:text-xs text-[#6B1A2A] uppercase tracking-wider bg-[#FAF5E8]/60 border-x border-[#C9A84C]/40">
                    <span className="flex items-center justify-center gap-1">
                      <span>Shyambaba</span>
                      <span className="text-[#C9A84C] text-sm">👑</span>
                    </span>
                  </th>
                  <th className="py-3 px-2 sm:px-4 text-center font-bold text-[11px] sm:text-xs text-neutral-500 uppercase tracking-wider">
                    Other Suppliers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE3D8]">
                {rows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={`transition-colors ${
                      idx % 2 === 1 ? 'bg-[#FCFAF7]' : 'bg-white'
                    }`}
                  >
                    <td className="py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium text-[#2C2C2C]">
                      {row.feature}
                    </td>
                    <td className="py-3 px-2 sm:px-4 text-center bg-[#FAF5E8]/40 border-x border-[#C9A84C]/30">
                      <div className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#6B1A2A]/10 text-[#6B1A2A]">
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
                    <td className="py-3 px-2 sm:px-4 text-center">
                      {row.others ? (
                        <div className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-neutral-100 text-neutral-500">
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
                        <div className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-50 text-red-500">
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
          <div className="mt-7 text-center">
            <a
              href="https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20I%20want%20to%20partner%20with%20your%20factory%20for%20wholesale%20supply."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile inline-block py-3 sm:py-3.5 px-8 rounded-full bg-[#6B1A2A] hover:bg-[#521320] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md w-full max-w-[280px]"
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
