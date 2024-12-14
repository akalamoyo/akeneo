import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // If navigating back/forward, use the saved position
      return savedPosition
    } else {
      // Otherwise, scroll to the top of the page
      return { top: 0 }
    }
  }
})

export default router
