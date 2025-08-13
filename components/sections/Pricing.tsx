"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

const plans = [
  {
    name: "Community",
    price: "Free",
    description: "Perfect for small mosques starting their digital Dawah journey",
    features: [
      "Up to 50 concurrent users",
      "1 translation room",
      "3 languages",
      "Basic support",
      "Community features",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Masjid Pro",
    price: "$99",
    period: "/month",
    description: "For growing mosques expanding their reach and impact",
    features: [
      "Up to 500 concurrent users",
      "5 translation rooms",
      "Unlimited languages",
      "Priority support",
      "Recording & playback",
      "Custom branding",
      "Analytics dashboard",
      "Dedicated onboarding",
    ],
    cta: "Start Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large mosques and Islamic centers with advanced needs",
    features: [
      "Unlimited concurrent users",
      "Unlimited rooms",
      "All languages",
      "24/7 dedicated support",
      "Advanced analytics",
      "Custom integrations",
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

        {/* Money-back guarantee - mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 md:gap-4 bg-gold-50 px-4 md:px-6 py-3 md:py-4 rounded-full">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-gold-500" />
            <span className="text-sm md:text-base text-gray-700">
              <strong>30-day money-back guarantee</strong> • No questions asked
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
            <span className="text-gray-700 text-xs md:text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        className={`w-full ${
          plan.highlighted 
            ? "bg-islamic-primary hover:bg-islamic-primary/90 text-white shadow-lg" 
            : "bg-islamic-light border-2 border-islamic-primary text-islamic-primary hover:bg-islamic-primary/5"
        } py-5 md:py-6 text-sm md:text-base`}
        onClick={() => {
          if (plan.name === "Community") {
            alert("Starting free plan setup...")
          } else if (plan.name === "Enterprise") {
            alert("Redirecting to contact sales...")
          } else {
            alert("Starting free trial...")
          }
        }}
      >
        {plan.cta}
      </Button>
    </Card>
  )
}