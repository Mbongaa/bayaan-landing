"use client"

import { motion } from "framer-motion"
import { ArrowRight, Globe, Mic, Users, Sparkles, ChevronDown, UserPlus, Plus, PlayCircle, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PublicDisplayPreview from "@/components/preview/PublicDisplayPreview"
import PublicDisplayPreviewDemo from "@/components/preview/PublicDisplayPreviewDemo"
import { useTranslation } from "@/hooks/useTranslation"

export function Hero() {
  const { t } = useTranslation()
  
  const steps = [
    {
      number: "1",
      icon: UserPlus,
      title: t.hero.steps.step1.title,
      description: t.hero.steps.step1.description,
      color: "from-islamic-primary to-gold-400",
    },
    {
      number: "2",
      icon: Plus,
      title: t.hero.steps.step2.title,
      description: t.hero.steps.step2.description,
      color: "from-islamic-primary to-gold-400",
    },
    {
      number: "3",
      icon: PlayCircle,
      title: t.hero.steps.step3.title,
      description: t.hero.steps.step3.description,
      color: "from-islamic-primary to-gold-400",
    },
    {
      number: "4",
      icon: Monitor,
      title: t.hero.steps.step4.title,
      description: t.hero.steps.step4.description,
      color: "from-islamic-primary to-gold-400",
    },
  ]
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-islamic-light pt-20">
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
          className="text-center max-w-5xl mx-auto relative z-20"
        >
          {/* Badge - mobile optimized with better touch target */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-islamic-primary/10 to-gold-400/10 text-islamic-primary rounded-full mb-6 backdrop-blur-sm border border-islamic-primary/20"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">{t.hero.badge}</span>
          </motion.div>

          {/* Main headline - mobile first responsive design */}
          <h1 
            className="text-[2.5rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-7xl font-bold font-poppins mb-4 text-islamic-dark"
            style={{ letterSpacing: '-0.058em' }}
          >
            {t.hero.mainTitle}
            <span className="block mt-2 text-gradient from-islamic-primary to-emerald-600 leading-[1.15]">
              {t.hero.mainTitleGradient}
            </span>
          </h1>

          {/* Subheadline - improved mobile typography and spacing */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-3 max-w-2xl mx-auto px-2 leading-[1.4] font-light">
            {t.hero.subheading}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 max-w-xl mx-auto px-2 font-medium">
            {t.hero.subheadingHighlight}
          </p>

          {/* Key benefits - compact single row */}
          <div className="mb-10 px-2">
            <div className="flex justify-center gap-1.5">
              <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-2 rounded-xl shadow-md border border-white/50">
                <div className="w-6 h-6 rounded-lg bg-islamic-primary/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-3 h-3 text-islamic-primary" />
                </div>
                <span className="text-[11px] font-medium text-gray-700">{t.hero.benefits.multiLanguage}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-2 rounded-xl shadow-md border border-white/50">
                <div className="w-6 h-6 rounded-lg bg-islamic-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mic className="w-3 h-3 text-islamic-primary" />
                </div>
                <span className="text-[11px] font-medium text-gray-700">{t.hero.benefits.realTime}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-2 rounded-xl shadow-md border border-white/50">
                <div className="w-6 h-6 rounded-lg bg-islamic-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-3 h-3 text-islamic-primary" />
                </div>
                <span className="text-[11px] font-medium text-gray-700">{t.hero.benefits.inclusive}</span>
              </div>
            </div>
          </div>

          {/* CTA buttons - redesigned for better mobile touch targets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-3 px-4"
          >
            <Button 
              size="lg"
              className="w-full bg-gradient-to-r from-islamic-primary to-emerald-600 hover:from-islamic-primary/90 hover:to-emerald-600/90 text-white px-8 h-14 text-[17px] rounded-2xl shadow-xl hover:shadow-2xl transition-all font-semibold active:scale-[0.98]"
              onClick={() => {
                const element = document.getElementById('pricing')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              {t.hero.ctaPricing}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <button
              className="w-full flex items-center justify-center gap-2 px-8 h-14 text-[17px] text-islamic-primary bg-transparent hover:bg-islamic-primary/5 transition-all group font-medium active:scale-[0.98]"
              onClick={() => {
                const element = document.getElementById('how-bayaan-works')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              <span>{t.hero.ctaHowItWorks}</span>
              <motion.div
                className="flex items-center"
                animate={{
                  y: [0, 4, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown className="w-5 h-5 text-islamic-primary" />
              </motion.div>
            </button>
          </motion.div>
        </motion.div>

        {/* How It Works Section - REDESIGNED for mobile */}
        <motion.div
          id="how-bayaan-works"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 md:mt-24"
        >
          {/* Section header - mobile optimized */}
          <div className="text-center mb-8 px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold-100/50 backdrop-blur-sm text-gold-700 rounded-full mb-4 border border-gold-200/50"
            >
              <span className="text-sm font-semibold">{t.hero.howItWorks.badge}</span>
            </motion.div>
            <h2 
              className="text-2xl font-bold font-poppins mb-3 text-islamic-dark"
              style={{ letterSpacing: '-0.058em' }}
            >
              {t.hero.howItWorks.title}
            </h2>
            <p className="text-base text-gray-600 max-w-sm mx-auto">
              {t.hero.howItWorks.subtitle}
            </p>
          </div>

          {/* Mobile Horizontal Carousel for Steps */}
          <div className="relative">
            {/* Steps carousel container */}
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 px-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="flex-shrink-0 w-[85vw] max-w-[320px] snap-center"
                >
                  {/* Step Card */}
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 overflow-hidden">
                    {/* Step number header */}
                    <div className={`bg-gradient-to-r ${step.color} p-4`}>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">
                          {t.hero.howItWorks.stepLabel}
                        </span>
                        <span className="text-3xl font-bold text-white">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Icon and content */}
                    <div className="p-6">
                      {/* Icon circle */}
                      <div className="mb-4">
                        <motion.div
                          whileInView={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 mx-auto shadow-lg`}
                        >
                          <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                            <step.icon className="w-8 h-8 text-islamic-primary" />
                          </div>
                        </motion.div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-islamic-dark mb-3 text-center">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 text-center leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Progress indicator at bottom */}
                    <div className="px-6 pb-4">
                      <div className="flex gap-1 justify-center">
                        {steps.map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 rounded-full transition-all duration-300 ${
                              i === index 
                                ? 'w-8 bg-islamic-primary' 
                                : i < index 
                                  ? 'w-2 bg-islamic-primary/50'
                                  : 'w-2 bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Swipe hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500"
            >
              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-1"
              >
                <ChevronDown className="w-4 h-4 rotate-90" />
                <span>Swipe to explore</span>
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero visual - Public Display Preview - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hidden lg:block mt-12 md:mt-20 relative px-4 sm:px-0"
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="aspect-video">
              <PublicDisplayPreviewDemo className="w-full h-full" />
            </div>
            
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-4 text-center"
            >
              <p className="text-sm md:text-base text-gray-600">
                {t.hero.previewLabel}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}