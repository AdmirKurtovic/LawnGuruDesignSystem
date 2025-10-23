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

### Toggle Switch

Binary on/off switch for settings and preferences.

**States:**
- **Off (unchecked)**: Grey/neutral state
- **On (checked)**: Green/brand color state
- **Disabled Off**: Non-interactive unchecked
- **Disabled On**: Non-interactive checked
- **With Label**: Includes "Name me" text label

**Sizes:**
- Default: Standard toggle size
- With label: Same size with text label on left/right

**Visual Design:**
- Rounded pill shape
- Animated sliding indicator
- Green color (`#008934`) for on state
- Grey color for off state
- Reduced opacity for disabled states

**Usage:**
```tsx
<Toggle
  label="Name me"
  checked={false}
  disabled={false}
  onChange={(checked) => console.log(checked)}
/>
```

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

### Radio Button

Single-select option component for mutually exclusive choices.

**States:**
- **Unselected**: Empty circle
- **Selected**: Filled circle with inner dot
- **Disabled Unselected**: Non-interactive empty
- **Disabled Selected**: Non-interactive selected
- **Error**: Invalid state with red styling
- **Success**: Valid state with green styling

**Visual Design:**
- Circular shape
- Green fill (`#008934`) for selected state
- Inner circle for selected indicator
- Red border for error state
- Green border for success state

**Usage:**
```tsx
<Radio
  name="option-group"
  value="option1"
  label="Name me"
  checked={false}
  disabled={false}
  onChange={(value) => console.log(value)}
/>
```

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

**Features:**
- Resizable (vertical only)
- Character counter (optional)
- Auto-expanding height
- Minimum height: 3 rows
- Maximum height: configurable

**States:**
- Same as text input (default, focus, error, success, disabled)

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
