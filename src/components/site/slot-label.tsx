'use client'

import { SlotText } from 'slot-text/react'
import { cn } from '@/lib/utils'

interface SlotLabelProps {
  text: string
  className?: string
}

/** A small rolling-text label powered by slot-text. */
export function SlotLabel({ text, className }: SlotLabelProps) {
  return (
    <span className={cn('slot-text-wrap', className)}>
      <SlotText
        text={text}
        options={{
          direction: 'down',
          stagger: 30,
          duration: 260,
          skipUnchanged: true,
          interrupt: true,
        }}
      />
    </span>
  )
}
