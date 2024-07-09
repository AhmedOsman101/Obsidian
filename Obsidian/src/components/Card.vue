<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
});
</script>

<template>
  <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div class="p-6">
      <h5
        class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
        v-text="title"/>
      <p v-if="description?.length"
         class="block font-sans text-base font-light leading-relaxed text-inherit antialiased" v-text="description"/>
    </div>
    <div class="p-6 pt-0">
      <RouterLink
        class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true"
        to="/Course_1">
        Read More
      </RouterLink>
    </div>
  </div>
</template>
