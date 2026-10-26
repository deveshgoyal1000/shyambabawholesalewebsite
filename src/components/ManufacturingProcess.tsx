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
    <section className="py-10 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Heading matching Krishaz exactly */}
        <ScrollReveal direction="up" distance={20} duration={650}>
          <div className="text-center mb-7 sm:mb-9">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[28px] sm:text-[36px] md:text-[42px] font-normal text-[#121212] tracking-[0.5px] leading-tight"
            >
              From Sketch To Stunning Jewellery
            </h2>

            {/* Gold Accent Divider Bar matching Krishaz */}
            <div className="w-[64px] sm:w-[80px] h-[2px] bg-[#C9A84C] mx-auto my-3 sm:my-3.5"></div>

            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
              className="text-[15px] sm:text-[16px] text-[#2C2C2C] font-normal leading-relaxed"
            >
              Our 5-Step Precision Manufacturing Pipeline
            </p>
          </div>
        </ScrollReveal>

        {/* 5 Step Cards with Staggered ScrollReveal */}
        <div className="max-w-xl mx-auto space-y-3.5 sm:space-y-4">
          {steps.map((step, idx) => (
            <ScrollReveal
              key={step.num}
              direction="up"
              distance={22}
              duration={550}
              delay={idx * 70}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] card-hover-lift group">
                {/* Step Image */}
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-[#FAF8F5] border border-neutral-200 flex-shrink-0">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Step Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-[#195799] text-white text-[11px] sm:text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {step.num}
                    </span>
                    <h3 className="font-bold text-[14.5px] sm:text-base text-neutral-900 group-hover:text-[#195799] transition-colors truncate">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[12.5px] sm:text-xs text-neutral-600 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
