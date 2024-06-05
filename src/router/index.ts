import Login from '@/views/login/Login.vue'
import Home from '@/views/home/Home.vue'
import SplitWord from '@/views/split-word/SplitWord.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/split-word',
          component: SplitWord
        }
      ]
    }
  ]
})

export default router
