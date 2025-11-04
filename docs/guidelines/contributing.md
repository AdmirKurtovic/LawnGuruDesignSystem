# Contributing to LawnGuru Design System

> Help us build and maintain a world-class design system.


## 🙌 Welcome Contributors!

We're thrilled you want to contribute to the LawnGuru Design System! Whether you're fixing a bug, adding a component, or improving documentation, your contributions make LawnGuru better for everyone.


## 🎯 Ways to Contribute

### 1. Report Issues
Found a bug or inconsistency?

- Check if it's already reported
- Open a GitHub issue
- Include screenshots and details
- Tag appropriately (bug, enhancement, documentation)

### 2. Suggest Improvements
Have an idea for a new component or improvement?

- Open a discussion first
- Explain the problem it solves
- Share examples or mockups
- Get feedback from the team

### 3. Fix Bugs
Help squash bugs!

- Look for "good first issue" labels
- Comment that you're working on it
- Submit a PR with the fix
- Include tests

### 4. Add Components
Want to add a new component?

- Discuss the need first
- Follow component guidelines
- Include documentation
- Add usage examples

### 5. Improve Documentation
Documentation is always welcome!

- Fix typos and errors
- Add missing examples
- Clarify confusing sections
- Add screenshots or diagrams


## 🔄 Contribution Workflow

### 1. Set Up Your Environment

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. Create a Branch

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/bug-description
```

**Branch naming:**
- `feature/` - New features or components
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test improvements

### 3. Make Your Changes

Follow our coding standards and guidelines:
- Match existing code style
- Add comments for complex logic
- Update documentation
- Add tests for new features

### 4. Test Your Changes

```bash
# Run tests
npm test

# Run linting
npm run lint

# Check accessibility
npm run test:a11y

# Test in multiple browsers
```

### 5. Commit Your Changes

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Format: type(scope): description

# Examples:
git commit -m "feat(button): add loading state"
git commit -m "fix(modal): resolve focus trap issue"
git commit -m "docs(colors): add usage examples"
git commit -m "refactor(forms): simplify validation logic"
```

**Commit types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting (no code change)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance

### 6. Push and Create Pull Request

```bash
# Push your branch
git push origin your-branch-name

# Open GitHub and create a Pull Request
```

**PR Guidelines:**
- Use descriptive title
- Reference related issues
- Describe what and why
- Include screenshots/videos for UI changes
- Request reviews from relevant team members


## 📋 Component Contribution Guidelines

### New Component Checklist

When adding a new component, ensure:

#### Design
- [ ] Figma component created
- [ ] Multiple variants/states designed
- [ ] Responsive behavior defined
- [ ] Accessibility considered
- [ ] Design review approved

#### Code
- [ ] Component implemented
- [ ] Props properly typed (TypeScript)
- [ ] Responsive behavior implemented
- [ ] All variants included
- [ ] Code follows style guide

#### Documentation
- [ ] Component documented
- [ ] Usage examples included
- [ ] Props documented
- [ ] Accessibility notes added
- [ ] Visual examples included

#### Testing
- [ ] Unit tests written
- [ ] Accessibility tests pass
- [ ] Visual regression tests pass
- [ ] Tested in multiple browsers
- [ ] Mobile tested

#### Integration
- [ ] Component exported
- [ ] Storybook story created
- [ ] Design tokens used
- [ ] No breaking changes
- [ ] Changelog updated


## 🎨 Design Contribution Guidelines

### Designing New Components

1. **Start with research**
   - Review existing patterns
   - Check other design systems
   - Understand user needs
   - Document use cases

2. **Design in Figma**
   - Use existing design tokens
   - Create all necessary variants
   - Consider all states (hover, focus, disabled, etc.)
   - Ensure responsive behavior

3. **Document specifications**
   - Spacing and sizing
   - Color usage
   - Typography
   - Interaction states

4. **Get feedback**
   - Share in design review
   - Get accessibility review
   - Test with developers
   - Iterate based on feedback

5. **Update Figma library**
   - Add to design library
   - Publish changes
   - Update documentation
   - Notify team


## 💻 Code Standards

### React Components

```tsx
import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps {
  /**
   * Button variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'destructive';

  /**
   * Button size
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Button content
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Button component for user actions
 *
 * @example
 * <Button variant="primary" size="md">
 *   Click me
 * </Button>
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'button',
          `button--${variant}`,
          `button--${size}`,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

### CSS/Styling

```css
/* Use CSS variables for values */
.button {
  padding: var(--button-padding-y) var(--button-padding-x);
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-semibold);
  transition: all var(--duration-fast) var(--ease-out);
}

/* Follow BEM naming if using CSS modules */
.button__icon {
  margin-right: var(--space-2);
}

.button--primary {
  background: var(--color-primary);
  color: var(--color-white);
}
```


## 📝 Documentation Standards

### Component Documentation Template

```markdown
# Component Name

> Brief description of the component


## Overview
Detailed description of what the component does and when to use it.

## Variants
List and describe all variants.

## Usage
Code examples showing how to use the component.

## Props/API
Document all props, parameters, or options.

## Accessibility
Accessibility requirements and considerations.

## Examples
Real-world usage examples.
```


## ✅ Review Process

### What Reviewers Look For

**Code Reviews:**
- Follows coding standards
- Properly tested
- No breaking changes
- Performance considerations
- Accessibility compliance

**Design Reviews:**
- Consistent with design system
- Responsive behavior
- Accessibility
- All states covered
- Design tokens used

### Getting Your PR Merged

1. **Pass all checks** - Tests, linting, accessibility
2. **Get approvals** - At least 1 code review, 1 design review
3. **Address feedback** - Respond to all comments
4. **Update documentation** - Keep docs in sync
5. **Squash commits** - Clean commit history (if requested)


## 🚫 What Not to Do

❌ Make breaking changes without discussion
❌ Add dependencies without approval
❌ Skip tests or documentation
❌ Ignore accessibility requirements
❌ Copy code without attribution
❌ Submit WIP without [WIP] tag
❌ Make multiple unrelated changes in one PR


## 💬 Communication

### Where to Ask Questions

- **GitHub Discussions** - General questions, ideas
- **GitHub Issues** - Bug reports, feature requests
- **Slack #design-system** - Quick questions, chat
- **Email** - Private concerns

### Response Times

- Issues acknowledged: Within 2 business days
- PR reviews: Within 3 business days
- Questions answered: Within 1 business day


## 🏆 Recognition

We appreciate all contributions! Contributors are:
- Listed in release notes
- Credited in documentation
- Invited to contributor meetings
- Eligible for swag (coming soon!)


## 📚 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Accessibility Guidelines](./accessibility.md)
- [Design Principles](./design-principles.md)


## 📞 Need Help?

Stuck or have questions?

- Check existing documentation
- Search GitHub issues
- Ask in discussions
- Reach out to maintainers

We're here to help! 🌱


**Thank you for contributing to LawnGuru!**
