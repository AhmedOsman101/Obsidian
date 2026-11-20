<script setup lang="ts">
/**
 * ViewToggles — floating stack of layout buttons (bottom right):
 * collapse the sidebar, switch the document to full width.
 * The classes live on <html> and are persisted in localStorage;
 * the CSS that reacts to them is in theme/layout.css.
 */
import { onMounted, ref } from "vue";

const sidebarHidden = ref(false);
const fullWidth = ref(false);

const KEY_SIDEBAR = "notes:sidebar-hidden";
const KEY_FULLWIDTH = "notes:full-width";

function syncClasses() {
  const root = document.documentElement;
  root.classList.toggle("sidebar-hidden", sidebarHidden.value);
  root.classList.toggle("full-width", fullWidth.value);
}

function toggleSidebar() {
  sidebarHidden.value = !sidebarHidden.value;
  window.localStorage.setItem(KEY_SIDEBAR, sidebarHidden.value ? "1" : "0");
  syncClasses();
}

function toggleFullWidth() {
  fullWidth.value = !fullWidth.value;
  window.localStorage.setItem(KEY_FULLWIDTH, fullWidth.value ? "1" : "0");
  syncClasses();
}

onMounted(() => {
  sidebarHidden.value = window.localStorage.getItem(KEY_SIDEBAR) === "1";
  fullWidth.value = window.localStorage.getItem(KEY_FULLWIDTH) === "1";
  syncClasses();
});
</script>

<template>
  <div class="view-toggles" role="group" aria-label="Layout options">
    <button
      type="button"
      class="view-toggles__btn"
      :class="{ on: sidebarHidden }"
      :aria-pressed="sidebarHidden"
      aria-label="Toggle sidebar"
      title="Toggle sidebar"
      @click="toggleSidebar"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
      </svg>
    </button>

    <button
      type="button"
      class="view-toggles__btn"
      :class="{ on: fullWidth }"
      :aria-pressed="fullWidth"
      aria-label="Toggle full-width page"
      title="Toggle full-width page"
      @click="toggleFullWidth"
    >
      <svg
        v-if="!fullWidth"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M15 3h6v6" />
        <path d="M9 21H3v-6" />
        <path d="M21 3l-7 7" />
        <path d="M3 21l7-7" />
      </svg>
      <svg
        v-else
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M4 14h6v6" />
        <path d="M20 10h-6V4" />
        <path d="M14 10l7-7" />
        <path d="M3 21l7-7" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.view-toggles {
  position: fixed;
  right: max(0.6rem, env(safe-area-inset-right));
  bottom: max(0.6rem, env(safe-area-inset-bottom));
  z-index: 30;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 5px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);
}

.view-toggles__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: color 0.15s, background-color 0.15s;
}

.view-toggles__btn:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-divider);
}

.view-toggles__btn.on {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-default-soft);
}
</style>
