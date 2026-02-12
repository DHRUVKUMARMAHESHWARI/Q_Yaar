import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PortfolioShowcase } from "@/components/portfolio-showcase"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ApproachSection } from "@/components/approach-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PortfolioShowcase />
      <StatsSection />
      <ServicesSection />
      <ApproachSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
