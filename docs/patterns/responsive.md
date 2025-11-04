# Responsive Patterns

> Mobile-first responsive design patterns for LawnGuru.


## 📱 Mobile-First Approach

LawnGuru uses a mobile-first design strategy, starting with mobile layouts and progressively enhancing for larger screens.

### Benefits
- Better mobile performance
- Forced prioritization of content
- Easier to scale up than down
- Aligns with majority of users


## 🎯 Breakpoint Strategy

```css
/* Mobile first (default styles) */
.component {
  /* Mobile styles (< 768px) */
}

/* Tablet and up */
@media (min-width: 768px) {
  .component {
    /* Tablet styles */
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .component {
    /* Desktop styles */
  }
}

/* Large desktop and up */
@media (min-width: 1280px) {
  .component {
    /* Large desktop styles */
  }
}
```


## 🔄 Common Patterns

### Stack to Row
Content stacks vertically on mobile, becomes horizontal on desktop.

```css
.container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}
```

### Hide/Show Content
Conditionally show or hide content based on screen size.

```css
/* Hide on mobile */
.desktop-only {
  display: none;
}

@media (min-width: 768px) {
  .desktop-only {
    display: block;
  }
}

/* Show only on mobile */
.mobile-only {
  display: block;
}

@media (min-width: 768px) {
  .mobile-only {
    display: none;
  }
}
```

### Navigation Drawer
Full navigation on desktop, hamburger menu on mobile.

### Grid Columns
Adjust grid columns based on screen size.

```css
.grid {
  display: grid;
  grid-template-columns: 1fr; /* 1 column on mobile */
  gap: var(--spacing-md);
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on tablet */
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr); /* 3 columns on desktop */
  }
}
```


## 📏 Touch Targets

Ensure interactive elements are easily tappable on mobile:

```css
/* Minimum touch target size */
--touch-target-min: 44px;

.button, .link, .input {
  min-height: var(--touch-target-min);
  min-width: var(--touch-target-min);
}
```


## 🖼️ Images

### Responsive Images

```html
<!-- Responsive image with srcset -->
<img
  src="image-small.jpg"
  srcset="
    image-small.jpg 480w,
    image-medium.jpg 768w,
    image-large.jpg 1024w
  "
  sizes="
    (max-width: 768px) 100vw,
    (max-width: 1024px) 50vw,
    33vw
  "
  alt="Description"
/>
```

### Picture Element

```html
<!-- Art direction -->
<picture>
  <source media="(min-width: 1024px)" srcset="desktop.jpg" />
  <source media="(min-width: 768px)" srcset="tablet.jpg" />
  <img src="mobile.jpg" alt="Description" />
</picture>
```


## 📋 Best Practices

### Do's ✅
- Test on real devices, not just browser resize
- Use relative units (rem, em, %) instead of pixels
- Optimize images for different screen sizes
- Consider touch vs. mouse interactions
- Test with slow network connections

### Don'ts ❌
- Don't rely solely on breakpoints
- Avoid fixed pixel widths
- Don't hide important content on mobile
- Don't use tiny text on mobile
- Avoid horizontal scrolling


## 🔄 Container Queries

For component-level responsive design:

```css
/* Component adapts based on its container size */
.card-container {
  container-type: inline-size;
}

.card {
  /* Default layout */
}

@container (min-width: 400px) {
  .card {
    /* Wider layout */
  }
}
```


**Related:**
- [Layouts →](./layouts.md)
- [Spacing →](../foundations/spacing.md)
