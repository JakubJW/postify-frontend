import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import DesktopLayout from '../src/modules/core/components/DesktopLayout.vue'
import router from './router'

const app = createApp(DesktopLayout)

app.use(createPinia())
app.use(router)

app.mount('#app')
