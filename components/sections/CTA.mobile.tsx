"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/useTranslation"

export function CTA() {
  const { t } = useTranslation()
  return (
    <section className="py-24 bg-gradient-to-br from-islamic-primary via-emerald-600 to-islamic-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 islamic-pattern opacity-10" />
      
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 
            className="text-4xl md:text-6xl font-bold font-poppins mb-6 text-white"
            style={{ letterSpacing: '-0.058em' }}
          >
            {t.cta.title}
          </h2>
          
          <p className="text-xl text-cream-100 mb-8 leading-relaxed">
            {t.cta.subtitle}
          </p>

          {/* Benefits list */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-cream-100">
              <CheckCircle className="w-5 h-5 text-gold-300" />
              <span>{t.cta.features.feature1}</span>
            </div>
            <div className="flex items-center gap-2 text-cream-100">
              <CheckCircle className="w-5 h-5 text-gold-300" />
              <span>{t.cta.features.feature2}</span>
            </div>
            <div className="flex items-center gap-2 text-cream-100">
              <CheckCircle className="w-5 h-5 text-gold-300" />
              <span>{t.cta.features.feature3}</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-islamic-light text-islamic-primary hover:bg-cream-100 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold"
              onClick={() => {
                const element = document.getElementById('pricing')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              {t.cta.primaryButton}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-islamic-light text-islamic-light hover:bg-islamic-light/10 px-8 py-6 text-lg rounded-full"
              onClick={() => alert(t.cta.demoAlert)}
            >
              {t.cta.secondaryButton}
            </Button>
          </div>

          {/* Urgency message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <p className="text-gold-200 text-lg">
              {t.cta.ramadanOffer}
            </p>
          </motion.div>

          {/* Arabic blessing */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <p className="text-2xl font-arabic text-cream-100">
              بارك الله فيكم
            </p>
            <p className="text-sm text-cream-200 mt-2">
              {t.cta.blessing}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}