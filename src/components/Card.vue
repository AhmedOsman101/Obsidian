<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  url: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div
    class="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
  >
    <div class="p-6 pb-4">
      <h5
        class="mb-2 block font-sans text-lg font-semibold leading-snug tracking-normal text-gray-900 antialiased"
        v-text="title"
      />
      <p
        v-if="description?.length"
        class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased"
        v-text="description"
      />
    </div>
    <div class="p-6 pt-0">
      <RouterLink
        :to="url"
        class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true"
      >
        Read More <i class="fa-solid fa-arrow-right"/>
      </RouterLink>
    </div>
  </div>
</template>
