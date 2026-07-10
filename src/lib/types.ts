export type ArtworkCategory =
  | 'process'
  | 'animation'
  | 'background'
  | 'icon'
  | 'illustration'
  | 'pet'

export interface Artwork {
  id: string
  title: string
  category: ArtworkCategory
  description: string
  imageUrl: string
  year: string | null
  client: string | null
  role: string | null
  tags: string
  featured: boolean
  order: number
}

export interface SiteStats {
  stats: Record<string, string>
  categoryCounts: Record<string, number>
}

export const CATEGORY_META: Record<
  ArtworkCategory,
  { label: string; accent: 'pink' | 'cyan' | 'purple' | 'yellow' }
> = {
  process: { label: 'Proceso Creativo', accent: 'cyan' },
  animation: { label: 'Animaciones', accent: 'pink' },
  background: { label: 'Fondos de Animación', accent: 'purple' },
  icon: { label: 'Iconos / Stickers', accent: 'yellow' },
  illustration: { label: 'Ilustración Digital', accent: 'pink' },
  pet: { label: 'Retratos de Mascotas', accent: 'cyan' },
}
