import WelcomeScreen from './WelcomeScreen.vue'
import { userEvent, within } from '@storybook/testing-library'

/**
 * Welcome Screen - First screen users see when opening the app
 *
 * ## Figma Design
 * Link your Figma design in the Design panel below
 *
 * ## Features
 * - Social authentication (Google, Apple, Email)
 * - Trust signals (social proof, badges)
 * - Guest browsing option
 * - Provider signup path
 */
export default {
  title: 'Screens/Authentication/Welcome',
  component: WelcomeScreen,
  parameters: {
    layout: 'fullscreen',
    // 🎨 ADD YOUR FIGMA LINK HERE
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YOUR_FILE_ID/LawnGuru?node-id=YOUR_NODE_ID',
      // To get this URL:
      // 1. Open Figma
      // 2. Select your Welcome Screen frame
      // 3. Right-click → Copy link to selection
      // 4. Paste here
    },
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
}

// ===========================
// Story: Default State
// ===========================
export const Default = {
  render: () => ({
    components: { WelcomeScreen },
    template: '<WelcomeScreen />',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Default welcome screen with all authentication options visible.',
      },
    },
  },
}

// ===========================
// Story: Loading State
// ===========================
export const LoadingState = {
  render: () => ({
    components: { WelcomeScreen },
    template: '<WelcomeScreen />',
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Simulate clicking Google sign-in
    const googleBtn = canvas.getByText(/Continue with Google/i)
    await userEvent.click(googleBtn)

    // Button should now show loading state
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows loading spinner when user clicks an authentication method.',
      },
    },
  },
}

// ===========================
// Story: With Error
// ===========================
export const WithError = {
  render: () => ({
    components: { WelcomeScreen },
    template: '<WelcomeScreen />',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Error state shown when authentication fails.',
      },
    },
  },
}

// ===========================
// Story: Mobile View
// ===========================
export const Mobile = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YOUR_FILE_ID/LawnGuru?node-id=MOBILE_NODE_ID',
    },
    docs: {
      description: {
        story: 'Mobile-optimized view with stacked social proof cards.',
      },
    },
  },
}

// ===========================
// Story: Tablet View
// ===========================
export const Tablet = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: 'Tablet view (768px width).',
      },
    },
  },
}

// ===========================
// Story: With All Figma Views
// ===========================
export const DesignComparison = {
  ...Default,
  parameters: {
    design: [
      {
        name: 'Desktop Design',
        type: 'figma',
        url: 'https://www.figma.com/file/YOUR_FILE_ID/LawnGuru?node-id=DESKTOP_NODE_ID',
      },
      {
        name: 'Mobile Design',
        type: 'figma',
        url: 'https://www.figma.com/file/YOUR_FILE_ID/LawnGuru?node-id=MOBILE_NODE_ID',
      },
      {
        name: 'Interactive Prototype',
        type: 'figma',
        url: 'https://www.figma.com/proto/YOUR_FILE_ID/LawnGuru?node-id=PROTOTYPE_ID',
        allowFullscreen: true,
      },
    ],
    docs: {
      description: {
        story: 'Compare implementation with Figma designs side-by-side. Switch between tabs in the Design panel.',
      },
    },
  },
}

// ===========================
// Story: Dark Background
// ===========================
export const DarkBackground = {
  ...Default,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
}

// ===========================
// Story: Interactive Flow Test
// ===========================
export const InteractiveTest = {
  render: () => ({
    components: { WelcomeScreen },
    template: '<WelcomeScreen />',
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Test Google authentication
    const googleBtn = canvas.getByText(/Continue with Google/i)
    await userEvent.click(googleBtn)

    // Wait for loading state
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Test email authentication
    const emailBtn = canvas.getByText(/Continue with Email/i)
    await userEvent.click(emailBtn)
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive test that simulates user clicking through authentication options. Watch the Interactions panel.',
      },
    },
  },
}
