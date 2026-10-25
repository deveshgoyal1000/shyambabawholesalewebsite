'use client'

import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'

export default function ManufacturingProcess() {
  const steps = [
    {
      num: 1,
      title: 'Concept & Sketch',
      desc: 'We start with your vision and create detailed sketches.',
      image: '/images/process/step-1-final.png',
    },
    {
      num: 2,
      title: 'CAD Design',
      desc: 'Transforming ideas into precise 3D CAD designs.',
      image: '/images/process/step-2-final.png',
    },
    {
      num: 3,
      title: 'Sample Checking',
      desc: 'We craft a sample piece for approval before bulk production.',
      image: '/images/process/step-3-final.png',
    },
    {
      num: 4,
      title: 'Quality Check',
      desc: 'Every piece undergoes rigorous quality inspection.',
      image: '/images/process/step-4-final.png',
    },
    {
      num: 5,
      title: 'Order processing',
      desc: 'Our stunning earrings are ready to deliver.',
      image: '/images/process/step-5-final.png',
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching Krishaz exactly */}
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-10">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#6B1A2A]"
            >
              From Sketch To Stunning Jewellery
            </h2>
          </div>
        </ScrollReveal>

        {/* 5 Step Cards matching Krishaz layout */}
        <ScrollReveal delay={100}>
          <div className="max-w-xl mx-auto space-y-3.5 sm:space-y-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="group bg-white rounded-2xl p-3 sm:p-4 border border-[#E7DFD5] hover:border-[#C9A84C]/60 shadow-[0_2px_8px_rgba(0,0,0,0.03)] card-hover-lift flex items-center gap-3.5 sm:gap-5"
              >
                {/* Left Column: Real Process Photo with Gentle Zoom */}
                <div className="w-[105px] sm:w-[130px] md:w-[150px] aspect-[4/3] rounded-xl overflow-hidden shrink-0 border border-[#FAF5EE] bg-[#FAF8F5]">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover card-img-zoom"
                    loading="lazy"
                  />
                </div>

                {/* Right Column: Number arrow + Title + Description */}
                <div className="flex-1 min-w-0 pr-1">
                  <div className="flex items-center gap-1.5 text-[#C9A84C] font-bold text-sm sm:text-base">
                    <span>{step.num}</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300 ease-out">
                      →
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-neutral-900 mt-0.5 leading-snug group-hover:text-[#6B1A2A] transition-colors duration-250">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Custom Designs Card directly below Step 5 matching Krishaz */}
        <ScrollReveal delay={150}>
          <div className="mt-8 text-center bg-white rounded-2xl p-6 border border-[#E7DFD5] hover:border-[#C9A84C]/50 max-w-xl mx-auto shadow-[0_2px_8px_rgba(0,0,0,0.03)] card-hover-lift">
            <h3
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-xl sm:text-2xl font-normal text-neutral-900"
            >
              Custom Designs?
            </h3>
            <a
              href="https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale%2C%20I%20want%20to%20enquire%20about%20Custom%20Designs."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile mt-3.5 inline-block bg-[#6B1A2A] hover:bg-[#541421] text-white font-semibold text-xs sm:text-sm px-8 py-2.5 rounded-full shadow-sm hover:shadow"
            >
              Enquire Now
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
