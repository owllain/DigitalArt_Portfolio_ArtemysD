'use client'

import { useEffect, useState } from 'react'
import type { Artwork, SiteStats } from '@/lib/types'

export function useWorks() {
  const [works, setWorks] = useState<Artwork[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let alive = true
    ;(async () => {
      try {
        const res = await fetch('/api/works?category=all', { cache: 'no-store' })
        if (!res.ok) throw new Error('fetch failed')
        const data = await res.json()
        if (alive) {
          setWorks(data.works ?? [])
          setLoading(false)
        }
      } catch (e) {
        if (alive) {
          setError(e instanceof Error ? e.message : 'unknown')
          setLoading(false)
        }
      }
    })()
    return () => {
      alive = false
    }
  }, [])

  return { works, loading, error }
}

export function useStats() {
  const [stats, setStats] = useState<SiteStats | null>(null)
  useEffect(() => {
    let alive = true
    ;(async () => {
      try {
        const res = await fetch('/api/stats', { cache: 'no-store' })
        if (!res.ok) return
        const data = await res.json()
        if (alive) setStats(data)
      } catch {
        /* ignore */
      }
    })()
    return () => {
      alive = false
    }
  }, [])
  return stats
}

export function byCategory(works: Artwork[], cat: string) {
  return works
    .filter((w) => w.category === cat)
    .sort((a, b) => a.order - b.order)
}
