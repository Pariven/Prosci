'use client'

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { SolutionsSection } from "@/components/solutions-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { MethodologySection } from "@/components/methodology-section"
import { InsightsSection } from "@/components/insights-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <SolutionsSection />
      <TestimonialsSection />
      <MethodologySection />
      <InsightsSection />
      <Footer />
    </main>
  )
}
