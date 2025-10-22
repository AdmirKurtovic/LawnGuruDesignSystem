# Modal & Dialog Components

> Overlays that focus user attention on specific tasks or information.

---

## 🪟 Modal Types

### Dialog Modal
Standard modal for confirmations and forms.

**Sizes:**
- Small (400px)
- Medium (600px)
- Large (800px)
- Full screen (mobile)

### Alert Dialog
Simple confirmation dialogs.

### Drawer / Side Panel
Slide-in panel from the side of the screen.

### Bottom Sheet
Slide-up panel from bottom (primarily mobile).

---

## 📋 Structure

```
Modal
├── Overlay (backdrop)
├── Container
│   ├── Header
│   │   ├── Title
│   │   └── Close button
│   ├── Body (scrollable)
│   └── Footer
│       └── Action buttons
```

---

## 📋 Usage Guidelines

### Do's ✅
- Use for focused tasks that require user attention
- Include clear close/cancel options
- Keep content focused and concise
- Trap keyboard focus within modal
- Close on overlay click (for non-critical modals)

### Don'ts ❌
- Don't nest modals (modal within modal)
- Avoid long scrolling content in modals
- Don't open modals automatically without user action
- Avoid modals for non-critical information

---

## ♿ Accessibility

- Trap focus within modal
- Return focus to trigger element on close
- Support ESC key to close
- Use proper ARIA attributes (`role="dialog"`, `aria-modal="true"`)
- Announce modal opening to screen readers
- Disable background scrolling

```html
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Modal Title</h2>
  <p id="modal-description">Modal content...</p>
</div>
```

---

## 🔄 Auto-generated Section

> **Note:** To add detailed specifications:
> 1. Export modal components from Figma
> 2. Run `npm run docs:update-modals`
> 3. Full documentation will be generated
