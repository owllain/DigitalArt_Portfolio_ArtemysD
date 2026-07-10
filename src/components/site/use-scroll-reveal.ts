'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Fade-up on scroll. Add the returned ref to any element + className "reveal".
 * The hook adds `is-visible` when the element enters the viewport.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            el.classList.add('is-visible')
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [options])

  return { ref, visible }
}
