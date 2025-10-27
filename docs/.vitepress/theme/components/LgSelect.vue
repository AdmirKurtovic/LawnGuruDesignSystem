<template>
  <div class="lg-select" :class="{ 'lg-select--disabled': disabled }">
    <label v-if="label" class="lg-select__label">{{ label }}</label>
    <div class="lg-select__wrapper">
      <select
        class="lg-select__control"
        :value="modelValue"
        :disabled="disabled"
        @change="handleChange"
      >
        <option value="" disabled>{{ placeholder }}</option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
      <svg
        class="lg-select__icon"
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
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Select an option'
  },
  options: {
    type: Array,
    required: true,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const handleChange = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped>
.lg-select {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  width: 100%;
}

.lg-select--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.lg-select__label {
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-500);
  color: var(--color-content-primary);
}

.lg-select__wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.lg-select__control {
  width: 100%;
  height: 40px;
  padding: 0 var(--spacing-12);
  padding-right: 36px;
  font-family: var(--font-family-primary);
  font-size: var(--font-size-14);
  color: var(--color-content-primary);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-20);
  border-radius: var(--radius-sm);
  cursor: pointer;
  appearance: none;
  outline: none;
  transition: border-color 150ms ease;
}

.lg-select__control:hover:not(:disabled) {
  border-color: var(--color-border-30);
}

.lg-select__control:focus {
  border-color: var(--grass-600);
}

.lg-select__control:disabled {
  cursor: not-allowed;
  background: var(--color-bg-secondary);
}

.lg-select__icon {
  position: absolute;
  right: 12px;
  width: 16px;
  height: 16px;
  color: var(--color-content-tertiary);
  pointer-events: none;
}
</style>
