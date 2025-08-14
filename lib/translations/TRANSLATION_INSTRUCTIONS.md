# Translation Instructions for Gemini

## Overview
This landing page translation system is ready for you to fill in the Arabic and Dutch translations. The structure is already set up - you only need to replace the `'TODO'` placeholders with the actual translations.

## Files to Edit
You need to edit ONLY these two files:
1. `ar.ts` - Arabic translations
2. `nl.ts` - Dutch translations

## Important Guidelines

### 1. DO NOT modify any code structure
- Only replace `'TODO'` with the translated text
- Keep all quotes, commas, semicolons, and brackets exactly as they are
- Do not change variable names or object keys

### 2. Text Style
- Keep all text in **lowercase** (except where noted)
- The only exception is "Go Live" which should remain capitalized in all languages
- Maintain the casual, friendly tone of the original English

### 3. Special Cases

#### Prices
- Keep prices exactly as they are (e.g., '€49', '€99')
- Don't translate currency symbols

#### Names
- Keep proper names as they are:
  - Sheikh Ahmad Hassan
  - Sister Fatima Al-Rashid  
  - Brother Yusuf Ibrahim
- In Arabic, these are already translated to Arabic script

#### Arabic Text Already Present
- Some Arabic text is already in place (Quranic verses, Arabic labels)
- These are marked with comments like "Keep as is - already in Arabic"
- Don't change these

#### Technical Terms
- Keep technical terms consistent:
  - "Bayaan" - keep as is (it's the product name)
  - "Dashboard" - translate appropriately
  - "API" - keep as "API"
  - "QR" - keep as "QR"

### 4. Arrays
For feature arrays like:
```typescript
features: ['TODO', 'TODO', 'TODO'], // ['live translation', 'multi-room', 'recording']
```
Replace each 'TODO' with the translation of the corresponding English term shown in the comment.

### 5. Cultural Adaptation

#### For Arabic:
- Use formal/respectful language appropriate for mosque context
- Right-to-left reading is already handled by the system
- Use Islamic terminology where appropriate

#### For Dutch:
- Use informal "je/jouw" form (not formal "u/uw")
- Keep it friendly and approachable
- Be mindful of the Dutch Muslim community context

### 6. Examples

#### English:
```typescript
title: 'real time sermon translation'
```

#### Arabic (example):
```typescript
title: 'ترجمة الخطبة الفورية'
```

#### Dutch (example):
```typescript
title: 'realtime preek vertaling'
```

## How to Start

1. Open `ar.ts`
2. Search for 'TODO'
3. Look at the comment next to it showing the English text
4. Replace 'TODO' with the Arabic translation
5. Repeat for all TODOs in the file
6. Do the same for `nl.ts` with Dutch translations

## Testing
After filling in the translations, the system will automatically:
- Validate completeness (warn about any remaining TODOs)
- Handle RTL layout for Arabic
- Apply proper text direction
- Format numbers and currencies based on locale

## Need Help?
If you're unsure about a translation:
1. Check the English version in `en.ts` for context
2. Look at similar translations in the dashboard solution files for consistency
3. Keep technical terms simple and clear

Remember: You're ONLY replacing 'TODO' with translations. Don't change any code!