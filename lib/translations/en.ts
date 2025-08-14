import { TranslationStructure } from './types';

export const en: TranslationStructure = {
  // Navigation
  navigation: {
    preview: 'preview',
    features: 'features',
    howItWorks: 'how it works',
    useCases: 'use cases',
    pricing: 'pricing',
    dashboard: 'Dashboard',
  },

  // Hero Section
  hero: {
    title: 'real time sermon translation',
    subtitle: 'for mosques worldwide',
    cta: {
      primary: 'get started free',
      secondary: 'watch demo',
    },
    steps: {
      step1: {
        title: 'create your mosque account',
        description: 'sign up in minutes and set up your mosque profile with room configurations',
      },
      step2: {
        title: 'create room',
        description: 'set up the room that listens to your sermon and translates it in real-time',
      },
      step3: {
        title: 'press Go Live button',
        description: 'start broadcasting with one click - your sermon is instantly translated',
      },
      step4: {
        title: 'launch display',
        description: 'open the public display that will be visible for all mosque visitors',
      },
    },
    badge: 'break language barriers, unite congregation',
    mainTitle: 'empowering dawah',
    mainTitleGradient: 'through technology',
    subheading: 'transform your mosque into a beacon of inclusive dawah with real-time sermon translation.',
    subheadingHighlight: 'reach hearts in every language.',
    benefits: {
      multiLanguage: 'multi-language',
      realTime: 'real-time',
      inclusive: 'inclusive',
    },
    ctaPricing: 'pricing',
    ctaHowItWorks: 'see how it works',
    howItWorks: {
      badge: 'simple setup process',
      title: 'how bayaan works',
      subtitle: 'get your mosque connected in minutes with our streamlined setup process',
      stepLabel: 'step',
    },
    previewLabel: 'Live preview of the Bayaan public display • Real-time transcription & translation',
  },

  // Preview Section
  preview: {
    publicDisplay: {
      title: 'public display view',
      subtitle: 'what your congregation sees',
      transcription: 'live transcription appears here...',
      camera: 'camera feed',
      translation: 'translation in selected language...',
    },
  },

  // Features Section
  features: {
    title: 'powerful dashboard features',
    subtitle: 'complete control and insights for your mosque\'s translation system with advanced analytics and management tools.',
    tabs: {
      overview: 'overview',
      roomManagement: 'room management',
      sessionHistory: 'session history',
      analytics: 'analytics',
    },
    dashboardCaption: 'experience the intuitive dashboard interface designed for mosque administrators',
    clickToExplore: 'click tabs to explore',
    cards: {
      sessionHistory: {
        title: 'session history & playback',
        description: 'access complete transcription and translation history. review past sermons with timestamps and full multi-language records.',
      },
      exportArchive: {
        title: 'export & archive',
        description: 'download sermon transcripts in pdf, word, or txt formats. create permanent archives for mosque documentation.',
      },
      analyticsDashboard: {
        title: 'analytics dashboard',
        description: 'track attendance, language preferences, and engagement metrics. understand your congregation\'s needs better.',
      },
      multiUserManagement: {
        title: 'multi-user management',
        description: 'manage multiple imams and operators. control access levels and permissions for different mosque staff.',
      },
      liveRoomControl: {
        title: 'live room control',
        description: 'real-time dashboard to monitor active sessions. start, stop, and manage multiple translation rooms simultaneously.',
      },
      publicDisplayManager: {
        title: 'public display manager',
        description: 'configure and customize public display screens. control what visitors see with easy-to-use templates.',
      },
      secureCloudStorage: {
        title: 'secure cloud storage',
        description: 'all sessions backed up securely in the cloud. gdpr compliant with end-to-end encryption.',
      },
      multiLanguageSupport: {
        title: 'multi-language support',
        description: 'support for 15+ languages including arabic, english, dutch, turkish, and more. expandable on request.',
      },
    },
    stats: {
      transcriptionLanguages: 'transcription languages',
      translationLanguages: 'translation languages',
      setupTime: 'minute setup',
      uptime: 'uptime',
    },
  },

  // How It Works Section
  howItWorks: {
    title: 'simple as 1-2-3',
    subtitle: 'get your mosque connected and translating in minutes. no technical expertise needed.',
    steps: {
      setup: {
        title: 'setup your mosque',
        description: 'create your account and configure your mosque\'s rooms in minutes.',
        arabicText: 'أنشئ حسابك',
      },
      share: {
        title: 'share access',
        description: 'generate qr codes for your congregation. they simply scan to join.',
        arabicText: 'شارك الوصول',
      },
      goLive: {
        title: 'Go Live',
        description: 'start translating with one click. expand your dawah impact instantly.',
        arabicText: 'ابدأ البث',
      },
    },
    cta: {
      text: 'join mosques worldwide in making islamic knowledge accessible to all',
      button: 'get started today',
    },
  },

  // Use Cases Section
  useCases: {
    title: 'transform every gathering',
    subtitle: 'from daily prayers to special events, bayaan amplifies your mosque\'s impact.',
    badge: 'dawah opportunities',
    cards: {
      fridayKhutbah: {
        title: 'friday khutbah',
        description: 'ensure every attendee understands the weekly sermon, regardless of their language.',
        impact: 'core dawah',
        features: ['live translation', 'multi-room', 'recording'],
      },
      islamicEducation: {
        title: 'islamic education',
        description: 'make quran classes and hadith studies accessible to all seekers of knowledge.',
        impact: 'knowledge',
        features: ['interactive', 'study materials', 'q&a'],
      },
      communityEvents: {
        title: 'community events',
        description: 'from eid celebrations to iftars, ensure everyone feels included.',
        impact: 'unity',
        features: ['events', 'languages', 'guests'],
      },
      dawahPrograms: {
        title: 'dawah programs',
        description: 'expand outreach to non-arabic speakers. let islam reach every heart.',
        impact: 'expansion',
        features: ['public', 'converts', 'q&a'],
      },
    },
    quote: {
      arabic: 'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',
      translation: 'and we have not sent you, [o muhammad], except as a mercy to the worlds.',
      reference: 'quran 21:107',
    },
  },

  // Testimonials Section
  testimonials: {
    title: 'mosques thriving with bayaan',
    subtitle: 'see how mosques worldwide are expanding their dawah and uniting their communities',
    testimonial1: {
      name: 'Sheikh Ahmad Hassan',
      role: 'Imam, Masjid Al-Noor',
      location: 'Amsterdam, Netherlands',
      content: 'Bayaan has transformed our Friday prayers. Our non-Arabic speaking youth are finally engaged and understanding the khutbah. This is true Dawah in action.',
      highlight: 'Youth engagement increased by 300%',
    },
    testimonial2: {
      name: 'Sister Fatima Al-Rashid',
      role: 'Community Director',
      location: 'London, UK',
      content: 'As a diverse community with over 15 nationalities, Bayaan bridges our language gaps beautifully. It\'s strengthened our bonds and expanded our Dawah reach significantly.',
      highlight: '15+ nationalities united',
    },
    testimonial3: {
      name: 'Brother Yusuf Ibrahim',
      role: 'Mosque Administrator',
      location: 'Brussels, Belgium',
      content: 'The simplicity of setup amazed us. Within minutes, our elderly congregation members were accessing translations on their phones. Technology serving faith perfectly.',
      highlight: 'Setup in under 10 minutes',
    },
    trustBadges: {
      activeMosques: 'active mosques',
      weeklyUsers: 'weekly users',
      uptime: 'uptime',
      avgRating: 'avg rating',
    },
  },

  // Anecdote Section
  anecdote: {
    title: 'from frustration to inspiration',
    story: {
      paragraph1: 'When I was a child, my father would take me to the Friday khutbah every week. I was a restless, hyperactive kid — the kind who found it nearly impossible to sit still for an hour, especially when I didn’t fully understand what was being said.',
      paragraph2: 'Even though Arabic was the language of our home, my vocabulary was limited, and the khatib’s eloquent fusha felt like another world. I’d fidget, daydream, and, I’ll admit, sometimes annoy my father. If something like Bayaan had existed back then — live translations right in front of me — I might have listened more closely and connected more deeply.',
      paragraph3: 'And this isn’t just for non-Arabic speakers. Many Arabic speakers, especially younger generations or those who only speak a dialect, struggle with fusha too. This tool bridges that gap, helping both Arabic and non-Arabic speakers draw closer to the language of the Qur’an.',
      paragraph4: 'I’ve seen how my cousins back home became fluent in English simply by watching English movies with Arabic subtitles. With Bayaan, InshaAllah, we can reverse that — letting people absorb fusha Arabic while following the khutbah with clear, live subtitles.',
    },
    cta: 'join our mission',
    attribution: '— Founder\'s personal story',
  },

  // Pricing Section
  pricing: {
    title: 'simple, transparent pricing',
    subtitle: 'choose a plan that fits your mosque\'s needs. no hidden fees, no surprises.',
    monthlyBilling: 'monthly billing',
    yearlyBilling: 'yearly billing',
    savePercentage: 'save 20%',
    perMonth: '/month',
    perYear: '/year',
    plans: {
      starter: {
        name: 'starter',
        description: 'perfect for small mosques with friday sermons and occasional announcements',
        price: {
          monthly: '€49',
          yearly: '€470',
        },
        features: [
          'up to 100 attendees',
          '1 translation room',
          'friday khutbah support',
          'basic analytics',
          'email support',
          'mobile access',
        ],
        cta: 'get started',
      },
      professional: {
        name: 'professional',
        description: 'ideal for active mosques with regular programs and classes',
        popularBadge: 'most popular',
        price: {
          monthly: '€99',
          yearly: '€950',
        },
        features: [
          'up to 500 attendees',
          '5 translation rooms',
          'all event types',
          'advanced analytics',
          'priority support',
          'public display screens',
          'session recording',
          'export & archive',
        ],
        cta: 'get started',
      },
      enterprise: {
        name: 'enterprise',
        description: 'for large mosques and islamic centers with comprehensive needs',
        price: 'custom',
        features: [
          'unlimited attendees',
          'unlimited rooms',
          'custom integrations',
          'dedicated support',
          'on-premise option',
          'training included',
          'api access',
          'white labeling',
        ],
        cta: 'contact sales',
      },
    },
    faq: {
      title: 'frequently asked questions',
      questions: {
        q1: {
          question: 'can i switch plans anytime?',
          answer: 'yes, you can upgrade or downgrade your plan at any time. changes take effect immediately.',
        },
        q2: {
          question: 'is there a setup fee?',
          answer: 'no, there are no setup fees. you can start using bayaan immediately after signing up.',
        },
        q3: {
          question: 'what languages are supported?',
          answer: 'we support 15+ languages for translation including arabic, english, dutch, turkish, urdu, and more. transcription supports 50+ languages.',
        },
        q4: {
          question: 'do you offer discounts for multiple mosques?',
          answer: 'yes, we offer special pricing for islamic organizations managing multiple mosques. contact us for details.',
        },
      },
    },
  },

  // CTA Section
  cta: {
    title: 'ready to expand your dawah reach?',
    subtitle: 'join mosques worldwide in making islamic knowledge accessible to everyone',
    primaryButton: 'start your free trial',
    secondaryButton: 'book a demo',
    features: {
      feature1: 'no credit card required',
      feature2: '14-day free trial',
      feature3: 'setup in 5 minutes',
    },
    demoAlert: 'demo scheduling coming soon! contact us at demo@bayaan.io',
    ramadanOffer: '🌙 Special Ramadan offer: 50% off for the first 3 months',
    blessing: 'May Allah bless you',
  },

  // Footer
  footer: {
    tagline: 'empowering mosques worldwide to spread the message of islam through innovative translation technology.',
    sections: {
      product: {
        title: 'product',
        links: {
          features: 'features',
          pricing: 'pricing',
          demo: 'demo',
          api: 'api',
        },
      },
      mosque: {
        title: 'for mosques',
        links: {
          useCases: 'use cases',
          successStories: 'success stories',
          resources: 'resources',
          support: 'support',
        },
      },
      company: {
        title: 'company',
        links: {
          about: 'about',
          blog: 'blog',
          careers: 'careers',
          contact: 'contact',
        },
      },
      legal: {
        title: 'legal',
        links: {
          privacy: 'privacy',
          terms: 'terms',
          security: 'security',
          compliance: 'compliance',
        },
      },
    },
    contact: {
      email: 'support@bayaan.app',
      phone: '+31 20 123 4567',
      address: 'amsterdam, netherlands',
    },
    copyright: '© 2024 bayaan. all rights reserved. built with',
    builtWith: 'built with',
    forTheUmmah: 'for the ummah',
    quranicVerse: {
      arabic: 'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ',
      translation: 'and cooperate in righteousness and piety',
      reference: 'quran 5:2',
    },
  },

  // Common
  common: {
    loading: 'loading...',
    error: 'error',
    retry: 'retry',
    learnMore: 'learn more',
    getStarted: 'get started',
    watchDemo: 'watch demo',
    bookDemo: 'book demo',
    contactSales: 'contact sales',
    comingSoon: 'coming soon',
    new: 'new',
    popular: 'popular',
    limited: 'limited',
    free: 'free',
    unlimited: 'unlimited',
    custom: 'custom',
    included: 'included',
    notIncluded: 'not included',
    yes: 'yes',
    no: 'no',
    and: 'and',
    or: 'or',
    more: 'more',
    less: 'less',
    view: 'view',
    close: 'close',
    cancel: 'cancel',
    confirm: 'confirm',
    download: 'download',
    share: 'share',
    copy: 'copy',
    copied: 'copied!',
  },
};