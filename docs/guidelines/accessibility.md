# Accessibility Guidelines

> Building inclusive experiences for all LawnGuru users.


## 🎯 Our Commitment

LawnGuru is committed to creating accessible experiences that work for everyone, regardless of ability or technology used.

**Target Standard:** WCAG 2.1 Level AA compliance


## 📋 Core Principles

### 1. Perceivable
Users must be able to perceive the information being presented.

- **Text alternatives** for non-text content
- **Captions** for audio/video
- **Adaptable** content that can be presented in different ways
- **Distinguishable** content that's easy to see and hear

### 2. Operable
Users must be able to operate the interface.

- **Keyboard accessible** - All functionality available from keyboard
- **Enough time** - Users have adequate time to read and use content
- **Safe** - Content doesn't cause seizures or physical reactions
- **Navigable** - Users can find content and determine where they are

### 3. Understandable
Users must be able to understand the information and interface.

- **Readable** - Text is readable and understandable
- **Predictable** - Pages operate in predictable ways
- **Input assistance** - Help users avoid and correct mistakes

### 4. Robust
Content must be robust enough to work with current and future technologies.

- **Compatible** with assistive technologies
- **Valid** HTML markup
- **Progressive enhancement**


## ♿ Specific Requirements

### Color & Contrast

**Minimum contrast ratios (WCAG AA):**
- Normal text: 4.5:1
- Large text (18pt+ or 14pt+ bold): 3:1
- UI components: 3:1

**Tools:**
- WebAIM Contrast Checker
- Chrome DevTools Accessibility Panel

**Do's ✅:**
- Use color AND another indicator (icon, text, pattern)
- Test with color blindness simulators
- Ensure sufficient contrast in all states

**Don'ts ❌:**
- Don't rely on color alone to convey information
- Avoid low contrast text
- Don't use color as the only form of error indication

### Typography

- Minimum font size: 16px for body text
- Allow text resize up to 200% without loss of functionality
- Use relative units (rem, em)
- Line height: 1.5 minimum for body text
- Paragraph spacing: 2x font size minimum

### Keyboard Navigation

**All interactive elements must be keyboard accessible:**
- Tab: Move forward
- Shift+Tab: Move backward
- Enter/Space: Activate
- Esc: Close modals/dropdowns
- Arrow keys: Navigate within components

**Focus indicators:**
```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Screen Reader Support

**Semantic HTML:**
```html
<!-- Use proper heading hierarchy -->
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>

<!-- Use semantic elements -->
<nav>...</nav>
<main>...</main>
<aside>...</aside>
<footer>...</footer>
```

**ARIA Landmarks:**
```html
<nav aria-label="Main navigation">
<main id="main-content">
<aside aria-label="Related content">
```

**ARIA Labels:**
```html
<!-- Icon-only button -->
<button aria-label="Close dialog">
  <CloseIcon />
</button>

<!-- Descriptive label -->
<button aria-label="Delete item from cart">
  Delete
</button>
```

**Live Regions:**
```html
<!-- For dynamic content updates -->
<div role="status" aria-live="polite">
  Item added to cart
</div>

<!-- For urgent alerts -->
<div role="alert" aria-live="assertive">
  Form submission failed
</div>
```

### Images

**Always provide alt text:**
```html
<!-- Descriptive images -->
<img src="lawn.jpg" alt="Freshly mowed lawn with striped pattern" />

<!-- Decorative images -->
<img src="decorative.jpg" alt="" aria-hidden="true" />

<!-- Complex images -->
<img
  src="chart.jpg"
  alt="Bar chart showing lawn growth over 6 months"
  aria-describedby="chart-description"
/>
<div id="chart-description">
  Detailed description of the chart data...
</div>
```

### Forms

**Accessible form requirements:**
```html
<form>
  <!-- Label association -->
  <label for="email">Email Address *</label>
  <input
    type="email"
    id="email"
    name="email"
    required
    aria-required="true"
    aria-describedby="email-help email-error"
  />

  <!-- Helper text -->
  <span id="email-help">
    We'll send confirmation to this address
  </span>

  <!-- Error message -->
  <span id="email-error" role="alert">
    Please enter a valid email address
  </span>

  <!-- Grouped inputs -->
  <fieldset>
    <legend>Service Frequency</legend>
    <input type="radio" id="weekly" name="frequency" />
    <label for="weekly">Weekly</label>

    <input type="radio" id="biweekly" name="frequency" />
    <label for="biweekly">Bi-weekly</label>
  </fieldset>
</form>
```

### Interactive Components

**Buttons:**
- Clear focus indicators
- Descriptive labels
- Disabled state not focusable
- Loading state announced

**Links:**
- Descriptive link text (not "click here")
- Distinguish from buttons
- Indicate external links

**Modals:**
- Trap focus within modal
- Return focus on close
- ESC to close
- Proper ARIA attributes

```html
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="dialog-title"
  aria-describedby="dialog-description"
>
  <h2 id="dialog-title">Modal Title</h2>
  <p id="dialog-description">Modal content...</p>
  <button aria-label="Close dialog">Close</button>
</div>
```


## 🧪 Testing

### Manual Testing Checklist
- [ ] Keyboard navigation works for all interactions
- [ ] Screen reader announces content correctly
- [ ] Color contrast meets requirements
- [ ] Text can be resized to 200%
- [ ] Focus indicators are visible
- [ ] Forms have proper labels and error messages
- [ ] Images have appropriate alt text

### Tools
- **Screen Readers:** NVDA (Windows), VoiceOver (Mac/iOS), TalkBack (Android)
- **Browser Extensions:** axe DevTools, WAVE, Lighthouse
- **Contrast Checkers:** WebAIM, Coolors
- **Keyboard Testing:** Just your keyboard!

### Automated Testing
```bash
# Run accessibility tests
npm run test:a11y

# Check with axe-core
npm run test:axe

# Lighthouse audit
npm run lighthouse
```


## 📚 Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Resources](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)


## 🔄 Review Process

Every feature must:
1. Be tested with keyboard only
2. Be tested with screen reader
3. Pass automated accessibility tests
4. Meet WCAG 2.1 Level AA standards
5. Be reviewed by accessibility champion


**Related:**
- [Design Principles →](./design-principles.md)
- [Components →](../components/buttons.md)
