<!--
  PointPlotter3D — interactive 3D point plotter for 3D transformations work.

  Usage:

  <script setup>
  import PointPlotter3D from '@viz/PointPlotter3D.vue'
  </script>

  <PointPlotter3D />

  Points are named by list position (A..Z then AA, AB...). Drag a point to
  move it in Y and Z, Shift-drag to move it along X. Drag the background to
  pan, wheel or pinch to zoom.
-->
<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

/* ---------------- types and small helpers ---------------- */

interface Pt {
  id: number;
  x: number;
  y: number;
  z: number;
  color: string;
  selected: boolean;
}

interface GhostPt {
  id: number;
  x: number;
  y: number;
  z: number;
}

type GridMode = "sheet" | "floor" | "none";
type ConstructionMode = "all" | "selected" | "hidden";
type SnapDrag = "0.5" | "1" | "off";
type RotAxis = "x" | "y" | "z";
type BothOrder = "rotateFirst" | "translateFirst";

const W = 900;
const H = 620;

const SEED_POINTS: Array<Omit<Pt, "selected">> = [
  { id: 1, x: 1, y: 3, z: 2, color: "#3b82f6" },
  { id: 2, x: 2, y: 3, z: 1, color: "#ef4444" },
];
const PALETTE = [
  "#3b82f6",
  "#ef4444",
  "#10b981",
  "#f59e0b",
  "#8b5cf6",
  "#06b6d4",
  "#ec4899",
  "#f97316",
];

const rad = (deg: number) => (deg * Math.PI) / 180;
const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));

/** Trimmed to at most 3 decimals, e.g. 1 -> "1", 2.5 -> "2.5". */
function fmtN(v: number): string {
  const snapped = Math.round(v * 1000) / 1000;
  if (Object.is(snapped, -0)) return "0";
  return snapped.toFixed(3).replace(/\.?0+$/, "");
}

/** A, B, ... Z, AA, AB, ... */
function pointName(index: number): string {
  let n = index + 1;
  let out = "";
  while (n > 0) {
    const rem = (n - 1) % 26;
    out = String.fromCharCode(65 + rem) + out;
    n = Math.floor((n - 1) / 26);
  }
  return out;
}

function rotateCoords(
  p: { x: number; y: number; z: number },
  axis: RotAxis,
  deg: number,
) {
  const c = Math.cos(rad(deg));
  const s = Math.sin(rad(deg));
  if (axis === "x") {
    // y' = y cos - z sin, z' = y sin + z cos
    return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c };
  }
  if (axis === "y") {
    // z' = z cos - x sin, x' = z sin + x cos
    return { x: p.z * s + p.x * c, y: p.y, z: p.z * c - p.x * s };
  }
  // x' = x cos - y sin, y' = x sin + y cos
  return { x: p.x * c - p.y * s, y: p.x * s + p.y * c, z: p.z };
}

/* ---------------- SSR-safe theme ---------------- */

const isDark = ref(false);

const paperColor = computed(() => (isDark.value ? "#1e1e2e" : "#fdfcf9"));
const sheetGrid = computed(() => (isDark.value ? "#2b2b3d" : "#e3e2da"));
const floorGrid = computed(() => (isDark.value ? "#34344a" : "#cdccc2"));
const ink = computed(() => (isDark.value ? "#cdd6f4" : "#1f2328"));
const inkSoft = computed(() => (isDark.value ? "#9399b2" : "#6a707c"));
const axisColor = computed(() => (isDark.value ? "#7f849c" : "#4b5563"));
const axisLabel = computed(() => (isDark.value ? "#bac2de" : "#4b5563"));
const ghostColor = computed(() => (isDark.value ? "#7f849c" : "#a3a3a3"));
const connectColor = computed(() => (isDark.value ? "#89b4fa" : "#2a6fdb"));

/* ---------------- state ---------------- */

const points = ref<Pt[]>(
  SEED_POINTS.map((p) => ({ ...p, selected: false })),
);
let nextId = 3;

/* Ruler-measured scale: 1 unit = 1 cm on the user's monitor at 1.0 (96 dpi nominal).
   Their display renders CSS px at half size, so default 0.25 puts 1 cell at 0.5 cm. */
const screenScale = ref(0.25);
const UNIT_PX = computed(() => (96 / 2.54) * screenScale.value);
const xAngle = ref(45);
const xDepth = ref(0.5);
const grid = ref<GridMode>("sheet");
const construction = ref<ConstructionMode>("all");
const snapDrag = ref<SnapDrag>("1");

const connectPoints = ref(true);
const closeShape = ref(false);
const showCoords = ref(false);
const showGhost = ref(true);

const transformTarget = ref<"all" | "selected">("all");
const rotAxis = ref<RotAxis>("z");
const rotAngle = ref(90);
const tx = ref(0);
const ty = ref(0);
const tz = ref(0);
const bothOrder = ref<BothOrder>("rotateFirst");

const ox = ref(W / 2);
const oy = ref(H / 2);
const zoom = ref(1);

const history = ref<string[]>([]);
const ghost = ref<GhostPt[] | null>(null);
const confirmClear = ref(false);
let confirmTimer: number | undefined;

const svgEl = ref<SVGSVGElement | null>(null);
const rowsEl = ref<HTMLDivElement | null>(null);

/* ---------------- projection ---------------- */

const scale = computed(() => UNIT_PX.value * zoom.value);  // px per unit, calibrated + zoom
const cellPx = computed(() => scale.value / 2);       // one grid cell = 0.5 unit
const aRad = computed(() => rad(xAngle.value));

function toScreen(x: number, y: number, z: number) {
  const c = scale.value;
  const r = xDepth.value;
  const a = aRad.value;
  return {
    sx: ox.value + c * (y - r * Math.cos(a) * x),
    sy: oy.value + c * (-z + r * Math.sin(a) * x),
  };
}

/** Fit the plot (points, ghost and construction box) into the view. */
function fitView() {
  const visibleConstruction =
    construction.value === "hidden"
      ? []
      : construction.value === "selected"
        ? points.value.filter((p) => p.selected)
        : points.value;
  const corners = visibleConstruction.flatMap((p) => [
    { x: 0, y: 0, z: 0 },
    { x: p.x, y: 0, z: 0 },
    { x: 0, y: p.y, z: 0 },
    { x: p.x, y: p.y, z: 0 },
    { x: 0, y: 0, z: p.z },
    { x: p.x, y: 0, z: p.z },
  ]);
  const all = [
    ...points.value.map((p) => ({ x: p.x, y: p.y, z: p.z })),
    ...(ghost.value ?? []).map((p) => ({ x: p.x, y: p.y, z: p.z })),
    ...corners,
  ];
  if (all.length === 0) {
    ox.value = W / 2;
    oy.value = H / 2;
    zoom.value = 1;
    return;
  }
  const c1 = UNIT_PX.value;
  const a = aRad.value;
  const r = xDepth.value;
  const offsets = all.map((p) => ({
    x: c1 * (p.y - r * Math.cos(a) * p.x),
    y: c1 * (-p.z + r * Math.sin(a) * p.x),
  }));
  const minX = Math.min(...offsets.map((p) => p.x));
  const maxX = Math.max(...offsets.map((p) => p.x));
  const minY = Math.min(...offsets.map((p) => p.y));
  const maxY = Math.max(...offsets.map((p) => p.y));
  const spanX = Math.max(maxX - minX, 1);
  const spanY = Math.max(maxY - minY, 1);
  const pad = showCoords.value ? 64 : 46;
  zoom.value = clamp(
    Math.min((W - pad * 2) / spanX, (H - pad * 2) / spanY),
    0.25,
    9,
  );
  ox.value = W / 2 - ((minX + maxX) / 2) * zoom.value;
  oy.value = H / 2 - ((minY + maxY) / 2) * zoom.value;
  // land the origin exactly on a grid intersection so the 45° X diagonal
  // passes through cell corners
  const c = cellPx.value;
  ox.value = Math.round(ox.value / c) * c;
  oy.value = Math.round(oy.value / c) * c;
}

/* ---------------- derived geometry ---------------- */

const nameById = computed(() => {
  const map = new Map<number, string>();
  points.value.forEach((p, i) => map.set(p.id, pointName(i)));
  return map;
});

const screenPts = computed(() =>
  points.value.map((p) => ({ ...p, ...toScreen(p.x, p.y, p.z) })),
);
const ghostScreenPts = computed(() =>
  (ghost.value ?? []).map((p) => ({ ...p, ...toScreen(p.x, p.y, p.z) })),
);

const constructionPoints = computed(() =>
  construction.value === "all"
    ? points.value
    : construction.value === "selected"
      ? points.value.filter((p) => p.selected)
      : [],
);

const tickValues = computed(() => ({
  x: [...new Set(constructionPoints.value.map((p) => p.x))].filter(
    (v) => Math.abs(v) > 1e-9,
  ),
  y: [...new Set(constructionPoints.value.map((p) => p.y))].filter(
    (v) => Math.abs(v) > 1e-9,
  ),
  z: [...new Set(constructionPoints.value.map((p) => p.z))].filter(
    (v) => Math.abs(v) > 1e-9,
  ),
}));

const selectedCount = computed(
  () => points.value.filter((p) => p.selected).length,
);
const transformDisabled = computed(
  () =>
    transformTarget.value === "selected" && selectedCount.value === 0,
);

const sheetVLines = computed(() => {
  if (grid.value !== "sheet") return [] as number[];
  const c = cellPx.value;
  const first = ((ox.value % c) + c) % c;
  const lines: number[] = [];
  for (let x = first; x <= W; x += c) lines.push(x);
  return lines;
});
const sheetHLines = computed(() => {
  if (grid.value !== "sheet") return [] as number[];
  const c = cellPx.value;
  const first = ((oy.value % c) + c) % c;
  const lines: number[] = [];
  for (let y = first; y <= H; y += c) lines.push(y);
  return lines;
});

const floorLines = computed(() => {
  if (grid.value !== "floor")
    return [] as Array<{
      from: [number, number, number];
      to: [number, number, number];
    }>;
  const pts = points.value;
  const xs = pts.map((p) => p.x);
  const ys = pts.map((p) => p.y);
  const xMin = (xs.length ? Math.floor(Math.min(...xs, 0)) : 0) - 1;
  const xMax = (xs.length ? Math.ceil(Math.max(...xs, 0)) : 0) + 1;
  const yMin = (ys.length ? Math.floor(Math.min(...ys, 0)) : 0) - 1;
  const yMax = (ys.length ? Math.ceil(Math.max(...ys, 0)) : 0) + 1;
  const lines: Array<{
    from: [number, number, number];
    to: [number, number, number];
  }> = [];
  for (let y = yMin; y <= yMax; y += 1)
    lines.push({ from: [xMin, y, 0], to: [xMax, y, 0] });
  for (let x = xMin; x <= xMax; x += 1)
    lines.push({ from: [x, yMin, 0], to: [x, yMax, 0] });
  return lines;
});

/** Exit distance of the ray o + t * d with the viewBox rect, t >= 0. */
function rayExit(ox0: number, oy0: number, dx: number, dy: number) {
  let t = Infinity;
  if (dx > 0) t = Math.min(t, (W - ox0) / dx);
  else if (dx < 0) t = Math.min(t, -ox0 / dx);
  if (dy > 0) t = Math.min(t, (H - oy0) / dy);
  else if (dy < 0) t = Math.min(t, -oy0 / dy);
  return Number.isFinite(t) ? t : 2000;
}

const axisMaxLength = computed(() => 0.66 * Math.min(W, H));

const axisGeometry = computed(() => {
  const origin = { x: ox.value, y: oy.value };
  const a = aRad.value;
  const dirs = [
    { axis: "x" as const, x: -Math.cos(a), y: Math.sin(a) },
    { axis: "y" as const, x: 1, y: 0 },
    { axis: "z" as const, x: 0, y: -1 },
  ];
  const len = axisMaxLength.value;
  return dirs.map((d) => {
    const clampPos = Math.min(rayExit(origin.x, origin.y, d.x, d.y) - 6, len);
    const clampNeg = Math.min(rayExit(origin.x, origin.y, -d.x, -d.y) - 6, len);
    const end = { x: origin.x + d.x * clampPos, y: origin.y + d.y * clampPos };
    const start = { x: origin.x - d.x * clampNeg, y: origin.y - d.y * clampNeg };

    const at = (tip: { x: number; y: number }, sign: 1 | -1) => {
      const bx = tip.x - sign * d.x * 12;
      const by = tip.y - sign * d.y * 12;
      const px = -d.y;
      const py = d.x;
      const half = 4.8;
      return [
        `${tip.x},${tip.y}`,
        `${bx + px * half},${by + py * half}`,
        `${bx - px * half},${by - py * half}`,
      ];
    };
    const arrowTip = at(end, 1);
    const arrowTail = at(start, -1);

    const label = {
      x: end.x - d.x * 32,
      y: end.y - d.y * 32,
    };
    return { axis: d.axis, start, end, arrowTip, arrowTail, label, origin };
  });
});

function tickScreen(axis: "x" | "y" | "z", value: number) {
  const a = aRad.value;
  const c = scale.value;
  const r = xDepth.value;
  const o = { x: ox.value, y: oy.value };
  if (axis === "x") {
    return {
      x: o.x + c * (-r * Math.cos(a) * value),
      y: o.y + c * (r * Math.sin(a) * value),
    };
  }
  if (axis === "y") return { x: o.x + c * value, y: o.y };
  return { x: o.x, y: o.y - c * value };
}

/** Clip a (possibly infinite) line through the canvas edges into the rect. */
function clipLineToRect(
  p1: { sx: number; sy: number },
  p2: { sx: number; sy: number },
) {
  const dx = p2.sx - p1.sx;
  const dy = p2.sy - p1.sy;
  const tVals: number[] = [];
  if (dx !== 0) {
    tVals.push(-p1.sx / dx, (W - p1.sx) / dx);
  }
  if (dy !== 0) {
    tVals.push(-p1.sy / dy, (H - p1.sy) / dy);
  }
  const onBoundary = tVals
    .map((t) => ({ sx: p1.sx + t * dx, sy: p1.sy + t * dy }))
    .filter(
      (q) => q.sx >= -0.5 && q.sx <= W + 0.5 && q.sy >= -0.5 && q.sy <= H + 0.5,
    );
  if (onBoundary.length < 2) return [p1, p2];
  let a = onBoundary[0];
  let b = onBoundary[0];
  const dist = (q: { sx: number; sy: number }) =>
    Math.hypot(q.sx - p1.sx, q.sy - p1.sy);
  for (const q of onBoundary) {
    if (dist(q) < dist(a)) a = q;
    if (dist(q) > dist(b)) b = q;
  }
  return [a, b];
}

const constructionCorners = (p: Pt): Array<[{ x: number; y: number; z: number }, { x: number; y: number; z: number }]> => [
  [{ x: 0, y: p.y, z: 0 }, { x: p.x, y: p.y, z: 0 }],
  [{ x: 0, y: 0, z: p.z }, { x: p.x, y: 0, z: p.z }],
  [{ x: p.x, y: 0, z: 0 }, { x: p.x, y: p.y, z: 0 }],
  [{ x: p.x, y: 0, z: 0 }, { x: p.x, y: 0, z: p.z }],
  [{ x: p.x, y: 0, z: p.z }, { x: p.x, y: p.y, z: p.z }],
  [{ x: p.x, y: p.y, z: 0 }, { x: p.x, y: p.y, z: p.z }],
];

const constructionLines = computed(() => {
  const out: Array<{ id: number; color: string; x1: number; y1: number; x2: number; y2: number }> = [];
  for (const p of screenPts.value) {
    if (!isConstructionVisible(p)) continue;
    for (const [a, b] of constructionCorners(p)) {
      const sa = toScreen(a.x, a.y, a.z);
      const sb = toScreen(b.x, b.y, b.z);
      const [c, d] = clipLineToRect(sa, sb);
      out.push({ id: p.id, color: p.color, x1: c.sx, y1: c.sy, x2: d.sx, y2: d.sy });
    }
  }
  return out;
});

/* ---------------- history ---------------- */

function snapshotPts() {
  return JSON.stringify(points.value);
}

function pushHistory() {
  history.value.push(snapshotPts());
  if (history.value.length > 50) history.value.shift();
}

function restore(serialized: string) {
  const parsed = JSON.parse(serialized) as Pt[];
  points.value = parsed.map((p) => ({ ...p }));
  nextId = Math.max(0, ...parsed.map((p) => p.id)) + 1;
}

function undo() {
  const last = history.value.pop();
  if (!last) return;
  restore(last);
  ghost.value = null;
}

/* ---------------- structural actions ---------------- */

function clearGhost() {
  ghost.value = null;
}

function addPoint() {
  pushHistory();
  clearGhost();
  const n = points.value.length;
  const p: Pt = {
    id: nextId++,
    x: 1,
    y: 2 + n,
    z: 2,
    color: PALETTE[(n + 1) % PALETTE.length],
    selected: false,
  };
  points.value.push(p);
}

function deletePoint(id: number) {
  const ix = points.value.findIndex((p) => p.id === id);
  if (ix === -1) return;
  pushHistory();
  clearGhost();
  points.value.splice(ix, 1);
}

function clearAll() {
  confirmClear.value = false;
  if (confirmTimer) window.clearTimeout(confirmTimer);
  pushHistory();
  clearGhost();
  points.value = [];
}

function requestClearAll() {
  if (confirmClear.value) {
    clearAll();
    return;
  }
  confirmClear.value = true;
  if (confirmTimer) window.clearTimeout(confirmTimer);
  confirmTimer = window.setTimeout(() => {
    confirmClear.value = false;
  }, 3000);
}

function setSelected(id: number, value: boolean) {
  const p = points.value.find((pt) => pt.id === id);
  if (p) p.selected = value;
}

function setCoordinate(id: number, axis: "x" | "y" | "z", raw: string) {
  const parsed = Number(raw);
  const p = points.value.find((pt) => pt.id === id);
  if (!p || !Number.isFinite(parsed)) return;
  pushHistory();
  p[axis] = parsed;
}

function setColor(id: number, raw: string) {
  const p = points.value.find((pt) => pt.id === id);
  if (!p) return;
  pushHistory();
  p.color = raw;
}

/* ---------------- reorder rows by drag ---------------- */

let reorderStartIndex = -1;
let reorderSnapshot = "";
let reorderRowHeight = 40;
let reorderListTop = 0;

function beginReorder(e: PointerEvent, index: number) {
  if (rowsEl.value === null) return;
  reorderStartIndex = index;
  reorderSnapshot = snapshotPts();
  const row = rowsEl.value.children[index] as HTMLElement | undefined;
  reorderRowHeight = row?.offsetHeight ?? 44;
  reorderListTop = rowsEl.value.getBoundingClientRect().top;
  const onMove = (ev: PointerEvent) => {
    const target = clamp(
      Math.floor((ev.clientY - reorderListTop) / reorderRowHeight),
      0,
      points.value.length - 1,
    );
    if (target !== reorderStartIndex) {
      const [moved] = points.value.splice(reorderStartIndex, 1);
      points.value.splice(target, 0, moved);
      reorderStartIndex = target;
    }
  };
  const onUp = () => {
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", onUp);
    window.removeEventListener("pointercancel", onUp);
    if (snapshotPts() !== reorderSnapshot) {
      history.value.push(reorderSnapshot);
      clearGhost();
    }
  };
  window.addEventListener("pointermove", onMove);
  window.addEventListener("pointerup", onUp);
  window.addEventListener("pointercancel", onUp);
}

/* ---------------- canvas gestures: pan, pinch, point drag ---------------- */

const activePointers = new Map<number, { x: number; y: number }>();
let gesture:
  | {
      kind: "pan";
      startX: number;
      startY: number;
      ox0: number;
      oy0: number;
    }
  | {
      kind: "point";
      id: number;
      startX: number;
      startY: number;
      before: Pt;
      snapshot: string;
      historyPushed: boolean;
      shiftKey: boolean;
    }
  | {
      kind: "pinch";
      dist0: number;
      ox0: number;
      oy0: number;
      zoom0: number;
      midVb: { x: number; y: number };
    }
  | null = null;
let listenersAttached = false;

function clientToViewBox(e: { clientX: number; clientY: number }) {
  const el = svgEl.value;
  if (!el) return { x: 0, y: 0, scale: 1 };
  const rect = el.getBoundingClientRect();
  const s = W / (rect.width || W);
  return {
    x: (e.clientX - rect.left) * s,
    y: (e.clientY - rect.top) * s,
    scale: s,
  };
}

function addWindowListeners() {
  if (listenersAttached) return;
  window.addEventListener("pointermove", onWindowPointerMove);
  window.addEventListener("pointerup", onWindowPointerUp);
  window.addEventListener("pointercancel", onWindowPointerUp);
  listenersAttached = true;
}

function removeWindowListeners() {
  window.removeEventListener("pointermove", onWindowPointerMove);
  window.removeEventListener("pointerup", onWindowPointerUp);
  window.removeEventListener("pointercancel", onWindowPointerUp);
  listenersAttached = false;
}

function pointerDistance(
  a: { x: number; y: number },
  b: { x: number; y: number },
) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function onSvgPointerDown(e: PointerEvent) {
  activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (activePointers.size === 2) {
    const [p1, p2] = [...activePointers.values()];
    gesture = {
      kind: "pinch",
      dist0: pointerDistance(p1, p2),
      ox0: ox.value,
      oy0: oy.value,
      zoom0: zoom.value,
      midVb: clientToViewBox({
        clientX: (p1.x + p2.x) / 2,
        clientY: (p1.y + p2.y) / 2,
      }),
    };
    addWindowListeners();
    return;
  }
  const vb = clientToViewBox(e);
  const target = e.target as SVGElement | null;
  const pointEl = target?.closest?.("[data-id]");
  const id = pointEl ? Number(pointEl.getAttribute("data-id")) : NaN;
  const p = Number.isFinite(id)
    ? points.value.find((pt) => pt.id === id)
    : undefined;
  if (p) {
    gesture = {
      kind: "point",
      id: p.id,
      startX: vb.x,
      startY: vb.y,
      before: { ...p },
      snapshot: snapshotPts(),
      historyPushed: false,
      shiftKey: e.shiftKey,
    };
  } else {
    gesture = {
      kind: "pan",
      startX: vb.x,
      startY: vb.y,
      ox0: ox.value,
      oy0: oy.value,
    };
  }
  addWindowListeners();
}

function onWindowPointerMove(e: PointerEvent) {
  if (!activePointers.has(e.pointerId)) return;
  activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (activePointers.size === 2 && gesture?.kind === "pinch") {
    const [p1, p2] = [...activePointers.values()];
    const mid = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
    const dist = pointerDistance(p1, p2);
    if (dist > 0 && gesture.dist0 > 0) {
      const midVb = clientToViewBox(mid);
      const newZoom = clamp(gesture.zoom0 * (dist / gesture.dist0), 0.25, 6);
      const k = newZoom / gesture.zoom0;
      // keep the point under the fingers fixed, then recenter on the new midpoint
      ox.value = gesture.midVb.x - (gesture.midVb.x - gesture.ox0) * k;
      oy.value = gesture.midVb.y - (gesture.midVb.y - gesture.oy0) * k;
      zoom.value = newZoom;
      ox.value += midVb.x - gesture.midVb.x;
      oy.value += midVb.y - gesture.midVb.y;
    }
    return;
  }
  if (!gesture) return;
  const vb = clientToViewBox(e);
  if (gesture.kind === "pan") {
    ox.value = gesture.ox0 + (vb.x - gesture.startX);
    oy.value = gesture.oy0 + (vb.y - gesture.startY);
    return;
  }
  if (gesture.kind !== "point") return;
  const p = points.value.find((pt) => pt.id === gesture.id);
  if (!p) return;
  const dx = vb.x - gesture.startX;
  const dy = vb.y - gesture.startY;
  if (!gesture.historyPushed && Math.hypot(dx, dy) > 4 / vb.scale) {
    history.value.push(gesture.snapshot);
    gesture.historyPushed = true;
  }
  const c = scale.value;
  const a = aRad.value;
  if (gesture.shiftKey) {
    const unit = { x: -Math.cos(a), y: Math.sin(a) };
    const along = dx * unit.x + dy * unit.y;
    p.x = gesture.before.x + along / (c * xDepth.value);
    if (snapDrag.value !== "off") {
      const step = snapDrag.value === "1" ? 1 : 0.5;
      p.x = Math.round(p.x / step) * step;
    }
    return;
  }
  p.y = gesture.before.y + dx / c;
  p.z = gesture.before.z - dy / c;
  if (snapDrag.value !== "off") {
    const step = snapDrag.value === "1" ? 1 : 0.5;
    p.y = Math.round(p.y / step) * step;
    p.z = Math.round(p.z / step) * step;
  }
}

function onWindowPointerUp(e: PointerEvent) {
  activePointers.delete(e.pointerId);
  if (activePointers.size < 2 && gesture?.kind === "pinch") {
    gesture = null;
  }
  if (activePointers.size === 0) {
    gesture = null;
    removeWindowListeners();
  }
}

function onWheel(e: WheelEvent) {
  const vb = clientToViewBox(e);
  const factor = Math.exp(-e.deltaY * 0.0015);
  const newZoom = clamp(zoom.value * factor, 0.25, 6);
  const k = newZoom / zoom.value;
  ox.value = vb.x - (vb.x - ox.value) * k;
  oy.value = vb.y - (vb.y - oy.value) * k;
  zoom.value = newZoom;
}

/* ---------------- transforms ---------------- */

function targetIds(): Set<number> {
  const ids =
    transformTarget.value === "all"
      ? points.value.map((p) => p.id)
      : points.value.filter((p) => p.selected).map((p) => p.id);
  return new Set(ids);
}

function applyTransform(kind: "rotate" | "translate" | "both") {
  const ids = targetIds();
  if (ids.size === 0) return;
  const t = { x: tx.value, y: ty.value, z: tz.value };
  const rotateActive = rotAngle.value !== 0;
  const translateActive = t.x !== 0 || t.y !== 0 || t.z !== 0;
  if (kind === "rotate" && !rotateActive) return;
  if (kind === "translate" && !translateActive) return;
  if (kind === "both" && !rotateActive && !translateActive) return;

  const steps: Array<"rotate" | "translate"> =
    kind === "rotate"
      ? ["rotate"]
      : kind === "translate"
        ? ["translate"]
        : bothOrder.value === "rotateFirst"
          ? ["rotate", "translate"]
          : ["translate", "rotate"];

  const before = points.value.map((p) => ({
    id: p.id,
    x: p.x,
    y: p.y,
    z: p.z,
  }));
  pushHistory();
  clearGhost();
  points.value = points.value.map((p) => {
    if (!ids.has(p.id)) return p;
    let q = { x: p.x, y: p.y, z: p.z };
    for (const step of steps) {
      if (step === "rotate" && rotateActive) {
        q = rotateCoords(q, rotAxis.value, rotAngle.value);
      } else if (step === "translate" && translateActive) {
        q = { x: q.x + t.x, y: q.y + t.y, z: q.z + t.z };
      }
    }
    return { ...p, x: q.x, y: q.y, z: q.z };
  });
  ghost.value = before;
}

/* ---------------- PNG export ---------------- */

function exportPng() {
  try {
    const el = svgEl.value;
    if (!el) return;
    const clone = el.cloneNode(true) as SVGSVGElement;
    clone.setAttribute("width", String(W));
    clone.setAttribute("height", String(H));
    const source = new XMLSerializer().serializeToString(clone);
    const url = URL.createObjectURL(
      new Blob([source], { type: "image/svg+xml" }),
    );
    const img = new Image();
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = W * 2;
        canvas.height = H * 2;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          URL.revokeObjectURL(url);
          return;
        }
        ctx.fillStyle = paperColor.value;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);
        const link = document.createElement("a");
        link.download = "points3d.png";
        link.href = canvas.toDataURL("image/png");
        document.body.appendChild(link);
        link.click();
        link.remove();
      } catch (err) {
        URL.revokeObjectURL(url);
        console.warn("[PointPlotter3D] PNG export failed:", err);
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      console.warn("[PointPlotter3D] PNG export failed: could not rasterise SVG.");
    };
    img.src = url;
  } catch (err) {
    console.warn("[PointPlotter3D] PNG export failed:", err);
  }
}

/* ---------------- lifecycle ---------------- */

let darkObserver: MutationObserver | null = null;

onMounted(() => {
  const root = document.documentElement;
  const sync = () => {
    isDark.value = root.classList.contains("dark");
  };
  sync();
  fitView();
  darkObserver = new MutationObserver(sync);
  darkObserver.observe(root, { attributes: true, attributeFilter: ["class"] });
});

onBeforeUnmount(() => {
  darkObserver?.disconnect();
  darkObserver = null;
  removeWindowListeners();
  if (confirmTimer) window.clearTimeout(confirmTimer);
});

/* ---------------- template helpers ---------------- */

const isConstructionVisible = (p: Pt) =>
  construction.value === "all" ||
  (construction.value === "selected" && p.selected);
</script>

<template>
  <div class="pp-root">
    <section class="pp-canvas" aria-label="3D point plotter canvas">
      <svg
        ref="svgEl"
        class="pp-svg"
        :viewBox="`0 0 ${W} ${H}`"
        role="img"
        aria-label="Interactive 3D point plotter"
        @pointerdown.prevent="onSvgPointerDown"
        @wheel.prevent="onWheel"
      >
        <rect class="pp-paper" :width="W" :height="H" :fill="paperColor" />

        <!-- squared paper aligned to the origin, one cell = 0.5 cm, 1 unit = 2 cells -->
        <g v-if="grid === 'sheet'" class="pp-sheet">
          <line
            v-for="x in sheetVLines"
            :key="'v' + x.toFixed(2)"
            :x1="x" :y1="0" :x2="x" :y2="H"
            :stroke="sheetGrid"
            stroke-width="1"
          />
          <line
            v-for="y in sheetHLines"
            :key="'h' + y.toFixed(2)"
            :x1="0" :y1="y" :x2="W" :y2="y"
            :stroke="sheetGrid"
            stroke-width="1"
          />
        </g>

        <!-- floor grid on the z = 0 plane -->
        <g v-if="grid === 'floor'">
          <line
            v-for="(l, i) in floorLines"
            :key="i"
            :x1="toScreen(l.from[0], l.from[1], l.from[2]).sx"
            :y1="toScreen(l.from[0], l.from[1], l.from[2]).sy"
            :x2="toScreen(l.to[0], l.to[1], l.to[2]).sx"
            :y2="toScreen(l.to[0], l.to[1], l.to[2]).sy"
            :stroke="floorGrid"
            stroke-width="1"
          />
        </g>

        <!-- axes through the origin, clipped to the view, arrowheads at + ends -->
        <g class="pp-axes">
          <g v-for="a in axisGeometry" :key="a.axis">
            <line
              :x1="a.start.x" :y1="a.start.y" :x2="a.end.x" :y2="a.end.y"
              :stroke="axisColor"
              stroke-width="1.6"
            />
            <polygon :points="a.arrowTip" :fill="axisColor" />
            <polygon :points="a.arrowTail" :fill="axisColor" opacity="0.35" />
            <text
              class="pp-axis-name"
              :x="a.label.x"
              :y="a.label.y"
              text-anchor="middle"
              :fill="axisLabel"
              :stroke="paperColor"
            >{{ a.axis.toUpperCase() }}</text>
          </g>
        </g>

        <!-- tick dots and labels at construction-visible values -->
        <g class="pp-ticks">
          <g v-for="v in tickValues.x" :key="'tx' + v">
            <circle
              :cx="tickScreen('x', v).x"
              :cy="tickScreen('x', v).y"
              r="2.6"
              :fill="ink"
            />
            <text
              class="pp-tick-label"
              :x="tickScreen('x', v).x - 4"
              :y="tickScreen('x', v).y + 13"
              text-anchor="end"
              :fill="axisLabel"
            >{{ fmtN(v) }}</text>
          </g>
          <g v-for="v in tickValues.y" :key="'ty' + v">
            <circle
              :cx="tickScreen('y', v).x"
              :cy="tickScreen('y', v).y"
              r="2.6"
              :fill="ink"
            />
            <text
              class="pp-tick-label"
              :x="tickScreen('y', v).x"
              :y="tickScreen('y', v).y + 14"
              text-anchor="middle"
              :fill="axisLabel"
            >{{ fmtN(v) }}</text>
          </g>
          <g v-for="v in tickValues.z" :key="'tz' + v">
            <circle
              :cx="tickScreen('z', v).x"
              :cy="tickScreen('z', v).y"
              r="2.6"
              :fill="ink"
            />
            <text
              class="pp-tick-label"
              :x="tickScreen('z', v).x - 8"
              :y="tickScreen('z', v).y + 4"
              text-anchor="end"
              :fill="axisLabel"
            >{{ fmtN(v) }}</text>
          </g>
        </g>

        <!-- ghost of the pre-transform shape -->
        <g v-if="showGhost && ghostScreenPts.length" class="pp-ghost">
          <polyline
            v-if="connectPoints && ghostScreenPts.length > 1"
            :points="
              ghostScreenPts.map((p) => `${p.sx},${p.sy}`).join(' ') +
              (closeShape && ghostScreenPts.length > 2
                ? ` ${ghostScreenPts[0].sx},${ghostScreenPts[0].sy}`
                : '')
            "
            fill="none"
            :stroke="ghostColor"
            stroke-width="1.6"
            stroke-dasharray="6 4"
          />
          <circle
            v-for="p in ghostScreenPts"
            :key="p.id"
            :cx="p.sx"
            :cy="p.sy"
            r="5"
            fill="none"
            :stroke="ghostColor"
            stroke-width="1.6"
          />
          <text
            v-for="p in ghostScreenPts"
            :key="'n' + p.id"
            class="pp-ghost-name"
            :x="p.sx + 9"
            :y="p.sy - 8"
            :fill="ghostColor"
          >{{ (nameById.get(p.id) ?? '') }}&#8242;</text>
        </g>

        <!-- construction lines, six dashed guides per visible point, clipped to the canvas -->
        <g class="pp-construction">
          <line
            v-for="(l, i) in constructionLines"
            :key="i"
            :x1="l.x1" :y1="l.y1" :x2="l.x2" :y2="l.y2"
            :stroke="l.color"
            stroke-width="1.3"
            stroke-dasharray="5 4"
            opacity="0.9"
          />
        </g>

        <!-- connected shape A -> B -> C (and back to A if closed) -->
        <polyline
          v-if="connectPoints && screenPts.length > 1"
          :points="
            screenPts.map((p) => `${p.sx},${p.sy}`).join(' ') +
            (closeShape && screenPts.length > 2
              ? ` ${screenPts[0].sx},${screenPts[0].sy}`
              : '')
          "
          fill="none"
          :stroke="connectColor"
          stroke-width="2"
          stroke-linejoin="round"
        />

        <!-- points -->
        <g v-for="(p, i) in screenPts" :key="p.id" :data-id="p.id" class="pp-pt">
          <circle
            :cx="p.sx"
            :cy="p.sy"
            :r="p.selected ? 6.5 : 5"
            :fill="p.color"
            :stroke="p.selected ? connectColor : paperColor"
            stroke-width="2"
          />
          <text class="pp-pt-name" :x="p.sx + 9" :y="p.sy - 8" :fill="ink">
            {{ pointName(i) }}
          </text>
          <text
            v-if="showCoords"
            class="pp-pt-coord"
            :x="p.sx"
            :y="p.sy + 17"
            text-anchor="middle"
            :fill="inkSoft"
          >({{ fmtN(p.x) }}, {{ fmtN(p.y) }}, {{ fmtN(p.z) }})</text>
        </g>
      </svg>
    </section>

    <aside class="pp-panel" aria-label="Point plotter controls">
      <!-- point list -->
      <div class="pp-section pp-section-points">
        <div class="pp-section-head">
          <h2 class="pp-h2">Points</h2>
          <button type="button" class="pp-btn pp-btn-primary" @click="addPoint">Add point</button>
        </div>
        <div class="pp-rows-head" aria-hidden="true">
          <span></span><span></span><span></span>
          <span class="pp-col">X</span>
          <span class="pp-col">Y</span>
          <span class="pp-col">Z</span>
          <span class="pp-col">Sel</span>
          <span></span>
        </div>
        <div ref="rowsEl" class="pp-rows">
          <div v-for="(p, i) in points" :key="p.id" class="pp-row">
            <button
              type="button"
              class="pp-handle"
              title="Drag to reorder"
              aria-label="Drag to reorder"
              @pointerdown="beginReorder($event, i)"
            >
              <span aria-hidden="true">:::</span>
            </button>
            <span class="pp-row-name">{{ pointName(i) }}</span>
            <input
              type="color"
              class="pp-color"
              :value="p.color"
              :aria-label="`Colour of point ${pointName(i)}`"
              @input="setColor(p.id, ($event.target as HTMLInputElement).value)"
            />
            <input
              type="number"
              step="any"
              class="pp-num"
              :value="fmtN(p.x)"
              aria-label="X"
              @change="setCoordinate(p.id, 'x', ($event.target as HTMLInputElement).value)"
            />
            <input
              type="number"
              step="any"
              class="pp-num"
              :value="fmtN(p.y)"
              aria-label="Y"
              @change="setCoordinate(p.id, 'y', ($event.target as HTMLInputElement).value)"
            />
            <input
              type="number"
              step="any"
              class="pp-num"
              :value="fmtN(p.z)"
              aria-label="Z"
              @change="setCoordinate(p.id, 'z', ($event.target as HTMLInputElement).value)"
            />
            <input
              type="checkbox"
              :checked="p.selected"
              :aria-label="`Select point ${pointName(i)}`"
              @change="setSelected(p.id, ($event.target as HTMLInputElement).checked)"
            />
            <button
              type="button"
              class="pp-del"
              :aria-label="`Delete point ${pointName(i)}`"
              @click="deletePoint(p.id)"
            >×</button>
          </div>
          <p v-if="points.length === 0" class="pp-empty">
            No points. Add one to start.
          </p>
        </div>
      </div>

      <!-- view controls -->
      <div class="pp-section">
        <h2 class="pp-h2">View</h2>
        <div class="pp-grid2">
          <label>
            X angle
            <input v-model.number="xAngle" type="range" min="20" max="75" step="1" />
            <span class="pp-val">{{ xAngle }}°</span>
          </label>
          <label>
            X depth ratio
            <input v-model.number="xDepth" type="range" min="0.3" max="1" step="0.05" />
            <span class="pp-val">{{ xDepth.toFixed(2) }}</span>
          </label>
          <label>
            Ruler scale
            <input v-model.number="screenScale" type="range" min="0.1" max="2" step="0.05" />
            <span class="pp-val">{{ Math.round(screenScale * 100) }}%</span>
          </label>
          <label>
            Grid
            <select v-model="grid">
              <option value="sheet">Sheet</option>
              <option value="floor">Floor</option>
              <option value="none">None</option>
            </select>
          </label>
          <label>
            Construction lines
            <select v-model="construction">
              <option value="all">All points</option>
              <option value="selected">Selected points</option>
              <option value="hidden">Hidden</option>
            </select>
          </label>
          <label>
            Snap drag
            <select v-model="snapDrag">
              <option value="0.5">0.5</option>
              <option value="1">1</option>
              <option value="off">off</option>
            </select>
          </label>
        </div>
        <button type="button" class="pp-btn pp-btn-primary pp-btn-wide" @click="fitView">
          Fit to view
        </button>
        <p class="pp-note">Drag a point to move it in Y and Z. Shift-drag to move along X. Drag background to pan, wheel or pinch to zoom.</p>
      </div>

      <!-- transform controls -->
      <div class="pp-section">
        <h2 class="pp-h2">Transform</h2>
        <div class="pp-grid2">
          <label>
            Target
            <select v-model="transformTarget">
              <option value="all">Whole shape</option>
              <option value="selected">Selected points</option>
            </select>
          </label>
          <label>
            Axis
            <select v-model="rotAxis">
              <option value="x">X</option>
              <option value="y">Y</option>
              <option value="z">Z</option>
            </select>
          </label>
          <label>
            Angle (degrees)
            <input v-model.number="rotAngle" type="number" step="1" />
          </label>
          <label>
            Translate X
            <input v-model.number="tx" type="number" step="any" />
          </label>
          <label>
            Translate Y
            <input v-model.number="ty" type="number" step="any" />
          </label>
          <label>
            Translate Z
            <input v-model.number="tz" type="number" step="any" />
          </label>
          <label class="pp-span2">
            Both does
            <select v-model="bothOrder">
              <option value="rotateFirst">Rotate then translate</option>
              <option value="translateFirst">Translate then rotate</option>
            </select>
          </label>
        </div>
        <div class="pp-btnrow">
          <button
            type="button"
            class="pp-btn pp-btn-primary"
            :disabled="transformDisabled"
            @click="applyTransform('rotate')"
          >Rotate</button>
          <button
            type="button"
            class="pp-btn pp-btn-primary"
            :disabled="transformDisabled"
            @click="applyTransform('translate')"
          >Translate</button>
          <button
            type="button"
            class="pp-btn pp-btn-primary"
            :disabled="transformDisabled"
            @click="applyTransform('both')"
          >Both</button>
        </div>
        <label class="pp-check">
          <input v-model="showGhost" type="checkbox" />
          Show ghost (pre-transform shape)
        </label>
      </div>

      <!-- display & actions -->
      <div class="pp-section">
        <h2 class="pp-h2">Display &amp; Actions</h2>
        <label class="pp-check">
          <input v-model="connectPoints" type="checkbox" />
          Connect points (A → B → C)
        </label>
        <label class="pp-check">
          <input v-model="closeShape" type="checkbox" :disabled="!connectPoints" />
          Close shape (last point back to A)
        </label>
        <label class="pp-check">
          <input v-model="showCoords" type="checkbox" />
          Show coordinates
        </label>
        <div class="pp-btn-stack">
          <button
            type="button"
            class="pp-btn"
            :disabled="history.length === 0"
            @click="undo"
          >Undo</button>
          <button type="button" class="pp-btn" @click="exportPng">PNG</button>
          <button
            type="button"
            class="pp-btn pp-btn-danger"
            @click="requestClearAll"
          >{{ confirmClear ? "Confirm?" : "Clear all" }}</button>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.pp-root {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.pp-canvas {
  padding-top: env(safe-area-inset-top);
  min-width: 0;
}

.pp-svg {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 900 / 620;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  touch-action: none;
  user-select: none;
  background: var(--vp-c-bg-soft);
}

.pp-axis-name,
.pp-tick-label,
.pp-pt-name,
.pp-pt-coord,
.pp-ghost-name,
.pp-ticks circle {
  user-select: none;
  pointer-events: none;
}

.pp-axis-name {
  font-size: 15px;
  font-style: italic;
  font-weight: 700;
  paint-order: stroke;
  stroke-width: 4px;
}

.pp-tick-label {
  font-size: 11px;
}

.pp-pt-name {
  font-size: 13px;
  font-weight: 700;
}

.pp-pt-coord {
  font-size: 11.5px;
}

.pp-pt {
  cursor: grab;
}
.pp-pt:active {
  cursor: grabbing;
}

.pp-ghost-name {
  font-size: 11px;
  font-weight: 600;
}

/* cards */
.pp-panel {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 12px;
}

.pp-section {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  padding: 12px 14px;
  min-width: 0;
}

.pp-section-points {
  grid-column: 1 / -1;
}

.pp-h2 {
  margin: 0;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--vp-c-text-2);
}

.pp-section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
}

.pp-section-head .pp-h2 {
  margin: 0;
}

/* shared column template for the points table (header + rows) */
.pp-rows-head,
.pp-row {
  display: grid;
  grid-template-columns: 26px 26px 32px repeat(3, 1fr) 30px 26px;
  gap: 6px;
  align-items: center;
}

.pp-rows-head {
  padding: 0 6px 4px;
  font-size: 10.5px;
  font-weight: 700;
  color: var(--vp-c-text-2);
  text-align: center;
}

.pp-rows {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.pp-row {
  padding: 4px 6px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
}

.pp-handle {
  touch-action: none;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: grab;
  font-size: 14px;
  line-height: 1;
  padding: 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pp-handle:active {
  cursor: grabbing;
  background: var(--vp-c-default-soft);
}

.pp-row-name {
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  color: var(--vp-c-text-1);
}

.pp-num {
  width: 100%;
  min-width: 0;
  padding: 5px 6px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 12px;
}

.pp-color {
  width: 32px;
  height: 26px;
  padding: 2px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  cursor: pointer;
}

.pp-del {
  border: 0;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  padding: 4px 0;
  border-radius: 6px;
}
.pp-del:hover {
  color: #ef4444;
  background: var(--vp-c-default-soft);
}

.pp-empty {
  margin: 6px 2px;
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.pp-check {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0 0;
  font-size: 13px;
  color: var(--vp-c-text-1);
  cursor: pointer;
}
.pp-check input {
  accent-color: var(--vp-c-brand-1);
  width: 16px;
  height: 16px;
}

.pp-grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.pp-grid2 label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 11px;
  font-weight: 600;
  color: var(--vp-c-text-2);
}
.pp-span2 {
  grid-column: 1 / -1;
}
.pp-grid2 input[type="range"] {
  accent-color: var(--vp-c-brand-1);
}
.pp-grid2 input[type="number"],
.pp-grid2 select {
  width: 100%;
  padding: 5px 7px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 13px;
}

.pp-val {
  font-size: 11px;
  color: var(--vp-c-text-2);
}

.pp-note {
  margin: 10px 0 0;
  font-size: 11px;
  line-height: 1.45;
  color: var(--vp-c-text-2);
}

/* buttons */
.pp-btn {
  padding: 7px 12px;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
}
.pp-btn:hover:not(:disabled) {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.pp-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.pp-btn-primary {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: #10141c;
}
.pp-btn-primary:hover:not(:disabled) {
  filter: brightness(1.1);
  border-color: var(--vp-c-brand-1);
  color: #10141c;
}
.pp-btn-wide {
  width: 100%;
  margin-top: 10px;
}
.pp-btnrow {
  display: flex;
  gap: 8px;
  margin: 10px 0 8px;
}
.pp-btnrow .pp-btn {
  flex: 1;
}
.pp-btn-danger {
  border-color: #ef4444;
  color: #ef4444;
}
.pp-btn-danger:hover:not(:disabled) {
  background: #ef4444;
  border-color: #ef4444;
  color: #fff;
}

.pp-btn-stack {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 14px;
}
.pp-btn-stack .pp-btn {
  width: 100%;
}
</style>
