"use client"

import { motion } from "framer-motion"
import { Calendar, BookOpen, Users, Presentation } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/hooks/useTranslation"

export function UseCases() {
  const { t } = useTranslation()
  
  const useCases = [
    {
      icon: Calendar,
      title: t.useCases.cards.fridayKhutbah.title,
      description: t.useCases.cards.fridayKhutbah.description,
      impact: t.useCases.cards.fridayKhutbah.impact,
      features: t.useCases.cards.fridayKhutbah.features,
    },
    {
      icon: BookOpen,
      title: t.useCases.cards.islamicEducation.title,
      description: t.useCases.cards.islamicEducation.description,
      impact: t.useCases.cards.islamicEducation.impact,
      features: t.useCases.cards.islamicEducation.features,
    },
    {
      icon: Users,
      title: t.useCases.cards.communityEvents.title,
      description: t.useCases.cards.communityEvents.description,
      impact: t.useCases.cards.communityEvents.impact,
      features: t.useCases.cards.communityEvents.features,
    },
    {
      icon: Presentation,
      title: t.useCases.cards.dawahPrograms.title,
      description: t.useCases.cards.dawahPrograms.description,
      impact: t.useCases.cards.dawahPrograms.impact,
      features: t.useCases.cards.dawahPrograms.features,
    },
  ]
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-islamic-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <Badge className="mb-3 md:mb-4 bg-gold-100 text-gold-700 border-gold-200 text-xs md:text-sm">
            {t.useCases.badge}
          </Badge>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-3 md:mb-4 text-islamic-dark"
            style={{ letterSpacing: '-0.058em' }}
          >
            {t.useCases.title}
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {t.useCases.subtitle}
          </p>
        </motion.div>

        {/* Mobile-optimized grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-5 md:p-8 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-cream-50">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2.5 md:p-3 bg-islamic-primary/10 rounded-xl flex-shrink-0">
                    <useCase.icon className="w-6 h-6 md:w-8 md:h-8 text-islamic-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <h3 
                        className="text-xl md:text-2xl font-semibold text-islamic-dark"
                        style={{ letterSpacing: '-0.058em' }}
                      >
                        {useCase.title}
                      </h3>
                      <Badge variant="outline" className="text-xs border-gold-400 text-gold-600 hidden sm:inline-flex">
                        {useCase.impact}
                      </Badge>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed">
                      {useCase.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {useCase.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs md:text-sm px-2 md:px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Islamic Quote - mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16 text-center bg-transparent rounded-xl md:rounded-2xl p-8 md:p-12"
        >
          <p className="text-xl md:text-2xl font-arabic text-islamic-primary mb-3 md:mb-4">
            "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ"
          </p>
          <p className="text-base md:text-lg text-gray-600 italic">
            "and we have not sent you, [o muhammad], except as a mercy to the worlds."
          </p>
          <p className="text-xs md:text-sm text-gray-500 mt-2">quran 21:107</p>
        </motion.div>
      </div>
    </section>
  )
}