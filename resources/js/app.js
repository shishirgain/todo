import { createApp } from "vue"
import { createPinia } from "pinia"

// root component
import App from './App.vue'
// router
import router from './router'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
