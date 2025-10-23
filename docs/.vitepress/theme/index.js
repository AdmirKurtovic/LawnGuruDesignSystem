// Custom theme for LawnGuru Design System
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './tokens.css'

// Import components
import LgButton from './components/LgButton.vue'
import LgInput from './components/LgInput.vue'
import LgBadge from './components/LgBadge.vue'
import LgAvatar from './components/LgAvatar.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Register components globally
    app.component('LgButton', LgButton)
    app.component('LgInput', LgInput)
    app.component('LgBadge', LgBadge)
    app.component('LgAvatar', LgAvatar)
  }
}
