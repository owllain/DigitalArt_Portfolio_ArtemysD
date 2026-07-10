'use client'

import { BlossomCarousel, BlossomPrev, BlossomNext } from '@blossom-carousel/react'
import { ArrowRight, Sparkles, Layers } from 'reicon-react'
import { SectionLabel } from './section-label'
import { PunkBadge } from './punk-badge'
import { useScrollReveal } from './use-scroll-reveal'
import { STICKER_SETS, ArtworkSet } from '@/lib/data'

export function Icons() {
  const { ref } = useScrollReveal()

  return (
    <section
      id="iconos"
      ref={ref}
      className="reveal relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden bg-[#07070f]"
    >
      {/* halftone bg overlay */}
      <div className="pointer-events-none absolute inset-0 halftone-pink opacity-[0.07]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionLabel index="05" title="Iconos / Stickers" accent="yellow" />

        <div className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              Stickers e iconos <span className="neon-yellow">ready-to-print</span>.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Sets de pegatinas conceptuales y pins digitales con estética neón, street-art y graffiti.
              Se entregan en trazados vectoriales limpios (<span className="text-foreground font-medium">SVG</span>)
              y archivos transparentes de alta resolución (<span className="text-foreground font-medium">PNG</span>)
              ideales para impresión die-cut o uso como badges oficiales en plataformas de streaming.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 lg:max-w-xs">
            {['street-art', 'neón', 'die-cut', 'vectorial', 'punky', 'badges'].map((t) => (
              <PunkBadge key={t} variant="yellow">
                {t}
              </PunkBadge>
            ))}
          </div>
        </div>

        {/* Galería de sets de stickers */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {STICKER_SETS.map((set) => (
            <StickerSetCard key={set.id} set={set} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StickerSetCard({ set }: { set: ArtworkSet }) {
  return (
    <div className="group flex flex-col rounded-xl border border-white/10 bg-[#0c0c18] overflow-hidden">
      {/* Blossom Carousel for Sticker Sheets/Items */}
      <div className="relative aspect-square sm:aspect-video bg-[#07070f] overflow-hidden">
        <BlossomCarousel id={set.id} className="sticker-set-carousel" repeat>
          {set.items.map((item, itemIdx) => (
            <div
              key={itemIdx}
              data-blossom-slide
              className="blossom-slide relative w-full h-full shrink-0 flex items-center justify-center p-6 bg-[#07070f] scanlines"
            >
              <img
                src={item.url}
                alt={item.label}
                className="w-full h-full object-contain max-h-[85%] transition-transform duration-[600ms] group-hover:scale-105"
                loading="lazy"
              />

              {/* Slide Counter Overlay */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#07070f]/80 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1 text-[9px] font-mono-punk text-muted-foreground">
                <span>ITEM {itemIdx + 1} / {set.items.length}</span>
              </div>

              {/* Item Label */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07070f]/90 via-[#07070f]/20 to-transparent p-4 pt-8 text-center">
                <span className="font-mono-punk text-[9px] uppercase tracking-[0.2em] text-[#ffd60a]">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </BlossomCarousel>

        {/* Blossom navigation arrows */}
        <div className="absolute inset-y-0 left-0 right-0 pointer-events-none flex items-center justify-between px-3">
          <BlossomPrev
            for={set.id}
            className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#07070f]/60 text-foreground transition hover:border-[#ffd60a]/60 hover:text-[#ffd60a] opacity-0 group-hover:opacity-100"
          >
            <ArrowRight size={14} className="rotate-180" />
          </BlossomPrev>
          <BlossomNext
            for={set.id}
            className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#07070f]/60 text-foreground transition hover:border-[#ffd60a]/60 hover:text-[#ffd60a] opacity-0 group-hover:opacity-100"
          >
            <ArrowRight size={14} />
          </BlossomNext>
        </div>
      </div>

      {/* Info card text */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg text-foreground leading-tight">{set.title}</h3>
            <span className="font-mono-punk text-xs text-muted-foreground shrink-0">{set.year}</span>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            {set.description}
          </p>
        </div>

        {/* Tags footer */}
        <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1">
          {set.tags?.map((t) => (
            <span key={t} className="font-mono-punk text-[8px] uppercase tracking-wider text-[#ffd60a]">
              #{t}
            </span>
          ))}
          {set.role && (
            <span className="font-mono-punk text-[8px] uppercase tracking-wider text-muted-foreground ml-auto">
              {set.role}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
