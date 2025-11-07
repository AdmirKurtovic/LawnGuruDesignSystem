<template>
  <div class="color-swatch-wrapper">
    <div
      class="color-swatch"
      :style="{ backgroundColor: color }"
      :title="color"
    ></div>
    <div class="color-info">
      <span class="color-name">{{ name }}</span>
      <span class="color-hex">{{ color }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.color-swatch-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 6px;
  transition: background-color 0.15s ease;
}

.color-swatch-wrapper:hover {
  background-color: #F6F6F6;
}

.color-swatch {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.color-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.color-name {
  font-size: 14px;
  font-weight: 600;
  color: #0B0B0B;
}

.color-hex {
  font-size: 13px;
  font-family: 'Monaco', 'Courier New', monospace;
  color: #2A2A2A;
}
</style>
