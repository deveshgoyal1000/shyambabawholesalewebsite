'use client'

import React, { useState } from 'react'
import { Sparkles, Globe, Phone, Clock } from 'lucide-react'

export default function AnnouncementBar() {
  const [currency, setCurrency] = useState('INR')

  return (
    <div
      className="bg-[#195799] text-[#FAF8F5] font-medium border-b border-[#C9A84C]/35 select-none w-full"
      style={{
        paddingTop: 'max(0.65rem, env(safe-area-inset-top))',
      }}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-4 py-2.5 sm:py-2.5 flex items-center justify-between gap-2 min-h-[44px] sm:min-h-[40px]">
        {/* Left: Contact & Working Hours (Desktop Only) */}
        <div className="hidden xl:flex items-center space-x-4 text-[#FAF8F5]/80 text-[11px]">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#C9A84C]" />
            +91 96808 65791
          </span>
          <span className="text-[#C9A84C]/40">|</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C9A84C]" />
            Factory: 10:30 AM - 7:30 PM IST
          </span>
        </div>

        {/* Center: Main Wholesale Announcement Ticker (Full prominent red panel on mobile) */}
        <div className="flex-1 flex items-center justify-center gap-2 text-center overflow-hidden">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A84C] animate-pulse flex-shrink-0" />
          <span className="tracking-wide text-[12px] sm:text-xs font-medium truncate sm:overflow-visible leading-normal">
            <strong className="text-[#C9A84C] font-bold uppercase tracking-wider">Low MOV ₹3,000/-</strong>
            <span className="mx-1.5 sm:mx-2 text-[#C9A84C]/50">•</span>
            <span>Worldwide B2B Export</span>
            <span className="mx-1.5 sm:mx-2 text-[#C9A84C]/50">•</span>
            <span className="underline decoration-[#C9A84C] underline-offset-2 sm:underline-offset-4 font-semibold text-white">
              Direct Jaipur Manufacturer
            </span>
          </span>
        </div>

        {/* Right: Currency Selector (Desktop / Tablet Only) */}
        <div className="hidden md:flex items-center space-x-3 text-[#FAF8F5]/90 text-[11px]">
          <div className="flex items-center gap-1 bg-[#124378]/80 px-2.5 py-1 rounded border border-[#C9A84C]/30">
            <Globe className="w-3 h-3 text-[#C9A84C]" />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent text-white focus:outline-none cursor-pointer text-[11px]"
            >
              <option value="INR" className="bg-[#195799] text-white">🇮🇳 INR (₹)</option>
              <option value="USD" className="bg-[#195799] text-white">🇺🇸 USD ($)</option>
              <option value="GBP" className="bg-[#195799] text-white">🇬🇧 GBP (£)</option>
              <option value="AED" className="bg-[#195799] text-white">🇦🇪 AED (د.إ)</option>
              <option value="CAD" className="bg-[#195799] text-white">🇨🇦 CAD ($)</option>
              <option value="MYR" className="bg-[#195799] text-white">🇲🇾 MYR (RM)</option>
            </select>
          </div>
          <a
            href="https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20want%20to%20book%20a%20video%20call%20for%20wholesale%20selection"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A84C] transition-colors duration-200 font-medium flex items-center gap-1 text-[#C9A84C]"
          >
            Video Call Booking
          </a>
        </div>
      </div>
    </div>
  )
}
