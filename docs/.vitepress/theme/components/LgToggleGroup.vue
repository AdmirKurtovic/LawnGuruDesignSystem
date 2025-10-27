<template>
  <div class="lg-toggle-group" role="group">
    <button
      v-for="item in items"
      :key="item.value"
      type="button"
      :class="[
        'lg-toggle-group__item',
        {
          'lg-toggle-group__item--active': isActive(item.value)
        }
      ]"
      :aria-pressed="isActive(item.value)"
      @click="toggle(item.value)"
    >
      <component v-if="item.icon" :is="item.icon" class="lg-toggle-group__icon" />
      {{ item.label }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Array],
    default: ''
  },
  items: {
    type: Array,
    required: true,
    // Expected: [{ value: 'bold', label: 'B', icon?: Component }]
  },
  type: {
    type: String,
    default: 'single',
    validator: (value) => ['single', 'multiple'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue'])

const isActive = (value) => {
  if (props.type === 'multiple') {
    return Array.isArray(props.modelValue) && props.modelValue.includes(value)
  }
  return props.modelValue === value
}

const toggle = (value) => {
  if (props.type === 'multiple') {
    const currentValue = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const index = currentValue.indexOf(value)

    if (index > -1) {
      currentValue.splice(index, 1)
    } else {
      currentValue.push(value)
    }

    emit('update:modelValue', currentValue)
  } else {
    emit('update:modelValue', props.modelValue === value ? '' : value)
  }
}
</script>

<style scoped>
.lg-toggle-group {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  background: var(--color-bg-secondary);
  padding: var(--spacing-2);
  border-radius: var(--radius-sm);
}

.lg-toggle-group__item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-6);
  padding: var(--spacing-6) var(--spacing-12);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-500);
  font-family: var(--font-family-primary);
  color: var(--color-content-secondary);
  background: transparent;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 150ms ease;
  min-width: 36px;
}

.lg-toggle-group__item:hover {
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
}

.lg-toggle-group__item--active {
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.lg-toggle-group__item:focus-visible {
  outline: 2px solid var(--grass-600);
  outline-offset: 2px;
}

.lg-toggle-group__icon {
  width: 16px;
  height: 16px;
}
</style>
