<template>
  <footer id="footer">
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
      <h6 style="text-align: center">{{ year }}</h6>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterPage",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
#footer {
  width: 100%;
  padding: 10px 0px;
  position: fixed;
  bottom: 0;
  right: 0;
  background: var(--light-color);
}

#footer ul {
  display: flex;
  justify-content: center;
  margin: 10px auto;
  padding: 0px;
}

#footer ul li {
  list-style: none;
}

#footer ul li a {
  text-decoration: none;
  color: var(--second_color);
  font-size: 25px;
  padding: 0 10px;
}

h6 {
  margin: 0px auto;
  font-family: "Inconsolata", monospace;
}
</style>
