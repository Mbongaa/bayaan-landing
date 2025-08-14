# Mobile/Desktop Component Split Documentation

## Overview
This project uses a simple duplication strategy to separate mobile and desktop versions while keeping the desktop version completely untouched.

## How It Works

### 1. File Structure
```
components/
├── sections/
│   ├── Hero.tsx            (Original - Desktop version)
│   ├── Hero.mobile.tsx     (Duplicate - Mobile version)
│   ├── Features.tsx        (Original - Desktop version)  
│   ├── Features.mobile.tsx (Duplicate - Mobile version)
│   └── ...
├── wrappers/
│   ├── HeroWrapper.tsx     (Decides which version to show)
│   ├── FeaturesWrapper.tsx 
│   └── ...
└── shared/
    ├── Navigation.tsx      (Already split - uses MobileNavigation/DesktopNavigation)
    └── Footer.tsx          (Original - Desktop version)
    └── Footer.mobile.tsx   (Duplicate - Mobile version)
```

### 2. Detection Logic
- Uses `window.innerWidth < 768px` to detect mobile devices
- Shared hook: `hooks/useIsMobile.ts`
- Dynamic imports prevent loading unnecessary code

### 3. Components Status

| Component | Desktop File | Mobile File | Wrapper | Notes |
|-----------|-------------|-------------|---------|-------|
| Navigation | ✅ Already split | ✅ Already split | ❌ Not needed | Uses existing pattern |
| HeroFullscreen | ✅ Original | ❌ Hidden on mobile | ❌ Not needed | Hidden via `hidden lg:block` |
| Hero | ✅ Hero.tsx | ✅ Hero.mobile.tsx | ✅ HeroWrapper | |
| Anecdote | ✅ Anecdote.tsx | ✅ Anecdote.mobile.tsx | ✅ AnecdoteWrapper | |
| Features | ✅ Features.tsx | ✅ Features.mobile.tsx | ✅ FeaturesWrapper | |
| UseCases | ✅ UseCases.tsx | ✅ UseCases.mobile.tsx | ✅ UseCasesWrapper | |
| Testimonials | ✅ Testimonials.tsx | ✅ Testimonials.mobile.tsx | ✅ TestimonialsWrapper | |
| Pricing | ✅ Pricing.tsx | ✅ Pricing.mobile.tsx | ✅ PricingWrapper | |
| CTA | ✅ CTA.tsx | ✅ CTA.mobile.tsx | ✅ CTAWrapper | |
| Footer | ✅ Footer.tsx | ✅ Footer.mobile.tsx | ✅ FooterWrapper | |

## How to Edit

### ✅ Safe to Edit (Mobile Only)
- All `*.mobile.tsx` files - Edit these freely for mobile redesign
- Wrappers if you need to change breakpoint

### ⚠️ DO NOT EDIT (Desktop Preserved)
- Original component files (without .mobile suffix)
- These remain exactly as they were

### Example: Editing Hero Section for Mobile
```bash
# Edit this file for mobile changes:
components/sections/Hero.mobile.tsx

# DO NOT touch this file (desktop version):
components/sections/Hero.tsx
```

## Testing

### Test Mobile/Desktop Switching
1. Visit http://localhost:3000/test-mobile
2. Resize browser window above/below 768px
3. You should see the device type change

### Test Main Site
1. Visit http://localhost:3000
2. Desktop view (>768px): Shows original components
3. Mobile view (<768px): Shows .mobile.tsx components

## Benefits

1. **Desktop Safety**: Original files untouched = zero risk to desktop
2. **Mobile Freedom**: Edit .mobile.tsx files without fear
3. **Simple Logic**: Just window width check, no complex routing
4. **Easy Rollback**: Delete .mobile files to revert to responsive version
5. **Progressive**: Can migrate components one at a time

## Adding New Mobile Versions

To split a new component:

```bash
# 1. Copy the component
cp components/sections/NewSection.tsx components/sections/NewSection.mobile.tsx

# 2. Create wrapper
# Create components/wrappers/NewSectionWrapper.tsx with standard wrapper code

# 3. Update app/page.tsx
# Replace: import { NewSection } from "@/components/sections/NewSection"
# With:    import { NewSectionWrapper } from "@/components/wrappers/NewSectionWrapper"
# And use: <NewSectionWrapper /> instead of <NewSection />
```

## Notes

- Mobile breakpoint: 768px (can be changed in useIsMobile hook)
- Uses dynamic imports for performance (loads only needed version)
- SSR disabled for wrappers to prevent hydration mismatch
- Initial render shows nothing briefly while detecting device