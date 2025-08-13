"use client"

export default function TestPage() {
  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Button Test Page</h1>
      
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
        onClick={() => {
          console.log('Button clicked!')
          alert('Button clicked!')
        }}
      >
        Test Alert Button
      </button>
      
      <button 
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => {
          console.log('Scrolling to top')
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      >
        Test Scroll Button
      </button>
      
      <div className="mt-4 p-4 border">
        <p>If buttons work here, the issue is with our components.</p>
        <p>If buttons don't work here, it's a Next.js hydration issue.</p>
      </div>
      
      <div style={{ height: '2000px', marginTop: '20px', background: 'linear-gradient(to bottom, #eee, #333)' }}>
        <p className="pt-10 text-center">Scroll area for testing</p>
      </div>
    </div>
  )
}