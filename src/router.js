import { createRouter, createWebHistory } from "vue-router";
import Projects from "./components/Projects.vue";
import AboutMe from "./components/AboutMe.vue";
import ContentProject from "./components/ContentProject.vue";

const routes = [
    { 
        path: "/andresleonardo/", 
        component: Projects,
    },
    { 
        path: "/andresleonardo/about", 
        component: AboutMe
    },
    {
        path: "/andresleonardo/:id",
        name: 'project',
        component: ContentProject
    }
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;