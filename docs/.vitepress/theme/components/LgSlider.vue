<template>
  <div class="lg-slider">
    <label v-if="label" class="lg-slider__label">{{ label }}</label>
    <div class="lg-slider__wrapper">
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :value="modelValue"
        :disabled="disabled"
        class="lg-slider__input"
        @input="handleInput"
      />
      <div class="lg-slider__track">
        <div class="lg-slider__range" :style="{ width: `${percentage}%` }"></div>
        <div class="lg-slider__thumb" :style="{ left: `${percentage}%` }"></div>
      </div>
    </div>
    <div v-if="showValue" class="lg-slider__value">{{ modelValue }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 50
  },
  label: {
    type: String,
    default: ''
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    type: Number,
    default: 1
  },
  disabled: {
    type: Boolean,
    default: false
  },
  showValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const percentage = computed(() => {
  return ((props.modelValue - props.min) / (props.max - props.min)) * 100
})

const handleInput = (event) => {
  emit('update:modelValue', Number(event.target.value))
}
</script>

<style scoped>
.lg-slider {
  width: 100%;
}

.lg-slider__label {
  display: block;
  margin-bottom: var(--spacing-8);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-500);
  color: var(--color-content-primary);
}

.lg-slider__wrapper {
  position: relative;
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
}

.lg-slider__input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
}

.lg-slider__input:disabled {
  cursor: not-allowed;
}

.lg-slider__track {
  position: relative;
  width: 100%;
  height: 6px;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-full);
}

.lg-slider__range {
  position: absolute;
  height: 100%;
  background: var(--grass-700);
  border-radius: var(--radius-full);
  transition: width 150ms ease;
}

.lg-slider__thumb {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: white;
  border: 2px solid var(--grass-700);
  border-radius: var(--radius-full);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: left 150ms ease;
  pointer-events: none;
}

.lg-slider__input:focus-visible + .lg-slider__track .lg-slider__thumb {
  outline: 2px solid var(--grass-600);
  outline-offset: 2px;
}

.lg-slider__input:disabled + .lg-slider__track {
  opacity: 0.5;
}

.lg-slider__value {
  margin-top: var(--spacing-8);
  font-size: var(--font-size-14);
  color: var(--color-content-secondary);
  text-align: center;
}
</style>
