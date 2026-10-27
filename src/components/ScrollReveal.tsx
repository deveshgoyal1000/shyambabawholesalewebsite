'use client'

import React, { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  duration?: number
  threshold?: number
  rootMargin?: string
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 22,
  duration = 850,
  threshold = 0.15,
  rootMargin = '0px 0px -75px 0px',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Immediately reveal if prefers-reduced-motion
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true)
      return
    }

    // Only reveal on mount if element is clearly in the upper half of initial screen
    const rect = el.getBoundingClientRect()
    const isAboveTheFold = rect.top < window.innerHeight * 0.5 && rect.bottom > 0
    if (isAboveTheFold) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, delay || 60)
      return () => clearTimeout(timer)
    }

    // Otherwise, trigger strictly when the user scrolls to it
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      {
        threshold: threshold,
        rootMargin: rootMargin,
      }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [delay, threshold, rootMargin])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity',
      }}
    >
      {children}
    </div>
  )
}
