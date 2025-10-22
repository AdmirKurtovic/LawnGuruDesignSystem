# LawnGuru Design System Website

A comprehensive website showcasing the LawnGuru Design System documentation, components, and guidelines.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Components**: Live examples with code snippets
- **Comprehensive Documentation**: Complete coverage of design tokens, components, and patterns
- **Accessibility First**: WCAG AA compliant with proper focus states and keyboard navigation
- **Modern UI**: Clean, professional design with smooth animations
- **Search Functionality**: Easy navigation and content discovery
- **Code Examples**: Syntax-highlighted code blocks with copy functionality

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required - it's a static website!

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The website is ready to use.

### Local Development

If you want to make changes:

1. Edit the HTML, CSS, or JavaScript files
2. Refresh your browser to see changes
3. Use browser developer tools for debugging

## 📁 Project Structure

```
LawnGuruCode/
├── index.html              # Homepage
├── styles.css              # Main stylesheet with design tokens
├── script.js               # Interactive functionality
├── pages/                  # Documentation pages
│   ├── colors.html         # Color palette documentation
│   ├── buttons.html        # Button components
│   ├── getting-started.html # Getting started guide
│   └── ...                 # Other documentation pages
├── docs/                   # Original markdown documentation
├── Tokens/                 # Design token JSON files
└── README.md               # This file
```

## 🎨 Design System Overview

### Foundations
- **Colors**: Primary green palette, semantic colors, neutral grays
- **Typography**: Inter font family with consistent sizing and weights
- **Spacing**: 8px base unit with consistent spacing scale
- **Tokens**: CSS custom properties for maintainable theming

### Components
- **Buttons**: CTA buttons, link buttons, various sizes and states
- **Forms**: Input fields, selects, form controls
- **Cards**: Content containers and layouts
- **Navigation**: Headers, menus, navigation patterns
- **Feedback**: Alerts, toasts, notifications
- **Data Display**: Tables, lists, data visualization
- **Modals**: Dialogs and overlays

### Patterns
- **Page Layouts**: Standard page templates
- **Responsive Patterns**: Mobile-first responsive guidelines
- **Form Patterns**: Complete form examples
- **Navigation Patterns**: App navigation structures

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with custom properties (CSS variables)
- **JavaScript**: Vanilla JS for interactivity
- **Prism.js**: Syntax highlighting for code blocks
- **Google Fonts**: Inter font family
- **CSS Grid & Flexbox**: Modern layout techniques

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- **WCAG AA Compliance**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Indicators**: Clear focus states for all interactive elements
- **Color Contrast**: Sufficient contrast ratios for all text and UI elements
- **Touch Targets**: Minimum 44px touch targets for mobile

## 🎯 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📖 Usage

### For Designers
1. Browse the color palette and typography sections
2. Use the component examples as reference
3. Follow the usage guidelines and patterns
4. Access the Figma design library

### For Developers
1. Copy code examples from component pages
2. Use CSS custom properties for consistent styling
3. Follow accessibility guidelines
4. Implement responsive patterns

### For Product Managers
1. Review design principles and guidelines
2. Understand component capabilities
3. Reference best practices for user experience
4. Use patterns for feature planning

## 🔧 Customization

### Colors
Edit the CSS custom properties in `styles.css`:

```css
:root {
  --color-primary-500: #22c55e; /* Your brand color */
  --color-gray-900: #111827;     /* Your text color */
  /* ... other colors */
}
```

### Typography
Update font families and sizes:

```css
:root {
  --font-family-primary: 'Your Font', sans-serif;
  --font-size-16: 16px;
  /* ... other typography tokens */
}
```

### Spacing
Modify the spacing scale:

```css
:root {
  --spacing-8: 8px;
  --spacing-16: 16px;
  /* ... other spacing values */
}
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different browsers and devices
5. Submit a pull request

### Guidelines
- Follow the existing code style
- Ensure accessibility compliance
- Test responsive behavior
- Update documentation as needed

## 🐛 Known Issues

- None currently reported

## 📄 License

Proprietary - LawnGuru © 2025

## 🤝 Support

- **Questions?** Open a GitHub discussion
- **Found a bug?** File an issue
- **Need help?** Contact the design system team

## 🎉 Acknowledgments

Built with 🌱 by the LawnGuru team

---

**Last Updated:** 2025-10-22
**Version:** 1.0.0
**Status:** 🟢 Active Development
**Deployment:** ✅ Build Fixed