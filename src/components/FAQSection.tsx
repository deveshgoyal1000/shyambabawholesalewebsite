'use client'

import React, { useState } from 'react'
import { Plus, Minus, MessageCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How do I calculate the price of a product?',
      answer:
        'Each jewellery photo in our website/catalog has a unique code.\nTo calculate the price:\n• Multiply the code by the price factor (shared by our team).\n👉 Contact us on WhatsApp (+91 96808 65791) for the calculation number and final price.',
    },
    {
      question: 'What is the minimum order value?',
      answer:
        '• Domestic (India): ₹10,000\n• International Orders: ₹20,000',
    },
    {
      question: 'Do you provide international shipping?',
      answer:
        '✅ Yes! We ship jewellery worldwide.\n• Countries we already deliver to: USA, Canada, UK, Italy, UAE, Australia, New Zealand, Netherlands, and many more.\n• Delivery Time: 5–12 business days (varies by country).\n👉 To place an international order, contact us on WhatsApp.',
    },
    {
      question: 'How are wholesale orders delivered?',
      answer:
        '• Domestic (India): DTDC, Skyking, Professional Couriers (or your preferred courier).\n• International: UPS, DTDC, Atlantic International Express (or your preferred courier).',
    },
    {
      question: 'Do you charge extra for courier/shipping?',
      answer:
        'Yes, shipping charges are separate from the order value.\n• Domestic Orders: ₹80–₹100 per kg (depends on city & state)\n• International Orders: Based on parcel weight & dimensions.',
    },
    {
      question: 'Do you provide a GST bill?',
      answer:
        'Yes, we issue a GST invoice on all purchases.\n• Share your GST number to claim input credit.\n• GST Rate: 3% on imitation & silver jewellery.',
    },
    {
      question: 'How can I place a wholesale order?',
      answer:
        'You can order in 3 simple ways:\n1. Share selected product photos on WhatsApp\n2. Join a live video call to explore our stock\n3. Visit our showroom at Johari Bazaar, Jaipur\n\n📌 Note: The catalog is for reference only. We stock thousands of new designs in Kundan, Polki, Antique, Bridal, Rajwada & Western jewellery.',
    },
    {
      question: 'Do you accept Cash on Delivery (COD)?',
      answer:
        '❌ No, COD is not available for wholesale orders.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        '• In-store: Credit/Debit Cards\n• Online: Bank Transfer (NEFT/RTGS/IMPS), UPI (PhonePe, Paytm, Google Pay)',
    },
    {
      question: 'What types of jewellery do you sell?',
      answer:
        'We specialize in premium imitation jewellery that looks just like real gold & diamonds.\n• Jewellery Types: Necklaces, Earrings, Rings, Bangles, Bracelets, Maang Tikka, Bridal Sets & more\n• Styles: Kundan, Polki, Antique, Diamond Look, Rajwada, Western, Bridal & Semi-Bridal.',
    },
    {
      question: 'Can I track my order online?',
      answer:
        'Yes. Once dispatched, we will share a tracking number so you can track your parcel directly on the courier’s website.',
    },
    {
      question: 'What if I receive a damaged or wrong item?',
      answer:
        'We ensure 100% customer satisfaction. If you receive a damaged or incorrect product, we will replace or repair it.\n\n⚠️ Important: Please record an unboxing video of the parcel. It is mandatory to process any replacement or claim.',
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
              className="text-[26px] sm:text-[34px] md:text-[42px] font-normal text-[#121212] tracking-[0.5px] leading-tight"
            >
              Frequently Asked Questions
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

                {openIndex === idx && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-neutral-50/50 whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom WhatsApp Contact Strip */}
          <div className="mt-8 text-center bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs">
            <h3
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-base sm:text-lg font-bold text-neutral-900 mb-1"
            >
              Still Have Questions?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mb-4">
              Our Jaipur factory wholesale team is available on WhatsApp daily (10 AM - 8 PM IST).
            </p>
            <a
              href="https://wa.me/919680865791?text=Hello%20Shyambaba%20Wholesale%2C%20I%20have%20a%20question%20regarding%20wholesale%20orders."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all active:scale-95"
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
