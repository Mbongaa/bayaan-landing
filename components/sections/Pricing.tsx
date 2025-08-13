"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, Clock, DollarSign, Youtube, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

const plans = [
  {
    name: "Starter",
    price: "€49.99",
    period: "/month",
    description: "Perfect for small mosques with Friday sermons and occasional announcements",
    features: [
      "8 transcription hours included",
      "Full dashboard access",
      "Session history & playback",
      "Export to PDF/Word/TXT",
      "Analytics dashboard",
      "Multi-language support",
      "Email support",
    ],
    additionalInfo: "Additional hours: €6/hour",
    cta: "Get Started",
    highlighted: false,
    includedHours: 8,
  },
  {
    name: "Professional",
    price: "€99",
    period: "/month",
    description: "For active mosques with regular programs and expanded digital presence",
    features: [
      "20 transcription hours included",
      "Everything in Starter, plus:",
      "Donation module (automatic online collection)",
      "YouTube Live captions integration",
      "Priority support",
      "Custom branding",
      "Advanced analytics",
      "Dedicated onboarding",
    ],
    additionalInfo: "Additional hours: €6/hour",
    cta: "Start Trial",
    highlighted: true,
    includedHours: 20,
  },
  {
    name: "Religious Center",
    price: "Custom",
    description: "For Islamic centers with daily programs and extensive educational activities",
    features: [
      "Pay-as-you-go model",
      "Volume-based pricing",
      "All Professional features included",
      "24/7 dedicated support",
      "Custom integrations",
      "Multiple room management",
      "SLA guarantee",
      "Training sessions",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export function Pricing() {
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
          <Badge className="mb-3 md:mb-4 bg-islamic-primary/10 text-islamic-primary border-islamic-primary/20 text-xs md:text-sm">
            Invest in Your Dawah
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-3 md:mb-4 text-islamic-dark">
            Plans for Every Mosque
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Start free and scale as your community grows. Every plan is designed to maximize 
            your Dawah potential.
          </p>
        </motion.div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {plans.map((plan, index) => (
                <div key={index} className="flex-[0_0_85%] min-w-0 px-2">
                  <PricingCard plan={plan} />
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
              className={plan.highlighted ? "relative -mt-4 mb-4" : ""}
            >
              <PricingCard plan={plan} />
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
              <h4 className="font-semibold text-gray-800 mb-1">Transparent Pricing</h4>
              <p className="text-xs md:text-sm text-gray-600">
                No hidden fees. Pay only for what you use.
              </p>
            </div>
            <div>
              <Zap className="w-8 h-8 text-gold-500 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">Instant Activation</h4>
              <p className="text-xs md:text-sm text-gray-600">
                Start translating within minutes of signup.
              </p>
            </div>
            <div>
              <Youtube className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">Live Streaming</h4>
              <p className="text-xs md:text-sm text-gray-600">
                Direct integration with YouTube Live (Pro plan).
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
              <strong>30-day money-back guarantee</strong> • No setup fees
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
            💚 Eligible for Zakat funds under Islamic education and Dawah categories
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function PricingCard({ plan }: { plan: typeof plans[0] }) {
  return (
    <Card className={`p-6 md:p-8 h-full border-0 shadow-lg relative overflow-hidden ${
      plan.highlighted 
        ? "shadow-2xl border-2 border-islamic-primary bg-gradient-to-br from-white to-emerald-50" 
        : "bg-islamic-light"
    }`}>
      {plan.badge && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold-400 text-white text-xs">
          <Sparkles className="w-3 h-3 mr-1" />
          {plan.badge}
        </Badge>
      )}
      
      <div className="text-center mb-5 md:mb-6">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-islamic-dark">{plan.name}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-3xl md:text-4xl font-bold text-islamic-primary">{plan.price}</span>
          {plan.period && <span className="text-sm md:text-base text-gray-600">{plan.period}</span>}
        </div>
        <p className="text-gray-600 mt-2 md:mt-3 text-xs md:text-sm">{plan.description}</p>
      </div>

      <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
        {plan.features.map((feature) => (
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