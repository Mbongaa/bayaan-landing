"use client"

import { motion } from "framer-motion"
import { UserPlus, Share2, Radio } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Setup Your Mosque",
    description: "Create your account and configure your mosque's rooms in minutes.",
    arabicText: "أنشئ حسابك",
  },
  {
    number: "02",
    icon: Share2,
    title: "Share Access",
    description: "Generate QR codes for your congregation. They simply scan to join.",
    arabicText: "شارك الوصول",
  },
  {
    number: "03",
    icon: Radio,
    title: "Go Live",
    description: "Start translating with one click. Expand your Dawah impact instantly.",
    arabicText: "ابدأ البث",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-islamic-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-3 md:mb-4 text-islamic-dark">
            Simple as 1-2-3
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Get your mosque connected and translating in minutes. 
            No technical expertise needed.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-islamic-primary/20 to-transparent transform -translate-y-1/2" />
          
          {/* Mobile-optimized vertical layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-row lg:flex-col items-center lg:text-center gap-4 lg:gap-0">
                  {/* Step number with Islamic geometric background - mobile layout */}
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-islamic-primary/10 to-gold-400/10 rounded-full flex items-center justify-center relative">
                      <div className="absolute inset-0 islamic-pattern opacity-20 rounded-full" />
                      <step.icon className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 text-islamic-primary relative z-10" />
                    </div>
                    <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-gold-400 text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-xs md:text-sm">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Content - mobile optimized */}
                  <div className="flex-1 lg:mt-6">
                    <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2 text-islamic-dark">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gold-500 font-arabic mb-2 md:mb-3">
                      {step.arabicText}
                    </p>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed lg:max-w-sm lg:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-12 top-24 bottom-0 w-0.5 bg-gradient-to-b from-islamic-primary/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional CTA - mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-base md:text-lg text-gray-600 mb-5 md:mb-6 px-4">
            Join mosques worldwide in making Islamic knowledge accessible to all
          </p>
          <button 
            className="px-6 md:px-8 py-3.5 md:py-4 bg-islamic-primary text-white rounded-full font-semibold hover:bg-islamic-primary/90 transition-all shadow-lg hover:shadow-xl text-sm md:text-base"
            onClick={() => {
              const element = document.getElementById('pricing')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
          >
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  )
}