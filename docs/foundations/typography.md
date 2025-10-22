# Typography

> Clear, accessible typography that ensures readability across all LawnGuru experiences.

---

## 📝 Font Families

### Primary Font - Inter
```css
--font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Usage:** Body text, UI elements, general content, forms, buttons

**Why Inter?**
- Optimized for screen readability
- Excellent for UI/UX design
- Wide range of weights (100-900)
- Open source and free

### Display/Heading Font - Geist
```css
--font-family-heading: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Usage:** Headings, titles, hero text, marketing content

**Why Geist?**
- Modern, clean aesthetic
- Strong visual presence
- Perfect for headlines
- Excellent legibility

### Monospace Font
```css
--font-family-mono: 'Geist Mono', 'SF Mono', Monaco, 'Courier New', monospace;
```

**Usage:** Code snippets, technical content, data, numbers

---

## 📏 Type Scale

### Headings

#### Display / Heading 34
```css
--font-size-34: 34px;
--line-height-48: 48px;
--font-weight-700: 700; /* Bold */
```
**Usage:** Hero sections, marketing headlines, landing pages

#### Heading 28
```css
--font-size-28: 28px;
--line-height-38: 38px;
--font-weight-700: 700; /* Bold */
```
**Usage:** Page titles (H1), major section headers

#### Heading 22
```css
--font-size-22: 22px;
--line-height-32: 32px;
--font-weight-600: 600; /* Semibold */
```
**Usage:** Section headings (H2), card titles

#### Heading 20
```css
--font-size-20: 20px;
--line-height-28: 28px;
--font-weight-600: 600; /* Semibold */
```
**Usage:** Subsection headings (H3), panel titles

#### Heading 18
```css
--font-size-18: 18px;
--line-height-24: 24px;
--font-weight-600: 600; /* Semibold */
```
**Usage:** Component titles (H4), small section headers

---

### Body Text

#### Body 16 (Base)
```css
--font-size-16: 16px;
--line-height-24: 24px;
--font-weight-400: 400; /* Regular */
--font-weight-500: 500; /* Medium - for emphasis */
```
**Usage:** Standard body text, most UI text, paragraphs, descriptions

#### Body 14
```css
--font-size-14: 14px;
--line-height-20: 20px;
--font-weight-400: 400; /* Regular */
--font-weight-500: 500; /* Medium - for buttons/links */
```
**Usage:** Secondary text, form labels, button text, navigation

#### Body 12
```css
--font-size-12: 12px;
--line-height-16: 16px;
--font-weight-400: 400; /* Regular */
--font-weight-500: 500; /* Medium - for emphasis */
```
**Usage:** Captions, helper text, input hints, badges

#### Body 11
```css
--font-size-11: 11px;
--line-height-14: 14px;
--font-weight-400: 400; /* Regular */
```
**Usage:** Fine print, timestamps, metadata

#### Body 10 (Smallest)
```css
--font-size-10: 10px;
--line-height-12: 12px;
--font-weight-400: 400; /* Regular */
```
**Usage:** Legal text, extremely small labels (use sparingly)

---

## 🎯 Font Weights

```css
--font-weight-400: 400;  /* Regular - body text */
--font-weight-500: 500;  /* Medium - emphasis, buttons */
--font-weight-600: 600;  /* Semibold - headings, labels */
--font-weight-700: 700;  /* Bold - major headings, hero text */
```

**Usage Guidelines:**
- **Regular (400):** Default for all body text, paragraphs, descriptions
- **Medium (500):** Buttons, links, emphasized text, active states
- **Semibold (600):** Most headings (H2-H6), form labels, navigation
- **Bold (700):** Large headings (H1, Display), hero text, marketing content

---

## 📐 Letter Spacing

```css
--letter-spacing-tight-1-5: -1.5%;  /* Very tight */
--letter-spacing-tight-1: -1%;      /* Tight */
--letter-spacing-tight-0-5: -0.5%;  /* Slightly tight */
--letter-spacing-0: 0%;             /* Normal (default) */
--letter-spacing-wide-0-5: 0.5%;    /* Slightly wide */
--letter-spacing-wide-1: 1%;        /* Wide */
--letter-spacing-wide-1-5: 1.5%;    /* Very wide */
```

**Usage:**
- **Tight spacing (-0.5% to -1.5%):** Large headings, display text, hero sections
- **Normal (0%):** Body text, standard headings, most UI elements
- **Wide spacing (0.5% to 1.5%):** All caps text, small labels, buttons, tags

---

## 📱 Responsive Typography

Typography scales based on viewport size for optimal readability.

### Mobile (< 768px)
- Reduce heading sizes by 20-30%
- Maintain minimum 16px for body text
- Tighter line heights for compact layouts

### Tablet (768px - 1024px)
- Standard scale with slight adjustments
- Balance between mobile and desktop

### Desktop (> 1024px)
- Full type scale
- Optimal line lengths (50-75 characters)

---

## 📋 Usage Guidelines

### Do's ✅
- Use heading hierarchy properly (don't skip levels)
- Maintain consistent line heights for vertical rhythm
- Limit line length to 50-75 characters for body text
- Use proper font weights for emphasis

### Don'ts ❌
- Don't use more than 2-3 font families
- Avoid excessive font weights in a single view
- Don't use font sizes smaller than 12px (except legal text)
- Avoid all caps for long text (reduces readability)

---

## ♿ Accessibility

### Font Size
- Minimum body text: 16px
- Allow text to scale up to 200% without breaking layout
- Use relative units (rem, em) instead of pixels

### Line Height
- Body text: 1.5 minimum
- Headings: 1.2-1.3
- Dense UI: 1.4 minimum

### Text Spacing
- Letter spacing: Normal for body, slight increase for all caps
- Word spacing: Default (adjust only for specific cases)

---

## 🔄 Typography System Overview

**Primary Fonts:**
- **Geist** - Display and headings
- **Inter** - Body text and UI

**Complete Type Scale:**
- Display: 34px/48px (Bold 700)
- Headings: 28px, 22px, 20px, 18px
- Body: 16px (base), 14px, 12px, 11px, 10px
- Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- Letter spacing: -1.5% to +1.5%

> **Last Updated:** Extracted from Figma Font.json tokens (2025-10-22)
>
> **Note:** This typography system provides a comprehensive, accessible type scale optimized for digital interfaces. All sizes and line heights are designed to work together harmoniously.

---

## 📊 Complete Typography Token Reference

### Font Size Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `font-size-34` | 34px | Display, hero headings |
| `font-size-28` | 28px | H1, page titles |
| `font-size-24` | 24px | Large headings |
| `font-size-20` | 20px | H2, section headings |
| `font-size-18` | 18px | H3, subsection headings |
| `font-size-16` | 16px | **Base body text** |
| `font-size-15` | 15px | Medium body text |
| `font-size-14` | 14px | Small body text, UI labels |
| `font-size-13` | 13px | Small labels |
| `font-size-12` | 12px | Captions, helper text |
| `font-size-11` | 11px | Fine print |
| `font-size-10` | 10px | Smallest text, badges |

### Line Height (font-height) Tokens

| Token | Value | Best Paired With |
|-------|-------|------------------|
| `font-height-46` | 46px | font-size-34 |
| `font-height-38` | 38px | font-size-28 |
| `font-height-32` | 32px | font-size-24 |
| `font-height-28` | 28px | font-size-20 |
| `font-height-26` | 26px | font-size-18 |
| `font-height-25` | 25px | font-size-18 |
| `font-height-24` | 24px | font-size-16 (base) |
| `font-height-22` | 22px | font-size-15 |
| `font-height-21` | 21px | font-size-14 |
| `font-height-20` | 20px | font-size-14 |
| `font-height-18` | 18px | font-size-13 |
| `font-height-17` | 17px | font-size-12 |
| `font-height-15` | 15px | font-size-11 |
| `font-height-14` | 14px | font-size-10 |

### Font Family Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `font-family-geist` | Geist | Headings, display text |
| `font-family-inter` | Inter | Body text, UI elements |

### Font Weight Tokens

| Token | Value | Name | Usage |
|-------|-------|------|-------|
| `font-weight-700` | 700 | Bold | Large headings, emphasis |
| `font-weight-600` | 600 | Semibold | Headings, labels |
| `font-weight-500` | 500 | Medium | Subheadings, important UI |
| `font-weight-400` | 400 | Regular | Body text, default |

---

**Next Steps:**
- [Spacing →](./spacing.md)
- [Colors →](./colors.md)
