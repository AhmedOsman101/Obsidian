<script setup lang="ts">
import { computed, ref } from "vue";

const props = withDefaults(
  defineProps<{
    /** Pipeline stages, in order. Defaults to a classic 5-stage pipeline. */
    stages?: string[];
    /** Figure title. */
    title?: string;
    /** Initial instruction count (adjustable at runtime). */
    initialN?: number;
  }>(),
  {
    stages: () => ["IF", "ID", "EX", "MEM", "WB"],
    title: "Pipeline scheduler",
    initialN: 10,
  }
);

const stageCount = computed(() => props.stages.length);
const n = ref(props.initialN);
/** Index of the stage with a 2-cycle service time, or null for the ideal case. */
const slowStage = ref<number | null>(null);

interface Cell {
  stage: number;
  start: number;
  span: number;
}

interface SimResult {
  rows: Cell[][];
  cycles: number;
}

/** In-order, single-issue pipeline with per-stage service times. */
function simulate(count: number, slow: number | null): SimResult {
  const service = props.stages.map((_, s) => (s === slow ? 2 : 1));
  const avail = props.stages.map(() => 0); // earliest cycle each stage is free
  const rows: Cell[][] = [];
  let cycles = 0;

  for (let i = 0; i < count; i++) {
    let t = 0;
    const cells: Cell[] = [];
    for (let s = 0; s < props.stages.length; s++) {
      const start = Math.max(t, avail[s]);
      const span = service[s];
      avail[s] = start + span;
      cells.push({ stage: s, start, span });
      t = start + span;
    }
    rows.push(cells);
    cycles = Math.max(cycles, t);
  }

  return { rows, cycles };
}

const sim = computed(() => simulate(n.value, slowStage.value));
const idealCycles = computed(() => stageCount.value + n.value - 1);
const cycleCount = computed(() => sim.value.cycles);
const cycles = computed(() => Array.from({ length: cycleCount.value }, (_, i) => i + 1));

const formula = computed(() =>
  slowStage.value === null
    ? `cycles = k + n − 1 = ${stageCount.value} + ${n.value} − 1 = ${cycleCount.value}`
    : `cycles = k + 2n − 1 = ${stageCount.value} + ${2 * n.value} − 1 = ${cycleCount.value}  (slowest stage sets the pace)`
);

const hovered = ref<{ i: number; cell: Cell } | null>(null);
const hoverLabel = computed(() => {
  if (!hovered.value) return "Hover a cell to inspect it";
  const { i, cell } = hovered.value;
  const stage = props.stages[cell.stage];
  const span = cell.span > 1 ? `, occupies ${cell.span} cycles` : "";
  return `I${i + 1} in ${stage} at cycle ${cell.start + 1}${span}`;
});

/** Flatten a row into table segments: stage cells and the stall bubbles between them. */
function segments(row: Cell[]): Array<{ kind: "stage" | "bubble"; stage?: number; start: number; span: number }> {
  const out: Array<{ kind: "stage" | "bubble"; stage?: number; start: number; span: number }> = [];
  let cursor = 0;
  for (const cell of row) {
    if (cell.start > cursor) out.push({ kind: "bubble", start: cursor, span: cell.start - cursor });
    out.push({ kind: "stage", stage: cell.stage, start: cell.start, span: cell.span });
    cursor = cell.start + cell.span;
  }
  return out;
}
</script>

<template>
  <figure class="viz-pipe">
    <figcaption class="viz-pipe__title">{{ title }}</figcaption>

    <div class="viz-pipe__controls">
      <label class="viz-pipe__ctl">
        Instructions: <strong>{{ n }}</strong>
        <input v-model.number="n" type="range" min="1" max="12" step="1" aria-label="Number of instructions" />
      </label>
      <div class="viz-pipe__ctl" role="group" aria-label="Slow stage">
        Slow stage:
        <button
          type="button"
          class="viz-pipe__chip"
          :class="{ 'is-active': slowStage === null }"
          @click="slowStage = null"
        >none</button>
        <button
          v-for="(s, i) in stages"
          :key="s"
          type="button"
          class="viz-pipe__chip"
          :class="{ 'is-active': slowStage === i }"
          @click="slowStage = i"
        >{{ s }}</button>
      </div>
    </div>

    <div class="viz-pipe__scroll">
      <table class="viz-pipe__grid">
        <thead>
          <tr>
            <th scope="col">Instr</th>
            <th v-for="c in cycles" :key="c" scope="col">{{ c }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in sim.rows" :key="i">
            <th scope="row">I{{ i + 1 }}</th>
            <td
              v-for="(seg, j) in segments(row)"
              :key="j"
              :colspan="seg.span"
              :class="[
                seg.kind === 'bubble' ? 'viz-pipe__bubble' : `is-stage-${seg.stage}`,
                'viz-pipe__cell',
              ]"
              @mouseenter="seg.kind === 'stage' && (hovered = { i, cell: row[seg.stage!] })"
              @mouseleave="hovered = null"
            >
              {{ seg.kind === "bubble" ? "·" : stages[seg.stage!] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="viz-pipe__status" aria-live="polite">{{ hoverLabel }}</p>
    <p class="viz-pipe__formula">
      {{ formula }}
      <span v-if="slowStage !== null">— the same {{ n }} instructions take {{ cycleCount - idealCycles }} extra cycles vs ideal</span>
    </p>
  </figure>
</template>

<style scoped>
.viz-pipe {
  margin: 16px 0;
  padding: 12px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.viz-pipe__title {
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.viz-pipe__controls {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
  margin-bottom: 10px;
}

.viz-pipe__ctl {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.viz-pipe__ctl input[type="range"] {
  width: 140px;
  accent-color: var(--vp-c-brand-1);
}

.viz-pipe__chip {
  padding: 3px 10px;
  font-size: 12px;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  cursor: pointer;
}

.viz-pipe__chip.is-active {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.viz-pipe__scroll {
  overflow-x: auto;
}

.viz-pipe__grid {
  border-collapse: collapse;
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
}

.viz-pipe__grid th,
.viz-pipe__grid td {
  border: 1px solid var(--vp-c-divider);
  padding: 5px 8px;
  text-align: center;
  min-width: 30px;
}

.viz-pipe__grid thead th {
  color: var(--vp-c-text-2);
  font-weight: 600;
}

.viz-pipe__grid tbody th {
  text-align: left;
  color: var(--vp-c-text-1);
}

.viz-pipe__cell {
  color: var(--vp-c-text-1);
}

.viz-pipe__cell.is-stage-0 { background: color-mix(in srgb, var(--vp-c-brand-1) 18%, transparent); }
.viz-pipe__cell.is-stage-1 { background: color-mix(in srgb, var(--vp-c-brand-1) 32%, transparent); }
.viz-pipe__cell.is-stage-2 { background: color-mix(in srgb, var(--vp-c-brand-1) 46%, transparent); }
.viz-pipe__cell.is-stage-3 { background: color-mix(in srgb, var(--vp-c-brand-1) 60%, transparent); }
.viz-pipe__cell.is-stage-4 { background: color-mix(in srgb, var(--vp-c-brand-1) 74%, transparent); }

.viz-pipe__bubble {
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 4px,
    var(--vp-c-divider) 4px,
    var(--vp-c-divider) 5px
  );
  color: var(--vp-c-text-2);
}

.viz-pipe__status {
  margin: 10px 0 0;
  min-height: 1.2em;
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.viz-pipe__formula {
  margin: 6px 0 0;
  font-size: 12px;
  color: var(--vp-c-text-2);
}
</style>
