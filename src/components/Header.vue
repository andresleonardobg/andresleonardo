<template>
  <header>
    <nav id="nav">
      <div class="options_nav">
        <RouterLink to="/">Trabajo</RouterLink>
        <RouterLink to="/projects">Proyectos</RouterLink>
        <RouterLink to="/about-me">Sobre mi</RouterLink>
      </div>
      <h1>Andres Leonardo</h1>
      <div class="container_switch">
        <button @click="darkLight(!color)">
          <Transition
            enter-active-class="animate__animated animate__fadeInLeft animate__faster"
            leave-active-class="animate__animated animate__fadeOutRight animate__faster"
            mode="out-in"
          >
            <Moon v-if="color" class="moon" />
            <Sun v-else-if="!color" class="sun" />
          </Transition>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { defineProps } from "vue";
import { useComponentStore } from "../stores/currentContent";
import { Moon } from "lucide-vue-next";
import { Sun } from "lucide-vue-next";
import { RouterLink } from "vue-router";

const component = useComponentStore();
const props = defineProps({
  darkLight: Function,
  color: Boolean,
});
</script>

<style scoped>
button {
  padding: 0;
  margin: 0;
  border-radius: 20px;
  display: flex;
  border: none;
  background-color: var(--light-color);
  overflow: hidden;
  cursor: pointer;
}

#nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  grid-area: header;
}

.option_nav {
  cursor: pointer;
}

.moon {
  color: var(--dark-color);
  --animate-duration: 0.5s;
}

.sun {
  color: var(--dark-color);
  --animate-duration: 0.5s;
}

@media screen and (max-width: 768px) {
  #nav {
    flex-direction: column-reverse;
  }
}
</style>
