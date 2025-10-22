# Design System Documentation Automation Guide

> Complete guide to automating LawnGuru design system documentation with Claude

---

## 🎯 Overview

This guide explains how to automatically generate and update design system documentation from your Figma design library using Claude Code.

**Benefits:**
- ⚡ Save hours of manual documentation
- ✅ Maintain accuracy between design and docs
- 🔄 Easy updates when designs change
- 📚 Comprehensive, consistent documentation

---

## 🚀 Quick Start

### Prerequisites

1. **Figma access** to LawnGuru Design Library
2. **Claude Code** installed (or access to claude.ai)
3. **This documentation repository** cloned locally

### Basic Workflow

```bash
# 1. Export screenshot from Figma
# 2. Run helper script
node docs/scripts/update-docs.js buttons ./screenshots/buttons.png

# 3. Follow the prompt with Claude Code
# 4. Review and commit
```

---

## 📸 Step-by-Step: Export from Figma

### 1. Open Your Design Library

Navigate to: [Figma Design Library](https://www.figma.com/design/3a9rDSr5fnmhcTaYxLgqkF/Design-library)

### 2. Select What to Document

Choose one of these pages:
- Design library (overview)
- Icons and graphics
- Tokens
- Color palette
- Layouts
- Styleguide

Or select specific components/frames to document.

### 3. Export as Screenshot

**Option A: Export entire page**
1. Click on the page name (not a frame)
2. Right-click → "Copy as PNG" or use export settings
3. Save to `screenshots/` folder with descriptive name

**Option B: Export specific components**
1. Select the frame/component
2. Right-click → "Copy as PNG"
3. Or use Export settings (2x recommended)
4. Save with clear naming (e.g., `buttons-variants.png`)

**Recommended export settings:**
- Format: PNG
- Scale: 2x
- Include: All variants and states visible

---

## 🤖 Step-by-Step: Generate Documentation with Claude

### Method 1: Using Claude Code (Recommended)

1. **Open this project in Claude Code**
   ```bash
   code .  # Or open in your IDE with Claude Code
   ```

2. **Run the helper script**
   ```bash
   node docs/scripts/update-docs.js buttons ./screenshots/buttons.png
   ```
   This generates the appropriate prompt for your component type.

3. **Share screenshot with Claude Code**
   - In Claude Code chat, share the screenshot
   - Copy the prompt from the helper script
   - Paste and send to Claude

4. **Claude generates documentation**
   - Claude analyzes the screenshot
   - Generates comprehensive markdown documentation
   - Follows the design system structure

5. **Review and save**
   - Review the generated documentation
   - Claude can write directly to the docs folder
   - Or copy and paste to the appropriate .md file

### Method 2: Using claude.ai

1. **Go to claude.ai**

2. **Start new conversation**
   - Upload your Figma screenshot
   - Use the prompt from the helper script

3. **Get documentation**
   - Claude generates the documentation
   - Copy the markdown output

4. **Save to docs**
   - Open the appropriate .md file
   - Replace the auto-generated section
   - Preserve existing structure

---

## 📋 Component Documentation Checklist

When documenting components, ensure you capture:

### Visual Information
- [ ] All variants (primary, secondary, destructive, etc.)
- [ ] All states (default, hover, active, focus, disabled, loading)
- [ ] All sizes (small, medium, large)
- [ ] Color values (if visible or in tokens)
- [ ] Spacing values (padding, margins, gaps)
- [ ] Typography specifications

### Usage Information
- [ ] When to use this component
- [ ] Best practices
- [ ] Common use cases
- [ ] Do's and Don'ts

### Technical Information
- [ ] React/TypeScript code examples
- [ ] Props/API documentation
- [ ] Accessibility requirements
- [ ] Keyboard interactions

### Examples
- [ ] Basic usage example
- [ ] Advanced usage examples
- [ ] Common patterns
- [ ] Real-world scenarios

---

## 🎨 Documenting Different Component Types

### Buttons

**What to capture:**
- Button variants (CTA vs Link)
- Color variants (primary, secondary, destructive)
- Size variants
- State variations
- Icon placement

**Screenshot tips:**
- Show all variants in a grid
- Include labels/annotations
- Show interaction states

### Colors

**What to capture:**
- Brand colors with hex values
- Semantic colors
- Neutral scale
- Color names and tokens
- Usage guidelines

**Screenshot tips:**
- Include color names
- Show hex values if visible
- Group by category

### Typography

**What to capture:**
- Font families
- Type scale (all heading levels + body sizes)
- Font weights
- Line heights
- Letter spacing

**Screenshot tips:**
- Show complete type scale
- Include measurements
- Show both desktop and mobile if different

### Icons

**What to capture:**
- Icon style
- Categories
- Size variants
- Common icons

**Screenshot tips:**
- Show organized grid
- Include labels
- Show different sizes

---

## 🔄 Batch Documentation Workflow

For documenting multiple components efficiently:

### 1. Planning Phase

Create a list of what needs documentation:
```
[ ] Buttons (CTA + Link)
[ ] Form inputs
[ ] Cards
[ ] Navigation
[ ] Color palette
[ ] Typography
[ ] Icons
[ ] Layouts
```

### 2. Export Phase

Export all screenshots in one session:
```
screenshots/
├── buttons-cta.png
├── buttons-link.png
├── forms-inputs.png
├── forms-selects.png
├── cards.png
├── colors-palette.png
├── typography-scale.png
└── icons-library.png
```

### 3. Documentation Phase

Process each screenshot:
```bash
# Process all at once
for file in screenshots/*.png; do
  component=$(basename "$file" .png)
  node docs/scripts/update-docs.js "$component" "$file"
done
```

Or process individually in Claude Code for better control.

### 4. Review Phase

- Check all generated docs
- Ensure consistency
- Fill in any gaps
- Add custom examples

---

## 🎯 Advanced: Custom Prompts

### For Complex Components

```markdown
Document this [component name] component from the Figma screenshot for the LawnGuru design system.

This component has the following special considerations:
- [Custom requirement 1]
- [Custom requirement 2]

Please include:
1. Detailed component overview
2. All visible variants, states, and sizes
3. Visual specifications (exact values for colors, spacing, typography)
4. Complex usage patterns specific to this component
5. Advanced code examples showing [specific functionality]
6. Detailed accessibility implementation
7. Edge cases and error handling

Format in Markdown following the LawnGuru design system documentation structure.
Include code examples in React with TypeScript.
```

### For Design Tokens

```markdown
Extract all design tokens from this Figma screenshot for the LawnGuru design system.

Create documentation for:
1. Token names and values
2. Category organization
3. Usage guidelines
4. Code examples in multiple formats:
   - CSS variables
   - JavaScript/TypeScript
   - Tailwind config
   - React Native

Include semantic token mappings and theming considerations.
```

---

## 🧪 Quality Assurance

### Before Committing Documentation

**Checklist:**
- [ ] All variants documented
- [ ] Visual specs are accurate
- [ ] Code examples are valid
- [ ] Links work correctly
- [ ] Markdown formatting is correct
- [ ] No placeholder text remains
- [ ] Accessibility requirements included
- [ ] Consistent with existing docs style

**Testing:**
- Preview markdown rendering
- Test code examples
- Check internal links
- Verify against Figma source

---

## 🚀 Continuous Updates

### When Designs Change

1. **Identify what changed**
   - New component added
   - Existing component updated
   - Color/token changes
   - Layout modifications

2. **Re-export screenshots**
   - Only what changed
   - Maintain naming convention

3. **Update documentation**
   - Use helper script
   - Process with Claude
   - Update only changed sections

4. **Version tracking**
   ```bash
   git commit -m "docs: update button component with new loading state"
   ```

### Scheduled Review

Recommend quarterly review:
- Check all documentation is current
- Update any outdated screenshots
- Refresh code examples
- Add new features

---

## 💡 Tips & Best Practices

### Screenshot Quality

✅ **Do:**
- Use 2x export for clarity
- Include component labels
- Show organized layouts
- Capture complete variants

❌ **Don't:**
- Use low-resolution exports
- Crop important context
- Mix unrelated components
- Skip variant states

### Documentation Quality

✅ **Do:**
- Be specific and detailed
- Include real-world examples
- Document edge cases
- Keep consistent tone

❌ **Don't:**
- Use vague descriptions
- Skip accessibility info
- Forget code examples
- Leave TODOs incomplete

### Workflow Efficiency

✅ **Do:**
- Batch similar components
- Use clear naming conventions
- Maintain organized screenshots folder
- Document as you design

❌ **Don't:**
- Document everything at once
- Use inconsistent naming
- Delay documentation
- Skip the review phase

---

## 🆘 Troubleshooting

### Claude doesn't capture all details

**Solution:** Provide more context in your prompt
```
In addition to the screenshot, please note:
- The primary color hex is #[value]
- The spacing uses an 8px base scale
- The font family is [name]
```

### Documentation structure doesn't match

**Solution:** Provide example structure
```
Please follow this structure:
1. Overview
2. Variants
3. Usage Guidelines
4. Code Examples
5. Accessibility
```

### Values are inaccurate

**Solution:** Verify with Figma inspect panel
- Use Figma's developer inspect
- Provide exact values in prompt
- Double-check after generation

---

## 📞 Support

Need help with documentation automation?

- **Questions:** Open GitHub Discussion
- **Bugs:** File GitHub Issue
- **Ideas:** Suggest in Discussions
- **Urgent:** Contact design system team

---

## 🔮 Future Roadmap

Planned automation improvements:

**Phase 1: Current** ✅
- Manual screenshot → Claude → Documentation
- Helper scripts for guidance
- Documentation templates

**Phase 2: Coming Soon**
- Figma API integration
- Automatic token extraction
- Scheduled documentation runs

**Phase 3: Future**
- Real-time Figma sync
- Auto-PR creation
- Visual diff detection
- Automated publishing

---

## 📚 Additional Resources

- [Figma API Documentation](https://www.figma.com/developers/api)
- [Claude API Documentation](https://docs.anthropic.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Design Systems Guide](https://www.designsystems.com/)

---

**Happy documenting! Let AI do the heavy lifting. 🤖🌱**
