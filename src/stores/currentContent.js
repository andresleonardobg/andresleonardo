import { defineStore } from "pinia";
import { markRaw } from "vue";
import Projects from "../components/Projects.vue";
import ContentProject from "../components/ContentProject.vue";
import AboutMe from "../components/AboutMe.vue";
import Work from "../components/Work.vue";

export const useComponentStore = defineStore("componentStore", {
  state: () => ({
    currentComponent: "projects",
    contentProject: {},
    components: {
      projects: markRaw(Projects),
      contentProject: markRaw(ContentProject),
      aboutMe: markRaw(AboutMe),
      work: markRaw(Work),
    },
  }),
  actions: {
    setCurrentComponent(componentName, cProject = {}) {
      if (this.components[componentName]) {
        this.currentComponent = componentName;
      }

      this.contentProject = cProject;
    },
  },
});

export const useProject = defineStore("project", {
  state: () => ({
    data: {},
  }),
  actions: {
    changeContent(projectData) {
      this.data = projectData;
    },
  },
});
