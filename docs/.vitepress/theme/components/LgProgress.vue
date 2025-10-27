<template>
  <div class="lg-progress">
    <div class="lg-progress__track">
      <div
        class="lg-progress__indicator"
        :style="{ width: `${value}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  value: {
    type: Number,
    default: 0,
    validator: (value) => value >= 0 && value <= 100
  }
})
</script>

<style scoped>
.lg-progress {
  width: 100%;
}

.lg-progress__track {
  position: relative;
  height: 8px;
  width: 100%;
  overflow: hidden;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-full);
}

.lg-progress__indicator {
  height: 100%;
  background: var(--grass-700);
  border-radius: var(--radius-full);
  transition: width 300ms ease;
}
</style>
