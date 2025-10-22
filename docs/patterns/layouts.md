# Page Layouts

> Standard page templates and layout patterns for consistent structure.

---

## 📐 Layout Templates

### Marketing Page Layout
Full-width hero with content sections.

**Structure:**
```
├── Header (fixed/sticky)
├── Hero Section (full-width)
├── Content Sections
│   ├── Features
│   ├── Services
│   ├── Testimonials
│   └── CTA Section
└── Footer
```

### Dashboard Layout
Application dashboard with sidebar navigation.

**Structure:**
```
├── Top Navigation Bar
├── Main Container
│   ├── Sidebar (collapsible)
│   └── Content Area
│       ├── Page Header
│       ├── Main Content
│       └── Actions
└── Footer (optional)
```

### Form Layout
Focused layout for forms and multi-step processes.

**Structure:**
```
├── Header (minimal)
├── Main Container (centered, constrained width)
│   ├── Progress Indicator (for multi-step)
│   ├── Form Content
│   └── Action Buttons
└── Footer (minimal)
```

### Content Layout
Text-heavy content with sidebar.

**Structure:**
```
├── Header
├── Breadcrumbs
├── Main Container
│   ├── Sidebar (table of contents)
│   └── Content Area
│       ├── Article Header
│       ├── Article Body
│       └── Related Content
└── Footer
```

---

## 📱 Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Collapsible navigation
- Full-width sections
- Stacked content

### Tablet (768px - 1024px)
- Hybrid layouts (2 columns where appropriate)
- Toggle sidebar visibility
- Adjusted spacing

### Desktop (> 1024px)
- Full layout with sidebars
- Multi-column grids
- Expanded navigation
- Optimal spacing

---

## 📏 Layout Specifications

### Container Widths
```css
--container-sm: 640px   /* Small container */
--container-md: 768px   /* Medium container */
--container-lg: 1024px  /* Large container */
--container-xl: 1280px  /* Extra large container */
--container-2xl: 1536px /* 2X large container */
--container-full: 100%  /* Full width */
```

### Grid System
```css
/* 12-column grid */
display: grid;
grid-template-columns: repeat(12, 1fr);
gap: var(--spacing-md);
```

### Common Breakpoints
```css
--breakpoint-sm: 640px
--breakpoint-md: 768px
--breakpoint-lg: 1024px
--breakpoint-xl: 1280px
--breakpoint-2xl: 1536px
```

---

## 📋 Usage Guidelines

### Content Width
- Keep text content between 60-75 characters per line
- Use constrained widths for readability
- Allow images and media to go wider

### Spacing
- Maintain consistent spacing between sections
- Use larger spacing for major divisions
- Reduce spacing on mobile for efficiency

### White Space
- Use generously to create breathing room
- Don't pack content too tightly
- Balance content and empty space

---

## 🔄 Auto-generated Section

> **Note:** To add detailed specifications:
> 1. Export the "Layouts" page from Figma
> 2. Run `npm run docs:update-layouts`
> 3. Full documentation will be generated with visual examples

---

**Related:**
- [Responsive Patterns →](./responsive.md)
- [Navigation →](../components/navigation.md)
