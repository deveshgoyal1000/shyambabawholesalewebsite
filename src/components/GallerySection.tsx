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
        <ScrollReveal>
          <div className="text-center mb-6">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-3xl sm:text-[42px] font-normal text-[#6B1A2A] tracking-normal leading-tight"
            >
              Explore Shyambaba&apos;s Gallery
            </h2>
            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
              className="text-[14px] text-[#2C2C2C] mt-2 font-normal text-center"
            >
              The Art Of Adornment
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery Cards Container */}
        <ScrollReveal delay={100}>
          <div className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-none snap-x">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-64 sm:w-auto snap-center relative rounded-3xl p-1.5 bg-white border-2 border-[#D4AF37]/60 shadow-[0_2px_12px_rgba(0,0,0,0.04)] card-hover-lift group"
              >
                {/* Inner Video Container */}
                <div className="relative aspect-[9/14] sm:aspect-[9/15] rounded-2xl overflow-hidden bg-neutral-900">
                  <div
                    className="w-full h-full bg-cover bg-center card-img-zoom"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/20"></div>

                  {/* Speed Tag "1.00" */}
                  {item.speedTag && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-neutral-900 text-[10px] font-mono px-2 py-0.5 rounded font-bold shadow-sm">
                      {item.speedTag}
                    </div>
                  )}

                  {/* Circular Dark Red Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a
                      href="https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20please%20send%20me%20your%20HD%20product%20reels%20and%20videos."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#800020] hover:bg-[#6B1A2A] text-white flex items-center justify-center shadow-2xl border-2 sm:border-4 border-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 active:scale-95"
                      aria-label="Play video"
                    >
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Scroll indicator bar on mobile */}
        <div className="sm:hidden flex justify-center mt-2">
          <div className="w-16 h-1 rounded-full bg-[#D4AF37]/40">
            <div className="w-8 h-full rounded-full bg-[#6B1A2A]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
