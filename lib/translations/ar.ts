import { TranslationStructure } from './types';

// TODO: Fill in Arabic translations
// This file is ready for Gemini to complete with proper Arabic translations
// All English text is provided as comments for reference

export const ar: TranslationStructure = {
  // Navigation
  navigation: {
    preview: 'معاينة', // 'preview'
    features: 'الميزات', // 'features'
    howItWorks: 'كيف يعمل', // 'how it works'
    useCases: 'حالات الاستخدام', // 'use cases'
    pricing: 'الأسعار', // 'pricing'
    dashboard: 'لوحة التحكم', // 'Dashboard'
  },

  // Hero Section
  hero: {
    title: 'ترجمة فورية للخطب', // 'real time sermon translation'
    subtitle: 'للمساجد في جميع أنحاء العالم', // 'for mosques worldwide'
    cta: {
      primary: 'ابدأ مجانًا', // 'get started free'
      secondary: 'شاهد العرض التوضيحي', // 'watch demo'
    },
    steps: {
      step1: {
        title: 'أنشئ حساب مسجدك', // 'create your mosque account'
        description: 'سجل في دقائق وقم بإعداد ملف مسجدك مع تكوينات الغرف', // 'sign up in minutes and set up your mosque profile with room configurations'
      },
      step2: {
        title: 'أنشئ غرفة', // 'create room'
        description: 'قم بإعداد الغرفة التي تستمع إلى خطبتك وتترجمها في الوقت الفعلي', // 'set up the room that listens to your sermon and translates it in real-time'
      },
      step3: {
        title: 'اضغط على زر Go Live', // 'press Go Live button'
        description: 'ابدأ البث بنقرة واحدة - يتم ترجمة خطبتك على الفور', // 'start broadcasting with one click - your sermon is instantly translated'
      },
      step4: {
        title: 'شغل العرض', // 'launch display'
        description: 'افتح الشاشة العامة التي ستكون مرئية لجميع زوار المسجد', // 'open the public display that will be visible for all mosque visitors'
      },
    },
    badge: 'كسر حواجز اللغة، توحيد المصلين', // 'break language barriers, unite congregation'
    mainTitle: 'تمكين الدعوة', // 'empowering dawah'
    mainTitleGradient: 'من خلال التكنولوجيا', // 'through technology'
    subheading: 'حول مسجدك إلى منارة للدعوة الشاملة مع ترجمة الخطب في الوقت الفعلي.', // 'transform your mosque into a beacon of inclusive dawah with real-time sermon translation.'
    subheadingHighlight: 'تصل إلى القلوب بكل لغة.', // 'reach hearts in every language.'
    benefits: {
      multiLanguage: 'متعدد اللغات', // 'multi-language'
      realTime: 'في الوقت الفعلي', // 'real-time'
      inclusive: 'شامل', // 'inclusive'
    },
    ctaPricing: 'الأسعار', // 'pricing'
    ctaHowItWorks: 'شاهد كيف يعمل', // 'see how it works'
    howItWorks: {
      badge: 'عملية إعداد بسيطة', // 'simple setup process'
      title: 'كيف يعمل بيان', // 'how bayaan works'
      subtitle: 'اجعل مسجدك متصلاً في دقائق من خلال عملية الإعداد المبسطة لدينا', // 'get your mosque connected in minutes with our streamlined setup process'
      stepLabel: 'خطوة', // 'step'
    },
    previewLabel: 'معاينة حية لشاشة بيان العامة • نسخ وترجمة في الوقت الفعلي', // 'Live preview of the Bayaan public display • Real-time transcription & translation'
  },

  // Preview Section
  preview: {
    publicDisplay: {
      title: 'عرض الشاشة العامة', // 'public display view'
      subtitle: 'ما يراه المصلون', // 'what your congregation sees'
      transcription: 'يظهر النص المباشر هنا...', // 'live transcription appears here...'
      camera: 'بث الكاميرا', // 'camera feed'
      translation: 'الترجمة باللغة المختارة...', // 'translation in selected language...'
    },
  },

  // Features Section
  features: {
    title: 'ميزات لوحة تحكم قوية', // 'powerful dashboard features'
    subtitle: 'تحكم كامل ورؤى لنظام الترجمة في مسجدك مع تحليلات وأدوات إدارة متقدمة.', // 'complete control and insights for your mosque\'s translation system with advanced analytics and management tools.'
    tabs: {
      overview: 'نظرة عامة', // 'overview'
      roomManagement: 'إدارة الغرف', // 'room management'
      sessionHistory: 'سجل الجلسات', // 'session history'
      analytics: 'التحليلات', // 'analytics'
    },
    dashboardCaption: 'جرب واجهة لوحة التحكم البديهية المصممة لمديري المساجد', // 'experience the intuitive dashboard interface designed for mosque administrators'
    clickToExplore: 'انقر على علامات التبويب للاستكشاف', // 'click tabs to explore'
    cards: {
      sessionHistory: {
        title: 'سجل الجلسات والتشغيل', // 'session history & playback'
        description: 'الوصول إلى سجل النسخ والترجمة الكامل. مراجعة الخطب السابقة مع الطوابع الزمنية والسجلات متعددة اللغات الكاملة.', // 'access complete transcription and translation history. review past sermons with timestamps and full multi-language records.'
      },
      exportArchive: {
        title: 'تصدير وأرشفة', // 'export & archive'
        description: 'تنزيل نصوص الخطب بتنسيقات pdf أو word أو txt. إنشاء أرشيفات دائمة لتوثيق المسجد.', // 'download sermon transcripts in pdf, word, or txt formats. create permanent archives for mosque documentation.'
      },
      analyticsDashboard: {
        title: 'لوحة تحكم التحليلات', // 'analytics dashboard'
        description: 'تتبع الحضور وتفضيلات اللغة ومقاييس المشاركة. فهم احتياجات جماعتك بشكل أفضل.', // 'track attendance, language preferences, and engagement metrics. understand your congregation\'s needs better.'
      },
      multiUserManagement: {
        title: 'إدارة متعددة المستخدمين', // 'multi-user management'
        description: 'إدارة عدة أئمة ومشغلين. التحكم في مستويات الوصول والأذونات لموظفي المسجد المختلفين.', // 'manage multiple imams and operators. control access levels and permissions for different mosque staff.'
      },
      liveRoomControl: {
        title: 'التحكم في الغرفة المباشرة', // 'live room control'
        description: 'لوحة تحكم في الوقت الفعلي لمراقبة الجلسات النشطة. بدء وإيقاف وإدارة غرف ترجمة متعددة في وقت واحد.', // 'real-time dashboard to monitor active sessions. start, stop, and manage multiple translation rooms simultaneously.'
      },
      publicDisplayManager: {
        title: 'مدير العرض العام', // 'public display manager'
        description: 'تكوين وتخصيص شاشات العرض العامة. التحكم في ما يراه الزوار باستخدام قوالب سهلة الاستخدام.', // 'configure and customize public display screens. control what visitors see with easy-to-use templates.'
      },
      secureCloudStorage: {
        title: 'تخزين سحابي آمن', // 'secure cloud storage'
        description: 'جميع الجلسات يتم نسخها احتياطيًا بشكل آمن في السحابة. متوافق مع gdpr مع تشفير من طرف إلى طرف.', // 'all sessions backed up securely in the cloud. gdpr compliant with end-to-end encryption.'
      },
      multiLanguageSupport: {
        title: 'دعم متعدد اللغات', // 'multi-language support'
        description: 'دعم لأكثر من 15 لغة بما في ذلك العربية والإنجليزية والهولندية والتركية والمزيد. قابلة للتوسيع عند الطلب.', // 'support for 15+ languages including arabic, english, dutch, turkish, and more. expandable on request.'
      },
    },
    stats: {
      transcriptionLanguages: 'لغات النسخ', // 'transcription languages'
      translationLanguages: 'لغات الترجمة', // 'translation languages'
      setupTime: 'دقيقة للإعداد', // 'minute setup'
      uptime: 'وقت التشغيل', // 'uptime'
    },
  },

  // How It Works Section
  howItWorks: {
    title: 'بسيط مثل 1-2-3', // 'simple as 1-2-3'
    subtitle: 'قم بتوصيل مسجدك وبدء الترجمة في دقائق. لا حاجة لخبرة فنية.', // 'get your mosque connected and translating in minutes. no technical expertise needed.'
    steps: {
      setup: {
        title: 'جهز مسجدك', // 'setup your mosque'
        description: 'أنشئ حسابك وقم بتكوين غرف مسجدك في دقائق.', // 'create your account and configure your mosque\'s rooms in minutes.'
        arabicText: 'أنشئ حسابك', // Keep as is - already in Arabic
      },
      share: {
        title: 'شارك الوصول', // 'share access'
        description: 'أنشئ رموز qr لجماعتك. يقومون بمسحها ضوئيًا للانضمام.', // 'generate qr codes for your congregation. they simply scan to join.'
        arabicText: 'شارك الوصول', // Keep as is - already in Arabic
      },
      goLive: {
        title: 'Go Live', // 'Go Live'
        description: 'ابدأ الترجمة بنقرة واحدة. وسع تأثير دعوتك على الفور.', // 'start translating with one click. expand your dawah impact instantly.'
        arabicText: 'ابدأ البث', // Keep as is - already in Arabic
      },
    },
    cta: {
      text: 'انضم إلى المساجد في جميع أنحاء العالم في جعل المعرفة الإسلامية في متناول الجميع', // 'join mosques worldwide in making islamic knowledge accessible to all'
      button: 'ابدأ اليوم', // 'get started today'
    },
  },

  // Use Cases Section
  useCases: {
    title: 'غير كل تجمع', // 'transform every gathering'
    subtitle: 'من الصلوات اليومية إلى المناسبات الخاصة، يعزز بيان تأثير مسجدك.', // 'from daily prayers to special events, bayaan amplifies your mosque\'s impact.'
    badge: 'فرص دعوية', // 'dawah opportunities'
    cards: {
      fridayKhutbah: {
        title: 'خطبة الجمعة', // 'friday khutbah'
        description: 'تأكد من أن كل حاضر يفهم الخطبة الأسبوعية، بغض النظر عن لغته.', // 'ensure every attendee understands the weekly sermon, regardless of their language.'
        impact: 'الدعوة الأساسية', // 'core dawah'
        features: ['ترجمة مباشرة', 'غرف متعددة', 'تسجيل'], // ['live translation', 'multi-room', 'recording']
      },
      islamicEducation: {
        title: 'التعليم الإسلامي', // 'islamic education'
        description: 'اجعل دروس القرآن ودراسات الحديث في متناول جميع طالبي العلم.', // 'make quran classes and hadith studies accessible to all seekers of knowledge.'
        impact: 'المعرفة', // 'knowledge'
        features: ['تفاعلي', 'مواد دراسية', 'سؤال وجواب'], // ['interactive', 'study materials', 'q&a']
      },
      communityEvents: {
        title: 'الفعاليات المجتمعية', // 'community events'
        description: 'من احتفالات العيد إلى الإفطارات، تأكد من أن الجميع يشعر بالاندماج.', // 'from eid celebrations to iftars, ensure everyone feels included.'
        impact: 'الوحدة', // 'unity'
        features: ['فعاليات', 'لغات', 'ضيوف'], // ['events', 'languages', 'guests']
      },
      dawahPrograms: {
        title: 'برامج الدعوة', // 'dawah programs'
        description: 'وسع نطاق الدعوة لغير الناطقين بالعربية. دع الإسلام يصل إلى كل قلب.', // 'expand outreach to non-arabic speakers. let islam reach every heart.'
        impact: 'التوسع', // 'expansion'
        features: ['عام', 'مهتدون جدد', 'سؤال وجواب'], // ['public', 'converts', 'q&a']
      },
    },
    quote: {
      arabic: 'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ', // Keep as is - already in Arabic
      translation: 'وما أرسلناك إلا رحمة للعالمين.', // 'and we have not sent you, [o muhammad], except as a mercy to the worlds.'
      reference: 'القرآن ٢١:١٠٧', // 'quran 21:107'
    },
  },

  // Testimonials Section
  testimonials: {
    title: 'مساجد تزدهر مع بيان', // 'mosques thriving with bayaan'
    subtitle: 'شاهد كيف توسع المساجد في جميع أنحاء العالم دعوتها وتوحد مجتمعاتها', // 'see how mosques worldwide are expanding their dawah and uniting their communities'
    testimonial1: {
      name: 'الشيخ أحمد حسن', // Arabic version of 'Sheikh Ahmad Hassan'
      role: 'إمام، مسجد النور', // 'Imam, Masjid Al-Noor'
      location: 'أمستردام، هولندا', // 'Amsterdam, Netherlands'
      content: 'لقد غير بيان صلاة الجمعة لدينا. شبابنا غير الناطقين بالعربية يشاركون أخيرًا ويفهمون الخطبة. هذه هي الدعوة الحقيقية في العمل.', // 'Bayaan has transformed our Friday prayers. Our non-Arabic speaking youth are finally engaged and understanding the khutbah. This is true Dawah in action.'
      highlight: 'زيادة مشاركة الشباب بنسبة ٣٠٠٪', // 'Youth engagement increased by 300%'
    },
    testimonial2: {
      name: 'الأخت فاطمة الراشد', // Arabic version of 'Sister Fatima Al-Rashid'
      role: 'مديرة المجتمع', // 'Community Director'
      location: 'لندن، المملكة المتحدة', // 'London, UK'
      content: 'كمجتمع متنوع يضم أكثر من ١٥ جنسية، يسد بيان فجواتنا اللغوية بشكل جميل. لقد عزز روابطنا ووسع نطاق دعوتنا بشكل كبير.', // 'As a diverse community with over 15 nationalities, Bayaan bridges our language gaps beautifully. It\'s strengthened our bonds and expanded our Dawah reach significantly.'
      highlight: 'توحيد أكثر من ١٥ جنسية', // '15+ nationalities united'
    },
    testimonial3: {
      name: 'الأخ يوسف إبراهيم', // Arabic version of 'Brother Yusuf Ibrahim'
      role: 'مدير المسجد', // 'Mosque Administrator'
      location: 'بروكسل، بلجيكا', // 'Brussels, Belgium'
      content: 'أدهشتنا بساطة الإعداد. في غضون دقائق، كان كبار السن في جماعتنا يصلون إلى الترجمات على هواتفهم. التكنولوجيا في خدمة الإيمان بشكل مثالي.', // 'The simplicity of setup amazed us. Within minutes, our elderly congregation members were accessing translations on their phones. Technology serving faith perfectly.'
      highlight: 'إعداد في أقل من ١٠ دقائق', // 'Setup in under 10 minutes'
    },
    trustBadges: {
      activeMosques: 'مساجد نشطة', // 'active mosques'
      weeklyUsers: 'مستخدمون أسبوعيًا', // 'weekly users'
      uptime: 'وقت التشغيل', // 'uptime'
      avgRating: 'متوسط التقييم', // 'avg rating'
    },
  },

  // Anecdote Section
  anecdote: {
    title: 'من الإحباط إلى الإلهام', // 'from frustration to inspiration'
    story: {
      paragraph1: 'عندما كنت طفلاً، كان أبي يأخذني إلى خطبة الجمعة كل أسبوع. كنت طفلاً كثير الحركة ونشطاً للغاية - من النوع الذي يجد صعوبة بالغة في الجلوس بهدوء لمدة ساعة، خاصة عندما لا أفهم تمامًا ما يقال.',
      paragraph2: 'على الرغم من أن اللغة العربية كانت لغة منزلنا، إلا أن مفرداتي كانت محدودة، وبلاغة الخطيب بالفصحى بدت وكأنها عالم آخر. كنت أتململ، وأحلم، وأعترف أنني كنت أزعج والدي أحيانًا. لو كان شيء مثل بيان موجودًا آنذاك - ترجمات حية أمامي مباشرة - لربما استمعت بانتباه أكبر وتواصلت بشكل أعمق.',
      paragraph3: 'وهذا ليس فقط لغير الناطقين بالعربية. العديد من الناطقين بالعربية، خاصة الأجيال الشابة أو أولئك الذين يتحدثون لهجة فقط، يجدون صعوبة في الفصحى أيضًا. هذه الأداة تسد تلك الفجوة، مما يساعد الناطقين بالعربية وغير الناطقين بها على الاقتراب من لغة القرآن.',
      paragraph4: 'لقد رأيت كيف أصبح أبناء عمومتي في الوطن يتقنون اللغة الإنجليزية بمجرد مشاهدة الأفلام الإنجليزية مع ترجمة عربية. مع بيان، إن شاء الله، يمكننا عكس ذلك - مما يسمح للناس باستيعاب اللغة العربية الفصحى أثناء متابعة الخطبة مع ترجمات حية وواضحة.',
    },
    attribution: '- قصة شخصية للمؤسس', // '— Founder\'s personal story'
  },

  // Pricing Section
  pricing: {
    title: 'تسعير بسيط وشفاف', // 'simple, transparent pricing'
    subtitle: 'اختر خطة تناسب احتياجات مسجدك. لا رسوم خفية، لا مفاجآت.', // 'choose a plan that fits your mosque\'s needs. no hidden fees, no surprises.'
    monthlyBilling: 'فوترة شهرية', // 'monthly billing'
    yearlyBilling: 'فوترة سنوية', // 'yearly billing'
    savePercentage: 'وفر ٢٠٪', // 'save 20%'
    perMonth: '/شهر', // '/month'
    perYear: '/سنة', // '/year'
    plans: {
      starter: {
        name: 'مبتدئ', // 'starter'
        description: 'مثالي للمساجد الصغيرة مع خطب الجمعة والإعلانات العرضية', // 'perfect for small mosques with friday sermons and occasional announcements'
        price: {
          monthly: '€49', // Keep price as is
          yearly: '€470', // Keep price as is
        },
        features: [
          'غرفة ترجمة واحدة', // '1 translation room'
          'دعم خطبة الجمعة', // 'friday khutbah support'
          'تحليلات أساسية', // 'basic analytics'
          'دعم عبر البريد الإلكتروني', // 'email support'
          'وصول عبر الهاتف المحمول', // 'mobile access'
        ],
        includedHours: '٨', // '8'
        additionalInfo: '€٧ لكل ساعة', // '€7 per hour'
        cta: 'ابدأ', // 'get started'
      },
      professional: {
        name: 'محترف', // 'professional'
        description: 'مثالي للمساجد النشطة مع برامج ودروس منتظمة', // 'ideal for active mosques with regular programs and classes'
        popularBadge: 'الأكثر شيوعًا', // 'most popular'
        price: {
          monthly: '€99', // Keep price as is
          yearly: '€950', // Keep price as is
        },
        features: [
          '٥ غرف ترجمة', // '5 translation rooms'
          'تحليلات متقدمة', // 'advanced analytics'
          'دعم ذو أولوية', // 'priority support'
          'شاشات عرض عامة', // 'public display screens'
          'تسجيل الجلسات', // 'session recording'
          'تصدير وأرشفة', // 'export & archive'
        ],
        includedHours: '٢٠', // '20'
        additionalInfo: '€٥ لكل ساعة', // '€5 per hour'
        cta: 'ابدأ', // 'get started'
      },
      enterprise: {
        name: 'مؤسسة', // 'enterprise'
        description: 'للمساجد الكبيرة والمراكز الإسلامية ذات الاحتياجات الشاملة', // 'for large mosques and islamic centers with comprehensive needs'
        price: 'مخصص', // 'custom'
        features: [
          'غرف غير محدودة', // 'unlimited rooms'
          'تكاملات مخصصة', // 'custom integrations'
          'دعم مخصص', // 'dedicated support'
          'خيار التثبيت المحلي', // 'on-premise option'
          'تدريب مشمول', // 'training included'
          'وصول API', // 'api access'
          'علامة تجارية بيضاء', // 'white labeling'
        ],
        includedHours: 'غير محدود', // 'unlimited'
        additionalInfo: 'تسعير مخصص', // 'custom pricing'
        cta: 'اتصل بالمبيعات', // 'contact sales'
      },
    },
    faq: {
      title: 'الأسئلة الشائعة', // 'frequently asked questions'
      questions: {
        q1: {
          question: 'هل يمكنني تغيير الخطط في أي وقت؟', // 'can i switch plans anytime?'
          answer: 'نعم، يمكنك ترقية أو تخفيض خطتك في أي وقت. تدخل التغييرات حيز التنفيذ على الفور.', // 'yes, you can upgrade or downgrade your plan at any time. changes take effect immediately.'
        },
        q2: {
          question: 'هل هناك رسوم إعداد؟', // 'is there a setup fee?'
          answer: 'لا، لا توجد رسوم إعداد. يمكنك البدء في استخدام بيان فور التسجيل.', // 'no, there are no setup fees. you can start using bayaan immediately after signing up.'
        },
        q3: {
          question: 'ما هي اللغات المدعومة؟', // 'what languages are supported?'
          answer: 'ندعم أكثر من ١٥ لغة للترجمة بما في ذلك العربية والإنجليزية والهولندية والتركية والأردية والمزيد. يدعم النسخ أكثر من ٥٠ لغة.', // 'we support 15+ languages for translation including arabic, english, dutch, turkish, urdu, and more. transcription supports 50+ languages.'
        },
        q4: {
          question: 'هل تقدمون خصومات لعدة مساجد؟', // 'do you offer discounts for multiple mosques?'
          answer: 'نعم، نقدم أسعارًا خاصة للمنظمات الإسلامية التي تدير عدة مساجد. اتصل بنا للحصول على التفاصيل.', // 'yes, we offer special pricing for islamic organizations managing multiple mosques. contact us for details.'
        },
      },
    },
  },

  // CTA Section
  cta: {
    title: 'هل أنت مستعد لتوسيع نطاق دعوتك؟', // 'ready to expand your dawah reach?'
    subtitle: 'انضم إلى المساجد في جميع أنحاء العالم في جعل المعرفة الإسلامية في متناول الجميع', // 'join mosques worldwide in making islamic knowledge accessible to everyone'
    primaryButton: 'ابدأ اليوم', // 'get started today'
    secondaryButton: 'احجز عرضًا توضيحيًا', // 'book a demo'
    features: {
      feature1: 'لا حاجة لبطاقة ائتمان', // 'no credit card required'
      feature2: 'تفعيل فوري', // 'instant activation'
      feature3: 'إعداد في ٥ دقائق', // 'setup in 5 minutes'
    },
    demoAlert: 'جدولة العرض التوضيحي قريبًا! اتصل بنا على demo@bayaan.io', // 'demo scheduling coming soon! contact us at demo@bayaan.io'
    blessing: 'بارك الله فيكم', // 'May Allah bless you'
  },

  // Footer
  footer: {
    tagline: 'تمكين المساجد في جميع أنحاء العالم من نشر رسالة الإسلام من خلال تقنية الترجمة المبتكرة.', // 'empowering mosques worldwide to spread the message of islam through innovative translation technology.'
    sections: {
      product: {
        title: 'المنتج', // 'product'
        links: {
          features: 'الميزات', // 'features'
          pricing: 'الأسعار', // 'pricing'
          demo: 'عرض توضيحي', // 'demo'
          api: 'API', // 'api'
        },
      },
      mosque: {
        title: 'للمساجد', // 'for mosques'
        links: {
          useCases: 'حالات الاستخدام', // 'use cases'
          successStories: 'قصص نجاح', // 'success stories'
          resources: 'الموارد', // 'resources'
          support: 'الدعم', // 'support'
        },
      },
      company: {
        title: 'الشركة', // 'company'
        links: {
          about: 'عنا', // 'about'
          blog: 'المدونة', // 'blog'
          careers: 'وظائف', // 'careers'
          contact: 'اتصل بنا', // 'contact'
        },
      },
      legal: {
        title: 'قانوني', // 'legal'
        links: {
          privacy: 'الخصوصية', // 'privacy'
          terms: 'الشروط', // 'terms'
          security: 'الأمان', // 'security'
          compliance: 'الامتثال', // 'compliance'
        },
      },
    },
    contact: {
      email: 'support@bayaan.app', // Keep as is
      phone: '+31 20 123 4567', // Keep as is
      address: 'أمستردام، هولندا', // 'amsterdam, netherlands'
    },
    copyright: '© ٢٠٢٤ بيان. جميع الحقوق محفوظة. بني بـ', // '© 2024 bayaan. all rights reserved. built with'
    builtWith: 'بني بـ', // 'built with'
    forTheUmmah: 'للأمة', // 'for the ummah'
    quranicVerse: {
      arabic: 'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ', // Keep as is - already in Arabic
      translation: 'وتعاونوا على البر والتقوى', // 'and cooperate in righteousness and piety'
      reference: 'القرآن ٥:٢', // 'quran 5:2'
    },
  },

  // Common
  common: {
    loading: 'جار التحميل...', // 'loading...'
    error: 'خطأ', // 'error'
    retry: 'إعادة المحاولة', // 'retry'
    learnMore: 'اعرف المزيد', // 'learn more'
    getStarted: 'ابدأ', // 'get started'
    watchDemo: 'شاهد العرض التوضيحي', // 'watch demo'
    bookDemo: 'احجز عرضًا توضيحيًا', // 'book demo'
    contactSales: 'اتصل بالمبيعات', // 'contact sales'
    comingSoon: 'قريبًا', // 'coming soon'
    new: 'جديد', // 'new'
    popular: 'شائع', // 'popular'
    limited: 'محدود', // 'limited'
    free: 'مجاني', // 'free'
    unlimited: 'غير محدود', // 'unlimited'
    custom: 'مخصص', // 'custom'
    included: 'مشمول', // 'included'
    notIncluded: 'غير مشمول', // 'not included'
    yes: 'نعم', // 'yes'
    no: 'لا', // 'no'
    and: 'و', // 'and'
    or: 'أو', // 'or'
    more: 'المزيد', // 'more'
    less: 'أقل', // 'less'
    view: 'عرض', // 'view'
    close: 'إغلاق', // 'close'
    cancel: 'إلغاء', // 'cancel'
    confirm: 'تأكيد', // 'confirm'
    download: 'تنزيل', // 'download'
    share: 'مشاركة', // 'share'
    copy: 'نسخ', // 'copy'
    copied: 'تم النسخ!', // 'copied!'
  },
};