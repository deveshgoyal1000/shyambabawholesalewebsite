'use client'

import React, { useState } from 'react'
import { Plus, Minus, MessageCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What are the shipping charges & Taxes?',
      answer:
        '• Domestic shipping across India is calculated based on consignment weight and location, with standard express courier options.\n• All domestic orders are GST compliant (3% GST on brass jewellery).\n• For international shipping, rates are calculated dynamically based on package weight via DHL, FedEx, or Aramex express air freight.',
    },
    {
      question: 'What is the Minimum Order Value (MOV / MOQ)?',
      answer:
        '• Minimum Order Value is ₹3,000/- through the website catalogue directly.\n• Minimum order is ₹10,000/- if you purchase through live video call or factory visit.\n• You can mix and match different product categories (earrings, bangles, necklaces) to reach the minimum value.',
    },
    {
      question: 'Do you offer Video Call for product selection?',
      answer:
        'Yes! We offer live personalized video shopping calls on WhatsApp. Our experienced sales coordinators will showcase our latest factory inventory under natural studio lighting, demonstrate stone sparkle and weight, and answer any questions in real-time.',
    },
    {
      question: 'How long does it take to dispatch the order?',
      answer:
        'Standard catalogue orders are packed and dispatched within 24 hours of payment confirmation. Domestic courier delivery takes 2 to 4 business days. International express delivery via DHL/FedEx takes 4 to 8 business days depending on your country.',
    },
    {
      question: 'Do you ship internationally?',
      answer:
        'Yes, we export to over 50+ countries worldwide including USA, UK, Canada, UAE, Malaysia, Singapore, Australia, and Bangladesh. All orders are packed in 5-ply export master cartons with complete commercial invoices and HSN code classification.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept Domestic Bank Transfers (NEFT/RTGS/IMPS), UPI (Google Pay, PhonePe, Paytm), International Wire Transfer (SWIFT), Wise, Remitly, Western Union, and PayPal. All payment details are shared directly by our factory accounts team.',
    },
    {
      question: 'Can you manufacture custom designs?',
      answer:
        'Yes! As an in-house Jaipur brass casting manufacturer, we can produce custom designs from your CAD files or hand sketches. Custom mould MOQ is generally 50 to 100 pairs per design. We also provide custom logo branding cards and packaging.',
    },
  ]

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-12 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Section Heading & Subtitle */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-3xl sm:text-[42px] font-normal text-[#6B1A2A] tracking-normal leading-tight"
            >
              Frequently Asked Questions
            </h2>
            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
              className="text-[14px] text-[#2C2C2C] font-normal mt-2 text-center"
            >
              Everything you need to know about purchasing wholesale jewellery directly
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List with Smooth Grid Animation */}
        <ScrollReveal delay={100}>
          <div className="space-y-2.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E7DFD5] overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,0.02)] transition-colors duration-300 hover:border-[#C9A84C]/50"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-4 sm:p-4.5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors duration-250"
                    aria-expanded={isOpen}
                  >
                    <span
                      style={{
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      }}
                      className="font-semibold text-xs sm:text-sm text-[#121212]"
                    >
                      {faq.question}
                    </span>
                    <div className="text-[#6B1A2A] font-bold text-lg flex-shrink-0 transition-transform duration-300 ease-out">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-[#2C2C2C] leading-relaxed border-t border-[#F5EFE6] whitespace-pre-line bg-[#FDFBF9]">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
