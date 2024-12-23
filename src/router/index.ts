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
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/DashboardView.vue'),
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('@/views/StudentProfile.vue'),
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
    },
    {
      path: '/program-hours',
      name: 'program-hours',
      component: () => import('@/views/ProgramHours.vue'),
    }
  ],
})

export default router
