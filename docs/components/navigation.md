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

**Variants:**
- **Numbered**: Shows page numbers with prev/next
- **Simple**: Just prev/next arrows
- **Load More**: Button to append more content
- **Infinite Scroll**: Automatic loading on scroll

**Visual Design:**

**Numbered Pagination:**
- Button size: 32-40px square
- Active page: `color-bg-brand` background with white text
- Inactive: `color-content-secondary`
- Hover: `color-state-hover` background
- Border radius: `radius-sm` (8px)
- Gap: `spacing-8` between buttons
- Ellipsis (...) for skipped pages

**Controls:**
- Previous/Next buttons with arrows
- First/Last page buttons (optional)
- Page numbers (show 5-7 around current)
- Items per page selector (optional)

**Behavior:**
- Disable prev on first page, next on last page
- Maintain scroll position or scroll to top
- Update URL with page number
- Keyboard accessible (Tab, Enter, Arrow keys)

**Usage:**
```tsx
<Pagination
  currentPage={3}
  totalPages={10}
  onPageChange={(page) => setCurrentPage(page)}
  itemsPerPage={20}
  totalItems={200}
/>

{/* Simple Pagination */}
<SimplePagination
  hasPrevious={true}
  hasNext={true}
  onPrevious={() => prevPage()}
  onNext={() => nextPage()}
/>

{/* Load More */}
<LoadMoreButton
  onClick={() => loadMore()}
  loading={isLoading}
  hasMore={hasMore}
>
  Load More Results
</LoadMoreButton>
```

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
