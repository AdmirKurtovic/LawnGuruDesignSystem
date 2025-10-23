<template>
  <div class="lg-input-wrapper" :class="wrapperClasses">
    <label v-if="label" class="lg-input__label" :for="inputId">
      {{ label }}
      <span v-if="required" class="lg-input__required">*</span>
    </label>

    <div class="lg-input__container">
      <span v-if="$slots['icon-left']" class="lg-input__icon lg-input__icon--left">
        <slot name="icon-left"></slot>
      </span>

      <input
        :id="inputId"
        ref="inputRef"
        :class="inputClasses"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :autocomplete="autocomplete"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
      />

      <span v-if="$slots['icon-right'] || clearable && modelValue" class="lg-input__icon lg-input__icon--right">
        <button
          v-if="clearable && modelValue && !disabled && !readonly"
          type="button"
          class="lg-input__clear"
          @click="handleClear"
          aria-label="Clear input"
        >
          ×
        </button>
        <slot v-else name="icon-right"></slot>
      </span>
    </div>

    <div v-if="helperText || errorMessage || successMessage" class="lg-input__message">
      <span v-if="error && errorMessage" class="lg-input__message--error">
        {{ errorMessage }}
      </span>
      <span v-else-if="success && successMessage" class="lg-input__message--success">
        {{ successMessage }}
      </span>
      <span v-else-if="helperText" class="lg-input__message--helper">
        {{ helperText }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

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
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  },
  success: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: ''
  },
  successMessage: {
    type: String,
    default: ''
  },
  helperText: {
    type: String,
    default: ''
  },
  clearable: {
    type: Boolean,
    default: false
  },
  autocomplete: {
    type: String,
    default: 'off'
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'clear', 'keydown'])

const inputRef = ref(null)
const isFocused = ref(false)

// Generate unique ID for accessibility
const inputId = computed(() => `lg-input-${Math.random().toString(36).substr(2, 9)}`)

const wrapperClasses = computed(() => [
  `lg-input-wrapper--${props.size}`
])

const inputClasses = computed(() => [
  'lg-input',
  `lg-input--${props.size}`,
  {
    'lg-input--error': props.error,
    'lg-input--success': props.success,
    'lg-input--disabled': props.disabled,
    'lg-input--readonly': props.readonly,
    'lg-input--focused': isFocused.value,
    'lg-input--with-icon-left': !!props.$slots['icon-left'],
    'lg-input--with-icon-right': !!props.$slots['icon-right'] || (props.clearable && props.modelValue)
  }
])

const handleInput = (event) => {
  emit('update:modelValue', event.target.value)
}

const handleFocus = (event) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event) => {
  isFocused.value = false
  emit('blur', event)
}

const handleClear = () => {
  emit('update:modelValue', '')
  emit('clear')
  inputRef.value?.focus()
}

const handleKeydown = (event) => {
  emit('keydown', event)
}

// Expose focus method
defineExpose({
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur()
})
</script>

<style scoped>
.lg-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  width: 100%;
}

/* Label */
.lg-input__label {
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-500);
  color: var(--color-content-primary);
  line-height: var(--font-height-20);
}

.lg-input__required {
  color: var(--red-600);
  margin-left: var(--spacing-2);
}

/* Input Container */
.lg-input__container {
  position: relative;
  display: flex;
  align-items: center;
}

/* Base Input */
.lg-input {
  width: 100%;
  font-family: var(--font-family-primary);
  font-size: var(--font-size-14);
  line-height: var(--font-height-20);
  color: var(--color-content-primary);
  background: var(--color-bg-primary);
  border: var(--border-width-regular) solid var(--color-border-20);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  outline: none;
}

/* Sizes */
.lg-input--sm {
  height: 32px;
  padding: 0 var(--spacing-12);
}

.lg-input--md {
  height: 40px;
  padding: 0 var(--spacing-12);
}

.lg-input--lg {
  height: 48px;
  padding: 0 var(--spacing-16);
  font-size: var(--font-size-16);
}

/* With Icons */
.lg-input--with-icon-left {
  padding-left: var(--spacing-40);
}

.lg-input--with-icon-right {
  padding-right: var(--spacing-40);
}

/* States */
.lg-input::placeholder {
  color: var(--color-content-placeholder);
}

.lg-input:hover:not(:disabled):not(:readonly) {
  border-color: var(--color-border-30);
}

.lg-input:focus,
.lg-input--focused {
  border-color: var(--grass-600);
  box-shadow: 0 0 0 3px rgba(0, 163, 27, 0.1);
}

.lg-input--error {
  border-color: var(--red-600);
}

.lg-input--error:focus {
  box-shadow: 0 0 0 3px rgba(229, 19, 46, 0.1);
}

.lg-input--success {
  border-color: var(--grass-600);
}

.lg-input--success:focus {
  box-shadow: 0 0 0 3px rgba(0, 163, 27, 0.1);
}

.lg-input--disabled,
.lg-input:disabled {
  background: var(--color-bg-secondary);
  color: var(--color-content-disabled);
  cursor: not-allowed;
}

.lg-input--readonly,
.lg-input:readonly {
  background: var(--color-bg-secondary);
  cursor: default;
}

/* Icons */
.lg-input__icon {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-secondary);
  pointer-events: none;
}

.lg-input__icon--left {
  left: var(--spacing-12);
}

.lg-input__icon--right {
  right: var(--spacing-12);
}

.lg-input__icon svg {
  width: 16px;
  height: 16px;
}

.lg-input-wrapper--lg .lg-input__icon svg {
  width: 20px;
  height: 20px;
}

/* Clear Button */
.lg-input__clear {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
  border-radius: var(--radius-full);
  cursor: pointer;
  pointer-events: auto;
  font-size: 18px;
  line-height: 1;
  transition: all var(--transition-fast);
}

.lg-input__clear:hover {
  background: var(--color-bg-tertiary);
  color: var(--color-content-primary);
}

/* Messages */
.lg-input__message {
  font-size: var(--font-size-12);
  line-height: var(--font-height-16);
  min-height: var(--font-height-16);
}

.lg-input__message--helper {
  color: var(--color-content-secondary);
}

.lg-input__message--error {
  color: var(--red-600);
}

.lg-input__message--success {
  color: var(--grass-600);
}
</style>
