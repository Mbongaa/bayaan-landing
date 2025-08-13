"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-bayaan-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
]

export function MobileNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 100
      
      for (const item of navItems) {
        const sectionId = item.href.replace('#', '')
        const element = document.getElementById(sectionId)
        
        if (element) {
          const { offsetTop, offsetHeight } = element
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.href)
            break
          }
        }
      }
    }
    
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    // Close mobile menu
    setIsMobileMenuOpen(false)
    
    // Handle scroll to section
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const offset = 60 // Smaller offset for mobile
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      {/* Fixed Logo Bar */}
      <div className={`lg:hidden fixed top-0 left-0 right-0 h-14 z-[100] transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? "bg-islamic-light/95 backdrop-blur-md shadow-lg" 
          : "bg-white/10 backdrop-blur-sm"
      }`}>
        <div className="flex items-center justify-between h-full px-4">
          <div className="flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
                setIsMobileMenuOpen(false)
              }}
              className="cursor-pointer flex-shrink-0"
            >
              <span className="text-xl font-bold font-poppins text-islamic-dark">
                bayaan.ai
              </span>
            </a>
            
            {/* Title next to logo - no animations */}
            {!isScrolled && (
              <span className="text-base font-bold font-poppins text-islamic-dark whitespace-nowrap">
                real time sermon translation
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Completely Separate Fixed Hamburger Button - Only show when scrolled */}
      {isScrolled && (
        <button
          className="lg:hidden fixed right-4 z-[101] p-2 rounded-lg transition-colors hover:bg-gray-100/20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          type="button"
          style={{
            // Use fixed pixel positioning to prevent any movement
            position: 'fixed',
            top: '8px', // Adjusted to center: (56px - 40px) / 2 = 8px
            right: '16px',
            width: '40px',
            height: '40px',
          }}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-islamic-dark" />
            ) : (
              <Menu className="w-6 h-6 text-islamic-dark" />
            )}
          </div>
        </button>
      )}

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="lg:hidden fixed top-14 left-0 right-0 bg-islamic-light shadow-xl z-[99]"
        >
          <div className="px-4 py-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`block px-4 py-3 text-base font-poppins transition-all duration-300 rounded-lg ${
                  activeSection === item.href
                    ? 'bg-islamic-primary/10 text-islamic-primary font-semibold'
                    : 'text-gray-700 hover:bg-islamic-primary/5 hover:text-islamic-primary'
                }`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </motion.a>
            ))}
            
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
              <Button 
                variant="outline" 
                className="w-full py-5 text-sm font-poppins"
                onClick={() => {
                  alert('Login functionality coming soon!')
                  setIsMobileMenuOpen(false)
                }}
              >
                Login
              </Button>
              <Button 
                className="w-full bg-islamic-primary hover:bg-islamic-primary/90 text-white py-5 text-sm font-poppins"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  const element = document.getElementById('pricing')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}