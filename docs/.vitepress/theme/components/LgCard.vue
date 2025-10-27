<template>
  <div class="lg-card">
    <div v-if="$slots.header || title" class="lg-card__header">
      <slot name="header">
        <h3 v-if="title" class="lg-card__title">{{ title }}</h3>
        <p v-if="description" class="lg-card__description">{{ description }}</p>
      </slot>
    </div>

    <div v-if="$slots.default" class="lg-card__content">
      <slot></slot>
    </div>

    <div v-if="$slots.footer" class="lg-card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import { useSlots } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})

const slots = useSlots()
</script>

<style scoped>
.lg-card {
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border-15);
  background: var(--color-bg-primary);
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.lg-card__header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  padding: var(--spacing-20);
  padding-bottom: 0;
}

.lg-card__title {
  margin: 0;
  font-size: var(--font-size-18);
  font-weight: var(--font-weight-600);
  line-height: 1.5;
  color: var(--color-content-primary);
}

.lg-card__description {
  margin: 0;
  font-size: var(--font-size-14);
  color: var(--color-content-secondary);
  line-height: 1.5;
}

.lg-card__content {
  padding: var(--spacing-20);
}

.lg-card__footer {
  padding: var(--spacing-20);
  padding-top: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
}
</style>
