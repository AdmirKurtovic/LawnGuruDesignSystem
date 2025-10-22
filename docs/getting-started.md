# Getting Started with LawnGuru Design System

> Everything you need to start using the LawnGuru Design System.

---

## 👋 Welcome!

The LawnGuru Design System helps you build consistent, accessible, and beautiful experiences. This guide will get you up and running quickly.

---

## 🎯 Who is this for?

### Designers
- Access Figma components
- Use design tokens
- Follow design guidelines

### Developers
- Install component library
- Implement components
- Use design tokens in code

### Product Managers
- Understand patterns
- Reference best practices
- Plan features

---

## 🎨 For Designers

### 1. Access Figma

Get access to the LawnGuru Design Library:
- [Figma Design Library](https://www.figma.com/design/3a9rDSr5fnmhcTaYxLgqkF/Design-library)
- Request access from the design team
- Enable the library in your Figma file

### 2. Enable the Library

In your Figma file:
1. Click the **Assets** panel
2. Click the **Library** icon (book)
3. Find "LawnGuru Design System"
4. Toggle **ON**

### 3. Use Components

Drag components from the Assets panel:
- Browse by category
- Use component properties to change variants
- Detach only when absolutely necessary
- Stay in sync with library updates

### 4. Use Design Tokens

All components use design tokens for:
- Colors (color styles)
- Typography (text styles)
- Spacing (auto-layout spacing)
- Effects (shadows, blurs)

**Best Practice:** Use color styles and text styles instead of hardcoded values.

### 5. Resources

- [Figma Design Library](https://www.figma.com/design/3a9rDSr5fnmhcTaYxLgqkF/Design-library)
- [Color Palette](./foundations/colors.md)
- [Typography](./foundations/typography.md)
- [Design Principles](./guidelines/design-principles.md)

---

## 💻 For Developers

### 1. Install the Package

```bash
# Using npm
npm install @lawnguru/ui

# Using yarn
yarn add @lawnguru/ui

# Using pnpm
pnpm add @lawnguru/ui
```

### 2. Import Components

```tsx
// Import individual components
import { Button, Input, Card } from '@lawnguru/ui';

// Use in your app
function App() {
  return (
    <Card>
      <Input placeholder="Enter your email" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

### 3. Add Styles

Import the base styles in your main CSS/JS file:

```tsx
// In your main file (e.g., App.tsx or _app.tsx)
import '@lawnguru/ui/styles.css';
```

### 4. Use Design Tokens

#### CSS Variables

```css
/* Use CSS variables directly */
.custom-element {
  color: var(--color-primary);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
}
```

#### JavaScript/TypeScript

```typescript
import { tokens } from '@lawnguru/ui/tokens';

const styles = {
  color: tokens.color.primary,
  padding: tokens.spacing.md,
};
```

#### Tailwind Configuration

If using Tailwind CSS:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@lawnguru/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        // ... other colors
      },
      spacing: {
        // Uses default spacing scale that matches design system
      },
    },
  },
};
```

### 5. TypeScript Support

The library is fully typed:

```tsx
import { Button, ButtonProps } from '@lawnguru/ui';

// Props are fully typed
const MyButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <Button
      variant="primary"  // TypeScript autocomplete
      size="md"         // TypeScript autocomplete
      onClick={onClick}
    >
      Click me
    </Button>
  );
};
```

### 6. Component Documentation

Each component is documented with:
- Usage examples
- Props/API reference
- Accessibility notes
- Code examples

Browse the [Components documentation](./components/).

### 7. Resources

- [Component Library](./components/)
- [Design Tokens](./foundations/tokens.md)
- [Accessibility Guidelines](./guidelines/accessibility.md)
- [Contributing Guide](./guidelines/contributing.md)

---

## 📦 Quick Start Examples

### Example 1: Simple Form

```tsx
import { Button, Input, Label } from '@lawnguru/ui';

function ContactForm() {
  return (
    <form>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your name" />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="your@email.com" />
      </div>

      <Button type="submit" variant="primary">
        Send Message
      </Button>
    </form>
  );
}
```

### Example 2: Service Card

```tsx
import { Card, Button, Badge } from '@lawnguru/ui';

function ServiceCard({ title, price, description }) {
  return (
    <Card>
      <Card.Header>
        <h3>{title}</h3>
        <Badge variant="success">Popular</Badge>
      </Card.Header>

      <Card.Body>
        <p className="text-2xl font-bold">{price}</p>
        <p>{description}</p>
      </Card.Body>

      <Card.Footer>
        <Button variant="primary" size="lg" className="w-full">
          Book Service
        </Button>
      </Card.Footer>
    </Card>
  );
}
```

### Example 3: Navigation

```tsx
import { Nav, NavItem, Button } from '@lawnguru/ui';

function Header() {
  return (
    <Nav>
      <Nav.Brand href="/">
        <img src="/logo.svg" alt="LawnGuru" />
      </Nav.Brand>

      <Nav.Items>
        <NavItem href="/services">Services</NavItem>
        <NavItem href="/pricing">Pricing</NavItem>
        <NavItem href="/about">About</NavItem>
      </Nav.Items>

      <Nav.Actions>
        <Button variant="secondary" size="sm" href="/login">
          Login
        </Button>
        <Button variant="primary" size="sm" href="/signup">
          Get Started
        </Button>
      </Nav.Actions>
    </Nav>
  );
}
```

---

## 🎓 Learning Path

### Week 1: Foundations
1. Read [Design Principles](./guidelines/design-principles.md)
2. Review [Color Palette](./foundations/colors.md)
3. Understand [Typography](./foundations/typography.md)
4. Learn [Spacing](./foundations/spacing.md)

### Week 2: Components
1. Start with [Buttons](./components/buttons.md)
2. Learn [Forms](./components/forms.md)
3. Explore [Cards](./components/cards.md)
4. Study [Navigation](./components/navigation.md)

### Week 3: Patterns
1. Review [Layouts](./patterns/layouts.md)
2. Understand [Responsive Patterns](./patterns/responsive.md)
3. Learn [Form Patterns](./patterns/forms.md)

### Week 4: Guidelines
1. Study [Accessibility](./guidelines/accessibility.md)
2. Read [Writing Guidelines](./guidelines/writing.md)
3. Understand [Motion](./guidelines/motion.md)

---

## 🆘 Getting Help

### Documentation
- Browse [full documentation](./README.md)
- Search for specific topics
- Check component examples

### Issues & Bugs
- [Report a bug](https://github.com/lawnguru/design-system/issues)
- Search existing issues first
- Provide reproduction steps

### Questions
- [GitHub Discussions](https://github.com/lawnguru/design-system/discussions)
- Slack #design-system channel
- Email design-system@lawnguru.com

### Contributing
- Read [Contributing Guide](./guidelines/contributing.md)
- Submit improvements
- Help others

---

## 🚀 Next Steps

Now that you're set up:

1. **Explore the documentation** - Familiarize yourself with available components
2. **Build something** - Start with a simple component
3. **Share feedback** - Let us know what works (and what doesn't)
4. **Contribute** - Help make the design system better

---

## 📚 Additional Resources

### External Resources
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Accessibility](https://www.w3.org/WAI/)
- [CSS-Tricks](https://css-tricks.com/)

### Design Systems Inspiration
- [Material Design](https://material.io/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/)
- [Atlassian Design System](https://atlassian.design/)
- [Shopify Polaris](https://polaris.shopify.com/)

---

## 🎉 Welcome to the LawnGuru Design System!

We're excited to have you here. Happy building! 🌱

**Questions?** Don't hesitate to reach out to the design system team.
