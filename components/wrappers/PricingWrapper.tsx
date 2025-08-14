"use client"

import dynamic from 'next/dynamic'
import { useIsMobile } from '@/hooks/useIsMobile'

const PricingDesktop = dynamic(() => import('@/components/sections/Pricing').then(mod => ({ default: mod.Pricing })), { ssr: false })
const PricingMobile = dynamic(() => import('@/components/sections/Pricing.mobile').then(mod => ({ default: mod.Pricing })), { ssr: false })

export function PricingWrapper() {
  const isMobile = useIsMobile()
  
  if (isMobile === null) return null
  
  return isMobile ? <PricingMobile /> : <PricingDesktop />
}