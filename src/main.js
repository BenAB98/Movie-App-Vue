import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
createApp(App)
  .component('HeaderComponent', HeaderComponent)
  .component('FooterComponent', FooterComponent)
  .mount('#app')
