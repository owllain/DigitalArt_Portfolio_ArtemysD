'use client'

import { cn } from '@/lib/utils'

interface SectionLabelProps {
  index: string
  title: string
  accent?: 'pink' | 'cyan' | 'purple' | 'yellow'
  className?: string
}

const accentMap = {
  pink: 'text-[#ff1b6b] border-[#ff1b6b]/40',
  cyan: 'text-[#00e5ff] border-[#00e5ff]/40',
  purple: 'text-[#9d4edd] border-[#9d4edd]/40',
  yellow: 'text-[#ffd60a] border-[#ffd60a]/40',
}

const dotMap = {
  pink: 'bg-[#ff1b6b]',
  cyan: 'bg-[#00e5ff]',
  purple: 'bg-[#9d4edd]',
  yellow: 'bg-[#ffd60a]',
}

export function SectionLabel({
  index,
  title,
  accent = 'pink',
  className,
}: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span
        className={cn(
          'font-mono-punk text-[11px] tracking-[0.25em] uppercase px-2 py-1 border rounded-sm',
          accentMap[accent]
        )}
      >
        {index}
      </span>
      <span className="flex items-center gap-2">
        <span className={cn('h-1.5 w-1.5 rounded-full animate-blink', dotMap[accent])} />
        <span className="font-mono-punk text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
          {title}
        </span>
      </span>
      <span className="hidden sm:block flex-1 h-px bg-gradient-to-r from-border to-transparent" />
    </div>
  )
}
