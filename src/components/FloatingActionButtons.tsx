'use client'

import React from 'react'
import { Video, MessageCircle } from 'lucide-react'

export default function FloatingActionButtons() {
  return (
    <>
      {/* Floating Bottom Left: Maroon "Book Video Call" Pill Button matching ALL screenshots */}
      <div className="fixed bottom-6 left-4 sm:left-6 z-50">
        <a
          href="https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20I%20would%20like%20to%20Book%20a%20Video%20Call%20shopping%20session."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-tactile inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-[#6B1A2A] hover:bg-[#521320] text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_4px_20px_rgba(107,26,42,0.35)] hover:shadow-[0_6px_24px_rgba(107,26,42,0.45)] border border-white/30 backdrop-blur-md"
        >
          <Video className="w-4 h-4 text-white" />
          <span>Book Video Call</span>
        </a>
      </div>

      {/* Floating Bottom Right: Green WhatsApp Round Button matching ALL screenshots */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-50">
        <a
          href="https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20I%20want%20to%20inquire%20about%20wholesale%20jewellery%20catalogue."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-tactile w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.6)] border-2 border-white"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
        </a>
      </div>
    </>
  )
}
