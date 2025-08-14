"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/hooks/useTranslation"

export function Anecdote() {
  const { t } = useTranslation()
  return (
    <section className="relative py-16 md:py-24 bg-islamic-light">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Title */}
          <h2 
            className="text-3xl md:text-4xl font-bold font-poppins text-center mb-8 text-islamic-dark"
            style={{ letterSpacing: '-0.058em' }}
          >
            {t.anecdote.title}
          </h2>

          {/* Quote Mark */}
          <div className="absolute top-0 -left-4 md:-left-8 text-islamic-primary/20">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
            </svg>
          </div>

          {/* Story Content */}
          <div className="relative bg-gradient-to-br from-white to-cream-50 rounded-2xl p-8 md:p-12 shadow-xl border border-islamic-primary/10">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              {t.anecdote.story.paragraph1}
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              {t.anecdote.story.paragraph2}
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              {t.anecdote.story.paragraph3}
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {t.anecdote.story.paragraph4}
            </p>

          </div>

          {/* Attribution */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center"
          >
            <p className="text-sm text-gray-500 italic">
              {t.anecdote.attribution}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}