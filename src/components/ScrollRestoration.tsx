'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollRestoration() {
  const pathname = usePathname()
  const isRestoringRef = useRef(false)

  // 1. Save scroll position on scroll & before leaving
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Use manual scroll restoration so browser doesn't force jump to top
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const saveScroll = () => {
      if (isRestoringRef.current) return
      try {
        const path = window.location.pathname
        const y = window.scrollY
        if (y > 0) {
          sessionStorage.setItem(`sb_scroll_${path}`, y.toString())
        }
      } catch (e) {}
    }

    let scrollTimer: NodeJS.Timeout | null = null
    const handleScroll = () => {
      if (isRestoringRef.current) return
      if (scrollTimer) clearTimeout(scrollTimer)
      scrollTimer = setTimeout(saveScroll, 50)
    }

    // Direct restoration function when returning to a page
    const restoreScrollForPath = (targetPath: string) => {
      try {
        const saved = sessionStorage.getItem(`sb_scroll_${targetPath}`)
        const savedAnchor = sessionStorage.getItem('sb_last_anchor')

        let targetY = saved ? parseInt(saved, 10) : 0

        if ((!targetY || isNaN(targetY) || targetY <= 0) && !savedAnchor) {
          return
        }

        isRestoringRef.current = true

        let count = 0
        const maxCount = 30 // ~1.2s total

        const tick = () => {
          count++

          // If we have an anchor element (like 'categories'), prefer its actual mounted position
          if (savedAnchor && targetPath === '/') {
            const el = document.getElementById(savedAnchor)
            if (el) {
              const rect = el.getBoundingClientRect()
              const actualY = rect.top + window.scrollY - 70 // header offset
              if (actualY > 0) {
                targetY = actualY
              }
            }
          }

          if (targetY > 0) {
            window.scrollTo({ top: targetY, behavior: 'instant' })
          }

          if (count < maxCount) {
            setTimeout(tick, 40)
          } else {
            isRestoringRef.current = false
            sessionStorage.removeItem('sb_last_anchor')
          }
        }

        // Start immediately
        tick()

        const onUserTouch = () => {
          count = maxCount
          isRestoringRef.current = false
          window.removeEventListener('wheel', onUserTouch)
          window.removeEventListener('touchstart', onUserTouch)
        }
        window.addEventListener('wheel', onUserTouch, { passive: true })
        window.addEventListener('touchstart', onUserTouch, { passive: true })
      } catch (e) {}
    }

    const handlePopState = () => {
      // popstate fires immediately when Back/Forward is clicked
      setTimeout(() => {
        restoreScrollForPath(window.location.pathname)
      }, 10)
    }

    const handleClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest('a')
      if (a) {
        saveScroll()
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('popstate', handlePopState)
    window.addEventListener('beforeunload', saveScroll)
    document.addEventListener('click', handleClick, { capture: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('beforeunload', saveScroll)
      document.removeEventListener('click', handleClick, { capture: true })
      if (scrollTimer) clearTimeout(scrollTimer)
    }
  }, [])

  // 2. Also listen for pathname changes
  useEffect(() => {
    try {
      const savedAnchor = sessionStorage.getItem('sb_last_anchor')
      if (savedAnchor && pathname === '/') {
        setTimeout(() => {
          const el = document.getElementById(savedAnchor)
          if (el) {
            const rect = el.getBoundingClientRect()
            const actualY = rect.top + window.scrollY - 70
            window.scrollTo({ top: actualY, behavior: 'instant' })
          }
        }, 50)
      }
    } catch (e) {}
  }, [pathname])

  return null
}
