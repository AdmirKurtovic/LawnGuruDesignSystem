# Color Palette

> LawnGuru's color system is designed to create a fresh, natural, and trustworthy brand experience.

---

## 🎨 Brand Colors

### Primary Green (Grass Theme)
The signature LawnGuru green represents growth, nature, and vitality. Multiple shades available for different use cases.

```css
/* Primary Green Scale - from lightest to darkest */
--grass-50: [Lightest green]
--grass-100: [Very light green]
--grass-200: [Light green]
--grass-300: [Medium-light green]
--grass-400: [Medium green]
--grass-500: [Base green - Primary brand color]
--grass-600: [Medium-dark green]
--grass-700: [Dark green]
--grass-800: [Very dark green]
--grass-900: [Darkest green]
```

**Usage:**
- Primary CTAs and buttons (`--grass-600`)
- Active states (`--grass-700`)
- Links and interactive elements (`--grass-600`)
- Brand moments and highlights
- Hover states (darker shades)
- Backgrounds (lighter shades: 50-100)

---

## 🎨 Semantic Colors

The LawnGuru design system includes a complete set of semantic colors for conveying meaning and status.

### Success (Green)
```css
--success-light: [Light success green]
--success-base: [Base success green]
--success-dark: [Dark success green]
```

**Usage:** Confirmation messages, successful actions, positive status, completed states

### Error (Red)
```css
--error-light: [Light error red]
--error-base: [Base error red]
--error-dark: [Dark error red]
```

**Usage:** Error messages, destructive actions, alerts, validation errors, critical warnings

### Warning (Yellow/Amber)
```css
--warning-light: [Light warning yellow]
--warning-base: [Base warning yellow]
--warning-dark: [Dark warning yellow]
```

**Usage:** Warnings, caution states, pending actions, important notices

### Info (Blue)
```css
--info-light: [Light info blue]
--info-base: [Base info blue]
--info-dark: [Dark info blue]
```

**Usage:** Informational messages, tips, neutral notifications, help text

### Accent (Pink/Magenta)
```css
--accent-light: [Light accent]
--accent-base: [Base accent]
--accent-dark: [Dark accent]
```

**Usage:** Special highlights, featured content, promotional elements, call-outs

---

## ⚫⚪ Neutral Colors

### Gray Scale
A comprehensive gray scale from light to dark for text, borders, backgrounds, and UI elements.

```css
/* Gray Scale - from lightest to darkest */
--gray-50: [Lightest gray - subtle backgrounds]
--gray-100: [Very light gray - hover states]
--gray-200: [Light gray - borders]
--gray-300: [Medium-light gray - subtle borders]
--gray-400: [Medium gray - disabled text]
--gray-500: [Base gray - secondary text]
--gray-600: [Medium-dark gray - tertiary text]
--gray-700: [Dark gray - secondary headings]
--gray-800: [Very dark gray - body text]
--gray-900: [Darkest gray - primary headings]
```

**Usage:**
- **Text colors:**
  - Primary text: `--gray-900`
  - Secondary text: `--gray-700`
  - Tertiary/helper text: `--gray-500`
  - Disabled text: `--gray-400`
- **Borders and dividers:** `--gray-200` to `--gray-300`
- **Backgrounds:**
  - Subtle: `--gray-50`
  - Cards: `--gray-100`
  - Hover: `--gray-100` to `--gray-200`
- **Disabled states:** `--gray-400` text on `--gray-100` background

### Black & White
```css
--black: #000000 (or very dark gray)
--white: #FFFFFF
```

**Usage:**
- High contrast text on colored backgrounds
- Pure black for shadows and overlays
- Pure white for light backgrounds and reverse text

---

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

---

## ♿ Accessibility

All color combinations must meet WCAG 2.1 Level AA standards:
- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text** (18pt+): Minimum 3:1 contrast ratio
- **UI components**: Minimum 3:1 contrast ratio

### Color Blindness Considerations
- Don't rely solely on color to convey information
- Use patterns, icons, or labels in addition to color
- Test designs with color blindness simulators

---

## 🔄 Color System Overview

**Theme:** `theme-grass-light`

The LawnGuru color system is built on a comprehensive token-based approach with:
- **Primary colors:** Full green scale (grass-50 through grass-900)
- **Semantic colors:** Success, Error, Warning, Info, Accent
- **Neutrals:** Complete gray scale (gray-50 through gray-900)
- **Special:** Black and White for maximum contrast

### Extracting Exact Values

To get exact hex values from Figma:
1. Open the Figma design library
2. Select the "Tokens" page or color swatches
3. Use Figma's inspect panel to copy hex values
4. Or export as JSON using a Figma tokens plugin

> **Last Updated:** Generated from Figma screenshot (2025-10-22)

---

**Next Steps:**
- [Typography →](./typography.md)
- [Spacing →](./spacing.md)
