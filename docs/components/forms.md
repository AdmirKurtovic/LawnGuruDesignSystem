# Form Components

> Form elements that enable user input and data collection.

---

## 📝 Components

### Text Input
Standard text input field for single-line text entry.

**Variants:**
- Default
- With label
- With helper text
- With error state
- With icon
- Disabled

**Sizes:**
- Small
- Medium (default)
- Large

### Textarea
Multi-line text input for longer content.

### Select Dropdown
Allows users to choose from a list of options.

### Checkbox
Binary choice component.

### Radio Button
Mutually exclusive options.

### Toggle Switch
On/off control for settings.

### File Upload
Component for file selection and upload.

### Date Picker
Calendar-based date selection.

### Search Input
Specialized input for search functionality.

---

## 📋 Usage Guidelines

### Form Layout
- Stack form fields vertically with consistent spacing
- Group related fields together
- Use clear, descriptive labels
- Provide helpful placeholder text
- Show validation inline

### Labels
- Always provide visible labels
- Position labels above inputs (recommended)
- Use sentence case
- Keep labels concise

### Helper Text
- Provide context before users interact
- Use for format requirements
- Keep brief and actionable

### Error Messages
- Show inline validation
- Be specific about the error
- Suggest how to fix it
- Use red semantic color

### Required Fields
- Mark with asterisk (*) or "Required" label
- Indicate at form level what's required
- Don't make everything required

---

## ♿ Accessibility

- Associate labels with inputs using `for`/`id`
- Provide error messages linked with `aria-describedby`
- Ensure sufficient color contrast
- Support keyboard navigation
- Use appropriate input types

---

## 🔄 Auto-generated Section

> **Note:** To add detailed specifications:
> 1. Export form components from Figma
> 2. Run `npm run docs:update-forms`
> 3. Full documentation will be generated

---

**Related:**
- [Buttons →](./buttons.md)
