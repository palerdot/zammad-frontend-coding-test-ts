import { createApp, ref } from 'vue'
import './styles/main.css'
import App from './App.vue'
import initializeRouter from './router'
import type { Notification } from './hooks/useToast'

const app = createApp(App)
// provide toast state to the app
const toasts = ref<Array<Notification>>([])
app.provide('toasts', toasts)

initializeRouter(app)

app.mount('#app')
