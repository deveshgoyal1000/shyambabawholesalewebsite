'use client'

import React, { useEffect, useState } from 'react'

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Disable automatic browser scroll restoration to prevent bottom-to-up scroll jumps
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    // Trigger smooth fade-in entrance
    const frameId = requestAnimationFrame(() => {
      setMounted(true)
    })

    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      <noscript>
        <style>{`.page-fade-entrance { opacity: 1 !important; }`}</style>
      </noscript>
      <div
        className={`page-fade-entrance transition-opacity ease-out duration-300 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          willChange: 'opacity',
          transitionDuration: '320ms',
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {children}
      </div>
    </>
  )
}
