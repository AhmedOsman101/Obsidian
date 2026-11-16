<script setup lang="ts">
import { computed, ref } from "vue";

export interface VizStep {
  /** Short step name */
  title: string;
  /** One or two sentences of explanation */
  detail?: string;
  /** Exam-relevant side note, shown smaller */
  note?: string;
}

const props = withDefaults(
  defineProps<{
    steps: VizStep[];
    label?: string;
  }>(),
  { label: "Walkthrough" },
);

const index = ref(0);
const total = computed(() => props.steps.length);
const current = computed(() => props.steps[index.value]);
const progress = computed(() =>
  total.value <= 1 ? 100 : (index.value / (total.value - 1)) * 100,
);

function prev() {
  if (index.value > 0) index.value -= 1;
}
function next() {
  if (index.value < total.value - 1) index.value += 1;
}
function goTo(i: number) {
  if (i >= 0 && i < total.value) index.value = i;
}
</script>

<template>
  <div class="viz-stepper" role="group" :aria-label="label">
    <div class="viz-stepper__head">
      <span class="viz-stepper__label">{{ label }}</span>
      <span class="viz-stepper__count">{{ index + 1 }} / {{ total }}</span>
    </div>

    <div class="viz-stepper__track" aria-hidden="true">
      <div class="viz-stepper__fill" :style="{ width: `${progress}%` }" />
    </div>

    <div class="viz-stepper__body" aria-live="polite">
      <p class="viz-stepper__title">{{ current?.title }}</p>
      <p v-if="current?.detail" class="viz-stepper__detail">
        {{ current.detail }}
      </p>
      <p v-if="current?.note" class="viz-stepper__note">{{ current.note }}</p>
    </div>

    <div class="viz-stepper__controls">
      <button
        type="button"
        class="viz-stepper__btn"
        :disabled="index === 0"
        @click="prev"
      >
        Previous
      </button>
      <div class="viz-stepper__dots">
        <button
          v-for="(s, i) in steps"
          :key="i"
          type="button"
          class="viz-stepper__dot"
          :class="{ 'is-active': i === index, 'is-done': i < index }"
          :aria-label="`Step ${i + 1}: ${s.title}`"
          :aria-current="i === index ? 'step' : undefined"
          @click="goTo(i)"
        />
      </div>
      <button
        type="button"
        class="viz-stepper__btn"
        :disabled="index === total - 1"
        @click="next"
      >
        Next
      </button>
    </div>
  </div>
</template>

<style scoped>
.viz-stepper {
  margin: 16px 0;
  padding: 12px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.viz-stepper__head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 8px;
}

.viz-stepper__label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
}

.viz-stepper__count {
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-text-2);
}

.viz-stepper__track {
  height: 4px;
  border-radius: 999px;
  background: var(--vp-c-divider);
  overflow: hidden;
}

.viz-stepper__fill {
  height: 100%;
  border-radius: inherit;
  background: var(--vp-c-brand-1);
  transition: width 0.25s ease;
}

.viz-stepper__body {
  min-height: 84px;
  padding: 12px 2px 4px;
}

.viz-stepper__title {
  margin: 0 0 6px;
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.viz-stepper__detail {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: var(--vp-c-text-1);
}

.viz-stepper__note {
  margin: 8px 0 0;
  padding-left: 10px;
  border-left: 2px solid var(--vp-c-brand-2);
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.viz-stepper__controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 10px;
}

.viz-stepper__btn {
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  cursor: pointer;
  transition:
    border-color 0.15s,
    color 0.15s;
}

.viz-stepper__btn:hover:not(:disabled) {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.viz-stepper__btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.viz-stepper__dots {
  display: flex;
  gap: 6px;
}

.viz-stepper__dot {
  width: 9px;
  height: 9px;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: var(--vp-c-divider);
  cursor: pointer;
  transition:
    transform 0.15s,
    background 0.15s;
}

.viz-stepper__dot.is-done {
  background: var(--vp-c-brand-2);
}

.viz-stepper__dot.is-active {
  background: var(--vp-c-brand-1);
  transform: scale(1.5);
}
</style>
