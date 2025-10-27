# Form Components

> Form elements that enable user input and data collection.

---

## 📝 Components

### Select Dropdown

Dropdown component for selecting one option from a list.

**States:**
- **Default**: Initial, unselected state with placeholder
- **Hover**: Mouse over state
- **Focus**: Keyboard focus or clicked state
- **Selected**: Option chosen, displays selected value
- **Error**: Invalid selection or validation error
- **Disabled**: Non-interactive state
- **Success**: Valid selection confirmed

**Visual Indicators:**
- Dropdown icon (chevron) on the right
- Checkmark icon for selected options in dropdown list
- Red border/highlight for error state
- Green highlight for success state
- Reduced opacity for disabled state

**Usage:**
```tsx
<Select
  label="Name me"
  placeholder="Select an option"
  options={['Option 1', 'Option 2', 'Option 3']}
  state="default" // default | hover | focus | selected | error | disabled | success
/>
```

---

### Toggle Switch / Switch

Binary on/off switch for settings and preferences.

**Component: `LgSwitch`**

**Features:**
- Animated sliding thumb on toggle
- Label and description support
- Disabled state
- Keyboard accessible (Space to toggle)
- LawnGuru green for active state

**Props:**
- `modelValue` (Boolean): Current switch state (default: false)
- `label` (String): Label text displayed next to switch
- `description` (String): Helper text below switch
- `disabled` (Boolean): Disable interaction

**Events:**
- `update:modelValue`: Emitted when switch is toggled

**Visual Design:**
- Width: 44px, Height: 24px
- Rounded pill shape with sliding thumb
- Green color (`#008934`) for on state
- Grey color for off state
- Reduced opacity (0.5) for disabled states
- Smooth 200ms transition animation

**Usage:**
```vue
<LgSwitch
  v-model="notificationsEnabled"
  label="Enable notifications"
  description="Receive email notifications for updates"
/>

<!-- Disabled switch -->
<LgSwitch
  :model-value="true"
  disabled
  label="Auto-save (Premium feature)"
/>
```

**Interactive Demo:**
See the [Component Showcase](./showcase.md#switchtoggle) for live examples.

---

### Checkbox

Multi-select option component for forms and lists.

**States:**
- **Unchecked**: Empty checkbox
- **Checked**: Filled with checkmark
- **Indeterminate**: Partial selection (for parent/child relationships)
- **Disabled Unchecked**: Non-interactive empty
- **Disabled Checked**: Non-interactive checked
- **Error**: Invalid state with red styling
- **Success**: Valid state with green styling

**Visual Design:**
- Square shape with rounded corners (`radius-sm`: 8px)
- Green fill (`#008934`) when checked
- Red border for error state
- Green border for success state
- White checkmark icon on colored background

**Usage:**
```tsx
<Checkbox
  label="Name me"
  checked={false}
  indeterminate={false}
  disabled={false}
  error={false}
  onChange={(checked) => console.log(checked)}
/>
```

---

### Radio Button / Radio Group

Single-select option component for mutually exclusive choices.

**Component: `LgRadioGroup`**

**Features:**
- Group multiple radio options together
- Support for labels and descriptions per option
- Individual option disable state
- Accessible with proper ARIA attributes
- Hidden native radio inputs for accessibility
- Custom styled indicators

**Props:**
- `modelValue` (String|Number): Currently selected value
- `label` (String): Group label
- `options` (Array): Array of option objects
  - Each option: `{ value, label, description?, disabled? }`
- `disabled` (Boolean): Disable entire group

**Events:**
- `update:modelValue`: Emitted when selection changes

**Visual Design:**
- Circular indicators (20px)
- Green border (`#008934`) when selected
- Inner dot (10px) scales in on selection
- Supports rich descriptions per option
- 2px border width
- Smooth scale transition (150ms)

**Usage:**
```vue
<LgRadioGroup
  v-model="selectedPlan"
  label="Select a plan"
  :options="[
    {
      value: 'free',
      label: 'Free',
      description: 'Perfect for getting started'
    },
    {
      value: 'pro',
      label: 'Pro',
      description: 'Best for professionals'
    },
    {
      value: 'enterprise',
      label: 'Enterprise',
      description: 'For large organizations',
      disabled: true
    }
  ]"
/>
```

**Interactive Demo:**
See the [Component Showcase](./showcase.md#radio-group) for live examples.

---

### Text Input

Standard single-line text input field.

**States:**
- **Default**: Initial unfocused state
- **Focus**: Active input state
- **Filled**: Contains user input
- **Error**: Validation error with red border
- **Success**: Valid input with green border
- **Disabled**: Non-interactive state
- **Read-only**: Display-only mode

**Variants:**
- With label (top-aligned)
- With placeholder text
- With helper text (below input)
- With icon (left or right)
- With character counter
- With clear button

**Visual Design:**
- Border radius: `radius-sm` (8px)
- Padding: `spacing-12` vertical, `spacing-16` horizontal
- Border: `border-width-regular` (1px)
- Font size: `font-size-16`
- Line height: `font-height-24`

**Usage:**
```tsx
<Input
  label="Email Address"
  placeholder="your@email.com"
  type="email"
  helperText="We'll never share your email"
  error={false}
  errorMessage="Please enter a valid email"
  disabled={false}
/>
```

---

### Search Input

Specialized input field for search functionality.

**Features:**
- Search icon (magnifying glass) on left
- Clear button (X) on right when filled
- Auto-complete/suggestions dropdown
- Search history

**States:**
- Default (with search icon)
- Focus (active searching)
- Filled (with clear button)
- Loading (with spinner)

**Visual Design:**
- Same styling as text input
- Search icon: Left-aligned, grey color
- Clear button: Right-aligned, appears on input
- Border radius: `radius-md` (10px) for softer look

**Usage:**
```tsx
<SearchInput
  placeholder="Search..."
  onSearch={(query) => console.log(query)}
  showSuggestions={true}
  clearable={true}
/>
```

---

### Textarea

Multi-line text input for longer content.

**Component: `LgTextarea`**

**Features:**
- Resizable (vertical only)
- Character counter with max length enforcement
- Label and helper text support
- Error and success states with messages
- Disabled and read-only states
- Configurable row height

**Props:**
- `modelValue` (String): Current textarea value
- `label` (String): Label text above textarea
- `placeholder` (String): Placeholder text
- `helperText` (String): Helper text below textarea
- `error` (Boolean): Error state
- `errorMessage` (String): Error message text
- `success` (Boolean): Success state
- `successMessage` (String): Success message text
- `disabled` (Boolean): Disable textarea
- `rows` (Number): Number of visible rows (default: 4)
- `maxLength` (Number): Maximum character count

**Events:**
- `update:modelValue`: Emitted on input change
- `focus`: Emitted when textarea receives focus
- `blur`: Emitted when textarea loses focus

**Visual Design:**
- Min height: 80px (resizable)
- Border: 1px solid, changes on states
- Border radius: 8px
- Padding: 12px vertical, 16px horizontal
- Green border on focus
- Character counter appears bottom-right when maxLength set

**Usage:**
```vue
<LgTextarea
  v-model="message"
  label="Your message"
  placeholder="Type your message here..."
  helperText="Your message will be sent to the team"
  :rows="6"
  :max-length="500"
/>

<!-- With error state -->
<LgTextarea
  v-model="feedback"
  label="Feedback"
  error
  errorMessage="Feedback must be at least 20 characters"
/>
```

**Interactive Demo:**
See the [Component Showcase](./showcase.md#textarea) for live examples.

---

### Date Picker

Calendar-based date selection component (see screenshot #5).

**Variants:**
- Single date picker
- Date range picker
- With time selection
- Calendar view
- List view
- Menu view with presets (Today, Yesterday, This week, etc.)

**Features:**
- Month/year navigation
- Selected date highlighting (green)
- Today indicator
- Disabled dates
- Min/max date ranges
- Keyboard navigation

---

### File Upload

Component for file selection and upload.

**Variants:**
- Drag and drop area
- Click to browse button
- Multiple file support
- File preview thumbnails
- Progress indicator

**States:**
- Default (empty)
- Dragging over
- Uploading (with progress)
- Completed
- Error (file too large, wrong type)

---

### Slider / Range Input

Input for selecting a value from within a given range.

**Component: `LgSlider`**

**Features:**
- Horizontal range slider
- Custom min/max/step values
- Optional value display
- Label support
- Disabled state
- Visual thumb and track

**Props:**
- `modelValue` (Number): Current slider value (default: 50)
- `label` (String): Label text above slider
- `min` (Number): Minimum value (default: 0)
- `max` (Number): Maximum value (default: 100)
- `step` (Number): Step increment (default: 1)
- `disabled` (Boolean): Disable slider
- `showValue` (Boolean): Display current value below slider

**Events:**
- `update:modelValue`: Emitted when value changes

**Visual Design:**
- Track height: 6px
- Thumb size: 20px circle
- Green fill (`#008934`) for selected range
- White thumb with green border
- Smooth transitions (150ms)
- Focus ring on keyboard focus

**Usage:**
```vue
<LgSlider
  v-model="volume"
  label="Volume"
  :min="0"
  :max="100"
  :step="1"
  :show-value="true"
/>

<!-- Custom range -->
<LgSlider
  v-model="price"
  label="Price Range"
  :min="0"
  :max="1000"
  :step="10"
/>
```

**Interactive Demo:**
See the [Component Showcase](./showcase.md#slider) for live examples.

---

### Tabs

Tabbed interface for organizing content into separate views.

**Component: `LgTabs`**

**Features:**
- Multiple tab support
- Named slots for tab content
- Active tab highlighting
- Keyboard navigation
- Responsive design

**Props:**
- `modelValue` (String): Currently active tab value (required)
- `tabs` (Array): Array of tab objects (required)
  - Each tab: `{ value, label }`

**Events:**
- `update:modelValue`: Emitted when tab changes

**Slots:**
- Dynamic named slots based on tab values
- Slot name matches tab value

**Visual Design:**
- Pills-style tabs with rounded background
- Active tab: white background with shadow
- Inactive tabs: transparent with hover effect
- 4px padding around tab list
- Smooth transitions

**Usage:**
```vue
<LgTabs
  v-model="activeTab"
  :tabs="[
    { value: 'account', label: 'Account' },
    { value: 'password', label: 'Password' },
    { value: 'notifications', label: 'Notifications' }
  ]"
>
  <template #account>
    <div>Account settings content...</div>
  </template>
  <template #password>
    <div>Password change form...</div>
  </template>
  <template #notifications>
    <div>Notification preferences...</div>
  </template>
</LgTabs>
```

**Interactive Demo:**
See the [Component Showcase](./showcase.md#tabs) for live examples.

---

### Toggle Group

Group of toggle buttons for multi-select or single-select options.

**Component: `LgToggleGroup`**

**Features:**
- Single or multiple selection modes
- Icon support for items
- Active state styling
- Keyboard accessible

**Props:**
- `modelValue` (String|Array): Selected value(s)
- `items` (Array): Array of item objects (required)
  - Each item: `{ value, label, icon? }`
- `type` (String): 'single' or 'multiple' (default: 'single')

**Events:**
- `update:modelValue`: Emitted when selection changes

**Usage:**
```vue
<!-- Single select (like text formatting) -->
<LgToggleGroup
  v-model="textFormat"
  :items="[
    { value: 'bold', label: 'B' },
    { value: 'italic', label: 'I' },
    { value: 'underline', label: 'U' }
  ]"
/>

<!-- Multiple select -->
<LgToggleGroup
  v-model="selectedFilters"
  type="multiple"
  :items="[
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'archived', label: 'Archived' }
  ]"
/>
```

**Interactive Demo:**
See the [Component Showcase](./showcase.md#toggle-group) for live examples.

---

## 📋 Usage Guidelines

### Form Layout
- Stack form fields vertically with consistent spacing
- Group related fields together
- Use clear, descriptive labels
- Provide helpful placeholder text
- Show validation inline

### Labels
- Always provide visible labels
- Position labels above inputs (recommended)
- Use sentence case
- Keep labels concise

### Helper Text
- Provide context before users interact
- Use for format requirements
- Keep brief and actionable

### Error Messages
- Show inline validation
- Be specific about the error
- Suggest how to fix it
- Use red semantic color

### Required Fields
- Mark with asterisk (*) or "Required" label
- Indicate at form level what's required
- Don't make everything required

---

## ♿ Accessibility

- Associate labels with inputs using `for`/`id`
- Provide error messages linked with `aria-describedby`
- Ensure sufficient color contrast
- Support keyboard navigation
- Use appropriate input types

---

## 🔄 Auto-generated Section

> **Note:** To add detailed specifications:
> 1. Export form components from Figma
> 2. Run `npm run docs:update-forms`
> 3. Full documentation will be generated

---

**Related:**
- [Buttons →](./buttons.md)
