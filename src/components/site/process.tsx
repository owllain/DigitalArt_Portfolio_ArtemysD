'use client'

import { Carousel, CarouselContent, CarouselItem, useCarousel } from '@/components/ui/carousel'
import { ArrowRight, Sparkles, Film } from 'reicon-react'
import { SectionLabel } from './section-label'
import { PunkBadge } from './punk-badge'
import { useScrollReveal } from './use-scroll-reveal'
import { ILLUSTRATION_PROCESS_SETS, ArtworkSet } from '@/lib/data'

export function Process() {
  const { ref } = useScrollReveal()

  return (
    <section
      id="proceso"
      ref={ref}
      className="reveal relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#07070f]"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="02" title="Proceso Creativo" accent="cyan" />

        <div className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              Del boceto al <span className="neon-cyan">render final</span>.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Mi flujo artístico se basa en la planificación y la estructura. Ilustro pensando en capas
              independientes para facilitar la animación posterior en After Effects. Explora las
              etapas de cada pieza deslizando el carrusel de cada proyecto.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 border border-white/10 bg-card/40 rounded-full px-4 py-2 font-mono-punk text-[10px] uppercase tracking-[0.2em] text-[#00e5ff]">
            <Sparkles size={12} className="animate-pulse" />
            <span>Arrastra o usa las flechas en cada tarjeta</span>
          </div>
        </div>

        {/* Proyectos en carrusel individual */}
        <div className="mt-16 space-y-16">
          {ILLUSTRATION_PROCESS_SETS.map((set, idx) => (
            <ProcessSetCard key={set.id} set={set} index={idx + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessNavButtons() {
  const { scrollPrev, scrollNext } = useCarousel()
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Anterior"
        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground transition hover:border-[#00e5ff]/60 hover:text-[#00e5ff]"
      >
        <ArrowRight size={14} className="rotate-180" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Siguiente"
        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground transition hover:border-[#00e5ff]/60 hover:text-[#00e5ff]"
      >
        <ArrowRight size={14} />
      </button>
    </div>
  )
}

function ProcessSetCard({ set, index }: { set: ArtworkSet; index: number }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/5 pb-12 last:border-0 last:pb-0">
      {/* Left: Info */}
      <div className="lg:col-span-5 space-y-4">
        <div className="flex items-center gap-3">
          <span className="font-mono-punk text-xs text-[#00e5ff] border border-[#00e5ff]/30 rounded px-2 py-0.5">
            PROYECTO {String(index).padStart(2, '0')}
          </span>
          {set.featured && (
            <PunkBadge variant="pink">Destacado</PunkBadge>
          )}
          <span className="font-mono-punk text-xs text-muted-foreground ml-auto">
            {set.year}
          </span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl text-foreground">
          {set.title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {set.description}
        </p>

        {set.role && (
          <div className="text-xs text-muted-foreground font-mono-punk">
            <span className="text-[#00e5ff]">// rol:</span> {set.role}
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-2">
          {set.tags?.map((tag) => (
            <PunkBadge key={tag} variant="ghost">
              #{tag}
            </PunkBadge>
          ))}
        </div>
      </div>

      {/* Right: Embla Carousel for steps */}
      <div className="lg:col-span-7 relative">
        <div className="absolute -inset-4 bg-gradient-to-tr from-[#00e5ff]/5 via-transparent to-[#ff1b6b]/5 opacity-30 rounded-2xl" />

        <Carousel opts={{ loop: true }}>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0c0c18]">
            <CarouselContent className="-ml-0">
              {set.items.map((item, itemIdx) => (
                <CarouselItem key={itemIdx} className="pl-0">
                  <div className="relative w-full aspect-[4/3] sm:aspect-video flex items-center justify-center bg-[#07070f]">
                    {item.type === 'video' ? (
                      <div className="relative w-full h-full">
                        <video
                          src={item.url}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#07070f]/80 backdrop-blur-sm border border-[#ff1b6b]/30 rounded-full px-2.5 py-1 text-[10px] font-mono-punk text-[#ff1b6b]">
                          <Film size={10} className="animate-spin" />
                          <span>ANIMACIÓN FINAL</span>
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full h-full">
                        <img
                          src={item.url}
                          alt={item.label}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#07070f]/80 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1 text-[10px] font-mono-punk text-muted-foreground">
                          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          <span>ETAPA {itemIdx + 1}</span>
                        </div>
                      </div>
                    )}

                    {/* Subtitle / Phase Name */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07070f] to-transparent p-4 pt-8">
                      <div className="font-mono-punk text-[10px] uppercase tracking-[0.2em] text-[#00e5ff]">
                        {item.label}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controls bar */}
            <div className="border-t border-white/10 bg-[#0c0c18] px-4 py-3 flex items-center justify-between">
              <div className="font-mono-punk text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                {`// ${set.items.length} etapas de desarrollo`}
              </div>
              <ProcessNavButtons />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}
