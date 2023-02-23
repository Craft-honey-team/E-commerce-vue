import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from '@/stores/test'

import Home from '@/views/Home.vue'

let routes = [
    {
      path: "/home",
      alias: "Home",
      component: Home,
    },
    {
      path: '/about',
      alias: 'About',
      component: () => import('@/views/About.vue')
    },
    {
   	  path: '/Products',
      alias: 'Products',
      component: () => import('@/views/Products.vue')
    },
    {
   	  path: '/Personal',
      alias: 'Personal',
      component: () => import('@/views/Personal.vue')
    },
    {
   	  path: '/PersonalArea',
      alias: 'PersonalArea',
      component: () => import('@/views/PersonalArea.vue')
    },
    {
   	  path: '/Blog',
      alias: 'Blog',
      component: () => import('@/views/Blog.vue')
    },
    {
      path: '/Checkout',
      alias: 'Checkout',
      component: () => import('@/views/Checkout.vue')
    }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  	{
  		path: '/',
  		name: 'root',
  		redirect: to => { return useStore().lang }
  	},
  	{
  		path: '/ru',
  		name: 'ru',
  		redirect: to => { return 'ru/home' },
  		beforeEnter: (to) => { console.log("repeat"); useStore().lang = 'ru' },
  		children: routes,
  	},
  	{
  		path: '/en',
  		name: 'en',
  		redirect: to => { return 'en/home' },
  		beforeEnter: (to) => { useStore().lang = 'en' },
  		children: routes,
  	},
  	{
  		path: '/kg',
  		name: 'kg',
   		redirect: to => { return 'kg/home' },
   		beforeEnter: (to) => { useStore().lang = 'kg' },
  		children: routes,
  	},
  ]
});

export default router;
