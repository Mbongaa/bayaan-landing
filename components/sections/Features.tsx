"use client"

import { motion } from "framer-motion"
import { Globe2, Zap, Shield, Users, Settings, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "Real-Time Translation",
    description: "LiveKit-powered instant translation ensures your message reaches everyone simultaneously.",
    color: "text-gold-500",
    bgColor: "bg-gold-50",
  },
  {
    icon: Globe2,
    title: "Multi-Language Support",
    description: "Arabic, English, Dutch, and more. Expand your Dawah reach to diverse communities.",
    color: "text-islamic-primary",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Settings,
    title: "Simple Setup",
    description: "One-click room creation, QR code sharing. Get connected in minutes.",
    color: "text-islamic-accent",
    bgColor: "bg-cream-100",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your mosque controls all data. Secure and compliant with Islamic principles.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Users,
    title: "Inclusive Community",
    description: "Bridge generational and cultural gaps. Unite young and old in faith.",
    color: "text-gold-500",
    bgColor: "bg-gold-50",
  },
  {
    icon: Heart,
    title: "Amplify Your Dawah",
    description: "Remove language barriers. Let your message reach every heart.",
    color: "text-islamic-primary",
    bgColor: "bg-emerald-50",
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-islamic-light relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-3 md:mb-4 text-islamic-dark">
            Empower Your Mosque&apos;s Mission
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Bayaan brings cutting-edge technology to serve the timeless message of Islam.
          </p>
        </motion.div>

        {/* Mobile-optimized grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-5 md:p-6 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-cream-50">
                <div className={`inline-flex p-2.5 md:p-3 rounded-xl ${feature.bgColor} mb-3 md:mb-4`}>
                  <feature.icon className={`w-5 h-5 md:w-6 md:h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-islamic-dark">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Dawah Statistics - mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-20 bg-gradient-to-r from-islamic-primary to-emerald-600 rounded-xl md:rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">85%</div>
              <div className="text-sm md:text-base text-cream-100">Increase in non-Arab attendance</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">3x</div>
              <div className="text-sm md:text-base text-cream-100">More youth engagement</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">24/7</div>
              <div className="text-sm md:text-base text-cream-100">Dawah accessibility</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}