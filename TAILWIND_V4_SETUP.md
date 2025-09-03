# Tailwind CSS v4 Configuration

This project uses **Tailwind CSS v4** with the new Vite plugin approach, which simplifies configuration significantly.

## ✅ Current Setup

### Dependencies
- `tailwindcss: ^4.1.12`
- `@tailwindcss/vite: ^4.1.12`

### Vite Configuration
```javascript
// vite.config.js
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // This replaces PostCSS config
  ],
})
```

### CSS Import
```css
/* src/index.css */
@import "tailwindcss";
```

## 🔧 Optional Customization

If you need to customize Tailwind (colors, fonts, etc.), you can create a minimal config:

```javascript
// tailwind.config.js (optional)
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#10b981',
          secondary: '#1e293b'
        }
      }
    }
  }
}
```

## ❌ Files NOT Needed

- `postcss.config.js` - Handled by @tailwindcss/vite
- `tailwind.config.js` - Only if customization needed

## 🆚 Tailwind v3 vs v4

### v3 (Old)
```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

### v4 (Current)
```css
/* Just CSS import */
@import "tailwindcss";
```

## ✨ Benefits of v4
- 🚀 **Faster builds** - Native Vite integration
- 🎯 **Simpler setup** - No complex config files
- 📦 **Smaller bundle** - Better tree-shaking
- 🔧 **CSS-based config** - Configure in CSS when needed
