<template>
  <div class="lg-tabs">
    <div class="lg-tabs__list" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        :class="[
          'lg-tabs__trigger',
          { 'lg-tabs__trigger--active': modelValue === tab.value }
        ]"
        :aria-selected="modelValue === tab.value"
        role="tab"
        @click="selectTab(tab.value)"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="lg-tabs__content" role="tabpanel">
      <slot :name="modelValue"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  tabs: {
    type: Array,
    required: true,
    // Expected format: [{ value: 'account', label: 'Account' }]
  }
})

const emit = defineEmits(['update:modelValue'])

const selectTab = (value) => {
  emit('update:modelValue', value)
}
</script>

<style scoped>
.lg-tabs {
  width: 100%;
}

.lg-tabs__list {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  background: var(--color-bg-secondary);
  padding: var(--spacing-4);
  gap: var(--spacing-4);
}

.lg-tabs__trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: var(--radius-sm);
  padding: var(--spacing-6) var(--spacing-12);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-500);
  color: var(--color-content-secondary);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 150ms ease;
  font-family: var(--font-family-primary);
}

.lg-tabs__trigger:hover {
  color: var(--color-content-primary);
}

.lg-tabs__trigger--active {
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.lg-tabs__trigger:focus-visible {
  outline: 2px solid var(--grass-600);
  outline-offset: 2px;
}

.lg-tabs__content {
  margin-top: var(--spacing-16);
}
</style>
