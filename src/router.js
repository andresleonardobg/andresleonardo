import { createRouter, createWebHistory } from "vue-router";
import Projects from "./components/Projects.vue";
import AboutMe from "./components/AboutMe.vue";
import ContentProject from "./components/ContentProject.vue";

const routes = [
    { 
        path: "/", 
        component: Projects 
    },
    { 
        path: "/about", 
        component: AboutMe
    },
    {
        path: "/:id",
        component: ContentProject 
    }
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;