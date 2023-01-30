import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About.vue')
    },
    {
   	  path: '/Products',
      name: 'Products',
      component: () => import('@/views/Products.vue')
    },
    {
   	  path: '/Blog',
      name: 'Blog',
      component: () => import('@/views/Blog.vue')
    }

  ]
});

export default router;
