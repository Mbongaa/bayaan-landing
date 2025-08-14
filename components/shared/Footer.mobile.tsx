"use client"

import React from "react"
import { Heart, Mail, MapPin, Phone } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export function Footer() {
  const { t } = useTranslation()
  
  const footerLinks = {
    product: [
      { label: t.footer.sections.product.links.features, href: "#features" },
      { label: t.footer.sections.product.links.pricing, href: "#pricing" },
      { label: t.footer.sections.product.links.demo, href: "#demo" },
      { label: t.footer.sections.product.links.api, href: "#api" },
    ],
    mosque: [
      { label: t.footer.sections.mosque.links.useCases, href: "#use-cases" },
      { label: t.footer.sections.mosque.links.successStories, href: "#testimonials" },
      { label: t.footer.sections.mosque.links.resources, href: "#resources" },
      { label: t.footer.sections.mosque.links.support, href: "#support" },
    ],
    company: [
      { label: t.footer.sections.company.links.about, href: "#about" },
      { label: t.footer.sections.company.links.blog, href: "#blog" },
      { label: t.footer.sections.company.links.careers, href: "#careers" },
      { label: t.footer.sections.company.links.contact, href: "#contact" },
    ],
    legal: [
      { label: t.footer.sections.legal.links.privacy, href: "#privacy" },
      { label: t.footer.sections.legal.links.terms, href: "#terms" },
      { label: t.footer.sections.legal.links.security, href: "#security" },
      { label: t.footer.sections.legal.links.compliance, href: "#compliance" },
    ],
  }
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    // Handle internal navigation
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '')
      const element = document.getElementById(targetId)
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        // For links that don't have sections yet
        alert(`${targetId.charAt(0).toUpperCase() + targetId.slice(1)} section coming soon!`)
      }
    }
  }

  return (
    <footer className="bg-islamic-dark text-cream-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-islamic-primary to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span 
                className="text-2xl font-bold text-white"
                style={{ letterSpacing: '-0.058em' }}
              >bayaan</span>
            </div>
            <p className="text-cream-200 mb-4 leading-relaxed">
              empowering mosques worldwide to spread the message of islam 
              through innovative translation technology.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400" />
                <span>support@bayaan.app</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400" />
                <span>+31 20 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>amsterdam, netherlands</span>
              </div>
            </div>
          </div>

          {/* Links sections */}
          <div>
            <h3 className="font-semibold text-white mb-4">product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-cream-200 hover:text-gold-400 transition-colors text-sm cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">for mosques</h3>
            <ul className="space-y-2">
              {footerLinks.mosque.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-cream-200 hover:text-gold-400 transition-colors text-sm cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-cream-200 hover:text-gold-400 transition-colors text-sm cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-cream-200 hover:text-gold-400 transition-colors text-sm cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-cream-200">
                © 2024 bayaan. all rights reserved. built with{" "}
                <Heart className="inline w-4 h-4 text-red-500" /> for the ummah
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xl font-arabic text-gold-400 mb-1">
                وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ
              </p>
              <p className="text-xs text-cream-300">
                "and cooperate in righteousness and piety" - quran 5:2
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}