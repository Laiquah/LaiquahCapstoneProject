import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter() {
      if ( !cookies.get ('RealUser')) {
        router.push({ name: 'LoginView' })
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    beforeEnter() {
      if ( !cookies.get ('RealUser')) {
        router.push({ name: 'LoginView' })
      }
    }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductView.vue'),
    beforeEnter() {
      if ( !cookies.get ('RealUser')) {
        router.push({ name: 'LoginView' })
      }
    }
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('../views/FAQsView.vue'),
    beforeEnter() {
      if ( !cookies.get ('RealUser')) {
        router.push({ name: 'LoginView' })
      }
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    beforeEnter() {
      if ( !cookies.get ('RealUser')) {
        router.push({ name: 'LoginView' })
      }
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
    beforeEnter() {
      if ( !cookies.get ('RealUser')) {
        router.push({ name: 'LoginView' })
      }
    }
  },
  {
    path: '/product/:prodID',
    name: 'ProductView',
    component: () => import('../views/SingleProductView.vue')
  },
  {
    path: '/cart',
    name: 'addToCartView',
    component: () => import('../views/AddToCartView.vue'),
    beforeEnter() {
      if ( !cookies.get ('RealUser')) {
        router.push({ name: 'LoginView' })
      }
    }
  },
  {
    path: '/checkout',
    name: 'CheckoutView',
    component: () => import('../views/CheckoutView.vue')
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: () => import('../views/RegisterView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
