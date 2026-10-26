'use client'

import React, { useEffect, useState } from 'react'

export default function InternationalTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Instantly pin scroll position to the very top while invisible to eliminate mobile jump
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    // Trigger smooth fade-in entrance on next animation frame
    const frameId = requestAnimationFrame(() => {
      setMounted(true)
    })

    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      <noscript>
        <style>{`.country-entrance-wrapper { opacity: 1 !important; transform: none !important; }`}</style>
      </noscript>
      <div
        className={`country-entrance-wrapper min-h-screen transition-all ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
        style={{
          willChange: 'opacity, transform',
          transitionDuration: '500ms',
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {children}
      </div>
    </>
  )
}
