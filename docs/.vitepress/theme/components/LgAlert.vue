<template>
  <div class="lg-alert" :class="alertClasses" role="alert">
    <svg
      v-if="!hideIcon"
      class="lg-alert__icon"
      width="16"
      height="16"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        v-if="variant === 'default' || variant === 'info'"
        d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77617 5.99999 8.00003 6.22385 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
      <path
        v-else-if="variant === 'destructive' || variant === 'error'"
        d="M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
      <path
        v-else-if="variant === 'success'"
        d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
      <path
        v-else-if="variant === 'warning'"
        d="M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>

    <div class="lg-alert__content">
      <h5 v-if="title" class="lg-alert__title">{{ title }}</h5>
      <div class="lg-alert__description">
        <slot>{{ description }}</slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'destructive', 'error', 'success', 'warning', 'info'].includes(value)
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  hideIcon: {
    type: Boolean,
    default: false
  }
})

const alertClasses = computed(() => [`lg-alert--${props.variant}`])
</script>

<style scoped>
.lg-alert {
  position: relative;
  width: 100%;
  border-radius: var(--radius-md);
  border: 1px solid;
  padding: var(--spacing-12) var(--spacing-16);
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-12);
}

/* Default / Info Variant */
.lg-alert--default,
.lg-alert--info {
  background: var(--color-bg-secondary);
  border-color: var(--color-border-20);
  color: var(--color-content-primary);
}

.lg-alert--default .lg-alert__icon,
.lg-alert--info .lg-alert__icon {
  color: var(--grass-700);
}

/* Destructive / Error Variant */
.lg-alert--destructive,
.lg-alert--error {
  background: rgb(254 242 242);
  border-color: rgb(254 202 202);
  color: rgb(153 27 27);
}

.lg-alert--destructive .lg-alert__icon,
.lg-alert--error .lg-alert__icon {
  color: rgb(220 38 38);
}

/* Success Variant */
.lg-alert--success {
  background: rgb(240 253 244);
  border-color: rgb(187 247 208);
  color: rgb(21 128 61);
}

.lg-alert--success .lg-alert__icon {
  color: var(--grass-700);
}

/* Warning Variant */
.lg-alert--warning {
  background: rgb(254 252 232);
  border-color: rgb(254 240 138);
  color: rgb(133 77 14);
}

.lg-alert--warning .lg-alert__icon {
  color: rgb(202 138 4);
}

/* Icon */
.lg-alert__icon {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-top: 2px;
}

/* Content */
.lg-alert__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.lg-alert__title {
  margin: 0;
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-600);
  line-height: var(--font-height-20);
}

.lg-alert__description {
  font-size: var(--font-size-14);
  line-height: var(--font-height-20);
  opacity: 0.9;
}
</style>
