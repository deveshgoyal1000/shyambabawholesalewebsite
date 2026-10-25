'use client'

import React from 'react'
import { Play } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function GallerySection() {
  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
      speedTag: '1.00',
      title: 'Factory Showroom Racks',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop',
      speedTag: null,
      title: 'Handcrafted Kundan Jhumkis',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1611591475870-0f2d80d21051?q=80&w=800&auto=format&fit=crop',
      speedTag: null,
      title: 'Artisan Stone Setting',
    },
  ]

  return (
    <section className="py-10 md:py-14 bg-[#FAF8F5]">
      <div className="max-w-2xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <ScrollReveal direction="up" distance={20} duration={650}>
          <div className="text-center mb-6 sm:mb-8">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-[26px] sm:text-[34px] md:text-[42px] font-normal text-[#6B1A2A] tracking-[0.5px] leading-tight"
            >
              Explore Shyambaba&apos;s Gallery
            </h2>

            {/* Gold Accent Divider Bar matching Krishaz */}
            <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#C9A84C] mx-auto my-2.5 sm:my-3.5"></div>

            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
              className="text-[13px] sm:text-[14px] text-[#2C2C2C] font-normal text-center"
            >
              The Art Of Adornment
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery Cards Container: touch-pan-y ensures vertical page scrolling is never hijacked on mobile */}
        <div className="flex sm:grid sm:grid-cols-3 gap-3.5 sm:gap-6 overflow-x-auto pb-4 scrollbar-none touch-pan-y overscroll-x-contain">
          {galleryItems.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              distance={24}
              duration={650}
              delay={idx * 100}
              className="flex-shrink-0 w-52 sm:w-auto"
            >
              <div className="relative rounded-2xl sm:rounded-3xl p-1 bg-white border-2 border-[#D4AF37]/50 shadow-[0_2px_12px_rgba(0,0,0,0.04)] card-hover-lift group">
                {/* 9:16 Vertical Video Aspect Ratio */}
                <div className="relative aspect-[9/16] rounded-xl sm:rounded-2xl overflow-hidden bg-black/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover card-img-zoom"
                    loading="lazy"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                  {/* Top Speed Tag if available */}
                  {item.speedTag && (
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white font-mono text-[10px] sm:text-xs px-2.5 py-1 rounded-md border border-white/20">
                      {item.speedTag}x
                    </div>
                  )}

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 text-[#6B1A2A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Video Title */}
                  <div className="absolute bottom-3 left-3 right-3 text-white text-center">
                    <span className="text-xs sm:text-sm font-medium tracking-wide drop-shadow">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
