<template>
  <div class="lg-collapsible">
    <button
      class="lg-collapsible__trigger"
      @click="toggle"
      :aria-expanded="isOpen"
    >
      <span>{{ trigger }}</span>
      <svg
        class="lg-collapsible__icon"
        :class="{ 'lg-collapsible__icon--open': isOpen }"
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
      class="lg-collapsible__content"
      :class="{ 'lg-collapsible__content--open': isOpen }"
    >
      <div class="lg-collapsible__inner">
        {{ content }}
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  trigger: {
    type: String,
    required: true
  },
  content: {
    type: String,
    default: ''
  },
  defaultOpen: {
    type: Boolean,
    default: false
  }
})

const isOpen = ref(props.defaultOpen)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.lg-collapsible {
  width: 100%;
}

.lg-collapsible__trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-12) 0;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: var(--font-family-primary);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-500);
  color: var(--color-content-primary);
  text-align: left;
  transition: all 150ms ease;
}

.lg-collapsible__trigger:hover {
  color: var(--grass-700);
}

.lg-collapsible__icon {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  color: var(--color-content-tertiary);
  transition: transform 200ms ease;
}

.lg-collapsible__icon--open {
  transform: rotate(180deg);
}

.lg-collapsible__content {
  overflow: hidden;
  max-height: 0;
  transition: max-height 300ms ease;
}

.lg-collapsible__content--open {
  max-height: 1000px;
}

.lg-collapsible__inner {
  padding-bottom: var(--spacing-16);
  font-size: var(--font-size-14);
  line-height: 1.5;
  color: var(--color-content-secondary);
}
</style>
