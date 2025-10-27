<template>
  <div
    :class="[
      'lg-skeleton',
      variant && `lg-skeleton--${variant}`
    ]"
    :style="customStyle"
  ></div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'circle', 'text'].includes(value)
  },
  width: {
    type: [String, Number],
    default: null
  },
  height: {
    type: [String, Number],
    default: null
  }
})

const customStyle = computed(() => {
  const style = {}
  if (props.width) {
    style.width = typeof props.width === 'number' ? `${props.width}px` : props.width
  }
  if (props.height) {
    style.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  }
  return style
})
</script>

<style scoped>
@keyframes lg-skeleton-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.lg-skeleton {
  background: var(--color-bg-secondary);
  border-radius: var(--radius-sm);
  animation: lg-skeleton-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.lg-skeleton--default {
  width: 100%;
  height: 20px;
}

.lg-skeleton--circle {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
}

.lg-skeleton--text {
  height: 16px;
  border-radius: var(--radius-sm);
}
</style>
