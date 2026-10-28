'use client'

import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'

export interface ProcessStep {
  num: number | string
  title: string
  desc: string
  image: string
}

export const DEFAULT_PROCESS_STEPS: ProcessStep[] = [
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

export interface ManufacturingProcessProps {
  heading?: string
  subheading?: string
  steps?: ProcessStep[]
}

export default function ManufacturingProcess({
  heading = 'From Sketch To Stunning Jewellery',
  subheading = 'Our 5-Step Precision Manufacturing Pipeline',
  steps = DEFAULT_PROCESS_STEPS,
}: ManufacturingProcessProps) {
  const displaySteps = steps && steps.length > 0 ? steps : DEFAULT_PROCESS_STEPS

  return (
    <section className="py-10 md:py-16 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal direction="none" distance={0} duration={650}>
          <div className="text-center mb-6 sm:mb-9">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[26px] sm:text-[34px] md:text-[42px] font-normal text-[#121212] tracking-[0.5px] leading-tight"
            >
              {heading || 'From Sketch To Stunning Jewellery'}
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
              {subheading || 'Our 5-Step Precision Manufacturing Pipeline'}
            </p>
          </div>
        </ScrollReveal>

        {/* Step Cards with Staggered ScrollReveal */}
        <div className="max-w-xl mx-auto space-y-3 sm:space-y-4">
          {displaySteps.map((step, idx) => (
            <ScrollReveal
              key={step.num ?? idx}
              direction="none"
              distance={0}
              duration={550}
              delay={idx * 70}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] card-hover-lift group">
                {/* Step Image */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-[#FAF8F5] border border-neutral-200 flex-shrink-0">
                  <img
                    src={step.image || '/images/categories/cat-premium-earrings.jpg'}
                    alt={step.title}
                    className="w-full h-full object-cover card-img-zoom"
                    loading="lazy"
                  />
                </div>

                {/* Step Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 rounded-full bg-[#195799] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                      {step.num}
                    </span>
                    <h3 className="font-bold text-neutral-900 text-sm sm:text-base truncate">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
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
