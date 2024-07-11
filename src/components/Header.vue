<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import router from '@/router/index.js';

defineProps({
  title: {
    type: String,
    required: true
  }
});

const head = ref(null);

onMounted(() => {
  head.value.focus();
  // Attach the scroll event listener when the component is mounted
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  // Remove the scroll event listener when the component is unmounted
  window.removeEventListener('scroll', handleScroll);
});

/**
 * Apply a blur filter along with a transparent background on scroll.
 */
const handleScroll = () => {
  const scrollY = window.scrollY; // Get the Y-axis scroll position

  if (scrollY !== 0) {
    head.value.style.background = 'rgb(36, 41, 46, 0.5)';
    head.value.style.backdropFilter = 'blur(10px)';
  } else {
    head.value.style.background = 'rgb(36, 41, 46)';
    head.value.style.backdropFilter = 'none';
  }
};

/**
 * Go back to the previous page and re-fetch user to update notifications.
 */
const back = () => router.back();
</script>

<template>
  <section ref="head" class="px-4 sticky top-0 shadow-2xl z-50 text-white">
    <div class="flex gap-x-3 items-center w-full">
      <button class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#181919]" @click="back">

        <v-icon name="bi-arrow-left-short "/>

      </button>
      <h1 class="lg:text-xl md:text-lg sm:text-base text-sm" v-text="$props.title"/>
    </div>
  </section>
</template>

<style scoped>

@media (max-width: 639px) {

  section {
    @apply px-1;
  }

  h1 {
    @apply text-xs;
  }

  button {
    @apply min-h-fit px-3 flex items-center justify-center;
  }

  button:hover {
    background: #181919 !important;
  }
}
</style>