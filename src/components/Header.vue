<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import router from '@/router/index.js'

defineProps({
  title: {
    type: String,
    required: true
  }
})

const head = ref(null)

onMounted(() => {
  head.value.focus()
  // Attach the scroll event listener when the component is mounted
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  // Remove the scroll event listener when the component is unmounted
  window.removeEventListener('scroll', handleScroll)
})

/**
 * Apply a blur filter along with a transparent background on scroll.
 */
const handleScroll = () => {
  const scrollY = window.scrollY // Get the Y-axis scroll position

  if (scrollY !== 0) {
    head.value.style.background = 'rgb(36, 41, 46, 0.5)'
    head.value.style.backdropFilter = 'blur(10px)'
  } else {
    head.value.style.background = 'rgb(36, 41, 46)'
    head.value.style.backdropFilter = 'none'
  }
}

/**
 * Go back to the previous page and re-fetch user to update notifications.
 */
const back = () => router.back()
</script>

<template>
  <section ref="head" class="px-4 py-3 sticky top-0 shadow-2xl z-50 text-white bg-gray-800">
    <div class="flex gap-2 items-center w-full">
      <button class="w-8 h-8 grid place-items-center rounded-full hover:bg-[#181919]" @click="back">
        <i class="fa-solid fa-arrow-left" />
      </button>
      <h1 class="text-lg sm:text-xl font-bold" v-text="$props.title" />
    </div>
  </section>
</template>
