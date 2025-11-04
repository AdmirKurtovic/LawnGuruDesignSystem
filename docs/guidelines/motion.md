# Motion & Animation Guidelines

> Purposeful animations that enhance the user experience.


## 🎯 Purpose of Motion

Motion in LawnGuru serves specific purposes:

1. **Provide Feedback** - Confirm actions and state changes
2. **Guide Attention** - Direct focus to important elements
3. **Explain Relationships** - Show how elements connect
4. **Express Brand** - Reinforce LawnGuru's personality
5. **Improve Perception** - Make interactions feel faster

**Important:** Motion should enhance, not distract. When in doubt, less is more.


## ⏱️ Duration

### Duration Scale
```css
--duration-instant: 50ms    /* Immediate feedback */
--duration-fast: 150ms      /* Quick interactions */
--duration-base: 250ms      /* Standard transitions */
--duration-slow: 350ms      /* Complex animations */
--duration-slower: 500ms    /* Emphasis animations */
```

### Guidelines by Duration

**Instant (50ms):**
- Hover state changes
- Focus indicators
- Simple color changes

**Fast (150ms):**
- Button presses
- Toggle switches
- Checkbox/radio selections
- Tooltips appearing

**Base (250ms):**
- Dropdown menus
- Modal fade-ins
- Card hover effects
- Navigation transitions

**Slow (350ms):**
- Slide-in panels
- Drawer animations
- Complex state changes

**Slower (500ms):**
- Page transitions
- Large element movements
- Attention-grabbing animations


## 📐 Easing Functions

### Easing Types
```css
/* Standard ease-out (most common) */
--ease-out: cubic-bezier(0, 0, 0.2, 1);

/* Ease-in (elements leaving) */
--ease-in: cubic-bezier(0.4, 0, 1, 1);

/* Ease-in-out (smooth both ways) */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

/* Spring (playful, brand moments) */
--ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Linear (progress indicators) */
--ease-linear: linear;
```

### When to Use Each

**Ease-out** (Default)
- Elements entering the screen
- Expanding elements
- Most UI interactions
- Feels natural and responsive

**Ease-in**
- Elements leaving the screen
- Collapsing elements
- Dismissing notifications

**Ease-in-out**
- Elements moving across screen
- Smooth, balanced motion
- Modal overlays

**Spring**
- Success celebrations
- Attention-grabbing moments
- Brand personality moments
- Use sparingly!

**Linear**
- Progress bars
- Loading spinners
- Continuous motion


## 🎨 Common Animation Patterns

### Fade In/Out
```css
/* Fade in */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 250ms var(--ease-out);
}
```

### Slide In
```css
/* Slide in from right */
@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.slide-in-right {
  animation: slideInRight 350ms var(--ease-out);
}
```

### Scale
```css
/* Scale up */
@keyframes scaleUp {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.scale-up {
  animation: scaleUp 250ms var(--ease-out);
}
```

### Bounce (Attention)
```css
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.bounce {
  animation: bounce 500ms var(--ease-spring);
}
```


## 🧩 Component Animations

### Buttons
```css
.button {
  transition: all 150ms var(--ease-out);
}

.button:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.button:active {
  transform: translateY(0);
}
```

### Modals
```css
/* Modal backdrop */
.modal-backdrop {
  animation: fadeIn 250ms var(--ease-out);
}

/* Modal content */
.modal-content {
  animation: scaleUp 250ms var(--ease-out);
}
```

### Dropdowns
```css
.dropdown-menu {
  animation: slideDown 200ms var(--ease-out);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Notifications/Toasts
```css
.toast {
  animation:
    slideInRight 350ms var(--ease-out),
    slideOutRight 350ms var(--ease-in) 3s forwards;
}
```

### Loading Spinners
```css
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  animation: spin 1s linear infinite;
}
```

### Skeleton Screens
```css
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
```


## ♿ Accessibility

### Respect User Preferences
```css
/* Disable animations for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Guidelines
- Always provide `prefers-reduced-motion` alternative
- Don't use animations that flash more than 3 times per second
- Ensure animations don't prevent access to content
- Allow users to pause, stop, or hide animations


## 📋 Animation Best Practices

### Do's ✅
- Use subtle animations
- Keep animations purposeful
- Respect `prefers-reduced-motion`
- Test on lower-end devices
- Use CSS transitions over JavaScript when possible
- Animate transform and opacity (GPU accelerated)
- Chain animations logically

### Don'ts ❌
- Don't animate everything
- Avoid long animations (> 500ms)
- Don't use animations that cause nausea
- Avoid animating layout properties (width, height, top, left)
- Don't use different easing for similar interactions
- Avoid auto-playing animations
- Don't use animations as the only indicator of change


## 🎭 Animation Principles

### 1. Continuity
Elements should move smoothly and continuously.

### 2. Anticipation
Prepare users for what's coming next.

### 3. Follow-through
Animations shouldn't stop abruptly.

### 4. Overlap
Stagger related animations slightly.

### 5. Natural Motion
Mimic real-world physics (easing, gravity).


## 🔄 Orchestration

When animating multiple elements:

```css
/* Stagger animations */
.list-item:nth-child(1) {
  animation-delay: 0ms;
}
.list-item:nth-child(2) {
  animation-delay: 50ms;
}
.list-item:nth-child(3) {
  animation-delay: 100ms;
}

/* Or use JavaScript for dynamic lists */
```


## 🧪 Testing

### Performance Testing
- Test on lower-end devices
- Check FPS (aim for 60fps)
- Use browser DevTools Performance panel
- Monitor CPU/GPU usage

### Checklist
- [ ] Animation serves a purpose
- [ ] Duration feels right (not too slow/fast)
- [ ] Respects `prefers-reduced-motion`
- [ ] Performs well (60fps)
- [ ] Works on mobile devices
- [ ] Doesn't block user interaction
- [ ] Uses GPU-accelerated properties


## 📚 Resources

- [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [Cubic Bezier Generator](https://cubic-bezier.com/)
- [Framer Motion](https://www.framer.com/motion/) (for React)


**Related:**
- [Design Principles →](./design-principles.md)
- [Accessibility →](./accessibility.md)
