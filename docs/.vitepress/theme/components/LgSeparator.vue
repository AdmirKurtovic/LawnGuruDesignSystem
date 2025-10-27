<template>
  <div
    :class="[
      'lg-separator',
      `lg-separator--${orientation}`
    ]"
    role="separator"
    :aria-orientation="orientation"
  ></div>
</template>

<script setup>
const props = defineProps({
  orientation: {
    type: String,
    default: 'horizontal',
    validator: (value) => ['horizontal', 'vertical'].includes(value)
  }
})
</script>

<style scoped>
.lg-separator {
  background: var(--color-border-15);
  flex-shrink: 0;
}

.lg-separator--horizontal {
  height: 1px;
  width: 100%;
}

.lg-separator--vertical {
  width: 1px;
  height: 100%;
  min-height: 20px;
}
</style>
