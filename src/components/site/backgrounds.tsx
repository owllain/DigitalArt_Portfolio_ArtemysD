'use client'

import { SectionLabel } from './section-label'
import { PunkBadge } from './punk-badge'
import { useScrollReveal } from './use-scroll-reveal'
import { byCategory, useWorks } from './use-works'
import type { Artwork } from '@/lib/types'

export function Backgrounds() {
  const { ref } = useScrollReveal()
  const { works, loading } = useWorks()
  const bgs = byCategory(works, 'background')

  return (
    <section
      id="fondos"
      ref={ref}
      className="reveal relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="04" title="Fondos de Animación" accent="purple" />

        <div className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight max-w-2xl">
            La rama más{' '}
            <span className="text-[#9d4edd]">joven</span> y la que más cariño me
            tiene.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Aunque es la rama en la que llevo menos tiempo, he aprendido rápido y
            le he tomado cariño. Los primeros tres fondos fueron comisiones
            entregadas seccionadas y listas para editar en post-producción. Los
            últimos dos son recreaciones de{' '}
            <span className="text-foreground">El Jardín de las Palabras</span> y{' '}
            <span className="text-foreground">Frieren Beyond the Journey&apos;s
            End</span> — con mi toque peludo.
          </p>
        </div>

        {loading ? (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="aspect-video rounded-xl halftone-cyan animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {bgs.map((bg, i) => (
              <BackgroundCard key={bg.id} work={bg} large={i === 0} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function BackgroundCard({ work, large }: { work: Artwork; large?: boolean }) {
  const isStudy = work.role?.toLowerCase().includes('estudio')
  return (
    <article
      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-card ${
        large ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${large ? 'aspect-[21/9]' : 'aspect-video'}`}>
        { }
        <img
          src={work.imageUrl}
          alt={work.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070f] via-[#07070f]/20 to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          {work.featured && <PunkBadge variant="purple">Destacado</PunkBadge>}
          {isStudy ? (
            <PunkBadge variant="yellow">Recreación</PunkBadge>
          ) : (
            <PunkBadge variant="ghost">Comisión</PunkBadge>
          )}
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="font-display text-xl sm:text-2xl text-foreground leading-tight">
                {work.title}
              </h3>
              <p className="mt-1 font-mono-punk text-[10px] uppercase tracking-wider text-muted-foreground">
                {work.year} · {work.role}
              </p>
            </div>
            {work.client && (
              <PunkBadge variant="ghost">{work.client}</PunkBadge>
            )}
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground max-w-2xl">
            {work.description}
          </p>
        </div>
      </div>
    </article>
  )
}
