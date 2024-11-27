import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/auth/SignIn.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/auth/SignUp.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'Not Found 404',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      const element = document.querySelector(to.hash)
      if (element) {
        const offset = 80
        const elementPosition = element.offsetTop - offset
        return { top: elementPosition, behavior: 'smooth' }
      }
    }
    return { top: 0 }
  },
})

export default router
