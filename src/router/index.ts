import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/closing-the-gap',
      name: 'closing-the-gap',
      component: () => import('@/views/ClosignGap.vue'),
    },
    {
      path: '/attendance',
      name: 'attendance',
      component: () => import('@/views/AttendanceView.vue'),
    },
    {
      path: '/effective-time',
      name: 'effective-time',
      component: () => import('@/views/EffectiveTime.vue'),
    }
  ],
})

export default router
