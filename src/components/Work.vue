<template>
  <div class="container">
    <div class="work">
      <div class="fijo">
        <h2>
          <a href="https://www.kennertech.com.co/" target="_blank"
            >Kennertech</a
          >
        </h2>
      </div>
      <div>
        <img
          class="animate__animated animate__fadeInDown"
          src="https://www.cssdesignawards.com/cdasites/2024/202412/20250106055110.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, laborum
          facilis. Culpa libero quaerat voluptatibus veritatis rem eaque
          consequuntur a reiciendis earum aliquid, inventore sed deleniti cumque
          labore, esse vitae? orem ipsum dolor sit amet consectetur adipisicing
          elit. Ab, laborum facilis. Culpa libero quaerat voluptatibus veritatis
          rem eaque consequuntur a reiciendis earum aliquid, inventore sed
          deleniti cumque labore, esse vitae? orem ipsum dolor sit amet
          consectetur adipisicing elit. Ab, laborum facilis. Culpa libero
          quaerat voluptatibus veritatis rem eaque consequuntur a reiciendis
          earum aliquid, inventore sed deleniti cumque labore, esse vitae? orem
          ipsum dolor sit amet consectetur adipisicing elit. Ab, laborum
          facilis. Culpa libero quaerat voluptatibus veritatis rem eaque
          consequuntur a reiciendis earum aliquid, inventore sed deleniti cumque
          labore, esse vitae? orem ipsum dolor sit amet consectetur adipisicing
          elit. Ab, laborum facilis. Culpa libero quaerat voluptatibus veritatis
          rem eaque consequuntur a reiciendis earum aliquid, inventore sed
          deleniti cumque labore, esse vitae? orem ipsum dolor sit amet
          consectetur adipisicing elit. Ab, laborum facilis. Culpa libero
          quaerat voluptatibus veritatis rem eaque consequuntur a reiciendis
          earum aliquid, inventore sed deleniti cumque labore, esse vitae? orem
          ipsum dolor sit amet consectetur adipisicing elit. Ab, laborum
          facilis. Culpa libero quaerat voluptatibus veritatis rem eaque
          consequuntur a reiciendis earum aliquid, inventore sed deleniti cumque
          labore, esse vitae? orem ipsum dolor sit amet consectetur adipisicing
          elit. Ab, laborum facilis. Culpa libero quaerat voluptatibus veritatis
          rem eaque consequuntur a reiciendis earum aliquid, inventore sed
          deleniti cumque labore, esse vitae? orem ipsum dolor sit amet
          consectetur adipisicing elit. Ab, laborum facilis. Culpa libero
          quaerat voluptatibus veritatis rem eaque consequuntur a reiciendis
          earum aliquid, inventore sed deleniti cumque labore, esse vitae?
        </p>
      </div>
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<style scoped>
.fijo {
  display: block;
  position: sticky;
  top: 0;
  z-index: 1;
}

h2 {
  background-color: var(--dark-color);

  margin: 0;
  padding: 15px 0px;
  font-size: 40px;
  cursor: pointer;
}

a {
  color: var(--light-color) !important;
}

img {
  filter: sepia(100%) saturate(80%);
  transition: 0.5s;
}

img:hover {
  filter: none;
  transition: 0.5s;
}

.container {
  width: 100%;
  max-width: 1060px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 20px;
  overflow: scroll;
  overflow-x: hidden;
  grid-area: main;
}

.work{
  max-width: 1440px;
  margin: auto;
}
</style>
