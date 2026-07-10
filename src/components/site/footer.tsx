'use client'

import { Heart } from 'reicon-react'

const FOOTER_LINKS = [
  {
    title: 'Portafolio',
    links: [
      { label: 'Proceso creativo', href: '#proceso' },
      { label: 'Animaciones', href: '#animaciones' },
      { label: 'Fondos', href: '#fondos' },
      { label: 'Iconos', href: '#iconos' },
      { label: 'Ilustración', href: '#ilustracion' },
    ],
  },
  {
    title: 'Sobre la artista',
    links: [
      { label: 'Sobre mí', href: '#sobre-mi' },
      { label: 'Koeda Animation', href: '#sobre-mi' },
      { label: 'Inspiración · Jinx', href: '#sobre-mi' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
  {
    title: 'Servicios',
    links: [
      { label: 'Ilustración digital', href: '#contacto' },
      { label: 'Animación 2D', href: '#animaciones' },
      { label: 'Retratos de mascotas', href: '#ilustracion' },
      { label: 'Fondos de animación', href: '#fondos' },
      { label: 'Stickers & iconos', href: '#iconos' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-white/10 bg-[#05050c] overflow-hidden">
      {/* horizon glow (punk mountain vibe) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#ff1b6b]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* top: brand + links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* brand */}
          <div className="lg:col-span-5">
            <a href="#top" className="inline-flex items-center gap-2">
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#ff1b6b] text-[#07070f] font-display text-base glow-pink">
                A
              </span>
              <span className="font-display text-lg tracking-tight">
                ARTHEMYS<span className="text-[#ff1b6b]">_D</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-sm">
              Diana Hernández — ilustradora digital y animadora freelance. El
              toque peludo en cada frame, con paleta punk-cósmica inspirada en
              Jinx.
            </p>

            {/* social row */}
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                { l: '@ARTHEMYS_D', c: '#00e5ff' },
                { l: 'Koeda Animation', c: '#ff1b6b' },
                { l: 'VGen', c: '#9d4edd' },
              ].map((s) => (
                <span
                  key={s.l}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono-punk text-[10px] uppercase tracking-wider"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: s.c }}
                  />
                  {s.l}
                </span>
              ))}
            </div>
          </div>

          {/* link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="font-mono-punk text-[10px] uppercase tracking-[0.25em] text-[#ff1b6b] mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA col */}
          <div className="lg:col-span-1 flex lg:flex-col gap-3 lg:items-end">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-md border border-[#ff1b6b]/50 bg-[#ff1b6b]/10 px-4 py-2.5 font-mono-punk text-[11px] uppercase tracking-[0.2em] text-[#ff1b6b] transition hover:bg-[#ff1b6b] hover:text-[#07070f]"
            >
              Contáctame
            </a>
          </div>
        </div>

        {/* divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono-punk text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} Diana Hernández · ArthemysD
          </p>
          <p className="flex items-center gap-1.5 font-mono-punk text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Hecho con
            <Heart size={12} className="text-[#ff1b6b]" weight="Filled" />
            y mucho café
          </p>
          <p className="font-mono-punk text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-[#00e5ff]">●</span> San Juan del Río · MX
          </p>
        </div>
      </div>
    </footer>
  )
}
