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
    <section className="py-12 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-3xl sm:text-[42px] font-normal text-[#6B1A2A] tracking-normal leading-tight"
            >
              Shyambaba vs Other Supplier
            </h2>
            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
              className="text-[14px] text-[#2C2C2C] mt-2 font-normal"
            >
              See why top retailers choose Shyambaba
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison Table Card */}
        <ScrollReveal delay={100}>
          <div className="bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)] card-hover-lift">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50/40">
                  <th className="py-4 px-4 sm:px-6 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0e7490] w-1/2">
                    FEATURES
                  </th>
                  <th className="py-4 px-4 sm:px-6 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#9A7E2E] text-center w-1/4">
                    SHYAMBABA <span className="text-[#C9A84C]">★</span>
                  </th>
                  <th className="py-4 px-4 sm:px-6 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400 text-center w-1/4">
                    OTHERS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-xs sm:text-sm">
                {rows.map((row) => (
                  <tr key={row.feature} className="hover:bg-[#FAF8F5] transition-colors duration-200">
                    {/* Feature Label */}
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-neutral-700">
                      {row.feature}
                    </td>

                    {/* Shyambaba Mark */}
                    <td className="py-3.5 px-4 sm:px-6 text-center">
                      {row.shyambaba ? (
                        <span className="text-[#6B1A2A] font-bold text-base sm:text-lg">
                          ✔
                        </span>
                      ) : (
                        <span className="text-neutral-300 font-bold text-base sm:text-lg">
                          ✖
                        </span>
                      )}
                    </td>

                    {/* Others Mark */}
                    <td className="py-3.5 px-4 sm:px-6 text-center">
                      {row.others ? (
                        <span className="text-[#6B1A2A] font-bold text-base sm:text-lg">
                          ✔
                        </span>
                      ) : (
                        <span className="text-[#DC2626] font-bold text-base sm:text-lg">
                          ✖
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* "Start Growing With Us" Button */}
        <div className="mt-8 text-center">
          <a
            href="https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20I%20want%20to%20start%20growing%20my%20jewellery%20business%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile w-full inline-block py-3.5 px-8 rounded-xl sm:rounded-2xl bg-[#6B1A2A] hover:bg-[#521320] text-white font-bold text-sm tracking-wide shadow-md text-center"
          >
            Start Growing With Us
          </a>
        </div>
      </div>
    </section>
  )
}
