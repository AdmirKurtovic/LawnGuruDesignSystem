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

      <span v-if="$slots['icon-right'] || (clearable && modelValue)" class="lg-input__icon lg-input__icon--right">
        <button
          v-if="clearable && modelValue && !disabled && !readonly"
          type="button"
          class="lg-input__clear"
          @click="handleClear"
          aria-label="Clear input"
        >
          <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
          </svg>
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
import { ref, computed, useSlots } from 'vue'

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
    default: 'default',
    validator: (value) => ['sm', 'default', 'lg'].includes(value)
  },
  horizontal: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'clear', 'keydown'])

const slots = useSlots()
const inputRef = ref(null)
const isFocused = ref(false)

const inputId = computed(() => `lg-input-${Math.random().toString(36).substr(2, 9)}`)

const wrapperClasses = computed(() => [
  `lg-input-wrapper--${props.size}`,
  {
    'lg-input-wrapper--horizontal': props.horizontal
  }
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
    'lg-input--with-icon-left': !!slots['icon-left'],
    'lg-input--with-icon-right': !!slots['icon-right'] || (props.clearable && props.modelValue)
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

/* Horizontal Layout */
.lg-input-wrapper--horizontal {
  flex-direction: row;
  align-items: flex-start;
  gap: var(--spacing-16);
}

.lg-input-wrapper--horizontal .lg-input__label {
  min-width: 120px;
  padding-top: 10px;
  flex-shrink: 0;
}

.lg-input-wrapper--horizontal .lg-input__container {
  flex: 1;
}

.lg-input-wrapper--horizontal .lg-input__message {
  margin-top: var(--spacing-4);
}

/* Label */
.lg-input__label {
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-500);
  color: var(--color-content-primary);
  line-height: 1.5;
  margin-bottom: 0;
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

/* Base Input - Clean and simple */
.lg-input {
  flex: 1;
  width: 100%;
  font-family: var(--font-family-primary);
  font-size: var(--font-size-14);
  line-height: var(--font-height-20);
  color: var(--color-content-primary);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-20);
  border-radius: var(--radius-sm);
  transition: border-color 150ms ease;
  outline: none;
}

/* Size Variants */
.lg-input--sm {
  height: 36px;
  padding: 0 var(--spacing-12);
  font-size: var(--font-size-13);
}

.lg-input--default {
  height: 40px;
  padding: 0 var(--spacing-12);
}

.lg-input--lg {
  height: 44px;
  padding: 0 var(--spacing-16);
  font-size: var(--font-size-15);
}

/* With Icons */
.lg-input--with-icon-left.lg-input--sm {
  padding-left: 36px;
}

.lg-input--with-icon-left.lg-input--default {
  padding-left: 40px;
}

.lg-input--with-icon-left.lg-input--lg {
  padding-left: 44px;
}

.lg-input--with-icon-right.lg-input--sm {
  padding-right: 36px;
}

.lg-input--with-icon-right.lg-input--default {
  padding-right: 40px;
}

.lg-input--with-icon-right.lg-input--lg {
  padding-right: 44px;
}

/* Placeholder - shadcn style */
.lg-input::placeholder {
  color: var(--color-content-placeholder);
}

/* Hover State */
.lg-input:hover:not(:disabled):not(:readonly) {
  border-color: var(--color-border-30);
}

/* Focus State - Simple green border */
.lg-input:focus,
.lg-input--focused {
  border-color: var(--grass-600);
}

/* Error State */
.lg-input--error {
  border-color: var(--red-600);
}

.lg-input--error:focus {
  border-color: var(--red-600);
}

/* Success State */
.lg-input--success {
  border-color: var(--grass-600);
}

.lg-input--success:focus {
  border-color: var(--grass-600);
}

/* Disabled State */
.lg-input--disabled,
.lg-input:disabled {
  background: var(--color-bg-secondary);
  color: var(--color-content-disabled);
  cursor: not-allowed;
  opacity: 0.6;
}

/* Readonly State */
.lg-input--readonly,
.lg-input:readonly {
  background: var(--color-bg-secondary);
  cursor: default;
  opacity: 0.8;
}

/* Icons */
.lg-input__icon {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-tertiary);
  pointer-events: none;
}

.lg-input__icon--left {
  left: 0;
}

.lg-input__icon--right {
  right: 0;
}

.lg-input-wrapper--sm .lg-input__icon {
  width: 36px;
  height: 36px;
}

.lg-input-wrapper--default .lg-input__icon {
  width: 40px;
  height: 40px;
}

.lg-input-wrapper--lg .lg-input__icon {
  width: 44px;
  height: 44px;
}

.lg-input__icon svg {
  width: 16px;
  height: 16px;
}

.lg-input-wrapper--lg .lg-input__icon svg {
  width: 18px;
  height: 18px;
}

/* Clear Button - shadcn style */
.lg-input__clear {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--color-content-tertiary);
  border-radius: var(--radius-sm);
  cursor: pointer;
  pointer-events: auto;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.lg-input__clear:hover {
  color: var(--color-content-primary);
  background: var(--color-bg-secondary);
}

.lg-input__clear:active {
  background: var(--color-bg-tertiary);
}

/* Messages - shadcn style */
.lg-input__message {
  font-size: var(--font-size-13);
  line-height: var(--font-height-18);
  font-weight: var(--font-weight-400);
}

.lg-input__message--helper {
  color: var(--color-content-tertiary);
}

.lg-input__message--error {
  color: var(--red-600);
  font-weight: var(--font-weight-500);
}

.lg-input__message--success {
  color: var(--grass-700);
  font-weight: var(--font-weight-500);
}

/* File Input Styling */
.lg-input[type="file"] {
  padding: 8px 12px;
}

.lg-input[type="file"]::file-selector-button {
  margin-right: var(--spacing-12);
  padding: 4px 12px;
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
  border: 1px solid var(--color-border-20);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-13);
  font-weight: var(--font-weight-500);
  cursor: pointer;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.lg-input[type="file"]::file-selector-button:hover {
  background: var(--color-bg-tertiary);
}
</style>
