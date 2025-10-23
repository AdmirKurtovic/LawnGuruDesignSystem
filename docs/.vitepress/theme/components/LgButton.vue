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
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'danger', 'link'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
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
    'lg-button--disabled': props.disabled,
    'lg-button--icon-only': !props.$slots.default && (props.icon || props.$slots['icon-left'] || props.$slots['icon-right'])
  }
])

const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
/* Base Button Styles */
.lg-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-8);
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-500);
  border: var(--border-width-regular) solid transparent;
  cursor: pointer;
  transition: all var(--transition-fast);
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
}

.lg-button:focus-visible {
  outline: 2px solid var(--grass-600);
  outline-offset: 2px;
}

/* Sizes */
.lg-button--sm {
  height: 32px;
  padding: 0 var(--spacing-12);
  font-size: var(--font-size-14);
  line-height: var(--font-height-20);
  border-radius: var(--radius-sm);
}

.lg-button--md {
  height: 40px;
  padding: 0 var(--spacing-16);
  font-size: var(--font-size-14);
  line-height: var(--font-height-20);
  border-radius: var(--radius-sm);
}

.lg-button--lg {
  height: 48px;
  padding: 0 var(--spacing-24);
  font-size: var(--font-size-16);
  line-height: var(--font-height-24);
  border-radius: var(--radius-md);
}

/* Primary Variant */
.lg-button--primary {
  background: var(--grass-700);
  color: var(--neutral-00);
  box-shadow: var(--shadow-bottom-02);
}

.lg-button--primary:hover:not(:disabled) {
  background: var(--grass-800);
  box-shadow: var(--shadow-bottom-03);
}

.lg-button--primary:active:not(:disabled) {
  background: var(--grass-900);
  box-shadow: var(--shadow-bottom-01);
}

/* Secondary Variant */
.lg-button--secondary {
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
  border-color: var(--color-border-20);
}

.lg-button--secondary:hover:not(:disabled) {
  background: var(--color-bg-tertiary);
  border-color: var(--color-border-30);
}

.lg-button--secondary:active:not(:disabled) {
  background: var(--color-bg-tertiary);
}

/* Outline Variant */
.lg-button--outline {
  background: transparent;
  color: var(--grass-700);
  border-color: var(--grass-700);
}

.lg-button--outline:hover:not(:disabled) {
  background: var(--color-bg-brand-subtle);
  border-color: var(--grass-800);
  color: var(--grass-800);
}

.lg-button--outline:active:not(:disabled) {
  background: rgba(0, 137, 52, 0.15);
}

/* Ghost Variant */
.lg-button--ghost {
  background: transparent;
  color: var(--color-content-primary);
  border-color: transparent;
}

.lg-button--ghost:hover:not(:disabled) {
  background: var(--color-state-hover);
}

.lg-button--ghost:active:not(:disabled) {
  background: var(--color-state-pressed);
}

/* Danger Variant */
.lg-button--danger {
  background: var(--red-600);
  color: var(--neutral-00);
  box-shadow: var(--shadow-bottom-02);
}

.lg-button--danger:hover:not(:disabled) {
  background: var(--red-900);
  box-shadow: var(--shadow-bottom-03);
}

.lg-button--danger:active:not(:disabled) {
  background: var(--red-900);
}

/* Link Variant */
.lg-button--link {
  background: transparent;
  color: var(--grass-700);
  border-color: transparent;
  padding: 0;
  height: auto;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.lg-button--link:hover:not(:disabled) {
  color: var(--grass-800);
}

.lg-button--link:active:not(:disabled) {
  color: var(--grass-900);
}

/* Full Width */
.lg-button--full-width {
  width: 100%;
}

/* Disabled State */
.lg-button:disabled,
.lg-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  box-shadow: none;
}

/* Loading State */
.lg-button--loading {
  cursor: wait;
  pointer-events: none;
}

.lg-button__spinner {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.lg-button__spinner-icon {
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.lg-button--loading .lg-button__content,
.lg-button--loading .lg-button__icon {
  opacity: 0;
}

/* Icon Styles */
.lg-button__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
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

/* Icon Only Button */
.lg-button--icon-only {
  padding: 0;
}

.lg-button--icon-only.lg-button--sm {
  width: 32px;
}

.lg-button--icon-only.lg-button--md {
  width: 40px;
}

.lg-button--icon-only.lg-button--lg {
  width: 48px;
}
</style>
