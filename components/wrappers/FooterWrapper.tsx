"use client"

import dynamic from 'next/dynamic'
import { useIsMobile } from '@/hooks/useIsMobile'

const FooterDesktop = dynamic(() => import('@/components/shared/Footer').then(mod => ({ default: mod.Footer })), { ssr: false })
const FooterMobile = dynamic(() => import('@/components/shared/Footer.mobile').then(mod => ({ default: mod.Footer })), { ssr: false })

export function FooterWrapper() {
  const isMobile = useIsMobile()
  
  if (isMobile === null) return null
  
  return isMobile ? <FooterMobile /> : <FooterDesktop />
}