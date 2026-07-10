'use client'

import { useEffect, useState } from 'react'
import { PunkNav } from '@/components/site/nav'
import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { Process } from '@/components/site/process'
import { Animations } from '@/components/site/animations'
import { Backgrounds } from '@/components/site/backgrounds'
import { Icons } from '@/components/site/icons'
import { Illustration } from '@/components/site/illustration'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'

export default function Home() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop
      const total = h.scrollHeight - h.clientHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col bg-[#07070f]">
      {/* scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#ff1b6b] via-[#9d4edd] to-[#00e5ff] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <PunkNav />

      <main className="flex-1">
        <Hero />
      </main>

      <div className="relative overflow-hidden bg-[#07070f]">
        <About />
        <Process />
        <Animations />
        <Backgrounds />
        <Icons />
        <Illustration />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
