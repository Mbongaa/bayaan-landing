"use client"

import { motion } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

const testimonials = [
  {
    name: "Sheikh Ahmad Hassan",
    role: "Imam, Masjid Al-Noor",
    location: "Amsterdam, Netherlands",
    content: "Bayaan has transformed our Friday prayers. Our non-Arabic speaking youth are finally engaged and understanding the khutbah. This is true Dawah in action.",
    rating: 5,
    highlight: "Youth engagement increased by 300%",
  },
  {
    name: "Sister Fatima Al-Rashid",
    role: "Community Director",
    location: "London, UK",
    content: "As a diverse community with over 15 nationalities, Bayaan bridges our language gaps beautifully. It's strengthened our bonds and expanded our Dawah reach significantly.",
    rating: 5,
    highlight: "15+ nationalities united",
  },
  {
    name: "Brother Yusuf Ibrahim",
    role: "Mosque Administrator",
    location: "Brussels, Belgium",
    content: "The simplicity of setup amazed us. Within minutes, our elderly congregation members were accessing translations on their phones. Technology serving faith perfectly.",
    rating: 5,
    highlight: "Setup in under 10 minutes",
  },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
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
    <section id="testimonials" className="py-16 md:py-24 bg-islamic-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-3 md:mb-4 text-islamic-dark">
            Mosques Thriving with Bayaan
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            See how mosques worldwide are expanding their Dawah and uniting their communities
          </p>
        </motion.div>

        {/* Mobile carousel / Desktop grid */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile carousel controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-full bg-islamic-primary/10 hover:bg-islamic-primary/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-islamic-primary" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === selectedIndex ? 'bg-islamic-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={scrollNext}
              className="p-2 rounded-full bg-islamic-primary/10 hover:bg-islamic-primary/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-islamic-primary" />
            </button>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Trust badges - mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-islamic-primary">50+</div>
              <div className="text-xs md:text-sm text-gray-600">Active Mosques</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-islamic-primary">10K+</div>
              <div className="text-xs md:text-sm text-gray-600">Weekly Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-islamic-primary">99.9%</div>
              <div className="text-xs md:text-sm text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-islamic-primary">5 ⭐</div>
              <div className="text-xs md:text-sm text-gray-600">Avg Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <Card className="p-5 md:p-6 h-full border-0 shadow-lg bg-islamic-light relative overflow-hidden">
      {/* Quote icon */}
      <Quote className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 text-gold-200" />
      
      {/* Rating */}
      <div className="flex gap-1 mb-3 md:mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-gold-400 text-gold-400" />
        ))}
      </div>

      {/* Content */}
      <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed relative z-10">
        "{testimonial.content}"
      </p>

      {/* Highlight */}
      <div className="bg-islamic-primary/5 text-islamic-primary text-xs md:text-sm px-2.5 md:px-3 py-1.5 md:py-2 rounded-lg mb-3 md:mb-4 inline-block">
        ✨ {testimonial.highlight}
      </div>

      {/* Author */}
      <div className="border-t pt-3 md:pt-4">
        <div className="font-semibold text-sm md:text-base text-islamic-dark">{testimonial.name}</div>
        <div className="text-xs md:text-sm text-gray-600">{testimonial.role}</div>
        <div className="text-xs text-gray-500 mt-0.5 md:mt-1">{testimonial.location}</div>
      </div>
    </Card>
  )
}