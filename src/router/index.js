import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Header from '../layouts/Header.vue'
import Footer from '../layouts/Footer.vue'
import Layout from '../layouts/Layout.vue'
import Contacts from '../components/Contacts.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    }
  ]
})

export default router
