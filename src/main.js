import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useStore } from '@/stores/test'
import Contacts from '@/components/Contacts.vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia();

app.component('Contacts', Contacts)

app.use(pinia)
app.use(router)

app.mount('#app')
