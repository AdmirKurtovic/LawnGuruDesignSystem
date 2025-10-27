<template>
  <div class="lg-tooltip" ref="tooltipRef" @mouseenter="show" @mouseleave="hide">
    <slot></slot>
    <Teleport to="body">
      <Transition name="lg-tooltip-fade">
        <div
          v-if="isVisible"
          class="lg-tooltip__content"
          :style="tooltipStyle"
          role="tooltip"
        >
          {{ content }}
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  content: {
    type: String,
    required: true
  },
  placement: {
    type: String,
    default: 'top',
    validator: (value) => ['top', 'bottom', 'left', 'right'].includes(value)
  }
})

const tooltipRef = ref(null)
const isVisible = ref(false)
const position = ref({ x: 0, y: 0 })

const tooltipStyle = computed(() => {
  return {
    left: `${position.value.x}px`,
    top: `${position.value.y}px`
  }
})

const calculatePosition = () => {
  if (!tooltipRef.value) return

  const rect = tooltipRef.value.getBoundingClientRect()
  const tooltipWidth = 200 // Approximate
  const tooltipHeight = 40 // Approximate

  let x = 0
  let y = 0

  switch (props.placement) {
    case 'top':
      x = rect.left + rect.width / 2 - tooltipWidth / 2
      y = rect.top - tooltipHeight - 8
      break
    case 'bottom':
      x = rect.left + rect.width / 2 - tooltipWidth / 2
      y = rect.bottom + 8
      break
    case 'left':
      x = rect.left - tooltipWidth - 8
      y = rect.top + rect.height / 2 - tooltipHeight / 2
      break
    case 'right':
      x = rect.right + 8
      y = rect.top + rect.height / 2 - tooltipHeight / 2
      break
  }

  position.value = { x, y }
}

const show = () => {
  calculatePosition()
  isVisible.value = true
}

const hide = () => {
  isVisible.value = false
}
</script>

<style scoped>
.lg-tooltip {
  display: inline-block;
  position: relative;
}

.lg-tooltip__content {
  position: fixed;
  z-index: 9999;
  padding: var(--spacing-6) var(--spacing-12);
  background: var(--color-content-primary);
  color: var(--color-bg-primary);
  font-size: var(--font-size-12);
  border-radius: var(--radius-sm);
  pointer-events: none;
  white-space: nowrap;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.lg-tooltip-fade-enter-active,
.lg-tooltip-fade-leave-active {
  transition: opacity 150ms ease;
}

.lg-tooltip-fade-enter-from,
.lg-tooltip-fade-leave-to {
  opacity: 0;
}
</style>
