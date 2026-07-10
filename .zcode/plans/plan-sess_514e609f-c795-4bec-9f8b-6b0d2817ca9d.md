## Plan: Eliminar BlossomCarousel → Migrar a Embla Carousel (shadcn/ui)

BlossomCarousel tiene un bug fundamental de `display: inline-block` que causa colapso de altura y no tiene fix confiable. Ya tienes `embla-carousel-react` + el componente shadcn/ui `Carousel` instalado en el proyecto, solo que no se usa. Vamos a reemplazar todo Blossom por Embla.

### Archivos a modificar (5 componentes + 1 CSS + 1 layout):

#### 1. `src/components/site/process.tsx`
- Reemplazar `BlossomCarousel/BlossomPrev/BlossomNext` por `Carousel/CarouselContent/CarouselItem/CarouselPrevious/CarouselNext` del ui
- `<Carousel opts={{ loop: true }}>` en vez de `repeat`
- Mantener controles debajo del carrusel (barra inferior) con estilo custom (no el Button default de shadcn)
- Cada slide envuelto en `CarouselItem` con `className="pl-0"` para full-bleed

#### 2. `src/components/site/animations.tsx`
- Mismo patrón: reemplazar imports y estructura
- Controles overlaid con `opacity-0 group-hover:opacity-100` (mantener comportamiento actual)
- Aspect: `aspect-square sm:aspect-video`

#### 3. `src/components/site/backgrounds.tsx`
- Mismo patrón. Carousel condicional (solo si items > 1)
- Controles overlaid con purple accent
- Aspect: `aspect-[21/9]`

#### 4. `src/components/site/icons.tsx`
- Mismo patrón. Usa `object-contain` para stickers
- Controles overlaid con yellow accent
- Aspect: `aspect-square sm:aspect-video`

#### 5. `src/components/site/illustration.tsx`
- Sección PET: reemplazar Blossom por Embla
- Controles overlaid con cyan accent
- Aspect: `aspect-video`
- Sección ADDITIONAL_WORKS (estáticas) no usa carrusel → no se toca

#### 6. `src/app/globals.css`
- **Eliminar** todas las reglas `[blossom-carousel]`, `.blossom-slide`, y las clases `.process-set-carousel` etc.
- Blossom ya no existirá en el proyecto

#### 7. `src/app/layout.tsx`
- **Eliminar** `import "@blossom-carousel/react/style.css"`

#### 8. `package.json` (post-migration)
- **Eliminar** `"@blossom-carousel/react": "^1.4.0"` de dependencies

### Patrones de navegación custom:
Los controles actuales de Blossom usan botones custom sin el `Button` de shadcn. Para Embla usaremos `CarouselPrevious`/`CarouselNext` del shadcn pero **customizando su className** para mantener la estética punk actual (bordes, hover con colores neon, tamaños), O crearemos botones custom usando `useCarousel()` del hook interno si `CarouselPrevious/CarouselNext` son demasiado rígidos con el `Button` de shadcn.

### No se necesita instalar nada nuevo:
- `embla-carousel-react` ya está en package.json ✅
- `Carousel` component ya existe en `src/components/ui/carousel.tsx` ✅
- Loop es opción nativa de Embla (`opts={{ loop: true }}`) ✅

### Data (`data.ts`) → NO se toca
Las asignaciones de imágenes ya están correctas y no necesitan cambios.