export interface TranslationStructure {
  // Navigation
  navigation: {
    preview: string;
    features: string;
    howItWorks: string;
    useCases: string;
    pricing: string;
    dashboard: string;
  };

  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    cta: {
      primary: string;
      secondary: string;
    };
    steps: {
      step1: {
        title: string;
        description: string;
      };
      step2: {
        title: string;
        description: string;
      };
      step3: {
        title: string;
        description: string;
      };
      step4: {
        title: string;
        description: string;
      };
    };
    badge: string;
    mainTitle: string;
    mainTitleGradient: string;
    subheading: string;
    subheadingHighlight: string;
    benefits: {
      multiLanguage: string;
      realTime: string;
      inclusive: string;
    };
    ctaPricing: string;
    ctaHowItWorks: string;
    howItWorks: {
      badge: string;
      title: string;
      subtitle: string;
      stepLabel: string;
    };
    previewLabel: string;
  };

  // Preview Section
  preview: {
    publicDisplay: {
      title: string;
      subtitle: string;
      transcription: string;
      camera: string;
      translation: string;
    };
  };

  // Features Section
  features: {
    title: string;
    subtitle: string;
    tabs: {
      overview: string;
      roomManagement: string;
      sessionHistory: string;
      analytics: string;
    };
    dashboardCaption: string;
    clickToExplore: string;
    cards: {
      sessionHistory: {
        title: string;
        description: string;
      };
      exportArchive: {
        title: string;
        description: string;
      };
      analyticsDashboard: {
        title: string;
        description: string;
      };
      multiUserManagement: {
        title: string;
        description: string;
      };
      liveRoomControl: {
        title: string;
        description: string;
      };
      publicDisplayManager: {
        title: string;
        description: string;
      };
      secureCloudStorage: {
        title: string;
        description: string;
      };
      multiLanguageSupport: {
        title: string;
        description: string;
      };
    };
    stats: {
      transcriptionLanguages: string;
      translationLanguages: string;
      setupTime: string;
      uptime: string;
    };
  };

  // How It Works Section
  howItWorks: {
    title: string;
    subtitle: string;
    steps: {
      setup: {
        title: string;
        description: string;
        arabicText: string;
      };
      share: {
        title: string;
        description: string;
        arabicText: string;
      };
      goLive: {
        title: string;
        description: string;
        arabicText: string;
      };
    };
    cta: {
      text: string;
      button: string;
    };
  };

  // Use Cases Section
  useCases: {
    title: string;
    subtitle: string;
    badge: string;
    cards: {
      fridayKhutbah: {
        title: string;
        description: string;
        impact: string;
        features: string[];
      };
      islamicEducation: {
        title: string;
        description: string;
        impact: string;
        features: string[];
      };
      communityEvents: {
        title: string;
        description: string;
        impact: string;
        features: string[];
      };
      dawahPrograms: {
        title: string;
        description: string;
        impact: string;
        features: string[];
      };
    };
    quote: {
      arabic: string;
      translation: string;
      reference: string;
    };
  };

  // Testimonials Section
  testimonials: {
    title: string;
    subtitle: string;
    testimonial1: {
      name: string;
      role: string;
      location: string;
      content: string;
      highlight: string;
    };
    testimonial2: {
      name: string;
      role: string;
      location: string;
      content: string;
      highlight: string;
    };
    testimonial3: {
      name: string;
      role: string;
      location: string;
      content: string;
      highlight: string;
    };
    trustBadges: {
      activeMosques: string;
      weeklyUsers: string;
      uptime: string;
      avgRating: string;
    };
  };

  // Anecdote Section
  anecdote: {
    title: string;
    story: {
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
      paragraph4: string;
    };
    attribution: string;
  };

  // Pricing Section
  pricing: {
    title: string;
    subtitle: string;
    monthlyBilling: string;
    yearlyBilling: string;
    savePercentage: string;
    perMonth: string;
    perYear: string;
    plans: {
      starter: {
        name: string;
        description: string;
        price: {
          monthly: string;
          yearly: string;
        };
        features: string[];
        cta: string;
      };
      professional: {
        name: string;
        description: string;
        popularBadge: string;
        price: {
          monthly: string;
          yearly: string;
        };
        features: string[];
        cta: string;
      };
      enterprise: {
        name: string;
        description: string;
        price: string;
        features: string[];
        cta: string;
      };
    };
    faq: {
      title: string;
      questions: {
        q1: {
          question: string;
          answer: string;
        };
        q2: {
          question: string;
          answer: string;
        };
        q3: {
          question: string;
          answer: string;
        };
        q4: {
          question: string;
          answer: string;
        };
      };
    };
  };

  // CTA Section
  cta: {
    title: string;
    subtitle: string;
    primaryButton: string;
    secondaryButton: string;
    features: {
      feature1: string;
      feature2: string;
      feature3: string;
    },
    demoAlert: string;
    ramadanOffer: string;
    blessing: string;
  };

  // Footer
  footer: {
    tagline: string;
    sections: {
      product: {
        title: string;
        links: {
          features: string;
          pricing: string;
          demo: string;
          api: string;
        };
      };
      mosque: {
        title: string;
        links: {
          useCases: string;
          successStories: string;
          resources: string;
          support: string;
        };
      };
      company: {
        title: string;
        links: {
          about: string;
          blog: string;
          careers: string;
          contact: string;
        };
      };
      legal: {
        title: string;
        links: {
          privacy: string;
          terms: string;
          security: string;
          compliance: string;
        };
      };
    };
    contact: {
      email: string;
      phone: string;
      address: string;
    };
    copyright: string;
    builtWith: string;
    forTheUmmah: string;
    quranicVerse: {
      arabic: string;
      translation: string;
      reference: string;
    };
  };

  // Common
  common: {
    loading: string;
    error: string;
    retry: string;
    learnMore: string;
    getStarted: string;
    watchDemo: string;
    bookDemo: string;
    contactSales: string;
    comingSoon: string;
    new: string;
    popular: string;
    limited: string;
    free: string;
    unlimited: string;
    custom: string;
    included: string;
    notIncluded: string;
    yes: string;
    no: string;
    and: string;
    or: string;
    more: string;
    less: string;
    view: string;
    close: string;
    cancel: string;
    confirm: string;
    download: string;
    share: string;
    copy: string;
    copied: string;
  };
}

export type TranslationKey = keyof TranslationStructure;
export type LanguageCode = 'en' | 'ar' | 'nl';