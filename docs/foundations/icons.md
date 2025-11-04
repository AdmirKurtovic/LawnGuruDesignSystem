# Icons

> A comprehensive icon library that supports LawnGuru's visual language.


## 🎨 Icon System

LawnGuru's icon system provides a consistent set of symbols for navigation, actions, and information display.

### Icon Style
- **Style:** [Outlined/Filled/Rounded - To be documented]
- **Weight:** [Regular/Medium/Bold - To be documented]
- **Grid:** 24x24px base grid
- **Stroke:** [1px/1.5px/2px - To be documented]


## 📏 Icon Sizes

```css
--icon-xs: 12px   /* Extra small - inline text icons */
--icon-sm: 16px   /* Small - compact UI, buttons */
--icon-md: 20px   /* Medium - standard UI elements */
--icon-base: 24px /* Base - default icon size */
--icon-lg: 32px   /* Large - prominent actions */
--icon-xl: 40px   /* Extra large - hero sections */
--icon-2xl: 48px  /* 2X large - feature highlights */
```


## 📦 Icon Categories

### Navigation Icons
Used for app navigation and wayfinding.

**Common icons:**
- Home
- Menu / Hamburger
- Back / Arrow left
- Forward / Arrow right
- Close / X
- Search

### Action Icons
Interactive icons for user actions.

**Common icons:**
- Add / Plus
- Edit / Pencil
- Delete / Trash
- Save / Checkmark
- Cancel / X
- Refresh / Reload
- Upload / Download
- Share
- Filter
- Settings / Gear

### Status Icons
Communicate status and feedback.

**Common icons:**
- Success / Checkmark circle
- Error / X circle
- Warning / Alert triangle
- Info / Information circle
- Loading / Spinner

### Content Icons
Represent content types and features.

**Common icons:**
- Calendar / Date
- Location / Pin
- User / Profile
- Phone
- Email
- Document
- Image
- Video
- Link

### LawnGuru-Specific Icons
Custom icons for lawn care features.

**Common icons:**
- Lawn mower
- Grass
- Tree
- Garden tools
- Fertilizer
- Weather
- Seasons
- Property / Yard


## 🎯 Usage Guidelines

### Do's ✅
- Use icons consistently across the app
- Pair icons with labels for clarity
- Maintain proper icon-to-text size ratios
- Use appropriate icon sizes for context
- Ensure icons have sufficient contrast

### Don'ts ❌
- Don't mix icon styles (outlined + filled)
- Avoid using icons without labels for primary actions
- Don't resize icons outside the size scale
- Avoid decorative icons that add no meaning
- Don't use too many icons in one view


## ♿ Accessibility

### Icon Accessibility Requirements
1. **Always provide labels** for interactive icons
2. **Use ARIA labels** when icons are used without visible text
3. **Sufficient contrast** (3:1 minimum for UI elements)
4. **Touch targets** minimum 44x44px for interactive icons

**Examples:**

```html
<!-- Icon with visible label -->
<button>
  <Icon name="trash" size="md" />
  <span>Delete</span>
</button>

<!-- Icon-only button with aria-label -->
<button aria-label="Delete item">
  <Icon name="trash" size="md" />
</button>

<!-- Decorative icon (hidden from screen readers) -->
<Icon name="decorative-element" aria-hidden="true" />
```


## 💻 Implementation

### React Component
```tsx
import { Icon } from '@lawnguru/ui';

// Basic usage
<Icon name="lawn-mower" />

// With size
<Icon name="lawn-mower" size="lg" />

// With color
<Icon name="lawn-mower" className="text-primary" />

// With custom props
<Icon
  name="lawn-mower"
  size="md"
  aria-label="Lawn mowing service"
/>
```

### CSS Classes
```html
<!-- Using utility classes -->
<i class="icon icon-lawn-mower icon-md"></i>
```

### SVG Usage
```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <!-- Icon path -->
</svg>
```


## 📤 Exporting Icons

### For Developers
Icons are available in multiple formats:

- **SVG Files** - Individual .svg files
- **Icon Font** - Web font with all icons
- **React Components** - Importable React components
- **Sprite Sheet** - Single SVG sprite for web optimization

### Icon Package
```bash
npm install @lawnguru/icons
```

```javascript
import { LawnMowerIcon, SearchIcon } from '@lawnguru/icons';
```


## 🎨 Icon Colors

Icons can be rendered in different colors for different contexts:

```css
/* Default/Primary */
.icon-primary {
  color: var(--color-primary);
}

/* Secondary */
.icon-secondary {
  color: var(--color-gray-600);
}

/* Success */
.icon-success {
  color: var(--color-success);
}

/* Error */
.icon-error {
  color: var(--color-error);
}

/* Warning */
.icon-warning {
  color: var(--color-warning);
}

/* Inherit from parent */
.icon-inherit {
  color: currentColor;
}
```


## 📊 Icon Inventory

### Total Icons: [To be documented]

**Categories:**
- Navigation: [Count]
- Actions: [Count]
- Status: [Count]
- Content: [Count]
- LawnGuru-specific: [Count]


## 🔄 Auto-generated Section

> **Note:** To update this section with complete icon library:
> 1. Export the "Icons and graphics" page from Figma
> 2. Run `npm run docs:update-icons`
> 3. Icon catalog will be automatically generated with visual examples


**Next Steps:**
- [Colors →](./colors.md)
- [Components →](../components/buttons.md)
