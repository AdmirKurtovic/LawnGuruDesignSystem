# Form Patterns

> Complete form examples and best practices for user input.

---

## 📝 Common Form Patterns

### Single Page Form
All fields on one page, suitable for short forms.

**Use when:**
- Form has < 10 fields
- All fields are related
- Quick completion is important

### Multi-Step Form
Complex forms broken into multiple steps.

**Use when:**
- Form has many fields (10+)
- Logical groupings exist
- User needs to see progress
- Each step has distinct purpose

**Example Structure:**
```
Step 1: Basic Information
Step 2: Service Details
Step 3: Schedule & Preferences
Step 4: Review & Confirm
```

### Inline Editing
Edit content directly in place without a traditional form.

**Use when:**
- Editing single values
- User needs quick updates
- Context is important

---

## 🎯 Form Validation

### Real-time Validation
Validate as the user types or on blur.

**Best for:**
- Username availability
- Password strength
- Email format
- Required fields

### On Submit Validation
Validate when form is submitted.

**Best for:**
- Complex validation rules
- Server-side checks
- Complete form validation

### Validation Message Patterns

#### Error Messages
```
❌ Email is required
❌ Password must be at least 8 characters
❌ This username is already taken
```

#### Success Messages
```
✓ Email is available
✓ Password strength: Strong
```

#### Helper Text
```
ℹ️ Use at least 8 characters, including letters and numbers
ℹ️ We'll send a confirmation to this email
```

---

## 📋 Field Patterns

### Required vs Optional
- Mark required fields with asterisk (*)
- Or mark optional fields with "(optional)"
- Be consistent throughout

### Input Masking
Format input as user types:
- Phone: (555) 123-4567
- Date: MM/DD/YYYY
- Credit Card: 1234 5678 9012 3456

### Auto-complete & Suggestions
- Use browser autocomplete attributes
- Provide suggestions for common inputs
- Allow selection from dropdown

### Conditional Fields
Show/hide fields based on user input:
```
☑️ Schedule recurring service
  └─→ [Frequency dropdown appears]
      └─→ [Date selector appears]
```

---

## 🎨 Form Layout Patterns

### Vertical Form (Recommended)
```
[Label]
[Input field_________________]
[Helper text]

[Label]
[Input field_________________]
[Helper text]

[Submit Button]
```

### Horizontal Form
```
[Label]  [Input field________]  [Helper text]
[Label]  [Input field________]  [Helper text]

[Submit Button]
```

### Grid Form
```
[Label]              [Label]
[Input field____]    [Input field____]

[Label]              [Label]
[Input field____]    [Input field____]
```

---

## 📱 Mobile Form Patterns

### Mobile Considerations
- Use appropriate input types (tel, email, number)
- Large touch targets (44x44px minimum)
- Reduce typing with selects and pickers
- Use native mobile keyboards
- Sticky action buttons at bottom

### Input Types
```html
<input type="email" />     <!-- Email keyboard -->
<input type="tel" />       <!-- Phone keyboard -->
<input type="number" />    <!-- Numeric keyboard -->
<input type="date" />      <!-- Date picker -->
<input type="url" />       <!-- URL keyboard -->
```

---

## ♿ Accessibility

### Form Accessibility Checklist
- [ ] Labels associated with inputs
- [ ] Error messages linked to fields
- [ ] Required fields indicated
- [ ] Keyboard navigable
- [ ] Focus indicators visible
- [ ] Submit button clearly labeled
- [ ] Error summary at top of form

### Proper Markup
```html
<form>
  <div class="form-field">
    <label for="email">
      Email Address *
    </label>
    <input
      type="email"
      id="email"
      name="email"
      required
      aria-required="true"
      aria-describedby="email-helper email-error"
    />
    <p id="email-helper" class="helper-text">
      We'll never share your email
    </p>
    <p id="email-error" class="error-text" role="alert">
      <!-- Error message when invalid -->
    </p>
  </div>

  <button type="submit">Submit</button>
</form>
```

---

## 📊 Common Form Examples

### Contact Form
```
[Name]
[Email]
[Phone]
[Message (textarea)]
[Submit]
```

### Service Booking Form
```
Step 1: Service Selection
[Service Type dropdown]
[Property Size]
[Add-ons checkboxes]

Step 2: Schedule
[Date Picker]
[Time Slot]
[Frequency]

Step 3: Contact Info
[Name]
[Email]
[Phone]
[Address]

Step 4: Review & Payment
[Summary]
[Payment Info]
[Submit]
```

### Login Form
```
[Email]
[Password]
[☑️ Remember me]  [Forgot password?]
[Login Button]
```

### Signup Form
```
[Full Name]
[Email]
[Password]
[Confirm Password]
[☑️ I agree to Terms]
[Sign Up Button]

Already have an account? [Login]
```

---

## 🔄 Auto-generated Section

> **Note:** To add form pattern screenshots:
> 1. Export form examples from Figma
> 2. Run `npm run docs:update-form-patterns`
> 3. Visual examples will be added

---

**Related:**
- [Form Components →](../components/forms.md)
- [Buttons →](../components/buttons.md)
