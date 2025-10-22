# Navigation Patterns

> Common navigation structures and user flows.

---

## 🧭 Navigation Structures

### Top Navigation
Horizontal navigation bar at the top of the page.

**Best for:**
- Marketing websites
- 5-7 main navigation items
- Consistent across all pages

**Structure:**
```
[Logo] [Nav Items...] [User Actions] [CTA Button]
```

### Side Navigation
Vertical navigation bar on the left side.

**Best for:**
- Dashboard applications
- Admin interfaces
- Many navigation items
- Hierarchical navigation

### Mobile Navigation
Responsive navigation patterns for mobile devices.

**Patterns:**
- Hamburger menu (drawer)
- Bottom navigation bar
- Tab bar

---

## 📱 Responsive Navigation Patterns

### Hamburger Menu
```
Mobile:     [≡ Menu] [Logo] [Action]
Desktop:    [Logo] [Nav Items...] [Actions]
```

### Bottom Navigation (Mobile App Style)
```
┌─────────────────────────┐
│                         │
│    Main Content         │
│                         │
└─────────────────────────┘
┌─────────────────────────┐
│ [🏠]  [🔍]  [➕]  [👤]  │
└─────────────────────────┘
```

---

## 🎯 Navigation States

### Active State
Highlight current page/section.

```css
.nav-item.active {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  border-bottom: 2px solid var(--color-primary);
}
```

### Hover State
Visual feedback on hover.

```css
.nav-item:hover {
  color: var(--color-primary);
  background: var(--color-gray-50);
}
```

### Focus State
Keyboard navigation indicator.

```css
.nav-item:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

---

## 🔗 Breadcrumbs

Show user's location in site hierarchy.

**Pattern:**
```
Home > Services > Lawn Mowing > Schedule
```

**Usage:**
- 3+ levels deep in hierarchy
- Content-heavy sites
- E-commerce
- Documentation

---

## 📑 Tabs

Organize related content into separate views.

**Patterns:**

### Horizontal Tabs
```
[Tab 1]  [Tab 2]  [Tab 3]
─────────────────────────
Content for selected tab
```

### Vertical Tabs
```
┌────────┬──────────────┐
│ Tab 1  │              │
│ Tab 2  │   Content    │
│ Tab 3  │              │
└────────┴──────────────┘
```

---

## 📋 Navigation Best Practices

### Do's ✅
- Keep navigation consistent across pages
- Highlight current page/section
- Use clear, descriptive labels
- Support keyboard navigation
- Ensure mobile-friendly navigation
- Provide visual feedback on interaction

### Don'ts ❌
- Don't use too many top-level items (max 7)
- Avoid complex nested menus
- Don't hide critical navigation
- Avoid auto-playing dropdowns
- Don't break browser back button

---

## ♿ Accessibility

### Navigation Accessibility
```html
<nav aria-label="Main navigation">
  <ul>
    <li>
      <a href="/" aria-current="page">Home</a>
    </li>
    <li>
      <a href="/services">Services</a>
    </li>
  </ul>
</nav>
```

### Skip Link
Allow keyboard users to skip navigation:
```html
<a href="#main-content" class="skip-link">
  Skip to main content
</a>
```

### Keyboard Support
- Tab: Move focus through navigation
- Enter/Space: Activate link
- Esc: Close mobile menu/dropdown

---

## 🎨 Common Navigation Examples

### Marketing Site Nav
```
[🌱 LawnGuru] [Services ▾] [Pricing] [About] [Blog] [Login] [Get Started →]
```

### Dashboard Nav (Sidebar)
```
┌─────────────────┐
│ 🌱 LawnGuru      │
├─────────────────┤
│ 🏠 Dashboard    │
│ 📅 Schedule     │
│ 🛒 Services     │
│ 💳 Billing      │
│ ⚙️ Settings     │
│                 │
│ [👤 Profile ▾]  │
└─────────────────┘
```

### Mobile Bottom Nav
```
┌───────────────────────┐
│ [🏠 Home]             │
│ [🔍 Search]           │
│ [📅 Schedule]         │
│ [👤 Account]          │
└───────────────────────┘
```

---

## 🔄 Auto-generated Section

> **Note:** To add navigation pattern screenshots:
> 1. Export navigation examples from Figma
> 2. Run `npm run docs:update-navigation-patterns`
> 3. Visual examples will be added

---

**Related:**
- [Navigation Components →](../components/navigation.md)
- [Layouts →](./layouts.md)
- [Responsive Patterns →](./responsive.md)
