<template>
  <label class="lg-checkbox" :class="{ 'lg-checkbox--disabled': disabled }">
    <div class="lg-checkbox__wrapper">
      <input
        type="checkbox"
        class="lg-checkbox__input"
        :checked="modelValue"
        :disabled="disabled"
        @change="handleChange"
      />
      <div class="lg-checkbox__box" :class="checkboxClasses">
        <svg
          v-if="modelValue"
          class="lg-checkbox__check"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <span v-if="label" class="lg-checkbox__label">{{ label }}</span>
    </div>
    <p v-if="description" class="lg-checkbox__description">{{ description }}</p>
  </label>
</template>

<script setup>
import { computed } from 'vue'

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

const checkboxClasses = computed(() => ({
  'lg-checkbox__box--checked': props.modelValue,
  'lg-checkbox__box--disabled': props.disabled
}))

const handleChange = (event) => {
  if (!props.disabled) {
    emit('update:modelValue', event.target.checked)
  }
}
</script>

<style scoped>
.lg-checkbox {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  cursor: pointer;
}

.lg-checkbox--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.lg-checkbox__wrapper {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-8);
}

.lg-checkbox__input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.lg-checkbox__box {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  border: 1px solid var(--color-border-30);
  border-radius: var(--radius-sm);
  background: var(--color-bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.lg-checkbox__box--checked {
  background: var(--grass-700);
  border-color: var(--grass-700);
  color: var(--neutral-00);
}

.lg-checkbox:hover .lg-checkbox__box:not(.lg-checkbox__box--disabled) {
  border-color: var(--grass-600);
}

.lg-checkbox__box--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.lg-checkbox__check {
  width: 12px;
  height: 12px;
}

.lg-checkbox__label {
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-500);
  color: var(--color-content-primary);
  line-height: var(--font-height-20);
  user-select: none;
}

.lg-checkbox__description {
  font-size: var(--font-size-13);
  color: var(--color-content-secondary);
  line-height: var(--font-height-18);
  margin: 0;
  padding-left: 24px;
}
</style>
