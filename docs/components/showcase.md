# Component Showcase

> Interactive demonstrations of LawnGuru UI components. Try them out!

<script setup>
import { ref } from 'vue'
</script>

## 🎨 Buttons

### Button Sizes (shadcn-style)

<ClientOnly>
<div class="component-demo">
  <LgButton size="sm">Small</LgButton>
  <LgButton size="default">Default</LgButton>
  <LgButton size="lg">Large</LgButton>
</div>
</ClientOnly>

### All Button Variants (shadcn-style)

<ClientOnly>
<div class="component-demo">
  <LgButton variant="default">Default</LgButton>
  <LgButton variant="secondary">Secondary</LgButton>
  <LgButton variant="outline">Outline</LgButton>
  <LgButton variant="ghost">Ghost</LgButton>
  <LgButton variant="destructive">Destructive</LgButton>
  <LgButton variant="link">Link</LgButton>
</div>
</ClientOnly>

### Button States

<ClientOnly>
<div class="component-demo">
  <LgButton variant="default">Normal</LgButton>
  <LgButton variant="default" disabled>Disabled</LgButton>
  <LgButton variant="default" loading>Loading</LgButton>
</div>
</ClientOnly>

### Full Width Button

<ClientOnly>
<div class="component-demo">
  <LgButton variant="default" fullWidth>Full Width Button</LgButton>
</div>
</ClientOnly>

## 📝 Inputs

### Basic Input (shadcn-style)

<ClientOnly>
<div class="component-demo input-demo">
  <LgInput
    label="Email Address"
    placeholder="your@email.com"
    helperText="We'll never share your email"
  />
</div>
</ClientOnly>

### Input Sizes (shadcn-style)

<ClientOnly>
<div class="component-demo input-demo">
  <LgInput size="sm" placeholder="Small input" />
  <LgInput size="default" placeholder="Default input" />
  <LgInput size="lg" placeholder="Large input" />
</div>
</ClientOnly>

### Input States (shadcn-style)

<ClientOnly>
<div class="component-demo input-demo">
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
</ClientOnly>

### Clearable Input (shadcn-style)

<ClientOnly>
<div class="component-demo input-demo">
  <LgInput
    label="Search"
    placeholder="Type to search..."
    clearable
  />
</div>
</ClientOnly>

### File Input (shadcn-style)

<ClientOnly>
<div class="component-demo input-demo">
  <LgInput
    label="Upload File"
    type="file"
    helperText="Supported formats: PDF, DOC, DOCX"
  />
</div>
</ClientOnly>

### Horizontal Layout (shadcn-style)

<ClientOnly>
<div class="component-demo input-demo">
  <LgInput
    label="Full Name"
    placeholder="John Doe"
    horizontal
  />
  <LgInput
    label="Email Address"
    type="email"
    placeholder="john@example.com"
    horizontal
  />
  <LgInput
    label="Phone Number"
    placeholder="+1 (555) 123-4567"
    horizontal
  />
</div>
</ClientOnly>

### Input + Button (shadcn-style)

<ClientOnly>
<div class="component-demo input-demo">
  <LgInputGroup size="default">
    <template #input>
      <LgInput placeholder="Enter your email..." />
    </template>
    <template #button>
      <LgButton variant="default">Subscribe</LgButton>
    </template>
  </LgInputGroup>

  <LgInputGroup size="sm">
    <template #input>
      <LgInput size="sm" placeholder="Search..." />
    </template>
    <template #button>
      <LgButton variant="default" size="sm">Go</LgButton>
    </template>
  </LgInputGroup>

  <LgInputGroup size="lg">
    <template #input>
      <LgInput size="lg" placeholder="Enter promo code..." />
    </template>
    <template #button>
      <LgButton variant="outline" size="lg">Apply</LgButton>
    </template>
  </LgInputGroup>
</div>
</ClientOnly>

## 🏷️ Badges

### Badge Variants

<ClientOnly>
<div class="component-demo">
  <LgBadge variant="filled" color="success">Success</LgBadge>
  <LgBadge variant="filled" color="warning">Warning</LgBadge>
  <LgBadge variant="filled" color="error">Error</LgBadge>
  <LgBadge variant="filled" color="info">Info</LgBadge>
  <LgBadge variant="filled" color="neutral">Neutral</LgBadge>
  <LgBadge variant="filled" color="brand">Brand</LgBadge>
</div>
</ClientOnly>

### Outlined Badges

<ClientOnly>
<div class="component-demo">
  <LgBadge variant="outlined" color="success">Success</LgBadge>
  <LgBadge variant="outlined" color="warning">Warning</LgBadge>
  <LgBadge variant="outlined" color="error">Error</LgBadge>
  <LgBadge variant="outlined" color="info">Info</LgBadge>
</div>
</ClientOnly>

### Soft Badges

<ClientOnly>
<div class="component-demo">
  <LgBadge variant="soft" color="success">Success</LgBadge>
  <LgBadge variant="soft" color="warning">Warning</LgBadge>
  <LgBadge variant="soft" color="error">Error</LgBadge>
  <LgBadge variant="soft" color="info">Info</LgBadge>
</div>
</ClientOnly>

### Badge Sizes

<ClientOnly>
<div class="component-demo">
  <LgBadge size="sm" color="brand">Small</LgBadge>
  <LgBadge size="md" color="brand">Medium</LgBadge>
  <LgBadge size="lg" color="brand">Large</LgBadge>
</div>
</ClientOnly>

### Dot Badges

<ClientOnly>
<div class="component-demo">
  <LgBadge variant="dot" color="success"></LgBadge>
  <LgBadge variant="dot" color="warning"></LgBadge>
  <LgBadge variant="dot" color="error"></LgBadge>
  <LgBadge variant="dot" color="info"></LgBadge>
</div>
</ClientOnly>

### Count Badges

<ClientOnly>
<div class="component-demo">
  <LgBadge variant="filled" color="brand">5</LgBadge>
  <LgBadge variant="filled" color="error">99+</LgBadge>
  <LgBadge variant="filled" color="info">New</LgBadge>
</div>
</ClientOnly>

## 👤 Avatars

### Avatar Sizes

<ClientOnly>
<div class="component-demo">
  <LgAvatar size="xs" initials="XS" />
  <LgAvatar size="sm" initials="SM" />
  <LgAvatar size="md" initials="MD" />
  <LgAvatar size="lg" initials="LG" />
  <LgAvatar size="xl" initials="XL" />
  <LgAvatar size="2xl" initials="2X" />
  <LgAvatar size="3xl" initials="3X" />
</div>
</ClientOnly>

### Avatar with Initials

<ClientOnly>
<div class="component-demo">
  <LgAvatar initials="JD" color="brand" />
  <LgAvatar initials="AS" color="blue" />
  <LgAvatar initials="MK" color="red" />
  <LgAvatar initials="LG" color="yellow" />
  <LgAvatar initials="TP" color="neutral" />
</div>
</ClientOnly>

### Avatar with Status

<ClientOnly>
<div class="component-demo">
  <LgAvatar initials="JD" status="online" />
  <LgAvatar initials="AS" status="away" />
  <LgAvatar initials="MK" status="busy" />
  <LgAvatar initials="LG" status="offline" />
</div>
</ClientOnly>

### Avatar with Border

<ClientOnly>
<div class="component-demo" style="background: var(--color-bg-secondary); padding: 16px; border-radius: 8px;">
  <LgAvatar initials="JD" border />
  <LgAvatar initials="AS" border color="blue" />
  <LgAvatar initials="MK" border color="red" />
</div>
</ClientOnly>

## 🎮 Interactive Examples

### Form Example

<ClientOnly>
<div class="component-demo input-demo" style="max-width: 400px;">
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
  <LgButton variant="default" fullWidth>Submit</LgButton>
</div>
</ClientOnly>

### User Card Example

<ClientOnly>
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
      <LgButton variant="default" size="sm">View Profile</LgButton>
      <LgButton variant="ghost" size="sm">Message</LgButton>
    </div>
  </div>
</div>
</ClientOnly>

### Status List Example

<ClientOnly>
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
</ClientOnly>

## 🎛️ Form Controls

### Accordion

<ClientOnly>
<div class="component-demo input-demo">
  <LgAccordion>
    <LgAccordionItem
      value="item-1"
      trigger="Is it accessible?"
      content="Yes. It adheres to the WAI-ARIA design pattern."
    />
    <LgAccordionItem
      value="item-2"
      trigger="Is it styled?"
      content="Yes. It comes with default styles that matches the LawnGuru design."
    />
    <LgAccordionItem
      value="item-3"
      trigger="Is it animated?"
      content="Yes. It's animated by default, but you can disable it if you prefer."
    />
  </LgAccordion>
</div>
</ClientOnly>

### Checkbox

<ClientOnly>
<div class="component-demo">
  <LgCheckbox label="Checkbox Text" />
  <LgCheckbox label="Checkbox Text" description="This is a checkbox description." />
  <LgCheckbox :model-value="true" label="Checkbox Text" />
  <LgCheckbox disabled label="Checkbox Text (Disabled)" />
</div>
</ClientOnly>

### Select

<ClientOnly>
<div class="component-demo input-demo">
  <LgSelect
    label="Framework"
    placeholder="Select a framework"
    :options="[
      { value: 'vue', label: 'Vue' },
      { value: 'react', label: 'React' },
      { value: 'angular', label: 'Angular' },
      { value: 'svelte', label: 'Svelte' }
    ]"
  />
</div>
</ClientOnly>

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

/* Input Demo - Stack vertically with full width */
.input-demo {
  flex-direction: column;
  align-items: stretch;
  max-width: 600px;
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
