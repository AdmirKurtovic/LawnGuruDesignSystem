<template>
  <div class="lg-calendar">
    <div class="lg-calendar__header">
      <button
        class="lg-calendar__nav"
        @click="previousMonth"
        aria-label="Previous month"
      >
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
      </button>

      <div class="lg-calendar__title">
        {{ monthNames[currentMonth] }} {{ currentYear }}
      </div>

      <button
        class="lg-calendar__nav"
        @click="nextMonth"
        aria-label="Next month"
      >
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>

    <div class="lg-calendar__weekdays">
      <div v-for="day in weekDays" :key="day" class="lg-calendar__weekday">
        {{ day }}
      </div>
    </div>

    <div class="lg-calendar__days">
      <button
        v-for="day in calendarDays"
        :key="day.key"
        class="lg-calendar__day"
        :class="{
          'lg-calendar__day--outside': day.isOutsideMonth,
          'lg-calendar__day--today': day.isToday,
          'lg-calendar__day--selected': day.isSelected
        }"
        @click="selectDate(day)"
        :disabled="day.isOutsideMonth"
      >
        {{ day.date }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Date,
    default: () => new Date()
  }
})

const emit = defineEmits(['update:modelValue'])

const currentMonth = ref(props.modelValue.getMonth())
const currentYear = ref(props.modelValue.getFullYear())
const selectedDate = ref(props.modelValue)

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const calendarDays = computed(() => {
  const firstDay = new Date(currentYear.value, currentMonth.value, 1)
  const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0)
  const prevLastDay = new Date(currentYear.value, currentMonth.value, 0)

  const firstDayWeekday = firstDay.getDay()
  const lastDayDate = lastDay.getDate()
  const prevLastDayDate = prevLastDay.getDate()

  const days = []

  // Previous month days
  for (let i = firstDayWeekday - 1; i >= 0; i--) {
    days.push({
      date: prevLastDayDate - i,
      isOutsideMonth: true,
      isToday: false,
      isSelected: false,
      key: `prev-${prevLastDayDate - i}`
    })
  }

  // Current month days
  const today = new Date()
  for (let i = 1; i <= lastDayDate; i++) {
    const date = new Date(currentYear.value, currentMonth.value, i)
    days.push({
      date: i,
      isOutsideMonth: false,
      isToday: date.toDateString() === today.toDateString(),
      isSelected: selectedDate.value && date.toDateString() === selectedDate.value.toDateString(),
      key: `current-${i}`,
      fullDate: date
    })
  }

  // Next month days
  const remainingDays = 42 - days.length // 6 weeks * 7 days
  for (let i = 1; i <= remainingDays; i++) {
    days.push({
      date: i,
      isOutsideMonth: true,
      isToday: false,
      isSelected: false,
      key: `next-${i}`
    })
  }

  return days
})

const previousMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
}

const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
}

const selectDate = (day) => {
  if (!day.isOutsideMonth && day.fullDate) {
    selectedDate.value = day.fullDate
    emit('update:modelValue', day.fullDate)
  }
}
</script>

<style scoped>
.lg-calendar {
  width: 100%;
  max-width: 300px;
  padding: var(--spacing-12);
  border: 1px solid var(--color-border-15);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
}

.lg-calendar__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-16);
}

.lg-calendar__title {
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-600);
  color: var(--color-content-primary);
}

.lg-calendar__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--color-content-secondary);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 150ms ease;
}

.lg-calendar__nav:hover {
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
}

.lg-calendar__weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-8);
}

.lg-calendar__weekday {
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-500);
  color: var(--color-content-tertiary);
  text-align: center;
  padding: var(--spacing-4) 0;
}

.lg-calendar__days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: var(--spacing-4);
}

.lg-calendar__day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-13);
  color: var(--color-content-primary);
  background: transparent;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 150ms ease;
  position: relative;
}

.lg-calendar__day:hover:not(:disabled) {
  background: var(--color-bg-secondary);
}

.lg-calendar__day--outside {
  color: var(--color-content-disabled);
  cursor: default;
}

.lg-calendar__day--today {
  background: var(--color-bg-secondary);
  font-weight: var(--font-weight-600);
}

.lg-calendar__day--selected {
  background: var(--grass-700);
  color: var(--neutral-00);
  font-weight: var(--font-weight-600);
}

.lg-calendar__day--selected:hover {
  background: var(--grass-800);
}
</style>
