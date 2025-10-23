# Feedback Components

> Components that provide feedback, status updates, and system communication to users.

---

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

---

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

---

### Notification Stub / Toast

Small notification cards that appear temporarily in the corner of the screen for status updates.

**Variants:**
- **Info**: Blue border and icon (`#0B65E3`)
- **Success**: Green border and icon (`#008934`)
- **Warning**: Yellow border and icon (`#FFCC00`)
- **Error**: Red border and icon (`#E5132E`)

**States:**
- **Appearing**: Slides in from top-right or top-center
- **Visible**: Fully displayed
- **Disappearing**: Fades out or slides away
- **With Progress**: Shows auto-dismiss timer progress bar

**Visual Design:**
- Background: `#FFFFFF` (white) for light mode
- Border left: `border-width-bold` (3px) with semantic color
- Border radius: `radius-md` (10px)
- Padding: `spacing-16`
- Shadow: `shadow-center-04` or `shadow-center-05`
- Icon: 20x20px, semantic color, top-left
- Title: `font-size-14`, `font-weight-600`
- Message: `font-size-14`, `font-weight-400`, `color-content-secondary`
- Close button: Small X icon, top-right
- Progress bar: Thin bar at bottom showing time remaining

**Positioning:**
- Top-right corner (most common)
- Top-center
- Bottom-right
- Stack vertically with `spacing-12` gap

**Behavior:**
- Auto-dismiss after 5-7 seconds
- Can be manually dismissed
- Multiple can stack
- Hover pauses auto-dismiss timer

**Usage:**
```tsx
<Toast
  title="Service Completed"
  message="Your lawn has been mowed successfully"
  variant="success"
  duration={5000}
  position="top-right"
  showProgress={true}
  onClose={() => console.log("Toast closed")}
/>
```

---

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

---

### Loading Indicators

Visual feedback during data loading or processing.

**Types:**

#### Spinner
- Circular animated spinner
- Sizes: Small (16px), Medium (24px), Large (32px), XL (48px)
- Colors: Brand green, neutral, or semantic colors
- Usage: Inline loading, button loading states

#### Progress Bar
- Linear progress indicator
- Determinate (shows percentage) or indeterminate (continuous animation)
- Height: 4px (slim) or 8px (standard)
- Colors: Brand green or semantic colors
- Usage: Page loads, file uploads, multi-step processes

#### Skeleton Loader
- Placeholder content that mimics layout
- Subtle shimmer animation
- Matches content structure (text lines, cards, images)
- Usage: Initial page load, lazy loading content

**Visual Design:**
- Spinner: `#008934` (brand green) or `color-content-tertiary`
- Progress bar background: `color-border-10`
- Progress bar fill: `#008934` (brand green)
- Border radius: `radius-full` for spinner, `radius-sm` for progress bar
- Skeleton: `color-border-10` background with subtle shimmer

**Usage:**
```tsx
{/* Spinner */}
<Spinner size="md" color="brand" />

{/* Progress Bar */}
<ProgressBar value={65} max={100} />

{/* Skeleton */}
<Skeleton>
  <SkeletonText lines={3} />
  <SkeletonCircle size="48px" />
  <SkeletonRect height="200px" />
</Skeleton>
```

---

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

---

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

---

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

---

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

---

## 🔄 Auto-generated Section

> **Note:** To add detailed specifications:
> 1. Export feedback components from Figma
> 2. Run `npm run docs:update-feedback`
> 3. Full documentation will be generated

---

**Related:**
- [Buttons →](./buttons.md)
- [Forms →](./forms.md)
