# Storybook + Figma Integration Guide for LawnGuru

## 🎯 Overview

This guide shows you how to:
1. Set up Storybook for Vue 3
2. Create stories for Welcome Screen & Onboarding
3. Integrate Figma designs into Storybook
4. Sync design tokens between Figma and code

---

## 📦 Step 1: Install Storybook

### Install Storybook for Vue 3

```bash
# Navigate to your project
cd /Users/admirkurtovic/Desktop/Projects/LawnGuru/LawnGuruCode

# Install Storybook (automatic setup)
npx storybook@latest init

# Or manual installation for Vue 3 + Vite
npm install -D @storybook/vue3 @storybook/addon-essentials @storybook/addon-links @storybook/addon-interactions
```

### Install Figma Addons

```bash
# Figma Design addon - Shows Figma designs in Storybook
npm install -D storybook-addon-designs

# Figma Embed - Embeds Figma prototypes
npm install -D @storybook/addon-designs

# Design Tokens - Syncs design tokens
npm install -D storybook-design-token
```

---

## 🔧 Step 2: Configure Storybook

### `.storybook/main.js`

```javascript
/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../docs/**/*.stories.@(js|jsx|mjs|ts|tsx)', // Add docs stories
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-designs', // Figma integration
    'storybook-design-token',  // Design tokens
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
```

### `.storybook/preview.js`

```javascript
import { setup } from '@storybook/vue3'
import '../docs/.vitepress/theme/custom.css'
import '../docs/.vitepress/theme/tokens.css'

// Import your global components
import LgButton from '../docs/.vitepress/theme/components/LgButton.vue'
import LgCard from '../docs/.vitepress/theme/components/LgCard.vue'
import LgInput from '../docs/.vitepress/theme/components/LgInput.vue'
// ... import all other components

// Register components globally
setup((app) => {
  app.component('LgButton', LgButton)
  app.component('LgCard', LgCard)
  app.component('LgInput', LgInput)
  // ... register all components
})

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
        { name: 'lawn-guru', value: '#008934' },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '667px' },
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1440px', height: '900px' },
        },
      },
    },
  },
}

export default preview
```

---

## 📝 Step 3: Create Stories for Welcome Screen

### `src/stories/WelcomeScreen.stories.js`

```javascript
import WelcomeScreen from '../WelcomeScreen.vue'

export default {
  title: 'Screens/Authentication/Welcome',
  component: WelcomeScreen,
  parameters: {
    layout: 'fullscreen',
    // Figma integration
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YOUR_FILE_ID/LawnGuru?node-id=YOUR_NODE_ID',
    },
  },
  tags: ['autodocs'],
}

// Default state
export const Default = {
  render: () => ({
    components: { WelcomeScreen },
    template: '<WelcomeScreen />',
  }),
}

// Loading state
export const Loading = {
  render: () => ({
    components: { WelcomeScreen },
    setup() {
      return {
        // Mock loading state
      }
    },
    template: '<WelcomeScreen />',
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YOUR_FILE_ID/LawnGuru?node-id=LOADING_NODE_ID',
    },
  },
}

// With Error
export const WithError = {
  render: () => ({
    components: { WelcomeScreen },
    setup() {
      return {
        // Mock error state
      }
    },
    template: '<WelcomeScreen />',
  }),
}

// Mobile View
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
  },
}
```

---

## 📱 Step 4: Create Onboarding Flow Stories

### `src/stories/OnboardingFlow.stories.js`

```javascript
import OnboardingFlow from '../OnboardingFlow.vue'

export default {
  title: 'Screens/Onboarding/Flow',
  component: OnboardingFlow,
  parameters: {
    layout: 'fullscreen',
    design: [
      {
        name: 'Onboarding Flow',
        type: 'figma',
        url: 'https://www.figma.com/file/YOUR_FILE_ID/LawnGuru?node-id=ONBOARDING_FLOW',
      },
      {
        name: 'Prototype',
        type: 'figma',
        url: 'https://www.figma.com/proto/YOUR_FILE_ID/LawnGuru?node-id=PROTOTYPE_ID',
        allowFullscreen: true,
      },
    ],
  },
  tags: ['autodocs'],
}

// Step 1: Welcome
export const Step1Welcome = {
  render: () => ({
    components: { OnboardingFlow },
    setup() {
      return { currentStep: 1 }
    },
    template: '<OnboardingFlow :current-step="currentStep" />',
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YOUR_FILE_ID/LawnGuru?node-id=STEP1_NODE_ID',
    },
  },
}

// Step 2: Service Selection
export const Step2ServiceSelection = {
  render: () => ({
    components: { OnboardingFlow },
    setup() {
      return { currentStep: 2 }
    },
    template: '<OnboardingFlow :current-step="currentStep" />',
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/YOUR_FILE_ID/LawnGuru?node-id=STEP2_NODE_ID',
    },
  },
}

// Step 3: Location
export const Step3Location = {
  render: () => ({
    components: { OnboardingFlow },
    setup() {
      return { currentStep: 3 }
    },
    template: '<OnboardingFlow :current-step="currentStep" />',
  }),
}

// Complete Flow (Interactive)
export const CompleteFlow = {
  render: () => ({
    components: { OnboardingFlow },
    template: '<OnboardingFlow />',
  }),
  play: async ({ canvasElement }) => {
    // Add interaction tests
    const canvas = within(canvasElement)
    // ... add interactions
  },
}
```

---

## 🎨 Step 5: Get Figma URLs

### How to Get Figma File URL

1. **Open your Figma file**
2. **Select the frame/screen** you want to link
3. **Right-click** → **Copy link to selection**
4. **URL format:**
   ```
   https://www.figma.com/file/FILE_ID/FILE_NAME?node-id=NODE_ID
   ```

### Example URLs

```javascript
// Welcome Screen - Desktop
design: {
  type: 'figma',
  url: 'https://www.figma.com/file/abc123/LawnGuru-Mobile?node-id=123%3A456'
}

// Onboarding Flow - Prototype
design: {
  type: 'figma',
  url: 'https://www.figma.com/proto/abc123/LawnGuru-Mobile?node-id=789%3A012&scaling=min-zoom'
}
```

---

## 🔗 Step 6: Multiple Figma Designs per Story

### Show Design + Prototype Side-by-Side

```javascript
export const WelcomeScreenWithPrototype = {
  render: () => ({
    components: { WelcomeScreen },
    template: '<WelcomeScreen />',
  }),
  parameters: {
    design: [
      {
        name: 'Desktop Design',
        type: 'figma',
        url: 'https://www.figma.com/file/abc123/LawnGuru?node-id=123:456',
      },
      {
        name: 'Mobile Design',
        type: 'figma',
        url: 'https://www.figma.com/file/abc123/LawnGuru?node-id=123:789',
      },
      {
        name: 'Interactive Prototype',
        type: 'figma',
        url: 'https://www.figma.com/proto/abc123/LawnGuru?node-id=123:456',
        allowFullscreen: true,
      },
      {
        name: 'Component Specs',
        type: 'link',
        url: 'https://www.figma.com/file/abc123/LawnGuru?node-id=component-specs',
      },
    ],
  },
}
```

---

## 🎨 Step 7: Sync Design Tokens from Figma

### Install Figma Tokens Plugin

1. **In Figma:**
   - Install **"Figma Tokens"** plugin
   - Export tokens as JSON

2. **Create token file:**

```json
// tokens/figma-tokens.json
{
  "colors": {
    "primary": {
      "value": "#008934",
      "type": "color"
    },
    "primary-light": {
      "value": "#4ade80",
      "type": "color"
    }
  },
  "spacing": {
    "xs": { "value": "4px", "type": "spacing" },
    "sm": { "value": "8px", "type": "spacing" },
    "md": { "value": "16px", "type": "spacing" },
    "lg": { "value": "24px", "type": "spacing" },
    "xl": { "value": "32px", "type": "spacing" }
  },
  "typography": {
    "fontSize": {
      "sm": { "value": "14px", "type": "fontSizes" },
      "base": { "value": "16px", "type": "fontSizes" },
      "lg": { "value": "18px", "type": "fontSizes" },
      "xl": { "value": "20px", "type": "fontSizes" }
    },
    "fontWeight": {
      "regular": { "value": "400", "type": "fontWeights" },
      "medium": { "value": "500", "type": "fontWeights" },
      "semibold": { "value": "600", "type": "fontWeights" },
      "bold": { "value": "700", "type": "fontWeights" }
    }
  },
  "borderRadius": {
    "sm": { "value": "8px", "type": "borderRadius" },
    "md": { "value": "10px", "type": "borderRadius" },
    "lg": { "value": "12px", "type": "borderRadius" },
    "full": { "value": "9999px", "type": "borderRadius" }
  }
}
```

### Convert Figma Tokens to CSS

```javascript
// scripts/tokens-to-css.js
const fs = require('fs')
const tokens = require('../tokens/figma-tokens.json')

function tokensToCSS(tokens) {
  let css = ':root {\n'

  // Colors
  Object.entries(tokens.colors).forEach(([name, token]) => {
    css += `  --color-${name}: ${token.value};\n`
  })

  // Spacing
  Object.entries(tokens.spacing).forEach(([name, token]) => {
    css += `  --spacing-${name}: ${token.value};\n`
  })

  // Typography
  Object.entries(tokens.typography.fontSize).forEach(([name, token]) => {
    css += `  --font-size-${name}: ${token.value};\n`
  })

  Object.entries(tokens.typography.fontWeight).forEach(([name, token]) => {
    css += `  --font-weight-${name}: ${token.value};\n`
  })

  // Border Radius
  Object.entries(tokens.borderRadius).forEach(([name, token]) => {
    css += `  --radius-${name}: ${token.value};\n`
  })

  css += '}\n'
  return css
}

const css = tokensToCSS(tokens)
fs.writeFileSync('./docs/.vitepress/theme/figma-tokens.css', css)
console.log('✅ Design tokens exported to CSS!')
```

**Run the script:**
```bash
node scripts/tokens-to-css.js
```

---

## 📚 Step 8: Document Design Tokens in Storybook

### `src/stories/DesignTokens.stories.mdx`

```mdx
import { Meta, ColorPalette, ColorItem, Typeset } from '@storybook/blocks'
import tokens from '../../tokens/figma-tokens.json'

<Meta title="Foundation/Design Tokens" />

# Design Tokens

Design tokens synced from Figma.

## Colors

<ColorPalette>
  <ColorItem
    title="Primary"
    subtitle="Brand green"
    colors={{ Primary: tokens.colors.primary.value }}
  />
  <ColorItem
    title="Primary Light"
    subtitle="Lighter green"
    colors={{ 'Primary Light': tokens.colors['primary-light'].value }}
  />
</ColorPalette>

## Typography

<Typeset
  fontSizes={[
    tokens.typography.fontSize.sm.value,
    tokens.typography.fontSize.base.value,
    tokens.typography.fontSize.lg.value,
    tokens.typography.fontSize.xl.value,
  ]}
  fontWeight={tokens.typography.fontWeight.regular.value}
  sampleText="The quick brown fox jumps over the lazy dog"
/>

## Spacing

| Token | Value |
|-------|-------|
| XS | {tokens.spacing.xs.value} |
| SM | {tokens.spacing.sm.value} |
| MD | {tokens.spacing.md.value} |
| LG | {tokens.spacing.lg.value} |
| XL | {tokens.spacing.xl.value} |

## Border Radius

| Token | Value | Preview |
|-------|-------|---------|
| SM | {tokens.borderRadius.sm.value} | <div style={{width: '60px', height: '60px', background: '#008934', borderRadius: tokens.borderRadius.sm.value}}></div> |
| MD | {tokens.borderRadius.md.value} | <div style={{width: '60px', height: '60px', background: '#008934', borderRadius: tokens.borderRadius.md.value}}></div> |
| LG | {tokens.borderRadius.lg.value} | <div style={{width: '60px', height: '60px', background: '#008934', borderRadius: tokens.borderRadius.lg.value}}></div> |
| Full | {tokens.borderRadius.full.value} | <div style={{width: '60px', height: '60px', background: '#008934', borderRadius: tokens.borderRadius.full.value}}></div> |
```

---

## 🎬 Step 9: Add Interactions & Testing

### Install Testing Addons

```bash
npm install -D @storybook/testing-library @storybook/addon-interactions
```

### Interactive Onboarding Story

```javascript
import { userEvent, within, expect } from '@storybook/testing-library'

export const InteractiveOnboarding = {
  render: () => ({
    components: { OnboardingFlow },
    template: '<OnboardingFlow />',
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Step 1: Click "Get Started"
    const getStartedBtn = canvas.getByText('Get Started')
    await userEvent.click(getStartedBtn)

    // Step 2: Select service
    const lawmMowingOption = canvas.getByText('Lawn Mowing')
    await userEvent.click(lawmMowingOption)

    // Step 3: Click "Next"
    const nextBtn = canvas.getByText('Next')
    await userEvent.click(nextBtn)

    // Assert we're on step 2
    expect(canvas.getByText('Select Your Services')).toBeInTheDocument()

    // Step 4: Enter location
    const locationInput = canvas.getByPlaceholderText('Enter your address')
    await userEvent.type(locationInput, '123 Main St, Seattle, WA')

    // Step 5: Submit
    const submitBtn = canvas.getByText('Complete Setup')
    await userEvent.click(submitBtn)
  },
}
```

---

## 🚀 Step 10: Run Storybook

### Start Storybook

```bash
npm run storybook
```

**Storybook will open at:** http://localhost:6006

---

## 🎨 Step 11: Advanced Figma Integration

### Install Figma API Integration

```bash
npm install -D figma-api
```

### Fetch Figma Data Automatically

```javascript
// scripts/sync-figma.js
const Figma = require('figma-api')
const fs = require('fs')

const figma = new Figma.Api({
  personalAccessToken: process.env.FIGMA_TOKEN,
})

async function syncFigmaDesigns() {
  const fileKey = 'YOUR_FIGMA_FILE_KEY'

  try {
    // Get file data
    const file = await figma.getFile(fileKey)

    // Extract design tokens
    const colors = {}
    file.styles.forEach((style) => {
      if (style.styleType === 'FILL') {
        colors[style.name] = style.description
      }
    })

    // Save to JSON
    fs.writeFileSync(
      './tokens/figma-sync.json',
      JSON.stringify({ colors, lastSync: new Date() }, null, 2)
    )

    console.log('✅ Figma designs synced!')
  } catch (error) {
    console.error('❌ Figma sync failed:', error)
  }
}

syncFigmaDesigns()
```

### Add to package.json

```json
{
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "sync-figma": "node scripts/sync-figma.js",
    "tokens": "node scripts/tokens-to-css.js"
  }
}
```

---

## 📦 Step 12: Deploy Storybook

### Build Storybook

```bash
npm run build-storybook
```

### Deploy Options

**Option 1: Chromatic (Recommended)**
```bash
npm install -D chromatic
npx chromatic --project-token=YOUR_TOKEN
```

**Option 2: Netlify**
```bash
# Build storybook
npm run build-storybook

# Deploy to Netlify
netlify deploy --dir=storybook-static --prod
```

**Option 3: Vercel**
```bash
vercel storybook-static --prod
```

---

## 🔄 Complete Workflow

### Design → Development Flow

```
1. Designer creates screens in Figma
   ↓
2. Export design tokens from Figma
   ↓
3. Run: npm run sync-figma
   ↓
4. Run: npm run tokens
   ↓
5. Create Vue components using tokens
   ↓
6. Create Storybook stories with Figma links
   ↓
7. Deploy Storybook for design review
   ↓
8. Iterate based on feedback
   ↓
9. Merge to production
```

### Automated Workflow (CI/CD)

```yaml
# .github/workflows/storybook.yml
name: Storybook

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Install dependencies
        run: npm ci

      - name: Sync Figma tokens
        env:
          FIGMA_TOKEN: ${{ secrets.FIGMA_TOKEN }}
        run: npm run sync-figma

      - name: Build Storybook
        run: npm run build-storybook

      - name: Deploy to Chromatic
        uses: chromaui/action@v1
        with:
          projectToken: ${{ secrets.CHROMATIC_TOKEN }}
          buildScriptName: 'build-storybook'
```

---

## 🎯 Best Practices

### 1. **Organize Stories by User Journey**
```
stories/
├── authentication/
│   ├── WelcomeScreen.stories.js
│   ├── SignUp.stories.js
│   └── Login.stories.js
├── onboarding/
│   ├── Step1Welcome.stories.js
│   ├── Step2Services.stories.js
│   └── Step3Location.stories.js
└── dashboard/
    └── Home.stories.js
```

### 2. **Use Story Parameters**
```javascript
export default {
  parameters: {
    layout: 'fullscreen', // or 'centered', 'padded'
    backgrounds: { default: 'dark' },
    viewport: { defaultViewport: 'mobile' },
  },
}
```

### 3. **Document Props**
```javascript
export default {
  title: 'Components/Button',
  component: LgButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'ghost', 'link'],
      description: 'Button style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
}
```

### 4. **Link Related Stories**
```javascript
export const Default = {
  parameters: {
    docs: {
      description: {
        story: 'Default welcome screen. See also: [Login](/?path=/story/auth-login) and [Onboarding](/?path=/story/onboarding-flow)',
      },
    },
  },
}
```

---

## 🔧 Troubleshooting

### Issue: Figma Links Not Showing

**Solution:**
```bash
# Make sure addon is installed
npm install -D storybook-addon-designs

# Add to .storybook/main.js
addons: ['storybook-addon-designs']
```

### Issue: Design Tokens Not Updating

**Solution:**
```bash
# Re-export from Figma
# Re-run conversion script
npm run tokens

# Restart Storybook
npm run storybook
```

### Issue: Stories Not Rendering

**Solution:**
- Check component imports
- Verify CSS is loaded
- Check console for errors
- Ensure components are registered globally

---

## 📚 Resources

**Storybook:**
- Docs: https://storybook.js.org/docs/vue/get-started/introduction
- Vue 3: https://storybook.js.org/docs/vue/writing-stories/introduction

**Figma Integration:**
- storybook-addon-designs: https://github.com/storybookjs/addon-designs
- Figma API: https://www.figma.com/developers/api

**Design Tokens:**
- Figma Tokens: https://www.figmatokens.com/
- Style Dictionary: https://amzn.github.io/style-dictionary/

**Deployment:**
- Chromatic: https://www.chromatic.com/
- Netlify: https://www.netlify.com/
- Vercel: https://vercel.com/

---

This setup creates a seamless design-to-development workflow! 🚀
