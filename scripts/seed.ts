// Seed script for ArthemysD portfolio
// Run with: bun run scripts/seed.ts
import { db } from '../src/lib/db'

async function main() {
  console.log('Seeding ArthemysD portfolio...')

  await db.artwork.deleteMany()

  const artworks = [
    // ===== PROCESO CREATIVO (process) =====
    {
      title: 'Boceto inicial',
      category: 'process',
      description: 'Primer acercamiento al personaje. Líneas de construcción sueltas, gesto y composición sobre papel. Aquí se define la personalidad antes del trazo final.',
      imageUrl: '/gallery/process-sketch-1.png',
      tags: 'boceto,lápiz,gesto,construcción',
      order: 1,
    },
    {
      title: 'Lineart final',
      category: 'process',
      description: 'Limpieza de líneas a tinta. Cada trazo se afina para preparar el archivo para color, manteniendo el peso de línea del estilo anime.',
      imageUrl: '/gallery/process-lineart.png',
      tags: 'lineart,tinta,cel,anime',
      order: 2,
    },
    {
      title: 'Color base (Flat)',
      category: 'process',
      description: 'Bloqueo de colores planos con paleta magenta + cian. Esta etapa separa cada zona para sombreado cel y post-producción.',
      imageUrl: '/gallery/process-flat-color.png',
      tags: 'flat color,cel,paleta,magenta,cian',
      order: 3,
    },
    {
      title: 'Ilustración final',
      category: 'process',
      description: 'Renderizado completo con fondo cósmico, luces y firma. El toque peludo de ArthemysD: estrellas, nebula y brillos neón.',
      imageUrl: '/gallery/process-final.png',
      tags: 'final,render,cósmico,neón,ARTHEMYS_D',
      featured: true,
      order: 4,
    },

    // ===== ANIMACIONES (animation) =====
    {
      title: 'Fate / Strange Fake — Capítulo 02',
      category: 'animation',
      description: 'Trabajo en el apartado de Color (Shiage) para el capítulo 02 de Fate / Strange Fake. Uno de los últimos pasos antes de post-producción y emisión.',
      imageUrl: '/gallery/bg-city-night.png',
      year: '2025',
      client: 'Koeda Animation',
      role: 'Color (Shiage)',
      tags: 'anime,color,shiage,koeda',
      featured: true,
      order: 1,
    },
    {
      title: 'Kimi to Boku — Capítulo 03',
      category: 'animation',
      description: 'Apartado de Color para el capítulo 03 de Kimi to Boku. Corrección de tonos y acabado de celdas antes del comp final.',
      imageUrl: '/gallery/bg-garden.png',
      year: '2025',
      client: 'Koeda Animation',
      role: 'Color (Shiage)',
      tags: 'anime,color,shiage,koeda',
      order: 2,
    },
    {
      title: 'Reloj de Arena — Video musical (Aki Chan)',
      category: 'animation',
      description: 'Color para el video musical "Reloj de Arena" de Aki Chan. Manejo de paletas emotivas y atmósferas de transición temporal.',
      imageUrl: '/gallery/bg-rain-platform.png',
      year: '2025',
      client: 'Aki Chan',
      role: 'Color (Shiage)',
      tags: 'mv,color,música,shiage',
      order: 3,
    },
    {
      title: 'Alice at the End of Her Life — Trailer',
      category: 'animation',
      description: 'Color para el trailer del videojuego "Alice at the End of Her Life". Ambientes oníricos y paleta fría para reforzar la narrativa.',
      imageUrl: '/gallery/bg-flower-field.png',
      year: '2025',
      client: 'Videojuego',
      role: 'Color (Shiage)',
      tags: 'trailer,videojuego,color,shiage',
      order: 4,
    },
    {
      title: 'The Casebook of Arne',
      category: 'animation',
      description: 'Trabajo en el apartado de Douga (In-Between) para The Casebook of Arne. Interpolación de movimientos fluidos entre keyframes.',
      imageUrl: '/gallery/bg-forest.png',
      year: '2025',
      client: 'Koeda Animation',
      role: 'Douga (In-Between)',
      tags: 'anime,douga,in-between,koeda',
      order: 5,
    },
    {
      title: 'Juanburgueso — Mascota & Intro',
      category: 'animation',
      description: 'Mascota firma del director. Trabajé su rediseño, guías de uso del personaje y la animación de intro. Animación mixta: Frame x Frame + After Effects con uso continuo de keyframes y herramienta Puppet.',
      imageUrl: '/gallery/stickers-sheet-1.png',
      year: '2024',
      client: 'Cliente independiente',
      role: 'Diseño + Animación',
      tags: 'mascota,after effects,puppet,frame x frame,independiente',
      featured: true,
      order: 6,
    },

    // ===== FONDOS DE ANIMACIÓN (background) =====
    {
      title: 'Jardín de otoño',
      category: 'background',
      description: 'Fondo de animación con arces japoneses en luz de hora dorada. Comisionado y entregado seccionado para edición en post-producción.',
      imageUrl: '/gallery/bg-garden.png',
      year: '2024',
      client: 'Comisión',
      role: 'Fondo',
      tags: 'fondo,japón,otoño,comisión',
      featured: true,
      order: 1,
    },
    {
      title: 'Plataforma bajo la lluvia',
      category: 'background',
      description: 'Plataforma de tren al atardecer con lluvia. Comisionado y seccionado para post-producción.',
      imageUrl: '/gallery/bg-rain-platform.png',
      year: '2024',
      client: 'Comisión',
      role: 'Fondo',
      tags: 'fondo,lluvia,atardecer,comisión',
      order: 2,
    },
    {
      title: 'Campo de flores',
      category: 'background',
      description: 'Comisión entregada seccionada para edición. Campo de flores púrpuras bajo cielo estrellado.',
      imageUrl: '/gallery/bg-flower-field.png',
      year: '2024',
      client: 'Comisión',
      role: 'Fondo',
      tags: 'fondo,flores,fantasía,comisión',
      order: 3,
    },
    {
      title: 'Recreación — Jardín de las Palabras',
      category: 'background',
      description: 'Recreación de un fondo existente de "El Jardín de las Palabras" como ejercicio de estudio. Aprendiendo rapidez y cariño por el oficio de fondos.',
      imageUrl: '/gallery/bg-city-night.png',
      year: '2025',
      role: 'Fondo (estudio)',
      tags: 'fondo,recreación,estudio,jardín de las palabras',
      order: 4,
    },
    {
      title: 'Recreación — Frieren Beyond the Journey',
      category: 'background',
      description: 'Recreación de un fondo de "Frieren Beyond the Journey\'s End" con mi toque peludo personal. Bosque encantado con flores mágicas.',
      imageUrl: '/gallery/bg-forest.png',
      year: '2025',
      role: 'Fondo (estudio)',
      tags: 'fondo,recreación,frieren,toque peludo',
      featured: true,
      order: 5,
    },

    // ===== ICONOS / STICKERS (icon) =====
    {
      title: 'Colección de stickers punk',
      category: 'icon',
      description: 'Set de stickers e iconos: armas estilizadas, criaturas, tiburones y objetos con estética street-art. Neón sobre negro, listos para impresión die-cut.',
      imageUrl: '/gallery/stickers-sheet-1.png',
      year: '2024',
      tags: 'stickers,iconos,punk,neón,die-cut',
      featured: true,
      order: 1,
    },

    // ===== ILUSTRACIÓN DIGITAL (illustration + pet) =====
    {
      title: 'Gato cósmico I',
      category: 'illustration',
      description: 'Ilustración original de un gato negro con ojos verdes sobre fondo cósmico. Galaxias en magenta y cian, criatura acompañante.',
      imageUrl: '/gallery/cat-cosmic-1.png',
      year: '2024',
      tags: 'ilustración,gato,cósmico,neón,ARTHEMYS_D',
      featured: true,
      order: 1,
    },
    {
      title: 'Gato cósmico II',
      category: 'illustration',
      description: 'Segunda pieza de la serie cósmica. Espiral de galaxias y cruces blancas, expresión realista del rostro felino.',
      imageUrl: '/gallery/cat-cosmic-2.png',
      year: '2024',
      tags: 'ilustración,gato,cósmico,espiral,ARTHEMYS_D',
      order: 2,
    },
    {
      title: 'Personaje punk original',
      category: 'illustration',
      description: 'Diseño de personaje original inspirado en la estética punk de Jinx (League of Legends). Cabello azul y rosa, spray en mano, fondo de graffiti.',
      imageUrl: '/gallery/character-punk-girl.png',
      year: '2025',
      tags: 'personaje,punk,jinx,original,diseño',
      featured: true,
      order: 3,
    },
    {
      title: 'Retrato de mascota — Tabby naranja',
      category: 'pet',
      description: 'Una de mis partes favoritas: tomo una foto existente y la reinvento para expresar la personalidad del animal. Tabby naranja sobre nebula.',
      imageUrl: '/gallery/pet-orange-tabby.png',
      year: '2024',
      client: 'Comisión',
      role: 'Ilustración de mascota',
      tags: 'mascota,retrato,tabby,comisión,personalidad',
      order: 4,
    },
    {
      title: 'Retrato de mascota — Perro punk',
      category: 'pet',
      description: 'Retrato de mascota con banda de pinchos. After Effects + Puppet listo para darle vida en post-producción.',
      imageUrl: '/gallery/pet-black-dog.png',
      year: '2024',
      client: 'Comisión',
      role: 'Ilustración de mascota',
      tags: 'mascota,perro,punk,after effects,puppet',
      order: 5,
    },
  ]

  for (const a of artworks) {
    await db.artwork.create({
      data: {
        title: a.title,
        category: a.category,
        description: a.description,
        imageUrl: a.imageUrl,
        year: a.year ?? null,
        client: a.client ?? null,
        role: a.role ?? null,
        tags: a.tags ?? '',
        featured: a.featured ?? false,
        order: a.order ?? 0,
      },
    })
  }

  await db.siteStat.deleteMany()
  await db.siteStat.createMany({
    data: [
      { key: 'yearsFreelance', value: '5' },
      { key: 'age', value: '23' },
      { key: 'yearsSales', value: '2' },
      { key: 'koedaStartYear', value: '2025' },
      { key: 'cicYears', value: '4' },
      { key: 'worksCount', value: String(artworks.length) },
    ],
  })

  console.log(`Seeded ${artworks.length} artworks and 6 stats.`)
  const counts = await db.artwork.groupBy({ by: ['category'], _count: true })
  console.log('Counts by category:', counts)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
