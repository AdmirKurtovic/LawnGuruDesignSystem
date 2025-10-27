<template>
  <div class="lg-hover-card" ref="hoverCardRef" @mouseenter="show" @mouseleave="hide">
    <slot></slot>
    <Teleport to="body">
      <Transition name="lg-hover-card-fade">
        <div
          v-if="isVisible"
          class="lg-hover-card__content"
          :style="cardStyle"
        >
          <slot name="content"></slot>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const hoverCardRef = ref(null)
const isVisible = ref(false)
const position = ref({ x: 0, y: 0 })

const cardStyle = computed(() => {
  return {
    left: `${position.value.x}px`,
    top: `${position.value.y}px`
  }
})

const calculatePosition = () => {
  if (!hoverCardRef.value) return

  const rect = hoverCardRef.value.getBoundingClientRect()
  const cardWidth = 300
  const cardHeight = 200

  let x = rect.left + rect.width / 2 - cardWidth / 2
  let y = rect.bottom + 8

  // Keep within viewport
  if (x + cardWidth > window.innerWidth) {
    x = window.innerWidth - cardWidth - 16
  }
  if (x < 16) {
    x = 16
  }

  position.value = { x, y }
}

let showTimeout = null

const show = () => {
  showTimeout = setTimeout(() => {
    calculatePosition()
    isVisible.value = true
  }, 200)
}

const hide = () => {
  if (showTimeout) {
    clearTimeout(showTimeout)
    showTimeout = null
  }
  isVisible.value = false
}
</script>

<style scoped>
.lg-hover-card {
  display: inline-block;
  position: relative;
}

.lg-hover-card__content {
  position: fixed;
  z-index: 9999;
  width: 300px;
  padding: var(--spacing-16);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-20);
  border-radius: var(--radius-md);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.lg-hover-card-fade-enter-active,
.lg-hover-card-fade-leave-active {
  transition: opacity 150ms ease;
}

.lg-hover-card-fade-enter-from,
.lg-hover-card-fade-leave-to {
  opacity: 0;
}
</style>
