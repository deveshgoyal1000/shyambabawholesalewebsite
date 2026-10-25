'use client'

import React, { useState } from 'react'
import { Sparkles, Globe, Phone, Clock } from 'lucide-react'

export default function AnnouncementBar() {
  const [currency, setCurrency] = useState('INR')

  return (
    <div className="bg-maroon text-cream text-xs font-medium border-b border-gold/30">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Contact & Working Hours */}
        <div className="hidden lg:flex items-center space-x-4 text-cream/80">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-gold" />
            +91 98765 43210 / +91 77421 26346
          </span>
          <span className="text-gold/40">|</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gold" />
            Factory Hours: 10:30 AM - 7:30 PM IST
          </span>
        </div>

        {/* Center: Main Wholesale Announcement Ticker */}
        <div className="flex items-center justify-center gap-2 text-center">
          <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse flex-shrink-0" />
          <span className="tracking-wide">
            <strong className="text-gold font-semibold uppercase">Low MOV ₹3,000/-</strong> (Direct Website)
            <span className="mx-2 text-gold/40">•</span>
            Worldwide B2B Export to 50+ Countries
            <span className="mx-2 text-gold/40">•</span>
            <span className="underline decoration-gold underline-offset-4 font-semibold text-white">
              Direct Jaipur Manufacturer
            </span>
          </span>
        </div>

        {/* Right: Country / Currency Selector */}
        <div className="flex items-center space-x-3 text-cream/90 text-[11px]">
          <div className="flex items-center gap-1 bg-maroon-dark/60 px-2 py-0.5 rounded border border-gold/20">
            <Globe className="w-3 h-3 text-gold" />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent text-cream focus:outline-none cursor-pointer"
            >
              <option value="INR" className="bg-maroon text-white">🇮🇳 INR (₹)</option>
              <option value="USD" className="bg-maroon text-white">🇺🇸 USD ($)</option>
              <option value="GBP" className="bg-maroon text-white">🇬🇧 GBP (£)</option>
              <option value="AED" className="bg-maroon text-white">🇦🇪 AED (د.إ)</option>
              <option value="CAD" className="bg-maroon text-white">🇨🇦 CAD ($)</option>
              <option value="MYR" className="bg-maroon text-white">🇲🇾 MYR (RM)</option>
            </select>
          </div>
          <a
            href="https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20I%20want%20to%20book%20a%20video%20call%20for%20wholesale%20selection"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors duration-250 font-medium flex items-center gap-1 text-gold"
          >
            Video Call Booking
          </a>
        </div>
      </div>
    </div>
  )
}
