import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from '@/stores/test'

import Home from '@/views/Home.vue'

let routes = [
    {
      path: "/home",
      alias: "home",
      component: Home,
    },
    {
      path: '/about',
      alias: 'About',
      component: () => import('@/views/About.vue'),
    },
    {
   	  path: '/Products',
      alias: 'Products',
      component: () => import('@/views/Products.vue')
    },
    {
   	  path: 'Personal/:id',
      alias: 'Personal/:id',
      component: () => import('@/views/Personal.vue')
    },
    {
   	  path: '/PersonalArea/:id',
      alias: 'PersonalArea/:id',
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
  		redirect: to => { 
	  		return useStore().lang 
  		}
  	},
  	{
  		path: '/ru',
  		name: 'ru',
  		redirect: to => { return 'ru/home' },
  		beforeEnter: (to) => { useStore().lang = 'ru'; useStore().process() },
  		children: routes,
  	},
  	{
  		path: '/en',
  		name: 'en',
  		redirect: to => { return 'en/home' },
  		beforeEnter: (to) => { useStore().lang = 'en'; useStore().process() },
  		children: routes,
  	},
  	{
  		path: '/kg',
  		name: 'kg',
   		redirect: to => { return 'kg/home' },
   		beforeEnter: (to) => { useStore().lang = 'kg'; useStore().process() },
  		children: routes,
  	},
  ]
});

export default router;
