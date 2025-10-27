---
layout: home

hero:
  name: LawnGuru
  text: Design System
  tagline: Build consistent, accessible, and beautiful lawn care experiences
  image:
    src: /hero-image.svg
    alt: LawnGuru Design System
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
    - theme: alt
      text: View Components
      link: /components/buttons
    - theme: alt
      text: Automation Guide
      link: /AUTOMATION_GUIDE

features:
  - icon: 🎨
    title: Comprehensive Foundations
    details: Complete design tokens, color palettes, typography scales, and spacing systems that form the building blocks of your interface.
    link: /foundations/colors
    linkText: Explore Foundations

  - icon: 🧩
    title: Production-Ready Components
    details: Fully documented, accessible components with code examples for React, TypeScript, and multiple frameworks.
    link: /components/buttons
    linkText: Browse Components

  - icon: 📐
    title: Proven Patterns
    details: Battle-tested UI patterns and layouts for responsive design, forms, navigation, and common user flows.
    link: /patterns/layouts
    linkText: View Patterns

  - icon: ♿
    title: Accessibility First
    details: WCAG 2.1 Level AA compliant with comprehensive accessibility guidelines and implementation notes.
    link: /guidelines/accessibility
    linkText: Accessibility Guide

  - icon: 📝
    title: Clear Guidelines
    details: Design principles, writing style, motion guidelines, and contribution workflows to maintain consistency.
    link: /guidelines/design-principles
    linkText: Read Guidelines

  - icon: 🤖
    title: AI-Powered Documentation
    details: Automated documentation generation from Figma using Claude AI. Keep your docs in sync with design changes.
    link: /AUTOMATION_GUIDE
    linkText: Learn Automation
---

## 🚀 Quick Start

Get up and running in minutes:

:::code-group

```bash [npm]
npm install @lawnguru/ui
```

```bash [yarn]
yarn add @lawnguru/ui
```

```bash [pnpm]
pnpm add @lawnguru/ui
```

:::

Then import and use components:

```tsx
import { Button, Input, Card } from '@lawnguru/ui';

function App() {
  return (
    <Card>
      <Input placeholder="Enter your email" />
      <Button variant="primary">Book Service</Button>
    </Card>
  );
}
```

## 🎯 What's Included

The LawnGuru Design System provides everything you need to build consistent user experiences:

- **Design Tokens** - Colors, typography, spacing, and more
- **Components** - Buttons, forms, cards, navigation, and more
- **Patterns** - Common UI patterns and page layouts
- **Guidelines** - Accessibility, writing, motion, and design principles
- **Figma Library** - Complete design assets
- **Code Examples** - React, TypeScript, and framework-agnostic examples

## 📚 For Designers

Access the complete Figma design library with all components, tokens, and patterns:

- [**Figma Design Library**](https://www.figma.com/design/3a9rDSr5fnmhcTaYxLgqkF/Design-library) - Browse and use design components
- [**Color Palette**](/foundations/colors) - Brand and semantic colors
- [**Typography System**](/foundations/typography) - Type scale and text styles
- [**Design Principles**](/guidelines/design-principles) - Core design philosophy

## 💻 For Developers

Comprehensive documentation with code examples and implementation guides:

- [**Getting Started**](/getting-started) - Installation and setup
- [**Component Library**](/components/buttons) - All components with props and examples
- [**Design Tokens**](/foundations/tokens) - Use tokens in your code
- [**Accessibility Guide**](/guidelines/accessibility) - Build inclusive experiences

## 🤝 Contributing

We welcome contributions! Help us make the design system better:

- [**Contributing Guide**](/guidelines/contributing) - How to contribute
- [**Automation Guide**](/AUTOMATION_GUIDE) - Generate docs from Figma
- [**GitHub Repository**](https://github.com/lawnguru/design-system) - Source code

---

<div style="text-align: center; margin-top: 4rem; padding: 2rem; background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-radius: 12px;">
  <h3 style="margin-top: 0;">Ready to build something amazing?</h3>
  <p>Join hundreds of designers and developers using the LawnGuru Design System.</p>
  <a href="/getting-started" style="display: inline-block; margin-top: 1rem; padding: 0.75rem 2rem; background: #10b981; color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">Get Started →</a>
</div>
