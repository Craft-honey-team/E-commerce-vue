import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useStore } from '@/stores/test'
import Layout from '@/layouts/Layout.vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia();

app.component('Layout', Layout)

app.use(pinia)
app.use(router)

app.mount('#app')
