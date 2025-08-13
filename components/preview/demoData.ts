// Convert timestamp to seconds from start
const parseTime = (timeStr: string): number => {
  // Format: "08:29:39 PM" - we'll use relative seconds from first timestamp
  const baseTime = new Date("2025-08-12 20:29:39").getTime();
  const currentTime = new Date(`2025-08-12 ${timeStr.replace(' PM', '').replace('08:', '20:')}`).getTime();
  return (currentTime - baseTime) / 1000;
};

export const timedTranscript = [
  {
    id: 1,
    startTime: 0, // Start of video
    endTime: 9,
    arabic: "الله سبحانه وتعالى",
    arabicWords: ["الله", "سبحانه", "وتعالى"],
    translation: {
      en: "Allah ﷻ",
      nl: "Allah ﷻ"
    }
  },
  {
    id: 2,
    startTime: 9,
    endTime: 17,
    arabic: "خلق السماوات والارض بالحق ، وانزل سبحانه وتعالى الكتاب والميزان ليقوم الناس بالقسط ، كما بين سبحانه وتعالى",
    arabicWords: ["خلق", "السماوات", "والارض", "بالحق", "،", "وانزل", "سبحانه", "وتعالى", "الكتاب", "والميزان", "ليقوم", "الناس", "بالقسط", "،", "كما", "بين", "سبحانه", "وتعالى"],
    translation: {
      en: "He ﷻ created the heavens and the earth with truth, and He ﷻ sent down the Book and the balance so that people may uphold justice, as He ﷻ has explained.",
      nl: "Hij heeft de hemelen en de aarde met de waarheid geschapen, en Hij ﷻ heeft het Boek en de weegschaal neergezonden opdat de mensen rechtvaardig kunnen zijn, zoals Hij ﷻ heeft uiteengezet."
    }
  },
  {
    id: 3,
    startTime: 17,
    endTime: 25,
    arabic: "لقد ارسلنا رسلنا بالبينات وأنزلنا معهم الكتاب والميزان بالقسط",
    arabicWords: ["لقد", "ارسلنا", "رسلنا", "بالبينات", "وأنزلنا", "معهم", "الكتاب", "والميزان", "بالقسط"],
    translation: {
      en: "Indeed, We sent Our messengers with clear proofs, and with them We sent down the Book and the balance of justice.",
      nl: "Voorwaar, Wij zonden Onze boodschappers met duidelijke bewijzen en met hen zonden Wij het Boek en de weegschaal van rechtvaardigheid neer."
    }
  },
  {
    id: 4,
    startTime: 25,
    endTime: 34,
    arabic: "فسمى الله سبحانه وتعالى العدل ميزانا لانها اله العدل والانصاف",
    arabicWords: ["فسمى", "الله", "سبحانه", "وتعالى", "العدل", "ميزانا", "لانها", "اله", "العدل", "والانصاف"],
    translation: {
      en: "Allah ﷻ called justice a balance because it is the instrument of fairness and equity.",
      nl: "Allah ﷻ noemde gerechtigheid een weegschaal omdat het het instrument is van rechtvaardigheid en eerlijkheid."
    }
  },
  {
    id: 5,
    startTime: 34,
    endTime: 37,
    arabic: "فينبغي على المسلم ان يستحضر هذا المعنى ، ولذلك من عظمة الاسلام انه امر بالعدل حتى مع من يخالفنا في العقيدة",
    arabicWords: ["فينبغي", "على", "المسلم", "ان", "يستحضر", "هذا", "المعنى", "،", "ولذلك", "من", "عظمة", "الاسلام", "انه", "امر", "بالعدل", "حتى", "مع", "من", "يخالفنا", "في", "العقيدة"],
    translation: {
      en: "A Muslim should keep this meaning in mind, and thus it is among the greatness of Islam that it calls for justice, even towards those who differ from us in belief.",
      nl: "Een moslim dient deze betekenis in gedachten te houden, en daarom is het een grootsheid van de islam dat het oproept tot gerechtigheid, zelfs tegenover degenen die ons in geloofsovertuiging tegenspreken."
    }
  },
  {
    id: 6,
    startTime: 37,
    endTime: 44,
    arabic: "يا عباد الله",
    arabicWords: ["يا", "عباد", "الله"],
    translation: {
      en: "O servants of Allah.",
      nl: "O dienaren van Allah."
    }
  },
  {
    id: 7,
    startTime: 44,
    endTime: 51,
    arabic: "انظر الى قول الله سبحانه وتعالى ولا يجرمنكم شنئان قوم على الا تعدلوا اعدلوا هو اقرب للتقوى",
    arabicWords: ["انظر", "الى", "قول", "الله", "سبحانه", "وتعالى", "ولا", "يجرمنكم", "شنئان", "قوم", "على", "الا", "تعدلوا", "اعدلوا", "هو", "اقرب", "للتقوى"],
    translation: {
      en: "Look at the words of Allah ﷻ: 'And let not the hatred of a people cause you to avoid being just. Be just; that is nearer to piety.'",
      nl: "Kijk naar het woord van Allah ﷻ: \"En laat de haat van een volk jullie er niet toe brengen om niet rechtvaardig te zijn. Wees rechtvaardig, dat is dichter bij godsvrucht.\""
    }
  },
  {
    id: 8,
    startTime: 51,
    endTime: 53,
    arabic: "والله سبحانه وتعالى امرنا بالعدل حتى في القول",
    arabicWords: ["والله", "سبحانه", "وتعالى", "امرنا", "بالعدل", "حتى", "في", "القول"],
    translation: {
      en: "And Allah ﷻ has commanded us to be just even in our speech.",
      nl: "En Allah ﷻ heeft ons bevolen om zelfs in ons spreken rechtvaardig te zijn."
    }
  },
  {
    id: 9,
    startTime: 53,
    endTime: 55,
    arabic: "واذا قلتم فاعدلوا ولو كان ذا قربى",
    arabicWords: ["واذا", "قلتم", "فاعدلوا", "ولو", "كان", "ذا", "قربى"],
    translation: {
      en: "'And when you speak, be just, even if it concerns a relative.'",
      nl: "En wanneer jullie spreken, wees dan rechtvaardig, zelfs al betreft het een verwant."
    }
  },
  {
    id: 10,
    startTime: 55,
    endTime: 60,
    arabic: "وقال سبحانه وتعالى",
    arabicWords: ["وقال", "سبحانه", "وتعالى"],
    translation: {
      en: "And He ﷻ said:",
      nl: "En Hij ﷻ zei."
    }
  },
  {
    id: 11,
    startTime: 60,
    endTime: 64,
    arabic: "ان الله يأمر بالعدل والاحسان وينهى عن الفحشاء والمنكر",
    arabicWords: ["ان", "الله", "يأمر", "بالعدل", "والاحسان", "وينهى", "عن", "الفحشاء", "والمنكر"],
    translation: {
      en: "'Indeed, Allah commands justice and good conduct, and forbids all that is shameful and reprehensible.'",
      nl: "Voorwaar, Allah beveelt rechtvaardigheid en goedheid, en verbiedt al wat schaamtelijk en verwerpelijk is."
    }
  },
  {
    id: 12,
    startTime: 64,
    endTime: 68,
    arabic: "كل هذه اوامر",
    arabicWords: ["كل", "هذه", "اوامر"],
    translation: {
      en: "All of these are commands.",
      nl: "Al deze zijn bevelen."
    }
  }
];

export const demoData = {
  // Actual words from transcript_Deh_2025-08-12.txt
  arabicWords: [
    // Sentence 1: الله سبحانه وتعالى
    "الله", "سبحانه", "وتعالى",
    
    // Sentence 2: خلق السماوات والارض بالحق ، وانزل سبحانه وتعالى الكتاب والميزان ليقوم الناس بالقسط ، كما بين سبحانه وتعالى
    "خلق", "السماوات", "والارض", "بالحق", "،", "وانزل", "سبحانه", "وتعالى", "الكتاب", "والميزان", 
    "ليقوم", "الناس", "بالقسط", "،", "كما", "بين", "سبحانه", "وتعالى",
    
    // Sentence 3: لقد ارسلنا رسلنا بالبينات وأنزلنا معهم الكتاب والميزان بالقسط
    "لقد", "ارسلنا", "رسلنا", "بالبينات", "وأنزلنا", "معهم", "الكتاب", "والميزان", "بالقسط",
    
    // Sentence 4: فسمى الله سبحانه وتعالى العدل ميزانا لانها اله العدل والانصاف
    "فسمى", "الله", "سبحانه", "وتعالى", "العدل", "ميزانا", "لانها", "اله", "العدل", "والانصاف",
    
    // Sentence 5: فينبغي على المسلم ان يستحضر هذا المعنى ، ولذلك من عظمة الاسلام انه امر بالعدل حتى مع من يخالفنا في العقيدة
    "فينبغي", "على", "المسلم", "ان", "يستحضر", "هذا", "المعنى", "،", "ولذلك", "من", "عظمة", 
    "الاسلام", "انه", "امر", "بالعدل", "حتى", "مع", "من", "يخالفنا", "في", "العقيدة",
    
    // Sentence 6: يا عباد الله
    "يا", "عباد", "الله",
    
    // Sentence 7: انظر الى قول الله سبحانه وتعالى ولا يجرمنكم شنئان قوم على الا تعدلوا اعدلوا هو اقرب للتقوى
    "انظر", "الى", "قول", "الله", "سبحانه", "وتعالى", "ولا", "يجرمنكم", "شنئان", "قوم", 
    "على", "الا", "تعدلوا", "اعدلوا", "هو", "اقرب", "للتقوى",
    
    // Sentence 8: والله سبحانه وتعالى امرنا بالعدل حتى في القول
    "والله", "سبحانه", "وتعالى", "امرنا", "بالعدل", "حتى", "في", "القول",
    
    // Sentence 9: واذا قلتم فاعدلوا ولو كان ذا قربى
    "واذا", "قلتم", "فاعدلوا", "ولو", "كان", "ذا", "قربى",
    
    // Sentence 10: وقال سبحانه وتعالى
    "وقال", "سبحانه", "وتعالى",
    
    // Sentence 11: ان الله يأمر بالعدل والاحسان وينهى عن الفحشاء والمنكر
    "ان", "الله", "يأمر", "بالعدل", "والاحسان", "وينهى", "عن", "الفحشاء", "والمنكر",
    
    // Sentence 12: كل هذه اوامر
    "كل", "هذه", "اوامر"
  ],

  // Accurate translations for the sermon about justice
  translations: [
    {
      lang: "en",
      text: "Allah ﷻ"
    },
    {
      lang: "en",
      text: "He ﷻ created the heavens and the earth with truth, and He ﷻ sent down the Book and the balance so that people may uphold justice, as He ﷻ has explained."
    },
    {
      lang: "en",
      text: "Indeed, We sent Our messengers with clear proofs, and with them We sent down the Book and the balance of justice."
    },
    {
      lang: "en",
      text: "Allah ﷻ called justice a balance because it is the instrument of fairness and equity."
    },
    {
      lang: "en",
      text: "A Muslim should keep this meaning in mind, and thus it is among the greatness of Islam that it calls for justice, even towards those who differ from us in belief."
    },
    {
      lang: "en",
      text: "O servants of Allah."
    },
    {
      lang: "en",
      text: "Look at the words of Allah ﷻ: 'And let not the hatred of a people cause you to avoid being just. Be just; that is nearer to piety.'"
    },
    {
      lang: "en",
      text: "And Allah ﷻ has commanded us to be just even in our speech."
    },
    {
      lang: "en",
      text: "'And when you speak, be just, even if it concerns a relative.'"
    },
    {
      lang: "en",
      text: "And He ﷻ said:"
    },
    {
      lang: "en",
      text: "'Indeed, Allah commands justice and good conduct, and forbids all that is shameful and reprehensible.'"
    },
    {
      lang: "en",
      text: "All of these are commands."
    }
  ]
}