'use client'

import React, { useEffect, useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Immediately reveal if prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('reveal-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => {
                el.classList.add('reveal-visible')
              }, delay)
            } else {
              el.classList.add('reveal-visible')
            }
            observer.unobserve(el)
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -30px 0px',
      }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`reveal-init ${className}`}>
      {children}
    </div>
  )
}
