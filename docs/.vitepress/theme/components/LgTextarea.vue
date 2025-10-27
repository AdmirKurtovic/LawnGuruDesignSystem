<template>
  <div class="lg-textarea" :class="{ 'lg-textarea--disabled': disabled }">
    <label v-if="label" class="lg-textarea__label" :for="inputId">
      {{ label }}
    </label>
    <textarea
      :id="inputId"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      :class="[
        'lg-textarea__control',
        {
          'lg-textarea__control--error': error,
          'lg-textarea__control--success': success
        }
      ]"
      @input="handleInput"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    ></textarea>
    <p v-if="helperText && !error && !success" class="lg-textarea__helper">
      {{ helperText }}
    </p>
    <p v-if="error && errorMessage" class="lg-textarea__error">
      {{ errorMessage }}
    </p>
    <p v-if="success && successMessage" class="lg-textarea__success">
      {{ successMessage }}
    </p>
    <div v-if="maxLength" class="lg-textarea__counter">
      {{ modelValue?.length || 0 }} / {{ maxLength }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  helperText: {
    type: String,
    default: ''
  },
  error: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: ''
  },
  success: {
    type: Boolean,
    default: false
  },
  successMessage: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  rows: {
    type: Number,
    default: 4
  },
  maxLength: {
    type: Number,
    default: null
  }
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

const inputId = computed(() => `lg-textarea-${Math.random().toString(36).substr(2, 9)}`)

const handleInput = (event) => {
  const value = event.target.value
  if (props.maxLength && value.length > props.maxLength) {
    return
  }
  emit('update:modelValue', value)
}
</script>

<style scoped>
.lg-textarea {
  width: 100%;
}

.lg-textarea__label {
  display: block;
  margin-bottom: var(--spacing-8);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-500);
  color: var(--color-content-primary);
}

.lg-textarea__control {
  width: 100%;
  padding: var(--spacing-12) var(--spacing-16);
  font-family: var(--font-family-primary);
  font-size: var(--font-size-14);
  color: var(--color-content-primary);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-20);
  border-radius: var(--radius-sm);
  transition: all 150ms ease;
  resize: vertical;
  min-height: 80px;
}

.lg-textarea__control::placeholder {
  color: var(--color-content-placeholder);
}

.lg-textarea__control:hover:not(:disabled) {
  border-color: var(--color-border-30);
}

.lg-textarea__control:focus {
  outline: none;
  border-color: var(--grass-700);
  box-shadow: 0 0 0 3px rgba(0, 137, 52, 0.1);
}

.lg-textarea__control--error {
  border-color: var(--red-600);
}

.lg-textarea__control--error:focus {
  border-color: var(--red-600);
  box-shadow: 0 0 0 3px rgba(229, 19, 46, 0.1);
}

.lg-textarea__control--success {
  border-color: var(--grass-600);
}

.lg-textarea__control:disabled {
  background: var(--color-bg-secondary);
  cursor: not-allowed;
  opacity: 0.6;
}

.lg-textarea__helper {
  margin-top: var(--spacing-6);
  font-size: var(--font-size-12);
  color: var(--color-content-tertiary);
}

.lg-textarea__error {
  margin-top: var(--spacing-6);
  font-size: var(--font-size-12);
  color: var(--red-600);
}

.lg-textarea__success {
  margin-top: var(--spacing-6);
  font-size: var(--font-size-12);
  color: var(--grass-600);
}

.lg-textarea__counter {
  margin-top: var(--spacing-6);
  font-size: var(--font-size-12);
  color: var(--color-content-tertiary);
  text-align: right;
}
</style>
