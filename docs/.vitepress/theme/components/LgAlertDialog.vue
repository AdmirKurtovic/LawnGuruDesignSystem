<template>
  <Teleport to="body">
    <Transition name="lg-alert-dialog-fade">
      <div v-if="modelValue" class="lg-alert-dialog-overlay" @click="handleOverlayClick">
        <Transition name="lg-alert-dialog-scale">
          <div v-if="modelValue" class="lg-alert-dialog" role="alertdialog" @click.stop>
            <div class="lg-alert-dialog__content">
              <h2 v-if="title" class="lg-alert-dialog__title">{{ title }}</h2>
              <p v-if="description" class="lg-alert-dialog__description">{{ description }}</p>
              <slot></slot>
            </div>

            <div class="lg-alert-dialog__actions">
              <LgButton
                v-if="!hideCancelButton"
                variant="outline"
                @click="handleCancel"
              >
                {{ cancelText }}
              </LgButton>
              <LgButton
                :variant="confirmVariant"
                @click="handleConfirm"
              >
                {{ confirmText }}
              </LgButton>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Are you absolutely sure?'
  },
  description: {
    type: String,
    default: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.'
  },
  confirmText: {
    type: String,
    default: 'Continue'
  },
  cancelText: {
    type: String,
    default: 'Cancel'
  },
  confirmVariant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'destructive'].includes(value)
  },
  hideCancelButton: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'confirm', 'cancel'])

const handleConfirm = () => {
  emit('confirm')
  emit('update:modelValue', false)
}

const handleCancel = () => {
  emit('cancel')
  emit('update:modelValue', false)
}

const handleOverlayClick = () => {
  handleCancel()
}
</script>

<style>
/* Overlay */
.lg-alert-dialog-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-16);
}

/* Dialog */
.lg-alert-dialog {
  position: relative;
  width: 100%;
  max-width: 500px;
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-24);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.lg-alert-dialog__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-24);
}

.lg-alert-dialog__title {
  margin: 0;
  font-size: var(--font-size-18);
  font-weight: var(--font-weight-600);
  color: var(--color-content-primary);
  line-height: 1.5;
}

.lg-alert-dialog__description {
  margin: 0;
  font-size: var(--font-size-14);
  color: var(--color-content-secondary);
  line-height: 1.5;
}

.lg-alert-dialog__actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-8);
}

/* Transitions */
.lg-alert-dialog-fade-enter-active,
.lg-alert-dialog-fade-leave-active {
  transition: opacity 200ms ease;
}

.lg-alert-dialog-fade-enter-from,
.lg-alert-dialog-fade-leave-to {
  opacity: 0;
}

.lg-alert-dialog-scale-enter-active,
.lg-alert-dialog-scale-leave-active {
  transition: all 200ms ease;
}

.lg-alert-dialog-scale-enter-from,
.lg-alert-dialog-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
