'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'reicon-react'
import { SlotLabel } from './slot-label'
import { cn } from '@/lib/utils'

const LINKS = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#animaciones', label: 'Animaciones' },
  { href: '#fondos', label: 'Fondos' },
  { href: '#iconos', label: 'Iconos' },
  { href: '#ilustracion', label: 'Ilustración' },
  { href: '#contacto', label: 'Contacto' },
]

export function PunkNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('#sobre-mi')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = LINKS.map((l) => l.href)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.querySelector(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#07070f]/85 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#d8b4fe] text-[#07070f] font-display text-sm glow-pink">
            W
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#a78bfa] animate-blink" />
          </span>
          <span className="font-display text-sm tracking-tight">
            ARTHEMYS<span className="text-[#ff1b6b]">_WEB</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  'relative px-3 py-2 font-mono-punk text-[12px] uppercase tracking-[0.18em] transition-colors',
                  active === l.href
                    ? 'text-[#ff1b6b]'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <SlotLabel text={l.label} />
                {active === l.href && (
                  <span className="absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-[#ff1b6b] to-transparent" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center gap-2 rounded-md bg-[#ff1b6b] px-4 py-2 font-mono-punk text-[12px] uppercase tracking-[0.18em] text-[#07070f] transition-all hover:glow-pink hover:scale-[1.03]"
        >
          Contáctame
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#07070f]/95 backdrop-blur-xl">
          <ul className="flex flex-col p-4 gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block px-3 py-3 rounded-md font-mono-punk text-xs uppercase tracking-[0.2em]',
                    active === l.href
                      ? 'text-[#ff1b6b] bg-[#ff1b6b]/10'
                      : 'text-muted-foreground'
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-md bg-[#ff1b6b] px-3 py-3 text-center font-mono-punk text-xs uppercase tracking-[0.2em] text-[#07070f]"
              >
                Contáctame
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
