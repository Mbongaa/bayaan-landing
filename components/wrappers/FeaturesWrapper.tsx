"use client"

import dynamic from 'next/dynamic'
import { useIsMobile } from '@/hooks/useIsMobile'

const FeaturesDesktop = dynamic(() => import('@/components/sections/Features').then(mod => ({ default: mod.Features })), { ssr: false })
const FeaturesMobile = dynamic(() => import('@/components/sections/Features.mobile').then(mod => ({ default: mod.Features })), { ssr: false })

export function FeaturesWrapper() {
  const isMobile = useIsMobile()
  
  if (isMobile === null) return null
  
  return isMobile ? <FeaturesMobile /> : <FeaturesDesktop />
}