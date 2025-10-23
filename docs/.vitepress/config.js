import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LawnGuru Design System',
  description: 'A comprehensive design system for building consistent, accessible, and beautiful lawn care experiences.',

  // Theme configuration
  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Foundations', link: '/foundations/colors' },
      { text: 'Components', link: '/components/buttons' },
      { text: 'Patterns', link: '/patterns/layouts' },
      { text: 'Guidelines', link: '/guidelines/design-principles' },
    ],

    sidebar: {
      '/foundations/': [
        {
          text: 'Foundations',
          items: [
            { text: 'Colors', link: '/foundations/colors' },
            { text: 'Typography', link: '/foundations/typography' },
            { text: 'Spacing', link: '/foundations/spacing' },
            { text: 'Effects & Borders', link: '/foundations/effects-and-borders' },
            { text: 'Tokens', link: '/foundations/tokens' },
            { text: 'Icons', link: '/foundations/icons' },
          ]
        }
      ],
      '/components/': [
        {
          text: 'Overview',
          items: [
            { text: '🎮 Interactive Showcase', link: '/components/showcase' },
          ]
        },
        {
          text: 'Components',
          items: [
            { text: 'Buttons', link: '/components/buttons' },
            { text: 'Forms', link: '/components/forms' },
            { text: 'Cards', link: '/components/cards' },
            { text: 'Navigation', link: '/components/navigation' },
            { text: 'Feedback', link: '/components/feedback' },
            { text: 'Data Display', link: '/components/data-display' },
            { text: 'Menus', link: '/components/menus' },
            { text: 'Modals', link: '/components/modals' },
          ]
        }
      ],
      '/patterns/': [
        {
          text: 'Patterns',
          items: [
            { text: 'Layouts', link: '/patterns/layouts' },
            { text: 'Responsive', link: '/patterns/responsive' },
            { text: 'Forms', link: '/patterns/forms' },
            { text: 'Navigation', link: '/patterns/navigation' },
          ]
        }
      ],
      '/guidelines/': [
        {
          text: 'Guidelines',
          items: [
            { text: 'Design Principles', link: '/guidelines/design-principles' },
            { text: 'Accessibility', link: '/guidelines/accessibility' },
            { text: 'Writing', link: '/guidelines/writing' },
            { text: 'Motion', link: '/guidelines/motion' },
            { text: 'Contributing', link: '/guidelines/contributing' },
          ]
        }
      ],
    },

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
