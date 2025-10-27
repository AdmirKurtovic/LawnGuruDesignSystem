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

## 💬 Overlay Components

### Tooltip

Small informational overlay that appears on hover to provide brief context or descriptions.

**Component: `LgTooltip`**

**Features:**
- Hover-triggered informational overlay
- Four placement options (top, bottom, left, right)
- Automatically positions relative to trigger element
- Fade transition animation
- Teleported to body for proper z-index
- Non-interactive (pointer-events: none)

**Props:**
- `content` (String, required): Text content to display in tooltip
- `placement` (String): 'top' | 'bottom' | 'left' | 'right' (default: 'top')

**Visual Design:**
- Background: `var(--color-content-primary)` (dark)
- Text color: `var(--color-bg-primary)` (white)
- Padding: 6px vertical, 12px horizontal
- Font size: `var(--font-size-12)`
- Border radius: `var(--radius-sm)` (8px)
- Shadow: Elevated shadow for depth
- White-space: nowrap (single line)
- Offset: 8px from trigger element

**Animation:**
- Fade transition (150ms)
- Appears immediately on hover
- Disappears on mouse leave

**Usage:**
```vue
<LgTooltip content="Click to edit your profile" placement="top">
  <LgButton>Edit Profile</LgButton>
</LgTooltip>

<!-- With icon -->
<LgTooltip content="More information" placement="right">
  <svg width="20" height="20">...</svg>
</LgTooltip>
```

**Interactive Demo:**
See the [Component Showcase](./showcase.md#tooltip) for live examples.

**Accessibility:**
- Uses `role="tooltip"` attribute
- Non-interactive overlay (keyboard users won't be blocked)
- Keep content brief and descriptive

---

### Popover

Click-triggered overlay component for displaying rich content and interactive elements.

**Component: `LgPopover`**

**Features:**
- Click-triggered overlay
- Four placement options (top, bottom, left, right)
- Click-outside to close functionality
- Named slots for trigger and content
- Teleported to body for proper stacking
- Position calculation relative to trigger
- Smooth fade transition

**Props:**
- `placement` (String): 'top' | 'bottom' | 'left' | 'right' (default: 'bottom')

**Slots:**
- `trigger`: Content that triggers the popover (clickable)
- `content`: Rich content to display in popover

**Visual Design:**
- Min width: 200px
- Background: `var(--color-bg-primary)` (white)
- Border: 1px solid `var(--color-border-20)`
- Border radius: `var(--radius-md)` (10px)
- Padding: `var(--spacing-16)`
- Shadow: Elevated shadow for depth
- Offset: 8px from trigger element

**Behavior:**
- Opens on trigger click
- Closes on outside click
- Closes on content interaction (optional)
- Toggle state (click again to close)

**Animation:**
- Fade transition (150ms)
- No scale or slide animation

**Usage:**
```vue
<LgPopover placement="bottom">
  <template #trigger>
    <LgButton>Open Settings</LgButton>
  </template>
  <template #content>
    <div style="width: 250px;">
      <h3>Quick Settings</h3>
      <p>Adjust your preferences</p>
      <LgSwitch v-model="darkMode" label="Dark mode" />
      <LgSwitch v-model="notifications" label="Notifications" />
    </div>
  </template>
</LgPopover>

<!-- User menu example -->
<LgPopover placement="bottom">
  <template #trigger>
    <LgAvatar :src="user.avatar" />
  </template>
  <template #content>
    <div class="user-menu">
      <div>{{ user.name }}</div>
      <div>{{ user.email }}</div>
      <LgButton variant="ghost" @click="logout">Logout</LgButton>
    </div>
  </template>
</LgPopover>
```

**Interactive Demo:**
See the [Component Showcase](./showcase.md#popover) for live examples.

**Accessibility:**
- Keyboard accessible
- Focus management on open/close
- Escape key to close (implement if needed)

---

### Hover Card

Rich preview card that appears on hover with a delay, perfect for user profiles or detailed previews.

**Component: `LgHoverCard`**

**Features:**
- Hover-triggered rich content card
- 200ms delay before showing (prevents accidental triggers)
- Automatic position calculation
- Viewport boundary detection
- Centered below trigger element
- Named slot for rich content
- Teleported to body
- Fade transition

**Slots:**
- Default slot: Trigger element
- `content`: Rich content to display in card

**Visual Design:**
- Fixed width: 300px
- Background: `var(--color-bg-primary)` (white)
- Border: 1px solid `var(--color-border-20)`
- Border radius: `var(--radius-md)` (10px)
- Padding: `var(--spacing-16)`
- Shadow: Elevated shadow for depth
- Offset: 8px below trigger element

**Behavior:**
- Shows after 200ms hover delay
- Hides immediately on mouse leave
- Automatically positions to stay in viewport
- Prevents overflow on left/right edges (16px minimum margin)

**Animation:**
- Fade transition (150ms)
- No movement animation (position calculated before display)

**Usage:**
```vue
<LgHoverCard>
  <template #default>
    <span class="username">@johndoe</span>
  </template>
  <template #content>
    <div class="user-preview">
      <LgAvatar :src="user.avatar" size="lg" />
      <h4>{{ user.name }}</h4>
      <p>{{ user.bio }}</p>
      <div class="stats">
        <span>500 Following</span>
        <span>1.2K Followers</span>
      </div>
    </div>
  </template>
</LgHoverCard>

<!-- Link preview example -->
<LgHoverCard>
  <a href="/article/123">Understanding Vue Composition API</a>
  <template #content>
    <article class="article-preview">
      <img :src="article.thumbnail" />
      <h4>{{ article.title }}</h4>
      <p>{{ article.excerpt }}</p>
      <div class="meta">
        <span>{{ article.readTime }} min read</span>
        <span>{{ article.date }}</span>
      </div>
    </article>
  </template>
</LgHoverCard>
```

**Interactive Demo:**
See the [Component Showcase](./showcase.md#hover-card) for live examples.

**Accessibility:**
- Non-blocking for keyboard users
- Supplementary information only (don't hide critical content)
- Use ARIA labels on trigger elements
- Ensure hover delay isn't too long

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
