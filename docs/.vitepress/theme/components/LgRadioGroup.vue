<template>
  <div class="lg-radio-group" role="radiogroup">
    <label v-if="label" class="lg-radio-group__label">{{ label }}</label>
    <div class="lg-radio-group__items">
      <div
        v-for="option in options"
        :key="option.value"
        class="lg-radio-item"
      >
        <input
          :id="`${groupId}-${option.value}`"
          type="radio"
          :name="groupId"
          :value="option.value"
          :checked="modelValue === option.value"
          :disabled="disabled || option.disabled"
          class="lg-radio-item__input"
          @change="handleChange(option.value)"
        />
        <label
          :for="`${groupId}-${option.value}`"
          class="lg-radio-item__label"
        >
          <span class="lg-radio-item__indicator">
            <span class="lg-radio-item__dot"></span>
          </span>
          <div class="lg-radio-item__content">
            <span class="lg-radio-item__text">{{ option.label }}</span>
            <span v-if="option.description" class="lg-radio-item__description">
              {{ option.description }}
            </span>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    required: true,
    // Expected: [{ value: '1', label: 'Option 1', description: '', disabled: false }]
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const groupId = computed(() => `lg-radio-group-${Math.random().toString(36).substr(2, 9)}`)

const handleChange = (value) => {
  emit('update:modelValue', value)
}
</script>

<style scoped>
.lg-radio-group__label {
  display: block;
  margin-bottom: var(--spacing-12);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-500);
  color: var(--color-content-primary);
}

.lg-radio-group__items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
}

.lg-radio-item {
  position: relative;
}

.lg-radio-item__input {
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

.lg-radio-item__label {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-12);
  cursor: pointer;
}

.lg-radio-item__input:disabled + .lg-radio-item__label {
  opacity: 0.5;
  cursor: not-allowed;
}

.lg-radio-item__indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-border-30);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  flex-shrink: 0;
  margin-top: 2px;
}

.lg-radio-item__input:checked + .lg-radio-item__label .lg-radio-item__indicator {
  border-color: var(--grass-700);
}

.lg-radio-item__input:focus-visible + .lg-radio-item__label .lg-radio-item__indicator {
  outline: 2px solid var(--grass-600);
  outline-offset: 2px;
}

.lg-radio-item__dot {
  width: 10px;
  height: 10px;
  background: var(--grass-700);
  border-radius: var(--radius-full);
  transform: scale(0);
  transition: transform 150ms ease;
}

.lg-radio-item__input:checked + .lg-radio-item__label .lg-radio-item__dot {
  transform: scale(1);
}

.lg-radio-item__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.lg-radio-item__text {
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-500);
  color: var(--color-content-primary);
}

.lg-radio-item__description {
  font-size: var(--font-size-12);
  color: var(--color-content-tertiary);
}
</style>
