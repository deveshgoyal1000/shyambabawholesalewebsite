'use client'

import React, { useState } from 'react'
import { ProductImage } from '@/lib/catalog'
import { X, ZoomIn, ChevronLeft, ChevronRight, Copy, Check } from 'lucide-react'

interface CatalogImageGalleryProps {
  images: ProductImage[]
  categoryName: string
  parentCategoryName?: string
}

export default function CatalogImageGallery({
  images,
  categoryName,
  parentCategoryName,
}: CatalogImageGalleryProps) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const handleCopy = (e: React.MouseEvent, code: string) => {
    e.stopPropagation()
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 1800)
  }

  const activeImage = lightboxIdx !== null ? images[lightboxIdx] : null

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx - 1 + images.length) % images.length)
    }
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx + 1) % images.length)
    }
  }

  return (
    <>
      {/* 2-in-one-row Images Grid (strictly 2 columns on mobile) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {images.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setLightboxIdx(idx)}
            className="group cursor-pointer bg-white rounded-xl sm:rounded-2xl border border-[#EAE3D8] hover:border-[#195799] shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_20px_rgba(25,87,153,0.12)] transition-all duration-200 overflow-hidden flex flex-col justify-between"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {/* Image Container with 4:5 aspect ratio */}
            <div className="relative aspect-[4/5] bg-[#F7F4EE] overflow-hidden">
              <img
                src={item.src}
                alt={`${categoryName} - ${item.code}`}
                loading={idx < 8 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Subtle tap/hover zoom icon */}
              <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/40 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Product Code Below Image - Pure Code Label, No Inquiry Buttons */}
            <div className="p-2 sm:p-2.5 bg-white border-t border-[#F2ECE1] flex items-center justify-between gap-1">
              <div className="truncate">
                <span className="text-[10px] text-neutral-400 font-medium block uppercase tracking-wider leading-none mb-0.5">
                  Code
                </span>
                <span className="text-[12.5px] sm:text-[14px] font-bold text-[#195799] font-mono tracking-tight block truncate select-all">
                  {item.code}
                </span>
              </div>

              {/* Quick Copy Code Pill */}
              <button
                onClick={(e) => handleCopy(e, item.code)}
                title="Copy Product Code"
                className="p-1.5 text-neutral-400 hover:text-[#195799] hover:bg-neutral-100 rounded-md transition-colors"
                aria-label={`Copy code ${item.code}`}
              >
                {copiedCode === item.code ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Lightbox Zoom Modal */}
      {activeImage && lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-6"
          onClick={() => setLightboxIdx(null)}
        >
          {/* Top Bar of Modal */}
          <div
            className="w-full max-w-4xl flex items-center justify-between text-white py-2 px-1 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-xs text-neutral-400 block">
                {parentCategoryName ? `${parentCategoryName} &bull; ` : ''}
                {categoryName}
              </span>
              <span className="text-lg sm:text-xl font-bold font-mono text-white tracking-wide">
                Code: {activeImage.code}
              </span>
            </div>

            <button
              onClick={() => setLightboxIdx(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-all"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 stroke-[2]" />
            </button>
          </div>

          {/* Central Image Container with Prev / Next Navigation */}
          <div
            className="relative flex-1 w-full max-w-3xl flex items-center justify-center my-2 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center active:scale-95 transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.2]" />
            </button>

            {/* High-Res Image */}
            <img
              src={activeImage.src}
              alt={`${categoryName} - ${activeImage.code}`}
              className="max-h-[70vh] sm:max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
            />

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center active:scale-95 transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.2]" />
            </button>
          </div>

          {/* Bottom Info Bar: Counter Only (WhatsApp enquiry removed as requested) */}
          <div
            className="w-full max-w-md flex items-center justify-center text-white py-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs text-neutral-400 font-mono tracking-wider">
              {lightboxIdx + 1} of {images.length} Designs
            </span>
          </div>
        </div>
      )}
    </>
  )
}
