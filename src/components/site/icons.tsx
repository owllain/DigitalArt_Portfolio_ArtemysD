'use client'

import { Carousel, CarouselContent, CarouselItem, useCarousel } from '@/components/ui/carousel'
import { ArrowRight } from 'reicon-react'
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
      {/* glow backdrop (paleta amarilla) + transition */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#ffd60a]/6 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#07070f]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#ffd60a]/6 to-transparent" />

      {/* halftone bg overlay */}
      <div className="pointer-events-none absolute inset-0 halftone-pink opacity-[0.07]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionLabel index="05" title="Iconos / Stickers" accent="yellow" />

        {/* Carrusel (izquierda) + texto y etiquetas (derecha) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left: carrusel de stickers */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="grid grid-cols-1 gap-10">
              {STICKER_SETS.map((set) => (
                <StickerSetCard key={set.id} set={set} />
              ))}
            </div>
          </div>

          {/* Right: título + texto + etiquetas */}
          <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-24 lg:self-start space-y-5">
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              Stickers e iconos <span className="neon-yellow">ready-to-print</span>.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Sets de pegatinas conceptuales y pins digitales con estética neón, street-art y graffiti.
              Se entregan en trazados vectoriales limpios (<span className="text-foreground font-medium">SVG</span>)
              y archivos transparentes de alta resolución (<span className="text-foreground font-medium">PNG</span>)
              ideales para impresión die-cut o uso como badges oficiales en plataformas de streaming.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {['street-art', 'neón', 'die-cut', 'vectorial', 'punky', 'badges'].map((t) => (
                <PunkBadge key={t} variant="yellow">
                  {t}
                </PunkBadge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StickerNavButtons() {
  const { scrollPrev, scrollNext } = useCarousel()
  return (
    <>
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Anterior"
        className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#07070f]/60 text-foreground transition hover:border-[#ffd60a]/60 hover:text-[#ffd60a] opacity-0 group-hover:opacity-100"
      >
        <ArrowRight size={14} className="rotate-180" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Siguiente"
        className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#07070f]/60 text-foreground transition hover:border-[#ffd60a]/60 hover:text-[#ffd60a] opacity-0 group-hover:opacity-100"
      >
        <ArrowRight size={14} />
      </button>
    </>
  )
}

function StickerSetCard({ set }: { set: ArtworkSet }) {
  return (
    <div className="group flex flex-col rounded-xl border border-white/10 bg-[#0c0c18] overflow-hidden">
      {/* Embla Carousel for Sticker Sheets/Items */}
      <div className="relative w-full aspect-square sm:aspect-video bg-[#07070f] overflow-hidden">
        <Carousel opts={{ loop: true }}>
          <CarouselContent className="-ml-0 h-full w-full">
            {set.items.map((item, itemIdx) => (
              <CarouselItem key={itemIdx} className="pl-0 w-full h-full min-w-0">
                <div className="w-full h-full flex items-center justify-center bg-[#07070f] scanlines relative">
                  <img
                    src={item.url}
                    alt={item.label}
                    className="max-h-[65%] max-w-[65%] h-auto w-auto object-contain transition-transform duration-[600ms] group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Slide Counter Overlay */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#07070f]/80 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1 text-[9px] font-mono-punk text-muted-foreground z-10">
                    <span>ITEM {itemIdx + 1} / {set.items.length}</span>
                  </div>

                  {/* Item Label */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07070f]/90 via-[#07070f]/20 to-transparent p-4 pt-8 text-center z-10">
                    <span className="font-mono-punk text-[9px] uppercase tracking-[0.2em] text-[#ffd60a]">
                      {item.label}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* navigation arrows */}
          <div className="absolute inset-y-0 left-0 right-0 pointer-events-none flex items-center justify-between px-3 z-20">
            <StickerNavButtons />
          </div>
        </Carousel>
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
