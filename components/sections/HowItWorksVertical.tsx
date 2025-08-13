"use client"

import { motion } from "framer-motion"
import { UserPlus, Smartphone, Radio, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

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

export function HowItWorksVertical() {
  return (
    <section id="how-it-works-new" className="py-16 md:py-24 bg-islamic-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 islamic-pattern opacity-5" />
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-islamic-primary/10 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <Badge className="mb-3 md:mb-4 bg-gold-100 text-gold-700 border-gold-200 text-xs md:text-sm">
            Simple Setup Process
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-islamic-dark">
            How Bayaan Works
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Get your mosque connected in minutes with our streamlined setup process
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line - hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-islamic-primary via-gold-400 to-emerald-600 opacity-30" />

            {/* Steps */}
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center mb-12 md:mb-20 ${
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

        {/* CTA at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Ready to transform your mosque's Dawah impact?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('pricing')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-islamic-primary to-emerald-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Get Started Today
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}