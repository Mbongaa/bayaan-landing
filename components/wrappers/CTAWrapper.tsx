"use client"

import dynamic from 'next/dynamic'
import { useIsMobile } from '@/hooks/useIsMobile'

const CTADesktop = dynamic(() => import('@/components/sections/CTA').then(mod => ({ default: mod.CTA })), { ssr: false })
const CTAMobile = dynamic(() => import('@/components/sections/CTA.mobile').then(mod => ({ default: mod.CTA })), { ssr: false })

export function CTAWrapper() {
  const isMobile = useIsMobile()
  
  if (isMobile === null) return null
  
  return isMobile ? <CTAMobile /> : <CTADesktop />
}