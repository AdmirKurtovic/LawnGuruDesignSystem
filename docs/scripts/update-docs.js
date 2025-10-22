#!/usr/bin/env node

/**
 * LawnGuru Design System Documentation Automation
 *
 * This script helps automate documentation generation from Figma exports.
 * It uses Claude API to process screenshots and update documentation.
 *
 * Usage:
 *   node update-docs.js <component-type> <image-path>
 *
 * Examples:
 *   node update-docs.js buttons ./screenshots/buttons.png
 *   node update-docs.js colors ./screenshots/color-palette.png
 *   node update-docs.js all ./screenshots/
 */

const fs = require('fs');
const path = require('path');

// Configuration
const DOCS_DIR = path.join(__dirname, '..');
const SCREENSHOTS_DIR = path.join(__dirname, '../../screenshots');

// Component type mapping to documentation files
const COMPONENT_DOCS = {
  buttons: 'components/buttons.md',
  forms: 'components/forms.md',
  cards: 'components/cards.md',
  navigation: 'components/navigation.md',
  feedback: 'components/feedback.md',
  modals: 'components/modals.md',
  'data-display': 'components/data-display.md',

  colors: 'foundations/colors.md',
  typography: 'foundations/typography.md',
  spacing: 'foundations/spacing.md',
  tokens: 'foundations/tokens.md',
  icons: 'foundations/icons.md',

  layouts: 'patterns/layouts.md',
  responsive: 'patterns/responsive.md',
  'form-patterns': 'patterns/forms.md',
  'navigation-patterns': 'patterns/navigation.md',
};

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log('Usage: node update-docs.js <component-type> <image-path>');
    console.log('\nAvailable component types:');
    Object.keys(COMPONENT_DOCS).forEach(type => {
      console.log(`  - ${type}`);
    });
    console.log('\nExample:');
    console.log('  node update-docs.js buttons ./screenshots/buttons.png');
    process.exit(1);
  }

  const [componentType, imagePath] = args;

  // Validate component type
  if (!COMPONENT_DOCS[componentType]) {
    console.error(`Error: Unknown component type "${componentType}"`);
    console.log('\nAvailable component types:');
    Object.keys(COMPONENT_DOCS).forEach(type => {
      console.log(`  - ${type}`);
    });
    process.exit(1);
  }

  // Validate image path
  if (!fs.existsSync(imagePath)) {
    console.error(`Error: Image not found at "${imagePath}"`);
    process.exit(1);
  }

  console.log(`\n🚀 Starting documentation update for: ${componentType}`);
  console.log(`📸 Processing image: ${imagePath}`);
  console.log(`📝 Will update: ${COMPONENT_DOCS[componentType]}\n`);

  // This is a template script - actual implementation would:
  // 1. Read the image file
  // 2. Call Claude API with the image and documentation prompt
  // 3. Update the documentation file with Claude's response
  // 4. Preserve existing content structure

  console.log('⚠️  MANUAL MODE');
  console.log('This script is currently a template for automation.');
  console.log('\nTo update documentation manually:');
  console.log('1. Open Claude Code or Claude.ai');
  console.log('2. Upload the screenshot');
  console.log('3. Use this prompt:\n');

  const prompt = getDocumentationPrompt(componentType);
  console.log(prompt);
  console.log('\n4. Copy the output to the documentation file');
  console.log(`   Location: ${path.join(DOCS_DIR, COMPONENT_DOCS[componentType])}`);

  console.log('\n✅ Done! See instructions above.\n');
}

/**
 * Get the appropriate documentation prompt for a component type
 */
function getDocumentationPrompt(componentType) {
  const basePrompt = `Document this ${componentType} component from the Figma screenshot.

Please provide:
1. Component overview and description
2. All variants visible in the screenshot
3. Different states (default, hover, active, focus, disabled)
4. Size options if visible
5. Visual specifications (colors, spacing, typography)
6. Usage guidelines (when to use, best practices)
7. Code examples (React/TypeScript)
8. Accessibility requirements

Format the documentation in Markdown following the existing structure in the LawnGuru design system documentation.`;

  const specificPrompts = {
    buttons: `${basePrompt}

Make sure to distinguish between CTA buttons and Link buttons, and document all color variants (primary/green, secondary/white, destructive/red).`,

    colors: `Document this color palette from the Figma screenshot.

Please provide:
1. Brand colors with hex values
2. Semantic colors (success, error, warning, info)
3. Neutral/gray scale
4. Usage guidelines for each color
5. Accessibility notes (contrast ratios)
6. CSS variable naming

Format as a complete color documentation following design system standards.`,

    typography: `Document this typography system from the Figma screenshot.

Please provide:
1. Font families used
2. Complete type scale (display, headings, body text)
3. Font sizes and line heights
4. Font weights
5. Usage guidelines
6. Responsive considerations

Format as typography documentation.`,

    icons: `Document this icon library from the Figma screenshot.

Please provide:
1. Icon style (outlined, filled, etc.)
2. Icon categories visible
3. Icon sizes
4. Usage guidelines
5. Accessibility requirements

Create an icon inventory with visual examples.`,
  };

  return specificPrompts[componentType] || basePrompt;
}

/**
 * Setup function - creates screenshots directory if it doesn't exist
 */
function setup() {
  if (!fs.existsSync(SCREENSHOTS_DIR)) {
    fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
    console.log(`✅ Created screenshots directory at: ${SCREENSHOTS_DIR}`);
  }
}

// Run setup
setup();

// Run main function
main().catch(console.error);
