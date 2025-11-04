# Menu Components

> Contextual menu overlays for actions, navigation, and options.


## 🎯 Components

### Dropdown Menu

Overlay menu that appears when triggered, containing a list of actions or options.

**Variants:**
- **Action Menu**: List of actions (Edit, Delete, Share, etc.)
- **Select Menu**: Choose one option from list
- **Context Menu**: Right-click menu
- **Overflow Menu**: Three-dot menu for additional options

**Visual Design:**
- Background: `#FFFFFF` (white)
- Border: `border-width-regular` (1px) with `color-border-15`
- Border radius: `radius-md` (10px) or `radius-lg` (12px)
- Shadow: `shadow-center-05` or `shadow-center-06`
- Min width: 180-220px
- Max width: 280-320px
- Padding: `spacing-8` vertical
- Z-index: High value (e.g., 1000)

**Positioning:**
- **Bottom-left**: Default, below trigger aligned left
- **Bottom-right**: Below trigger aligned right
- **Top-left**: Above trigger aligned left
- **Top-right**: Above trigger aligned right
- **Auto**: Automatically adjusts based on viewport

**Behavior:**
- Opens on click (action menu) or hover (navigation menu)
- Closes on item click, outside click, or Escape key
- Keyboard navigation (Arrow keys, Enter, Escape)
- Highlights on hover/focus
- Can have nested submenus

**Usage:**
```tsx
<DropdownMenu>
  <DropdownTrigger>
    <Button>
      Options
      <ChevronDownIcon />
    </Button>
  </DropdownTrigger>

  <DropdownContent>
    <MenuItem icon={<EditIcon />}>Edit</MenuItem>
    <MenuItem icon={<DuplicateIcon />}>Duplicate</MenuItem>
    <MenuDivider />
    <MenuItem icon={<DeleteIcon />} variant="danger">
      Delete
    </MenuItem>
  </DropdownContent>
</DropdownMenu>
```


### Menu Item

Individual selectable item within a menu.

**Variants:**
- **Default**: Standard menu item
- **With Icon**: Leading icon
- **With Shortcut**: Shows keyboard shortcut on right
- **With Submenu**: Trailing chevron for nested menu
- **With Checkbox**: For multi-select menus
- **With Radio**: For single-select menus

**Visual Design:**
- Height: 36-40px
- Padding: `spacing-8` to `spacing-12` horizontal
- Font size: `font-size-14`
- Font weight: `font-weight-400` default, `font-weight-500` for emphasis
- Border radius: `radius-sm` (8px)
- Margin: `spacing-4` horizontal (inset from menu edges)
- Gap: `spacing-12` between icon and text

**States:**
- **Default**: Transparent background
- **Hover**: `color-state-hover` background
- **Focus**: Same as hover (keyboard focus)
- **Active/Selected**: `color-bg-brand-subtle` background
- **Disabled**: Reduced opacity, non-interactive, cursor not-allowed

**Colors:**
- Default text: `color-content-primary`
- Icon color: `color-content-secondary`
- Shortcut color: `color-content-tertiary`
- Danger variant: `#E5132E` (red-600) text and icon

**Usage:**
```tsx
{/* Basic Menu Items */}
<MenuItem>Profile</MenuItem>
<MenuItem>Settings</MenuItem>

{/* With Icons */}
<MenuItem icon={<UserIcon />}>Profile</MenuItem>
<MenuItem icon={<SettingsIcon />}>Settings</MenuItem>

{/* With Keyboard Shortcuts */}
<MenuItem icon={<SaveIcon />} shortcut="⌘S">
  Save
</MenuItem>
<MenuItem icon={<CopyIcon />} shortcut="⌘C">
  Copy
</MenuItem>

{/* With Submenu */}
<MenuItem icon={<ShareIcon />} hasSubmenu>
  Share
  <MenuSubmenu>
    <MenuItem>Email</MenuItem>
    <MenuItem>Social Media</MenuItem>
    <MenuItem>Copy Link</MenuItem>
  </MenuSubmenu>
</MenuItem>

{/* Danger Action */}
<MenuItem icon={<DeleteIcon />} variant="danger">
  Delete Account
</MenuItem>

{/* With Checkbox (Multi-select) */}
<MenuItem checkbox checked={true}>
  Show Notifications
</MenuItem>
<MenuItem checkbox checked={false}>
  Auto-save
</MenuItem>

{/* Disabled */}
<MenuItem disabled icon={<LockIcon />}>
  Premium Feature
</MenuItem>
```


### Menu Section / Menu Group

Logical grouping of related menu items with optional header.

**Visual Design:**
- Section header padding: `spacing-8` to `spacing-12`
- Header font size: `font-size-11` to `font-size-12`
- Header font weight: `font-weight-600`
- Header color: `color-content-tertiary`
- Header text transform: Uppercase
- Divider between sections: `color-border-10`

**Usage:**
```tsx
<DropdownMenu>
  <MenuSection label="Account">
    <MenuItem icon={<UserIcon />}>Profile</MenuItem>
    <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
    <MenuItem icon={<BillingIcon />}>Billing</MenuItem>
  </MenuSection>

  <MenuDivider />

  <MenuSection label="Support">
    <MenuItem icon={<HelpIcon />}>Help Center</MenuItem>
    <MenuItem icon={<MessageIcon />}>Contact Us</MenuItem>
    <MenuItem icon={<DocumentIcon />}>Documentation</MenuItem>
  </MenuSection>

  <MenuDivider />

  <MenuSection>
    <MenuItem icon={<LogoutIcon />}>Sign Out</MenuItem>
  </MenuSection>
</DropdownMenu>
```


### Menu Divider

Separator line between menu sections or items.

**Visual Design:**
- Height: `border-width-regular` (1px)
- Color: `color-border-10` or `color-border-15`
- Margin: `spacing-4` to `spacing-8` vertical
- Full width of menu

**Usage:**
```tsx
<MenuItem>Profile</MenuItem>
<MenuItem>Settings</MenuItem>
<MenuDivider />
<MenuItem>Sign Out</MenuItem>
```


### Context Menu

Menu triggered by right-click, providing contextual actions for the clicked element.

**Visual Design:**
- Same styling as Dropdown Menu
- Appears at cursor position
- Adjusts position to stay within viewport

**Behavior:**
- Opens on right-click (contextmenu event)
- Closes on item click, outside click, Escape, or left-click
- Prevents default browser context menu
- Keyboard accessible after opening

**Usage:**
```tsx
<ContextMenu>
  <ContextMenuTrigger>
    <div>Right-click me for options</div>
  </ContextMenuTrigger>

  <ContextMenuContent>
    <MenuItem icon={<CopyIcon />}>Copy</MenuItem>
    <MenuItem icon={<CutIcon />}>Cut</MenuItem>
    <MenuItem icon={<PasteIcon />}>Paste</MenuItem>
    <MenuDivider />
    <MenuItem icon={<DeleteIcon />} variant="danger">
      Delete
    </MenuItem>
  </ContextMenuContent>
</ContextMenu>
```


### Select Menu

Dropdown menu for selecting one or multiple options, similar to a native `<select>` element.

**Variants:**
- **Single Select**: Choose one option
- **Multi Select**: Choose multiple options with checkboxes
- **Searchable**: Includes search/filter input
- **Grouped**: Options organized into groups

**Visual Design:**
- Same base styling as Dropdown Menu
- Selected item has checkmark icon on left or brand color
- Search input at top (if searchable)
- Max height: 300-400px with scroll

**Trigger Button:**
- Shows selected value(s)
- Trailing chevron icon
- Border and padding like input fields

**States:**
- **Default**: Closed, shows selected value or placeholder
- **Open**: Menu visible
- **Focus**: Keyboard focus on trigger
- **Selected**: Item has checkmark or brand color
- **Disabled**: Non-interactive

**Usage:**
```tsx
{/* Single Select */}
<SelectMenu
  value={selectedValue}
  onChange={(value) => setSelectedValue(value)}
  placeholder="Select a service"
>
  <SelectOption value="mowing">Lawn Mowing</SelectOption>
  <SelectOption value="fertilization">Fertilization</SelectOption>
  <SelectOption value="weed-control">Weed Control</SelectOption>
  <SelectOption value="aeration">Aeration</SelectOption>
</SelectMenu>

{/* Multi Select */}
<SelectMenu
  multiple
  value={selectedValues}
  onChange={(values) => setSelectedValues(values)}
  placeholder="Select services"
>
  <SelectOption value="mowing">Lawn Mowing</SelectOption>
  <SelectOption value="fertilization">Fertilization</SelectOption>
  <SelectOption value="weed-control">Weed Control</SelectOption>
</SelectMenu>

{/* Searchable */}
<SelectMenu
  searchable
  searchPlaceholder="Search services..."
  value={selectedValue}
  onChange={(value) => setSelectedValue(value)}
>
  <SelectOption value="mowing">Lawn Mowing</SelectOption>
  <SelectOption value="fertilization">Fertilization</SelectOption>
  {/* More options... */}
</SelectMenu>

{/* Grouped */}
<SelectMenu value={selectedValue} onChange={setValue}>
  <SelectGroup label="Basic Services">
    <SelectOption value="mowing">Lawn Mowing</SelectOption>
    <SelectOption value="edging">Edging</SelectOption>
  </SelectGroup>
  <SelectGroup label="Advanced Services">
    <SelectOption value="fertilization">Fertilization</SelectOption>
    <SelectOption value="aeration">Aeration</SelectOption>
  </SelectGroup>
</SelectMenu>
```


### Combobox

Combination of text input and dropdown menu, allowing both typing and selection.

**Component: `LgCombobox`**

**Features:**
- Text input with autocomplete dropdown
- Live search filtering across label and description
- Keyboard navigation (ArrowDown, ArrowUp, Enter, Escape)
- Click-outside handling to close dropdown
- Highlighted and selected state tracking
- Checkmark icon for selected options
- Support for option descriptions

**Props:**
- `modelValue` (String|Number): Current selected value
- `label` (String): Label text above combobox
- `placeholder` (String): Placeholder text for trigger button (default: "Select option...")
- `options` (Array): Array of option objects with `{ value, label, description? }`

**Events:**
- `update:modelValue`: Emitted when selection changes

**Visual Design:**
- Trigger button shows selected label or placeholder
- Chevron icon rotates when open
- Dropdown appears below trigger with shadow
- Search input at top of dropdown
- Selected option has checkmark icon (LawnGuru green)
- Hover and keyboard highlight with `--color-bg-secondary`

**Keyboard Navigation:**
- **ArrowDown**: Highlight next option
- **ArrowUp**: Highlight previous option
- **Enter**: Select highlighted option and close
- **Escape**: Close dropdown without selecting

**Usage:**
```vue
<LgCombobox
  v-model="selectedFramework"
  label="Framework"
  placeholder="Select framework..."
  :options="[
    {
      value: 'next',
      label: 'Next.js',
      description: 'The React Framework'
    },
    {
      value: 'sveltekit',
      label: 'SvelteKit',
      description: 'Web development, streamlined'
    },
    {
      value: 'nuxt',
      label: 'Nuxt.js',
      description: 'The Intuitive Vue Framework'
    }
  ]"
/>
```

**Interactive Demo:**
See the [Component Showcase](./showcase.md#advanced-selectors) for live examples.


### Command Menu / Command Palette

Keyboard-first menu for quick actions and navigation, providing searchable grouped commands.

**Component: `LgCommand`**

**Features:**
- Search/filter input with live filtering
- Grouped commands with section headings
- Keyboard navigation across groups
- Keyboard shortcuts display (`<kbd>` tags)
- Icon support for commands
- Empty state handling ("No results found")
- Highlighted item tracking with hover/keyboard

**Props:**
- `placeholder` (String): Placeholder for search input (default: "Type a command or search...")
- `groups` (Array): Array of group objects with `{ heading, items[] }`
  - Each item: `{ label, value, icon?, shortcut? }`
- `emptyMessage` (String): Message when no results (default: "No results found.")

**Events:**
- `select`: Emitted when item is selected, passes selected item object

**Visual Design:**
- Max width: 640px
- Border with shadow for depth
- Search input at top with search icon
- Scrollable groups area (max-height: 400px)
- Group headings in uppercase, small font, tertiary color
- Items have rounded corners on hover
- Keyboard shortcuts displayed in monospace font with `<kbd>` styling
- Background highlight for selected/hover state

**Keyboard Navigation:**
- **ArrowDown**: Highlight next item (wraps to first)
- **ArrowUp**: Highlight previous item (wraps to last)
- **Enter**: Select highlighted item
- **Type**: Filter commands by label or value

**Usage:**
```vue
<LgCommand
  placeholder="Type a command or search..."
  :groups="[
    {
      heading: 'Suggestions',
      items: [
        { label: 'Calendar', value: 'calendar' },
        { label: 'Search Emoji', value: 'emoji' },
        { label: 'Calculator', value: 'calculator' }
      ]
    },
    {
      heading: 'Settings',
      items: [
        { label: 'Profile', value: 'profile', shortcut: '⌘P' },
        { label: 'Billing', value: 'billing', shortcut: '⌘B' },
        { label: 'Settings', value: 'settings', shortcut: '⌘S' }
      ]
    }
  ]"
  @select="handleCommand"
/>
```

**With Icons:**
```vue
<script setup>
import { IconCalendar, IconUser, IconSettings } from '@/icons'

const commandGroups = [
  {
    heading: 'Navigation',
    items: [
      {
        label: 'Go to Dashboard',
        value: 'dashboard',
        icon: IconCalendar,
        shortcut: '⌘D'
      },
      {
        label: 'Go to Profile',
        value: 'profile',
        icon: IconUser,
        shortcut: '⌘P'
      }
    ]
  }
]
</script>

<template>
  <LgCommand :groups="commandGroups" @select="navigate" />
</template>
```

**Interactive Demo:**
See the [Component Showcase](./showcase.md#advanced-selectors) for live examples.


### Mega Menu

Large dropdown menu with multi-column layout, rich content, and navigation options.

**Use Cases:**
- Complex site navigation
- Product catalogs
- Feature showcases
- Multi-level categories

**Visual Design:**
- Full-width or large fixed-width container
- Multi-column grid layout (2-4 columns)
- Can include images, descriptions, icons
- Divided into clear sections
- Typically slides down from header

**Structure:**
- Column headers
- Navigation links
- Featured content
- Call-to-action buttons
- Images or illustrations

**Usage:**
```tsx
<MegaMenu>
  <MegaMenuTrigger>
    <NavLink>Services</NavLink>
  </MegaMenuTrigger>

  <MegaMenuContent columns={3}>
    <MegaMenuColumn>
      <MegaMenuHeader>Lawn Care</MegaMenuHeader>
      <MegaMenuItem href="/mowing">Mowing</MegaMenuItem>
      <MegaMenuItem href="/edging">Edging</MegaMenuItem>
      <MegaMenuItem href="/trimming">Trimming</MegaMenuItem>
    </MegaMenuColumn>

    <MegaMenuColumn>
      <MegaMenuHeader>Treatment</MegaMenuHeader>
      <MegaMenuItem href="/fertilization">Fertilization</MegaMenuItem>
      <MegaMenuItem href="/weed-control">Weed Control</MegaMenuItem>
      <MegaMenuItem href="/pest-control">Pest Control</MegaMenuItem>
    </MegaMenuColumn>

    <MegaMenuColumn>
      <MegaMenuHeader>Featured</MegaMenuHeader>
      <MegaMenuCard
        image="/seasonal-package.jpg"
        title="Seasonal Package"
        description="Save 20% on our complete seasonal care"
        href="/packages"
      />
    </MegaMenuColumn>
  </MegaMenuContent>
</MegaMenu>
```


## 📋 Usage Guidelines

### When to Use Each Type

**Dropdown Menu:**
- Action lists (Edit, Delete, Share)
- User account menus
- Settings and options
- Overflow menus (three-dot icon)

**Context Menu:**
- Right-click actions
- Table row actions
- File/folder operations
- Text selection actions

**Select Menu:**
- Form inputs requiring selection
- Filters and sorting
- Settings with predefined options
- Multi-select scenarios

**Combobox:**
- Location/address search
- Tag selection
- Search with suggestions
- Custom input with presets

**Command Menu:**
- Power user shortcuts
- Quick navigation
- Search across app
- Keyboard-driven workflows

**Mega Menu:**
- Complex navigation hierarchies
- E-commerce categories
- Marketing/promotional content
- Feature discovery


## 📋 Best Practices

### Content

- Keep menu item labels concise and action-oriented
- Group related items together
- Use clear, descriptive section headers
- Show keyboard shortcuts for common actions
- Limit menu depth (avoid deep nesting)

### Visual Design

- Maintain consistent spacing and sizing
- Use icons to aid recognition
- Separate dangerous actions (e.g., Delete) with divider
- Show selected/active state clearly
- Ensure sufficient touch targets (min 40x40px)

### Behavior

- Open menus on click for actions, hover for navigation
- Close on item selection (unless multi-select)
- Support keyboard navigation
- Adjust position to stay within viewport
- Provide visual feedback on hover/focus

### Performance

- Lazy load large menus
- Virtualize very long lists
- Debounce search input
- Avoid rendering hidden menus


## ♿ Accessibility

### Keyboard Navigation

- **Tab**: Focus trigger
- **Enter/Space**: Open menu
- **Arrow Up/Down**: Navigate items
- **Arrow Left/Right**: Navigate submenus
- **Escape**: Close menu
- **Home/End**: First/last item
- **Type-ahead**: Jump to item by typing

### ARIA Attributes

```tsx
<button
  aria-haspopup="menu"
  aria-expanded={isOpen}
  aria-controls="menu-1"
>
  Menu
</button>

<ul
  role="menu"
  id="menu-1"
  aria-labelledby="menu-button"
>
  <li role="menuitem">Item 1</li>
  <li role="menuitem">Item 2</li>
  <li role="separator" />
  <li role="menuitem">Item 3</li>
</ul>
```

### Screen Readers

- Use proper ARIA roles (menu, menuitem, menuitemcheckbox, menuitemradio)
- Announce menu opening
- Announce selected items
- Provide context for icon-only items
- Use `aria-label` for complex menu items

### Focus Management

- Trap focus within open menu
- Return focus to trigger on close
- Highlight focused item clearly
- Support roving tabindex for items


## 🔄 Auto-generated Section

> **Note:** To add detailed specifications:
> 1. Export menu components from Figma
> 2. Run `npm run docs:update-menus`
> 3. Full documentation will be generated


**Related:**
- [Buttons →](./buttons.md)
- [Navigation →](./navigation.md)
- [Forms →](./forms.md)
- [Data Display →](./data-display.md)
