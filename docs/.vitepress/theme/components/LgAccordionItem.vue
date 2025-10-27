<template>
  <div class="lg-accordion-item" :class="{ 'lg-accordion-item--active': isItemActive }">
    <button
      class="lg-accordion-trigger"
      @click="handleClick"
      :aria-expanded="isItemActive"
    >
      <span class="lg-accordion-trigger__text">{{ trigger }}</span>
      <svg
        class="lg-accordion-trigger__icon"
        :class="{ 'lg-accordion-trigger__icon--open': isItemActive }"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>

    <div
      class="lg-accordion-content"
      :class="{ 'lg-accordion-content--open': isItemActive }"
    >
      <div class="lg-accordion-content__inner">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
  value: {
    type: String,
    required: true
  },
  trigger: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})

const accordion = inject('accordion')

const isItemActive = computed(() => accordion.isActive(props.value))

const handleClick = () => {
  accordion.toggleItem(props.value)
}
</script>

<style scoped>
/* Accordion Item */
.lg-accordion-item {
  border-bottom: 1px solid var(--color-border-15);
}

.lg-accordion-item:first-child {
  border-top: 1px solid var(--color-border-15);
}

/* Accordion Trigger (Button) */
.lg-accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-16) 0;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: var(--font-family-primary);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-500);
  color: var(--color-content-primary);
  text-align: left;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
}

.lg-accordion-trigger:hover {
  color: var(--grass-700);
}

.lg-accordion-trigger:focus-visible {
  outline: 2px solid var(--grass-600);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

.lg-accordion-trigger__text {
  flex: 1;
}

.lg-accordion-trigger__icon {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  color: var(--color-content-tertiary);
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.lg-accordion-trigger__icon--open {
  transform: rotate(180deg);
}

/* Accordion Content */
.lg-accordion-content {
  overflow: hidden;
  max-height: 0;
  transition: max-height 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.lg-accordion-content--open {
  max-height: 500px;
}

.lg-accordion-content__inner {
  padding-bottom: var(--spacing-16);
  font-size: var(--font-size-14);
  line-height: var(--font-height-20);
  color: var(--color-content-secondary);
}
</style>
