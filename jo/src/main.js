import './style.css'

import { createApp } from 'vue'
import App from './App.vue'

// router
import router from "./router";

// pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

// toastify 
import { ToastifyContainer } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const app = createApp(App);

app.use(router);

app.use(pinia)

app.component("ToastContainer", ToastifyContainer);

app.mount('#app');
