<template>
  <div :class="avatarClasses" :style="avatarStyle">
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      class="lg-avatar__image"
      @error="handleImageError"
    />
    <span v-else-if="initials" class="lg-avatar__initials">
      {{ displayInitials }}
    </span>
    <span v-else class="lg-avatar__icon">
      <slot name="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </slot>
    </span>

    <span v-if="status" :class="statusClasses" :style="statusStyle"></span>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: 'Avatar'
  },
  initials: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(value)
  },
  color: {
    type: String,
    default: 'brand',
    validator: (value) => ['brand', 'neutral', 'blue', 'red', 'yellow'].includes(value)
  },
  status: {
    type: String,
    default: '',
    validator: (value) => !value || ['online', 'away', 'busy', 'offline'].includes(value)
  },
  border: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['error'])

const imageError = ref(false)

const sizeMap = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
  '2xl': 96,
  '3xl': 128
}

const avatarClasses = computed(() => [
  'lg-avatar',
  `lg-avatar--${props.size}`,
  `lg-avatar--${props.color}`,
  {
    'lg-avatar--with-border': props.border,
    'lg-avatar--with-status': props.status
  }
])

const avatarStyle = computed(() => ({
  width: `${sizeMap[props.size]}px`,
  height: `${sizeMap[props.size]}px`
}))

const displayInitials = computed(() => {
  if (!props.initials) return ''
  return props.initials.substring(0, 2).toUpperCase()
})

const statusClasses = computed(() => [
  'lg-avatar__status',
  `lg-avatar__status--${props.status}`
])

const statusSize = computed(() => {
  const baseSize = sizeMap[props.size]
  if (baseSize <= 32) return 8
  if (baseSize <= 48) return 10
  if (baseSize <= 64) return 12
  return 14
})

const statusStyle = computed(() => ({
  width: `${statusSize.value}px`,
  height: `${statusSize.value}px`
}))

const handleImageError = (event) => {
  imageError.value = true
  emit('error', event)
}
</script>

<style scoped>
/* Base Avatar */
.lg-avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: var(--radius-full);
  overflow: hidden;
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-600);
  user-select: none;
}

/* Border */
.lg-avatar--with-border {
  border: var(--border-width-2) solid var(--neutral-00);
  box-shadow: var(--shadow-center-02);
}

/* Size-based Font Sizes */
.lg-avatar--xs {
  font-size: 10px;
}

.lg-avatar--sm {
  font-size: 12px;
}

.lg-avatar--md {
  font-size: 14px;
}

.lg-avatar--lg {
  font-size: 16px;
}

.lg-avatar--xl {
  font-size: 20px;
}

.lg-avatar--2xl {
  font-size: 32px;
}

.lg-avatar--3xl {
  font-size: 42px;
}

/* Image */
.lg-avatar__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Initials */
.lg-avatar__initials {
  line-height: 1;
}

/* Icon */
.lg-avatar__icon {
  width: 60%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lg-avatar__icon svg {
  width: 100%;
  height: 100%;
}

/* Color Variants for Initials/Icon */
.lg-avatar--brand {
  background: var(--grass-600);
  color: var(--neutral-00);
}

.lg-avatar--neutral {
  background: var(--neutral-100);
  color: var(--neutral-900);
}

.lg-avatar--blue {
  background: var(--blue-600);
  color: var(--neutral-00);
}

.lg-avatar--red {
  background: var(--red-600);
  color: var(--neutral-00);
}

.lg-avatar--yellow {
  background: var(--yellow-500);
  color: var(--yellow-800);
}

/* Status Indicator */
.lg-avatar__status {
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: var(--radius-full);
  border: var(--border-width-2) solid var(--neutral-00);
}

.lg-avatar__status--online {
  background: var(--grass-700);
}

.lg-avatar__status--away {
  background: var(--yellow-500);
}

.lg-avatar__status--busy {
  background: var(--red-600);
}

.lg-avatar__status--offline {
  background: var(--neutral-900);
}
</style>
