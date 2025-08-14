"use client"

import dynamic from 'next/dynamic'
import { useIsMobile } from '@/hooks/useIsMobile'

const HeroDesktop = dynamic(() => import('@/components/sections/Hero').then(mod => ({ default: mod.Hero })), { ssr: false })
const HeroMobile = dynamic(() => import('@/components/sections/Hero.mobile').then(mod => ({ default: mod.Hero })), { ssr: false })

export function HeroWrapper() {
  const isMobile = useIsMobile()
  
  // Show nothing while detecting
  if (isMobile === null) return null
  
  return isMobile ? <HeroMobile /> : <HeroDesktop />
}