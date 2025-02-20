<template>
  <div id="main">
    <Transition
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
      mode="out-in"
    >
      <component :is="component.components[component.currentComponent]" />
    </Transition>
  </div>
</template>

<script setup>
import "animate.css";
import { useComponentStore } from "../stores/currentContent";

const component = useComponentStore();
</script>

<style scoped></style>
