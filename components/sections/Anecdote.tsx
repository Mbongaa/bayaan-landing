"use client"

import { motion } from "framer-motion"
import { Quote, Heart, Globe, BookOpen } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export function Anecdote() {
  const { t } = useTranslation()
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-islamic-light via-white to-cream-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 islamic-pattern opacity-10" />
      
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-islamic-primary via-gold-400 to-emerald-600 opacity-30" />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Title */}
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-islamic-dark leading-tight"
              style={{ letterSpacing: '-0.058em' }}
            >
              {t.anecdote.title}
            </h2>
          </div>

          {/* Story Cards Grid - Desktop optimized */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Card 1 - The Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/50 h-full">
                {/* Quote mark */}
                <div className="absolute -top-3 -left-3 text-islamic-primary/20">
                  <Quote className="w-10 h-10 rotate-180" />
                </div>
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-islamic-primary/10 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-islamic-primary" />
                    </div>
                    <span className="text-sm font-semibold text-islamic-primary uppercase tracking-wider">The Challenge</span>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t.anecdote.story.paragraph1}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - The Realization */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cream-50 to-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-gold-200/30 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-gold-600" />
                  </div>
                  <span className="text-sm font-semibold text-gold-600 uppercase tracking-wider">The Realization</span>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t.anecdote.story.paragraph2}
                </p>
              </div>
            </motion.div>

            {/* Card 3 - Universal Need */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/50 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Universal Need</span>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t.anecdote.story.paragraph3}
                </p>
              </div>
            </motion.div>

            {/* Card 4 - The Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-islamic-primary/5 to-emerald-600/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-islamic-primary/20 h-full">
                {/* Closing quote */}
                <div className="absolute -bottom-3 -right-3 text-islamic-primary/20">
                  <Quote className="w-10 h-10" />
                </div>
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-islamic-primary/10 flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Heart className="w-5 h-5 text-islamic-primary" />
                      </motion.div>
                    </div>
                    <span className="text-sm font-semibold text-islamic-primary uppercase tracking-wider">The Vision</span>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    {t.anecdote.story.paragraph4}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => {
                const element = document.getElementById('pricing')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-islamic-primary text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              <span>Join Our Mission</span>
              <Heart className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-gold-400 to-islamic-primary opacity-30" />
    </section>
  )
}