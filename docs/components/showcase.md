# Component Showcase

> Interactive demonstrations of LawnGuru UI components. Try them out!

---

## 🎨 Buttons

### Primary Buttons

<div class="component-demo">
  <LgButton variant="primary" size="sm">Small Button</LgButton>
  <LgButton variant="primary" size="md">Medium Button</LgButton>
  <LgButton variant="primary" size="lg">Large Button</LgButton>
</div>

### All Button Variants

<div class="component-demo">
  <LgButton variant="primary">Primary</LgButton>
  <LgButton variant="secondary">Secondary</LgButton>
  <LgButton variant="outline">Outline</LgButton>
  <LgButton variant="ghost">Ghost</LgButton>
  <LgButton variant="danger">Danger</LgButton>
  <LgButton variant="link">Link</LgButton>
</div>

### Button States

<div class="component-demo">
  <LgButton variant="primary">Normal</LgButton>
  <LgButton variant="primary" disabled>Disabled</LgButton>
  <LgButton variant="primary" loading>Loading</LgButton>
</div>

### Full Width Button

<div class="component-demo">
  <LgButton variant="primary" fullWidth>Full Width Button</LgButton>
</div>

---

## 📝 Inputs

### Basic Input

<div class="component-demo">
  <LgInput
    label="Email Address"
    placeholder="your@email.com"
    helperText="We'll never share your email"
  />
</div>

### Input Sizes

<div class="component-demo">
  <LgInput size="sm" placeholder="Small input" />
  <LgInput size="md" placeholder="Medium input (default)" />
  <LgInput size="lg" placeholder="Large input" />
</div>

### Input States

<div class="component-demo">
  <LgInput
    label="Success State"
    placeholder="Enter value"
    success
    successMessage="Looks good!"
  />
  <LgInput
    label="Error State"
    placeholder="Enter value"
    error
    errorMessage="This field is required"
  />
  <LgInput
    label="Disabled State"
    placeholder="Cannot edit"
    disabled
  />
</div>

### Clearable Input

<div class="component-demo">
  <LgInput
    label="Search"
    placeholder="Type to search..."
    clearable
  />
</div>

---

## 🏷️ Badges

### Badge Variants

<div class="component-demo">
  <LgBadge variant="filled" color="success">Success</LgBadge>
  <LgBadge variant="filled" color="warning">Warning</LgBadge>
  <LgBadge variant="filled" color="error">Error</LgBadge>
  <LgBadge variant="filled" color="info">Info</LgBadge>
  <LgBadge variant="filled" color="neutral">Neutral</LgBadge>
  <LgBadge variant="filled" color="brand">Brand</LgBadge>
</div>

### Outlined Badges

<div class="component-demo">
  <LgBadge variant="outlined" color="success">Success</LgBadge>
  <LgBadge variant="outlined" color="warning">Warning</LgBadge>
  <LgBadge variant="outlined" color="error">Error</LgBadge>
  <LgBadge variant="outlined" color="info">Info</LgBadge>
</div>

### Soft Badges

<div class="component-demo">
  <LgBadge variant="soft" color="success">Success</LgBadge>
  <LgBadge variant="soft" color="warning">Warning</LgBadge>
  <LgBadge variant="soft" color="error">Error</LgBadge>
  <LgBadge variant="soft" color="info">Info</LgBadge>
</div>

### Badge Sizes

<div class="component-demo">
  <LgBadge size="sm" color="brand">Small</LgBadge>
  <LgBadge size="md" color="brand">Medium</LgBadge>
  <LgBadge size="lg" color="brand">Large</LgBadge>
</div>

### Dot Badges

<div class="component-demo">
  <LgBadge variant="dot" color="success"></LgBadge>
  <LgBadge variant="dot" color="warning"></LgBadge>
  <LgBadge variant="dot" color="error"></LgBadge>
  <LgBadge variant="dot" color="info"></LgBadge>
</div>

### Count Badges

<div class="component-demo">
  <LgBadge variant="filled" color="brand">5</LgBadge>
  <LgBadge variant="filled" color="error">99+</LgBadge>
  <LgBadge variant="filled" color="info">New</LgBadge>
</div>

---

## 👤 Avatars

### Avatar Sizes

<div class="component-demo">
  <LgAvatar size="xs" initials="XS" />
  <LgAvatar size="sm" initials="SM" />
  <LgAvatar size="md" initials="MD" />
  <LgAvatar size="lg" initials="LG" />
  <LgAvatar size="xl" initials="XL" />
  <LgAvatar size="2xl" initials="2X" />
  <LgAvatar size="3xl" initials="3X" />
</div>

### Avatar with Initials

<div class="component-demo">
  <LgAvatar initials="JD" color="brand" />
  <LgAvatar initials="AS" color="blue" />
  <LgAvatar initials="MK" color="red" />
  <LgAvatar initials="LG" color="yellow" />
  <LgAvatar initials="TP" color="neutral" />
</div>

### Avatar with Status

<div class="component-demo">
  <LgAvatar initials="JD" status="online" />
  <LgAvatar initials="AS" status="away" />
  <LgAvatar initials="MK" status="busy" />
  <LgAvatar initials="LG" status="offline" />
</div>

### Avatar with Border

<div class="component-demo" style="background: var(--color-bg-secondary); padding: 16px; border-radius: 8px;">
  <LgAvatar initials="JD" border />
  <LgAvatar initials="AS" border color="blue" />
  <LgAvatar initials="MK" border color="red" />
</div>

---

## 🎮 Interactive Examples

### Form Example

<div class="component-demo" style="max-width: 400px;">
  <LgInput
    label="Full Name"
    placeholder="John Doe"
    helperText="Enter your full name"
  />
  <LgInput
    label="Email"
    type="email"
    placeholder="john@example.com"
    clearable
  />
  <LgButton variant="primary" fullWidth>Submit</LgButton>
</div>

### User Card Example

<div class="component-demo">
  <div class="user-card">
    <div class="user-card__header">
      <LgAvatar initials="JD" size="lg" status="online" />
      <div class="user-card__info">
        <h3 class="user-card__name">John Doe</h3>
        <p class="user-card__role">LawnGuru Pro Member</p>
      </div>
      <LgBadge variant="soft" color="success">Active</LgBadge>
    </div>
    <div class="user-card__actions">
      <LgButton variant="primary" size="sm">View Profile</LgButton>
      <LgButton variant="ghost" size="sm">Message</LgButton>
    </div>
  </div>
</div>

### Status List Example

<div class="component-demo">
  <div class="status-list">
    <div class="status-item">
      <LgBadge variant="dot" color="success"></LgBadge>
      <span>Service Completed</span>
      <LgBadge variant="soft" color="success">Done</LgBadge>
    </div>
    <div class="status-item">
      <LgBadge variant="dot" color="info"></LgBadge>
      <span>Service In Progress</span>
      <LgBadge variant="soft" color="info">Active</LgBadge>
    </div>
    <div class="status-item">
      <LgBadge variant="dot" color="warning"></LgBadge>
      <span>Service Pending</span>
      <LgBadge variant="soft" color="warning">Waiting</LgBadge>
    </div>
    <div class="status-item">
      <LgBadge variant="dot" color="error"></LgBadge>
      <span>Service Cancelled</span>
      <LgBadge variant="soft" color="error">Cancelled</LgBadge>
    </div>
  </div>
</div>

---

<style scoped>
.component-demo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  padding: 24px;
  border: 1px solid var(--color-border-15);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
  margin: 16px 0;
}

.user-card {
  width: 100%;
  padding: 20px;
  border: 1px solid var(--color-border-15);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
}

.user-card__header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.user-card__info {
  flex: 1;
}

.user-card__name {
  margin: 0;
  font-size: var(--font-size-18);
  font-weight: var(--font-weight-600);
  color: var(--color-content-primary);
}

.user-card__role {
  margin: 4px 0 0;
  font-size: var(--font-size-14);
  color: var(--color-content-secondary);
}

.user-card__actions {
  display: flex;
  gap: 8px;
}

.status-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: var(--radius-sm);
  background: var(--color-bg-secondary);
}

.status-item span {
  flex: 1;
  font-size: var(--font-size-14);
  color: var(--color-content-primary);
}
</style>
