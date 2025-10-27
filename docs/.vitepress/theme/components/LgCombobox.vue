<template>
  <div class="lg-combobox" ref="comboboxRef">
    <label v-if="label" class="lg-combobox__label">{{ label }}</label>

    <button
      class="lg-combobox__trigger"
      :class="{ 'lg-combobox__trigger--open': isOpen }"
      @click="toggleDropdown"
      :aria-expanded="isOpen"
    >
      <span class="lg-combobox__value">
        {{ selectedOption?.label || placeholder }}
      </span>
      <svg
        class="lg-combobox__icon"
        :class="{ 'lg-combobox__icon--open': isOpen }"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>

    <div v-if="isOpen" class="lg-combobox__dropdown">
      <div class="lg-combobox__search">
        <svg
          class="lg-combobox__search-icon"
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
          class="lg-combobox__search-input"
          placeholder="Search..."
          @keydown.escape="closeDropdown"
          @keydown.down.prevent="highlightNext"
          @keydown.up.prevent="highlightPrevious"
          @keydown.enter.prevent="selectHighlighted"
        />
      </div>

      <div class="lg-combobox__options">
        <div
          v-for="(option, index) in filteredOptions"
          :key="option.value"
          class="lg-combobox__option"
          :class="{
            'lg-combobox__option--selected': option.value === modelValue,
            'lg-combobox__option--highlighted': index === highlightedIndex
          }"
          @click="selectOption(option)"
          @mouseenter="highlightedIndex = index"
        >
          <svg
            v-if="option.value === modelValue"
            class="lg-combobox__check"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>{{ option.label }}</span>
          <span v-if="option.description" class="lg-combobox__option-description">
            {{ option.description }}
          </span>
        </div>

        <div v-if="filteredOptions.length === 0" class="lg-combobox__empty">
          No results found.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Select option...'
  },
  options: {
    type: Array,
    required: true,
    default: () => []
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const searchQuery = ref('')
const highlightedIndex = ref(0)
const comboboxRef = ref(null)
const searchInput = ref(null)

const selectedOption = computed(() => {
  return props.options.find(opt => opt.value === props.modelValue)
})

const filteredOptions = computed(() => {
  if (!searchQuery.value) return props.options

  const query = searchQuery.value.toLowerCase()
  return props.options.filter(option => {
    return option.label.toLowerCase().includes(query) ||
           option.description?.toLowerCase().includes(query)
  })
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => {
      searchInput.value?.focus()
    })
  }
}

const closeDropdown = () => {
  isOpen.value = false
  searchQuery.value = ''
  highlightedIndex.value = 0
}

const selectOption = (option) => {
  emit('update:modelValue', option.value)
  closeDropdown()
}

const selectHighlighted = () => {
  if (filteredOptions.value[highlightedIndex.value]) {
    selectOption(filteredOptions.value[highlightedIndex.value])
  }
}

const highlightNext = () => {
  if (highlightedIndex.value < filteredOptions.value.length - 1) {
    highlightedIndex.value++
  }
}

const highlightPrevious = () => {
  if (highlightedIndex.value > 0) {
    highlightedIndex.value--
  }
}

const handleClickOutside = (event) => {
  if (comboboxRef.value && !comboboxRef.value.contains(event.target)) {
    closeDropdown()
  }
}

watch(isOpen, (newValue) => {
  if (newValue) {
    document.addEventListener('click', handleClickOutside)
  } else {
    document.removeEventListener('click', handleClickOutside)
  }
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.lg-combobox {
  position: relative;
  width: 100%;
}

.lg-combobox__label {
  display: block;
  margin-bottom: var(--spacing-8);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-500);
  color: var(--color-content-primary);
}

.lg-combobox__trigger {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--spacing-12);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-20);
  border-radius: var(--radius-sm);
  font-family: var(--font-family-primary);
  font-size: var(--font-size-14);
  color: var(--color-content-primary);
  cursor: pointer;
  transition: all 150ms ease;
}

.lg-combobox__trigger:hover {
  border-color: var(--color-border-30);
}

.lg-combobox__trigger--open {
  border-color: var(--grass-600);
}

.lg-combobox__value {
  flex: 1;
  text-align: left;
}

.lg-combobox__icon {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  color: var(--color-content-tertiary);
  transition: transform 200ms ease;
}

.lg-combobox__icon--open {
  transform: rotate(180deg);
}

.lg-combobox__dropdown {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  z-index: 50;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-20);
  border-radius: var(--radius-md);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.lg-combobox__search {
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
  padding: var(--spacing-12);
  border-bottom: 1px solid var(--color-border-15);
}

.lg-combobox__search-icon {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  color: var(--color-content-tertiary);
}

.lg-combobox__search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--font-family-primary);
  font-size: var(--font-size-14);
  color: var(--color-content-primary);
}

.lg-combobox__search-input::placeholder {
  color: var(--color-content-placeholder);
}

.lg-combobox__options {
  max-height: 300px;
  overflow-y: auto;
  padding: var(--spacing-4);
}

.lg-combobox__option {
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
  padding: var(--spacing-8) var(--spacing-12);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-14);
  color: var(--color-content-primary);
  cursor: pointer;
  transition: all 150ms ease;
}

.lg-combobox__option:hover,
.lg-combobox__option--highlighted {
  background: var(--color-bg-secondary);
}

.lg-combobox__option--selected {
  background: var(--grass-50);
  color: var(--grass-900);
}

.lg-combobox__check {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  color: var(--grass-700);
}

.lg-combobox__option-description {
  margin-left: auto;
  font-size: var(--font-size-12);
  color: var(--color-content-tertiary);
}

.lg-combobox__empty {
  padding: var(--spacing-16);
  text-align: center;
  font-size: var(--font-size-14);
  color: var(--color-content-tertiary);
}
</style>
