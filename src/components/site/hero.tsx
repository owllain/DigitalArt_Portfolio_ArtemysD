'use client'

import { ArrowDown, Play } from 'reicon-react'
import { SlotLabel } from './slot-label'
import { PunkBadge } from './punk-badge'

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden grain scanlines"
    >
      {/* Clean hero background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/gallery/punkkuronekodream.png"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover translate-y-[40px]"
        />
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
              Disponible para comisiones · 2026
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
          <div
            className="mt-7 max-w-2xl animate-fade-up"
            style={{ animationDelay: '150ms' }}
          >
            <div className="rounded-3xl border border-white/10 bg-[#000]/70 p-6 shadow-[0_35px_120px_-40px_rgba(0,0,0,0.8)] backdrop-blur-sm">
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                Diseñadora, ilustradora digital y animadora freelance.
                Conocimiento en la paquetería de Adobe. Ilustración de fondos,
                criaturas y personajes — todo con un{' '}
                <span className="text-foreground">toque peludo</span> para buscar
                siempre lo colorido en lo típico. Mezclo{' '}
                <span className="text-[#c7d2fe]">fantasía</span>,{' '}
                <span className="text-[#d8b4fe]">criaturas</span>,{' '}
                <span className="text-[#00e5ff]">color</span> y{' '}
                <span className="text-[#ffd60a]">café</span>.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div
            className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up"
            style={{ animationDelay: '300ms' }}
          >
            <a
              href="#animaciones"
              className="group inline-flex items-center gap-2 rounded-md bg-[#00e5ff] px-6 py-3.5 font-mono-punk text-[13px] uppercase tracking-[0.2em] text-[#07070f] transition-all hover:glow-cyan hover:scale-[1.03]"
            >
              <Play size={16} weight="Filled" />
              <SlotLabel text="Ver portafolio" />
            </a>
          </div>

          {/* mini stats as badges */}
          <div
            className="mt-12 animate-fade-up rounded-[2rem] border border-white/10 bg-[#000]/70 p-6 shadow-[0_35px_120px_-40px_rgba(0,0,0,0.8)]"
            style={{ animationDelay: '500ms' }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <PunkBadge variant="pink">5 años freelance</PunkBadge>
              <PunkBadge variant="cyan">2025</PunkBadge>
              <PunkBadge variant="purple">koeda animation</PunkBadge>
              <PunkBadge variant="yellow">∞ café + gatos</PunkBadge>
            </div>
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
