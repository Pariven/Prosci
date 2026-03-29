'use client'

import { useLanguage } from "@/lib/language-context"

export function StatsSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Intro Text */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl text-[#1e3a5f] leading-relaxed">
              {t('stats.heading')}
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-[#5b4b82] leading-relaxed">
              {t('stats.description')}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <StatItem 
            number={t('stats.stat1Number')}
            label={t('stats.stat1Label')}
          />
          <StatItem 
            number={t('stats.stat2Number')}
            label={t('stats.stat2Label')}
          />
          <StatItem 
            number={t('stats.stat3Number')}
            label={t('stats.stat3Label')}
          />
        </div>
      </div>
    </section>
  )
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-5xl md:text-6xl font-bold text-[#5b4b82] mb-4">
        {number}
      </span>
      <span className="text-xs md:text-sm font-semibold text-[#1e3a5f] tracking-wider uppercase max-w-[200px]">
        {label}
      </span>
    </div>
  )
}
