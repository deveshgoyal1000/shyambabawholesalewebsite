'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <div className="mr-3 bg-white text-maroon text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl border border-gold/40 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with Factory Sales Manager 🟢
      </div>

      <a
        href="https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20want%20to%20inquire%20about%20wholesale%20jewellery%20catalogue%20and%20rates."
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-whatsapp hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 border-2 border-white"
        aria-label="Direct WhatsApp Chat"
      >
        {/* Pulsing halo */}
        <span className="absolute -inset-1 rounded-full bg-whatsapp/40 animate-ping"></span>
        <MessageCircle className="w-8 h-8 fill-white relative z-10" />

        {/* Online Dot */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full z-10"></span>
      </a>
    </aside>
  )
}
