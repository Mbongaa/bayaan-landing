"use client"

import { motion } from "framer-motion"
import { ArrowRight, Globe, Mic, Users, Sparkles, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import PublicDisplayPreview from "@/components/preview/PublicDisplayPreview"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream-50 to-cream-100 pt-20">
      {/* Islamic geometric pattern background - lighter on mobile */}
      <div className="absolute inset-0 islamic-pattern opacity-20 md:opacity-30" />
      
      {/* Animated background elements - smaller on mobile */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 -left-20 w-40 h-40 md:top-20 md:left-10 md:w-72 md:h-72 bg-islamic-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 -right-20 w-40 h-40 md:bottom-20 md:right-10 md:w-96 md:h-96 bg-gold-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-8 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge - smaller on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 md:gap-2 md:px-4 md:py-2 bg-islamic-primary/10 text-islamic-primary rounded-full mb-6 md:mb-8"
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm font-medium">Empowering Dawah Through Technology</span>
          </motion.div>

          {/* Main headline - optimized for mobile */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-islamic-dark leading-tight">
            Break Language Barriers,
            <span className="block mt-1 md:mt-2 text-gradient from-islamic-primary to-emerald-600">
              Unite Your Congregation
            </span>
          </h1>

          {/* Subheadline - better mobile readability */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto px-2 leading-relaxed">
            Transform your mosque into a beacon of inclusive Dawah with real-time sermon translation. 
            <span className="block mt-1 md:inline md:mt-0">Reach hearts in every language.</span>
          </p>

          {/* Key benefits - mobile optimized */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10 text-xs md:text-sm">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Globe className="w-3.5 h-3.5 md:w-4 md:h-4 text-islamic-primary flex-shrink-0" />
              <span>Multi-language</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Mic className="w-3.5 h-3.5 md:w-4 md:h-4 text-islamic-primary flex-shrink-0" />
              <span>Real-time</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-islamic-primary flex-shrink-0" />
              <span>Inclusive</span>
            </div>
          </div>

          {/* CTA buttons - mobile stacked */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 sm:px-0"
          >
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-islamic-primary hover:bg-islamic-primary/90 text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
              onClick={() => {
                const element = document.getElementById('pricing')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-islamic-primary text-islamic-primary hover:bg-islamic-primary/5 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-full"
              onClick={() => {
                const element = document.getElementById('how-it-works')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              <Play className="mr-2 w-4 h-4 md:w-5 md:h-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Trust indicators - mobile optimized */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 md:mt-12 text-center"
          >
            <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">Trusted by mosques worldwide</p>
            <div className="flex justify-center items-center gap-6 md:gap-8 opacity-60">
              <div className="text-lg md:text-2xl font-arabic">مسجد</div>
              <div className="text-lg md:text-2xl font-arabic">جامع</div>
              <div className="text-lg md:text-2xl font-arabic">مصلى</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero visual - Public Display Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 md:mt-20 relative px-4 sm:px-0"
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="aspect-video">
              <PublicDisplayPreview className="w-full h-full" />
            </div>
            
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-4 text-center"
            >
              <p className="text-sm md:text-base text-gray-600">
                Live preview of the Bayaan public display • Real-time transcription & translation
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}