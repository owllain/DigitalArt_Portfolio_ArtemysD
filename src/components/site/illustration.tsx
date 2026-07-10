'use client'

import { BlossomCarousel, BlossomPrev, BlossomNext } from '@blossom-carousel/react'
import { ArrowRight, Heart, Sparkles, Film } from 'reicon-react'
import { SectionLabel } from './section-label'
import { PunkBadge } from './punk-badge'
import { useScrollReveal } from './use-scroll-reveal'
import { PET_SETS, ADDITIONAL_WORKS, ArtworkSet } from '@/lib/data'

export function Illustration() {
  const { ref } = useScrollReveal()

  return (
    <section
      id="ilustracion"
      ref={ref}
      className="reveal relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#07070f]"
    >
      <div className="pointer-events-none absolute right-0 top-40 -z-10 h-96 w-96 rounded-full bg-[#00e5ff]/10 blur-[120px]" />

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

        {/* Pet portraits feature */}
        <div className="mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <Heart size={14} className="text-[#ff1b6b]" weight="Filled" />
                <span className="font-mono-punk text-[10px] uppercase tracking-[0.25em] text-[#ff1b6b] font-bold">
                  MI RAMA PREFERIDA
                </span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl leading-tight">
                Retratos de <span className="neon-cyan">mascotas con vida</span>.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Tomo una fotografía real de tu mascota y la reinvento por completo para capturar y expresar
              su personalidad única. Gracias a mi flujo de trabajo en <span className="text-foreground font-medium">After Effects (Puppet Tool)</span>,
              cada retrato ilustrado por capas cobra vida mediante animaciones orgánicas personalizadas.
            </p>
          </div>

          {/* Grilla de retratos de mascotas interactiva */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PET_SETS.map((set) => (
              <PetSetCard key={set.id} set={set} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PetSetCard({ set }: { set: ArtworkSet }) {
  return (
    <div className="group flex flex-col rounded-xl border border-white/10 bg-[#0c0c18] overflow-hidden">
      {/* Blossom Carousel */}
      <div className="relative aspect-video bg-[#07070f] overflow-hidden">
        <BlossomCarousel id={set.id} className="pet-set-carousel" repeat>
          {set.items.map((item, itemIdx) => (
            <div
              key={itemIdx}
              data-blossom-slide
              className="blossom-slide relative w-full h-full shrink-0 flex items-center justify-center"
            >
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
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#07070f]/80 backdrop-blur-sm border border-[#00e5ff]/30 rounded-full px-2.5 py-1 text-[9px] font-mono-punk text-[#00e5ff]">
                    <Film size={10} className="animate-spin" />
                    <span>AFTER EFFECTS PUPPET</span>
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
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#07070f]/80 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1 text-[9px] font-mono-punk text-muted-foreground">
                    <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span>RETRATO BASE</span>
                  </div>
                </div>
              )}

              {/* Title indicator overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07070f]/90 via-[#07070f]/20 to-transparent p-4 pt-8">
                <div className="font-mono-punk text-[9px] uppercase tracking-[0.2em] text-[#00e5ff]">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </BlossomCarousel>

        {/* Controls prev/next arrows */}
        <div className="absolute inset-y-0 left-0 right-0 pointer-events-none flex items-center justify-between px-3">
          <BlossomPrev
            for={set.id}
            className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#07070f]/60 text-foreground transition hover:border-[#00e5ff]/60 hover:text-[#00e5ff] opacity-0 group-hover:opacity-100"
          >
            <ArrowRight size={14} className="rotate-180" />
          </BlossomPrev>
          <BlossomNext
            for={set.id}
            className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#07070f]/60 text-foreground transition hover:border-[#00e5ff]/60 hover:text-[#00e5ff] opacity-0 group-hover:opacity-100"
          >
            <ArrowRight size={14} />
          </BlossomNext>
        </div>
      </div>

      {/* Footer information */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg text-foreground leading-tight">{set.title}</h3>
            <span className="font-mono-punk text-xs text-muted-foreground">{set.year}</span>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            {set.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1">
          {set.tags?.map((t) => (
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
