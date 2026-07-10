'use client'

import { SectionLabel } from './section-label'
import { PunkBadge } from './punk-badge'
import { useScrollReveal } from './use-scroll-reveal'
import { useStats } from './use-works'

const BIO_FACTS = [
  { k: 'Nombre', v: 'Diana Hernández' },
  { k: 'Alias', v: 'ArthemysD / @ARTHEMYS_D' },
  { k: 'Edad', v: '23 años' },
  { k: 'Formación', v: 'Lic. Diseño y Comunicación Visual' },
  { k: 'Freelance', v: '5 años' },
  { k: 'Koeda Animation', v: 'desde 2025 (Douga + Shiage)' },
  { k: 'CIC San Juan del Río', v: '4 años de diseño' },
  { k: 'Ventas', v: '2 años de experiencia' },
]

const SKILLS = [
  'Animación 2D frame x frame',
  'Color / Shiage',
  'In-Between / Douga',
  'After Effects + Puppet',
  'Ilustración de mascotas',
  'Fondos de animación',
  'Diseño de personajes',
  'Iconos & stickers',
  'Post-producción',
  'Keyframes',
]

export function About() {
  const { ref } = useScrollReveal()
  const stats = useStats()

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
          {/* Left: portrait + quote */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 halftone-pink opacity-30 rounded-2xl" />
              <div className="relative overflow-hidden rounded-xl border border-white/10">
                { }
                <img
                  src="/gallery/cat-cosmic-1.png"
                  alt="Obra representativa de ArthemysD"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070f] via-transparent to-transparent" />
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

            {/* Jinx inspiration card */}
            <div className="mt-6 rounded-xl border border-[#9d4edd]/30 bg-[#9d4edd]/5 p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-[#9d4edd] animate-blink" />
                <span className="font-mono-punk text-[10px] uppercase tracking-[0.25em] text-[#9d4edd]">
                  Inspiración · paleta punk
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                La artista se inspira profundamente en{' '}
                <span className="text-[#00e5ff]">Jinx</span> de League of Legends.
                Sin usar assets del personaje, imita su paleta con precisión
                quirúrgica — azul eléctrico, magenta neón, amarillo cáustico — y
                su estética punk: vectores cortantes, halftone y spray.
              </p>
              {/* palette swatches */}
              <div className="mt-4 flex gap-2">
                {[
                  { c: '#ff1b6b', n: 'Magenta' },
                  { c: '#00e5ff', n: 'Cian' },
                  { c: '#9d4edd', n: 'Púrpura' },
                  { c: '#ffd60a', n: 'Amarillo' },
                  { c: '#07070f', n: 'Tinta' },
                ].map((s) => (
                  <div key={s.c} className="flex-1">
                    <div
                      className="h-10 w-full rounded border border-white/15"
                      style={{ backgroundColor: s.c }}
                    />
                    <div className="mt-1 font-mono-punk text-[9px] uppercase tracking-wider text-muted-foreground text-center">
                      {s.n}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: bio */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              Una ilustradora que{' '}
              <span className="neon-pink">darle vida</span> a todo lo que toca.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Soy <span className="text-foreground">Diana Hernández</span>, aka{' '}
                <span className="text-[#ff1b6b]">ARTHEMYS_D</span>. Licenciada en
                Diseño y Comunicación Visual, llevo 5 años trabajando como
                freelance y desde 2025 formo parte del equipo de{' '}
                <span className="text-foreground">Koeda Animation</span> en las
                áreas de <span className="text-[#00e5ff]">Douga (In-Between)</span>{' '}
                y <span className="text-[#00e5ff]">Shiage (Color)</span>.
              </p>
              <p>
                Mi manejo de After Effects — principalmente con la herramienta{' '}
                <span className="text-foreground">Puppet</span> — me permite dar
                vida a mis ilustraciones. Desde el comienzo planifico cada pieza
                para el correcto acomodo de capas y hacer la magia en
                post-producción.
              </p>
              <p>
                Una de mis partes favoritas son los{' '}
                <span className="text-foreground">retratos de mascotas</span>:
                tomo una foto existente y la reinvento para que exprese la
                personalidad del animal. También diseño para el Colegio de
                Ingenieros Civiles de San Juan del Río desde hace 4 años.
              </p>
            </div>

            {/* facts grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BIO_FACTS.map((f) => (
                <div
                  key={f.k}
                  className="rounded-lg border border-white/10 bg-card/50 p-3"
                >
                  <div className="font-mono-punk text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {f.k}
                  </div>
                  <div className="mt-1 text-sm text-foreground">{f.v}</div>
                </div>
              ))}
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

            {/* live counts */}
            {stats && (
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { n: stats.stats.worksCount ?? '0', l: 'Obras en portafolio' },
                  {
                    n: String(
                      (stats.categoryCounts.animation ?? 0) +
                        (stats.categoryCounts.background ?? 0)
                    ),
                    l: 'Piezas de animación',
                  },
                  {
                    n: String(
                      (stats.categoryCounts.illustration ?? 0) +
                        (stats.categoryCounts.pet ?? 0)
                    ),
                    l: 'Ilustraciones + mascotas',
                  },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-lg border border-[#ff1b6b]/20 bg-[#ff1b6b]/5 p-4 text-center"
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
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
