import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { SolutionsSection } from "@/components/solutions-section"
import { PartnersSection } from "@/components/partners-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { MethodologySection } from "@/components/methodology-section"
import { ExpertsSection } from "@/components/experts-section"
import { InsightsSection } from "@/components/insights-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <SolutionsSection />
      <PartnersSection />
      <TestimonialsSection />
      <MethodologySection />
      <ExpertsSection />
      <InsightsSection />
      <Footer />
    </main>
  )
}
