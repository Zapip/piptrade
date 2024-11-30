import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPageView.vue'
import DashboardLayoutView from '@/layouts/DashboardLayoutView.vue'
import OverviewView from '@/views/dashboard/OverviewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing Page',
      component: LandingPage,
    },
    {
      path: '/signin',
      name: 'Sign In',
      component: () => import('../views/auth/SignIn.vue'),
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: () => import('../views/auth/SignUp.vue'),
    },
    {
      path: '/forgot-password',
      name: 'Forgot Password',
      component: () => import('../views/auth/ForgotPasswordView.vue'),
    },
    {
      path: '/forgot-password/enter-code',
      name: 'Enter Code',
      component: () => import('../views/auth/EnterCodeView.vue'),
    },
    {
      path: '/forgot-password/set-new-password',
      name: 'Set New Password',
      component: () => import('../views/auth/SetNewPasswordView.vue'),
    },
    // dashboard routes
    {
      path: '/dashboard',
      name: 'Dashboard',
      redirect: '/overview',
      component: DashboardLayoutView,
      children: [
        {
          path: '/overview',
          name: 'Over View',
          component: OverviewView, // Halaman "Overview"
        },
        {
          path: '/input-transactions-stock',
          name: 'Input Transactions Stock',
          component: OverviewView, // Halaman "Overview"
        },
        {
          path: '/input-transactions-crypto',
          name: 'Input Transactions Crypto',
          component: OverviewView, // Halaman "Overview"
        },
        {
          path: '/overview',
          name: 'Over View',
          component: OverviewView, // Halaman "Overview"
        },
        {
          path: '/overview',
          name: 'Over View',
          component: OverviewView, // Halaman "Overview"
        },
      ],
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
