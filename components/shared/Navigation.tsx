"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Preview", href: "#preview" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const [activeSection, setActiveSection] = useState("#preview") // Default to preview section

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      setIsAtTop(window.scrollY < window.innerHeight - 100) // Still in fullscreen hero
      
      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 100 // Offset for header height
      
      // Check if we're at the very top (preview section)
      if (window.scrollY < 100) {
        setActiveSection("#preview")
        return
      }
      
      // Check other sections
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
    
    handleScroll() // Call once to set initial state
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
      const offset = 80 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen 
        ? "bg-islamic-light/95 backdrop-blur-md shadow-lg" 
        : isAtTop 
          ? "bg-transparent" 
          : "bg-islamic-light/95 backdrop-blur-md shadow-lg"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - text only */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="cursor-pointer"
          >
            <span className={`text-2xl md:text-3xl font-bold font-poppins ${isAtTop && !isScrolled ? 'text-islamic-dark' : 'text-islamic-dark'}`}>bayaan</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative py-2 transition-all duration-300 font-medium font-poppins text-sm xl:text-base ${
                  activeSection === item.href 
                    ? 'text-islamic-primary' 
                    : isAtTop && !isScrolled 
                      ? 'text-gray-700 hover:text-islamic-primary' 
                      : 'text-gray-700 hover:text-islamic-primary'
                }`}
              >
                {item.label}
                {/* Elegant underline indicator */}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-islamic-primary to-gold-400"
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: activeSection === item.href ? "100%" : "0%"
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                />
                {/* Golden dot indicator */}
                <motion.span
                  className="absolute -right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gold-400 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: activeSection === item.href ? 1 : 0,
                    scale: activeSection === item.href ? 1 : 0
                  }}
                  transition={{ 
                    duration: 0.2,
                    ease: "easeOut"
                  }}
                />
              </a>
            ))}
          </div>

          {/* CTA Buttons - hidden on small mobile */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              variant="ghost" 
              className={`font-poppins ${isAtTop && !isScrolled ? 'text-gray-700 hover:bg-gray-100/20' : 'text-islamic-primary hover:bg-islamic-primary/5'}`}
              onClick={() => alert('Login functionality coming soon!')}
            >
              Login
            </Button>
            <Button 
              className={`font-poppins ${isAtTop && !isScrolled ? 'bg-islamic-primary hover:bg-islamic-primary/90 text-white' : 'bg-islamic-primary hover:bg-islamic-primary/90 text-white'} rounded-full px-6`}
              onClick={() => {
                const element = document.getElementById('pricing')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg ${isAtTop && !isScrolled ? 'hover:bg-gray-100/20' : 'hover:bg-gray-100'} transition-colors`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isAtTop && !isScrolled && !isMobileMenuOpen ? 'text-islamic-dark' : 'text-islamic-dark'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isAtTop && !isScrolled ? 'text-islamic-dark' : 'text-islamic-dark'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu - full screen overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-islamic-light z-50 overflow-y-auto"
          >
            <div className="px-4 py-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative block px-4 py-4 text-lg font-poppins transition-all duration-300 rounded-lg ${
                    activeSection === item.href
                      ? 'bg-islamic-primary/10 text-islamic-primary font-semibold'
                      : 'text-gray-700 hover:bg-islamic-primary/5 hover:text-islamic-primary'
                  }`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span className="relative">
                    {item.label}
                    {/* Active indicator for mobile */}
                    {activeSection === item.href && (
                      <motion.span
                        className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-islamic-primary to-gold-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </span>
                  {/* Golden accent dot for mobile */}
                  <motion.span
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-gold-400 rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: activeSection === item.href ? 1 : 0,
                      scale: activeSection === item.href ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
              <div className="mt-6 space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full py-6 text-base font-poppins"
                  onClick={() => alert('Login functionality coming soon!')}
                >
                  Login
                </Button>
                <Button 
                  className="w-full bg-islamic-primary hover:bg-islamic-primary/90 text-white py-6 text-base font-poppins"
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
      </div>
    </nav>
  )
}