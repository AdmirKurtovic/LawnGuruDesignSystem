# Color Palette

> LawnGuru's color system is designed to create a fresh, natural, and trustworthy brand experience.


## 🎨 Brand Colors

### Primary Green (Grass Theme)
The signature LawnGuru green represents growth, nature, and vitality. Multiple shades available for different use cases.

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin: 24px 0;">
  <ColorSwatch name="grass-50" color="#F0FFEA" />
  <ColorSwatch name="grass-100" color="#E4FFDB" />
  <ColorSwatch name="grass-200" color="#BAFFA3" />
  <ColorSwatch name="grass-300" color="#8DFC72" />
  <ColorSwatch name="grass-400" color="#5DF53F" />
  <ColorSwatch name="grass-600" color="#00A31B" />
  <ColorSwatch name="grass-700 (PRIMARY)" color="#008934" />
  <ColorSwatch name="grass-800" color="#056535" />
  <ColorSwatch name="grass-900" color="#024B33" />
  <ColorSwatch name="grass-950" color="#003028" />
</div>

```css
/* Primary Green Scale - from lightest to darkest */
--grass-50: #F0FFEA;  /* Lightest green - subtle backgrounds */
--grass-100: #E4FFDB; /* Very light green - hover states */
--grass-200: #BAFFA3; /* Light green - light accents */
--grass-300: #8DFC72; /* Medium-light green - soft highlights */
--grass-400: #5DF53F; /* Medium green - interactive elements */
--grass-600: #00A31B; /* Medium-dark green - primary CTAs */
--grass-700: #008934; /* Dark green - PRIMARY BRAND COLOR */
--grass-800: #056535; /* Very dark green - hover states */
--grass-900: #024B33; /* Darker green - active states */
--grass-950: #003028; /* Darkest green - emphasis */
```

**Usage:**
- Primary CTAs and buttons (`--grass-600`)
- Active states (`--grass-700`)
- Links and interactive elements (`--grass-600`)
- Brand moments and highlights
- Hover states (darker shades)
- Backgrounds (lighter shades: 50-100)


## 🎨 Semantic Colors

The LawnGuru design system includes a complete set of semantic colors for conveying meaning and status.

### Success (Green)

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin: 24px 0;">
  <ColorSwatch name="success-light" color="#E4FFDB" />
  <ColorSwatch name="success-base" color="#008934" />
  <ColorSwatch name="success-dark" color="#024B33" />
</div>

```css
--success-light: #E4FFDB;  /* Light success green - backgrounds */
--success-base: #008934;   /* Base success green - primary */
--success-dark: #024B33;   /* Dark success green - emphasis */
```

**Usage:** Confirmation messages, successful actions, positive status, completed states

### Error / Critical (Red)

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin: 24px 0;">
  <ColorSwatch name="error-light" color="#FDEDEF" />
  <ColorSwatch name="error-base" color="#E5132E" />
  <ColorSwatch name="error-dark" color="#790C1B" />
</div>

```css
--error-light: #FDEDEF;  /* Light error red - backgrounds */
--error-base: #E5132E;   /* Base error red - primary */
--error-dark: #790C1B;   /* Dark error red - emphasis */
```

**Usage:** Error messages, destructive actions, alerts, validation errors, critical warnings

### Warning (Yellow)

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin: 24px 0;">
  <ColorSwatch name="warning-light" color="#FDF6DB" />
  <ColorSwatch name="warning-base" color="#FFCC00" />
  <ColorSwatch name="warning-dark" color="#6D4607" />
</div>

```css
--warning-light: #FDF6DB;  /* Light warning yellow - backgrounds */
--warning-base: #FFCC00;   /* Base warning yellow - primary */
--warning-dark: #6D4607;   /* Dark warning yellow - emphasis */
```

**Usage:** Warnings, caution states, pending actions, important notices

### Info / Interactive (Blue)

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin: 24px 0;">
  <ColorSwatch name="info-light" color="#E0F3FE" />
  <ColorSwatch name="info-base" color="#0B65E3" />
  <ColorSwatch name="info-dark" color="#0A1D56" />
</div>

```css
--info-light: #E0F3FE;  /* Light info blue - backgrounds */
--info-base: #0B65E3;   /* Base info blue - primary */
--info-dark: #0A1D56;   /* Dark info blue - emphasis */
```

**Usage:** Informational messages, tips, neutral notifications, help text, interactive elements

### Accent (Pink/Magenta)

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin: 24px 0;">
  <ColorSwatch name="accent-base" color="#DD086C" />
  <ColorSwatch name="accent-alt" color="#F6539F" />
</div>

```css
--accent-base: #DD086C;  /* Base accent - from Figma */
--accent-alt: #F6539F;   /* Alternative accent - grass-dark theme */
```

**Usage:** Special highlights, featured content, promotional elements, call-outs


## ⚫⚪ Neutral Colors

### Gray Scale
A comprehensive gray scale from light to dark for text, borders, backgrounds, and UI elements.

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin: 24px 0;">
  <ColorSwatch name="neutral-00" color="#FFFFFF" />
  <ColorSwatch name="neutral-50" color="#F6F6F6" />
  <ColorSwatch name="neutral-100" color="#F1F1F1" />
  <ColorSwatch name="neutral-900" color="#2A2A2A" />
  <ColorSwatch name="neutral-950" color="#0B0B0B" />
  <ColorSwatch name="neutral-1000" color="#000000" />
</div>

```css
/* Neutral Scale - from lightest to darkest */
--neutral-00: #FFFFFF;   /* Pure white - page backgrounds */
--neutral-50: #F6F6F6;   /* Lightest gray - subtle backgrounds */
--neutral-100: #F1F1F1;  /* Very light gray - cards, hover states */
--neutral-900: #2A2A2A;  /* Dark gray - secondary text */
--neutral-950: #0B0B0B;  /* Darkest gray - primary text, headings */
--neutral-1000: #000000; /* Pure black - maximum contrast */
```

**Usage:**
- **Text colors:**
  - Primary text: `--neutral-950` (#0B0B0B)
  - Secondary text: `--neutral-900` (#2A2A2A)
- **Backgrounds:**
  - Primary/Page: `--neutral-00` (#FFFFFF)
  - Subtle/Secondary: `--neutral-50` (#F6F6F6)
  - Cards/Tertiary: `--neutral-100` (#F1F1F1)
- **Shadows and overlays:** `--neutral-950` or `--neutral-1000` with opacity
- **Maximum contrast:** `--neutral-00` (white) and `--neutral-1000` (black)


## 📋 Usage Guidelines

### Do's ✅
- Use primary green for main CTAs and brand moments
- Maintain sufficient contrast ratios (WCAG AA minimum: 4.5:1)
- Use semantic colors consistently for their intended purpose
- Test colors in both light and dark modes

### Don'ts ❌
- Don't use red for anything other than errors or destructive actions
- Don't override semantic color meanings
- Don't use colors as the only way to convey information
- Avoid using too many colors in a single interface


## ♿ Accessibility

All color combinations must meet WCAG 2.1 Level AA standards:
- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text** (18pt+): Minimum 3:1 contrast ratio
- **UI components**: Minimum 3:1 contrast ratio

### Color Blindness Considerations
- Don't rely solely on color to convey information
- Use patterns, icons, or labels in addition to color
- Test designs with color blindness simulators


## 🔄 Color System Overview

**Theme:** `theme-grass-light`

The LawnGuru color system is built on a comprehensive token-based approach with:
- **Primary colors:** Full green scale (grass-50 through grass-900)
- **Semantic colors:** Success, Error, Warning, Info, Accent
- **Neutrals:** Complete gray scale (gray-50 through gray-900)
- **Special:** Black and White for maximum contrast

## 🎨 Complete Color Palette Reference

### All Green Palette Colors
| Variable | Hex Code | Usage |
|----------|----------|-------|
| `--green-50` | `#F0FFEA` | Lightest tint |
| `--green-100` | `#E4FFDB` | Success backgrounds |
| `--green-200` | `#BAFFA3` | Light accents |
| `--green-300` | `#8DFC72` | Medium-light |
| `--green-400` | `#5DF53F` | Interactive states |
| `--green-600` | `#00A31B` | Primary CTAs |
| `--green-700` | `#008934` | **PRIMARY BRAND** |
| `--green-800` | `#056535` | Dark states |
| `--green-900` | `#024B33` | Very dark |
| `--green-950` | `#003028` | Darkest |

### All Blue Palette Colors
| Variable | Hex Code | Usage |
|----------|----------|-------|
| `--blue-100` | `#E0F3FE` | Info backgrounds |
| `--blue-400` | `#52B1FF` | Light interactive |
| `--blue-500` | `#2885FA` | Medium interactive |
| `--blue-600` | `#0B65E3` | Primary interactive |
| `--blue-900` | `#0A1D56` | Dark interactive |
| `--blue-950` | `#0C143B` | Darkest |

### All Red Palette Colors
| Variable | Hex Code | Usage |
|----------|----------|-------|
| `--red-100` | `#FDEDEF` | Error backgrounds |
| `--red-400` | `#FF7789` | Light error |
| `--red-600` | `#E5132E` | Primary error/critical |
| `--red-900` | `#790C1B` | Dark error |

### All Yellow Palette Colors
| Variable | Hex Code | Usage |
|----------|----------|-------|
| `--yellow-100` | `#FDF6DB` | Warning backgrounds |
| `--yellow-200` | `#FFF1AD` | Light warning |
| `--yellow-500` | `#FFCC00` | Primary warning |
| `--yellow-800` | `#6D4607` | Dark warning |
| `--yellow-900` | `#4C3209` | Darkest warning |

### Additional Palette Colors
| Variable | Hex Code | Usage |
|----------|----------|-------|
| `--platinum-100` | `#EDF0ED` | Alternative light background |
| `--platinum-900` | `#2E3731` | Alternative dark |
| `--silver-100` | `#EDF1F1` | Alternative subtle background |

> **Last Updated:** Extracted from Figma Color.json tokens (2025-10-22)
> **Primary Brand Color:** `#008934` (green-700)


## 🎯 Semantic Color Tokens

The design system uses semantic color tokens for consistent application of colors across different UI elements.

### Content/Text Colors

| Token | Usage | Grass-Light | Notes |
|-------|-------|-------------|-------|
| `color-content-primary` | Primary text | `#0B0B0B` (neutral-950) | Headings, body text |
| `color-content-secondary` | Secondary text | `#0B0B0B` @ 74% | Subtext, less emphasis |
| `color-content-tertiary` | Tertiary text | `#0B0B0B` @ 60% | Helper text, captions |
| `color-content-placeholder` | Placeholder text | `#0B0B0B` @ 48% | Form placeholders |
| `color-content-disabled` | Disabled text | `#0B0B0B` @ 36% | Disabled states |
| `color-content-brand` | Brand content | `#056535` (green-800) | Brand moments |
| `color-content-brand-on` | Brand on light | `#008934` (green-700) | Primary brand text |
| `color-content-brand-dark` | Brand dark | `#024B33` (green-900) | Dark brand text |
| `color-content-brand-loud` | Brand emphasis | `#003028` (green-950) | Strong emphasis |
| `color-content-interactive` | Interactive text | `#0B65E3` (blue-600) | Links, buttons |
| `color-content-ascent` | Accent content | `#DD086C` | Special highlights |
| `color-content-success` | Success text | `#056535` (green-800) | Success messages |
| `color-content-warning` | Warning text | `#6D4607` (yellow-800) | Warning messages |
| `color-content-critical` | Error text | `#E5132E` (red-600) | Error messages |
| `color-content-inverted-primary` | Inverted primary | `#FFFFFF` (neutral-00) | Text on dark backgrounds |
| `color-content-inverted-secondary` | Inverted secondary | `#FFFFFF` @ 88% | Secondary on dark |

### Border Colors

| Token | Grass-Light | Usage |
|-------|-------------|-------|
| `color-border-10` | `#0B0B0B` @ 10% | Subtle borders |
| `color-border-15` | `#0B0B0B` @ 15% | Light borders |
| `color-border-20` | `#0B0B0B` @ 20% | Default borders |
| `color-border-30` | `#0B0B0B` @ 30% | Medium borders |
| `color-border-40` | `#0B0B0B` @ 40% | Emphasized borders |
| `color-border-50` | `#0B0B0B` @ 50% | Strong borders |
| `color-border-60` | `#0B0B0B` @ 60% | Very strong borders |
| `color-border-success` | `#00A31B` (green-600) | Success indicators |
| `color-border-warning` | `#FFCC00` (yellow-500) | Warning indicators |
| `color-border-critical` | `#E5132E` (red-600) | Error indicators |
| `color-border-highlight` | `#00A31B` @ 74% | Highlighted borders |
| `color-border-inverted-10` | `#FFFFFF` @ 10% | Subtle inverted |
| `color-border-inverted-20` | `#FFFFFF` @ 20% | Inverted borders |

### Interactive State Colors

| Token | Grass-Light | Usage |
|-------|-------------|-------|
| `color-state-hover` | `#000000` @ 10% | Hover overlay |
| `color-state-pressed` | `#000000` @ 20% | Pressed/active overlay |
| `color-state-hover-inverted` | `#FFFFFF` @ 10% | Inverted hover |
| `color-state-pressed-inverted` | `#FFFFFF` @ 20% | Inverted pressed |

### Shadow Colors

Shadow tokens with varying opacity for depth and elevation:

**Neutral Shadows:**
| Token | Base Color | Opacity Range | Usage |
|-------|------------|---------------|-------|
| `color-shadow-neutral-*` | `#0B0B0B` | 7-15% | Standard shadows for cards, modals |

**Brand Shadows:**
| Token | Base Color | Opacity Range | Usage |
|-------|------------|---------------|-------|
| `color-shadow-brand-*` | `#003028` (green-950) | 8-16% | Brand element shadows |

*Note: Shadow tokens have multiple levels (e.g., -center-07, -center-08, etc.) for different elevation depths.*


**Next Steps:**
- [Typography →](./typography.md)
- [Spacing →](./spacing.md)
