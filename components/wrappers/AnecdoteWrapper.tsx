"use client"

import dynamic from 'next/dynamic'
import { useIsMobile } from '@/hooks/useIsMobile'

const AnecdoteDesktop = dynamic(() => import('@/components/sections/Anecdote').then(mod => ({ default: mod.Anecdote })), { ssr: false })
const AnecdoteMobile = dynamic(() => import('@/components/sections/Anecdote.mobile').then(mod => ({ default: mod.Anecdote })), { ssr: false })

export function AnecdoteWrapper() {
  const isMobile = useIsMobile()
  
  if (isMobile === null) return null
  
  return isMobile ? <AnecdoteMobile /> : <AnecdoteDesktop />
}