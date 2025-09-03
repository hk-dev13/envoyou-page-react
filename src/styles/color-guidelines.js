/*
ENVOYOU COLOR PALETTE USAGE GUIDELINES
========================================

PRIMARY COLORS:
- Background (utama): #0D1117 (var(--envoyou-dark))
- Green Accent (brand highlight): #2ECC71 (var(--envoyou-green))
- White Text (main): #FFFFFF (var(--envoyou-white))
- Gray Text (secondary): #95A5A6 (var(--envoyou-gray))
- Hover/Highlight Green: #27AE60 (var(--envoyou-green-hover))
- Border/Divider: #2C3E50 (var(--envoyou-border))

USAGE GUIDELINES:
=================

1. BACKGROUND:
   - Main background: var(--envoyou-dark) #0D1117
   - Secondary background: var(--envoyou-dark-light) #1a202c
   - Card backgrounds: rgba(13, 17, 23, 0.5)

2. TEXT:
   - Primary text: var(--envoyou-white) #FFFFFF
   - Secondary text: var(--envoyou-gray) #95A5A6
   - Logo text: var(--envoyou-green) #2ECC71 with Aileron Heavy font

3. ACCENTS & INTERACTIONS:
   - Primary buttons: var(--envoyou-green) #2ECC71
   - Hover states: var(--envoyou-green-hover) #27AE60
   - Icons: var(--envoyou-green) #2ECC71
   - Borders: var(--envoyou-border) #2C3E50

4. FONTS:
   - Body text: Inter (400, 500, 600, 700, 800)
   - Logo/Headings: Aileron Heavy (400, 700)

IMPLEMENTATION:
===============

CSS Custom Properties (defined in :root):
--envoyou-dark: #0D1117
--envoyou-green: #2ECC71
--envoyou-green-hover: #27AE60
--envoyou-white: #FFFFFF
--envoyou-gray: #95A5A6
--envoyou-border: #2C3E50
--envoyou-dark-light: #1a202c
--envoyou-green-light: rgba(46, 204, 113, 0.1)

Usage in Components:
- Use CSS custom properties: style={{ backgroundColor: 'var(--envoyou-dark)' }}
- Use Tailwind classes where possible
- Maintain consistency across all components
- Test hover states and interactions

COMPONENTS UPDATED:
===================
- HomePage: Full color scheme implementation
- InfoCard: Standardized colors and styling
- Button: Updated variants with Envoyou colors
- index.css: CSS custom properties and base styles
- index.html: Added Aileron Heavy font

COLOR HIERARCHY:
================
1. Green (#2ECC71) - Primary brand color, CTAs, icons
2. White (#FFFFFF) - Primary text, headings
3. Gray (#95A5A6) - Secondary text, descriptions
4. Dark (#0D1117) - Main background
5. Border (#2C3E50) - Dividers, borders, secondary backgrounds
6. Hover Green (#27AE60) - Interactive states, emphasis
*/
