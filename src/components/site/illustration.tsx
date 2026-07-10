'use client'

import { Heart } from 'reicon-react'
import { SectionLabel } from './section-label'
import { PunkBadge } from './punk-badge'
import { useScrollReveal } from './use-scroll-reveal'
import { byCategory, useWorks } from './use-works'
import type { Artwork } from '@/lib/types'
import { ArtCard } from './art-card'

export function Illustration() {
  const { ref } = useScrollReveal()
  const { works, loading } = useWorks()
  const illustrations = byCategory(works, 'illustration')
  const pets = byCategory(works, 'pet')

  return (
    <section
      id="ilustracion"
      ref={ref}
      className="reveal relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5"
    >
      <div className="pointer-events-none absolute right-0 top-40 -z-10 h-96 w-96 rounded-full bg-[#00e5ff]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <SectionLabel index="06" title="Ilustración Digital" accent="pink" />

        <div className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight max-w-2xl">
            Cósmico, peludo y{' '}
            <span className="neon-pink">punky</span> — piezas originales.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Ilustraciones digitales con paleta neón y fondos de nebula. Desde
            personajes originales inspirados en la estética de Jinx, hasta la
            serie de gatos cósmicos firmada @ARTHEMYS_D.
          </p>
        </div>

        {/* Illustration grid */}
        {loading ? (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="aspect-[4/5] rounded-xl halftone-pink animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {illustrations.map((w, i) => (
              <ArtCard
                key={w.id}
                work={w}
                accent={i % 2 === 0 ? 'pink' : 'purple'}
                aspect={i === 0 ? 'portrait' : 'square'}
                className={i === 0 ? 'sm:row-span-2 sm:aspect-auto' : ''}
              />
            ))}
          </div>
        )}

        {/* Pet portraits feature */}
        <div className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <Heart size={16} className="text-[#ff1b6b]" weight="Filled" />
                <span className="font-mono-punk text-[10px] uppercase tracking-[0.25em] text-[#ff1b6b]">
                  mi parte favorita
                </span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl leading-tight">
                Retratos de{' '}
                <span className="neon-cyan">mascotas</span> con personalidad.
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Tomo una foto existente y la reinvento para que exprese la
              personalidad del animal. Con After Effects + Puppet, planeo cada
              ilustración para darle vida en post-producción.
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-xl halftone-cyan animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pets.map((p) => (
                <PetCard key={p.id} work={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function PetCard({ work }: { work: Artwork }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        { }
        <img
          src={work.imageUrl}
          alt={work.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070f] via-transparent to-transparent" />
        <div className="absolute right-3 top-3">
          <PunkBadge variant="cyan">Mascota</PunkBadge>
        </div>
        <div className="absolute left-4 bottom-4">
          <h4 className="font-display text-xl text-foreground leading-tight">
            {work.title}
          </h4>
          <p className="font-mono-punk text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
            {work.role} · {work.year}
          </p>
        </div>
      </div>
      <div className="p-5">
        <p className="text-[13px] leading-relaxed text-muted-foreground">
          {work.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {work.tags.split(',').map((t) => (
            <PunkBadge key={t} variant="ghost">
              {t.trim()}
            </PunkBadge>
          ))}
        </div>
      </div>
    </article>
  )
}


