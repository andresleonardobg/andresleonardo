<template>
  <div class="post">
    <div class="content">
      <h2 class="content_project animate__fadeInRight">
        {{ project.name }}
      </h2>
      <p
        v-html="description"
        class="content_project animate__fadeInUp"
        id="text"
      ></p>
    </div>
    <div class="content_image">
      <Splide
        v-if="project.image.length > 1"
        :options="{
          rewind: true,
          pagination: false,
          autoplay: true,
          type: 'loop',
          pauseOnHover: true,
          height: '630px',
          interval: 2000,
        }"
        aria-label="My Favorite Images"
      >
        <SplideSlide v-for="index in project.image" :key="index">
          <img :src="index" alt="Sample 1" />
        </SplideSlide>
      </Splide>
      <img v-else :src="project.image[0]" alt="project" class="main_image" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "@splidejs/vue-splide/css";
import { useComponentStore } from "../stores/currentContent";

const project = useComponentStore().contentProject;
const description = ref(project.description);
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: var(--light-color-opacity);
  border-radius: 5px;
}

.content {
  width: 50%;
  height: 100%;
  overflow-y: scroll;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content_image {
  overflow-x: hidden;
  width: 50%;
  height: 100%;
  overflow: hidden;
  border-radius: 0px 5px 5px 0px;
}

.content h2 {
  font-size: 50px;
  line-height: 50px;
  padding: 50px 30px 0px 30px;
  margin: 0;
  display: block;
}

.content p {
  text-align: justify;
  padding: 20px 50px;
  font-size: 18px;
  margin: 0px;
}

@media screen and (max-width: 768px) {
  .post {
    flex-wrap: wrap;
  }

  .post div {
    width: 100%;
  }

  .content {
    border-right: none;
  }

  .content p {
    padding: 20px;
  }
}
</style>
