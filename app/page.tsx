import { Navigation } from "@/components/shared/Navigation"
import { HeroFullscreen } from "@/components/sections/HeroFullscreen"
import { Hero } from "@/components/sections/Hero"
import { Features } from "@/components/sections/Features"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { UseCases } from "@/components/sections/UseCases"
import { Testimonials } from "@/components/sections/Testimonials"
import { Pricing } from "@/components/sections/Pricing"
import { CTA } from "@/components/sections/CTA"
import { Footer } from "@/components/shared/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroFullscreen />
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}