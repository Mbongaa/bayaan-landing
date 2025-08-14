"use client"

import dynamic from 'next/dynamic'
import { useIsMobile } from '@/hooks/useIsMobile'

const TestimonialsDesktop = dynamic(() => import('@/components/sections/Testimonials').then(mod => ({ default: mod.Testimonials })), { ssr: false })
const TestimonialsMobile = dynamic(() => import('@/components/sections/Testimonials.mobile').then(mod => ({ default: mod.Testimonials })), { ssr: false })

export function TestimonialsWrapper() {
  const isMobile = useIsMobile()
  
  if (isMobile === null) return null
  
  return isMobile ? <TestimonialsMobile /> : <TestimonialsDesktop />
}