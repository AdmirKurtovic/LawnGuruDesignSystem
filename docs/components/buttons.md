# Button Components

> Buttons are interactive elements that trigger actions or navigate users through the application.


## Overview
LawnGuru's button system consists of two main button types: **CTA Button** (Call-to-Action) and **Link Button**, each with multiple variants and states.


## 🟢 CTA Button (Primary Action Button)

### Description
High-emphasis button used for primary actions and conversions. Features solid backgrounds with clear visual hierarchy.

### Variants

#### **Primary (Green)**
- **Purpose**: Main call-to-action, primary user actions
- **Use cases**: Submit forms, Start service, Book now, Sign up
- **States**: Default, Hover, Active, Focus, Disabled, Loading

**Visual specs:**
```css
/* Primary Button */
background: var(--color-primary);
color: var(--color-white);
border: none;
border-radius: var(--border-radius-md);
padding: var(--button-padding-y-md) var(--button-padding-x-md);
font-weight: var(--font-weight-semibold);

/* Hover */
background: var(--color-primary-600);
transform: translateY(-1px);
box-shadow: var(--shadow-md);

/* Active */
background: var(--color-primary-700);
transform: translateY(0);

/* Disabled */
background: var(--color-gray-300);
color: var(--color-gray-500);
cursor: not-allowed;
```

#### **Secondary (White/Gray)**
- **Purpose**: Secondary actions, less emphasis
- **Use cases**: Cancel, Go back, Learn more
- **States**: Default, Hover, Active, Focus, Disabled

**Visual specs:**
```css
/* Secondary Button */
background: var(--color-white);
color: var(--color-gray-900);
border: 1px solid var(--color-gray-300);
border-radius: var(--border-radius-md);
padding: var(--button-padding-y-md) var(--button-padding-x-md);
font-weight: var(--font-weight-semibold);

/* Hover */
background: var(--color-gray-50);
border-color: var(--color-gray-400);

/* Active */
background: var(--color-gray-100);
```

#### **Destructive (Red)**
- **Purpose**: Destructive or critical actions
- **Use cases**: Delete, Remove, Cancel subscription
- **States**: Default, Hover, Active, Focus, Disabled

**Visual specs:**
```css
/* Destructive Button */
background: var(--color-error);
color: var(--color-white);
border: none;
border-radius: var(--border-radius-md);
padding: var(--button-padding-y-md) var(--button-padding-x-md);
font-weight: var(--font-weight-semibold);

/* Hover */
background: var(--color-error-dark);
```


### Size Options

#### Large
```css
padding: 12px 24px;
font-size: 16px;
min-height: 48px;
```

#### Medium (Default)
```css
padding: 10px 20px;
font-size: 14px;
min-height: 40px;
```

#### Small
```css
padding: 8px 16px;
font-size: 14px;
min-height: 32px;
```


## 🔗 Link Button (Text Button)

### Description
Low-emphasis button styled as text links. Used for tertiary actions or navigation.

### Variants

#### **Primary (Green)**
- **Purpose**: Primary text actions, in-content links
- **Use cases**: View details, Read more, Learn about service

**Visual specs:**
```css
/* Link Button Primary */
background: transparent;
color: var(--color-primary);
border: none;
padding: var(--spacing-xs) var(--spacing-sm);
font-weight: var(--font-weight-medium);
text-decoration: underline;

/* Hover */
color: var(--color-primary-700);
text-decoration-thickness: 2px;
```

#### **Secondary (Gray)**
- **Purpose**: Less emphasized text actions
- **Use cases**: Secondary navigation, subtle CTAs

**Visual specs:**
```css
/* Link Button Secondary */
background: transparent;
color: var(--color-gray-700);
border: none;
text-decoration: underline;
```

#### **Destructive (Red)**
- **Purpose**: Destructive text actions
- **Use cases**: Remove item, Delete entry

**Visual specs:**
```css
/* Link Button Destructive */
background: transparent;
color: var(--color-error);
border: none;
text-decoration: underline;

/* Hover */
color: var(--color-error-dark);
```


## 📋 Usage Guidelines

### When to use CTA Button:
✅ Primary actions that move users forward
✅ Form submissions
✅ High-priority conversions
✅ Actions that commit changes

### When to use Link Button:
✅ Navigation within content
✅ Tertiary actions
✅ Less important actions
✅ Dense interfaces where visual weight matters

### Button Hierarchy Rules:
1. **One primary CTA per screen section** - Avoid competing CTAs
2. **Use secondary for alternative actions** - Provide options without distraction
3. **Use link buttons for low-priority actions** - Reduce visual noise
4. **Destructive actions should always be confirmed** - Prevent accidental deletions


## 💻 Implementation

### React Component

```tsx
import { Button } from '@lawnguru/ui';

// Primary CTA
<Button variant="primary" size="md">
  Book Service
</Button>

// Secondary CTA
<Button variant="secondary" size="md">
  Cancel
</Button>

// Destructive CTA
<Button variant="destructive" size="md">
  Delete Account
</Button>

// Link Button
<Button variant="link" size="md">
  Learn More
</Button>

// With icon
<Button variant="primary" size="md" icon={<ArrowIcon />}>
  Continue
</Button>

// Loading state
<Button variant="primary" size="md" loading>
  Processing...
</Button>

// Disabled state
<Button variant="primary" size="md" disabled>
  Unavailable
</Button>
```

### HTML/CSS

```html
<!-- Primary Button -->
<button class="btn btn-primary btn-md">
  Book Service
</button>

<!-- Secondary Button -->
<button class="btn btn-secondary btn-md">
  Cancel
</button>

<!-- Link Button -->
<button class="btn btn-link btn-md">
  Learn More
</button>
```


## ♿ Accessibility Requirements

### Minimum Requirements:
- **Touch target**: Minimum 44x44px for mobile
- **Focus indicators**: Clear visible focus state (2px outline)
- **Color contrast**: WCAG AA minimum (4.5:1 for text)
- **Disabled buttons**: Not focusable via keyboard
- **Loading states**: Announce to screen readers

### ARIA Attributes:

```html
<!-- Basic button -->
<button type="button">Submit</button>

<!-- Loading button -->
<button type="button" aria-busy="true" aria-live="polite">
  <span class="sr-only">Loading...</span>
  Processing
</button>

<!-- Disabled button -->
<button type="button" disabled aria-disabled="true">
  Unavailable
</button>

<!-- Destructive action with confirmation -->
<button
  type="button"
  aria-label="Delete account - this action cannot be undone"
>
  Delete
</button>
```


## 📱 Responsive Behavior

### Mobile (< 768px)
- Consider full-width buttons for primary CTAs
- Minimum touch target: 44x44px
- Stack buttons vertically with 12px gap
- Reduce padding slightly if needed for fit

### Tablet (768px - 1024px)
- Standard button sizes
- Can use inline button groups
- Maintain proper spacing

### Desktop (> 1024px)
- Full size options available
- Inline button groups work well
- Hover states fully visible


## 🔄 State Transitions

```
Default → Hover → Active → Default
         ↓
       Focus (keyboard navigation)
         ↓
     Disabled (conditional)
         ↓
     Loading (async actions)
```

### Transition Timing:
```css
transition: all 150ms ease-out;
```


## 📊 Component Anatomy

```
┌─────────────────────────┐
│ ◄icon  Label  icon►     │  ← Button container
└─────────────────────────┘
  ↑      ↑        ↑
  │      │        └─ Optional trailing icon
  │      └────────── Button text (required)
  └────────────────── Optional leading icon

Spacing:
- Icon-to-text gap: 8px
- Horizontal padding: varies by size
- Vertical padding: varies by size
```


## 🎨 Design Tokens Used

```css
/* Colors */
--color-primary
--color-primary-600
--color-primary-700
--color-white
--color-gray-300
--color-error

/* Spacing */
--button-padding-x-sm
--button-padding-y-sm
--button-padding-x-md
--button-padding-y-md
--button-padding-x-lg
--button-padding-y-lg

/* Border */
--border-radius-md

/* Typography */
--font-weight-medium
--font-weight-semibold

/* Animation */
--animation-duration-fast
--animation-easing-ease-out
```


## 🔄 Auto-generated Section

> **Note:** This section was generated from Figma screenshots.
> **Last updated:** 2025-10-22
> **Source:** Design library → CTA Button & Link Button components


**Related Components:**
- [Forms →](./forms.md)
- [Navigation →](./navigation.md)

**Related Foundations:**
- [Colors →](../foundations/colors.md)
- [Spacing →](../foundations/spacing.md)
