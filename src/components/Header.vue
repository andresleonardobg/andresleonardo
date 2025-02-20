<template>
  <header>
    <nav id="nav">
      <div class="options_nav">
        <span
          class="option_nav"
          @click="component.setCurrentComponent('projects')"
        >
          Proyectos
        </span>
        <span
          class="option_nav"
          @click="component.setCurrentComponent('aboutMe')"
        >
          Sobre mi
        </span>
      </div>
      <h1>Andres Leonardo</h1>
      <div class="container_switch">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round" @click="darkLight(!color)"></span>
        </label>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useComponentStore } from "../stores/currentContent";

const component = useComponentStore();
</script>

<style scoped></style>
