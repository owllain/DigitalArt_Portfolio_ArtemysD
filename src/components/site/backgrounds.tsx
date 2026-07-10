'use client'

import { BlossomCarousel, BlossomPrev, BlossomNext } from '@blossom-carousel/react'
import { ArrowRight, Layers, Sparkles } from 'reicon-react'
import { SectionLabel } from './section-label'
import { PunkBadge } from './punk-badge'
import { useScrollReveal } from './use-scroll-reveal'
import { BACKGROUND_SETS, ArtworkSet } from '@/lib/data'

export function Backgrounds() {
  const { ref } = useScrollReveal()

  return (
    <section
      id="fondos"
      ref={ref}
      className="reveal relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#07070f]"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="04" title="Fondos de Animación" accent="purple" />

        <div className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              Creando atmósferas y <span className="text-[#9d4edd]">espacios vivos</span>.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Aunque es la rama en la que llevo menos tiempo, he aprendido rápido y he encontrado un profundo
              cariño en este ámbito. Las comisiones se entregan <span className="text-foreground font-medium">seccionadas en capas independientes</span> listas para edición en post-producción, facilitando los efectos de paralaje y la integración de personajes.
            </p>
          </div>
          <div className="max-w-md text-xs leading-relaxed text-muted-foreground border-l-2 border-[#9d4edd] pl-4 py-1">
            Realizo recreaciones de escenas de series queridas como{' '}
            <span className="text-foreground font-medium">El Jardín de las Palabras (Rain Garden)</span> y{' '}
            <span className="text-foreground font-medium font-mono-punk text-[10px] text-[#00e5ff]">Frieren Beyond the Journey&apos;s End</span>, agregando mi toque peludo y cósmico a los elementos naturales.
          </div>
        </div>

        {/* Galería de fondos por sets con Blossom */}
        <div className="mt-16 grid grid-cols-1 gap-12">
          {BACKGROUND_SETS.map((set, idx) => (
            <BackgroundSetCard key={set.id} set={set} isLarge={idx === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BackgroundSetCard({ set, isLarge }: { set: ArtworkSet; isLarge?: boolean }) {
  const isStudy = set.role?.toLowerCase().includes('estudio') || set.role?.toLowerCase().includes('recreación')

  return (
    <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0c0c18] border border-white/5 rounded-2xl overflow-hidden p-6 sm:p-8">
      {/* Right/Left Carousel */}
      <div className={`lg:col-span-7 relative order-1 ${isLarge ? 'lg:order-2' : ''}`}>
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#07070f]">
          {set.items.length > 1 ? (
            <>
              <BlossomCarousel id={set.id} className="background-set-carousel" repeat>
                {set.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    data-blossom-slide
                    className="blossom-slide relative w-full shrink-0 aspect-[21/9] sm:aspect-[21/9] flex items-center justify-center"
                  >
                    <img
                      src={item.url}
                      alt={item.label}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    {/* Stage Label */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#07070f]/80 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1 text-[9px] font-mono-punk text-muted-foreground">
                      <Layers size={10} />
                      <span>{item.label}</span>
                    </div>
                  </div>
                ))}
              </BlossomCarousel>

              {/* Overlays controls */}
              <div className="absolute inset-y-0 left-0 right-0 pointer-events-none flex items-center justify-between px-3">
                <BlossomPrev
                  for={set.id}
                  className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#07070f]/60 text-foreground transition hover:border-[#9d4edd]/60 hover:text-[#9d4edd] opacity-0 group-hover:opacity-100"
                >
                  <ArrowRight size={14} className="rotate-180" />
                </BlossomPrev>
                <BlossomNext
                  for={set.id}
                  className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#07070f]/60 text-foreground transition hover:border-[#9d4edd]/60 hover:text-[#9d4edd] opacity-0 group-hover:opacity-100"
                >
                  <ArrowRight size={14} />
                </BlossomNext>
              </div>
            </>
          ) : (
            <div className="relative aspect-[21/9] sm:aspect-[21/9]">
              <img
                src={set.items[0].url}
                alt={set.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-[#07070f]/80 backdrop-blur-sm border border-[#9d4edd]/30 rounded-full px-2.5 py-1 text-[9px] font-mono-punk text-[#9d4edd]">
                <span>ARTE TERMINADO</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Info Info */}
      <div className={`lg:col-span-5 space-y-4 order-2 ${isLarge ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-3">
          {isStudy ? (
            <PunkBadge variant="yellow">Recreación / Estudio</PunkBadge>
          ) : (
            <PunkBadge variant="cyan">Comisión de Fondos</PunkBadge>
          )}
          <span className="font-mono-punk text-xs text-muted-foreground ml-auto">{set.year}</span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl text-foreground">
          {set.title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {set.description}
        </p>

        {set.items.length > 1 && (
          <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-white/5 border border-white/10 rounded-full px-3 py-1 font-mono-punk">
            <Layers size={12} className="text-[#9d4edd]" />
            <span>Desliza para ver la separación por capas</span>
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-2">
          {set.tags?.map((tag) => (
            <span key={tag} className="text-xs text-muted-foreground font-mono-punk">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
