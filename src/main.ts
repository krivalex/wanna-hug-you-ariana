import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './style.css'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-teal/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: '42963587-b265-4607-8248-bae0207f7b14',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1',
}

const app = createApp(App)
app.use(YmapPlugin, settings)
app.use(PrimeVue)
app.use(router)

app.mount('#app')
