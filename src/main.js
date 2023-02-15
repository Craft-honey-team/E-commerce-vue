import { createApp } from "vue";
import { createPinia } from "pinia";
import { useStore } from "@/stores/test";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Layout from "@/layouts/Layout.vue";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();
const firebaseConfig = {
  apiKey: "AIzaSyBTSEZwHNPgKNuBJggnTFcdjmC9RR4R7NA",

  authDomain: "craft-honey.firebaseapp.com",

  projectId: "craft-honey",

  storageBucket: "craft-honey.appspot.com",

  messagingSenderId: "601806986687",

  appId: "1:601806986687:web:d7b903e0736c4d4d35550a",
};

app.component("Layout", Layout);

app.use(pinia);
app.use(router);

initializeApp(firebaseConfig);

const auth = getAuth();

app.mount("#app");
