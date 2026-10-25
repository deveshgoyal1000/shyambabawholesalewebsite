'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function GallerySection() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)

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

  const scrollToIdx = (idx: number) => {
    if (!carouselRef.current) return
    const container = carouselRef.current
    const cards = container.querySelectorAll('.gallery-card-item')
    if (cards[idx]) {
      (cards[idx] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
      setActiveIdx(idx)
    }
  }

  const handleScroll = () => {
    if (!carouselRef.current) return
    const container = carouselRef.current
    const scrollLeft = container.scrollLeft
    const cardWidth = container.offsetWidth * 0.78
    const newIdx = Math.round(scrollLeft / cardWidth)
    setActiveIdx(Math.min(Math.max(newIdx, 0), galleryItems.length - 1))
  }

  return (
    <section className="py-10 md:py-14 bg-[#FAF8F5]">
      <div className="max-w-2xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <ScrollReveal direction="up" distance={20} duration={800}>
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

        {/* Gallery Cards Container: Strictly horizontal movement (right and left only) */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex sm:grid sm:grid-cols-3 gap-3.5 sm:gap-6 overflow-x-auto overflow-y-hidden pb-3 sm:pb-0 scrollbar-none snap-x snap-mandatory"
          style={{
            overscrollBehaviorX: 'contain',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              className="gallery-card-item flex-shrink-0 w-[78vw] max-w-[275px] sm:w-auto snap-center"
            >
              <div className="relative rounded-2xl sm:rounded-3xl p-1 bg-white border-2 border-[#D4AF37]/50 shadow-[0_2px_12px_rgba(0,0,0,0.04)] card-hover-lift group select-none">
                {/* 9:16 Vertical Video Aspect Ratio */}
                <div className="relative aspect-[9/16] rounded-xl sm:rounded-2xl overflow-hidden bg-black/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover card-img-zoom"
                    loading="lazy"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

                  {/* Top Speed Tag if available */}
                  {item.speedTag && (
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white font-mono text-[10px] sm:text-xs px-2.5 py-1 rounded-md border border-white/20">
                      {item.speedTag}x
                    </div>
                  )}

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 text-[#6B1A2A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Video Title */}
                  <div className="absolute bottom-3 left-3 right-3 text-white text-center pointer-events-none">
                    <span className="text-xs sm:text-sm font-medium tracking-wide drop-shadow">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Bar on Mobile */}
        <div className="flex sm:hidden items-center justify-center gap-3.5 mt-4 pt-1">
          {/* Previous Video Arrow */}
          <button
            onClick={() => scrollToIdx(Math.max(0, activeIdx - 1))}
            disabled={activeIdx === 0}
            className="w-8 h-8 rounded-full bg-white border border-[#C9A84C]/50 text-[#6B1A2A] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center shadow-xs active:scale-95 transition-all"
            aria-label="Previous video"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Indicator Navigation Pills */}
          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#E5DAC1] shadow-xs">
            {galleryItems.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIdx === i
                    ? 'w-6 bg-[#6B1A2A]'
                    : 'w-2 bg-[#D4AF37]/40 hover:bg-[#D4AF37]'
                }`}
                aria-label={`Go to video ${i + 1}`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              />
            ))}
          </div>

          {/* Next Video Arrow */}
          <button
            onClick={() => scrollToIdx(Math.min(galleryItems.length - 1, activeIdx + 1))}
            disabled={activeIdx === galleryItems.length - 1}
            className="w-8 h-8 rounded-full bg-white border border-[#C9A84C]/50 text-[#6B1A2A] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center shadow-xs active:scale-95 transition-all"
            aria-label="Next video"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
