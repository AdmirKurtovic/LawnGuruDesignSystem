# Data Display Components

> Components for displaying structured data and information.


## 📊 Components

### Avatars

Visual representation of users or entities using images, initials, or icons.

**Variants:**
- **Image Avatar**: Shows user photo
- **Initials Avatar**: Shows 1-2 letter initials
- **Icon Avatar**: Shows an icon (for system users, bots)
- **Group Avatar**: Stack of multiple avatars

**Sizes:**
- **XS**: 24x24px - For inline mentions, compact lists
- **SM**: 32x32px - For small UI elements, comments
- **MD**: 40x40px - Default size for most use cases
- **LG**: 48x48px - For user profiles, prominent displays
- **XL**: 64x64px - For profile headers
- **2XL**: 96x96px - For large profile displays
- **3XL**: 128x128px - For hero sections, detailed profiles

**Visual Design:**
- Border radius: `radius-full` (9999px) for circular shape
- Background: Brand colors or grey for initials
- Border: Optional `border-width-2` (2px) white border for overlays
- Font size: Scales with avatar size (typically size/2.5)
- Font weight: `font-weight-600` for initials

**States:**
- **Default**: Standard avatar display
- **With Badge**: Status indicator (online, away, busy, offline)
- **With Border**: White or colored border
- **Clickable**: Hover effect, cursor pointer
- **Loading**: Skeleton or shimmer effect
- **Fallback**: Initials or icon when image fails

**Status Indicators:**
- **Online**: Green dot (`#008934`)
- **Away**: Yellow dot (`#FFCC00`)
- **Busy**: Red dot (`#E5132E`)
- **Offline**: Grey dot or no indicator

**Group Avatars:**
- Stack 2-5 avatars with slight overlap
- Overlap: 8-12px negative margin
- Show "+N" for additional hidden avatars
- Z-index decreases left to right

**Usage:**
```tsx
{/* Image Avatar */}
<Avatar
  src="/user-photo.jpg"
  alt="John Doe"
  size="md"
  status="online"
/>

{/* Initials Avatar */}
<Avatar
  initials="JD"
  size="md"
  color="brand"
/>

{/* Icon Avatar */}
<Avatar
  icon={<UserIcon />}
  size="md"
/>

{/* Group Avatars */}
<AvatarGroup max={3}>
  <Avatar src="/user1.jpg" alt="User 1" />
  <Avatar src="/user2.jpg" alt="User 2" />
  <Avatar src="/user3.jpg" alt="User 3" />
  <Avatar src="/user4.jpg" alt="User 4" />
</AvatarGroup>
{/* Displays: 3 avatars + "+1" */}
```


### Badges

Small labels to highlight status, counts, or categorical information.

**Variants:**
- **Status Badge**: Semantic colors (success, warning, error, info)
- **Count Badge**: Numerical indicators
- **Dot Badge**: Small circular indicator
- **Label Badge**: Text-based labels

**Styles:**
- **Filled**: Solid background with contrasting text
- **Outlined**: Border with transparent background
- **Soft**: Light background with darker text
- **Dot**: Small circular indicator only

**Sizes:**
- **SM**: 16-20px height - Compact badges
- **MD**: 20-24px height - Default size
- **LG**: 24-28px height - Prominent badges

**Visual Design:**
- Border radius: `radius-full` (9999px) for pill shape
- Padding: `spacing-4` to `spacing-8` horizontal, `spacing-2` to `spacing-4` vertical
- Font size: `font-size-11` to `font-size-12`
- Font weight: `font-weight-500` to `font-weight-600`
- Min width: Match height for circular badges

**Semantic Colors (Filled):**
- **Success**: Background `#008934` (green-700), text white
- **Warning**: Background `#FFCC00` (yellow-500), text `#6D4607` (yellow-800)
- **Error**: Background `#E5132E` (red-600), text white
- **Info**: Background `#0B65E3` (blue-600), text white
- **Neutral**: Background `#F1F1F1` (neutral-100), text `#2A2A2A` (neutral-900)

**Common Use Cases:**
- Status indicators (Active, Pending, Completed, Failed)
- Notification counts
- Category labels
- Feature flags (New, Beta, Pro)
- Priority levels (High, Medium, Low)

**Positioning:**
- **Standalone**: Inline with content
- **Attached**: Positioned on corner of element (top-right common)
- **Inline**: Within text or UI elements

**Usage:**
```tsx
{/* Status Badges */}
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Failed</Badge>
<Badge variant="info">In Progress</Badge>

{/* Count Badge */}
<Badge variant="filled" color="brand" dot={false}>
  5
</Badge>

{/* Dot Badge (notification indicator) */}
<Badge variant="dot" color="error" />

{/* Badge on Avatar */}
<div style={{ position: 'relative' }}>
  <Avatar src="/user.jpg" />
  <Badge
    variant="dot"
    color="success"
    style={{ position: 'absolute', top: 0, right: 0 }}
  />
</div>

{/* Label Badges */}
<Badge variant="soft" color="brand">New</Badge>
<Badge variant="outlined" color="neutral">Beta</Badge>
```


### Tags

Categorization components for filtering, organizing, and labeling content.

**Variants:**
- **Default**: Standard tag with text
- **Dismissible**: With X button to remove
- **Clickable**: Interactive, can be selected/deselected
- **With Icon**: Leading icon for visual context

**Sizes:**
- **SM**: 24px height - Compact tags
- **MD**: 28px height - Default size
- **LG**: 32px height - Large tags

**Visual Design:**
- Border radius: `radius-md` (10px) or `radius-full` for pill shape
- Padding: `spacing-8` to `spacing-12` horizontal
- Font size: `font-size-12` to `font-size-14`
- Font weight: `font-weight-500`
- Gap: `spacing-6` between icon and text

**States:**
- **Default**: Subtle background, medium contrast text
- **Hover**: Slightly darker background (if clickable)
- **Selected**: Brand color background
- **Focus**: Focus ring for keyboard navigation

**Colors:**
- Use neutral colors for general tags
- Use brand colors for selected/active tags
- Use semantic colors for status tags

**Usage:**
```tsx
{/* Default Tags */}
<Tag>Lawn Care</Tag>
<Tag>Fertilization</Tag>
<Tag>Weed Control</Tag>

{/* Dismissible Tags */}
<Tag onDismiss={() => removeTag('lawn-care')}>
  Lawn Care
  <CloseIcon />
</Tag>

{/* Clickable/Selectable Tags */}
<Tag
  clickable
  selected={isSelected}
  onClick={() => toggleTag('lawn-care')}
>
  Lawn Care
</Tag>

{/* Tags with Icons */}
<Tag icon={<LocationIcon />}>
  Seattle, WA
</Tag>
<Tag icon={<CalendarIcon />}>
  Next Week
</Tag>
```


### Tooltips

Contextual information that appears on hover or focus, providing additional details without cluttering the interface.

**Variants:**
- **Default Tooltip**: Simple text tooltip
- **Rich Tooltip**: Can include formatted text, icons, or small images
- **Info Tooltip**: With info icon trigger

**Positions:**
- **Top**: Above the trigger element (default)
- **Bottom**: Below the trigger element
- **Left**: To the left of trigger
- **Right**: To the right of trigger
- **Auto**: Automatically positions based on viewport

**Visual Design:**
- Background: `#2A2A2A` (neutral-900) or `#0B0B0B` (neutral-950)
- Text color: `#FFFFFF` (white)
- Font size: `font-size-12` or `font-size-14`
- Padding: `spacing-8` to `spacing-12`
- Border radius: `radius-sm` (8px)
- Shadow: `shadow-center-05` for depth
- Arrow/pointer: 8px triangle pointing to trigger
- Max width: 200-320px
- z-index: High value (e.g., 1000)

**Behavior:**
- Appears on hover (300ms delay recommended)
- Appears on focus for keyboard users
- Dismisses on mouse out or blur
- Doesn't block interaction with other elements
- Follows cursor (optional, for advanced tooltips)
- Adjusts position if near viewport edge

**Accessibility:**
- Uses ARIA attributes (`aria-describedby`, `role="tooltip"`)
- Keyboard accessible (shows on focus)
- Screen reader friendly
- Doesn't trap focus

**Usage:**
```tsx
{/* Simple Tooltip */}
<Tooltip content="Click to schedule a service">
  <Button>Schedule</Button>
</Tooltip>

{/* Positioned Tooltip */}
<Tooltip content="Your account settings" position="bottom">
  <IconButton icon={<SettingsIcon />} />
</Tooltip>

{/* Rich Tooltip */}
<Tooltip
  content={
    <div>
      <strong>Pro Feature</strong>
      <p>Upgrade to access advanced scheduling</p>
    </div>
  }
>
  <Button>Advanced Schedule</Button>
</Tooltip>

{/* Info Icon with Tooltip */}
<label>
  Service Date
  <Tooltip content="Select your preferred service date">
    <InfoIcon />
  </Tooltip>
</label>
```


### Popovers

Richer contextual overlays that can contain more complex content like forms, lists, or actions.

**Differences from Tooltips:**
- Can contain interactive elements
- User must explicitly open/close
- Larger and more prominent
- Can be modal (with backdrop)

**Variants:**
- **Default Popover**: Triggered by click
- **Menu Popover**: Contains list of actions
- **Form Popover**: Contains form fields
- **Confirmation Popover**: For confirming destructive actions

**Visual Design:**
- Background: `#FFFFFF` (white)
- Border: `border-width-regular` (1px) with `color-border-15`
- Border radius: `radius-md` (10px) or `radius-lg` (12px)
- Shadow: `shadow-center-05` or `shadow-center-06`
- Padding: `spacing-16` to `spacing-20`
- Arrow/pointer: Optional, 12px triangle
- Max width: 280-400px

**Positioning:**
- Same positions as tooltips (top, bottom, left, right, auto)
- Can be anchored to trigger element
- Adjusts to stay within viewport

**Behavior:**
- Opens on click (not hover)
- Closes on outside click (if not modal)
- Closes on Escape key
- Can trap focus for keyboard users
- Can have close button

**Usage:**
```tsx
{/* Default Popover */}
<Popover
  trigger={<Button>More Options</Button>}
  content={
    <div>
      <PopoverHeader>Options</PopoverHeader>
      <PopoverBody>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Duplicate</MenuItem>
        <MenuItem>Delete</MenuItem>
      </PopoverBody>
    </div>
  }
/>

{/* Form Popover */}
<Popover
  trigger={<Button>Add Note</Button>}
  content={
    <form>
      <TextArea label="Note" rows={3} />
      <Button type="submit">Save</Button>
    </form>
  }
/>

{/* Confirmation Popover */}
<Popover
  trigger={<Button variant="danger">Delete</Button>}
  content={
    <div>
      <PopoverHeader>Confirm Delete</PopoverHeader>
      <PopoverBody>
        Are you sure you want to delete this service?
      </PopoverBody>
      <PopoverFooter>
        <Button variant="ghost">Cancel</Button>
        <Button variant="danger">Delete</Button>
      </PopoverFooter>
    </div>
  }
/>
```


### Dividers / Separator

Visual separators that organize content into distinct sections.

**Component: `LgSeparator`**

**Features:**
- Simple visual separator for content organization
- Horizontal and vertical orientations
- Semantic HTML with proper ARIA attributes
- Flexible and responsive
- Minimal styling for maximum adaptability

**Props:**
- `orientation` (String): 'horizontal' | 'vertical' (default: 'horizontal')

**Visual Design:**
- Background: `var(--color-border-15)` (subtle grey)
- Thickness: 1px
- Flex-shrink: 0 (maintains size)

**Orientation Styles:**
- **Horizontal**: 100% width × 1px height
- **Vertical**: 1px width × 100% height (min-height: 20px)

**Accessibility:**
- Uses `role="separator"` attribute
- Includes `aria-orientation` attribute
- Semantic separator element

**Common Use Cases:**
- Separate sections in forms
- Divide toolbar items
- Create visual hierarchy in cards
- Separate list items
- Divide menu sections
- Split panel layouts

**Usage:**
```vue
<!-- Horizontal separator (default) -->
<div class="section">
  <p>Content above</p>
  <LgSeparator />
  <p>Content below</p>
</div>

<!-- Vertical separator in toolbar -->
<div style="display: flex; align-items: center; gap: 16px;">
  <LgButton>Cut</LgButton>
  <LgButton>Copy</LgButton>
  <LgSeparator orientation="vertical" />
  <LgButton>Bold</LgButton>
  <LgButton>Italic</LgButton>
</div>

<!-- In a card layout -->
<div class="card">
  <div class="card-header">
    <h3>Card Title</h3>
  </div>
  <LgSeparator />
  <div class="card-body">
    <p>Card content goes here...</p>
  </div>
  <LgSeparator />
  <div class="card-footer">
    <LgButton>Action</LgButton>
  </div>
</div>

<!-- In a menu -->
<div class="menu">
  <div class="menu-item">Profile</div>
  <div class="menu-item">Settings</div>
  <LgSeparator />
  <div class="menu-item">Help</div>
  <div class="menu-item">Logout</div>
</div>

<!-- Vertical separator in split layout -->
<div style="display: flex; height: 400px;">
  <div style="flex: 1; padding: 16px;">
    Left panel content
  </div>
  <LgSeparator orientation="vertical" />
  <div style="flex: 1; padding: 16px;">
    Right panel content
  </div>
</div>
```

**Interactive Demo:**
See the [Component Showcase](./showcase.md#separator) for live examples.

**Styling Tips:**
- Add margin to create spacing around separators
- Use within flex containers for proper vertical sizing
- Combine with other layout components
- Keep it subtle - separators should organize, not dominate

**CSS Example:**
```css
/* Add spacing around horizontal separator */
.separator-spacing {
  margin: 24px 0;
}

/* Vertical separator in flex container */
.flex-container {
  display: flex;
  align-items: stretch; /* Ensures separator fills height */
  gap: 16px;
}
```


### Tables

Display tabular data with sorting, filtering, and pagination capabilities.

**Variants:**
- **Simple Table**: Basic rows and columns
- **Striped Table**: Alternating row colors
- **Bordered Table**: With borders around cells
- **Hoverable Table**: Highlight row on hover
- **Compact Table**: Reduced padding for dense data
- **Responsive Table**: Stacks on mobile or horizontal scroll

**Structure:**
- **Header**: Column titles with optional sorting
- **Body**: Data rows
- **Footer**: Optional totals or pagination

**Visual Design:**
- Border: `border-width-regular` (1px) with `color-border-10`
- Header background: `color-bg-secondary` (`#F6F6F6`)
- Header text: `font-weight-600`, `font-size-14`
- Cell padding: `spacing-12` to `spacing-16`
- Row hover: `color-state-hover` background
- Striped rows: Alternate with `color-bg-secondary`
- Selected row: `color-bg-brand-subtle`

**Column Types:**
- Text columns
- Number columns (right-aligned)
- Date columns
- Status columns (with badges)
- Action columns (with buttons/icons)
- Selection columns (checkboxes)

**Features:**
- **Sorting**: Click column header to sort
- **Filtering**: Per-column or global search
- **Pagination**: Navigate large datasets
- **Row Selection**: Single or multiple selection
- **Row Actions**: Inline buttons or dropdown menu
- **Expandable Rows**: Show/hide additional details
- **Sticky Header**: Header stays visible on scroll

**States:**
- **Loading**: Skeleton rows or spinner
- **Empty**: Empty state message
- **Error**: Error message
- **Selected**: Highlighted rows

**Responsive Behavior:**
- **Mobile**: Stack columns vertically or use horizontal scroll
- **Tablet**: Show important columns, hide secondary data
- **Desktop**: Full table with all columns

**Usage:**
```tsx
<Table
  columns={[
    { key: 'name', label: 'Customer', sortable: true },
    { key: 'service', label: 'Service' },
    { key: 'date', label: 'Date', sortable: true },
    { key: 'status', label: 'Status' },
    { key: 'actions', label: 'Actions', align: 'right' }
  ]}
  data={[
    {
      name: 'John Doe',
      service: 'Lawn Mowing',
      date: '2025-10-25',
      status: <Badge variant="success">Completed</Badge>,
      actions: (
        <Button variant="ghost" size="sm">View</Button>
      )
    },
    // More rows...
  ]}
  striped
  hoverable
  pagination={{
    currentPage: 1,
    totalPages: 5,
    onPageChange: (page) => setPage(page)
  }}
/>
```


### Lists

Display collections of related items in a structured format.

**Types:**
- **Simple List**: Plain text items
- **Icon List**: Items with leading icons
- **Avatar List**: Items with user avatars
- **Description List**: Items with title and description
- **Action List**: Items with trailing actions
- **Nested List**: Hierarchical list with children

**Visual Design:**
- Item padding: `spacing-12` to `spacing-16`
- Item gap: `spacing-8` to `spacing-12`
- Border: Optional dividers between items
- Border radius: `radius-sm` (8px) for interactive items
- Hover background: `color-state-hover`

**List Item Structure:**
- Leading element (icon, avatar, checkbox)
- Primary content (title/text)
- Secondary content (description, metadata)
- Trailing element (actions, badge, chevron)

**States:**
- **Default**: Standard appearance
- **Hover**: Background highlight
- **Selected**: Active/selected appearance
- **Disabled**: Reduced opacity, non-interactive
- **Draggable**: Drag handle visible

**Usage:**
```tsx
{/* Simple List */}
<List>
  <ListItem>Lawn Mowing</ListItem>
  <ListItem>Fertilization</ListItem>
  <ListItem>Weed Control</ListItem>
</List>

{/* Icon List */}
<List>
  <ListItem icon={<CheckIcon />}>Completed</ListItem>
  <ListItem icon={<ClockIcon />}>In Progress</ListItem>
  <ListItem icon={<AlertIcon />}>Pending</ListItem>
</List>

{/* Description List */}
<List>
  <ListItem>
    <ListItemTitle>Lawn Mowing</ListItemTitle>
    <ListItemDescription>
      Weekly mowing service for residential lawns
    </ListItemDescription>
  </ListItem>
</List>

{/* Action List */}
<List>
  <ListItem
    icon={<ProfileIcon />}
    action={<Button size="sm">Edit</Button>}
  >
    Profile Settings
  </ListItem>
</List>
```


## 📋 Usage Guidelines

### When to Use Each Component

**Avatars:**
- User profiles and identification
- Comment sections
- Member lists
- Activity feeds

**Badges:**
- Status indicators
- Notification counts
- Category labels
- Feature flags

**Tags:**
- Content categorization
- Filters and facets
- Selected items
- Keywords

**Tooltips:**
- Provide additional context
- Explain icons or buttons
- Show keyboard shortcuts
- Brief helper text

**Popovers:**
- Contextual menus
- Quick forms
- Rich information
- Confirmations

**Dividers:**
- Separate distinct sections
- Group related content
- Create visual hierarchy
- Improve readability

**Tables:**
- Structured datasets
- Comparison data
- Admin dashboards
- Reports and analytics

**Lists:**
- Navigation menus
- Settings options
- Search results
- Activity feeds


## ♿ Accessibility

### General Guidelines
- Ensure sufficient color contrast
- Provide text alternatives for visual elements
- Support keyboard navigation
- Use semantic HTML
- Include ARIA labels where appropriate

### Specific Components

**Avatars:**
- Provide alt text for image avatars
- Use `aria-label` for initials/icon avatars
- Ensure status indicators are announced

**Badges:**
- Use semantic HTML (`<span>` with role if needed)
- Ensure text meets contrast requirements
- Don't rely solely on color for meaning

**Tooltips:**
- Use `aria-describedby` to associate with trigger
- Show on focus for keyboard users
- Announce content to screen readers

**Tables:**
- Use proper table markup (`<table>`, `<th>`, `<td>`)
- Associate headers with data cells
- Provide caption or `aria-label`
- Make sortable columns keyboard accessible


## 🔄 Auto-generated Section

> **Note:** To add detailed specifications:
> 1. Export data display components from Figma
> 2. Run `npm run docs:update-data-display`
> 3. Full documentation will be generated


**Related:**
- [Buttons →](./buttons.md)
- [Forms →](./forms.md)
- [Navigation →](./navigation.md)
