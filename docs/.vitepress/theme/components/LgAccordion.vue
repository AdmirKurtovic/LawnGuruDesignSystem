<template>
  <div class="lg-accordion">
    <slot></slot>
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'single',
    validator: (value) => ['single', 'multiple'].includes(value)
  },
  collapsible: {
    type: Boolean,
    default: true
  }
})

const activeItems = ref(props.type === 'single' ? null : [])

const toggleItem = (value) => {
  if (props.type === 'single') {
    if (activeItems.value === value && props.collapsible) {
      activeItems.value = null
    } else {
      activeItems.value = value
    }
  } else {
    const index = activeItems.value.indexOf(value)
    if (index > -1) {
      activeItems.value.splice(index, 1)
    } else {
      activeItems.value.push(value)
    }
  }
}

const isActive = (value) => {
  if (props.type === 'single') {
    return activeItems.value === value
  }
  return activeItems.value.includes(value)
}

provide('accordion', {
  toggleItem,
  isActive
})
</script>

<style scoped>
.lg-accordion {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
}
</style>
