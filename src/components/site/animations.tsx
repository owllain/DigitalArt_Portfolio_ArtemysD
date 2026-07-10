'use client'

import { BlossomCarousel, BlossomPrev, BlossomNext } from '@blossom-carousel/react'
import { ArrowRight, Film, Palette, Sparkles } from 'reicon-react'
import { SectionLabel } from './section-label'
import { PunkBadge } from './punk-badge'
import { useScrollReveal } from './use-scroll-reveal'
import { byCategory, useWorks } from './use-works'
import type { Artwork } from '@/lib/types'

export function Animations() {
  const { ref } = useScrollReveal()
  const { works, loading } = useWorks()
  const anims = byCategory(works, 'animation')

  return (
    <section
      id="animaciones"
      ref={ref}
      className="reveal relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5"
    >
      {/* glow backdrop */}
      <div className="pointer-events-none absolute left-1/2 top-40 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#ff1b6b]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <SectionLabel index="03" title="Animaciones" accent="pink" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: intro + credits list */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              Animación 2D{' '}
              <span className="neon-pink">frame x frame</span>.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Cuento con experiencia en animación japonesa de la mano de{' '}
              <span className="text-foreground">Koeda Animation</span>, en las
              áreas de <span className="text-[#00e5ff]">Douga (In-Between)</span>{' '}
              y <span className="text-[#00e5ff]">Shiage (Color)</span>. Sin
              contar correcciones, soy de los últimos pasos antes de
              post-producción y emisión.
            </p>

            {/* credits list */}
            <div className="mt-7 space-y-2">
              <div className="font-mono-punk text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                {'// créditos publicados'}
              </div>
              {anims.map((a) => (
                <CreditRow key={a.id} work={a} />
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-[#ffd60a]/25 bg-[#ffd60a]/5 p-4">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles size={14} className="text-[#ffd60a]" />
                <span className="font-mono-punk text-[10px] uppercase tracking-[0.2em] text-[#ffd60a]">
                  También
                </span>
              </div>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                Experiencia en animaciones NSFW en los apartados de Douga y
                Color, y trabajo independiente para clientes (intro de
                Juanburgueso, animación mixta Frame x Frame + After Effects).
              </p>
            </div>
          </div>

          {/* Right: carousel */}
          <div className="lg:col-span-7">
            {loading ? (
              <div className="aspect-video rounded-xl halftone-pink animate-pulse" />
            ) : (
              <>
                <BlossomCarousel
                  id="anim-carousel"
                  className="anim-carousel"
                  repeat
                >
                  {anims.map((a) => (
                    <AnimSlide key={a.id} work={a} />
                  ))}
                </BlossomCarousel>

                <div className="mt-5 flex items-center justify-between">
                  <div className="font-mono-punk text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {`// ${anims.length} producciones`}
                  </div>
                  <div className="flex items-center gap-2">
                    <BlossomPrev
                      for="anim-carousel"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-foreground transition hover:border-[#ff1b6b]/60 hover:text-[#ff1b6b]"
                    >
                      <ArrowRight size={16} className="rotate-180" />
                    </BlossomPrev>
                    <BlossomNext
                      for="anim-carousel"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-foreground transition hover:border-[#ff1b6b]/60 hover:text-[#ff1b6b]"
                    >
                      <ArrowRight size={16} />
                    </BlossomNext>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Juanburgueso feature */}
        <JuanburguesoFeature works={works} />
      </div>
    </section>
  )
}

function CreditRow({ work }: { work: Artwork }) {
  const roleAccent =
    work.role?.toLowerCase().includes('color')
      ? 'pink'
      : work.role?.toLowerCase().includes('douga')
      ? 'cyan'
      : 'yellow'
  return (
    <div className="group flex items-center gap-3 rounded-lg border border-white/8 bg-card/40 p-3 transition hover:border-[#ff1b6b]/40 hover:bg-card">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#ff1b6b]/10">
        {roleAccent === 'pink' ? (
          <Palette size={16} className="text-[#ff1b6b]" />
        ) : (
          <Film size={16} className="text-[#00e5ff]" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm text-foreground truncate">{work.title}</div>
        <div className="font-mono-punk text-[10px] uppercase tracking-wider text-muted-foreground">
          {work.client} · {work.year}
        </div>
      </div>
      <PunkBadge variant={roleAccent as 'pink' | 'cyan' | 'yellow'}>
        {work.role}
      </PunkBadge>
    </div>
  )
}

function AnimSlide({ work }: { work: Artwork }) {
  return (
    <div
      data-blossom-slide
      className="blossom-slide relative mr-4 w-[85vw] sm:w-[460px] shrink-0"
    >
      <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-card">
        <div className="relative aspect-video overflow-hidden">
          { }
          <img
            src={work.imageUrl}
            alt={work.title}
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07070f] via-[#07070f]/40 to-transparent" />
          <div className="absolute right-3 top-3">
            <PunkBadge variant={work.featured ? 'pink' : 'ghost'}>
              {work.role}
            </PunkBadge>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="font-display text-xl text-foreground leading-tight">
              {work.title}
            </h3>
            <p className="mt-1 font-mono-punk text-[10px] uppercase tracking-wider text-muted-foreground">
              {work.client} · {work.year}
            </p>
          </div>
        </div>
        <div className="p-4">
          <p className="text-[13px] leading-relaxed text-muted-foreground">
            {work.description}
          </p>
        </div>
      </div>
    </div>
  )
}

function JuanburguesoFeature({ works }: { works: Artwork[] }) {
  const juan = works.find(
    (w) => w.category === 'animation' && w.title.toLowerCase().includes('juanburgueso')
  )
  if (!juan) return null

  return (
    <div className="mt-16 overflow-hidden rounded-2xl border border-[#ff1b6b]/30 bg-gradient-to-br from-[#ff1b6b]/10 via-card to-[#9d4edd]/10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
          { }
          <img
            src={juan.imageUrl}
            alt={juan.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#07070f]/60" />
          <div className="absolute left-4 top-4">
            <PunkBadge variant="pink">Caso destacado</PunkBadge>
          </div>
        </div>
        <div className="p-7 sm:p-10 flex flex-col justify-center">
          <div className="font-mono-punk text-[10px] uppercase tracking-[0.25em] text-[#ff1b6b] mb-3">
            {'// mascota firma del director'}
          </div>
          <h3 className="font-display text-3xl sm:text-4xl leading-tight">
            {juan.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {juan.description}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              { k: 'Rol', v: juan.role ?? '—' },
              { k: 'Cliente', v: juan.client ?? '—' },
              { k: 'Año', v: juan.year ?? '—' },
              { k: 'Método', v: 'Frame x Frame + AE' },
            ].map((f) => (
              <div
                key={f.k}
                className="rounded-md border border-white/10 bg-[#07070f]/40 p-3"
              >
                <div className="font-mono-punk text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  {f.k}
                </div>
                <div className="mt-1 text-sm text-foreground">{f.v}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {['rediseño', 'guías de uso', 'intro', 'after effects', 'puppet', 'keyframes'].map(
              (t) => (
                <PunkBadge key={t} variant="purple">
                  {t}
                </PunkBadge>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
