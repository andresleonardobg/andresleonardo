import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import VueSplide from "@splidejs/vue-splide";

const app = createApp(App);
const pinia = createPinia();
app.use(VueSplide);
app.use(pinia);
app.mount("#app");
