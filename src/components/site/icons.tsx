'use client'

import { SectionLabel } from './section-label'
import { PunkBadge } from './punk-badge'
import { useScrollReveal } from './use-scroll-reveal'
import { STICKER_SETS, ArtworkSet } from '@/lib/data'

export function Icons() {
  const { ref } = useScrollReveal()

  return (
    <section
      id="iconos"
      ref={ref}
      className="reveal relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden bg-[#07070f]"
    >
      {/* glow backdrop (paleta amarilla) + transition */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#ffd60a]/6 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#07070f]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#ffd60a]/6 to-transparent" />

      {/* halftone bg overlay */}
      <div className="pointer-events-none absolute inset-0 halftone-pink opacity-[0.07]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionLabel index="05" title="Iconos / Stickers" accent="yellow" />

        {/* Carrusel (izquierda) + texto y etiquetas (derecha) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left: carrusel de stickers */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="grid grid-cols-1 gap-10">
              {STICKER_SETS.map((set) => (
                <StickerSetCard key={set.id} set={set} />
              ))}
            </div>
          </div>

          {/* Right: título + texto + etiquetas */}
          <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-24 lg:self-start space-y-5">
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              Stickers e iconos <span className="neon-yellow">ready-to-print</span>.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Sets de pegatinas conceptuales y pins digitales con estética neón, street-art y graffiti.
              Se entregan en trazados vectoriales limpios (<span className="text-foreground font-medium">SVG</span>)
              y archivos transparentes de alta resolución (<span className="text-foreground font-medium">PNG</span>)
              ideales para impresión die-cut o uso como badges oficiales en plataformas de streaming.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {['street-art', 'neón', 'die-cut', 'vectorial', 'punky', 'badges'].map((t) => (
                <PunkBadge key={t} variant="yellow">
                  {t}
                </PunkBadge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function StickerSetCard({ set }: { set: ArtworkSet }) {
  return (
    <div className="group flex flex-col rounded-xl border border-white/10 bg-[#0c0c18] overflow-hidden">
      {/* Bento Grid Layout for Sticker Sheets/Items */}
      <div className="w-full bg-[#07070f] p-4 sm:p-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-fr">
          {set.items.map((item, itemIdx) => {
            // Primer item toma un cuadro grande (2x2)
            const isLarge = itemIdx === 0;
            return (
              <div 
                key={itemIdx} 
                className={`relative overflow-hidden rounded-xl border border-white/10 bg-[#0c0c18] flex items-center justify-center scanlines p-4 group/item hover:border-[#ffd60a]/40 transition-colors ${
                  isLarge 
                    ? 'col-span-2 row-span-2 aspect-square lg:aspect-auto' 
                    : 'col-span-1 row-span-1 aspect-square'
                }`}
              >
                <img
                  src={item.url}
                  alt={item.label}
                  className="max-h-full max-w-full object-contain transition-transform duration-[600ms] group-hover/item:scale-110"
                  loading="lazy"
                />

                {/* Item Label */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07070f]/95 via-[#07070f]/40 to-transparent p-3 pt-8 text-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                  <span className="font-mono-punk text-[9px] uppercase tracking-[0.2em] text-[#ffd60a]">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info card text */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg text-foreground leading-tight">{set.title}</h3>
            <span className="font-mono-punk text-xs text-muted-foreground shrink-0">{set.year}</span>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            {set.description}
          </p>
        </div>

        {/* Tags footer */}
        <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1">
          {set.tags?.map((t) => (
            <span key={t} className="font-mono-punk text-[8px] uppercase tracking-wider text-[#ffd60a]">
              #{t}
            </span>
          ))}
          {set.role && (
            <span className="font-mono-punk text-[8px] uppercase tracking-wider text-muted-foreground ml-auto">
              {set.role}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
