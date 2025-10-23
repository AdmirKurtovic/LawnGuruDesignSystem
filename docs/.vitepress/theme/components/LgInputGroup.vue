<template>
  <div class="lg-input-group" :class="groupClasses">
    <div class="lg-input-group__input">
      <slot name="input"></slot>
    </div>
    <div class="lg-input-group__button">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['sm', 'default', 'lg'].includes(value)
  }
})

const groupClasses = computed(() => [
  `lg-input-group--${props.size}`
])
</script>

<style scoped>
/* Input Group - shadcn style */
.lg-input-group {
  display: flex;
  align-items: stretch;
  gap: 0;
  width: 100%;
}

.lg-input-group__input {
  flex: 1;
  display: flex;
}

/* Remove right border radius from input */
.lg-input-group__input :deep(.lg-input) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;
}

/* Remove left border radius from button */
.lg-input-group__button :deep(.lg-button) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  height: 100%;
}

/* Size variants - match button height to input */
.lg-input-group--sm .lg-input-group__button :deep(.lg-button) {
  height: 36px;
  min-width: 80px;
}

.lg-input-group--default .lg-input-group__button :deep(.lg-button) {
  height: 40px;
  min-width: 90px;
}

.lg-input-group--lg .lg-input-group__button :deep(.lg-button) {
  height: 44px;
  min-width: 100px;
}

/* Focus state - add right border when input is focused */
.lg-input-group__input :deep(.lg-input:focus),
.lg-input-group__input :deep(.lg-input--focused) {
  border-right: 1px solid var(--grass-600);
}
</style>
