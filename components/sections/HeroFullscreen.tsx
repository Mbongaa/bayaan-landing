"use client"

import { motion } from "framer-motion"
import PublicDisplayPreview from "@/components/preview/PublicDisplayPreview"

export function HeroFullscreen() {
  return (
    <section className="relative min-h-screen w-full bg-gray-50">
      {/* Fullscreen Public Display Preview - No overlay, just the preview */}
      <PublicDisplayPreview className="w-full h-screen" isDark={false} />
    </section>
  )
}