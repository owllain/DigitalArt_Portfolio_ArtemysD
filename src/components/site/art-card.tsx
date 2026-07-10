'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { Artwork } from '@/lib/types'
import { PunkBadge } from './punk-badge'

interface ArtCardProps {
  work: Artwork
  accent?: 'pink' | 'cyan' | 'purple' | 'yellow'
  className?: string
  showMeta?: boolean
  aspect?: 'square' | 'video' | 'portrait' | 'wide'
}

const accentRing = {
  pink: 'group-hover:border-[#ff1b6b]/60 group-hover:glow-pink',
  cyan: 'group-hover:border-[#00e5ff]/60 group-hover:glow-cyan',
  purple: 'group-hover:border-[#9d4edd]/60',
  yellow: 'group-hover:border-[#ffd60a]/60',
}

const aspectClass = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[16/9]',
}

export function ArtCard({
  work,
  accent = 'pink',
  className,
  showMeta = true,
  aspect = 'video',
}: ArtCardProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <article
      className={cn(
        'group relative overflow-hidden rounded-xl border border-white/10 bg-card transition-all duration-500',
        accentRing[accent],
        className
      )}
    >
      <div className={cn('relative overflow-hidden', aspectClass[aspect])}>
        {!loaded && (
          <div className="absolute inset-0 halftone-pink animate-pulse" />
        )}
        { }
        <img
          src={work.imageUrl}
          alt={work.title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={cn(
            'h-full w-full object-cover transition-all duration-[1200ms] ease-out',
            'group-hover:scale-110',
            loaded ? 'opacity-100' : 'opacity-0'
          )}
        />
        {/* gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07070f] via-[#07070f]/30 to-transparent opacity-90" />
        {/* halftone corner */}
        <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 halftone-cyan opacity-40 [mask-image:radial-gradient(circle_at_top_right,black,transparent_70%)]" />

        {/* year tag */}
        {work.year && (
          <div className="absolute right-3 top-3">
            <PunkBadge variant={accent}>{work.year}</PunkBadge>
          </div>
        )}

        {/* bottom content */}
        {showMeta && (
          <div className="absolute inset-x-0 bottom-0 p-4">
            {work.role && (
              <PunkBadge variant="ghost" className="mb-2">
                {work.role}
              </PunkBadge>
            )}
            <h3 className="font-display text-lg leading-tight text-foreground drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {work.title}
            </h3>
            {work.client && (
              <p className="mt-1 font-mono-punk text-[11px] uppercase tracking-wider text-muted-foreground">
                {work.client}
              </p>
            )}
          </div>
        )}
      </div>

      {/* description strip (expands on hover) */}
      {showMeta && work.description && (
        <div className="px-4 py-3 border-t border-white/5">
          <p className="text-[13px] leading-relaxed text-muted-foreground line-clamp-2">
            {work.description}
          </p>
        </div>
      )}
    </article>
  )
}
