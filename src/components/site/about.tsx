'use client'

import { SectionLabel } from './section-label'
import { PunkBadge } from './punk-badge'
import { useScrollReveal } from './use-scroll-reveal'
import { computeStats } from '@/lib/data'
import { Sparkles, Briefcase, Eye } from 'reicon-react'

const BIO_FACTS = [
  { k: 'Nombre', v: 'Diana Hernández' },
  { k: 'Alias', v: 'ArthemysD / @ARTHEMYS_D' },
  { k: 'Edad', v: '23 años' },
  { k: 'Formación', v: 'Lic. Diseño y Comunicación Visual' },
  { k: 'Freelance', v: '5 años' }
]

const SKILLS = [
  'Animación 2D',
  'Color / Shiage',
  'In-Between / Douga',
  'Vector y Mapa de Bits',
  'Ilustración de mascotas',
  'Fondos de animación',
  'Diseño de personajes',
  'Iconos & stickers',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Adobe InDesign',
  'Adobe After Effects',
  'Clip Studio Paint Ex'
]

const WORK_EXPERIENCE = [
  {
    role: 'Douga (In-Between) & Shiage (Color)',
    company: 'Koeda Animation',
    period: '2025 - Presente',
    desc: 'Animación 2D frame x frame en Clip Studio Paint'
  },
  {
    role: 'Diseñadora de Comunicación Visual',
    company: 'Colegio de Ingenieros Civiles (CIC) San Juan del Río',
    period: '4 años - Presente',
    desc: 'Material de difusión oficial y piezas visuales promocionales.'
  },
  {
    role: 'Ventas y Atención al cliente',
    company: 'Freelance, PopMania y AniCard',
    period: '2 años',
    desc: 'Gestión directa de comisiones, atención al cliente, planeación de presupuesto y comunicación asertiva.'
  },
  {
    role: 'Artista Conceptual e Ilustradora Freelance',
    company: 'Independiente (@ARTHEMYS_D)',
    period: '5 años',
    desc: 'Creación de mercancía de marca propia, ilustraciones por encargo estáticos y con animación'
  }
]

export function About() {
  const { ref } = useScrollReveal()
  const stats = computeStats() // Importación directa súper rápida y libre de bugs de red

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className="reveal relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* marquee strip top */}
      <div className="absolute inset-x-0 top-0 overflow-hidden border-y border-white/10 bg-[#0a0a14] py-2">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              {[
                'ILUSTRACIÓN DIGITAL',
                '★',
                'ANIMACIÓN 2D',
                '★',
                'FRAME X FRAME',
                '★',
                'KOEDA ANIMATION',
                '★',
                'TOQUE PELUDO',
                '★',
                'PUNK · CÓSMICO',
                '★',
              ].map((t, j) => (
                <span
                  key={`${i}-${j}`}
                  className="font-mono-punk text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl pt-12">
        <SectionLabel index="01" title="Sobre mí" accent="cyan" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: portrait + quote + inspiration */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl border border-white/10">
                <img
                  src="/gallery/Portrait_Aboutme.png"
                  alt="Diana Hernández - ARTHEMYS_D"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <PunkBadge variant="pink" className="mb-2">
                    @ARTHEMYS_D
                  </PunkBadge>
                  <p className="font-display text-xl text-foreground">
                    &ldquo;El toque peludo en cada frame.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Inspiration card */}
            <div className="mt-6 rounded-xl border border-[#9d4edd]/30 bg-[#9d4edd]/5 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Eye size={14} className="text-[#9d4edd]" />
                <span className="font-mono-punk text-[10px] uppercase tracking-[0.25em] text-[#9d4edd]">
                  Identidad Artística & Inspiración
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Como artista, busco inspiración en mis compañeros, los del pasado como <span className="text-[#00e5ff] font-medium">Van Gogh</span> por su textura emocional y del presente con <span className="text-[#00e5ff] font-medium">Artgerm</span> por sus trabajos pulcros y su manejo del color. Estos y otros artistas los fusiono con la cultura pop y la fantasía. Mi trabajo explora principalmente el dinamismo del color y la versatilidad de la luz y sombra. Planifico mis obras desde el boceto inicial analizando las siluetas, pensando en el rigging digital y el acomodo de capas para darles dinamismo y vida en postproducción.
              </p>

              {/* palette swatches */}
              <div className="mt-4 border-t border-white/5 pt-4">
                <div className="font-mono-punk text-[9px] uppercase tracking-wider text-muted-foreground mb-2">
                  // códigos de color de mi paleta favorita
                </div>
                <div className="flex gap-2">
                  {[
                    { c: '#ff00ff', n: '#ff00ff' },
                    { c: '#00ffff', n: '#00ffff' },
                    { c: '#9d4edd', n: '#9d4edd' },
                    { c: '#00AEC7', n: '#00AEC7' },
                    { c: '#07070f', n: '#07070f' }
                  ].map((s) => (
                    <div key={s.c} className="flex-1">
                      <div
                        className="h-10 w-full rounded border border-white/15 transition-transform hover:scale-110"
                        style={{ backgroundColor: s.c }}
                        title={s.n}
                      />
                      <div className="mt-1 font-mono-punk text-[8px] uppercase tracking-wider text-muted-foreground text-center">
                        {s.n}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: bio + experience + skills */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              Una ilustradora que le da{' '}
              <span className="neon-pink">vida y carácter</span> a cada trazo.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Soy <span className="text-foreground font-medium">Diana Hernández</span>, artista digital conocida en internet como <span className="text-[#ff1b6b] font-medium">ARTHEMYS_D</span>. Licenciada en Diseño y Comunicación Visual, me he especializado en ilustración y cuento con experiencia en la animación tradicional japonesa, así como para animación por medio de after effects y edición de video. Mi flujo de trabajo se centra en el dinamismo y la expresividad del movimiento. En cada trabajo planifico, ordeno y me encargo de darle vida a lo que está tras la pantalla. Esto me permite utilizar programas como After Effects para darles movimiento, así como un buen trabajo en equipo al estar acostumbrada a trabajar entre departamentos. Mi lema es sencillo <span className="text-foreground italic">&ldquo;cambia lo típico por algo colorido&rdquo;</span>.
              </p>
            </div>

            {/* bio facts grid */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {BIO_FACTS.map((f) => (
                <div
                  key={f.k}
                  className="rounded-lg border border-white/10 bg-card/50 p-3"
                >
                  <div className="font-mono-punk text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                    {f.k}
                  </div>
                  <div className="mt-1 text-sm text-foreground">{f.v}</div>
                </div>
              ))}
            </div>

            {/* Experience Box (Bullets) */}
            <div className="mt-8 rounded-xl border border-white/10 bg-card/30 p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase size={16} className="text-[#00e5ff]" />
                <h3 className="font-mono-punk text-xs uppercase tracking-[0.2em] text-foreground">
                  Experiencia Profesional
                </h3>
              </div>
              <ul className="space-y-4">
                {WORK_EXPERIENCE.map((exp, idx) => (
                  <li key={idx} className="flex gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00e5ff]" />
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                        <span className="font-medium text-foreground">{exp.role}</span>
                        <span className="text-xs text-muted-foreground">— {exp.company}</span>
                        <span className="font-mono-punk text-[9px] text-[#ff1b6b] ml-auto">{exp.period}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* skills */}
            <div className="mt-8">
              <div className="font-mono-punk text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                {'// stack creativo'}
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((s, i) => (
                  <PunkBadge
                    key={s}
                    variant={
                      ['pink', 'cyan', 'purple', 'yellow'][
                        i % 4
                      ] as 'pink' | 'cyan' | 'purple' | 'yellow'
                    }
                  >
                    {s}
                  </PunkBadge>
                ))}
              </div>
            </div>

            {/* live counts (direct stats from data.ts) */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { n: stats.stats.worksCount ?? '18', l: 'Obras en portafolio' },
                {
                  n: String(
                    (stats.categoryCounts.animation ?? 0) +
                      (stats.categoryCounts.background ?? 0)
                  ),
                  l: 'Piezas de animación',
                },
                {
                  n: String(
                    (stats.categoryCounts.illustration ?? 2) +
                      (stats.categoryCounts.pet ?? 0)
                  ),
                  l: 'Ilustraciones + mascotas',
                },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-lg border border-[#ff1b6b]/20 bg-[#ff1b6b]/5 p-4 text-center hover:border-[#ff1b6b]/50 transition-colors"
                >
                  <div className="font-display text-3xl text-[#ff1b6b]">
                    {s.n}
                  </div>
                  <div className="mt-1 font-mono-punk text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
