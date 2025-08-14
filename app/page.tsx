import { Navigation } from "@/components/shared/Navigation"
import { HeroFullscreen } from "@/components/sections/HeroFullscreen"
import { HeroWrapper } from "@/components/wrappers/HeroWrapper"
import { AnecdoteWrapper } from "@/components/wrappers/AnecdoteWrapper"
import { FeaturesWrapper } from "@/components/wrappers/FeaturesWrapper"
import { UseCasesWrapper } from "@/components/wrappers/UseCasesWrapper"
import { TestimonialsWrapper } from "@/components/wrappers/TestimonialsWrapper"
import { PricingWrapper } from "@/components/wrappers/PricingWrapper"
import { CTAWrapper } from "@/components/wrappers/CTAWrapper"
import { FooterWrapper } from "@/components/wrappers/FooterWrapper"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroFullscreen />
      <HeroWrapper />
      <AnecdoteWrapper />
      <FeaturesWrapper />
      <UseCasesWrapper />
      <TestimonialsWrapper />
      <PricingWrapper />
      <CTAWrapper />
      <FooterWrapper />
    </main>
  )
}