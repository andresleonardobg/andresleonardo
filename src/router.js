import { createWebHashHistory, createRouter } from "vue-router";
import Work from "./components/Work.vue";
import Projects from "./components/Projects.vue";
import AboutMe from "./components/AboutMe.vue";

const routes = [
    {path: '/', name: 'Work', component: Work},
    {path: '/projects' , name: 'Projects', component: Projects},
    {path: '/about-me', name: 'AboutMe', component: AboutMe}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;