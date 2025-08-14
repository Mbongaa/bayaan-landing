"use client"

import dynamic from 'next/dynamic'
import { useIsMobile } from '@/hooks/useIsMobile'

const UseCasesDesktop = dynamic(() => import('@/components/sections/UseCases').then(mod => ({ default: mod.UseCases })), { ssr: false })
const UseCasesMobile = dynamic(() => import('@/components/sections/UseCases.mobile').then(mod => ({ default: mod.UseCases })), { ssr: false })

export function UseCasesWrapper() {
  const isMobile = useIsMobile()
  
  if (isMobile === null) return null
  
  return isMobile ? <UseCasesMobile /> : <UseCasesDesktop />
}