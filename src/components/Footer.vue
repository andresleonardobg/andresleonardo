<template>
  <footer>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/andres-bermudez/"
          target="_blank"
          class="fa fa-linkedin"
        ></a>
      </li>
      <li>
        <a
          href="https://github.com/andresleonardobg"
          target="_blank"
          class="fa fa-github"
        ></a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCZSr0GC79LQF-RRAcTaVJpg"
          target="_blank"
          class="fa fa-youtube"
        ></a>
      </li>
    </ul>
    <div>
      <p style="text-align: center">{{ year }}</p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
footer {
  width: 100%;
  padding: 10px 0px;
}

footer ul {
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 0px;
}

footer ul li {
  list-style: none;
}

footer ul li a {
  text-decoration: none;
  color: var(--second_color);
  font-size: 25px;
}

p {
  margin: 5px;
  margin-bottom: 0;
}
</style>
