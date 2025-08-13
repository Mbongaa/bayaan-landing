import { Navigation } from "@/components/shared/Navigation"
import { HeroFullscreen } from "@/components/sections/HeroFullscreen"
import { Hero } from "@/components/sections/Hero"
import { Anecdote } from "@/components/sections/Anecdote"
import { Features } from "@/components/sections/Features"
import { UseCases } from "@/components/sections/UseCases"
import { Testimonials } from "@/components/sections/Testimonials"
import { Pricing } from "@/components/sections/Pricing"
import { CTA } from "@/components/sections/CTA"
import { Footer } from "@/components/shared/Footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroFullscreen />
      <Hero />
      <Anecdote />
      <Features />
      <UseCases />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}