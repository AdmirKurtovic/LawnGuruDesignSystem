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
All color values used in the design system.

```json
{
  "color": {
    "brand": {
      "primary": {
        "value": "#[To be documented]",
        "type": "color"
      }
    },
    "semantic": {
      "success": {
        "value": "#[To be documented]",
        "type": "color"
      },
      "error": {
        "value": "#[To be documented]",
        "type": "color"
      }
    }
  }
}
```

### Typography Tokens
Font families, sizes, weights, and line heights.

```json
{
  "font": {
    "family": {
      "primary": {
        "value": "[To be documented]",
        "type": "fontFamily"
      }
    },
    "size": {
      "base": {
        "value": "16px",
        "type": "fontSize"
      }
    }
  }
}
```

### Spacing Tokens
Spacing scale and component-specific spacing.

```json
{
  "spacing": {
    "scale": {
      "4": {
        "value": "16px",
        "type": "spacing"
      }
    }
  }
}
```

### Border Tokens
Border widths, radii, and styles.

```json
{
  "border": {
    "radius": {
      "sm": {
        "value": "[To be documented]",
        "type": "borderRadius"
      },
      "md": {
        "value": "[To be documented]",
        "type": "borderRadius"
      },
      "lg": {
        "value": "[To be documented]",
        "type": "borderRadius"
      },
      "full": {
        "value": "9999px",
        "type": "borderRadius"
      }
    },
    "width": {
      "thin": {
        "value": "1px",
        "type": "borderWidth"
      },
      "medium": {
        "value": "2px",
        "type": "borderWidth"
      },
      "thick": {
        "value": "4px",
        "type": "borderWidth"
      }
    }
  }
}
```

### Shadow Tokens
Elevation and shadow effects.

```json
{
  "shadow": {
    "sm": {
      "value": "[To be documented]",
      "type": "boxShadow"
    },
    "md": {
      "value": "[To be documented]",
      "type": "boxShadow"
    },
    "lg": {
      "value": "[To be documented]",
      "type": "boxShadow"
    }
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
  --color-primary: #[value];
  --spacing-md: 16px;
  --font-size-base: 16px;
}
```

**JavaScript/TypeScript:**
```javascript
export const tokens = {
  color: {
    primary: '#[value]',
  },
  spacing: {
    md: '16px',
  },
};
```

**Tailwind Config:**
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#[value]',
      },
      spacing: {
        md: '16px',
      },
    },
  },
};
```

### For Mobile (React Native)

```javascript
export const tokens = {
  colors: {
    primary: '#[value]',
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


## 🔄 Auto-generated Section

> **Note:** To update this section with exact values from Figma:
> 1. Export the "Tokens" page from Figma
> 2. Run `npm run docs:update-tokens`
> 3. Token files will be automatically generated


**Next Steps:**
- [Colors →](./colors.md)
- [Typography →](./typography.md)
- [Spacing →](./spacing.md)
