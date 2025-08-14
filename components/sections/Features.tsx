"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { History, FileDown, BarChart3, Users, Radio, Monitor, Lock, Globe, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useTranslation } from "@/hooks/useTranslation"

export function Features() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('overview')
  
  const features = [
    {
      icon: History,
      title: t.features.cards.sessionHistory.title,
      description: t.features.cards.sessionHistory.description,
      color: "text-islamic-primary",
      bgColor: "bg-emerald-50",
    },
    {
      icon: FileDown,
      title: t.features.cards.exportArchive.title,
      description: t.features.cards.exportArchive.description,
      color: "text-gold-500",
      bgColor: "bg-gold-50",
    },
    {
      icon: Radio,
      title: t.features.cards.liveRoomControl.title,
      description: t.features.cards.liveRoomControl.description,
      color: "text-islamic-primary",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Monitor,
      title: t.features.cards.publicDisplayManager.title,
      description: t.features.cards.publicDisplayManager.description,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Globe,
      title: t.features.cards.multiLanguageSupport.title,
      description: t.features.cards.multiLanguageSupport.description,
      color: "text-islamic-primary",
      bgColor: "bg-emerald-50",
    },
  ]
  
  const dashboardTabs = [
    { id: 'overview', label: t.features.tabs.overview, icon: BarChart3, screenshot: '/screenshots/OverviewLight.png' },
    { id: 'rooms', label: t.features.tabs.roomManagement, icon: Radio, screenshot: '/screenshots/AdminViewLight.png' },
    { id: 'sessions', label: t.features.tabs.sessionHistory, icon: History, screenshot: '/screenshots/SessionHistoryLight.png' },
    { id: 'analytics', label: t.features.tabs.analytics, icon: BarChart3, screenshot: null }, // Placeholder for 4th screenshot
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-islamic-light relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-3 md:mb-4 text-islamic-dark"
            style={{ letterSpacing: '-0.058em' }}
          >
            {t.features.title}
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {t.features.subtitle}
          </p>
        </motion.div>

        {/* Dashboard Showcase Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 md:mb-20"
        >
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {dashboardTabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-islamic-primary text-white shadow-lg scale-105'
                      : 'bg-white/70 text-gray-600 hover:bg-white hover:shadow-md'
                  }`}
                  whileHover={{ scale: activeTab === tab.id ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Dashboard Preview Window */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
            >
              {/* Browser Chrome */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white rounded px-3 py-1 text-xs text-gray-500 flex items-center gap-2">
                    <Lock className="w-3 h-3" />
                    dashboard.bayaan.ai/{activeTab}
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="aspect-[16/9] bg-gradient-to-br from-cream-50 to-white overflow-hidden">
                {dashboardTabs.map((tab) => (
                  <div key={tab.id} className={activeTab === tab.id ? 'block h-full' : 'hidden'}>
                    {tab.screenshot ? (
                      <img
                        src={tab.screenshot}
                        alt={`${tab.label} Dashboard View`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      // Fallback skeleton for Analytics tab (4th screenshot to be added)
                      <div className="h-full p-6 md:p-8">
                        <div className="h-full grid grid-cols-2 gap-6">
                          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                            <div className="h-3 bg-gray-200 rounded w-1/2 mb-4" />
                            <div className="aspect-square bg-gradient-to-br from-islamic-primary/10 to-gold-400/10 rounded-full" />
                          </div>
                          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                            <div className="h-3 bg-gray-200 rounded w-1/2 mb-4" />
                            <div className="space-y-2">
                              {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex items-center gap-2">
                                  <div className="h-4 bg-islamic-primary/20 rounded" style={{ width: `${100 - i * 20}%` }} />
                                  <div className="h-2 bg-gray-200 rounded w-8" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Interactive Hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-4 right-4 bg-islamic-primary text-white px-3 py-1.5 rounded-full text-xs flex items-center gap-1 shadow-lg"
              >
                <Sparkles className="w-3 h-3" />
                {t.features.clickToExplore}
              </motion.div>
            </motion.div>

            {/* Caption */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center text-sm text-gray-500 mt-4"
            >
              {t.features.dashboardCaption}
            </motion.p>
          </div>
        </motion.div>

        {/* Mobile-optimized grid - 4 columns on xl screens for 8 features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-5 md:p-6 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-cream-50">
                <div className={`inline-flex p-2.5 md:p-3 rounded-xl ${feature.bgColor} mb-3 md:mb-4`}>
                  <feature.icon className={`w-5 h-5 md:w-6 md:h-6 ${feature.color}`} />
                </div>
                <h3 
                  className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-islamic-dark"
                  style={{ letterSpacing: '-0.058em' }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Statistics - mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-20 bg-gradient-to-r from-islamic-primary to-emerald-600 rounded-xl md:rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">50+</div>
              <div className="text-sm md:text-base text-cream-100">{t.features.stats.transcriptionLanguages}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">Unlimited</div>
              <div className="text-sm md:text-base text-cream-100">{t.features.stats.translationLanguages}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">≥95%</div>
              <div className="text-sm md:text-base text-cream-100">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">~2.5s</div>
              <div className="text-sm md:text-base text-cream-100">Translation Latency</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}