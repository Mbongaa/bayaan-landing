"use client"

import { motion } from "framer-motion"

export function Anecdote() {
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
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-8 text-islamic-dark">
            From Frustration to Inspiration
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
              When I was a child, my father would take me to the Friday khutbah every week. I was a restless, hyperactive kid — 
              the kind who found it nearly impossible to sit still for an hour, especially when I didn't fully understand what was being said.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Even though Arabic was the language of our home, my vocabulary was limited, and the khatib's eloquent fusha felt like another world. 
              I'd fidget, daydream, and, I'll admit, sometimes annoy my father. <span className="font-semibold text-islamic-primary">If something like Bayaan 
              had existed back then — live translations right in front of me — I might have listened more closely and connected more deeply.</span>
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              And this isn't just for non-Arabic speakers. Many Arabic speakers, especially younger generations or those who only speak a dialect, 
              struggle with fusha too. <span className="italic font-medium">This tool bridges that gap</span>, helping both Arabic and non-Arabic speakers 
              draw closer to the language of the Qur'an.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              I've seen how my cousins back home became fluent in English simply by watching English movies with Arabic subtitles. 
              <span className="font-semibold text-islamic-primary">With Bayaan, InshaAllah, we can reverse that</span> — letting people absorb fusha Arabic 
              while following the khutbah with clear, live subtitles.
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
              — Founder's personal story
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}