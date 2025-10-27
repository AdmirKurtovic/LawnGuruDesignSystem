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
import LgCombobox from './components/LgCombobox.vue'
import LgCommand from './components/LgCommand.vue'
import LgTabs from './components/LgTabs.vue'
import LgSwitch from './components/LgSwitch.vue'
import LgTooltip from './components/LgTooltip.vue'
import LgSlider from './components/LgSlider.vue'
import LgTextarea from './components/LgTextarea.vue'
import LgSeparator from './components/LgSeparator.vue'
import LgProgress from './components/LgProgress.vue'
import LgRadioGroup from './components/LgRadioGroup.vue'
import LgSkeleton from './components/LgSkeleton.vue'
import LgToggleGroup from './components/LgToggleGroup.vue'
import LgToast from './components/LgToast.vue'
import LgPopover from './components/LgPopover.vue'
import LgHoverCard from './components/LgHoverCard.vue'
import LgPagination from './components/LgPagination.vue'

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
    app.component('LgCombobox', LgCombobox)
    app.component('LgCommand', LgCommand)
    app.component('LgTabs', LgTabs)
    app.component('LgSwitch', LgSwitch)
    app.component('LgTooltip', LgTooltip)
    app.component('LgSlider', LgSlider)
    app.component('LgTextarea', LgTextarea)
    app.component('LgSeparator', LgSeparator)
    app.component('LgProgress', LgProgress)
    app.component('LgRadioGroup', LgRadioGroup)
    app.component('LgSkeleton', LgSkeleton)
    app.component('LgToggleGroup', LgToggleGroup)
    app.component('LgToast', LgToast)
    app.component('LgPopover', LgPopover)
    app.component('LgHoverCard', LgHoverCard)
    app.component('LgPagination', LgPagination)
  }
}
