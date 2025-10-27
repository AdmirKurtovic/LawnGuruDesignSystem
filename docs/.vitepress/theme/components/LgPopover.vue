<template>
  <div class="lg-popover" ref="popoverRef">
    <div ref="triggerRef" @click="toggle">
      <slot name="trigger"></slot>
    </div>
    <Teleport to="body">
      <Transition name="lg-popover-fade">
        <div
          v-if="isOpen"
          ref="contentRef"
          class="lg-popover__content"
          :style="popoverStyle"
        >
          <slot name="content"></slot>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  placement: {
    type: String,
    default: 'bottom',
    validator: (value) => ['top', 'bottom', 'left', 'right'].includes(value)
  }
})

const isOpen = ref(false)
const triggerRef = ref(null)
const contentRef = ref(null)
const popoverRef = ref(null)
const position = ref({ x: 0, y: 0 })

const popoverStyle = computed(() => {
  return {
    left: `${position.value.x}px`,
    top: `${position.value.y}px`
  }
})

const calculatePosition = () => {
  if (!triggerRef.value) return

  const triggerRect = triggerRef.value.getBoundingClientRect()
  const popoverWidth = 300
  const popoverHeight = 200

  let x = 0
  let y = 0

  switch (props.placement) {
    case 'top':
      x = triggerRect.left + triggerRect.width / 2 - popoverWidth / 2
      y = triggerRect.top - popoverHeight - 8
      break
    case 'bottom':
      x = triggerRect.left + triggerRect.width / 2 - popoverWidth / 2
      y = triggerRect.bottom + 8
      break
    case 'left':
      x = triggerRect.left - popoverWidth - 8
      y = triggerRect.top + triggerRect.height / 2 - popoverHeight / 2
      break
    case 'right':
      x = triggerRect.right + 8
      y = triggerRect.top + triggerRect.height / 2 - popoverHeight / 2
      break
  }

  position.value = { x, y }
}

const toggle = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    calculatePosition()
  }
}

const handleClickOutside = (event) => {
  if (
    popoverRef.value &&
    !popoverRef.value.contains(event.target) &&
    contentRef.value &&
    !contentRef.value.contains(event.target)
  ) {
    isOpen.value = false
  }
}

watch(isOpen, (newValue) => {
  if (newValue) {
    document.addEventListener('click', handleClickOutside)
  } else {
    document.removeEventListener('click', handleClickOutside)
  }
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.lg-popover {
  display: inline-block;
}

.lg-popover__content {
  position: fixed;
  z-index: 9999;
  min-width: 200px;
  padding: var(--spacing-16);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-20);
  border-radius: var(--radius-md);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.lg-popover-fade-enter-active,
.lg-popover-fade-leave-active {
  transition: opacity 150ms ease;
}

.lg-popover-fade-enter-from,
.lg-popover-fade-leave-to {
  opacity: 0;
}
</style>
