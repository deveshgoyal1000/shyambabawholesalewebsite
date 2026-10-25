'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { MessageCircle, Check, Eye, Tag, Sparkles } from 'lucide-react'

export interface ProductData {
  id: string | number
  name: string
  productCode: string
  slug: string
  categoryName?: string
  image?: string
  secondaryImage?: string
  availability?: string
  isFeatured?: boolean
  isNewArrival?: boolean
  specifications?: Array<{ label: string; value: string }>
}

export default function ProductCard({ product }: { product: ProductData }) {
  const [copied, setCopied] = useState(false)

  const copyCode = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(product.productCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const whatsappMessage = encodeURIComponent(
    `Hi Shyambaba Wholesale Jewellery,\n\nI am interested in placing a wholesale inquiry for:\n• Product Code: ${product.productCode}\n• Product Name: ${product.name}\n\nPlease share wholesale pricing, minimum order quantity, and video/catalogue.`
  )
  const whatsappUrl = `https://wa.me/919876543210?text=${whatsappMessage}`

  const defaultImage =
    product.image ||
    'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600&auto=format&fit=crop'

  // Secondary angle image for smooth hover crossfade
  const secondaryImage =
    product.secondaryImage ||
    'https://images.unsplash.com/photo-1611591475870-0f2d80d21051?q=80&w=600&auto=format&fit=crop'

  return (
    <div className="group relative bg-white rounded-2xl border border-[#EAE3D8] hover:border-[#C9A84C]/60 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.03)] card-hover-lift flex flex-col justify-between">
      {/* Top Media Container */}
      <div className="relative aspect-square overflow-hidden bg-[#F7F4EE]">
        {/* Primary Product Image with Synchronized Calm Zoom */}
        <img
          src={defaultImage}
          alt={product.name}
          className="w-full h-full object-cover card-img-zoom"
          loading="lazy"
        />

        {/* Secondary Image Crossfade on Desktop Hover */}
        {secondaryImage && secondaryImage !== defaultImage && (
          <img
            src={secondaryImage}
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
            loading="lazy"
          />
        )}

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

        {/* Top Left Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
          {product.isNewArrival && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#C9A84C] text-neutral-900 text-[10px] font-bold uppercase tracking-wider shadow-sm">
              New Arrival
            </span>
          )}
          {product.isFeatured && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#6B1A2A] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
              Hot Seller
            </span>
          )}
        </div>

        {/* Top Right: One-click Copy Product Code */}
        <button
          onClick={copyCode}
          title="Click to copy Product Code"
          className="absolute top-2.5 right-2.5 z-10 px-2.5 py-1 bg-black/75 hover:bg-black/90 active:scale-95 backdrop-blur-md rounded-md text-[11px] font-bold text-white border border-white/20 flex items-center gap-1 shadow-sm transition-colors duration-200"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="text-[#25D366]">Copied</span>
            </>
          ) : (
            <>
              <Tag className="w-3 h-3 text-[#C9A84C]" />
              <span>{product.productCode}</span>
            </>
          )}
        </button>

        {/* Quick View Button overlay */}
        <Link
          href={`/products/${product.slug}`}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        >
          <span className="px-4 py-2 bg-white/95 text-[#6B1A2A] hover:bg-[#6B1A2A] hover:text-white font-bold text-xs rounded-full shadow-lg border border-[#C9A84C]/40 flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
            <Eye className="w-3.5 h-3.5" />
            View Full Specs
          </span>
        </Link>
      </div>

      {/* Gold Accent Divider Line */}
      <div className="h-[2px] bg-[#C9A84C] w-full"></div>

      {/* Product Content Details */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-white">
        <div>
          {/* Prominent Product Code Display Bar */}
          <div className="flex items-center justify-between text-xs pb-1.5 border-b border-[#F5EFE6]">
            <span className="text-[11px] font-bold text-[#6B1A2A] uppercase tracking-wider flex items-center gap-1">
              <span className="text-[#9A7E2E]">Code:</span>
              <span className="bg-[#C9A84C]/15 text-[#6B1A2A] px-1.5 py-0.5 rounded font-mono font-bold">
                {product.productCode}
              </span>
            </span>
            <span className="text-[10px] text-green-700 bg-green-50 px-2 py-0.5 rounded-full font-semibold border border-green-200/80">
              ● In Stock
            </span>
          </div>

          {/* Product Title */}
          <Link href={`/products/${product.slug}`} className="block mt-2">
            <h4 className="font-serif font-bold text-base text-[#121212] group-hover:text-[#6B1A2A] transition-colors duration-250 line-clamp-2 leading-snug">
              {product.name}
            </h4>
          </Link>

          {/* Specifications Preview (Metal / Plating / Pack) */}
          <div className="mt-2 text-[11px] text-neutral-600 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-neutral-400">Base Metal:</span>
              <span className="font-medium text-neutral-800 truncate">Virgin Brass</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-neutral-400">Plating:</span>
              <span className="font-medium text-neutral-800 truncate">22K Micro Gold</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-neutral-400">Wholesale MOQ:</span>
              <span className="font-bold text-[#6B1A2A]">12 Pairs / Box</span>
            </div>
          </div>
        </div>

        {/* Action Button: Inquire on WhatsApp (NO PRICE SHOWN) */}
        <div className="pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs rounded-xl shadow-sm hover:shadow"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire Price on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}
