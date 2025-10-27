<template>
  <div class="lg-carousel">
    <button
      class="lg-carousel__nav lg-carousel__nav--prev"
      @click="previous"
      :disabled="currentIndex === 0 && !loop"
      aria-label="Previous slide"
    >
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
      </svg>
    </button>

    <div class="lg-carousel__viewport" ref="viewport">
      <div
        class="lg-carousel__container"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="lg-carousel__item"
        >
          <slot name="item" :item="item" :index="index">
            <div class="lg-carousel__placeholder">
              Slide {{ index + 1 }} of {{ items.length }}
            </div>
          </slot>
        </div>
      </div>
    </div>

    <button
      class="lg-carousel__nav lg-carousel__nav--next"
      @click="next"
      :disabled="currentIndex === items.length - 1 && !loop"
      aria-label="Next slide"
    >
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
      </svg>
    </button>

    <div v-if="showDots" class="lg-carousel__dots">
      <button
        v-for="(item, index) in items"
        :key="`dot-${index}`"
        class="lg-carousel__dot"
        :class="{ 'lg-carousel__dot--active': index === currentIndex }"
        @click="goTo(index)"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  loop: {
    type: Boolean,
    default: false
  },
  showDots: {
    type: Boolean,
    default: true
  },
  autoplay: {
    type: Boolean,
    default: false
  },
  interval: {
    type: Number,
    default: 3000
  }
})

const currentIndex = ref(0)
const viewport = ref(null)

const next = () => {
  if (currentIndex.value < props.items.length - 1) {
    currentIndex.value++
  } else if (props.loop) {
    currentIndex.value = 0
  }
}

const previous = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else if (props.loop) {
    currentIndex.value = props.items.length - 1
  }
}

const goTo = (index) => {
  currentIndex.value = index
}
</script>

<style scoped>
.lg-carousel {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--spacing-16);
}

.lg-carousel__viewport {
  flex: 1;
  overflow: hidden;
  border-radius: var(--radius-md);
}

.lg-carousel__container {
  display: flex;
  transition: transform 300ms ease;
}

.lg-carousel__item {
  flex: 0 0 100%;
  min-width: 100%;
}

.lg-carousel__placeholder {
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 100%);
  border-radius: var(--radius-md);
  font-size: var(--font-size-14);
  color: var(--color-content-secondary);
}

.lg-carousel__nav {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-20);
  border-radius: 50%;
  cursor: pointer;
  color: var(--color-content-primary);
  transition: all 150ms ease;
}

.lg-carousel__nav:hover:not(:disabled) {
  background: var(--color-bg-secondary);
  border-color: var(--color-border-30);
}

.lg-carousel__nav:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.lg-carousel__dots {
  position: absolute;
  bottom: var(--spacing-12);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--spacing-8);
  padding: var(--spacing-8);
  background: rgba(0, 0, 0, 0.5);
  border-radius: var(--radius-full);
}

.lg-carousel__dot {
  width: 8px;
  height: 8px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 150ms ease;
}

.lg-carousel__dot:hover {
  background: rgba(255, 255, 255, 0.75);
}

.lg-carousel__dot--active {
  background: white;
  width: 24px;
  border-radius: var(--radius-full);
}
</style>
