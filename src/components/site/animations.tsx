'use client'

import { Carousel, CarouselContent, CarouselItem, useCarousel } from '@/components/ui/carousel'
import { ArrowRight, Film, Palette, Sparkles, Star } from 'reicon-react'
import { SectionLabel } from './section-label'
import { PunkBadge } from './punk-badge'
import { useScrollReveal } from './use-scroll-reveal'
import { ANIMATION_SETS, ArtworkSet } from '@/lib/data'

const PUBLISHED_CREDITS = [
  { title: 'Fate Strange Fake — Capítulo 02', role: 'Shiage (Color)', detail: 'A-1 Pictures / Koeda Animation' },
  { title: 'Kimi to Boku — Capítulo 03', role: 'Shiage (Color)', detail: 'J.C.Staff / Koeda Animation' },
  { title: 'Video musical "Reloj de Arena" por Aki Chan', role: 'Shiage (Color)', detail: 'Animación MV' },
  { title: 'Trailer del videojuego "Alice at the End of Her Life"', role: 'Shiage (Color)', detail: 'Promo Trailer' },
  { title: 'The Casebook of Arne', role: 'Douga (In-Between)', detail: 'Producción de Animación' }
]

export function Animations() {
  const { ref } = useScrollReveal()

  return (
    <section
      id="animaciones"
      ref={ref}
      className="reveal relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#07070f]"
    >
      {/* glow backdrop */}
      <div className="pointer-events-none absolute left-1/2 top-40 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#ff1b6b]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <SectionLabel index="03" title="Animaciones" accent="pink" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Intro & Credits */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight">
                Animación 2D <span className="neon-pink">frame x frame</span>.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Tengo experiencia en producción de anime comercial de la mano de{' '}
                <span className="text-foreground font-medium">Koeda Animation</span>, en los departamentos de{' '}
                <span className="text-[#00e5ff] font-medium">Douga (In-Between)</span> y{' '}
                <span className="text-[#00e5ff] font-medium">Shiage (Color)</span>. Mi rol consiste en asegurar la solidez y fluidez del trazo y la aplicación del color antes de que pase a post-producción y emisión.
              </p>
            </div>

            {/* Créditos oficiales en tarjetas minimalistas */}
            <div className="space-y-3">
              <div className="font-mono-punk text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                {'// créditos oficiales publicados'}
              </div>
              <div className="space-y-2">
                {PUBLISHED_CREDITS.map((credit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-lg border border-white/5 bg-card/25 p-3 hover:border-[#ff1b6b]/40 hover:bg-card/50 transition-colors text-sm"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#ff1b6b]/10 text-[#ff1b6b]">
                      {credit.role.includes('Color') ? <Palette size={14} /> : <Film size={14} />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-foreground font-medium truncate text-xs">{credit.title}</div>
                      <div className="text-[10px] text-muted-foreground truncate">{credit.detail}</div>
                    </div>
                    <span className="font-mono-punk text-[9px] text-[#ff1b6b] border border-[#ff1b6b]/20 rounded px-1.5 py-0.5 shrink-0">
                      {credit.role.includes('Color') ? 'COLOR' : 'DOUGA'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nota NSFW */}
            <div className="rounded-lg border border-[#ffd60a]/25 bg-[#ffd60a]/5 p-4 text-xs leading-relaxed text-muted-foreground">
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles size={12} className="text-[#ffd60a]" />
                <span className="font-mono-punk text-[9px] uppercase tracking-[0.2em] text-[#ffd60a] font-bold">
                  EXPERIENCIA ADICIONAL
                </span>
              </div>
              Cuento también con experiencia en producciones de animación <span className="text-foreground font-medium">NSFW</span> en el apartado técnico de Douga (In-Between) y Shiage (Color), manteniendo altos estándares de limpieza en los fotogramas bajo requerimientos específicos.
            </div>
          </div>

          {/* Right: Animaciones en carruseles independientes */}
          <div className="lg:col-span-7 space-y-10">
            <div className="font-mono-punk text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
              {'// portafolio interactivo (boceto vs movimiento)'}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ANIMATION_SETS.map((set) => (
                <AnimationSetCard key={set.id} set={set} />
              ))}
            </div>
          </div>
        </div>

        {/* Juanburgueso Feature */}
        <JuanburguesoFeature />
      </div>
    </section>
  )
}

function AnimationNavButtons() {
  const { scrollPrev, scrollNext } = useCarousel()
  return (
    <>
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Anterior"
        className="pointer-events-auto flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#07070f]/60 text-foreground transition hover:border-[#ff1b6b]/60 hover:text-[#ff1b6b] opacity-0 group-hover:opacity-100"
      >
        <ArrowRight size={12} className="rotate-180" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Siguiente"
        className="pointer-events-auto flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#07070f]/60 text-foreground transition hover:border-[#ff1b6b]/60 hover:text-[#ff1b6b] opacity-0 group-hover:opacity-100"
      >
        <ArrowRight size={12} />
      </button>
    </>
  )
}

function AnimationSetCard({ set }: { set: ArtworkSet }) {
  return (
    <div className="group flex flex-col rounded-xl border border-white/10 bg-[#0c0c18] overflow-hidden">
      {/* Embla Carousel */}
      <div className="relative aspect-square sm:aspect-video bg-[#07070f] overflow-hidden">
        <Carousel opts={{ loop: true }}>
          <CarouselContent className="-ml-0 h-full">
            {set.items.map((item, itemIdx) => (
              <CarouselItem key={itemIdx} className="pl-0">
                <div className="relative w-full h-full flex items-center justify-center">
                  {item.type === 'video' ? (
                    <video
                      src={item.url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt={item.label}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}

                  {/* Tag indicator */}
                  <div className="absolute top-3 left-3 bg-[#07070f]/80 backdrop-blur-sm border border-white/10 rounded-full px-2 py-0.5 text-[9px] font-mono-punk text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Prev/Next overlays */}
          <div className="absolute inset-y-0 left-0 right-0 pointer-events-none flex items-center justify-between px-2">
            <AnimationNavButtons />
          </div>
        </Carousel>
      </div>

      {/* Info card footer */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-display text-base text-foreground leading-tight">{set.title}</h3>
            <span className="font-mono-punk text-[9px] text-muted-foreground shrink-0">{set.year}</span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            {set.description}
          </p>
        </div>

        <div className="mt-3 pt-3 border-t border-white/5 flex flex-wrap gap-1">
          {set.tags?.slice(0, 3).map((t) => (
            <span key={t} className="font-mono-punk text-[8px] uppercase tracking-wider text-[#ff1b6b]">
              #{t}
            </span>
          ))}
          {set.role && (
            <span className="font-mono-punk text-[8px] uppercase tracking-wider text-[#00e5ff] ml-auto">
              {set.role}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function JuanburguesoFeature() {
  return (
    <div className="mt-16 overflow-hidden rounded-2xl border border-[#ff1b6b]/30 bg-gradient-to-br from-[#ff1b6b]/10 via-card to-[#9d4edd]/10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#07070f]">
          <video
            src="/gallery/Carrusel1_Final.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#07070f]/60" />
          <div className="absolute left-4 top-4">
            <PunkBadge variant="pink">Caso de Estudio Destacado</PunkBadge>
          </div>
        </div>

        <div className="p-7 sm:p-10 flex flex-col justify-center">
          <div className="font-mono-punk text-[10px] uppercase tracking-[0.25em] text-[#ff1b6b] mb-3">
            {'// rediseño y animación de intro'}
          </div>
          <h3 className="font-display text-3xl sm:text-4xl leading-tight">
            Juanburgueso Mascot
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Juanburgueso es la mascota firma de un director de cine independiente. Se trabajó exhaustivamente en el rediseño del personaje para optimizar su identidad digital, se crearon las guías de uso oficial y se animó la secuencia de introducción de forma mixta. El flujo de trabajo involucró animación tradicional Frame por Frame junto con After Effects Puppet para lograr un movimiento orgánico con alta densidad de keyframes.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { k: 'Rol', v: 'Rediseño y Rigging' },
              { k: 'Cliente', v: 'Director Cine' },
              { k: 'Año', v: '2024' },
              { k: 'Método', v: 'Frame x Frame + AE' }
            ].map((f) => (
              <div
                key={f.k}
                className="rounded-md border border-white/10 bg-[#07070f]/40 p-3"
              >
                <div className="font-mono-punk text-[8px] uppercase tracking-[0.2em] text-muted-foreground">
                  {f.k}
                </div>
                <div className="mt-1 text-xs text-foreground font-medium">{f.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {['rediseño', 'guías de uso', 'intro-animada', 'keyframe-animation', 'puppet-tool'].map((t) => (
              <PunkBadge key={t} variant="purple">
                {t}
              </PunkBadge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
