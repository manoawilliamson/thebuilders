# The Builders - Design System & Graphic Chart

## Overview
This document outlines the complete design system for The Builders application, including typography, colors, spacing, and component styles.

---

## Typography

### Font Family
- **Primary**: Inter (variable font)
- **Display**: Syne (variable font) 
- **Monospace**: JetBrains Mono (variable font)

### Font Classes
```css
font-sans     /* Inter - body text */
font-display  /* Syne - headings */
font-mono     /* JetBrains Mono - code, numbers */
```

### Typography Scale

#### Headings (Display Font - Syne)
- **Hero Title**: `text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5rem]` font-bold tracking-headline
- **Section Titles**: `text-3xl sm:text-4xl lg:text-5xl` font-bold tracking-headline
- **Card Titles**: `text-2xl sm:text-3xl` font-bold tracking-tight
- **Small Titles**: `text-xl` font-bold

#### Body Text (Sans Font - Inter)
- **Large Body**: `text-lg` leading-relaxed
- **Base Body**: `text-base` leading-relaxed
- **Small Body**: `text-sm` leading-relaxed
- **Caption**: `text-xs` leading-relaxed

#### Special Text
- **Navigation**: `text-sm` font-medium tracking-wide
- **Buttons**: `text-sm` font-medium tracking-wide
- **Labels**: `text-xs` font-medium tracking-widest uppercase
- **Numbers/Mono**: `font-mono text-sm`

---

## Color Palette

### Primary Colors
- **Dark Primary**: `#0a0a0a` (Almost black)
- **Dark Secondary**: `#1a1a1a` (Dark gray)
- **Light Gray**: `#f5f5f5` (Background gray)

### Text Colors
- **Primary Text**: `text-[#0a0a0a]` (Dark sections)
- **Secondary Text**: `text-[#1a1a1a]/80` (Dark sections, 80% opacity)
- **Muted Text**: `text-[#1a1a1a]/70` (Dark sections, 70% opacity)
- **Light Muted**: `text-[#1a1a1a]/60` (Dark sections, 60% opacity)
- **Faded Text**: `text-[#0a0a0a]/50` (Very light)

### White Text (for dark backgrounds)
- **Primary White**: `text-white`
- **Secondary White**: `text-white/80`
- **Muted White**: `text-white/70`
- **Light White**: `text-white/60`
- **Faded White**: `text-white/50`

### Background Colors
- **Primary Dark**: `bg-[#0a0a0a]` (Hero sections, CTAs)
- **Primary Light**: `bg-white` (Main content)
- **Secondary Light**: `bg-[#f5f5f5]` (Alternating sections)
- **Transparent**: `bg-transparent` (Navbar hero state)

### Border Colors
- **Light Border**: `border-gray-100` (White sections)
- **Dark Border**: `border-[#0a0a0a]/10` (Light sections)
- **Dark Border Solid**: `border-[#0a0a0a]/20` (Emphasis)
- **CTA Border**: `border-white/20` (Dark CTAs)

---

## Spacing System

### Container Padding
- **Mobile**: `px-5`
- **Tablet**: `sm:px-8`
- **Desktop**: `lg:px-10`

### Section Spacing
- **Standard**: `py-20 sm:py-24`
- **Large**: `py-20 sm:py-28 lg:py-32`
- **Small**: `py-12 sm:py-16`
- **Compact**: `py-10 sm:py-12`

### Component Spacing
- **Card Gaps**: `gap-8 sm:gap-10 lg:gap-12`
- **Text Spacing**: `mt-2 mt-3 mt-4 mt-5 mt-6 mt-8 mt-10 mt-12`
- **List Spacing**: `space-y-1 space-y-2 space-y-16 space-y-20 space-y-24`

---

## Layout System

### Container
- **Max Width**: `max-w-7xl` (Main content)
- **Centered**: `max-w-3xl` (Text-heavy sections)
- **Narrow**: `max-w-2xl` (CTA sections)

### Grid Systems
- **2 Columns**: `grid-cols-2`
- **3 Columns**: `lg:grid-cols-3`
- **4 Columns**: `lg:grid-cols-4`
- **12 Column Grid**: `lg:grid-cols-12` (Complex layouts)

### Flexbox
- **Navigation**: `flex items-center justify-between`
- **Buttons**: `inline-flex items-center`
- **Cards**: `flex flex-wrap gap-2`

---

## Component Styles

### Navigation
- **Position**: `sticky top-0 z-50`
- **Height**: `py-5`
- **Background**: Dark on hero, white on scroll
- **Transition**: `transition-all duration-300`

### Buttons
- **Primary**: Text-based with hover states
- **Hover**: `hover:opacity-70` or `hover:text-white/80`
- **Icons**: `ml-1.5 h-4 w-4` or `ml-2 h-4 w-4`

### Cards
- **Background**: `bg-white`
- **Border**: `border border-gray-100`
- **Padding**: `p-6` or `p-8`
- **Rounded**: `rounded-lg`

### Links
- **Underline**: None (clean design)
- **Hover**: `hover:opacity-70` or `hover:text-[#0a0a0a]`
- **Arrows**: Inline SVG icons for directional links

---

## Interactive States

### Hover Effects
- **Text Links**: `hover:opacity-70`
- **Dark Text**: `hover:text-[#0a0a0a]`
- **White Text**: `hover:text-white/80`
- **Buttons**: `transition-opacity` or `transition-colors`

### Transitions
- **Standard**: `transition-all duration-300`
- **Colors**: `transition-colors`
- **Opacity**: `transition-opacity`
- **Mobile Menu**: `transition-all duration-300`

---

## Responsive Design

### Breakpoints
- **Mobile**: Default (up to 640px)
- **Tablet**: `sm:` (640px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)

### Mobile Adaptations
- **Navigation**: Hamburger menu
- **Typography**: Smaller font sizes
- **Grid**: Single column on mobile
- **Spacing**: Reduced padding

---

## Animation & Micro-interactions

### Scroll Animations
- **Scroll Hint**: `animate-scroll-hint-in`
- **Bounce Arrow**: `animate-scroll-bounce`
- **Fade In**: Custom FadeInSection component

### Loading States
- **Font Display**: `display: swap`
- **Smooth Transitions**: All interactive elements

---

## Special Components

### Hero Sections
- **Background**: `bg-[#0a0a0a]`
- **Text**: White with opacity variations
- **Overlay**: Gradient overlays for depth
- **Positioning**: Absolute centering

### CTA Sections
- **Background**: `bg-[#0a0a0a]` (dark)
- **Form**: `bg-white/5 backdrop-blur` with `border-white/20`
- **Input**: Dark theme forms

### Testimonials & Cards
- **Consistent spacing**: 8px grid system
- **Hover states**: Subtle opacity changes
- **Typography hierarchy**: Clear visual hierarchy

---

## Accessibility

### Contrast Ratios
- **Dark on Light**: High contrast (#0a0a0a on white)
- **White on Dark**: High contrast (white on #0a0a0a)
- **Muted Text**: Still readable with proper opacity

### Semantic HTML
- **ARIA labels**: Navigation and interactive elements
- **Screen Reader**: Proper heading hierarchy
- **Keyboard Navigation**: Focus states on all interactive elements

---

## CSS Custom Properties
```css
:root {
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-syne: 'Syne', system-ui, sans-serif;
  --font-jetbrains: 'JetBrains Mono', monospace;
  
  --color-dark: #0a0a0a;
  --color-dark-secondary: #1a1a1a;
  --color-light: #f5f5f5;
  --color-white: #ffffff;
}
```

---

## Usage Guidelines

### Do's
- Use consistent spacing (8px grid)
- Maintain contrast ratios
- Keep typography hierarchy clear
- Use subtle transitions
- Follow mobile-first approach

### Don'ts
- Don't add new colors without approval
- Don't break the 8px grid system
- Don't use sharp transitions
- Don't mix font families arbitrarily
- Don't override core spacing without reason

---

This design system ensures consistency across all components and pages while maintaining the clean, modern aesthetic of The Builders brand.
