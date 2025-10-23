<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    :type="type"
    @click="handleClick"
  >
    <span v-if="loading" class="lg-button__spinner">
      <svg class="lg-button__spinner-icon" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-opacity="0.25" />
        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
      </svg>
    </span>

    <span v-if="icon && iconPosition === 'left'" class="lg-button__icon lg-button__icon--left">
      <slot name="icon-left">{{ icon }}</slot>
    </span>

    <span v-if="$slots.default" class="lg-button__content">
      <slot></slot>
    </span>

    <span v-if="icon && iconPosition === 'right'" class="lg-button__icon lg-button__icon--right">
      <slot name="icon-right">{{ icon }}</slot>
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'].includes(value)
  },
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'sm', 'lg', 'icon'].includes(value)
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: null
  },
  iconPosition: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value)
  },
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value)
  }
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => [
  'lg-button',
  `lg-button--${props.variant}`,
  `lg-button--${props.size}`,
  {
    'lg-button--full-width': props.fullWidth,
    'lg-button--loading': props.loading,
    'lg-button--disabled': props.disabled
  }
])

const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
/* Base Button Styles - Inspired by shadcn */
.lg-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-8);
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-500);
  white-space: nowrap;
  border-radius: var(--radius-md);
  font-size: var(--font-size-14);
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  user-select: none;
  border: none;
  outline: none;
  position: relative;
}

/* Focus Ring - shadcn style */
.lg-button:focus-visible {
  outline: none;
  ring: 2px;
  ring-color: var(--grass-600);
  ring-offset: 2px;
  box-shadow: 0 0 0 2px var(--color-bg-primary), 0 0 0 4px var(--grass-600);
}

/* Size Variants - shadcn inspired */
.lg-button--default {
  height: 40px;
  padding: 0 var(--spacing-16);
}

.lg-button--sm {
  height: 36px;
  padding: 0 var(--spacing-12);
  font-size: var(--font-size-13);
  border-radius: var(--radius-md);
}

.lg-button--lg {
  height: 44px;
  padding: 0 var(--spacing-24);
  font-size: var(--font-size-15);
  border-radius: var(--radius-md);
}

.lg-button--icon {
  height: 40px;
  width: 40px;
  padding: 0;
}

.lg-button--icon.lg-button--sm {
  height: 36px;
  width: 36px;
}

.lg-button--icon.lg-button--lg {
  height: 44px;
  width: 44px;
}

/* Default Variant (Primary with LawnGuru green) */
.lg-button--default {
  background: var(--grass-700);
  color: var(--neutral-00);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.lg-button--default:hover:not(:disabled) {
  background: var(--grass-800);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.lg-button--default:active:not(:disabled) {
  background: var(--grass-900);
  transform: translateY(0);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

/* Destructive Variant (using LawnGuru red) */
.lg-button--destructive {
  background: var(--red-600);
  color: var(--neutral-00);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.lg-button--destructive:hover:not(:disabled) {
  background: var(--red-900);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.lg-button--destructive:active:not(:disabled) {
  background: var(--red-900);
  opacity: 0.9;
}

/* Outline Variant - shadcn style with LawnGuru colors */
.lg-button--outline {
  border: 1px solid var(--color-border-20);
  background: transparent;
  color: var(--color-content-primary);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.lg-button--outline:hover:not(:disabled) {
  background: var(--color-bg-secondary);
  border-color: var(--color-border-30);
}

.lg-button--outline:active:not(:disabled) {
  background: var(--color-bg-tertiary);
}

/* Secondary Variant - subtle with LawnGuru neutral */
.lg-button--secondary {
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.lg-button--secondary:hover:not(:disabled) {
  background: var(--color-bg-tertiary);
}

.lg-button--secondary:active:not(:disabled) {
  background: var(--color-bg-tertiary);
  opacity: 0.8;
}

/* Ghost Variant - shadcn style */
.lg-button--ghost {
  background: transparent;
  color: var(--color-content-primary);
  box-shadow: none;
}

.lg-button--ghost:hover:not(:disabled) {
  background: var(--color-bg-secondary);
}

.lg-button--ghost:active:not(:disabled) {
  background: var(--color-bg-tertiary);
}

/* Link Variant - shadcn style with LawnGuru green */
.lg-button--link {
  background: transparent;
  color: var(--grass-700);
  text-decoration: underline;
  text-underline-offset: 4px;
  box-shadow: none;
  height: auto;
  padding: 0;
}

.lg-button--link:hover:not(:disabled) {
  color: var(--grass-800);
  text-decoration: underline;
}

.lg-button--link:active:not(:disabled) {
  color: var(--grass-900);
}

/* Full Width */
.lg-button--full-width {
  width: 100%;
}

/* Disabled State - shadcn style */
.lg-button:disabled,
.lg-button--disabled {
  pointer-events: none;
  opacity: 0.5;
}

/* Loading State */
.lg-button--loading {
  color: transparent;
  pointer-events: none;
}

.lg-button__spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.lg-button__spinner-icon {
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
}

.lg-button--default .lg-button__spinner-icon,
.lg-button--destructive .lg-button__spinner-icon {
  color: var(--neutral-00);
}

.lg-button--outline .lg-button__spinner-icon,
.lg-button--secondary .lg-button__spinner-icon,
.lg-button--ghost .lg-button__spinner-icon {
  color: var(--color-content-primary);
}

.lg-button--link .lg-button__spinner-icon {
  color: var(--grass-700);
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Icon Styles */
.lg-button__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.lg-button__icon svg,
.lg-button__icon img {
  width: 16px;
  height: 16px;
}

.lg-button--lg .lg-button__icon svg,
.lg-button--lg .lg-button__icon img {
  width: 20px;
  height: 20px;
}

.lg-button--sm .lg-button__icon svg,
.lg-button--sm .lg-button__icon img {
  width: 14px;
  height: 14px;
}
</style>
