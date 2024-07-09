<script setup>
import Card from '@/components/Card.vue';
import { ref } from "vue";

const courses = ref([
  {
    title: "Mastering Laravel 10 Query Builder, Eloquent and Relationships",
    description: "Throughout the course, you'll be introduced to the basics of databases and Eloquent ORM, and then dive deeper into more advanced topics such as database migrations, relationships, and performance optimization.",
    url: "/Course_1"
  },
]);

</script>

<template>
  <h1 class="text-xl text-center font-bold text-white py-7">My Courses</h1>
  <main class="grid grid-cols-3 place-items-center px-6 gap-6">
    <Card
      v-for="course in courses"
      :description="course.description"
      :title="course.title"
      :url="course.url"
    />
  </main>
</template>
