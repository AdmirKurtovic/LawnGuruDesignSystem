# Documentation Automation Scripts

This directory contains scripts to help automate the LawnGuru Design System documentation updates from Figma.


## 📜 Available Scripts

### `update-docs.js`

Helper script that guides you through updating documentation from Figma screenshots.

**Usage:**
```bash
node update-docs.js <component-type> <image-path>
```

**Examples:**
```bash
# Update button documentation
node update-docs.js buttons ../screenshots/buttons.png

# Update color palette
node update-docs.js colors ../screenshots/colors.png

# Update typography
node update-docs.js typography ../screenshots/typography.png
```

**Available component types:**
- `buttons` - Button components
- `forms` - Form components
- `cards` - Card components
- `navigation` - Navigation components
- `feedback` - Feedback components
- `modals` - Modal/dialog components
- `data-display` - Data display components
- `colors` - Color palette
- `typography` - Typography system
- `spacing` - Spacing scale
- `tokens` - Design tokens
- `icons` - Icon library
- `layouts` - Layout patterns
- `responsive` - Responsive patterns
- `form-patterns` - Form patterns
- `navigation-patterns` - Navigation patterns


## 🔄 Documentation Update Workflow

### Method 1: Manual with Claude Code (Recommended)

1. **Export from Figma**
   - Open your Figma design library
   - Select the component/page you want to document
   - Export as PNG (2x resolution recommended)
   - Save to `screenshots/` folder

2. **Run the helper script**
   ```bash
   node update-docs.js buttons ./screenshots/buttons.png
   ```
   This will show you the appropriate prompt to use.

3. **Use Claude Code**
   - Open this project in Claude Code
   - Share the screenshot
   - Use the prompt provided by the script
   - Claude will generate updated documentation

4. **Review and commit**
   - Review the generated documentation
   - Make any necessary edits
   - Commit the changes to git

### Method 2: Direct with Claude

1. **Prepare screenshots**
   - Export components from Figma
   - Save to `screenshots/` folder

2. **Use Claude (claude.ai or Claude Code)**
   - Upload screenshot
   - Use prompt template:
   ```
   Document this [component] from the Figma screenshot for the LawnGuru design system.

   Include:
   - Component overview
   - All variants and states
   - Visual specifications
   - Usage guidelines
   - Code examples
   - Accessibility notes

   Format in Markdown following design system documentation standards.
   ```

3. **Copy to documentation**
   - Copy Claude's output
   - Paste into appropriate .md file
   - Preserve existing structure


## 📁 Folder Structure

```
docs/
├── scripts/
│   ├── README.md (this file)
│   └── update-docs.js
├── screenshots/ (create this)
│   ├── buttons.png
│   ├── colors.png
│   ├── typography.png
│   └── ...
└── [documentation files]
```


## 🎯 Best Practices

### Screenshot Guidelines

1. **High quality**
   - Export at 2x resolution
   - Use PNG format
   - Clear, readable text

2. **Complete coverage**
   - Show all variants
   - Include all states
   - Show size variations
   - Include annotations if helpful

3. **Organized naming**
   ```
   buttons-cta.png
   buttons-link.png
   colors-palette.png
   typography-scale.png
   ```

### Documentation Updates

1. **Preserve structure**
   - Keep existing section headings
   - Maintain markdown formatting
   - Update auto-generated sections only

2. **Be specific**
   - Include exact color values
   - Document all spacing values
   - Provide complete size specs

3. **Include examples**
   - Add code examples
   - Show usage patterns
   - Provide do's and don'ts


## 🚀 Future Enhancements

Planned improvements for automation:

- [ ] Direct Figma API integration
- [ ] Automatic token extraction
- [ ] Batch processing
- [ ] GitHub Actions integration
- [ ] Auto-PR creation
- [ ] Visual regression testing


## 🆘 Troubleshooting

### Script not running
```bash
# Make script executable
chmod +x update-docs.js

# Or run with node explicitly
node update-docs.js buttons ./screenshots/buttons.png
```

### Screenshots not found
- Check the path is correct
- Ensure screenshots directory exists
- Use absolute or relative paths correctly

### Documentation not updating
- Check file permissions
- Ensure you're in the correct directory
- Verify the component type name


## 📞 Support

Questions or issues?
- Open a GitHub issue
- Check the main [Contributing Guide](../guidelines/contributing.md)
- Contact the design system team


**Happy documenting! 🌱**
