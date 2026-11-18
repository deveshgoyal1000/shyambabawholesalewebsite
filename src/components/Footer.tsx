'use client'

import React from 'react'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#195799] text-white">
      {/* Top Wave Transition */}
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
            src="/images/logo.png"
            alt="Shyam Baba Jewellery Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Tagline below logo */}
        <p className="text-white font-bold text-sm sm:text-base tracking-wide mt-4 mb-8">
          Style In Bulk, Profit In Every Piece
        </p>

        {/* Navigation & Contact Columns: 2 Columns on Mobile, 3 Columns on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 sm:gap-8 text-xs sm:text-sm">
          {/* Left Column on Mobile / Col 1 & 2 on Desktop */}
          <div className="space-y-7 md:space-y-0 md:contents">
            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-sm sm:text-base text-white mb-3">Quick Links</h4>
              <ul className="space-y-2.5 text-white/90">
                <li>
                  <Link href="/#about" className="hover:text-white hover:underline transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="hover:text-white hover:underline transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20want%20to%20book%20a%20live%20video%20call%20for%20wholesale%20selection"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Book a Video Call
                  </a>
                </li>
                <li>
                  <a
                    href="https://chat.whatsapp.com/H1jvdlP82xuLcoAl6TlRm3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Daily Updates WhatsApp Group
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h4 className="font-bold text-sm sm:text-base text-white mb-3">Connect With Us</h4>
              <ul className="space-y-2.5 text-white/90">
                <li>
                  <a
                    href="https://www.instagram.com/shreeshyambabajewellers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/61ARaZmn6tniBYQS6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Google Map
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919680865791?text=Hello%20Shyambaba%20Wholesale%2C%20I%20have%20an%20inquiry%20regarding%20wholesale%20jewellery."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    WhatsApp Direct Chat
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column on Mobile / Col 3 on Desktop: Contact Info */}
          <div>
            <h4 className="font-bold text-sm sm:text-base text-white mb-3">Contact Info</h4>
            <div className="space-y-1.5 text-white/90 leading-relaxed text-xs sm:text-sm">
              <p className="font-medium text-white">Address: Shop no,</p>
              <p>206, Johari Bazar Rd,</p>
              <div className="flex items-start gap-1.5 mt-0.5">
                <MapPin className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span>
                  Johri Bazar, Pink City,<br />
                  Jaipur, Rajasthan<br />
                  302003
                </span>
              </div>
              <div className="pt-2 text-white/90">
                <a
                  href="https://wa.me/919680865791"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  Phone: +91 96808 65791
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright centered */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-xs text-white/90">
          &copy; 2025 Shyambabawholesale
        </div>
      </div>
    </footer>
  )
}
