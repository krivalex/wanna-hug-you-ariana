import { createApp } from 'vue'
import router from './router'
import PrimeVue from 'primevue/config'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue)
app.use(router)

app.mount('#app')
