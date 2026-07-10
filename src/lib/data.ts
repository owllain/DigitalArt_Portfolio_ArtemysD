import type { Artwork } from './types'

export interface MediaItem {
  url: string
  type: 'image' | 'video' | 'gif'
  label?: string
}

export interface ArtworkSet {
  id: string
  title: string
  category: 'process' | 'animation' | 'background' | 'icon' | 'illustration' | 'pet'
  description: string
  year?: string
  client?: string
  role?: string
  tags?: string[]
  featured?: boolean
  items: MediaItem[]
}

// ─── SETS DE ILUSTRACIÓN Y PROCESO (CARRUSELES 1-4) ──────────────────────────
export const ILLUSTRATION_PROCESS_SETS: ArtworkSet[] = [
  {
    id: 'illus-set-1',
    title: 'Cyber Cat & Churn Nebula',
    category: 'process',
    description: 'Ilustración con estética punk-cósmica. El proceso muestra la evolución desde las primeras masas de composición y color plano hasta el render final con efectos de aberración cromática, brillo neón y una versión animada sutil para post-producción.',
    year: '2025',
    role: 'Ilustración y animación sutil',
    tags: ['boceto', 'lineart', 'color', 'neon', 'cyberpunk'],
    featured: true,
    items: [
      { url: '/gallery/Carrusel1_1.png', type: 'image', label: 'Boceto / Composición' },
      { url: '/gallery/Carrusel1_2.png', type: 'image', label: 'Delineado y Bloques' },
      { url: '/gallery/Carrusel1_3.png', type: 'image', label: 'Color Base e Iluminación' },
      { url: '/gallery/Carrusel1_Final.mp4', type: 'video', label: 'Render e Intro Animada' }
    ]
  },
  {
    id: 'illus-set-2',
    title: 'Cosmic Beast & Particle Stars',
    category: 'process',
    description: 'Estudio de personaje fantástico con paleta neón brillante sobre fondo estelar oscuro. Se planificaron las capas desde el inicio en Photoshop para permitir el rigging posterior y la animación en After Effects con la herramienta Puppet.',
    year: '2024',
    role: 'Ilustración digital',
    tags: ['boceto', 'lineart', 'post-procesado', 'fantasía', 'particles'],
    featured: true,
    items: [
      { url: '/gallery/Carrusel2_1.png', type: 'image', label: 'Boceto Inicial' },
      { url: '/gallery/Carrusel2_2.png.png', type: 'image', label: 'Lineart Limpio' },
      { url: '/gallery/Carrusel2_3.png.png', type: 'image', label: 'Render con Capas' },
      { url: '/gallery/Carrusel2_Final.mp4', type: 'video', label: 'Animación final con Puppet' }
    ]
  },
  {
    id: 'illus-set-3',
    title: 'Starlight Guardian / Guardián Estelar',
    category: 'process',
    description: 'Fusión de estética anime de los 90 con toques cyberpunk modernos. La paleta neón azul y rosa brillante destaca las líneas estilizadas del lineart. La animación destaca los cabellos y las partículas flotantes en el espacio.',
    year: '2025',
    role: 'Ilustración y Rigging',
    tags: ['retro-anime', 'cyberpunk', 'after-effects', 'puppet', 'glow'],
    featured: false,
    items: [
      { url: '/gallery/Carrusel3_1.png.png', type: 'image', label: 'Boceto Estructural' },
      { url: '/gallery/Carrusel3_2.png.png', type: 'image', label: 'Lineart y Tinta' },
      { url: '/gallery/Carrusel3_3.png.png', type: 'image', label: 'Volumen y Paleta' },
      { url: '/gallery/Carrusel3_Final.png.mp4', type: 'video', label: 'Composición y Animación' }
    ]
  },
  {
    id: 'illus-set-4',
    title: 'Neon Rogue & Street Graffiti',
    category: 'process',
    description: 'Ilustración inspirada en el graffiti urbano y la cultura del street art. Colores ácidos y trazos muy definidos que capturan la rebeldía del diseño de personajes punk.',
    year: '2024',
    role: 'Ilustración',
    tags: ['graffiti', 'street-art', 'character-design', 'rough', 'ink'],
    featured: false,
    items: [
      { url: '/gallery/Carrusel4_1.png', type: 'image', label: 'Boceto / Pose' },
      { url: '/gallery/Carrusel4_2.jpg', type: 'image', label: 'Lineart y Base' },
      { url: '/gallery/Carrusel4_3.jpg', type: 'image', label: 'Render Final' }
    ]
  }
]

// ─── SETS DE ANIMACIÓN 2D (SETS 1-6) ──────────────────────────────────────────
export const ANIMATION_SETS: ArtworkSet[] = [
  {
    id: 'anim-set-1',
    title: 'Secuencia de Movimiento y Gesto',
    category: 'animation',
    description: 'Estudio dinámico de animación frame a frame para capturar el peso y el arco del movimiento. Comparación entre la pose clave estática y el loop final animado.',
    year: '2024',
    role: 'Key Animation',
    tags: ['frame-by-frame', 'key-poses', 'anatomy', 'motion-arc'],
    featured: true,
    items: [
      { url: '/gallery/Animacion1_1.png', type: 'image', label: 'Keyframe Clave' },
      { url: '/gallery/Animacion1_2.png.mp4', type: 'video', label: 'Loop de Animación' }
    ]
  },
  {
    id: 'anim-set-2',
    title: 'Acción Rápida e In-Betweens',
    category: 'animation',
    description: 'Trabajo centrado en la fluidez de movimiento mediante Douga (In-Betweens). Definición de timing preciso para impactos rápidos y efectos visuales de estela.',
    year: '2025',
    role: 'In-Between / Douga',
    tags: ['douga', 'timing', 'action', 'fluidity'],
    featured: true,
    items: [
      { url: '/gallery/Animacion2_1.png', type: 'image', label: 'Boceto de Estructura' },
      { url: '/gallery/Animación2_2.mp4', type: 'video', label: 'Loop de Movimiento' }
    ]
  },
  {
    id: 'anim-set-3',
    title: 'Timing y Transición de Escena',
    category: 'animation',
    description: 'Estudio de aceleración y desaceleración en transiciones de personajes. Animación frame por frame limpia con atención a las deformaciones físicas del movimiento (squash & stretch).',
    year: '2024',
    role: 'Animadora Freelance',
    tags: ['squash-stretch', 'timing', 'transition', 'clean-up'],
    featured: false,
    items: [
      { url: '/gallery/Animacion3_1.png', type: 'image', label: 'Fotograma de Transición' },
      { url: '/gallery/Animacion3_2.mp4', type: 'video', label: 'Animación Terminada' }
    ]
  },
  {
    id: 'anim-set-4',
    title: 'Efectos Especiales y Tinta',
    category: 'animation',
    description: 'Estudio sobre la aplicación de sombras de color definidas (Shiage) y el trazo de líneas estilizadas en la animación digital.',
    year: '2025',
    role: 'Shiage (Color)',
    tags: ['shiage', 'flat-color', 'ink-lineart', 'shadows'],
    featured: false,
    items: [
      { url: '/gallery/Animacion4_1.png', type: 'image', label: 'Lineart Limpio' },
      { url: '/gallery/Animacion4_2.mp4', type: 'video', label: 'Animación con Color final' }
    ]
  },
  {
    id: 'anim-set-5',
    title: 'Escena Narrativa / Gesto de Personaje',
    category: 'animation',
    description: 'Gesticulación sutil y micro-animaciones en cabello y ropa para transmitir emociones. Animación tradicional frame a frame combinada con After Effects para el acabado de color.',
    year: '2025',
    role: 'Douga & Shiage',
    tags: ['acting', 'hair-motion', 'wind-effect', 'character'],
    featured: true,
    items: [
      { url: '/gallery/Animacion5_1.png', type: 'image', label: 'Keyframe Detallado' },
      { url: '/gallery/Animacion5_2.mp4', type: 'video', label: 'Secuencia Animada' }
    ]
  },
  {
    id: 'anim-set-6',
    title: 'Ciclo de Caminata / Walk Cycle completo',
    category: 'animation',
    description: 'Estudio exhaustivo del ciclo de caminata de un personaje desde el boceto, el color base plano y la animación fluida en video con post-procesamiento.',
    year: '2024',
    role: 'Animación Completa',
    tags: ['walk-cycle', 'proceso', 'sketch-to-color', 'cycles'],
    featured: false,
    items: [
      { url: '/gallery/Animacion6_1.png', type: 'image', label: 'Boceto Clave' },
      { url: '/gallery/Animacion6_2.jpg', type: 'image', label: 'Color Base' },
      { url: '/gallery/Animacion6_3.mp4', type: 'video', label: 'Animación Final' }
    ]
  }
]

// ─── SETS DE FONDOS DE ANIMACIÓN / LANDSCAPES ────────────────────────────────
export const BACKGROUND_SETS: ArtworkSet[] = [
  {
    id: 'bg-set-1',
    title: 'Callejón Cyber-Street',
    category: 'background',
    description: 'Ilustración de fondo urbana con temática nocturna cyberpunk. Comisión entregada seccionada en múltiples capas independientes en Photoshop, facilitando la post-producción y la integración de personajes detrás de los elementos de primer plano.',
    year: '2024',
    role: 'Fondo de Animación',
    tags: ['cyber-street', 'neon-lighting', 'parallax', 'layers'],
    featured: true,
    items: [
      { url: '/gallery/Landscape1_1.jpg', type: 'image', label: 'Bloqueo de Capas' },
      { url: '/gallery/Landscape1_2.jpg', type: 'image', label: 'Detalles y Letreros Neón' },
      { url: '/gallery/Landscape1_Final.gif', type: 'gif', label: 'Fondo Animado Final' }
    ]
  },
  {
    id: 'bg-set-2',
    title: 'Estación de Tren Lluviosa',
    category: 'background',
    description: 'Fondo de exterior con ambiente nostálgico. Recreación inspirada en la atmósfera húmeda y reflectiva de "El Jardín de las Palabras" (Makoto Shinkai), adaptando las luces de neón a la paleta del artista.',
    year: '2025',
    role: 'Estudio de Fondo',
    tags: ['rain', 'makoto-shinkai', 'nostalgic', 'environments'],
    featured: false,
    items: [
      { url: '/gallery/Landscape2_1.jpg', type: 'image', label: 'Fase de Valores y Luces' },
      { url: '/gallery/Landscape2_2.jpg', type: 'image', label: 'Fondo Renderizado Final' }
    ]
  },
  {
    id: 'bg-set-3',
    title: 'Frierens Horizon',
    category: 'background',
    description: 'Recreación de un paisaje natural de fantasía de la serie "Frieren Beyond the Journey\'s End". Acomodado con el característico "toque peludo" de Diana en los pastos y nubes cósmicas flotantes.',
    year: '2025',
    role: 'Estudio y Estilizado',
    tags: ['frieren', 'fantasy-landscape', 'clouds', 'toque-peludo'],
    featured: false,
    items: [
      { url: '/gallery/Landscape3_1.png', type: 'image', label: 'Fondo Final' }
    ]
  }
]

// ─── PORTAFOLIO DE MASCOTAS ──────────────────────────────────────────────────
export const PET_SETS: ArtworkSet[] = [
  {
    id: 'pet-set-1',
    title: 'Retratos de Mascotas Estilizadas',
    category: 'pet',
    description: 'Reinvención de fotografías de mascotas reales en ilustraciones cargadas de personalidad. Se conserva la pose original del animal pero se le da un estilo cósmico, neón y aventurero.',
    year: '2024',
    role: 'Retratos de Mascotas',
    tags: ['retratos', 'mascotas', 'comisión', 'gatos', 'perros'],
    featured: true,
    items: [
      { url: '/gallery/Otros_1.jpg', type: 'image', label: 'Gatito Cósmico Punk' },
      { url: '/gallery/Otros_2.jpg', type: 'image', label: 'Retrato de Cachorro Neón' }
    ]
  },
  {
    id: 'pet-set-2',
    title: 'Gatitos Puppet de After Effects',
    category: 'pet',
    description: 'Animaciones cortas creadas con la herramienta Puppet de After Effects a partir de retratos de mascotas ilustrados previamente por capas. Movimientos fluidos e interactivos que dan vida al retrato digital.',
    year: '2025',
    role: 'Rigging e Ilustración',
    tags: ['after-effects', 'puppet-rig', 'animation', 'character'],
    featured: true,
    items: [
      { url: '/gallery/mJ2YUyi-1.mp4', type: 'video', label: 'Gato espacial Puppet' },
      { url: '/gallery/mPixYA0-1.mp4', type: 'video', label: 'Gato atómico en movimiento' }
    ]
  }
]

// ─── STICKERS Y OTROS ASSETS ─────────────────────────────────────────────────
export const STICKER_SETS: ArtworkSet[] = [
  {
    id: 'sticker-set-1',
    title: 'Street-Art Stickers (Colección Vectorial)',
    category: 'icon',
    description: 'Sets de pegatinas diseñadas para impresión die-cut. Elementos de la cultura callejera, armas fantásticas, tiburones y símbolos punk. Trazos vectoriales gruesos neón sobre fondo negro.',
    year: '2024',
    role: 'Diseño de Vector / Stickers',
    tags: ['stickers', 'die-cut', 'vectorial', 'neon', 'icons'],
    featured: true,
    items: [
      { url: '/gallery/Stick_1.png', type: 'image', label: 'Shark Neon Sticker' },
      { url: '/gallery/Stick_2.png', type: 'image', label: 'Colección Vectorial 01' },
      { url: '/gallery/Stick_3.jpg', type: 'image', label: 'Stickers Impresos' },
      { url: '/gallery/Stick_4.png', type: 'image', label: 'Skull Punk' },
      { url: '/gallery/Stick_5.png', type: 'image', label: 'Colección Completa 02' }
    ]
  },
  {
    id: 'sticker-set-2',
    title: 'Neon Badges / Iconos de Redes Sociales',
    category: 'icon',
    description: 'Iconos y pins diseñados con estética retro-consola y graffiti digital, listos para plataformas de streaming (Twitch/YouTube) o impresión.',
    year: '2025',
    role: 'Iconografía',
    tags: ['twitch-badges', 'neon', 'merchandising', 'pins'],
    featured: false,
    items: [
      { url: '/gallery/Sticker_1.jpg', type: 'image', label: 'Pins de Neón' },
      { url: '/gallery/Sticker_2.png', type: 'image', label: 'Shark Pin' },
      { url: '/gallery/Sticker_3.png', type: 'image', label: 'Gatito Cósmico Badge' }
    ]
  }
]

// ─── OTROS ASSETS (ESTÁTICOS / SUELTOS) ──────────────────────────────────────
export const ADDITIONAL_WORKS: Artwork[] = [
  {
    id: 'bocetos-1',
    title: 'Bocetos y Gestos sueltos',
    category: 'process',
    description: 'Prácticas diarias de pose y soltura en dibujo digital.',
    imageUrl: '/gallery/Bocetos_1.png',
    year: '2024',
    client: null,
    role: 'Sketching',
    tags: 'bocetos, sketch, anatomía',
    featured: false,
    order: 10
  },
  {
    id: 'estatico-1',
    title: 'Retrato cósmico estático',
    category: 'illustration',
    description: 'Pieza de la serie de gatos cósmicos lista para fondos de pantalla.',
    imageUrl: '/gallery/estatico-1.png',
    year: '2025',
    client: null,
    role: 'Ilustración',
    tags: 'cats, cosmic, static',
    featured: false,
    order: 11
  }
]

// Todo el array unificado para compatibilidad anterior si fuera necesario
export const WORKS: Artwork[] = [
  ...ADDITIONAL_WORKS,
  // Creamos elementos para compatibilidad de búsqueda
  ...ILLUSTRATION_PROCESS_SETS.map((s, idx) => ({
    id: s.id,
    title: s.title,
    category: s.category,
    description: s.description,
    imageUrl: s.items[s.items.length - 1].url, // usará el último item como imagen de cover
    year: s.year ?? null,
    client: s.client ?? null,
    role: s.role ?? null,
    tags: s.tags?.join(',') ?? '',
    featured: s.featured ?? false,
    order: idx
  })),
  ...ANIMATION_SETS.map((s, idx) => ({
    id: s.id,
    title: s.title,
    category: s.category,
    description: s.description,
    imageUrl: s.items[0].url,
    year: s.year ?? null,
    client: s.client ?? null,
    role: s.role ?? null,
    tags: s.tags?.join(',') ?? '',
    featured: s.featured ?? false,
    order: idx
  })),
  ...BACKGROUND_SETS.map((s, idx) => ({
    id: s.id,
    title: s.title,
    category: s.category,
    description: s.description,
    imageUrl: s.items[s.items.length - 1].url,
    year: s.year ?? null,
    client: s.client ?? null,
    role: s.role ?? null,
    tags: s.tags?.join(',') ?? '',
    featured: s.featured ?? false,
    order: idx
  })),
  ...PET_SETS.map((s, idx) => ({
    id: s.id,
    title: s.title,
    category: s.category,
    description: s.description,
    imageUrl: s.items[0].url,
    year: s.year ?? null,
    client: s.client ?? null,
    role: s.role ?? null,
    tags: s.tags?.join(',') ?? '',
    featured: s.featured ?? false,
    order: idx
  })),
  ...STICKER_SETS.map((s, idx) => ({
    id: s.id,
    title: s.title,
    category: s.category,
    description: s.description,
    imageUrl: s.items[0].url,
    year: s.year ?? null,
    client: s.client ?? null,
    role: s.role ?? null,
    tags: s.tags?.join(',') ?? '',
    featured: s.featured ?? false,
    order: idx
  }))
]

export function computeStats() {
  const categoryCounts: Record<string, number> = {
    process: ILLUSTRATION_PROCESS_SETS.length,
    animation: ANIMATION_SETS.length,
    background: BACKGROUND_SETS.length,
    icon: STICKER_SETS.length,
    illustration: 2, // sueltas
    pet: PET_SETS.length
  }
  
  return {
    stats: {
      worksCount: String(
        ILLUSTRATION_PROCESS_SETS.length +
        ANIMATION_SETS.length +
        BACKGROUND_SETS.length +
        STICKER_SETS.length +
        PET_SETS.length +
        ADDITIONAL_WORKS.length
      )
    },
    categoryCounts
  }
}
