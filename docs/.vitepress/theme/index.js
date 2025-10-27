// Custom theme for LawnGuru Design System
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './tokens.css'

// Import components
import LgButton from './components/LgButton.vue'
import LgInput from './components/LgInput.vue'
import LgInputGroup from './components/LgInputGroup.vue'
import LgBadge from './components/LgBadge.vue'
import LgAvatar from './components/LgAvatar.vue'
import LgAccordion from './components/LgAccordion.vue'
import LgAccordionItem from './components/LgAccordionItem.vue'
import LgCheckbox from './components/LgCheckbox.vue'
import LgSelect from './components/LgSelect.vue'
import LgAlert from './components/LgAlert.vue'
import LgAlertDialog from './components/LgAlertDialog.vue'
import LgCard from './components/LgCard.vue'
import LgCollapsible from './components/LgCollapsible.vue'
import LgCalendar from './components/LgCalendar.vue'
import LgCarousel from './components/LgCarousel.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Register components globally
    app.component('LgButton', LgButton)
    app.component('LgInput', LgInput)
    app.component('LgInputGroup', LgInputGroup)
    app.component('LgBadge', LgBadge)
    app.component('LgAvatar', LgAvatar)
    app.component('LgAccordion', LgAccordion)
    app.component('LgAccordionItem', LgAccordionItem)
    app.component('LgCheckbox', LgCheckbox)
    app.component('LgSelect', LgSelect)
    app.component('LgAlert', LgAlert)
    app.component('LgAlertDialog', LgAlertDialog)
    app.component('LgCard', LgCard)
    app.component('LgCollapsible', LgCollapsible)
    app.component('LgCalendar', LgCalendar)
    app.component('LgCarousel', LgCarousel)
  }
}
