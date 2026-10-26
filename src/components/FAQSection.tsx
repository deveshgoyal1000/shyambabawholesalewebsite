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
    <section id="faq" className="py-10 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-2xl mx-auto px-3.5 sm:px-6">
        {/* Section Heading & Subtitle */}
        <ScrollReveal direction="up" distance={20} duration={650}>
          <div className="text-center mb-6 sm:mb-9">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[26px] sm:text-[34px] md:text-[42px] font-normal text-[#195799] tracking-[0.5px] leading-tight"
            >
              Frequently Asked Questions
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
              Everything You Need to Know About Ordering Wholesale
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List with ScrollReveal */}
        <ScrollReveal direction="up" distance={24} delay={100} duration={650}>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-neutral-200/90 overflow-hidden shadow-[0_2px_6px_rgba(0,0,0,0.02)] transition-colors duration-200 hover:border-[#C9A84C]/60"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 font-semibold text-xs sm:text-sm text-neutral-900 focus:outline-none"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  aria-expanded={openIndex === idx}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className="w-6 h-6 rounded-full bg-[#FAF5E8] flex items-center justify-center text-[#195799] flex-shrink-0 transition-transform duration-200">
                    {openIndex === idx ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-neutral-600 text-xs sm:text-sm font-normal leading-relaxed whitespace-pre-line border-t border-neutral-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom WhatsApp Contact Strip */}
          <div className="mt-8 text-center bg-white rounded-xl p-4 sm:p-5 border border-neutral-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-left">
              <span className="text-xs sm:text-sm font-semibold text-neutral-900 block">
                Have more questions?
              </span>
              <span className="text-[11px] sm:text-xs text-neutral-500 block">
                Our Jaipur wholesale desk is available 10:30 AM to 7:30 PM IST.
              </span>
            </div>
            <a
              href="https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20have%20a%20question%20regarding%20wholesale%20orders."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wide shadow"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
