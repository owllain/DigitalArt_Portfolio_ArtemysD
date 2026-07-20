'use client'

import { ArrowRight, Heart, Sparkles, Film } from 'reicon-react'
import { SectionLabel } from './section-label'
import { PunkBadge } from './punk-badge'
import { useScrollReveal } from './use-scroll-reveal'
import { ADDITIONAL_WORKS, ArtworkSet } from '@/lib/data'

export function Illustration() {
  const { ref } = useScrollReveal()

  return (
    <section
      id="ilustracion"
      ref={ref}
      className="reveal relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#07070f] overflow-hidden"
    >
      {/* glow backdrop (paleta cyan) + transition */}
      <div className="pointer-events-none absolute right-1/2 top-40 -z-10 h-96 w-96 translate-x-1/2 rounded-full bg-[#00e5ff]/8 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#07070f]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#00e5ff]/8 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <SectionLabel index="06" title="Ilustración Digital" accent="pink" />

        <div className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              Diseño de personajes y <span className="neon-pink">piezas originales</span>.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Mi trabajo ilustrativo explora mundos fantásticos y personajes con fuerte personalidad.
              Combino técnicas de sombreado de anime con texturas digitales modernas, logrando
              un acabado vibrante y con alta definición.
            </p>
          </div>
          <div className="max-w-md text-xs leading-relaxed text-muted-foreground border-l-2 border-[#ff1b6b] pl-4 py-1">
            Cada ilustración se planifica estructuralmente por grupos de capas desde la etapa del boceto
            inicial, lo que me permite manipular las articulaciones, cabellos y ropajes posteriormente
            en motores de animación 2D.
          </div>
        </div>

        {/* Galería de piezas estáticas */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ADDITIONAL_WORKS.map((work) => (
            <div
              key={work.id}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0c0c18] hover:border-[#ff1b6b]/40 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#07070f]">
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070f] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-lg text-foreground leading-tight">{work.title}</h3>
                    <p className="mt-1 font-mono-punk text-[9px] uppercase tracking-wider text-muted-foreground">
                      {work.year} · {work.role}
                    </p>
                  </div>
                  <PunkBadge variant="ghost">#{work.category}</PunkBadge>
                </div>
              </div>
              <div className="p-4 text-xs text-muted-foreground leading-relaxed">
                {work.description}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}


