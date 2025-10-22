# Effects & Borders

> Visual depth, blur effects, and border styling for the LawnGuru design system.

---

## 🌑 Shadows

LawnGuru uses a comprehensive shadow system to create visual hierarchy and depth. Shadows are available in three directions with multiple elevation levels.

### Shadow Types

#### Center Shadows
Shadows that appear evenly around all sides of an element.

```css
/* Center Shadows - Elevation levels 01-07 */
--shadow-center-01: 0px 1px 2px rgba(0, 0, 0, 0.06);
--shadow-center-02: 0px 1px 3px rgba(0, 0, 0, 0.10);
--shadow-center-03: 0px 2px 4px rgba(0, 0, 0, 0.10);
--shadow-center-04: 0px 4px 6px rgba(0, 0, 0, 0.10);
--shadow-center-05: 0px 8px 12px rgba(0, 0, 0, 0.10);
--shadow-center-06: 0px 12px 16px rgba(0, 0, 0, 0.12);
--shadow-center-07: 0px 16px 24px rgba(0, 0, 0, 0.14);
```

**Usage:**
- 01-02: Subtle depth for cards, inputs
- 03-04: Buttons, dropdowns, tooltips
- 05-06: Modals, popovers, floating panels
- 07: Hero sections, feature cards, large modals

#### Bottom Shadows
Shadows that appear primarily below the element (Y-axis offset).

```css
/* Bottom Shadows - Typical use for elevated elements */
--shadow-bottom-01: 0px 1px 2px rgba(0, 0, 0, 0.06);
--shadow-bottom-02: 0px 2px 4px rgba(0, 0, 0, 0.08);
--shadow-bottom-03: 0px 4px 6px rgba(0, 0, 0, 0.10);
--shadow-bottom-04: 0px 6px 8px rgba(0, 0, 0, 0.10);
--shadow-bottom-05: 0px 10px 15px rgba(0, 0, 0, 0.12);
--shadow-bottom-06: 0px 15px 25px rgba(0, 0, 0, 0.15);
--shadow-bottom-07: 0px 20px 40px rgba(0, 0, 0, 0.18);
```

**Usage:**
- Headers, navigation bars
- Sticky elements
- Floating action buttons
- Bottom sheets

#### Top Shadows
Shadows that appear primarily above the element (negative Y-axis offset).

```css
/* Top Shadows - For elements with reverse elevation */
--shadow-top-01: 0px -1px 2px rgba(0, 0, 0, 0.06);
--shadow-top-02: 0px -2px 4px rgba(0, 0, 0, 0.08);
--shadow-top-03: 0px -4px 6px rgba(0, 0, 0, 0.10);
--shadow-top-04: 0px -6px 8px rgba(0, 0, 0, 0.10);
--shadow-top-05: 0px -10px 15px rgba(0, 0, 0, 0.12);
--shadow-top-06: 0px -15px 25px rgba(0, 0, 0, 0.15);
--shadow-top-07: 0px -20px 40px rgba(0, 0, 0, 0.18);
```

**Usage:**
- Bottom navigation bars
- Footer elements
- Sticky bottom elements
- Reverse floating UI

### Brand Shadows
Special shadows using the primary brand color for emphasis.

```css
/* Center Brand Shadows - With green tint */
--shadow-center-brand: 0px 4px 12px rgba(34, 197, 94, 0.20);

/* Bottom Brand Shadows */
--shadow-bottom-brand: 0px 8px 16px rgba(34, 197, 94, 0.25);

/* Top Brand Shadows */
--shadow-top-brand: 0px -8px 16px rgba(34, 197, 94, 0.25);
```

**Usage:**
- Primary CTA buttons on hover
- Featured content
- Brand moments
- Special call-outs

---

## 💨 Background Blur

Glassmorphism effects for modern, layered interfaces.

```css
/* Background Blur Effects */
--bg-blur-01: blur(8px);   /* Subtle blur */
--bg-blur-02: blur(16px);  /* Medium blur */
--bg-blur-03: blur(24px);  /* Strong blur */
```

**Usage:**

**Subtle Blur (8px):**
- Header overlays on scroll
- Light frosted glass effects
- Subtle content separation

**Medium Blur (16px):**
- Modals and dialog backgrounds
- Dropdown menus with transparency
- Floating panels

**Strong Blur (24px):**
- Full-screen overlays
- Focus mode backgrounds
- Heavy glassmorphism effects

**Example:**
```css
.glass-effect {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: var(--bg-blur-02);
  -webkit-backdrop-filter: var(--bg-blur-02);
}
```

---

## 🔲 Border Radius

Rounded corners for softening interfaces and creating visual consistency.

```css
/* Border Radius Scale */
--radius-0: 0px;       /* Sharp corners */
--radius-2: 2px;       /* Subtle rounding */
--radius-4: 4px;       /* Small radius */
--radius-6: 6px;       /* Medium-small radius */
--radius-8: 8px;       /* Base radius (default) */
--radius-10: 10px;     /* Medium radius */
--radius-12: 12px;     /* Comfortable radius */
--radius-16: 16px;     /* Large radius */
--radius-20: 20px;     /* Extra large radius */
--radius-24: 24px;     /* Very large radius */
--radius-32: 32px;     /* Huge radius */
--radius-9999: 9999px; /* Fully rounded (pills, circles) */
```

**Usage Guidelines:**

| Component | Radius | Token |
|-----------|--------|-------|
| Buttons | 8px | `--radius-8` |
| Inputs | 6-8px | `--radius-6` or `--radius-8` |
| Cards | 12-16px | `--radius-12` or `--radius-16` |
| Modals | 16-20px | `--radius-16` or `--radius-20` |
| Badges/Tags | 12px or 9999px | `--radius-12` or `--radius-9999` |
| Pills | 9999px | `--radius-9999` |
| Avatars | 9999px | `--radius-9999` |
| Large containers | 20-24px | `--radius-20` or `--radius-24` |

---

## 📏 Border Width

Consistent border thickness for UI elements.

```css
/* Border Width Scale */
--border-width-0: 0px;     /* No border */
--border-width-0-5: 0.5px; /* Hairline */
--border-width-1: 1px;     /* Default border */
--border-width-1-5: 1.5px; /* Medium border */
--border-width-2: 2px;     /* Thick border */
--border-width-3: 3px;     /* Extra thick border */
--border-width-4: 4px;     /* Very thick border */
```

**Usage Guidelines:**

**Hairline (0.5px):**
- Subtle dividers
- Table cell borders
- Very light separators

**Default (1px):**
- Standard borders
- Input fields
- Card borders
- Dividers

**Medium (1.5px):**
- Emphasized borders
- Button outlines (secondary)
- Selected states

**Thick (2px):**
- Focus states
- Active borders
- Strong emphasis
- Checkbox/radio borders

**Extra Thick (3-4px):**
- Primary button focus rings
- Strong visual indicators
- Progress bars
- Loading states

---

## 📋 Usage Examples

### Elevated Card
```css
.card {
  background: white;
  border-radius: var(--radius-12);
  box-shadow: var(--shadow-center-03);
  border: var(--border-width-1) solid var(--gray-200);
}

.card:hover {
  box-shadow: var(--shadow-center-05);
}
```

### Primary Button
```css
.button-primary {
  border-radius: var(--radius-8);
  box-shadow: var(--shadow-bottom-02);
}

.button-primary:hover {
  box-shadow: var(--shadow-bottom-brand);
}

.button-primary:focus {
  outline: var(--border-width-2) solid var(--grass-600);
  outline-offset: 2px;
}
```

### Glass Modal
```css
.modal-backdrop {
  backdrop-filter: var(--bg-blur-03);
  background: rgba(0, 0, 0, 0.3);
}

.modal-content {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: var(--bg-blur-02);
  border-radius: var(--radius-20);
  box-shadow: var(--shadow-center-07);
  border: var(--border-width-1) solid rgba(255, 255, 255, 0.2);
}
```

### Input Field
```css
.input {
  border: var(--border-width-1) solid var(--gray-300);
  border-radius: var(--radius-6);
  box-shadow: var(--shadow-center-01);
}

.input:focus {
  border-color: var(--grass-600);
  border-width: var(--border-width-2);
  box-shadow: var(--shadow-center-02), 0 0 0 3px rgba(34, 197, 94, 0.1);
}
```

---

## 🎨 Design Principles

### Elevation Hierarchy
- **Level 1 (01-02):** Base content, cards, subtle elevation
- **Level 2 (03-04):** Interactive elements, buttons, dropdowns
- **Level 3 (05-06):** Floating UI, modals, important panels
- **Level 4 (07):** Maximum emphasis, hero content, large modals

### Consistency
- Use shadows consistently for similar component types
- Don't mix shadow directions unnecessarily
- Maintain shadow progression (don't jump from 01 to 07)

### Performance
- Use shadows sparingly on mobile devices
- Prefer lighter shadows for better performance
- Reduce blur radius on low-end devices

---

## ♿ Accessibility

### Shadow Considerations
- Don't rely on shadows alone for focus indicators
- Use sufficient border or outline for focus states
- Ensure shadows don't reduce text contrast

### Border Considerations
- Minimum 1px borders for clear separation
- Use color AND border to define boundaries
- Ensure sufficient contrast for border colors

---

## 🔄 System Overview

**From Figma Design Tokens:**
- **Shadows:** 3 directions × 7 levels + brand variants = 24 shadow tokens
- **Blur:** 3 levels (8px, 16px, 24px)
- **Border Radius:** 12 values (0-32px + 9999px for pills)
- **Border Width:** 7 values (0-4px including 0.5px hairline)

> **Last Updated:** Generated from Figma screenshots (2025-10-22)

---

**Next Steps:**
- [Colors →](./colors.md)
- [Typography →](./typography.md)
- [Spacing →](./spacing.md)
