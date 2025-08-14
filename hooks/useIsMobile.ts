"use client"

import { useState, useEffect } from "react"

export function useIsMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Initial check
    checkDevice()

    // Add event listener for resize
    window.addEventListener('resize', checkDevice)

    // Cleanup
    return () => window.removeEventListener('resize', checkDevice)
  }, [breakpoint])

  return isMobile
}