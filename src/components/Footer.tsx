'use client'

import React from 'react'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

export interface FooterProps {
  logoUrl?: string
  companyName?: string
  tagline?: string
  addressLine1?: string
  addressLine2?: string
  addressLine3?: string
  copyright?: string
}

export default function Footer({
  logoUrl = '/images/logo.png',
  companyName = 'ShyamBaba Wholesale Jewellery',
  tagline = 'Style In Bulk, Profit In Every Piece',
  addressLine1 = 'Shop no, 206, Johari Bazar Rd,',
  addressLine2 = 'Pink City, Jaipur, Rajasthan',
  addressLine3 = '302003',
  copyright = '© 2025 Shyambabawholesale. All Rights Reserved.',
}: FooterProps) {
  return (
    <footer id="contact" className="relative bg-[#195799] text-white">
      {/* Top Wave Transition matching Screenshot 1 */}
      <div className="w-full overflow-hidden leading-none bg-[#FAF8F5]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-16"
        >
          {/* Subtle light blue wave layer */}
          <path
            d="M0,0 C220,60 480,15 750,55 C980,85 1100,30 1200,15 L1200,120 L0,120 Z"
            fill="#5b92ca"
            fillOpacity="0.45"
          />
          {/* Main royal blue wave layer */}
          <path
            d="M0,20 C240,75 520,25 800,65 C1000,90 1120,40 1200,30 L1200,120 L0,120 Z"
            fill="#195799"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10 sm:pb-12">
        {/* Brand Logo Card (White Square with Official Logo) */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-xl shadow-md p-2 flex items-center justify-center overflow-hidden">
          <img
            src={logoUrl || '/images/logo.png'}
            alt={`${companyName} Logo`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Tagline below logo */}
        <p className="text-white font-bold text-sm sm:text-base tracking-wide mt-4 mb-8">
          {tagline}
        </p>

        {/* 4 Navigation / Info Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 text-xs sm:text-sm">
          {/* Column 1: Company */}
          <div>
            <h4 className="font-bold text-sm sm:text-base text-white mb-3">Company</h4>
            <ul className="space-y-2 text-white/90">
              <li>
                <Link href="/#faq" className="hover:text-white hover:underline transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white hover:underline transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white hover:underline transition-colors">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: About Us */}
          <div>
            <h4 className="font-bold text-sm sm:text-base text-white mb-3">About Us</h4>
            <ul className="space-y-2 text-white/90">
              <li>
                <Link href="/#about" className="hover:text-white hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white hover:underline transition-colors">
                  Copyright Notice
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white hover:underline transition-colors">
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white hover:underline transition-colors">
                  Shipping Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Get Help */}
          <div>
            <h4 className="font-bold text-sm sm:text-base text-white mb-3">Get Help</h4>
            <ul className="space-y-2 text-white/90">
              <li>
                <Link href="/#faq" className="hover:text-white hover:underline transition-colors">
                  Shipping Rates
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info with Pin */}
          <div>
            <h4 className="font-bold text-sm sm:text-base text-white mb-3">Contact Info</h4>
            <div className="space-y-1 text-white/90 leading-relaxed text-xs sm:text-sm">
              <p>{addressLine1}</p>
              <div className="flex items-start gap-1.5 mt-0.5">
                <MapPin className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span>
                  {addressLine2}<br />
                  {addressLine3}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright centered */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-xs text-white/90">
          {copyright}
        </div>
      </div>
    </footer>
  )
}
