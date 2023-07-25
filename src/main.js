import '@/assets/main.css'
import { createApp } from 'vue'
import App from '@/App.vue'
import { router } from '@/router'
import useAuth from '@/composables/useAuth'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App)
app.use(router)
app.use(Toast);
useAuth(app, router)
app.mount('#app')