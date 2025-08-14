import { TranslationStructure } from './types';

// TODO: Fill in Dutch translations
// This file is ready for Gemini to complete with proper Dutch translations
// All English text is provided as comments for reference

export const nl: TranslationStructure = {
  // Navigation
  navigation: {
    preview: 'voorbeeld', // 'preview'
    features: 'functies', // 'features'
    howItWorks: 'hoe het werkt', // 'how it works'
    useCases: 'gebruiksscenario\'s', // 'use cases'
    pricing: 'prijzen', // 'pricing'
    dashboard: 'Dashboard', // 'Dashboard'
  },

  // Hero Section
  hero: {
    title: 'realtime preek vertaling', // 'real time sermon translation'
    subtitle: 'voor moskeeën wereldwijd', // 'for mosques worldwide'
    cta: {
      primary: 'start gratis', // 'get started free'
      secondary: 'bekijk demo', // 'watch demo'
    },
    steps: {
      step1: {
        title: 'maak je moskee-account aan', // 'create your mosque account'
        description: 'meld je aan in enkele minuten en stel je moskeeprofiel in met kamerconfiguraties', // 'sign up in minutes and set up your mosque profile with room configurations'
      },
      step2: {
        title: 'maak een kamer aan', // 'create room'
        description: 'stel de kamer in die naar je preek luistert en deze in realtime vertaalt', // 'set up the room that listens to your sermon and translates it in real-time'
      },
      step3: {
        title: 'druk op de Go Live knop', // 'press Go Live button'
        description: 'start de uitzending met één klik - je preek wordt direct vertaald', // 'start broadcasting with one click - your sermon is instantly translated'
      },
      step4: {
        title: 'start weergave', // 'launch display'
        description: 'open het openbare scherm dat zichtbaar zal zijn voor alle moskeebezoekers', // 'open the public display that will be visible for all mosque visitors'
      },
    },
    badge: 'doorbreek taalbarrières, verenig de congregatie', // 'break language barriers, unite congregation'
    mainTitle: 'dawah versterken', // 'empowering dawah'
    mainTitleGradient: 'door technologie', // 'through technology'
    subheading: 'transformeer je moskee in een baken van inclusieve dawah met realtime preekvertaling.', // 'transform your mosque into a beacon of inclusive dawah with real-time sermon translation.'
    subheadingHighlight: 'bereik harten in elke taal.', // 'reach hearts in every language.'
    benefits: {
      multiLanguage: 'meertalig', // 'multi-language'
      realTime: 'realtime', // 'real-time'
      inclusive: 'inclusief', // 'inclusive'
    },
    ctaPricing: 'prijzen', // 'pricing'
    ctaHowItWorks: 'bekijk hoe het werkt', // 'see how it works'
    howItWorks: {
      badge: 'eenvoudig installatieproces', // 'simple setup process'
      title: 'hoe bayaan werkt', // 'how bayaan works'
      subtitle: 'verbind je moskee in enkele minuten met ons gestroomlijnde installatieproces', // 'get your mosque connected in minutes with our streamlined setup process'
      stepLabel: 'stap', // 'step'
    },
    previewLabel: 'Live voorvertoning van de Bayaan openbare weergave • Realtime transcriptie & vertaling', // 'Live preview of the Bayaan public display • Real-time transcription & translation'
  },

  // Preview Section
  preview: {
    publicDisplay: {
      title: 'openbare weergave', // 'public display view'
      subtitle: 'wat je gemeenschap ziet', // 'what your congregation sees'
      transcription: 'live transcriptie verschijnt hier...', // 'live transcription appears here...'
      camera: 'camerabeeld', // 'camera feed'
      translation: 'vertaling in geselecteerde taal...', // 'translation in selected language...'
    },
  },

  // Features Section
  features: {
    title: 'krachtige dashboard functies', // 'powerful dashboard features'
    subtitle: 'volledige controle en inzichten voor het vertaalsysteem van je moskee met geavanceerde analyses en beheertools.', // 'complete control and insights for your mosque\'s translation system with advanced analytics and management tools.'
    tabs: {
      overview: 'overzicht', // 'overview'
      roomManagement: 'kamerbeheer', // 'room management'
      sessionHistory: 'sessiegeschiedenis', // 'session history'
      analytics: 'analyses', // 'analytics'
    },
    dashboardCaption: 'ervaar de intuïtieve dashboardinterface ontworpen voor moskeebestuurders', // 'experience the intuitive dashboard interface designed for mosque administrators'
    clickToExplore: 'klik op tabs om te verkennen', // 'click tabs to explore'
    cards: {
      sessionHistory: {
        title: 'sessiegeschiedenis & afspelen', // 'session history & playback'
        description: 'toegang tot volledige transcriptie- en vertaalgeschiedenis. bekijk preken uit het verleden met tijdstempels en volledige meertalige records.', // 'access complete transcription and translation history. review past sermons with timestamps and full multi-language records.'
      },
      exportArchive: {
        title: 'exporteren & archiveren', // 'export & archive'
        description: 'download preek transcripties in pdf, word, of txt formaten. maak permanente archieven voor moskeedocumentatie.', // 'download sermon transcripts in pdf, word, or txt formats. create permanent archives for mosque documentation.'
      },
      analyticsDashboard: {
        title: 'analyse-dashboard', // 'analytics dashboard'
        description: 'volg aanwezigheid, taalvoorkeuren en betrokkenheidsstatistieken. begrijp de behoeften van je gemeenschap beter.', // 'track attendance, language preferences, and engagement metrics. understand your congregation\'s needs better.'
      },
      multiUserManagement: {
        title: 'beheer van meerdere gebruikers', // 'multi-user management'
        description: 'beheer meerdere imams en operators. controleer toegangsniveaus en permissies voor verschillend moskeepersoneel.', // 'manage multiple imams and operators. control access levels and permissions for different mosque staff.'
      },
      liveRoomControl: {
        title: 'live kamer controle', // 'live room control'
        description: 'realtime dashboard om actieve sessies te monitoren. start, stop en beheer meerdere vertaalkamers tegelijkertijd.', // 'real-time dashboard to monitor active sessions. start, stop, and manage multiple translation rooms simultaneously.'
      },
      publicDisplayManager: {
        title: 'beheer openbare weergave', // 'public display manager'
        description: 'configureer en pas openbare weergaveschermen aan. bepaal wat bezoekers zien met gebruiksvriendelijke sjablonen.', // 'configure and customize public display screens. control what visitors see with easy-to-use templates.'
      },
      secureCloudStorage: {
        title: 'beveiligde cloudopslag', // 'secure cloud storage'
        description: 'alle sessies veilig geback-upt in de cloud. gdpr-conform met end-to-end encryptie.', // 'all sessions backed up securely in the cloud. gdpr compliant with end-to-end encryption.'
      },
      multiLanguageSupport: {
        title: 'meertalige ondersteuning', // 'multi-language support'
        description: 'ondersteuning voor 15+ talen, waaronder arabisch, engels, nederlands, turks en meer. uitbreidbaar op aanvraag.', // 'support for 15+ languages including arabic, english, dutch, turkish, and more. expandable on request.'
      },
    },
    stats: {
      transcriptionLanguages: 'transcriptietalen', // 'transcription languages'
      translationLanguages: 'vertaaltalen', // 'translation languages'
      setupTime: 'minuut installatie', // 'minute setup'
      uptime: 'uptime', // 'uptime'
    },
  },

  // How It Works Section
  howItWorks: {
    title: 'zo simpel als 1-2-3', // 'simple as 1-2-3'
    subtitle: 'verbind je moskee en begin met vertalen in minuten. geen technische expertise nodig.', // 'get your mosque connected and translating in minutes. no technical expertise needed.'
    steps: {
      setup: {
        title: 'stel je moskee in', // 'setup your mosque'
        description: 'maak je account aan en configureer de kamers van je moskee in enkele minuten.', // 'create your account and configure your mosque\'s rooms in minutes.'
        arabicText: 'أنشئ حسابك', // Keep as is - Arabic text
      },
      share: {
        title: 'deel toegang', // 'share access'
        description: 'genereer qr-codes voor je gemeenschap. ze scannen eenvoudig om deel te nemen.', // 'generate qr codes for your congregation. they simply scan to join.'
        arabicText: 'شارك الوصول', // Keep as is - Arabic text
      },
      goLive: {
        title: 'Go Live', // 'Go Live'
        description: 'begin met vertalen met één klik. vergroot direct je dawah-impact.', // 'start translating with one click. expand your dawah impact instantly.'
        arabicText: 'ابدأ البث', // Keep as is - Arabic text
      },
    },
    cta: {
      text: 'sluit je aan bij moskeeën wereldwijd om islamitische kennis voor iedereen toegankelijk te maken', // 'join mosques worldwide in making islamic knowledge accessible to all'
      button: 'start vandaag nog', // 'get started today'
    },
  },

  // Use Cases Section
  useCases: {
    title: 'transformeer elke bijeenkomst', // 'transform every gathering'
    subtitle: 'van dagelijkse gebeden tot speciale evenementen, bayaan versterkt de impact van je moskee.', // 'from daily prayers to special events, bayaan amplifies your mosque\'s impact.'
    badge: 'dawah-kansen', // 'dawah opportunities'
    cards: {
      fridayKhutbah: {
        title: 'vrijdag khutbah', // 'friday khutbah'
        description: 'zorg ervoor dat elke aanwezige de wekelijkse preek begrijpt, ongeacht hun taal.', // 'ensure every attendee understands the weekly sermon, regardless of their language.'
        impact: 'kern dawah', // 'core dawah'
        features: ['live vertaling', 'meerdere kamers', 'opname'], // ['live translation', 'multi-room', 'recording']
      },
      islamicEducation: {
        title: 'islamitisch onderwijs', // 'islamic education'
        description: 'maak koranlessen en hadithstudies toegankelijk voor alle zoekers naar kennis.', // 'make quran classes and hadith studies accessible to all seekers of knowledge.'
        impact: 'kennis', // 'knowledge'
        features: ['interactief', 'studiemateriaal', 'q&a'], // ['interactive', 'study materials', 'q&a']
      },
      communityEvents: {
        title: 'gemeenschapsevenementen', // 'community events'
        description: 'van eid-vieringen tot iftars, zorg ervoor dat iedereen zich inbegrepen voelt.', // 'from eid celebrations to iftars, ensure everyone feels included.'
        impact: 'eenheid', // 'unity'
        features: ['evenementen', 'talen', 'gasten'], // ['events', 'languages', 'guests']
      },
      dawahPrograms: {
        title: 'dawah-programma\'s', // 'dawah programs'
        description: 'breid de outreach uit naar niet-arabisch sprekenden. laat de islam elk hart bereiken.', // 'expand outreach to non-arabic speakers. let islam reach every heart.'
        impact: 'uitbreiding', // 'expansion'
        features: ['openbaar', 'bekeerlingen', 'q&a'], // ['public', 'converts', 'q&a']
      },
    },
    quote: {
      arabic: 'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ', // Keep as is - Arabic Quranic verse
      translation: 'en wij hebben jou, [o muhammad], slechts als een genade voor de werelden gezonden.', // 'and we have not sent you, [o muhammad], except as a mercy to the worlds.'
      reference: 'koran 21:107', // 'quran 21:107'
    },
  },

  // Testimonials Section
  testimonials: {
    title: 'moskeeën die bloeien met bayaan', // 'mosques thriving with bayaan'
    subtitle: 'zie hoe moskeeën wereldwijd hun dawah uitbreiden en hun gemeenschappen verenigen', // 'see how mosques worldwide are expanding their dawah and uniting their communities'
    testimonial1: {
      name: 'Sheikh Ahmad Hassan', // Keep name as is
      role: 'Imam, Masjid Al-Noor', // 'Imam, Masjid Al-Noor'
      location: 'Amsterdam, Nederland', // 'Amsterdam, Netherlands'
      content: 'Bayaan heeft onze vrijdaggebeden getransformeerd. Onze niet-arabisch sprekende jongeren zijn eindelijk betrokken en begrijpen de khutbah. Dit is echte dawah in actie.', // 'Bayaan has transformed our Friday prayers. Our non-Arabic speaking youth are finally engaged and understanding the khutbah. This is true Dawah in action.'
      highlight: 'jongerenbetrokkenheid met 300% toegenomen', // 'Youth engagement increased by 300%'
    },
    testimonial2: {
      name: 'Sister Fatima Al-Rashid', // Keep name as is
      role: 'gemeenschapsdirecteur', // 'Community Director'
      location: 'Londen, VK', // 'London, UK'
      content: 'als een diverse gemeenschap met meer dan 15 nationaliteiten, overbrugt bayaan onze taalkloven prachtig. het heeft onze banden versterkt en ons dawah-bereik aanzienlijk vergroot.', // 'As a diverse community with over 15 nationalities, Bayaan bridges our language gaps beautifully. It\'s strengthened our bonds and expanded our Dawah reach significantly.'
      highlight: '15+ nationaliteiten verenigd', // '15+ nationalities united'
    },
    testimonial3: {
      name: 'Brother Yusuf Ibrahim', // Keep name as is
      role: 'moskeebestuurder', // 'Mosque Administrator'
      location: 'Brussel, België', // 'Brussels, Belgium'
      content: 'de eenvoud van de installatie verbaasde ons. binnen enkele minuten hadden onze oudere gemeenteleden toegang tot vertalingen op hun telefoons. technologie die het geloof perfect dient.', // 'The simplicity of setup amazed us. Within minutes, our elderly congregation members were accessing translations on their phones. Technology serving faith perfectly.'
      highlight: 'installatie in minder dan 10 minuten', // 'Setup in under 10 minutes'
    },
    trustBadges: {
      activeMosques: 'actieve moskeeën', // 'active mosques'
      weeklyUsers: 'wekelijkse gebruikers', // 'weekly users'
      uptime: 'uptime', // 'uptime'
      avgRating: 'gem. beoordeling', // 'avg rating'
    },
  },

  // Anecdote Section
  anecdote: {
    title: 'van frustratie tot inspiratie', // 'from frustration to inspiration'
    story: {
      paragraph1: 'Toen ik een kind was, nam mijn vader me elke week mee naar de vrijdagse khutbah. Ik was een rusteloos, hyperactief kind — het soort dat het bijna onmogelijk vond om een uur stil te zitten, vooral als ik niet helemaal begreep wat er werd gezegd.',
      paragraph2: 'Hoewel Arabisch de taal van ons huis was, was mijn woordenschat beperkt, en de welsprekende fusha van de khatib voelde als een andere wereld. Ik zou friemelen, dagdromen en, ik geef toe, soms mijn vader irriteren. Als zoiets als Bayaan toen had bestaan - live vertalingen recht voor me - had ik misschien beter geluisterd en me dieper verbonden gevoeld.',
      paragraph3: 'En dit is niet alleen voor niet-Arabisch sprekenden. Veel Arabisch sprekenden, vooral jongere generaties of degenen die alleen een dialect spreken, hebben ook moeite met fusha. Deze tool overbrugt die kloof en helpt zowel Arabisch- als niet-Arabisch sprekenden dichter bij de taal van de Koran te komen.',
      paragraph4: 'Ik heb gezien hoe mijn neven en nichten thuis vloeiend Engels leerden door simpelweg Engelse films met Arabische ondertiteling te kijken. Met Bayaan, InshaAllah, kunnen we dat omkeren - mensen fusha Arabisch laten absorberen terwijl ze de khutbah volgen met duidelijke, live ondertitels.',
    },
    attribution: '— persoonlijk verhaal van de oprichter', // '— Founder\'s personal story'
  },

  // Pricing Section
  pricing: {
    title: 'eenvoudige, transparante prijzen', // 'simple, transparent pricing'
    subtitle: 'kies een plan dat past bij de behoeften van je moskee. geen verborgen kosten, geen verrassingen.', // 'choose a plan that fits your mosque\'s needs. no hidden fees, no surprises.'
    monthlyBilling: 'maandelijkse facturering', // 'monthly billing'
    yearlyBilling: 'jaarlijkse facturering', // 'yearly billing'
    savePercentage: 'bespaar 20%', // 'save 20%'
    perMonth: '/maand', // '/month'
    perYear: '/jaar', // '/year'
    plans: {
      starter: {
        name: 'starter', // 'starter'
        description: 'perfect voor kleine moskeeën met vrijdagpreken en incidentele aankondigingen', // 'perfect for small mosques with friday sermons and occasional announcements'
        price: {
          monthly: '€49', // Keep price as is
          yearly: '€470', // Keep price as is
        },
        features: [
          '1 vertaalkamer', // '1 translation room'
          'vrijdag khutbah ondersteuning', // 'friday khutbah support'
          'basisanalyses', // 'basic analytics'
          'e-mailondersteuning', // 'email support'
          'mobiele toegang', // 'mobile access'
        ],
        includedHours: '8', // '8 hours'
        additionalInfo: '€7 per uur', // '€7 per hour'
        cta: 'start nu', // 'get started'
      },
      professional: {
        name: 'professioneel', // 'professional'
        description: 'ideaal voor actieve moskeeën met regelmatige programma\'s en lessen', // 'ideal for active mosques with regular programs and classes'
        popularBadge: 'meest populair', // 'most popular'
        price: {
          monthly: '€99', // Keep price as is
          yearly: '€950', // Keep price as is
        },
        features: [
          '5 vertaalkamers', // '5 translation rooms'
          'geavanceerde analyses', // 'advanced analytics'
          'prioriteitsondersteuning', // 'priority support'
          'openbare weergaveschermen', // 'public display screens'
          'sessieopname', // 'session recording'
          'exporteren & archiveren', // 'export & archive'
        ],
        includedHours: '20', // '20 hours'
        additionalInfo: '€5 per uur', // '€5 per hour'
        cta: 'start nu', // 'get started'
      },
      enterprise: {
        name: 'enterprise', // 'enterprise'
        description: 'voor grote moskeeën en islamitische centra met uitgebreide behoeften', // 'for large mosques and islamic centers with comprehensive needs'
        price: 'aangepast', // 'custom'
        features: [
          'onbeperkt aantal kamers', // 'unlimited rooms'
          'aangepaste integraties', // 'custom integrations'
          'toegewijde ondersteuning', // 'dedicated support'
          'on-premise optie', // 'on-premise option'
          'training inbegrepen', // 'training included'
          'api-toegang', // 'api access'
          'white labeling', // 'white labeling'
        ],
        includedHours: 'onbeperkt', // 'unlimited'
        additionalInfo: 'aangepaste prijzen', // 'custom pricing'
        cta: 'neem contact op met sales', // 'contact sales'
      },
    },
    faq: {
      title: 'veelgestelde vragen', // 'frequently asked questions'
      questions: {
        q1: {
          question: 'kan ik op elk moment van plan wisselen?', // 'can i switch plans anytime?'
          answer: 'ja, je kunt je plan op elk moment upgraden of downgraden. wijzigingen worden onmiddellijk van kracht.', // 'yes, you can upgrade or downgrade your plan at any time. changes take effect immediately.'
        },
        q2: {
          question: 'zijn er installatiekosten?', // 'is there a setup fee?'
          answer: 'nee, er zijn geen installatiekosten. je kunt bayaan direct na aanmelding gebruiken.', // 'no, there are no setup fees. you can start using bayaan immediately after signing up.'
        },
        q3: {
          question: 'welke talen worden ondersteund?', // 'what languages are supported?'
          answer: 'we ondersteunen 15+ talen voor vertaling, waaronder arabisch, engels, nederlands, turks, urdu en meer. transcriptie ondersteunt 50+ talen.', // 'we support 15+ languages for translation including arabic, english, dutch, turkish, urdu, and more. transcription supports 50+ languages.'
        },
        q4: {
          question: 'bieden jullie korting voor meerdere moskeeën?', // 'do you offer discounts for multiple mosques?'
          answer: 'ja, we bieden speciale prijzen voor islamitische organisaties die meerdere moskeeën beheren. neem contact met ons op voor details.', // 'yes, we offer special pricing for islamic organizations managing multiple mosques. contact us for details.'
        },
      },
    },
  },

  // CTA Section
  cta: {
    title: 'klaar om je dawah-bereik uit te breiden?', // 'ready to expand your dawah reach?'
    subtitle: 'sluit je aan bij moskeeën wereldwijd om islamitische kennis voor iedereen toegankelijk te maken', // 'join mosques worldwide in making islamic knowledge accessible to everyone'
    primaryButton: 'begin vandaag', // 'get started today'
    secondaryButton: 'boek een demo', // 'book a demo'
    features: {
      feature1: 'geen creditcard vereist', // 'no credit card required'
      feature2: 'directe activatie', // 'instant activation'
      feature3: 'installatie in 5 minuten', // 'setup in 5 minutes'
    },
    demoAlert: 'demo planning binnenkort beschikbaar! neem contact met ons op via demo@bayaan.io', // 'demo scheduling coming soon! contact us at demo@bayaan.io'
    blessing: 'Moge Allah u zegenen', // 'May Allah bless you'
  },

  // Footer
  footer: {
    tagline: 'moskeeën wereldwijd in staat stellen de boodschap van de islam te verspreiden door middel van innovatieve vertaaltechnologie.', // 'empowering mosques worldwide to spread the message of islam through innovative translation technology.'
    sections: {
      product: {
        title: 'product', // 'product'
        links: {
          features: 'functies', // 'features'
          pricing: 'prijzen', // 'pricing'
          demo: 'demo', // 'demo'
          api: 'api', // 'api'
        },
      },
      mosque: {
        title: 'voor moskeeën', // 'for mosques'
        links: {
          useCases: 'gebruiksscenario\'s', // 'use cases'
          successStories: 'succesverhalen', // 'success stories'
          resources: 'bronnen', // 'resources'
          support: 'ondersteuning', // 'support'
        },
      },
      company: {
        title: 'bedrijf', // 'company'
        links: {
          about: 'over ons', // 'about'
          blog: 'blog', // 'blog'
          careers: 'carrières', // 'careers'
          contact: 'contact', // 'contact'
        },
      },
      legal: {
        title: 'juridisch', // 'legal'
        links: {
          privacy: 'privacy', // 'privacy'
          terms: 'voorwaarden', // 'terms'
          security: 'beveiliging', // 'security'
          compliance: 'naleving', // 'compliance'
        },
      },
    },
    contact: {
      email: 'support@bayaan.app', // Keep as is
      phone: '+31 20 123 4567', // Keep as is
      address: 'amsterdam, nederland', // 'amsterdam, netherlands'
    },
    copyright: '© 2024 bayaan. alle rechten voorbehouden. gebouwd met', // '© 2024 bayaan. all rights reserved. built with'
    builtWith: 'gebouwd met', // 'built with'
    forTheUmmah: 'voor de ummah', // 'for the ummah'
    quranicVerse: {
      arabic: 'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ', // Keep as is - Arabic Quranic verse
      translation: 'en werk samen in rechtschapenheid en vroomheid', // 'and cooperate in righteousness and piety'
      reference: 'koran 5:2', // 'quran 5:2'
    },
  },

  // Common
  common: {
    loading: 'laden...', // 'loading...'
    error: 'fout', // 'error'
    retry: 'opnieuw proberen', // 'retry'
    learnMore: 'leer meer', // 'learn more'
    getStarted: 'begin nu', // 'get started'
    watchDemo: 'bekijk demo', // 'watch demo'
    bookDemo: 'boek een demo', // 'book demo'
    contactSales: 'neem contact op met sales', // 'contact sales'
    comingSoon: 'binnenkort beschikbaar', // 'coming soon'
    new: 'nieuw', // 'new'
    popular: 'populair', // 'popular'
    limited: 'beperkt', // 'limited'
    free: 'gratis', // 'free'
    unlimited: 'onbeperkt', // 'unlimited'
    custom: 'aangepast', // 'custom'
    included: 'inbegrepen', // 'included'
    notIncluded: 'niet inbegrepen', // 'not included'
    yes: 'ja', // 'yes'
    no: 'nee', // 'no'
    and: 'en', // 'and'
    or: 'of', // 'or'
    more: 'meer', // 'more'
    less: 'minder', // 'less'
    view: 'bekijk', // 'view'
    close: 'sluiten', // 'close'
    cancel: 'annuleren', // 'cancel'
    confirm: 'bevestigen', // 'confirm'
    download: 'downloaden', // 'download'
    share: 'delen', // 'share'
    copy: 'kopiëren', // 'copy'
    copied: 'gekopieerd!', // 'copied!'
  },
};