'use client'

import React from 'react'

export default function FloatingActionButtons() {
  return (
    <>
      {/* Floating Bottom Left: Rich Burgundy "Book Video Call" Pill Button matching Krishaz exactly */}
      <div className="fixed bottom-5 sm:bottom-7 left-4 sm:left-6 z-50">
        <div className="relative inline-flex items-center justify-center">
          {/* Subtle radiating pulse rings */}
          <span className="absolute w-full h-full rounded-full border-2 border-[#800020] opacity-40 animate-ping pointer-events-none scale-105 duration-1000"></span>

          <a
            href="https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20would%20like%20to%20Book%20a%20Video%20Call%20shopping%20session."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile relative inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full text-white font-semibold text-xs sm:text-sm tracking-wide select-none"
            style={{
              background: 'linear-gradient(145deg, #c0003c, #800020, #4d0013)',
              border: '1px solid rgba(192, 0, 60, 0.8)',
              boxShadow:
                '0 8px 20px rgba(128, 0, 32, 0.45), 0 4px 10px rgba(212, 175, 55, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
              WebkitTapHighlightColor: 'transparent',
            }}
            aria-label="Book a Video Call"
          >
            {/* Crisp Video Camera SVG */}
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 7l-7 5 7 5V7z"></path>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
            <span className="whitespace-nowrap font-sans font-semibold drop-shadow-sm">
              Book Video Call
            </span>
          </a>
        </div>
      </div>

      {/* Floating Bottom Right: Glowing Green WhatsApp Circular Button matching Krishaz exactly */}
      <div className="fixed bottom-5 sm:bottom-7 right-4 sm:left-auto sm:right-6 z-50">
        <div className="relative inline-flex items-center justify-center">
          {/* Subtle pulse ring */}
          <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none scale-110 duration-1000"></span>

          <a
            href="https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20want%20to%20inquire%20about%20wholesale%20jewellery%20catalogue."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile relative w-[52px] h-[52px] sm:w-[62px] sm:h-[62px] bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white rounded-full flex items-center justify-center select-none"
            style={{
              boxShadow:
                '0 4px 16px rgba(0, 0, 0, 0.2), 0 8px 24px rgba(37, 211, 102, 0.45)',
              WebkitTapHighlightColor: 'transparent',
            }}
            aria-label="Chat with Shyambaba Wholesale on WhatsApp"
          >
            {/* Authentic WhatsApp SVG Icon */}
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}
