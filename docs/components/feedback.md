# Feedback Components

> Components that provide feedback and communicate system status.

---

## 💬 Feedback Types

### Alerts
Persistent messages that communicate important information.

**Variants:**
- Info
- Success
- Warning
- Error

### Toast / Snackbar
Temporary messages that appear and disappear automatically.

### Loading Indicators
Show that a process is in progress.

**Types:**
- Spinner
- Progress bar
- Skeleton screens

### Empty States
Communicate when no data or content is available.

### Error Pages
Full-page error states (404, 500, etc).

---

## 📋 Usage Guidelines

- Use appropriate semantic colors
- Keep messages concise and actionable
- Provide clear next steps
- Auto-dismiss toast messages (except errors)
- Show loading states for operations > 300ms

---

## 🔄 Auto-generated Section

> **Note:** To add detailed specifications:
> 1. Export feedback components from Figma
> 2. Run `npm run docs:update-feedback`
> 3. Full documentation will be generated
