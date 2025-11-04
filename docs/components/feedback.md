# Feedback Components

> Components that provide feedback, status updates, and system communication to users.


## 📝 Components

### FAQ / Accordion

Expandable content sections that reveal additional information when clicked.

**States:**
- **Collapsed**: Default state, shows only the question/title with a chevron icon pointing right or down
- **Expanded**: Reveals the answer/content below the title, chevron rotates to indicate open state
- **Hover**: Subtle hover effect on interactive header
- **Focus**: Keyboard focus indicator on header
- **Disabled**: Non-interactive, grayed out state

**Visual Design:**
- Border radius: `radius-sm` (8px) or `radius-md` (10px) for each item
- Padding: `spacing-16` to `spacing-20` for header and content
- Border: `border-width-regular` (1px) with `color-border-15`
- Gap between items: `spacing-12`
- Chevron icon on right side
- Smooth expand/collapse animation
- Content area has `spacing-16` padding

**Features:**
- Single or multiple items can be open simultaneously
- Smooth height transitions
- Keyboard accessible (Enter/Space to toggle)
- Screen reader friendly with proper ARIA attributes

**Usage:**
```tsx
<Accordion>
  <AccordionItem>
    <AccordionHeader>What services does LawnGuru offer?</AccordionHeader>
    <AccordionContent>
      LawnGuru provides comprehensive lawn care services including mowing,
      fertilization, weed control, and seasonal maintenance.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem defaultExpanded={true}>
    <AccordionHeader>How do I schedule a service?</AccordionHeader>
    <AccordionContent>
      You can schedule through our mobile app or website. Simply select
      your desired service and choose an available time slot.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```


### Snackbar

Brief, temporary messages that appear at the bottom of the screen to provide feedback about operations.

**Variants:**
- **Info**: Blue accent with info icon
- **Success**: Green accent with checkmark icon
- **Warning**: Yellow accent with warning icon
- **Error**: Red accent with error icon
- **Default**: Neutral with no icon

**States:**
- **Entering**: Slides up from bottom with animation
- **Visible**: Fully displayed on screen
- **Exiting**: Slides down or fades out
- **With Action**: Includes an action button on the right
- **Dismissible**: Shows X button to manually close

**Visual Design:**
- Background: `#2A2A2A` (neutral-900) or `#0B0B0B` (neutral-950)
- Text color: `#FFFFFF` (white) for contrast
- Border radius: `radius-md` (10px) or `radius-lg` (12px)
- Padding: `spacing-12` vertical, `spacing-16` horizontal
- Shadow: `shadow-bottom-05` for elevation
- Icon size: 20x20px on left
- Gap between icon and text: `spacing-12`
- Action button: Text button style in brand or white color

**Behavior:**
- Auto-dismiss after 4-6 seconds (configurable)
- Can be manually dismissed with X button
- Only one snackbar visible at a time
- Queue multiple messages if needed
- Positioned at bottom center or bottom left

**Usage:**
```tsx
<Snackbar
  message="Lawn care service scheduled successfully"
  variant="success"
  duration={4000}
  action={{
    label: "View",
    onClick: () => console.log("Action clicked")
  }}
  onClose={() => console.log("Snackbar closed")}
/>
```


### Notification Stub / Toast

Small notification cards that appear temporarily in the corner of the screen for status updates.

**Component: `LgToast`**

**Features:**
- Toast notification system with auto-dismiss
- Multiple variant styles (default, destructive, success, warning)
- Supports action buttons
- Manual dismiss with close button
- Stacks multiple toasts vertically
- Slide-in animation from right
- Teleported to body for proper z-index

**Methods:**
- `addToast({ title, description, variant, action, duration })`: Add a new toast notification
  - Returns toast ID for manual removal
  - `title` (String, required): Toast title text
  - `description` (String, optional): Additional description text
  - `variant` (String): 'default' | 'destructive' | 'success' | 'warning' (default: 'default')
  - `action` (Object, optional): `{ label, onClick }` for action button
  - `duration` (Number): Auto-dismiss time in ms (default: 5000, set to 0 to disable)
- `removeToast(id)`: Manually remove a toast by ID

**Visual Design:**
- Container: Fixed position, bottom-right (24px from edges)
- Max width: 420px
- Background: `var(--color-bg-primary)` (white)
- Border: 1px solid with 3px left border for variant color
- Border radius: `var(--radius-md)` (10px)
- Padding: `var(--spacing-16)`
- Shadow: Elevated shadow for depth
- Gap between toasts: `var(--spacing-12)`

**Variant Styles:**
- **default**: Green left border (`var(--grass-700)`)
- **destructive**: Red left border (`var(--red-600)`)
- **success**: Green left border (`var(--grass-600)`)
- **warning**: Orange left border (`#F59E0B`)

**Typography:**
- Title: `font-size-14`, `font-weight-600`
- Description: `font-size-12`, `color-content-secondary`

**Animation:**
- Slides in from right (translateX 100%)
- 300ms transition with fade
- TransitionGroup for stacked toasts

**Usage:**
```vue
<template>
  <div>
    <LgButton @click="showSuccessToast">Show Toast</LgButton>
    <LgToast ref="toastRef" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const toastRef = ref(null)

const showSuccessToast = () => {
  toastRef.value.addToast({
    title: 'Service Completed',
    description: 'Your lawn has been mowed successfully',
    variant: 'success',
    duration: 5000
  })
}

// With action button
const showActionToast = () => {
  toastRef.value.addToast({
    title: 'Update Available',
    description: 'A new version is ready to install',
    variant: 'default',
    action: {
      label: 'Update',
      onClick: () => console.log('Update clicked')
    },
    duration: 10000
  })
}

// Persistent toast (no auto-dismiss)
const showPersistentToast = () => {
  const id = toastRef.value.addToast({
    title: 'Important Notice',
    description: 'Please review your settings',
    variant: 'warning',
    duration: 0 // Won't auto-dismiss
  })

  // Manually remove later
  setTimeout(() => {
    toastRef.value.removeToast(id)
  }, 15000)
}
</script>
```

**Interactive Demo:**
See the [Component Showcase](./showcase.md#toast-notification) for live examples.

**Accessibility:**
- Close button includes `aria-label="Close"`
- Keyboard accessible
- Uses Teleport for proper stacking context


### Content Block / Alert Card

Inline alert or information card for contextual messages within page content.

**Variants:**
- **Info**: Light blue background with blue icon and border
- **Success**: Light green background with green icon and border
- **Warning**: Light yellow background with yellow icon and border
- **Error**: Light red background with red icon and border

**Visual Design:**
- Background colors:
  - Info: `#E0F3FE` (blue-100)
  - Success: `#E4FFDB` (green-100)
  - Warning: `#FDF6DB` (yellow-100)
  - Error: `#FDEDEF` (red-100)
- Border: `border-width-regular` (1px) with semantic color
- Border radius: `radius-md` (10px) or `radius-lg` (12px)
- Padding: `spacing-16` to `spacing-20`
- Icon: 20x20px, semantic color, left-aligned or top-left
- Title: `font-size-14` or `font-size-16`, `font-weight-600`
- Content: `font-size-14`, `font-weight-400`
- Gap: `spacing-12` between icon and content

**Features:**
- Persistent (doesn't auto-dismiss)
- Can include links or buttons
- Optional dismiss button
- Can include lists or formatted content

**Usage:**
```tsx
<Alert variant="warning">
  <AlertIcon />
  <AlertContent>
    <AlertTitle>Service Reminder</AlertTitle>
    <AlertDescription>
      Your lawn is due for fertilization. Schedule your next service to
      maintain optimal lawn health.
    </AlertDescription>
  </AlertContent>
  <AlertAction>
    <Button size="sm" variant="ghost">Schedule Now</Button>
  </AlertAction>
</Alert>
```


### Loading Indicators

Visual feedback during data loading or processing.

**Types:**

#### Spinner
- Circular animated spinner
- Sizes: Small (16px), Medium (24px), Large (32px), XL (48px)
- Colors: Brand green, neutral, or semantic colors
- Usage: Inline loading, button loading states

#### Progress Bar

Linear progress indicator showing task completion.

**Component: `LgProgress`**

**Features:**
- Horizontal progress bar with percentage display
- Smooth animated transitions
- Determinate progress (0-100%)
- Full-width responsive design
- LawnGuru green branding

**Props:**
- `value` (Number): Progress percentage from 0 to 100 (default: 0)

**Visual Design:**
- Track height: 8px
- Track background: `var(--color-bg-secondary)` (light grey)
- Indicator background: `var(--grass-700)` (LawnGuru green)
- Border radius: `var(--radius-full)` (fully rounded)
- Transition: 300ms ease for smooth updates
- Full width of container

**Common Use Cases:**
- File upload progress
- Form completion steps
- Task completion percentage
- Loading progress
- Multi-step process tracking

**Usage:**
```vue
<template>
  <div>
    <LgProgress :value="uploadProgress" />
    <p>{{ uploadProgress }}% Complete</p>

    <!-- With label -->
    <div class="progress-container">
      <label>Installation Progress</label>
      <LgProgress :value="progress" />
    </div>

    <!-- Multiple progress bars -->
    <div class="stats">
      <div>
        <span>Project Completion</span>
        <LgProgress :value="75" />
      </div>
      <div>
        <span>Tasks Complete</span>
        <LgProgress :value="45" />
      </div>
      <div>
        <span>Budget Used</span>
        <LgProgress :value="92" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const uploadProgress = ref(0)

// Simulate progress
onMounted(() => {
  const interval = setInterval(() => {
    if (uploadProgress.value < 100) {
      uploadProgress.value += 10
    } else {
      clearInterval(interval)
    }
  }, 500)
})
</script>
```

**Interactive Demo:**
See the [Component Showcase](./showcase.md#progress-bar) for live examples.


#### Skeleton Loader

Placeholder content that mimics layout during loading.

**Component: `LgSkeleton`**

**Features:**
- Loading placeholder with pulse animation
- Three variants (default, circle, text)
- Custom width and height support
- 2-second pulse animation
- Matches content structure before it loads

**Props:**
- `variant` (String): 'default' | 'circle' | 'text' (default: 'default')
- `width` (String|Number): Custom width (e.g., '200px' or 200)
- `height` (String|Number): Custom height (e.g., '40px' or 40)

**Variants:**
- **default**: Rectangular skeleton (100% width × 20px height)
- **circle**: Circular skeleton (40px × 40px)
- **text**: Text line skeleton (100% width × 16px height)

**Visual Design:**
- Background: `var(--color-bg-secondary)` (light grey)
- Border radius: `var(--radius-sm)` (8px) for default/text, `var(--radius-full)` for circle
- Animation: 2s pulse (opacity 1 → 0.5 → 1)
- Cubic-bezier easing for smooth animation

**Animation Details:**
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

**Common Use Cases:**
- Initial page load
- Lazy loading content
- Infinite scroll placeholders
- Card/list item loading states
- Profile page loading
- Image placeholders

**Usage:**
```vue
<!-- Default rectangular skeleton -->
<LgSkeleton />
<LgSkeleton width="300px" height="100px" />

<!-- Circle avatar placeholder -->
<LgSkeleton variant="circle" width="64px" height="64px" />

<!-- Text line placeholders -->
<LgSkeleton variant="text" width="100%" />
<LgSkeleton variant="text" width="80%" />
<LgSkeleton variant="text" width="60%" />

<!-- Card loading skeleton -->
<div class="card-skeleton">
  <LgSkeleton variant="circle" width="48px" height="48px" />
  <div class="content">
    <LgSkeleton variant="text" width="150px" />
    <LgSkeleton variant="text" width="200px" />
  </div>
</div>

<!-- Profile loading skeleton -->
<div class="profile-skeleton">
  <LgSkeleton variant="circle" width="96px" height="96px" />
  <LgSkeleton variant="text" width="200px" height="24px" />
  <LgSkeleton variant="text" width="300px" />
  <LgSkeleton width="100%" height="120px" />
</div>

<!-- List loading skeleton -->
<div v-for="i in 5" :key="i" class="list-item-skeleton">
  <LgSkeleton variant="circle" width="40px" height="40px" />
  <div class="text">
    <LgSkeleton variant="text" width="150px" />
    <LgSkeleton variant="text" width="100px" />
  </div>
</div>
```

**Interactive Demo:**
See the [Component Showcase](./showcase.md#skeleton-loader) for live examples.

**Best Practices:**
- Match skeleton structure to actual content layout
- Use appropriate variants for different content types
- Combine multiple skeletons to create complex layouts
- Keep skeleton visible for minimum 300ms (avoid flash)
- Replace with actual content smoothly (use transitions)


### Empty States

Helpful messages and guidance when no content is available.

**Components:**
- Illustration or icon (large, centered)
- Heading: Clear, descriptive title
- Description: Brief explanation of why it's empty
- Action button: Primary CTA to resolve empty state

**Visual Design:**
- Centered layout
- Icon/illustration: 120-200px size, brand or neutral colors
- Heading: `font-size-20` or `font-size-22`, `font-weight-600`
- Description: `font-size-14` or `font-size-16`, `color-content-secondary`
- Vertical spacing: `spacing-24` between elements
- Max width: 400-500px

**Common Use Cases:**
- No search results
- Empty list/table
- No notifications
- No scheduled services
- Inbox zero

**Usage:**
```tsx
<EmptyState
  icon={<CalendarIcon />}
  title="No Services Scheduled"
  description="You don't have any upcoming lawn care services. Schedule your first service to get started."
  action={{
    label: "Schedule Service",
    onClick: () => navigate('/schedule')
  }}
/>
```


### Error States

Error messages and recovery options when something goes wrong.

**Types:**

#### Inline Error
- Field validation error
- Red text below input
- Red border on input

#### Error Banner
- Page-level error message
- Dismissible
- Includes error details and action

#### Error Page (Full-page)
- 404 Not Found
- 500 Server Error
- Network Error
- Permission Denied

**Visual Design:**
- Error color: `#E5132E` (red-600)
- Background: `#FDEDEF` (red-100) for banners
- Icon: Error/warning icon in red
- Title: `font-size-20`, `font-weight-600`
- Description: `font-size-14`, `color-content-secondary`
- Action buttons: Primary and/or secondary

**Error Page Layout:**
- Centered content
- Large error icon or illustration
- Error code (404, 500, etc.)
- Friendly error message
- Helpful description
- Action buttons (Go Home, Try Again, Contact Support)

**Usage:**
```tsx
{/* Inline Error */}
<Input
  label="Email"
  error={true}
  errorMessage="Please enter a valid email address"
/>

{/* Error Banner */}
<ErrorBanner
  message="Failed to save changes. Please try again."
  action={{
    label: "Retry",
    onClick: () => retrySave()
  }}
  onDismiss={() => clearError()}
/>

{/* Error Page */}
<ErrorPage
  code="404"
  title="Page Not Found"
  description="The page you're looking for doesn't exist or has been moved."
  actions={[
    { label: "Go Home", onClick: () => navigate('/') },
    { label: "Contact Support", onClick: () => navigate('/support') }
  ]}
/>
```


## 📋 Usage Guidelines

### When to Use Each Component

**FAQ/Accordion:**
- Help sections and documentation
- Product features breakdown
- Settings with explanations

**Snackbar:**
- Brief confirmation messages
- Undo actions
- Simple status updates

**Toast/Notification:**
- System notifications
- Important updates
- Multi-step process feedback

**Alert/Content Block:**
- Important contextual information
- Warnings within content
- Persistent messages

**Loading Indicators:**
- Any asynchronous operation
- Data fetching
- File uploads

**Empty States:**
- First-time user experience
- Cleared/deleted content
- No search results

**Error States:**
- Validation errors
- System errors
- Network failures


## ♿ Accessibility

### ARIA Attributes
- Use appropriate ARIA roles (alert, status, progressbar)
- Provide `aria-live` regions for dynamic updates
- Include `aria-label` for icon-only elements

### Keyboard Support
- Snackbars: Focusable action button, Esc to dismiss
- Accordions: Enter/Space to toggle, arrow keys to navigate
- Alerts: Focus management for important messages

### Screen Readers
- Announce status changes appropriately
- Provide context for errors
- Don't rely solely on color to convey meaning


## 🔄 Auto-generated Section

> **Note:** To add detailed specifications:
> 1. Export feedback components from Figma
> 2. Run `npm run docs:update-feedback`
> 3. Full documentation will be generated


**Related:**
- [Buttons →](./buttons.md)
- [Forms →](./forms.md)
