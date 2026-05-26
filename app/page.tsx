import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ServicesSection } from "@/components/services-section"
import { CalculatorSection } from "@/components/calculator-section"
import { CardsSection } from "@/components/cards-section"
import { SecuritySection } from "@/components/security-section"
import { StatsSection } from "@/components/stats-section"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { MouseGlow } from "@/components/mouse-glow"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <MouseGlow />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <CalculatorSection />
      <CardsSection />
      <SecuritySection />
      <StatsSection />
      <DownloadSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
