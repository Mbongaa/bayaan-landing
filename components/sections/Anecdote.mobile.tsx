"use client"

import { motion } from "framer-motion"
import { Quote, Heart, Globe, BookOpen } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export function Anecdote() {
  const { t } = useTranslation()
  return (
    <section className="relative py-12 bg-gradient-to-b from-islamic-light via-white to-cream-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 islamic-pattern opacity-10" />
      
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-islamic-primary via-gold-400 to-emerald-600 opacity-30" />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Mobile-optimized Title */}
          <div className="text-center mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-islamic-primary/10 text-islamic-primary rounded-full mb-3 text-xs font-semibold"
            >
              <Heart className="w-3 h-3" />
              <span>Personal Story</span>
            </motion.div>
            
            <h2 
              className="text-2xl font-bold font-poppins text-islamic-dark leading-tight"
              style={{ letterSpacing: '-0.058em' }}
            >
              {t.anecdote.title}
            </h2>
          </div>

          {/* Mobile-optimized Story Cards */}
          <div className="space-y-4">
            {/* Card 1 - The Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/50">
                {/* Quote mark */}
                <div className="absolute -top-2 -left-2 text-islamic-primary/20">
                  <Quote className="w-8 h-8 rotate-180" />
                </div>
                
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-islamic-primary/10 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-islamic-primary" />
                    </div>
                    <span className="text-xs font-semibold text-islamic-primary uppercase tracking-wider">The Challenge</span>
                  </div>
                  
                  <p className="text-base text-gray-700 leading-relaxed">
                    {t.anecdote.story.paragraph1}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - The Struggle */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cream-50 to-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-gold-200/30">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-400/10 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-gold-600" />
                  </div>
                  <span className="text-xs font-semibold text-gold-600 uppercase tracking-wider">The Realization</span>
                </div>
                
                <p className="text-base text-gray-700 leading-relaxed">
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
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/50">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600/10 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">Universal Need</span>
                </div>
                
                <p className="text-base text-gray-700 leading-relaxed">
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
              <div className="bg-gradient-to-br from-islamic-primary/5 to-emerald-600/5 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-islamic-primary/20">
                {/* Closing quote */}
                <div className="absolute -bottom-2 -right-2 text-islamic-primary/20">
                  <Quote className="w-8 h-8" />
                </div>
                
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-islamic-primary/10 flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Heart className="w-4 h-4 text-islamic-primary" />
                      </motion.div>
                    </div>
                    <span className="text-xs font-semibold text-islamic-primary uppercase tracking-wider">The Vision</span>
                  </div>
                  
                  <p className="text-base text-gray-700 leading-relaxed font-medium">
                    {t.anecdote.story.paragraph4}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Attribution with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-islamic-primary/10">
              <div className="w-1 h-4 bg-islamic-primary rounded-full" />
              <p className="text-sm text-gray-600 italic font-medium">
                {t.anecdote.attribution}
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <button
              onClick={() => {
                const element = document.getElementById('pricing')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-islamic-primary text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              <span>Join Our Mission</span>
              <Heart className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-gold-400 to-islamic-primary opacity-30" />
    </section>
  )
}