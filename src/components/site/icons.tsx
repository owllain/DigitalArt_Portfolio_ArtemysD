'use client'

import { SectionLabel } from './section-label'
import { PunkBadge } from './punk-badge'
import { useScrollReveal } from './use-scroll-reveal'
import { byCategory, useWorks } from './use-works'

export function Icons() {
  const { ref } = useScrollReveal()
  const { works, loading } = useWorks()
  const icons = byCategory(works, 'icon')

  return (
    <section
      id="iconos"
      ref={ref}
      className="reveal relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden"
    >
      {/* halftone bg */}
      <div className="pointer-events-none absolute inset-0 halftone-pink opacity-[0.07]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionLabel index="05" title="Iconos / Stickers" accent="yellow" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              Stickers{' '}
              <span className="neon-yellow">punk</span> listos para imprimir.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Sets de stickers e iconos con estética street-art: armas
              estilizadas, criaturas, tiburones y objetos. Neón sobre negro,
              pensados para impresión die-cut y uso digital. Cada set se entrega
              seccionado y con variantes de peso de línea.
            </p>

            <div className="mt-7 space-y-3">
              {[
                { k: 'Formato', v: 'PNG transparente + SVG' },
                { k: 'Estilo', v: 'Outline 1.5px + peso filled' },
                { k: 'Grid', v: '24×24 px base' },
                { k: 'Entrega', v: 'Die-cut ready' },
              ].map((f) => (
                <div
                  key={f.k}
                  className="flex items-center justify-between rounded-md border border-white/10 bg-card/50 px-4 py-2.5"
                >
                  <span className="font-mono-punk text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {f.k}
                  </span>
                  <span className="text-sm text-foreground">{f.v}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['street-art', 'neón', 'die-cut', 'vectorial', 'punky', 'criaturas'].map(
                (t) => (
                  <PunkBadge key={t} variant="yellow">
                    {t}
                  </PunkBadge>
                )
              )}
            </div>
          </div>

          {/* Right: sticker showcase */}
          <div className="lg:col-span-7">
            {loading ? (
              <div className="aspect-square rounded-xl halftone-pink animate-pulse" />
            ) : (
              <div className="relative">
                <div className="absolute -inset-4 slash-bg opacity-20 rounded-2xl" />
                <div className="relative overflow-hidden rounded-xl border border-[#ffd60a]/30 bg-[#07070f]">
                  <div className="relative aspect-square">
                    { }
                    <img
                      src={icons[0]?.imageUrl ?? '/gallery/stickers-sheet-1.png'}
                      alt={icons[0]?.title ?? 'Colección de stickers'}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 scanlines" />
                  </div>
                  <div className="border-t border-white/10 p-5 flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-lg text-foreground">
                        {icons[0]?.title ?? 'Colección de stickers punk'}
                      </h3>
                      <p className="font-mono-punk text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                        {icons[0]?.year} · @ARTHEMYS_D
                      </p>
                    </div>
                    <PunkBadge variant="yellow">{`#${String(icons.length).padStart(2, '0')}`}</PunkBadge>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
