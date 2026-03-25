# Design Tokens

> Design tokens are the building blocks of the LawnGuru design system. They store visual design attributes as data.


## 🎯 What are Design Tokens?

Design tokens are platform-agnostic variables that store design decisions. They ensure consistency across platforms and make it easy to update the design system at scale.

**Benefits:**
- Single source of truth for design values
- Platform-agnostic (works for web, mobile, etc.)
- Easy to maintain and update
- Enables theming and customization


## 📦 Token Categories

### Color Tokens
All color values used in the design system. Exported from Figma `Color.json`.

```json
{
  "color": {
    "brand": {
      "primary": { "value": "#008934", "type": "color" },
      "primary-light": { "value": "#00A31B", "type": "color" },
      "primary-dark": { "value": "#056535", "type": "color" }
    },
    "semantic": {
      "success": { "value": "#008934", "type": "color" },
      "error": { "value": "#E5132E", "type": "color" },
      "warning": { "value": "#FFCC00", "type": "color" },
      "info": { "value": "#0B65E3", "type": "color" }
    },
    "neutral": {
      "00": { "value": "#FFFFFF", "type": "color" },
      "50": { "value": "#F6F6F6", "type": "color" },
      "100": { "value": "#F1F1F1", "type": "color" },
      "900": { "value": "#2A2A2A", "type": "color" },
      "950": { "value": "#0B0B0B", "type": "color" },
      "1000": { "value": "#000000", "type": "color" }
    }
  }
}
```

### Typography Tokens
Font families, sizes, weights, and line heights. Exported from Figma `Font.json`.

```json
{
  "font": {
    "family": {
      "geist": { "value": "Geist", "type": "fontFamily" },
      "inter": { "value": "Inter", "type": "fontFamily" }
    },
    "size": {
      "10": { "value": "10px", "type": "fontSize" },
      "11": { "value": "11px", "type": "fontSize" },
      "12": { "value": "12px", "type": "fontSize" },
      "13": { "value": "13px", "type": "fontSize" },
      "14": { "value": "14px", "type": "fontSize" },
      "15": { "value": "15px", "type": "fontSize" },
      "16": { "value": "16px", "type": "fontSize" },
      "18": { "value": "18px", "type": "fontSize" },
      "20": { "value": "20px", "type": "fontSize" },
      "24": { "value": "24px", "type": "fontSize" },
      "28": { "value": "28px", "type": "fontSize" },
      "34": { "value": "34px", "type": "fontSize" }
    },
    "height": {
      "14": { "value": "14px", "type": "lineHeight" },
      "15": { "value": "15px", "type": "lineHeight" },
      "17": { "value": "17px", "type": "lineHeight" },
      "18": { "value": "18px", "type": "lineHeight" },
      "20": { "value": "20px", "type": "lineHeight" },
      "21": { "value": "21px", "type": "lineHeight" },
      "22": { "value": "22px", "type": "lineHeight" },
      "24": { "value": "24px", "type": "lineHeight" },
      "25": { "value": "25px", "type": "lineHeight" },
      "26": { "value": "26px", "type": "lineHeight" },
      "28": { "value": "28px", "type": "lineHeight" },
      "32": { "value": "32px", "type": "lineHeight" },
      "38": { "value": "38px", "type": "lineHeight" },
      "46": { "value": "46px", "type": "lineHeight" }
    },
    "weight": {
      "400": { "value": 400, "type": "fontWeight" },
      "500": { "value": 500, "type": "fontWeight" },
      "600": { "value": 600, "type": "fontWeight" },
      "700": { "value": 700, "type": "fontWeight" }
    }
  }
}
```

### Spacing Tokens
Spacing scale and page layout spacing. Exported from Figma `Spacing.json`.

```json
{
  "spacing": {
    "none": { "value": "0px", "type": "spacing" },
    "2": { "value": "2px", "type": "spacing" },
    "4": { "value": "4px", "type": "spacing" },
    "6": { "value": "6px", "type": "spacing" },
    "8": { "value": "8px", "type": "spacing" },
    "10": { "value": "10px", "type": "spacing" },
    "12": { "value": "12px", "type": "spacing" },
    "16": { "value": "16px", "type": "spacing" },
    "20": { "value": "20px", "type": "spacing" },
    "24": { "value": "24px", "type": "spacing" },
    "32": { "value": "32px", "type": "spacing" },
    "40": { "value": "40px", "type": "spacing" },
    "48": { "value": "48px", "type": "spacing" },
    "64": { "value": "64px", "type": "spacing" },
    "80": { "value": "80px", "type": "spacing" }
  },
  "page-layout": {
    "grid-margin": { "value": "16px", "type": "spacing" },
    "grid-gutter": { "value": "8px", "type": "spacing" }
  }
}
```

### Border Tokens
Border widths, radii, and styles. Exported from Figma `Shape.json`.

```json
{
  "radius": {
    "none": { "value": "0px", "type": "borderRadius" },
    "3xs": { "value": "2px", "type": "borderRadius" },
    "2xs": { "value": "4px", "type": "borderRadius" },
    "xs": { "value": "6px", "type": "borderRadius" },
    "sm": { "value": "8px", "type": "borderRadius" },
    "md": { "value": "10px", "type": "borderRadius" },
    "lg": { "value": "12px", "type": "borderRadius" },
    "xl": { "value": "16px", "type": "borderRadius" },
    "2xl": { "value": "20px", "type": "borderRadius" },
    "3xl": { "value": "24px", "type": "borderRadius" },
    "4xl": { "value": "32px", "type": "borderRadius" },
    "full": { "value": "999px", "type": "borderRadius" }
  },
  "border-width": {
    "none": { "value": "0px", "type": "borderWidth" },
    "thin": { "value": "0.5px", "type": "borderWidth" },
    "regular": { "value": "1px", "type": "borderWidth" },
    "medium": { "value": "1.5px", "type": "borderWidth" },
    "semibold": { "value": "2px", "type": "borderWidth" },
    "bold": { "value": "3px", "type": "borderWidth" },
    "black": { "value": "4px", "type": "borderWidth" }
  }
}
```

### Shadow Tokens
Elevation and shadow effects. See [Effects & Borders](./effects-and-borders.md) for full reference.

```json
{
  "shadow": {
    "center-01": { "value": "0px 1px 2px rgba(11, 11, 11, 0.06)", "type": "boxShadow" },
    "center-03": { "value": "0px 2px 4px rgba(11, 11, 11, 0.10)", "type": "boxShadow" },
    "center-05": { "value": "0px 8px 12px rgba(11, 11, 11, 0.10)", "type": "boxShadow" },
    "center-07": { "value": "0px 16px 24px rgba(11, 11, 11, 0.14)", "type": "boxShadow" },
    "brand-center": { "value": "0px 4px 12px rgba(0, 48, 40, 0.20)", "type": "boxShadow" }
  }
}
```

### Animation Tokens
Durations, easing functions, and timing.

```json
{
  "animation": {
    "duration": {
      "fast": {
        "value": "150ms",
        "type": "duration"
      },
      "base": {
        "value": "250ms",
        "type": "duration"
      },
      "slow": {
        "value": "350ms",
        "type": "duration"
      }
    },
    "easing": {
      "ease-in": {
        "value": "cubic-bezier(0.4, 0, 1, 1)",
        "type": "cubicBezier"
      },
      "ease-out": {
        "value": "cubic-bezier(0, 0, 0.2, 1)",
        "type": "cubicBezier"
      },
      "ease-in-out": {
        "value": "cubic-bezier(0.4, 0, 0.2, 1)",
        "type": "cubicBezier"
      }
    }
  }
}
```


## 🔧 Token Format

Tokens follow the [W3C Design Token Format](https://tr.designtokens.org/format/) specification.

```json
{
  "token-name": {
    "value": "actual value",
    "type": "token type",
    "description": "Optional description"
  }
}
```


## 📤 Exporting Tokens

### For Developers

**CSS Variables:**
```css
:root {
  --color-primary: #008934;
  --spacing-md: 16px;
  --font-size-base: 16px;
  --radius-md: 10px;
}
```

**JavaScript/TypeScript:**
```javascript
export const tokens = {
  color: {
    primary: '#008934',
  },
  spacing: {
    md: '16px',
  },
};
```

**Tailwind CSS v4 (current app setup):**

The Next.js app uses Tailwind CSS v4 with OKLCH color space tokens defined in `globals.css`. shadcn/ui tokens are mapped via the `@theme inline` directive:

```css
@theme inline {
  --color-primary: var(--primary);         /* oklch(0.527 0.154 149.75) ≈ #16a34a */
  --color-destructive: var(--destructive);
  --radius-lg: var(--radius);              /* 0.5rem base */
}
```

### For Mobile (React Native)

```javascript
export const tokens = {
  colors: {
    primary: '#008934',
  },
  spacing: {
    md: 16,
  },
};
```


## 🎨 Token Usage in Components

```css
.button-primary {
  background-color: var(--color-primary);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  transition: all var(--animation-duration-base) var(--animation-easing-ease-out);
}
```


## 🔄 Updating Tokens

### From Figma
1. Export design tokens from Figma using the Tokens Studio plugin
2. Convert to desired format (CSS, JS, JSON)
3. Run `npm run tokens:build` to generate platform-specific files
4. Commit and deploy changes

### Token Pipeline
```
Figma → tokens.json → Transform → CSS/JS/iOS/Android → Distribute
```


## 📋 Token Naming Convention

Tokens follow a hierarchical naming structure:

```
[category]-[property]-[variant?]-[state?]
```

**Examples:**
- `color-brand-primary`
- `spacing-component-button-padding-x`
- `font-size-heading-h1`
- `border-radius-card`


## 🔄 Token Sources

Token JSON files are exported from Figma and stored in `/Tokens/`:

| File | Contents |
|------|----------|
| `Color.json` | Full color palette with theme modes (grass-light, grass-dark) |
| `Font.json` | Font sizes, line heights, families, weights |
| `Spacing.json` | Spacing scale and page layout tokens |
| `Shape.json` | Border radius and border width tokens |

> **Last Updated:** 2026-03-25 (synced with Figma token exports)

**Next Steps:**
- [Colors →](./colors.md)
- [Typography →](./typography.md)
- [Spacing →](./spacing.md)
