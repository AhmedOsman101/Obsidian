import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Pages/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Course_1',
      name: 'course_1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../Pages/Course_1.vue')
    }
  ]
});

export default router;
