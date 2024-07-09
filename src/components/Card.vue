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
    <div class="p-6 pb-0">
      <h5
        class="mb-1 sm:mb-2 text-sm md:text-base lg:text-lg font-semibold leading-snug tracking-normal text-gray-900 antialiased"
        v-text="title"
      />
      <p
        v-if="description?.length"
        class="block text-xs sm:text-sm font-light leading-relaxed text-inherit antialiased"
        v-text="description"
      />
    </div>
    <div class="p-4 pt-0 linkWrapper">
      <RouterLink
        :to="url"
        class="select-none rounded-lg bg-blue-500 py-2 px-4 sm:py-3 sm:px-6 text-center align-middle text-xs sm:text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true"
      >
        Read More <i class="fa-solid fa-arrow-right"/>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

@media (max-width: 639px) {
  h5 {

    @apply text-pretty;
  }

  p {
    font-size: 0.65rem;
  }

  .linkWrapper {
    margin-top: 0.8rem;
  }
}

</style>