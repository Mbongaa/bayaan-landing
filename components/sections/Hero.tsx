"use client"

import { motion } from "framer-motion"
import { ArrowRight, Globe, Mic, Users, Sparkles, ChevronDown, UserPlus, Smartphone, Radio, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PublicDisplayPreview from "@/components/preview/PublicDisplayPreview"
import PublicDisplayPreviewDemo from "@/components/preview/PublicDisplayPreviewDemo"

const steps = [
  {
    number: "1",
    icon: UserPlus,
    title: "Create Your Mosque Account",
    description: "Sign up in minutes and set up your mosque profile with room configurations",
    color: "from-islamic-primary to-emerald-600",
  },
  {
    number: "2",
    icon: Smartphone,
    title: "Share QR Code",
    description: "Generate unique QR codes for your congregation to instantly join translation rooms",
    color: "from-emerald-600 to-gold-400",
  },
  {
    number: "3",
    icon: Radio,
    title: "Start Broadcasting",
    description: "Go live with one click - your sermon is instantly translated in real-time",
    color: "from-gold-400 to-islamic-primary",
  },
  {
    number: "4",
    icon: Heart,
    title: "Unite Hearts",
    description: "Watch your diverse congregation understand and connect with every word",
    color: "from-islamic-primary to-gold-400",
  },
]

export function Hero() {
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
          {/* Badge - smaller on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 md:gap-2 md:px-4 md:py-2 bg-islamic-primary/10 text-islamic-primary rounded-full mb-6 md:mb-8"
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm font-medium">Break Language Barriers, Unite Congregation</span>
          </motion.div>

          {/* Main headline - optimized for mobile */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-poppins mb-2 md:mb-3 text-islamic-dark leading-tight">
            Empowering Dawah
            <span className="block mt-1 md:mt-2 text-gradient from-islamic-primary to-emerald-600 leading-normal pb-1">
              Through Technology
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
              Pricing
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <button
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 md:px-8 h-[52px] md:h-[60px] text-base md:text-lg text-islamic-primary hover:text-islamic-primary/80 transition-all group"
              onClick={() => {
                // Scroll to How Bayaan Works section within the same page
                const element = document.getElementById('how-bayaan-works')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              <span>See How It Works</span>
              <motion.div
                className="flex items-center"
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
              </motion.div>
            </button>
          </motion.div>
        </motion.div>

        {/* How It Works Section - Integrated into Hero */}
        <motion.div
          id="how-bayaan-works"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 md:mt-24"
        >
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-3 md:mb-4 bg-gold-100 text-gold-700 border-gold-200 text-xs md:text-sm">
              Simple Setup Process
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-3 md:mb-4 text-islamic-dark">
              How Bayaan Works
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              Get your mosque connected in minutes with our streamlined setup process
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line - hidden on mobile, visible on desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-islamic-primary via-gold-400 to-emerald-600 opacity-30" />
              
              {/* Top endpoint - chevron up */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -top-4">
                <motion.div 
                  className="relative flex flex-col items-center gap-0.5"
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-5 h-5 border-t-[3px] border-r-[3px] transform rotate-[-45deg] border-islamic-primary opacity-70" />
                  <div className="w-5 h-5 border-t-[3px] border-r-[3px] transform rotate-[-45deg] border-islamic-primary/50 opacity-50 -mt-3" />
                </motion.div>
              </div>
              
              {/* Bottom endpoint - chevron down */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -bottom-4">
                <motion.div 
                  className="relative flex flex-col items-center gap-0.5"
                  animate={{
                    y: [0, 2, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-5 h-5 border-b-[3px] border-r-[3px] transform rotate-[45deg] border-gold-400/50 opacity-50" />
                  <div className="w-5 h-5 border-b-[3px] border-r-[3px] transform rotate-[45deg] border-gold-400 opacity-70 -mt-3" />
                </motion.div>
              </div>

              {/* Steps */}
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center mb-6 md:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/50"
                    >
                      {/* Step number badge */}
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Step</span>
                        <span className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                          {step.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className={`text-xl md:text-2xl font-bold text-islamic-dark mb-3 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-sm md:text-base text-gray-600 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center icon circle */}
                  <div className="relative flex items-center justify-center w-full md:w-2/12 my-8 md:my-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${step.color} p-1 shadow-2xl`}
                    >
                      <div className="w-full h-full rounded-full bg-islamic-light flex items-center justify-center">
                        <step.icon className="w-8 h-8 md:w-10 md:h-10 text-islamic-primary" />
                      </div>
                      
                      {/* Pulse animation */}
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-30`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      />
                    </motion.div>

                    {/* Connecting dots for mobile */}
                    {index < steps.length - 1 && (
                      <div className="md:hidden absolute top-full left-1/2 transform -translate-x-1/2 flex flex-col items-center py-4">
                        <div className="w-0.5 h-8 bg-gradient-to-b from-islamic-primary to-gold-400 opacity-30" />
                        <div className="w-1 h-1 rounded-full bg-gold-400 mt-1" />
                        <div className="w-1 h-1 rounded-full bg-gold-400 mt-1" />
                        <div className="w-1 h-1 rounded-full bg-gold-400 mt-1" />
                      </div>
                    )}
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
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
                Live preview of the Bayaan public display • Real-time transcription & translation
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}