#!/bin/bash

# 🚀 LawnGuru Storybook + Figma Setup Script
# Run this script to set up Storybook with Figma integration

set -e

echo "🚀 Setting up Storybook + Figma for LawnGuru..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Install Storybook
echo "${BLUE}📦 Step 1: Installing Storybook...${NC}"
if [ ! -d ".storybook" ]; then
    npx storybook@latest init --yes
    echo "${GREEN}✅ Storybook installed${NC}"
else
    echo "${YELLOW}⚠️  Storybook already installed, skipping...${NC}"
fi
echo ""

# Step 2: Install Figma addons
echo "${BLUE}📦 Step 2: Installing Figma integration addons...${NC}"
npm install -D storybook-addon-designs @storybook/addon-designs
echo "${GREEN}✅ Figma addons installed${NC}"
echo ""

# Step 3: Install testing libraries
echo "${BLUE}📦 Step 3: Installing testing libraries...${NC}"
npm install -D @storybook/testing-library @storybook/addon-interactions
echo "${GREEN}✅ Testing libraries installed${NC}"
echo ""

# Step 4: Create .storybook config with Figma support
echo "${BLUE}⚙️  Step 4: Configuring Storybook...${NC}"

cat > .storybook/main.js << 'EOF'
/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-designs', // Figma integration
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
EOF

echo "${GREEN}✅ Storybook configured with Figma support${NC}"
echo ""

# Step 5: Update preview.js
echo "${BLUE}⚙️  Step 5: Configuring preview settings...${NC}"

cat > .storybook/preview.js << 'EOF'
import { setup } from '@storybook/vue3'

// Import your CSS
import '../docs/.vitepress/theme/custom.css'
import '../docs/.vitepress/theme/tokens.css'

// Register global components here if needed
setup((app) => {
  // app.component('YourComponent', YourComponent)
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
EOF

echo "${GREEN}✅ Preview configured${NC}"
echo ""

# Step 6: Add scripts to package.json
echo "${BLUE}📝 Step 6: Adding scripts to package.json...${NC}"

# Create a temporary package.json with the new scripts
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.scripts = pkg.scripts || {};
pkg.scripts['storybook'] = 'storybook dev -p 6006';
pkg.scripts['build-storybook'] = 'storybook build';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
"

echo "${GREEN}✅ Scripts added to package.json${NC}"
echo ""

# Step 7: Create example stories directory
echo "${BLUE}📁 Step 7: Creating stories directory...${NC}"
mkdir -p src/stories

echo "${GREEN}✅ Stories directory created${NC}"
echo ""

# Done!
echo ""
echo "${GREEN}✅ Setup complete!${NC}"
echo ""
echo "${BLUE}📚 Next Steps:${NC}"
echo ""
echo "1. ${YELLOW}Get your Figma link:${NC}"
echo "   - Open Figma"
echo "   - Select your Welcome Screen frame"
echo "   - Right-click → Copy link to selection"
echo "   - Paste into WelcomeScreen.stories.js"
echo ""
echo "2. ${YELLOW}Update the Figma URLs in:${NC}"
echo "   - WelcomeScreen.stories.js"
echo "   - OnboardingFlow.stories.js"
echo ""
echo "3. ${YELLOW}Start Storybook:${NC}"
echo "   ${GREEN}npm run storybook${NC}"
echo ""
echo "4. ${YELLOW}Open in browser:${NC}"
echo "   http://localhost:6006"
echo ""
echo "5. ${YELLOW}View the Figma designs:${NC}"
echo "   - Open any story"
echo "   - Click the 'Design' tab in the addon panel"
echo "   - Your Figma design will appear!"
echo ""
echo "${BLUE}📖 Documentation:${NC}"
echo "   See storybook-figma-setup.md for detailed guide"
echo ""
echo "${GREEN}Happy coding! 🚀${NC}"
