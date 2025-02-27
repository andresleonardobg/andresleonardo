<template>
  <div id="principal">
    <Header :darkLight="darkLight" :color="color" />
    <Main :component="currentComponent" />
    <Footer />
  </div>
  <div class="noise"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

const color = ref(true);
const currentComponent = ref("Projects");

const darkLight = (c) => {
  const style = document.documentElement.style;

  style.setProperty("--light-color", c ? "#DBD4CC" : "#282828");
  style.setProperty("--dark-color", c ? "#282828" : "#DBD4CC");
  style.setProperty("--light-color-opacity", c ? "#2828283f" : "#dbd4cc36");
  style.setProperty("--box-shadow-firts", c ? "#bab4ad" : "#1c1c1c");
  style.setProperty("--box-shadow-second", c ? "#fcf4eb" : "#343434");
  style.setProperty("--border-card-project", c ? "#bebebe" : "#333333");

  color.value = c;
};

onMounted(() => {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  darkLight(!darkThemeMq.matches);
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&family=Yeseva+One&display=swap");

:root {
  --light-color: #dbd4cc;
  --light-color-opacity: #2828283f;
  --dark-color: #282828;
  --box-shadow-firts: #bab4ad;
  --box-shadow-second: #fcf4eb;
  --border-card-project: #d1d1d1;
}

body {
  font-family: "Josefin Sans", sans-serif;
  background-color: var(--light-color);
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Yeseva One", cursive;
}

h1 {
  text-align: center;
  font-weight: 900;
  font-size: 50px;
  text-transform: uppercase;
  margin: 30px 30px 20px 30px;
}

a {
  text-decoration: none;
  color: var(--dark-color);
  margin: 0px 10px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark-color);
  width: 100%;
  height: 100%;
}

#principal {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.noise {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  content: "";
  opacity: 0.035;
  z-index: 1000;
  pointer-events: none;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/web-page-6656c.appspot.com/o/noise.gif?alt=media&token=f50c4912-2135-49af-97a4-b50c9b3c56a2");
}

@media screen and (max-width: 768px) {
  h1 {
    margin: 0px;
  }
}

/* width */
::-webkit-scrollbar {
  width: 0px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f100;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(136, 136, 136, 0);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(85, 85, 85, 0);
}
</style>
