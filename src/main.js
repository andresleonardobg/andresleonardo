import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide'

createApp(App)
    .use(VueSplide)
    .use(router)
    .mount('#app')
