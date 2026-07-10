'use client'

import { cn } from '@/lib/utils'

interface PunkBadgeProps {
  children: React.ReactNode
  variant?: 'pink' | 'cyan' | 'purple' | 'yellow' | 'ghost'
  className?: string
}

const variantMap = {
  pink: 'bg-[#ff1b6b]/15 text-[#ff1b6b] border-[#ff1b6b]/40',
  cyan: 'bg-[#00e5ff]/15 text-[#00e5ff] border-[#00e5ff]/40',
  purple: 'bg-[#9d4edd]/15 text-[#9d4edd] border-[#9d4edd]/40',
  yellow: 'bg-[#ffd60a]/15 text-[#ffd60a] border-[#ffd60a]/40',
  ghost: 'bg-white/5 text-foreground/70 border-white/15',
}

export function PunkBadge({ children, variant = 'ghost', className }: PunkBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 font-mono-punk text-[10px] uppercase tracking-[0.18em] px-2 py-0.5 rounded-full border',
        variantMap[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
