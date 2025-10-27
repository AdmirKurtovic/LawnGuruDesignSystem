<template>
  <nav class="lg-pagination" role="navigation" aria-label="Pagination">
    <button
      class="lg-pagination__button"
      :disabled="currentPage === 1"
      @click="goToPage(currentPage - 1)"
      aria-label="Previous page"
    >
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
      </svg>
      Previous
    </button>

    <div class="lg-pagination__pages">
      <button
        v-for="page in visiblePages"
        :key="page"
        :class="[
          'lg-pagination__page',
          { 'lg-pagination__page--active': page === currentPage },
          { 'lg-pagination__page--ellipsis': page === '...' }
        ]"
        :disabled="page === '...'"
        @click="page !== '...' && goToPage(page)"
      >
        {{ page }}
      </button>
    </div>

    <button
      class="lg-pagination__button"
      :disabled="currentPage === totalPages"
      @click="goToPage(currentPage + 1)"
      aria-label="Next page"
    >
      Next
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
      </svg>
    </button>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  siblingCount: {
    type: Number,
    default: 1
  }
})

const emit = defineEmits(['update:currentPage'])

const visiblePages = computed(() => {
  const totalPageNumbers = props.siblingCount * 2 + 5

  if (totalPageNumbers >= props.totalPages) {
    return Array.from({ length: props.totalPages }, (_, i) => i + 1)
  }

  const leftSiblingIndex = Math.max(props.currentPage - props.siblingCount, 1)
  const rightSiblingIndex = Math.min(props.currentPage + props.siblingCount, props.totalPages)

  const shouldShowLeftDots = leftSiblingIndex > 2
  const shouldShowRightDots = rightSiblingIndex < props.totalPages - 1

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * props.siblingCount
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1)
    return [...leftRange, '...', props.totalPages]
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * props.siblingCount
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => props.totalPages - rightItemCount + i + 1
    )
    return [1, '...', ...rightRange]
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i
    )
    return [1, '...', ...middleRange, '...', props.totalPages]
  }

  return []
})

const goToPage = (page) => {
  if (page >= 1 && page <= props.totalPages) {
    emit('update:currentPage', page)
  }
}
</script>

<style scoped>
.lg-pagination {
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
}

.lg-pagination__button {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-6);
  padding: var(--spacing-8) var(--spacing-12);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-500);
  font-family: var(--font-family-primary);
  color: var(--color-content-primary);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-20);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 150ms ease;
}

.lg-pagination__button:hover:not(:disabled) {
  background: var(--color-bg-secondary);
}

.lg-pagination__button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.lg-pagination__pages {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
}

.lg-pagination__page {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-500);
  font-family: var(--font-family-primary);
  color: var(--color-content-primary);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-20);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 150ms ease;
}

.lg-pagination__page:hover:not(.lg-pagination__page--active):not(.lg-pagination__page--ellipsis) {
  background: var(--color-bg-secondary);
}

.lg-pagination__page--active {
  background: var(--grass-700);
  color: white;
  border-color: var(--grass-700);
}

.lg-pagination__page--ellipsis {
  border: none;
  background: transparent;
  cursor: default;
}
</style>
