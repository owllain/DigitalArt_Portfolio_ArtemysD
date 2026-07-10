'use client'

import { BlossomCarousel, BlossomPrev, BlossomNext } from '@blossom-carousel/react'
import { ArrowRight } from 'reicon-react'
import { SectionLabel } from './section-label'
import { PunkBadge } from './punk-badge'
import { useScrollReveal } from './use-scroll-reveal'
import { byCategory, useWorks } from './use-works'
import type { Artwork } from '@/lib/types'

const STEP_LABELS: Record<number, string> = {
  1: 'Boceto',
  2: 'Lineart',
  3: 'Color base',
  4: 'Render final',
}

export function Process() {
  const { ref } = useScrollReveal()
  const { works, loading } = useWorks()
  const steps = byCategory(works, 'process')

  return (
    <section
      id="proceso"
      ref={ref}
      className="reveal relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="02" title="Proceso Creativo" accent="cyan" />

        <div className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight max-w-2xl">
            Del boceto al{' '}
            <span className="neon-cyan">render final</span> — paso a paso.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Cada ilustración sigue un flujo de producción anime: boceto de
            gesto, limpieza de líneas, bloqueo de color plano y render con luces
            y firma. Desliza para ver la transformación.
          </p>
        </div>

        {/* Step rail */}
        {loading ? (
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl halftone-cyan animate-pulse"
              />
            ))}
          </div>
        ) : (
          <>
            <div className="mt-10 hidden lg:flex items-center justify-between gap-2 mb-4">
              {steps.map((s, i) => (
                <div key={s.id} className="flex items-center gap-2 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#00e5ff]/40 font-mono-punk text-[11px] text-[#00e5ff]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono-punk text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {STEP_LABELS[i + 1] ?? s.title}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-px bg-gradient-to-r from-[#00e5ff]/40 to-transparent" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <BlossomCarousel
                id="process-carousel"
                className="process-carousel"
                repeat
              >
                {steps.map((s, i) => (
                  <ProcessSlide
                    key={s.id}
                    work={s}
                    step={i + 1}
                    label={STEP_LABELS[i + 1] ?? s.title}
                  />
                ))}
              </BlossomCarousel>

              <div className="mt-6 flex items-center justify-between">
                <div className="font-mono-punk text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {`// arrastra · ${steps.length} etapas`}
                </div>
                <div className="flex items-center gap-2">
                  <BlossomPrev
                    for="process-carousel"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-foreground transition hover:border-[#00e5ff]/60 hover:text-[#00e5ff]"
                  >
                    <ArrowRight size={16} className="rotate-180" />
                  </BlossomPrev>
                  <BlossomNext
                    for="process-carousel"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-foreground transition hover:border-[#00e5ff]/60 hover:text-[#00e5ff]"
                  >
                    <ArrowRight size={16} />
                  </BlossomNext>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

function ProcessSlide({
  work,
  step,
  label,
}: {
  work: Artwork
  step: number
  label: string
}) {
  return (
    <div
      data-blossom-slide
      className="blossom-slide relative mr-4 w-[88vw] sm:w-[420px] shrink-0"
    >
      <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-card">
        <div className="relative aspect-square overflow-hidden">
          { }
          <img
            src={work.imageUrl}
            alt={work.title}
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07070f] via-transparent to-transparent" />
          <div className="absolute left-4 top-4">
            <PunkBadge variant="cyan">{`ETAPA ${String(step).padStart(2, '0')}`}</PunkBadge>
          </div>
          <div className="absolute right-4 top-4 font-display text-5xl text-[#00e5ff]/30">
            {String(step).padStart(2, '0')}
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-display text-xl text-foreground">{label}</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
            {work.description}
          </p>
          {work.tags && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {work.tags
                .split(',')
                .slice(0, 4)
                .map((t) => (
                  <PunkBadge key={t} variant="ghost">
                    {t.trim()}
                  </PunkBadge>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
