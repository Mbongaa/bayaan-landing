"use client"

import { useIsMobile } from '@/hooks/useIsMobile'

export default function TestMobile() {
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Device Detection Test</h1>
        
        {isMobile === null ? (
          <p className="text-gray-500">Detecting device...</p>
        ) : (
          <>
            <p className="text-xl mb-2">
              Current View: <span className="font-bold text-blue-600">
                {isMobile ? 'MOBILE' : 'DESKTOP'}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              Window width: {typeof window !== 'undefined' ? window.innerWidth : 'N/A'}px
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Breakpoint: 768px
            </p>
            <p className="text-xs text-gray-500 mt-4">
              Try resizing your browser window to see the change
            </p>
          </>
        )}
      </div>
    </div>
  )
}