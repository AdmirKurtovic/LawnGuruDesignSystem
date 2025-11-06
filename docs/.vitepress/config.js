import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LawnGuru',
  description: 'A comprehensive design system for building consistent, accessible, and beautiful lawn care experiences.',

  // Disable dark mode
  appearance: false, // true = enable dark mode toggle, 'dark' = always dark, false = disable

  // Theme configuration
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'LawnGuru',

    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Brand',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/guidelines/design-principles' },
          {
            text: 'Messaging',
            collapsed: true,
            items: [
              { text: 'Brand voice', link: '/guidelines/writing' },
            ]
          },
          { text: 'Resources', link: '/guidelines/contributing' },
        ]
      },
      {
        text: 'Product',
        collapsed: false,
        items: [
          { text: 'Get started', link: '/getting-started' },
          {
            text: 'Foundations',
            collapsed: true,
            items: [
              { text: 'Colors', link: '/foundations/colors' },
              { text: 'Typography', link: '/foundations/typography' },
              { text: 'Spacing', link: '/foundations/spacing' },
              { text: 'Effects & Borders', link: '/foundations/effects-and-borders' },
              { text: 'Tokens', link: '/foundations/tokens' },
              { text: 'Icons', link: '/foundations/icons' },
            ]
          },
          {
            text: 'Components',
            collapsed: true,
            items: [
              { text: 'Interactive Showcase', link: '/components/showcase' },
              { text: 'Buttons', link: '/components/buttons' },
              { text: 'Forms', link: '/components/forms' },
              { text: 'Cards', link: '/components/cards' },
              { text: 'Navigation', link: '/components/navigation' },
              { text: 'Feedback', link: '/components/feedback' },
              { text: 'Data Display', link: '/components/data-display' },
              { text: 'Menus', link: '/components/menus' },
              { text: 'Modals', link: '/components/modals' },
            ]
          },
          {
            text: 'Patterns',
            collapsed: true,
            items: [
              { text: 'Layouts', link: '/patterns/layouts' },
              { text: 'Responsive', link: '/patterns/responsive' },
              { text: 'Forms', link: '/patterns/forms' },
              { text: 'Navigation', link: '/patterns/navigation' },
            ]
          },
          { text: 'Accessibility', link: '/guidelines/accessibility' },
          { text: 'Motion', link: '/guidelines/motion' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lawnguru/design-system' }
    ],

    footer: {
      message: 'Built with 🌱 by the LawnGuru team',
      copyright: 'Copyright © 2025 LawnGuru'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/lawnguru/design-system/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  },

  // Head tags
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#10b981' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'LawnGuru Design System' }],
    ['meta', { name: 'og:description', content: 'A comprehensive design system for building consistent, accessible, and beautiful lawn care experiences.' }],
  ],

  // Markdown configuration
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  }
})
