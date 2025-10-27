<template>
  <div class="lg-command">
    <div class="lg-command__search">
      <svg
        class="lg-command__search-icon"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
      <input
        ref="searchInput"
        v-model="searchQuery"
        type="text"
        class="lg-command__search-input"
        :placeholder="placeholder"
        @keydown.down.prevent="highlightNext"
        @keydown.up.prevent="highlightPrevious"
        @keydown.enter.prevent="selectHighlighted"
      />
    </div>

    <div v-if="filteredGroups.length > 0" class="lg-command__groups">
      <div
        v-for="group in filteredGroups"
        :key="group.heading"
        class="lg-command__group"
      >
        <div v-if="group.heading" class="lg-command__group-heading">
          {{ group.heading }}
        </div>

        <div class="lg-command__items">
          <button
            v-for="(item, index) in group.items"
            :key="item.value"
            class="lg-command__item"
            :class="{
              'lg-command__item--highlighted': isHighlighted(group.heading, index)
            }"
            @click="selectItem(item)"
            @mouseenter="setHighlighted(group.heading, index)"
          >
            <component
              v-if="item.icon"
              :is="item.icon"
              class="lg-command__item-icon"
            />
            <svg
              v-else
              class="lg-command__item-icon"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="lg-command__item-label">{{ item.label }}</span>
            <kbd v-if="item.shortcut" class="lg-command__item-shortcut">
              {{ item.shortcut }}
            </kbd>
          </button>
        </div>
      </div>
    </div>

    <div v-else class="lg-command__empty">
      {{ emptyMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Type a command or search...'
  },
  groups: {
    type: Array,
    required: true,
    default: () => []
  },
  emptyMessage: {
    type: String,
    default: 'No results found.'
  }
})

const emit = defineEmits(['select'])

const searchQuery = ref('')
const highlightedGroup = ref(null)
const highlightedIndex = ref(0)
const searchInput = ref(null)

const filteredGroups = computed(() => {
  if (!searchQuery.value) return props.groups

  const query = searchQuery.value.toLowerCase()

  return props.groups
    .map(group => ({
      ...group,
      items: group.items.filter(item => {
        return item.label.toLowerCase().includes(query) ||
               item.value?.toLowerCase().includes(query)
      })
    }))
    .filter(group => group.items.length > 0)
})

const getAllItems = () => {
  const items = []
  filteredGroups.value.forEach(group => {
    group.items.forEach((item, index) => {
      items.push({ group: group.heading, index, item })
    })
  })
  return items
}

const isHighlighted = (groupHeading, index) => {
  return highlightedGroup.value === groupHeading && highlightedIndex.value === index
}

const setHighlighted = (groupHeading, index) => {
  highlightedGroup.value = groupHeading
  highlightedIndex.value = index
}

const highlightNext = () => {
  const allItems = getAllItems()
  if (allItems.length === 0) return

  const currentItemIndex = allItems.findIndex(item =>
    item.group === highlightedGroup.value && item.index === highlightedIndex.value
  )

  if (currentItemIndex < allItems.length - 1) {
    const nextItem = allItems[currentItemIndex + 1]
    setHighlighted(nextItem.group, nextItem.index)
  } else if (allItems.length > 0) {
    const firstItem = allItems[0]
    setHighlighted(firstItem.group, firstItem.index)
  }
}

const highlightPrevious = () => {
  const allItems = getAllItems()
  if (allItems.length === 0) return

  const currentItemIndex = allItems.findIndex(item =>
    item.group === highlightedGroup.value && item.index === highlightedIndex.value
  )

  if (currentItemIndex > 0) {
    const prevItem = allItems[currentItemIndex - 1]
    setHighlighted(prevItem.group, prevItem.index)
  } else if (allItems.length > 0) {
    const lastItem = allItems[allItems.length - 1]
    setHighlighted(lastItem.group, lastItem.index)
  }
}

const selectHighlighted = () => {
  const allItems = getAllItems()
  const highlightedItem = allItems.find(item =>
    item.group === highlightedGroup.value && item.index === highlightedIndex.value
  )

  if (highlightedItem) {
    selectItem(highlightedItem.item)
  }
}

const selectItem = (item) => {
  emit('select', item)
  searchQuery.value = ''
}

// Initialize first item as highlighted
if (props.groups.length > 0 && props.groups[0].items.length > 0) {
  highlightedGroup.value = props.groups[0].heading
  highlightedIndex.value = 0
}
</script>

<style scoped>
.lg-command {
  width: 100%;
  max-width: 640px;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-20);
  border-radius: var(--radius-md);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.lg-command__search {
  display: flex;
  align-items: center;
  gap: var(--spacing-12);
  padding: var(--spacing-12) var(--spacing-16);
  border-bottom: 1px solid var(--color-border-15);
}

.lg-command__search-icon {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  color: var(--color-content-tertiary);
}

.lg-command__search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--font-family-primary);
  font-size: var(--font-size-15);
  color: var(--color-content-primary);
}

.lg-command__search-input::placeholder {
  color: var(--color-content-placeholder);
}

.lg-command__groups {
  max-height: 400px;
  overflow-y: auto;
  padding: var(--spacing-8);
}

.lg-command__group {
  margin-bottom: var(--spacing-8);
}

.lg-command__group:last-child {
  margin-bottom: 0;
}

.lg-command__group-heading {
  padding: var(--spacing-8) var(--spacing-12);
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-600);
  color: var(--color-content-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.lg-command__items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.lg-command__item {
  display: flex;
  align-items: center;
  gap: var(--spacing-12);
  padding: var(--spacing-8) var(--spacing-12);
  background: transparent;
  border: none;
  border-radius: var(--radius-sm);
  font-family: var(--font-family-primary);
  font-size: var(--font-size-14);
  color: var(--color-content-primary);
  text-align: left;
  cursor: pointer;
  transition: all 150ms ease;
}

.lg-command__item:hover,
.lg-command__item--highlighted {
  background: var(--color-bg-secondary);
}

.lg-command__item-icon {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  color: var(--color-content-tertiary);
}

.lg-command__item-label {
  flex: 1;
}

.lg-command__item-shortcut {
  padding: 2px 6px;
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-500);
  color: var(--color-content-tertiary);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-15);
  border-radius: var(--radius-sm);
  font-family: var(--font-family-mono, monospace);
}

.lg-command__empty {
  padding: var(--spacing-24);
  text-align: center;
  font-size: var(--font-size-14);
  color: var(--color-content-tertiary);
}
</style>
