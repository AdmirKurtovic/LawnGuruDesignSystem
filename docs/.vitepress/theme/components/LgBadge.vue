<template>
  <span :class="badgeClasses">
    <slot></slot>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'filled',
    validator: (value) => ['filled', 'outlined', 'soft', 'dot'].includes(value)
  },
  color: {
    type: String,
    default: 'neutral',
    validator: (value) => ['neutral', 'success', 'warning', 'error', 'info', 'brand'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
})

const badgeClasses = computed(() => [
  'lg-badge',
  `lg-badge--${props.variant}`,
  `lg-badge--${props.color}`,
  `lg-badge--${props.size}`
])
</script>

<style scoped>
/* Base Badge */
.lg-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-500);
  border-radius: var(--radius-full);
  white-space: nowrap;
  vertical-align: middle;
}

/* Sizes */
.lg-badge--sm {
  height: 18px;
  min-width: 18px;
  padding: 0 var(--spacing-6);
  font-size: var(--font-size-11);
  line-height: var(--font-height-14);
}

.lg-badge--md {
  height: 22px;
  min-width: 22px;
  padding: 0 var(--spacing-8);
  font-size: var(--font-size-12);
  line-height: var(--font-height-16);
}

.lg-badge--lg {
  height: 26px;
  min-width: 26px;
  padding: 0 var(--spacing-12);
  font-size: var(--font-size-13);
  line-height: var(--font-height-18);
}

/* Dot Variant (always circular) */
.lg-badge--dot {
  padding: 0;
  border-radius: var(--radius-full);
}

.lg-badge--dot.lg-badge--sm {
  width: 8px;
  height: 8px;
  min-width: 8px;
}

.lg-badge--dot.lg-badge--md {
  width: 10px;
  height: 10px;
  min-width: 10px;
}

.lg-badge--dot.lg-badge--lg {
  width: 12px;
  height: 12px;
  min-width: 12px;
}

/* Filled Variants */
.lg-badge--filled.lg-badge--neutral {
  background: var(--neutral-100);
  color: var(--neutral-900);
}

.lg-badge--filled.lg-badge--success {
  background: var(--grass-700);
  color: var(--neutral-00);
}

.lg-badge--filled.lg-badge--warning {
  background: var(--yellow-500);
  color: var(--yellow-800);
}

.lg-badge--filled.lg-badge--error {
  background: var(--red-600);
  color: var(--neutral-00);
}

.lg-badge--filled.lg-badge--info {
  background: var(--blue-600);
  color: var(--neutral-00);
}

.lg-badge--filled.lg-badge--brand {
  background: var(--grass-600);
  color: var(--neutral-00);
}

/* Outlined Variants */
.lg-badge--outlined {
  background: transparent;
  border: var(--border-width-regular) solid;
}

.lg-badge--outlined.lg-badge--neutral {
  border-color: var(--color-border-30);
  color: var(--color-content-primary);
}

.lg-badge--outlined.lg-badge--success {
  border-color: var(--grass-600);
  color: var(--grass-700);
}

.lg-badge--outlined.lg-badge--warning {
  border-color: var(--yellow-500);
  color: var(--yellow-800);
}

.lg-badge--outlined.lg-badge--error {
  border-color: var(--red-600);
  color: var(--red-600);
}

.lg-badge--outlined.lg-badge--info {
  border-color: var(--blue-600);
  color: var(--blue-600);
}

.lg-badge--outlined.lg-badge--brand {
  border-color: var(--grass-600);
  color: var(--grass-700);
}

/* Soft Variants */
.lg-badge--soft.lg-badge--neutral {
  background: var(--neutral-100);
  color: var(--neutral-900);
}

.lg-badge--soft.lg-badge--success {
  background: var(--grass-100);
  color: var(--grass-800);
}

.lg-badge--soft.lg-badge--warning {
  background: var(--yellow-100);
  color: var(--yellow-800);
}

.lg-badge--soft.lg-badge--error {
  background: var(--red-100);
  color: var(--red-600);
}

.lg-badge--soft.lg-badge--info {
  background: var(--blue-100);
  color: var(--blue-600);
}

.lg-badge--soft.lg-badge--brand {
  background: var(--color-bg-brand-subtle);
  color: var(--grass-800);
}

/* Dot Color Variants */
.lg-badge--dot.lg-badge--neutral {
  background: var(--neutral-900);
}

.lg-badge--dot.lg-badge--success {
  background: var(--grass-700);
}

.lg-badge--dot.lg-badge--warning {
  background: var(--yellow-500);
}

.lg-badge--dot.lg-badge--error {
  background: var(--red-600);
}

.lg-badge--dot.lg-badge--info {
  background: var(--blue-600);
}

.lg-badge--dot.lg-badge--brand {
  background: var(--grass-600);
}
</style>
