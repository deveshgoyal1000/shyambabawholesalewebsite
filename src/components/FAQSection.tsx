'use client'

import React, { useState } from 'react'
import { Plus, Minus, MessageCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export interface FAQItem {
  question: string
  answer: string
}

export const DEFAULT_FAQS: FAQItem[] = [
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

export interface FAQSectionProps {
  heading?: string
  subheading?: string
  faqs?: FAQItem[]
}

export default function FAQSection({
  heading = 'Frequently Asked Questions',
  subheading = 'Everything You Need to Know About Ordering Wholesale',
  faqs = DEFAULT_FAQS,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const displayFaqs = faqs && faqs.length > 0 ? faqs : DEFAULT_FAQS

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-10 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-2xl mx-auto px-3.5 sm:px-6">
        {/* Section Heading & Subtitle */}
        <ScrollReveal direction="up" distance={20} duration={650}>
          <div className="text-center mb-6 sm:mb-9">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[26px] sm:text-[34px] md:text-[42px] font-normal text-[#121212] tracking-[0.5px] leading-tight"
            >
              {heading || 'Frequently Asked Questions'}
            </h2>

            {/* Gold Accent Divider Bar */}
            <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#C9A84C] mx-auto my-2.5 sm:my-3.5"></div>

            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
              className="text-[13px] sm:text-[14px] text-[#2C2C2C] font-normal"
            >
              {subheading || 'Everything You Need to Know About Ordering Wholesale'}
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List with ScrollReveal */}
        <div className="space-y-3 sm:space-y-3.5">
          {displayFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <ScrollReveal
                key={faq.question ?? idx}
                direction="none"
                distance={0}
                duration={450}
                delay={idx * 40}
              >
                <div className="border border-[#E2D8C7] rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-xs transition-all duration-200">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-neutral-900 text-sm sm:text-base hover:bg-[#FAF8F5] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FAF5E8] text-[#195799] flex items-center justify-center shrink-0 border border-[#C9A84C]/40">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-neutral-700 text-xs sm:text-sm leading-relaxed border-t border-[#F2ECE1] pt-3 whitespace-pre-line bg-[#FCFBF8]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Ask Question on WhatsApp CTA */}
        <div className="mt-8 text-center">
          <p className="text-neutral-600 text-xs sm:text-sm mb-3">
            Have a different question not listed above?
          </p>
          <a
            href="https://wa.me/919680865791?text=Hello%20Shyambaba%20Wholesale%2C%20I%20have%20a%20question%20about%20ordering%20wholesale."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#195799] hover:bg-[#124378] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Us On WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
