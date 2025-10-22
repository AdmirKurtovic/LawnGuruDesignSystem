# Spacing

> Consistent spacing creates visual rhythm and hierarchy throughout LawnGuru interfaces.

---

## 📐 Spacing Scale

LawnGuru uses a flexible spacing system based on multiples of 4px and 8px for consistent, predictable layouts.

```css
/* Spacing Scale - From Figma Design Tokens */
--spacing-0: 0px;      /* No space */
--spacing-2: 2px;      /* 0.125rem - Hairline */
--spacing-4: 4px;      /* 0.25rem - Extra tight */
--spacing-6: 6px;      /* 0.375rem - Compact */
--spacing-8: 8px;      /* 0.5rem - Tight */
--spacing-12: 12px;    /* 0.75rem - Small */
--spacing-16: 16px;    /* 1rem - Base (default) */
--spacing-20: 20px;    /* 1.25rem - Medium */
--spacing-24: 24px;    /* 1.5rem - Comfortable */
--spacing-28: 28px;    /* 1.75rem - Large */
--spacing-32: 32px;    /* 2rem - Extra large */
--spacing-40: 40px;    /* 2.5rem - Spacious */
--spacing-48: 48px;    /* 3rem - Very spacious */
--spacing-56: 56px;    /* 3.5rem - Extra spacious */
--spacing-64: 64px;    /* 4rem - Huge */
--spacing-80: 80px;    /* 5rem - Very huge */
--spacing-96: 96px;    /* 6rem - Massive */
```

**Naming Convention:**
- Values are named by their pixel size (e.g., `spacing-16` = 16px)
- Makes it easy to understand and calculate spacing
- Consistent with industry standards (Tailwind, etc.)

---

## 🎯 Semantic Spacing

### Component Spacing

#### Extra Tight
```css
--spacing-xs: var(--space-1) /* 4px */
```
**Usage:** Icon padding, tight layouts, compact UI

#### Tight
```css
--spacing-sm: var(--space-2) /* 8px */
```
**Usage:** Button padding, form fields, list items

#### Base
```css
--spacing-md: var(--space-4) /* 16px */
```
**Usage:** Card padding, default gaps, standard spacing

#### Comfortable
```css
--spacing-lg: var(--space-6) /* 24px */
```
**Usage:** Section spacing, comfortable layouts

#### Spacious
```css
--spacing-xl: var(--space-8) /* 32px */
```
**Usage:** Major sections, page margins

#### Extra Spacious
```css
--spacing-2xl: var(--space-12) /* 48px */
```
**Usage:** Hero sections, major page divisions

---

## 📦 Layout Spacing

### Container Padding
```css
--container-padding-mobile: var(--space-4)   /* 16px */
--container-padding-tablet: var(--space-6)   /* 24px */
--container-padding-desktop: var(--space-8)  /* 32px */
```

### Section Gaps
```css
--section-gap-mobile: var(--space-8)   /* 32px */
--section-gap-tablet: var(--space-12)  /* 48px */
--section-gap-desktop: var(--space-16) /* 64px */
```

---

## 🧩 Component-Specific Spacing

### Buttons
```css
--button-padding-x-sm: var(--space-3)  /* 12px */
--button-padding-y-sm: var(--space-2)  /* 8px */
--button-padding-x-md: var(--space-4)  /* 16px */
--button-padding-y-md: var(--space-3)  /* 12px */
--button-padding-x-lg: var(--space-6)  /* 24px */
--button-padding-y-lg: var(--space-4)  /* 16px */
--button-gap: var(--space-2)           /* 8px - icon gap */
```

### Cards
```css
--card-padding: var(--space-6)        /* 24px */
--card-gap: var(--space-4)            /* 16px */
--card-header-padding: var(--space-6) /* 24px */
```

### Forms
```css
--form-field-padding: var(--space-3)  /* 12px */
--form-field-gap: var(--space-4)      /* 16px */
--form-group-gap: var(--space-6)      /* 24px */
--form-label-gap: var(--space-2)      /* 8px */
```

---

## 📋 Usage Guidelines

### Do's ✅
- Stick to the spacing scale values
- Use consistent spacing throughout the application
- Increase spacing to create visual hierarchy
- Use larger spacing for breathing room and focus

### Don'ts ❌
- Don't use arbitrary spacing values outside the scale
- Avoid inconsistent spacing between similar elements
- Don't use too little spacing (causes cramped UI)
- Avoid using the same spacing for different hierarchy levels

---

## 📱 Responsive Spacing

Spacing can be reduced on mobile devices for space efficiency:

```css
/* Example responsive spacing */
.section {
  padding: var(--space-4);  /* Mobile: 16px */
}

@media (min-width: 768px) {
  .section {
    padding: var(--space-6);  /* Tablet: 24px */
  }
}

@media (min-width: 1024px) {
  .section {
    padding: var(--space-8);  /* Desktop: 32px */
  }
}
```

---

## 🎨 Visual Examples

### Spacing Relationships

**Related elements:** Tight spacing (4-8px)
- Label and input
- Icon and text in button
- List items in a group

**Component internals:** Base spacing (16px)
- Card padding
- Form field padding
- Button groups

**Section divisions:** Comfortable-Spacious (24-48px)
- Between cards
- Page sections
- Major UI divisions

**Page-level:** Extra spacious (48-64px+)
- Page margins
- Hero sections
- Major layout divisions

---

## 📊 Complete Spacing Token Reference

### Core Spacing Scale

| Token | Value | Name | Usage |
|-------|-------|------|-------|
| `spacing-none` | 0px | None | No spacing, flush elements |
| `spacing-2` | 2px | 2X-Small | Minimal spacing, tight elements |
| `spacing-4` | 4px | X-Small | Very tight, icon spacing |
| `spacing-6` | 6px | Small | Label to input, tight groups |
| `spacing-8` | 8px | Base | **Base unit** - component internals |
| `spacing-10` | 10px | Medium | Form fields, small padding |
| `spacing-12` | 12px | Medium+ | Button padding, card internals |
| `spacing-16` | 16px | Large | **Standard** - cards, sections |
| `spacing-20` | 20px | Large+ | Comfortable padding |
| `spacing-24` | 24px | X-Large | Section spacing |
| `spacing-32` | 32px | 2X-Large | Major sections |
| `spacing-40` | 40px | 3X-Large | Page sections |
| `spacing-48` | 48px | 4X-Large | Large sections |
| `spacing-64` | 64px | 5X-Large | Hero sections |
| `spacing-80` | 80px | Huge | Maximum spacing |

### Page Layout Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `spacing-page-grid-margin` | 16px | Page side margins |
| `spacing-page-grid-gutter` | 8px | Grid column gutters |

### Spacing System Guidelines

**Use the 8px base unit:**
- Most spacing should be multiples of 8: 8, 16, 24, 32, 40, 48, 64, 80
- Use 4px increments for fine-tuning: 4, 12, 20
- Use 2px only for very tight spacing
- Avoid arbitrary values - stick to the scale

**Responsive Spacing:**
- Mobile: Reduce by 25-50% (e.g., 64px → 32-48px)
- Tablet: Reduce by 15-25%
- Desktop: Use full scale

> **Last Updated:** Extracted from Figma Spacing.json tokens (2025-10-22)

---

**Next Steps:**
- [Tokens →](./tokens.md)
- [Typography →](./typography.md)
