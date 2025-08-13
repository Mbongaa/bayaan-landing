"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function DebugPage() {
  const [mounted, setMounted] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    setMounted(true)
    console.log("Debug page mounted")
  }, [])

  const handleNativeClick = () => {
    console.log("Native button clicked")
    alert("Native button works!")
    setClickCount(prev => prev + 1)
  }

  const handleShadcnClick = () => {
    console.log("Shadcn button clicked")
    alert("Shadcn button works!")
    setClickCount(prev => prev + 1)
  }

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-3xl font-bold">Debug Page</h1>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600 mb-2">Hydration status:</p>
          <p className={`font-bold ${mounted ? 'text-green-600' : 'text-red-600'}`}>
            {mounted ? '✅ Hydrated' : '❌ Not hydrated'}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-2">Click count: {clickCount}</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Test 1: Native HTML Button</h2>
          <button 
            onClick={handleNativeClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Native HTML Button (should work)
          </button>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Test 2: Shadcn Button Component</h2>
          <Button onClick={handleShadcnClick}>
            Shadcn Button (might not work)
          </Button>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Test 3: Inline onClick</h2>
          <button 
            onClick={() => alert("Inline onclick works!")}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Inline onClick Button
          </button>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Test 4: Event Delegation</h2>
          <div onClick={(e) => {
            if ((e.target as HTMLElement).tagName === 'BUTTON') {
              alert("Event delegation works!")
            }
          }}>
            <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
              Event Delegation Button
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold mb-2">Instructions:</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Try clicking each button</li>
          <li>Check browser console for any errors</li>
          <li>If native buttons work but Shadcn doesn't, it's a component issue</li>
          <li>If no buttons work, it's a hydration/Next.js issue</li>
        </ol>
      </div>
    </div>
  )
}