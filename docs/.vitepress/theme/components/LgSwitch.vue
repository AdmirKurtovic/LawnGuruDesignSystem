<template>
  <div class="lg-switch-wrapper">
    <label v-if="label" class="lg-switch__label">{{ label }}</label>
    <button
      type="button"
      role="switch"
      :aria-checked="modelValue"
      :disabled="disabled"
      :class="[
        'lg-switch',
        {
          'lg-switch--checked': modelValue,
          'lg-switch--disabled': disabled
        }
      ]"
      @click="toggle"
    >
      <span class="lg-switch__thumb"></span>
    </button>
    <p v-if="description" class="lg-switch__description">{{ description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const toggle = () => {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue)
  }
}
</script>

<style scoped>
.lg-switch-wrapper {
  display: flex;
  align-items: center;
  gap: var(--spacing-12);
}

.lg-switch__label {
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-500);
  color: var(--color-content-primary);
}

.lg-switch {
  position: relative;
  width: 44px;
  height: 24px;
  background: var(--color-border-30);
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  transition: background-color 200ms ease;
  padding: 0;
}

.lg-switch:hover:not(.lg-switch--disabled) {
  background: var(--color-border-40);
}

.lg-switch--checked {
  background: var(--grass-700);
}

.lg-switch--checked:hover:not(.lg-switch--disabled) {
  background: var(--grass-800);
}

.lg-switch--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.lg-switch:focus-visible {
  outline: 2px solid var(--grass-600);
  outline-offset: 2px;
}

.lg-switch__thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: var(--radius-full);
  transition: transform 200ms ease;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.lg-switch--checked .lg-switch__thumb {
  transform: translateX(20px);
}

.lg-switch__description {
  margin-top: var(--spacing-4);
  font-size: var(--font-size-12);
  color: var(--color-content-tertiary);
}
</style>
