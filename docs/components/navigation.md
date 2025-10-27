# Navigation Components

> Components that help users navigate through the application.

---

## 🧭 Components

### Header / Top Navigation Bar

Main site header providing branding, primary navigation, and user actions.

**Variants:**
- **Default Header**: Standard header with logo and navigation links
- **With Search**: Includes integrated search bar
- **With User Menu**: Shows user profile/avatar with dropdown
- **Transparent**: Transparent background (for hero sections)
- **Sticky**: Fixed position on scroll

**Structure:**
- **Logo**: Brand logo/wordmark on the left
- **Navigation Links**: Horizontal menu items in center or left
- **Actions**: Buttons, search, user menu on right
- **Mobile Toggle**: Hamburger menu button for mobile

**Visual Design:**
- Height: 64px (desktop), 56px (mobile)
- Background: `#FFFFFF` (white) or `color-bg-primary`
- Border bottom: `border-width-regular` (1px) with `color-border-10`
- Shadow: `shadow-bottom-02` when sticky
- Padding: `spacing-16` to `spacing-24` horizontal
- Logo height: 32-40px
- Navigation link spacing: `spacing-24` to `spacing-32` gap

**Navigation Link States:**
- **Default**: `color-content-secondary`
- **Hover**: `color-content-primary` with underline
- **Active/Current**: `color-content-brand` with indicator
- **Focus**: Keyboard focus ring

**Usage:**
```tsx
<Header sticky={true}>
  <HeaderLogo>
    <img src="/logo.svg" alt="LawnGuru" />
  </HeaderLogo>

  <HeaderNav>
    <NavLink href="/services" active={true}>Services</NavLink>
    <NavLink href="/pricing">Pricing</NavLink>
    <NavLink href="/about">About</NavLink>
    <NavLink href="/contact">Contact</NavLink>
  </HeaderNav>

  <HeaderActions>
    <SearchButton />
    <Button variant="ghost">Log In</Button>
    <Button variant="primary">Sign Up</Button>
  </HeaderActions>
</Header>
```

---

### Mobile Navigation / Hamburger Menu

Responsive navigation drawer for mobile and tablet viewports.

**States:**
- **Closed**: Only hamburger icon visible
- **Opening**: Slides in from side with animation
- **Open**: Full navigation visible
- **Closing**: Slides out with animation

**Visual Design:**
- **Hamburger Icon**: 24x24px, three horizontal lines
- **Drawer Background**: `#FFFFFF` (white) with overlay backdrop
- **Backdrop**: `rgba(0, 0, 0, 0.5)` overlay on content
- **Width**: Full screen or 280-320px from left/right
- **Animation**: Slide-in transition (250-300ms)
- **Close Button**: X icon in top-right corner
- **Navigation Items**: Full-width links with padding

**Mobile Navigation Structure:**
- Logo/branding at top
- Navigation links (stacked vertically)
- User profile section
- Action buttons at bottom
- Close button in header

**Behavior:**
- Opens on hamburger icon click
- Closes on backdrop click
- Closes on navigation item click
- Keyboard accessible (Esc to close)
- Prevents body scroll when open

**Usage:**
```tsx
<MobileMenu open={isOpen} onClose={() => setIsOpen(false)}>
  <MobileMenuHeader>
    <Logo />
    <CloseButton onClick={() => setIsOpen(false)} />
  </MobileMenuHeader>

  <MobileMenuNav>
    <MobileNavLink href="/services">Services</MobileNavLink>
    <MobileNavLink href="/pricing">Pricing</MobileNavLink>
    <MobileNavLink href="/about">About</MobileNavLink>
  </MobileMenuNav>

  <MobileMenuFooter>
    <Button variant="primary" fullWidth>Get Started</Button>
  </MobileMenuFooter>
</MobileMenu>
```

---

### Bottom Navigation / Bottom Sheet

Bottom-anchored navigation bar for mobile apps, providing quick access to primary sections.

**Variants:**
- **Bottom Navigation Bar**: Fixed navigation with 3-5 items
- **Bottom Sheet**: Expandable panel from bottom
- **Floating Action**: Single primary action button

**Bottom Navigation Bar:**

**Visual Design:**
- Height: 56-64px
- Background: `#FFFFFF` (white)
- Border top: `border-width-regular` (1px) with `color-border-10`
- Shadow: `shadow-top-03` for elevation
- Safe area padding for notched devices
- Icons: 24x24px
- Labels: `font-size-12`, optional

**Navigation Items:**
- 3-5 items (recommended)
- Icon above label (vertical stacking)
- Equal width distribution
- Active indicator: Color + underline or highlight

**Item States:**
- **Inactive**: `color-content-tertiary` with grey icon
- **Active**: `color-content-brand` with filled icon
- **Hover/Press**: Ripple effect or background highlight
- **Badge**: Notification badge on icon

**Usage:**
```tsx
<BottomNav>
  <BottomNavItem active={true} icon={<HomeIcon />} label="Home" />
  <BottomNavItem icon={<ServicesIcon />} label="Services" badge={3} />
  <BottomNavItem icon={<CalendarIcon />} label="Schedule" />
  <BottomNavItem icon={<ProfileIcon />} label="Profile" />
</BottomNav>
```

**Bottom Sheet:**

**Types:**
- **Persistent**: Always visible, can be expanded
- **Modal**: Overlays content with backdrop
- **Detents**: Multiple snap points (collapsed, half, full)

**Visual Design:**
- Background: `#FFFFFF` (white)
- Border radius: `radius-2xl` (20px) or `radius-3xl` (24px) top corners
- Handle: Drag handle at top (32x4px pill shape)
- Shadow: `shadow-top-06` or `shadow-top-07`
- Backdrop: `rgba(0, 0, 0, 0.4)` when modal

**Behavior:**
- Swipe up to expand, down to collapse
- Tap backdrop to dismiss (modal mode)
- Snap to defined heights (detents)
- Smooth spring animation
- Scrollable content when expanded

**Usage:**
```tsx
<BottomSheet
  open={isOpen}
  onClose={() => setIsOpen(false)}
  detents={['collapsed', 'half', 'full']}
  initialDetent="collapsed"
>
  <BottomSheetHandle />
  <BottomSheetHeader>
    <Title>Filter Options</Title>
  </BottomSheetHeader>
  <BottomSheetContent>
    {/* Scrollable content */}
  </BottomSheetContent>
  <BottomSheetFooter>
    <Button variant="primary" fullWidth>Apply Filters</Button>
  </BottomSheetFooter>
</BottomSheet>
```

---

### Breadcrumbs

Shows user's location in the site hierarchy and provides quick navigation to parent pages.

**Visual Design:**
- Font size: `font-size-14`
- Color: `color-content-tertiary` for inactive, `color-content-primary` for current
- Separator: `/` or `›` or chevron icon
- Spacing: `spacing-8` around separator
- Hover: Underline on link items

**Structure:**
- Home icon or "Home" text (optional)
- Parent pages as clickable links
- Current page (non-clickable, emphasized)
- Separators between items

**Behavior:**
- Links navigate to parent pages
- Current page is not a link
- Truncate on mobile if too long
- Collapse to "..." for deep hierarchies

**Usage:**
```tsx
<Breadcrumbs>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/services">Services</BreadcrumbItem>
  <BreadcrumbItem href="/services/lawn-care">Lawn Care</BreadcrumbItem>
  <BreadcrumbItem current>Mowing</BreadcrumbItem>
</Breadcrumbs>
```

---

### Tabs

Organize content into separate views within the same page or context.

**Variants:**
- **Default Tabs**: Underline style with border bottom
- **Pill Tabs**: Rounded background style
- **Boxed Tabs**: Full border around each tab
- **Vertical Tabs**: Stacked vertically (sidebar)

**Visual Design:**

**Default Tabs:**
- Border bottom: `border-width-2` (2px) for active tab
- Active color: `#008934` (brand green)
- Inactive color: `color-content-tertiary`
- Spacing: `spacing-24` to `spacing-32` between tabs
- Padding: `spacing-12` to `spacing-16`
- Font weight: `font-weight-500` for active, `font-weight-400` for inactive

**Pill Tabs:**
- Background: `color-bg-secondary` for active
- Border radius: `radius-full` (9999px)
- Padding: `spacing-8` to `spacing-12` vertical, `spacing-16` to `spacing-20` horizontal
- Smooth background transition

**States:**
- **Inactive**: Default appearance
- **Hover**: Subtle background or underline
- **Active**: Brand color indicator
- **Focus**: Keyboard focus ring
- **Disabled**: Reduced opacity, non-interactive

**Usage:**
```tsx
<Tabs defaultValue="overview">
  <TabsList>
    <Tab value="overview">Overview</Tab>
    <Tab value="services">Services</Tab>
    <Tab value="pricing">Pricing</Tab>
    <Tab value="reviews">Reviews</Tab>
  </TabsList>

  <TabPanel value="overview">
    <OverviewContent />
  </TabPanel>
  <TabPanel value="services">
    <ServicesContent />
  </TabPanel>
  {/* More panels */}
</Tabs>
```

---

### Sidebar Navigation

Vertical navigation for dashboard, admin, or complex application interfaces.

**Variants:**
- **Expanded**: Full width with icons and labels
- **Collapsed**: Icon-only with tooltips
- **Collapsible**: Can toggle between expanded/collapsed
- **Fixed**: Always visible
- **Overlay**: Drawer on mobile

**Visual Design:**
- **Width**: 240-280px (expanded), 64px (collapsed)
- **Background**: `#FFFFFF` or `color-bg-secondary`
- **Border**: Right border with `color-border-10`
- **Navigation Items**:
  - Height: 40-48px
  - Padding: `spacing-12` to `spacing-16`
  - Border radius: `radius-sm` (8px)
  - Gap: `spacing-8` between icon and label

**Navigation Item States:**
- **Default**: Transparent background
- **Hover**: `color-state-hover` background
- **Active**: `color-bg-brand-subtle` background with `color-content-brand`
- **Focus**: Focus ring

**Structure:**
- Logo/branding at top
- Navigation groups (optional headers)
- Navigation items with icons and labels
- User profile at bottom (optional)
- Collapse toggle button

**Usage:**
```tsx
<Sidebar collapsed={isCollapsed}>
  <SidebarHeader>
    <Logo />
    <CollapseToggle onClick={() => setIsCollapsed(!isCollapsed)} />
  </SidebarHeader>

  <SidebarNav>
    <SidebarSection title="Main">
      <SidebarItem active={true} icon={<DashboardIcon />}>
        Dashboard
      </SidebarItem>
      <SidebarItem icon={<ServicesIcon />}>
        Services
      </SidebarItem>
      <SidebarItem icon={<CalendarIcon />}>
        Schedule
      </SidebarItem>
    </SidebarSection>

    <SidebarSection title="Settings">
      <SidebarItem icon={<SettingsIcon />}>
        Settings
      </SidebarItem>
    </SidebarSection>
  </SidebarNav>

  <SidebarFooter>
    <UserProfile name="John Doe" email="john@example.com" />
  </SidebarFooter>
</Sidebar>
```

---

### Footer

Site footer with links, contact information, and legal content.

**Sections:**
- **Logo & Description**: Branding and brief about
- **Navigation Links**: Organized in columns by category
- **Social Media**: Social media icon links
- **Newsletter Signup**: Email subscription form (optional)
- **Legal Links**: Privacy, Terms, Copyright
- **Contact Info**: Email, phone, address

**Visual Design:**
- Background: `color-bg-secondary` or `#F6F6F6` (neutral-50)
- Padding: `spacing-48` to `spacing-64` vertical
- Border top: Optional `color-border-10`
- Column layout: 2-4 columns on desktop
- Stacked layout on mobile

**Usage:**
```tsx
<Footer>
  <FooterTop>
    <FooterColumn>
      <Logo />
      <FooterDescription>
        Professional lawn care services for beautiful outdoor spaces.
      </FooterDescription>
    </FooterColumn>

    <FooterColumn>
      <FooterTitle>Services</FooterTitle>
      <FooterLink href="/lawn-mowing">Lawn Mowing</FooterLink>
      <FooterLink href="/fertilization">Fertilization</FooterLink>
      <FooterLink href="/weed-control">Weed Control</FooterLink>
    </FooterColumn>

    <FooterColumn>
      <FooterTitle>Company</FooterTitle>
      <FooterLink href="/about">About Us</FooterLink>
      <FooterLink href="/contact">Contact</FooterLink>
      <FooterLink href="/careers">Careers</FooterLink>
    </FooterColumn>

    <FooterColumn>
      <FooterTitle>Connect</FooterTitle>
      <SocialLinks>
        <SocialLink href="#" icon={<FacebookIcon />} />
        <SocialLink href="#" icon={<TwitterIcon />} />
        <SocialLink href="#" icon={<InstagramIcon />} />
      </SocialLinks>
    </FooterColumn>
  </FooterTop>

  <FooterBottom>
    <Copyright>© 2025 LawnGuru. All rights reserved.</Copyright>
    <LegalLinks>
      <FooterLink href="/privacy">Privacy Policy</FooterLink>
      <FooterLink href="/terms">Terms of Service</FooterLink>
    </LegalLinks>
  </FooterBottom>
</Footer>
```

---

### Pagination

Navigate through multi-page content or data tables.

**Component: `LgPagination`**

**Features:**
- Numbered pagination with Previous/Next buttons
- Smart page number display with ellipsis
- Configurable sibling count for visible pages
- Automatic edge case handling
- Disabled states for boundary pages
- Accessible with ARIA labels
- LawnGuru green for active page

**Props:**
- `currentPage` (Number, required): Current active page (1-indexed)
- `totalPages` (Number, required): Total number of pages
- `siblingCount` (Number): Number of pages to show on each side of current page (default: 1)

**Events:**
- `update:currentPage`: Emitted when page changes with new page number

**Visual Design:**
- Page buttons: 36px × 36px square
- Active page: `var(--grass-700)` background with white text
- Inactive pages: White background with border
- Border: 1px solid `var(--color-border-20)`
- Border radius: `var(--radius-sm)` (8px)
- Font size: `var(--font-size-14)`
- Font weight: `var(--font-weight-500)`
- Gap: `var(--spacing-4)` between page buttons, `var(--spacing-8)` for prev/next

**Previous/Next Buttons:**
- Inline text with chevron icons
- Padding: 8px vertical, 12px horizontal
- Disabled when on first/last page
- Hover: `var(--color-bg-secondary)` background
- Includes SVG chevron icons (15×15px)

**Page Number Display Logic:**
- Always show first and last page
- Show ellipsis (...) for gaps
- Show current page and siblings
- Adjusts display based on current position
- Examples:
  - [1] [2] [3] [4] [...] [10] (at start)
  - [1] [...] [5] [6] [7] [...] [10] (in middle)
  - [1] [...] [7] [8] [9] [10] (at end)

**Accessibility:**
- Navigation landmark with `role="navigation"`
- `aria-label="Pagination"` on container
- `aria-label` on Previous/Next buttons
- Disabled state prevents interaction
- Keyboard accessible (Tab, Enter)

**Common Use Cases:**
- Data table pagination
- Blog post archives
- Search results
- Product listings
- Gallery navigation
- Documentation pages

**Usage:**
```vue
<template>
  <div>
    <!-- Simple pagination -->
    <LgPagination
      :current-page="currentPage"
      :total-pages="10"
      @update:currentPage="currentPage = $event"
    />

    <!-- With custom sibling count -->
    <LgPagination
      :current-page="page"
      :total-pages="totalPages"
      :siblingCount="2"
      @update:currentPage="handlePageChange"
    />

    <!-- With data table -->
    <div class="data-container">
      <table>
        <!-- Table content -->
        <tbody>
          <tr v-for="item in paginatedItems" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
          </tr>
        </tbody>
      </table>

      <div class="pagination-footer">
        <span>Showing {{ startItem }}-{{ endItem }} of {{ totalItems }}</span>
        <LgPagination
          :current-page="currentPage"
          :total-pages="totalPages"
          @update:currentPage="currentPage = $event"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentPage = ref(1)
const itemsPerPage = 10
const allItems = ref([/* your data */])

const totalPages = computed(() =>
  Math.ceil(allItems.value.length / itemsPerPage)
)

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return allItems.value.slice(start, end)
})

const startItem = computed(() =>
  (currentPage.value - 1) * itemsPerPage + 1
)

const endItem = computed(() =>
  Math.min(currentPage.value * itemsPerPage, allItems.value.length)
)

const totalItems = computed(() => allItems.value.length)

const handlePageChange = (page) => {
  currentPage.value = page
  // Optional: scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.data-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-24);
}

.pagination-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-16);
  border-top: 1px solid var(--color-border-15);
}
</style>
```

**Interactive Demo:**
See the [Component Showcase](./showcase.md#pagination) for live examples.

**Best Practices:**
- Show 5-7 page numbers maximum at once
- Always display first and last page numbers
- Use ellipsis for large gaps
- Maintain page state in URL (use query params)
- Scroll to top on page change (optional)
- Show total count and current range
- Consider load more or infinite scroll for mobile

---

## 📋 Usage Guidelines

### Navigation Hierarchy

**Primary Navigation:**
- Top header for main sections
- 4-7 items maximum
- Clear, concise labels

**Secondary Navigation:**
- Tabs or sidebar for subsections
- Breadcrumbs for hierarchy
- Context-specific

**Mobile Navigation:**
- Hamburger menu or bottom nav
- Prioritize most-used items
- Clear hierarchy

### Consistency

- Keep navigation in same position across pages
- Use consistent labels and icons
- Highlight current location
- Maintain visual hierarchy

### Accessibility

- Keyboard navigable (Tab, Arrow keys, Enter)
- Screen reader friendly (ARIA labels)
- Focus indicators visible
- Skip to content link

### Responsive Design

- Adapt layout for different screen sizes
- Hamburger menu for mobile header
- Bottom nav for mobile apps
- Touch-friendly tap targets (min 44x44px)

---

## ♿ Accessibility

### ARIA Attributes
- Use `<nav>` landmark or `role="navigation"`
- `aria-current="page"` for active items
- `aria-expanded` for expandable menus
- `aria-label` for navigation regions

### Keyboard Support
- Tab to navigate between items
- Enter/Space to activate links
- Escape to close mobile menus
- Arrow keys for submenu navigation

### Focus Management
- Visible focus indicators
- Logical focus order
- Focus trap in mobile menus
- Return focus on close

---

## 🔄 Auto-generated Section

> **Note:** To add detailed specifications:
> 1. Export navigation components from Figma
> 2. Run `npm run docs:update-navigation`
> 3. Full documentation will be generated

---

**Related:**
- [Buttons →](./buttons.md)
- [Forms →](./forms.md)
- [Layouts →](../patterns/layouts.md)
