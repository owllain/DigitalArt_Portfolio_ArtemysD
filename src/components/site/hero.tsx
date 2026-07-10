'use client'

import { ArrowDown, Sparkles, Play } from 'reicon-react'
import { SlotLabel } from './slot-label'

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden grain scanlines"
    >
      {/* Cosmic background */}
      <div className="absolute inset-0">
        { }
        <img
          src="/gallery/hero-bg.png"
          alt=""
          aria-hidden
          className="h-full w-full object-cover animate-breath"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070f]/60 via-[#07070f]/40 to-[#07070f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07070f] via-transparent to-[#07070f]/40" />
      </div>

      {/* floating decorative tags */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[8%] top-[24%] font-mono-punk text-[10px] uppercase tracking-[0.3em] text-[#00e5ff]/60 animate-floaty">
          [ frame x frame ]
        </span>
        <span className="absolute right-[10%] top-[30%] font-mono-punk text-[10px] uppercase tracking-[0.3em] text-[#ff1b6b]/70 animate-floaty [animation-delay:1.5s]">
          {'// shiage · douga'}
        </span>
        <span className="absolute right-[18%] bottom-[26%] font-mono-punk text-[10px] uppercase tracking-[0.3em] text-[#ffd60a]/50 animate-floaty [animation-delay:2.8s]">
          ★ koeda animation
        </span>
        <span className="absolute left-[12%] bottom-[22%] font-mono-punk text-[10px] uppercase tracking-[0.3em] text-[#9d4edd]/70 animate-floaty [animation-delay:0.7s]">
          {'< after effects />'}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* status pill */}
          <div
            className="inline-flex items-center gap-2 rounded-full border border-[#ff1b6b]/40 bg-[#ff1b6b]/10 px-3 py-1.5 mb-6 animate-fade-up"
            style={{ animationDelay: '0ms' }}
          >
            <span className="h-2 w-2 rounded-full bg-[#ff1b6b] animate-blink" />
            <span className="font-mono-punk text-[11px] uppercase tracking-[0.25em] text-[#ff1b6b]">
              Disponible para comisiones · 2025
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-[clamp(2.8rem,9vw,7.5rem)] leading-[0.92] tracking-tight animate-fade-up"
            style={{ animationDelay: '75ms' }}
          >
            <span className="block text-foreground">DIANA</span>
            <span className="block">
              <span className="text-[#ff1b6b] drop-shadow-[0_0_24px_rgba(255,27,107,0.5)]">
                HERN
              </span>
              <span className="text-foreground">ÁNDEZ</span>
            </span>
            <span className="block">
              <span className="text-foreground">/</span>{' '}
              <span className="neon-cyan">ARTHEMYS</span>
              <span className="text-[#ffd60a]">_D</span>
            </span>
          </h1>

          {/* tagline */}
          <p
            className="mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground animate-fade-up"
            style={{ animationDelay: '150ms' }}
          >
            Ilustradora digital y animadora freelance.{' '}
            <span className="text-foreground">Animación 2D frame x frame</span>,
            fondos de animación, iconos y retratos de mascotas — todo con un
            toque peludo y una paleta punk-cósmica inspirada en{' '}
            <span className="neon-pink">Jinx</span>.
          </p>

          {/* CTAs */}
          <div
            className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up"
            style={{ animationDelay: '300ms' }}
          >
            <a
              href="#animaciones"
              className="group inline-flex items-center gap-2 rounded-md bg-[#ff1b6b] px-6 py-3.5 font-mono-punk text-[13px] uppercase tracking-[0.2em] text-[#07070f] transition-all hover:glow-pink hover:scale-[1.03]"
            >
              <Play size={16} weight="Filled" />
              <SlotLabel text="Ver portafolio" />
            </a>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3.5 font-mono-punk text-[13px] uppercase tracking-[0.2em] text-foreground backdrop-blur-sm transition-all hover:border-[#00e5ff]/60 hover:glow-cyan hover:scale-[1.03]"
            >
              <Sparkles size={16} />
              <SlotLabel text="Contáctame" />
            </a>
          </div>

          {/* mini stats */}
          <div
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4 animate-fade-up"
            style={{ animationDelay: '500ms' }}
          >
            {[
              { n: '5', l: 'años freelance' },
              { n: '2025', l: 'koeda animation' },
              { n: '∞', l: 'café + gatos' },
            ].map((s) => (
              <div key={s.l} className="flex flex-col">
                <span className="font-display text-3xl text-foreground">{s.n}</span>
                <span className="font-mono-punk text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#sobre-mi"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-[#00e5ff] transition-colors"
      >
        <span className="font-mono-punk text-[10px] uppercase tracking-[0.3em]">
          scroll
        </span>
        <ArrowDown size={16} className="animate-floaty" />
      </a>
    </section>
  )
}
