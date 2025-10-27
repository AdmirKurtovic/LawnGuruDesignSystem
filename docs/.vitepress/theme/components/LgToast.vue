<template>
  <Teleport to="body">
    <TransitionGroup name="lg-toast" tag="div" class="lg-toast-container">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="[
          'lg-toast',
          `lg-toast--${toast.variant || 'default'}`
        ]"
      >
        <div class="lg-toast__content">
          <div class="lg-toast__title">{{ toast.title }}</div>
          <div v-if="toast.description" class="lg-toast__description">
            {{ toast.description }}
          </div>
        </div>
        <button
          v-if="toast.action"
          class="lg-toast__action"
          @click="toast.action.onClick"
        >
          {{ toast.action.label }}
        </button>
        <button
          class="lg-toast__close"
          @click="removeToast(toast.id)"
          aria-label="Close"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </TransitionGroup>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'

const toasts = ref([])

let toastId = 0

const addToast = ({ title, description, variant = 'default', action, duration = 5000 }) => {
  const id = ++toastId
  const toast = { id, title, description, variant, action }

  toasts.value.push(toast)

  if (duration > 0) {
    setTimeout(() => {
      removeToast(id)
    }, duration)
  }

  return id
}

const removeToast = (id) => {
  const index = toasts.value.findIndex(t => t.id === id)
  if (index > -1) {
    toasts.value.splice(index, 1)
  }
}

defineExpose({
  addToast,
  removeToast
})
</script>

<style scoped>
.lg-toast-container {
  position: fixed;
  bottom: var(--spacing-24);
  right: var(--spacing-24);
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
  max-width: 420px;
}

.lg-toast {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-12);
  padding: var(--spacing-16);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-20);
  border-radius: var(--radius-md);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  pointer-events: all;
}

.lg-toast--default {
  border-left: 3px solid var(--grass-700);
}

.lg-toast--destructive {
  border-left: 3px solid var(--red-600);
}

.lg-toast--success {
  border-left: 3px solid var(--grass-600);
}

.lg-toast--warning {
  border-left: 3px solid #F59E0B;
}

.lg-toast__content {
  flex: 1;
}

.lg-toast__title {
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-600);
  color: var(--color-content-primary);
  margin-bottom: var(--spacing-4);
}

.lg-toast__description {
  font-size: var(--font-size-12);
  color: var(--color-content-secondary);
}

.lg-toast__action {
  padding: var(--spacing-4) var(--spacing-12);
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-500);
  color: var(--grass-700);
  background: transparent;
  border: 1px solid var(--color-border-20);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 150ms ease;
  font-family: var(--font-family-primary);
}

.lg-toast__action:hover {
  background: var(--color-bg-secondary);
}

.lg-toast__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  color: var(--color-content-tertiary);
  background: transparent;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 150ms ease;
}

.lg-toast__close:hover {
  color: var(--color-content-primary);
  background: var(--color-bg-secondary);
}

.lg-toast-enter-active,
.lg-toast-leave-active {
  transition: all 300ms ease;
}

.lg-toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.lg-toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
