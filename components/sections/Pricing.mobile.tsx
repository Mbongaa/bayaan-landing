"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, Clock, DollarSign, Youtube, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "@/hooks/useTranslation"

export function Pricing() {
  const { t } = useTranslation()
  
  const plans = [
    {
      name: t.pricing.plans.starter.name,
      price: t.pricing.plans.starter.price.monthly,
      period: t.pricing.perMonth,
      description: t.pricing.plans.starter.description,
      features: t.pricing.plans.starter.features,
      cta: t.pricing.plans.starter.cta,
      highlighted: false,
      includedHours: t.pricing.plans.starter.includedHours,
      additionalInfo: t.pricing.plans.starter.additionalInfo,
    },
    {
      name: t.pricing.plans.professional.name,
      price: t.pricing.plans.professional.price.monthly,
      period: t.pricing.perMonth,
      description: t.pricing.plans.professional.description,
      features: t.pricing.plans.professional.features,
      cta: t.pricing.plans.professional.cta,
      highlighted: true,
      badge: t.pricing.plans.professional.popularBadge,
      includedHours: t.pricing.plans.professional.includedHours,
      additionalInfo: t.pricing.plans.professional.additionalInfo,
    },
    {
      name: t.pricing.plans.enterprise.name,
      price: t.pricing.plans.enterprise.price,
      period: undefined,
      description: t.pricing.plans.enterprise.description,
      features: t.pricing.plans.enterprise.features,
      cta: t.pricing.plans.enterprise.cta,
      highlighted: false,
      includedHours: t.pricing.plans.enterprise.includedHours,
      additionalInfo: t.pricing.plans.enterprise.additionalInfo,
    },
  ]
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, startIndex: 1 })
  const [selectedIndex, setSelectedIndex] = useState(1)

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section id="pricing" className="py-16 md:py-24 bg-islamic-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-3 md:mb-4 text-islamic-dark"
            style={{ letterSpacing: '-0.058em' }}
          >
            {t.pricing.title}
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {plans.map((plan, index) => (
                <div key={index} className="flex-[0_0_85%] min-w-0 px-2">
                  <div className="relative">
                    {plan.badge && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-[10px] font-semibold shadow-lg">
                          {plan.badge}
                        </span>
                      </div>
                    )}
                    <div className={plan.badge ? "mt-6" : ""}>
                      <PricingCard plan={plan} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile carousel dots */}
          <div className="flex justify-center gap-2 mt-6">
            {plans.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === selectedIndex ? 'bg-islamic-primary w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to ${plans[index].name} plan`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gold-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}
              <div className={plan.highlighted ? "mt-8" : ""}>
                <PricingCard plan={plan} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional pricing info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16 bg-white rounded-xl p-6 md:p-8 max-w-4xl mx-auto shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <DollarSign className="w-8 h-8 text-islamic-primary mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">transparent pricing</h4>
              <p className="text-xs md:text-sm text-gray-600">
                no hidden fees. pay only for what you use.
              </p>
            </div>
            <div>
              <Zap className="w-8 h-8 text-gold-500 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">instant activation</h4>
              <p className="text-xs md:text-sm text-gray-600">
                start translating within minutes of signup.
              </p>
            </div>
            <div>
              <Youtube className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">live streaming</h4>
              <p className="text-xs md:text-sm text-gray-600">
                direct integration with youtube live (pro plan).
              </p>
            </div>
          </div>
        </motion.div>

        {/* Money-back guarantee - mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 md:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 md:gap-4 bg-gold-50 px-4 md:px-6 py-3 md:py-4 rounded-full">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-gold-500" />
            <span className="text-sm md:text-base text-gray-700">
              <strong>30-day money-back guarantee</strong> • no setup fees
            </span>
          </div>
        </motion.div>

        {/* Zakat notice - mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 md:mt-8 text-center"
        >
          <p className="text-xs md:text-sm text-gray-600">
            💚 eligible for zakat funds under islamic education and dawah categories
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function PricingCard({ plan }: { plan: any }) {
  return (
    <Card className={`p-6 md:p-8 h-full border-0 shadow-lg relative ${
      plan.highlighted 
        ? "shadow-2xl border-2 border-islamic-primary bg-gradient-to-br from-white to-emerald-50" 
        : "bg-islamic-light"
    }`}>
      <div className="text-center mb-5 md:mb-6">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-islamic-dark">{plan.name}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-3xl md:text-4xl font-bold text-islamic-primary">{plan.price}</span>
          {plan.period && <span className="text-sm md:text-base text-gray-600">{plan.period}</span>}
        </div>
        <p className="text-gray-600 mt-2 md:mt-3 text-xs md:text-sm">{plan.description}</p>
      </div>

      <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
        {plan.features.map((feature: string) => (
          <li key={feature} className="flex items-start gap-2.5 md:gap-3">
            <Check className="w-4 h-4 md:w-5 md:h-5 text-islamic-primary mt-0.5 flex-shrink-0" />
            <span className={`text-gray-700 text-xs md:text-sm ${feature.includes('Everything in') ? 'font-semibold' : ''}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {plan.additionalInfo && (
        <div className="mb-6 p-3 bg-gold-50 rounded-lg border border-gold-200">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold-600" />
            <span className="text-xs md:text-sm text-gold-700 font-medium">
              {plan.additionalInfo}
            </span>
          </div>
        </div>
      )}

      {plan.includedHours && (
        <div className="mb-6 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
          <div className="flex items-center justify-between">
            <span className="text-xs md:text-sm text-emerald-700">
              Monthly allowance:
            </span>
            <span className="text-sm md:text-base font-bold text-emerald-700">
              {plan.includedHours} hours
            </span>
          </div>
        </div>
      )}

      <Button 
        className={`w-full ${
          plan.highlighted 
            ? "bg-islamic-primary hover:bg-islamic-primary/90 text-white shadow-lg" 
            : "bg-islamic-light border-2 border-islamic-primary text-islamic-primary hover:bg-islamic-primary/5"
        } py-5 md:py-6 text-sm md:text-base`}
        onClick={() => {
          if (plan.name === "Religious Center") {
            alert("Redirecting to contact sales...")
          } else {
            alert("Starting signup process...")
          }
        }}
      >
        {plan.cta}
      </Button>
    </Card>
  )
}