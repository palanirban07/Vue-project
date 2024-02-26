import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '/register',
      name: 'Register',
      component: ()=>import('../views/Register.vue')
    },

    {
      path: '/login',
      name: 'Login',
      component: ()=>import('../views/Login.vue')
    }
  ]
})

export default router
