'use client'

import { useState } from 'react'
import { Send, CheckCircle, Loader } from 'reicon-react'
import { SectionLabel } from './section-label'
import { PunkBadge } from './punk-badge'
import { useScrollReveal } from './use-scroll-reveal'
import { useToast } from '@/hooks/use-toast'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const PROJECT_TYPES = [
  { v: 'ilustracion', l: 'Ilustración digital' },
  { v: 'animacion', l: 'Animación 2D' },
  { v: 'mascota', l: 'Retrato de mascota' },
  { v: 'fondo', l: 'Fondo de animación' },
  { v: 'stickers', l: 'Iconos / stickers' },
  { v: 'diseno', l: 'Diseño gráfico' },
  { v: 'otro', l: 'Otro' },
]

const BUDGETS = ['< $100', '$100–$300', '$300–$800', '$800+', 'Por definir']

export function Contact() {
  const { ref } = useScrollReveal()
  const { toast } = useToast()
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  })

  const set = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          projectType: form.projectType || null,
          budget: form.budget || null,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || 'Error al enviar')
      }
      setDone(true)
      toast({
        title: '¡Mensaje enviado!',
        description: 'Te responderé lo antes posible. Gracias por escribir.',
      })
      setForm({ name: '', email: '', projectType: '', budget: '', message: '' })
    } catch (err) {
      toast({
        title: 'No se pudo enviar',
        description: err instanceof Error ? err.message : 'Intenta de nuevo.',
        variant: 'destructive',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="contacto"
      ref={ref}
      className="reveal relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden"
    >
      {/* glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-[80%] -translate-x-1/2 rounded-full bg-[#ff1b6b]/15 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 halftone-pink opacity-[0.05]" />

      <div className="mx-auto max-w-5xl">
        <SectionLabel index="07" title="Contáctame" accent="pink" />

        <div className="mt-8 text-center">
          <h2 className="font-display text-4xl sm:text-6xl leading-[0.95] tracking-tight">
            ¿Tienes una{' '}
            <span className="neon-pink">idea</span>?
            <br />
            <span className="text-[#00e5ff]">Hagamos magia.</span>
          </h2>
          <p className="mt-5 mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
            Comisiones de ilustración, animación, retratos de mascotas, fondos y
            diseño. Cuéntame tu proyecto y te respondo con una propuesta y
            tiempos.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-8 rounded-2xl border border-white/10 bg-card/60 backdrop-blur-sm p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Nombre *">
                <Input
                  required
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  placeholder="Tu nombre"
                  className="bg-[#07070f]/60 border-white/15 focus:border-[#ff1b6b] focus-visible:border-[#ff1b6b]"
                />
              </Field>
              <Field label="Email *">
                <Input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  placeholder="tu@email.com"
                  className="bg-[#07070f]/60 border-white/15 focus:border-[#ff1b6b] focus-visible:border-[#ff1b6b]"
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <Field label="Tipo de proyecto">
                <Select
                  value={form.projectType}
                  onValueChange={(v) => set('projectType', v)}
                >
                  <SelectTrigger className="bg-[#07070f]/60 border-white/15 focus:border-[#ff1b6b]">
                    <SelectValue placeholder="Selecciona..." />
                  </SelectTrigger>
                  <SelectContent className="bg-[#11111d] border-white/15">
                    {PROJECT_TYPES.map((p) => (
                      <SelectItem key={p.v} value={p.v}>
                        {p.l}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Presupuesto">
                <Select
                  value={form.budget}
                  onValueChange={(v) => set('budget', v)}
                >
                  <SelectTrigger className="bg-[#07070f]/60 border-white/15 focus:border-[#ff1b6b]">
                    <SelectValue placeholder="Rango (USD)" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#11111d] border-white/15">
                    {BUDGETS.map((b) => (
                      <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Cuéntame tu proyecto *">
                <Textarea
                  required
                  value={form.message}
                  onChange={(e) => set('message', e.target.value)}
                  placeholder="Idea, referencias, tiempos, contexto..."
                  rows={5}
                  className="bg-[#07070f]/60 border-white/15 focus:border-[#ff1b6b] focus-visible:border-[#ff1b6b] resize-none"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={submitting || done}
              className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-[#ff1b6b] px-7 py-3.5 font-mono-punk text-[13px] uppercase tracking-[0.2em] text-[#07070f] transition-all hover:glow-pink hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader size={16} className="animate-spin" />
                  Enviando...
                </>
              ) : done ? (
                <>
                  <CheckCircle size={16} weight="Filled" />
                  ¡Enviado!
                </>
              ) : (
                <>
                  <Send size={16} />
                  Enviar mensaje
                </>
              )}
            </button>

            {done && (
              <p className="mt-4 text-sm text-[#4ade80]">
                Gracias por escribir. Te responderé pronto.
              </p>
            )}
          </form>

          {/* Side info */}
          <aside className="lg:col-span-4 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-card/60 p-6">
              <div className="font-mono-punk text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                {'// datos rápidos'}
              </div>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="text-muted-foreground">Alias:</span>{' '}
                  <span className="text-foreground">ArthemysD</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Redes:</span>{' '}
                  <span className="text-[#00e5ff]">@ARTHEMYS_D</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Estudio:</span>{' '}
                  <span className="text-foreground">Koeda Animation</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Base:</span>{' '}
                  <span className="text-foreground">San Juan del Río, MX</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Estado:</span>{' '}
                  <span className="text-[#4ade80]">Disponible</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#ffd60a]/25 bg-[#ffd60a]/5 p-6">
              <div className="flex items-center gap-2 mb-2">
                <PunkBadge variant="yellow">Primera clase</PunkBadge>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                ¿No estás segura de qué necesitas? Escríbeme con tu idea en una
                línea y armamos la propuesta juntos. Sin compromiso.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="block font-mono-punk text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
        {label}
      </span>
      {children}
    </label>
  )
}
