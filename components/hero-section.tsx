'use client'

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-background.webp')`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 py-20">
        <h1 className="text-5xl md:text-6xl font-light italic mb-4 text-balance">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          {t('hero.subtitle')}
        </p>
        <Link
          href="#solutions"
          className="inline-block border-2 border-white text-white px-8 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-white hover:text-[#1e3a5f] transition-all duration-300"
        >
          {t('hero.cta')}
        </Link>
      </div>
    </section>
  )
}
