# ShadCN UI Welcome Screen - Implementation Guide

## 📸 Background Image

**Unsplash URL:**
```
https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&q=80
```

**Direct Link:** https://unsplash.com/photos/green-grass-field-during-daytime-yFV39g6AZ5o

**Photographer:** Álvaro Bernal
**Description:** Suburban neighborhood with green lawns and houses

---

## 🎨 ShadCN UI Components Used

### 1. **Button Component**

```vue
<!-- Primary Button (Google/Apple) -->
<LgButton variant="default" size="lg" class="w-full">
  <GoogleIcon class="mr-2 h-5 w-5" />
  Continue with Google
</LgButton>

<!-- Secondary Button (Email) -->
<LgButton variant="secondary" size="lg" class="w-full">
  <Mail class="mr-2 h-5 w-5" />
  Continue with Email
</LgButton>

<!-- Ghost Button (Login) -->
<LgButton variant="ghost" size="lg" class="w-full">
  Already have an account? <span class="font-semibold">Login</span>
</LgButton>

<!-- Link Button (Browse as guest) -->
<LgButton variant="link" size="sm">
  Browse without signing up
</LgButton>
```

**ShadCN Button Variants:**
- `default` - Primary green button (#008934)
- `secondary` - Glass morphism with border
- `ghost` - Transparent with hover
- `link` - Text link with underline
- `outline` - Border only

---

### 2. **Card Component**

```vue
<!-- Social Proof Card with Glass Effect -->
<LgCard class="bg-white/10 backdrop-blur-md border-white/20">
  <div class="p-5">
    <!-- Card content -->
  </div>
</LgCard>

<!-- Provider CTA Card -->
<LgCard class="bg-transparent border-white/20 backdrop-blur-sm">
  <div class="p-6">
    <!-- Card content -->
  </div>
</LgCard>
```

**ShadCN Card Features:**
- Rounded corners (`rounded-lg`)
- Border (`border`)
- Shadow (`shadow-sm`)
- Custom backgrounds with Tailwind classes

---

### 3. **Alert Component**

```vue
<!-- Error Alert -->
<LgAlert variant="destructive" class="mb-4">
  <AlertCircle class="h-4 w-4" />
  <div>
    <div class="font-medium">Authentication Error</div>
    <div class="text-sm">{{ errorMessage }}</div>
  </div>
</LgAlert>
```

**ShadCN Alert Variants:**
- `default` - Neutral info
- `destructive` - Error/danger (red)

---

### 4. **Badge Component**

```vue
<!-- Trust Badge with Icon -->
<LgBadge variant="outline" class="rounded-full p-2 bg-primary/20 border-primary/30">
  <ShieldCheck class="h-4 w-4 text-primary" />
</LgBadge>
```

**ShadCN Badge Variants:**
- `default` - Solid background
- `secondary` - Secondary color
- `outline` - Border only
- `destructive` - Error state

---

### 5. **Separator Component**

```vue
<!-- Horizontal Separator with Text -->
<div class="relative my-6">
  <LgSeparator />
  <div class="absolute inset-0 flex items-center justify-center">
    <span class="bg-background/80 backdrop-blur-sm px-4 text-sm text-white/70">
      or
    </span>
  </div>
</div>
```

---

## 🎯 Tailwind CSS Classes Used

### Layout & Spacing
```css
/* Container */
max-w-md mx-auto          /* Max width 448px, centered */
px-4 py-12                /* Padding */
space-y-3                 /* Vertical spacing */

/* Flexbox */
flex items-center justify-center
gap-2, gap-3, gap-6       /* Gap between items */

/* Grid */
divide-x divide-white/20  /* Vertical dividers */
```

### Typography
```css
/* Headings */
text-4xl md:text-5xl      /* Responsive text size */
font-bold                 /* Font weight 700 */
tracking-tight            /* Letter spacing */

/* Body Text */
text-lg, text-sm, text-xs /* Font sizes */
text-white/90             /* White with 90% opacity */
font-semibold             /* Font weight 600 */
```

### Colors & Effects
```css
/* Background */
bg-white/10               /* White with 10% opacity */
backdrop-blur-md          /* Blur effect */
bg-gradient-to-b          /* Gradient */
from-black/50 to-black/75 /* Gradient stops */

/* Borders */
border-white/20           /* White border 20% opacity */
rounded-lg                /* Border radius */

/* Text Colors */
text-primary              /* LawnGuru green */
text-white/90             /* White 90% opacity */
text-destructive          /* Red error color */
```

### Interactive States
```css
/* Hover */
hover:bg-primary/90       /* Darker on hover */
hover:bg-white/10         /* Light background on hover */
hover:underline           /* Underline on hover */

/* Focus */
focus-visible:ring-2      /* Focus ring */
focus-visible:ring-ring   /* Ring color */

/* Disabled */
disabled:opacity-50       /* 50% opacity when disabled */
disabled:pointer-events-none /* No interaction */
```

### Animations
```css
/* Transitions */
transition-colors         /* Smooth color transition */

/* Loading */
animate-spin              /* Spinner rotation */
```

---

## 🎨 Custom Styles (Tailwind Config)

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "#008934",      // LawnGuru green
        foreground: "#ffffff",   // White text on green
      },
      // ... other ShadCN colors
    },
    borderRadius: {
      lg: "var(--radius)",      // 0.5rem (8px)
      md: "calc(var(--radius) - 2px)", // 6px
      sm: "calc(var(--radius) - 4px)", // 4px
    },
  },
}
```

---

## 🎭 Glass Morphism Effect

```css
/* Glass card effect */
.glass-card {
  @apply bg-white/10 backdrop-blur-md border-white/20;
}

/* Usage */
<div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
  <!-- Content -->
</div>
```

**Key Properties:**
- `bg-white/10` - Semi-transparent white background
- `backdrop-blur-md` - Blurs content behind
- `border-white/20` - Subtle border

---

## 🎬 Animations

### Logo Float Animation
```css
@keyframes logo-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.logo {
  animation: logo-float 3s ease-in-out infinite;
}
```

### Fade In Up Animation
```css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.content-container {
  animation: fade-in-up 0.8s ease-out;
}
```

### Background Zoom Animation
```css
@keyframes subtle-zoom {
  from { transform: scale(1); }
  to { transform: scale(1.05); }
}

.hero-image {
  animation: subtle-zoom 20s ease-in-out infinite alternate;
}
```

---

## 📦 Icons - Lucide Vue

```bash
npm install lucide-vue-next
```

```vue
<script setup>
import {
  Mail,
  Loader2,
  AlertCircle,
  ShieldCheck,
  BadgeCheck,
  CheckCircle2,
  Briefcase,
  Lock
} from 'lucide-vue-next'
</script>

<template>
  <Mail class="h-5 w-5" />
  <Loader2 class="h-5 w-5 animate-spin" />
  <AlertCircle class="h-4 w-4" />
</template>
```

**Icon Sizes:**
- `h-3 w-3` - 12px (small)
- `h-4 w-4` - 16px (default)
- `h-5 w-5` - 20px (medium)
- `h-6 w-6` - 24px (large)

---

## 🎨 Color Palette

### Primary Colors
```css
--primary: #008934          /* LawnGuru green */
--primary-hover: #00a03f    /* Lighter green */
```

### Opacity Levels
```css
/* Background overlays */
bg-black/50                 /* 50% opacity */
bg-black/75                 /* 75% opacity */

/* Text */
text-white/90               /* 90% opacity */
text-white/70               /* 70% opacity */

/* Borders */
border-white/20             /* 20% opacity */
border-white/30             /* 30% opacity */
```

---

## 📱 Responsive Design

```vue
<template>
  <!-- Mobile-first approach -->
  <h1 class="text-4xl md:text-5xl">Headline</h1>

  <!-- Breakpoints -->
  <div class="px-4 md:px-6 lg:px-8">
    <!-- Different padding at different sizes -->
  </div>

  <!-- Hide on mobile -->
  <div class="hidden md:block">Desktop only</div>

  <!-- Show on mobile only -->
  <div class="block md:hidden">Mobile only</div>
</template>
```

**Tailwind Breakpoints:**
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

---

## 🔧 Loading States

```vue
<template>
  <LgButton :disabled="isLoading">
    <Loader2 v-if="isLoading" class="mr-2 h-5 w-5 animate-spin" />
    <GoogleIcon v-else class="mr-2 h-5 w-5" />
    {{ isLoading ? 'Signing in...' : 'Continue with Google' }}
  </LgButton>
</template>

<script setup>
const isLoading = ref(false)

const handleAuth = async () => {
  isLoading.value = true
  try {
    await signIn()
  } finally {
    isLoading.value = false
  }
}
</script>
```

---

## ✅ Accessibility Features

### ARIA Labels
```vue
<!-- Buttons -->
<button aria-label="Continue with Google">
  <GoogleIcon />
</button>

<!-- Alerts -->
<div role="alert" aria-live="polite">
  Error message
</div>

<!-- Loading -->
<button :aria-busy="isLoading">
  Continue
</button>
```

### Keyboard Navigation
```vue
<!-- All interactive elements are keyboard accessible -->
<button @keydown.enter="handleAuth">Continue</button>

<!-- Focus visible states -->
<button class="focus-visible:ring-2 focus-visible:ring-ring">
  Continue
</button>
```

---

## 📊 Component Size Variants

### Button Sizes
```vue
<LgButton size="sm">Small</LgButton>      <!-- h-9 px-3 -->
<LgButton size="default">Default</LgButton> <!-- h-10 px-4 -->
<LgButton size="lg">Large</LgButton>      <!-- h-11 px-8 -->
<LgButton size="icon">Icon</LgButton>     <!-- h-10 w-10 -->
```

### Text Sizes
```css
text-xs   /* 12px */
text-sm   /* 14px */
text-base /* 16px */
text-lg   /* 18px */
text-xl   /* 20px */
text-2xl  /* 24px */
text-3xl  /* 30px */
text-4xl  /* 36px */
text-5xl  /* 48px */
```

---

## 🎯 Best Practices

### 1. **Component Composition**
```vue
<!-- ✅ Good: Compose components -->
<LgCard>
  <LgButton variant="default">Action</LgButton>
</LgCard>

<!-- ❌ Avoid: Overly complex single components -->
```

### 2. **Utility Classes**
```vue
<!-- ✅ Good: Use Tailwind utilities -->
<div class="flex items-center gap-2">

<!-- ❌ Avoid: Inline styles -->
<div style="display: flex; align-items: center;">
```

### 3. **Variants Over Props**
```vue
<!-- ✅ Good: Use variants -->
<LgButton variant="destructive">Delete</LgButton>

<!-- ❌ Avoid: Too many props -->
<LgButton :isRed="true" :isDanger="true">
```

### 4. **Consistent Spacing**
```vue
<!-- ✅ Good: Use spacing scale -->
<div class="space-y-4"> <!-- 16px gap -->

<!-- ❌ Avoid: Random values -->
<div style="margin-bottom: 17px">
```

---

## 🚀 Quick Start Checklist

- [x] Install Tailwind CSS
- [x] Install Lucide Vue icons
- [x] Import LawnGuru components (LgButton, LgCard, etc.)
- [x] Configure Tailwind with ShadCN colors
- [x] Add custom animations
- [x] Set up glass morphism styles
- [x] Add loading states
- [x] Implement error handling
- [x] Test keyboard navigation
- [x] Verify mobile responsiveness

---

## 📚 Resources

**ShadCN UI:**
- Website: https://ui.shadcn.com/
- Vue Port: https://www.shadcn-vue.com/

**Tailwind CSS:**
- Docs: https://tailwindcss.com/docs
- Playground: https://play.tailwindcss.com/

**Lucide Icons:**
- Vue: https://lucide.dev/guide/packages/lucide-vue-next
- Browse: https://lucide.dev/icons/

**Unsplash:**
- API: https://unsplash.com/developers
- Photo: https://unsplash.com/photos/yFV39g6AZ5o

---

## 🎨 Design Tokens Reference

```css
/* Colors */
--primary: #008934
--primary-light: #4ade80
--primary-dark: #006d29

/* Spacing */
--spacing-1: 0.25rem  /* 4px */
--spacing-2: 0.5rem   /* 8px */
--spacing-3: 0.75rem  /* 12px */
--spacing-4: 1rem     /* 16px */
--spacing-6: 1.5rem   /* 24px */
--spacing-8: 2rem     /* 32px */

/* Radius */
--radius: 0.5rem      /* 8px */
--radius-md: 0.375rem /* 6px */
--radius-sm: 0.25rem  /* 4px */
--radius-full: 9999px /* Fully rounded */

/* Shadows */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
```

---

This guide provides everything needed to implement the ShadCN UI welcome screen in your LawnGuru application! 🚀
