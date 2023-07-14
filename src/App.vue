<template>
  <div class="noise"></div>
  <div id="nav">
    <div>
      <span class="option_nav" @click="showComponent('Projects', '#aboutMe')">Proyectos</span>
      <span class="option_nav" @click="showComponent('AboutMe', '#projects')">Sobre mi</span>
    </div>
    <h1>
        Andres Leonardo
    </h1>      
    <label class="switch">
      <input type="checkbox">
      <span class="slider round" @click="darkLight(!color)"></span>
    </label>
  </div>
  <div id="contents">
      <Projects 
      id="projects" 
      class="animate__animated animate__fadeIn animate__faster"
      v-if="currentComponent == 'Projects'" 
      @projectInfo="getInfoProject" 
      >
      </Projects>
      <ContentProject 
      id="contentProject" 
      class="animate__animated animate__fadeIn animate__faster"
      v-if="currentComponent == 'ContentProject'" 
      :project="infoProject" 
      >
      </ContentProject>
      <AboutMe 
      id="aboutMe" 
      class="animate__animated animate__fadeIn animate__faster"
      v-if="currentComponent == 'AboutMe'" 
      >
      </AboutMe>
  </div>  
  <FooterPage />
</template>

<script>
import FooterPage from './components/FooterPage.vue';
import Projects from "./components/Projects.vue";
import ContentProject from './components/ContentProject.vue'
import AboutMe from "./components/AboutMe.vue";

export default {
  name: 'App',
  data(){
    return{
      color: true,
      currentComponent: 'Projects',
      infoProject: Object
    }
  },
  components : {
    FooterPage,
    Projects,
    ContentProject,
    AboutMe
  },
  methods:{
    darkLight: function(c){
      const style = document.documentElement.style
      
      style.setProperty('--light-color', c ? '#DBD4CC' : '#282828')
      style.setProperty('--dark-color', c ? '#282828' : '#DBD4CC')
      style.setProperty('--light-color-opacity', c ? '#2828283f' : '#dbd4cc36')
      style.setProperty('--box-shadow-firts', c ? '#bab4ad' : '#1c1c1c')
      style.setProperty('--box-shadow-second', c ? '#fcf4eb' : '#343434')
      style.setProperty('--border-card-project', c ? '#bebebe' : '#333333')      

      this.color = c
      
    },
    showComponent: function(nameComponent, id){
      let component

      if(this.currentComponent == 'ContentProject'){
        component = document.querySelector('#contentProject')
      }else if(this.currentComponent != nameComponent){
        component = document.querySelector(id)
      }

      component.classList.remove('animate__fadeIn')
      component.classList.add('animate__fadeOut')
      setTimeout(() => {
        this.currentComponent = nameComponent        
      }, 500);

    },
    getInfoProject(info){
      this.infoProject = info
      this.showComponent('ContentProject', '#projects')
    }
  },
  mounted(){
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
    this.darkLight(!darkThemeMq.matches)
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&family=Yeseva+One&display=swap');

  :root {
    --light-color: #DBD4CC;
    --light-color-opacity: #2828283f;
    --dark-color: #282828;
    --box-shadow-firts : #bab4ad;
    --box-shadow-second : #fcf4eb;
    --border-card-project : #d1d1d1;
  }

  body { 
    font-family: 'Josefin Sans', sans-serif;
    background-color: var(--light-color); 
  }

  .noise{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    content: "";
    opacity: .035;
    z-index: 1000;
    pointer-events: none;
    background-image: url('https://firebasestorage.googleapis.com/v0/b/web-page-6656c.appspot.com/o/noise.gif?alt=media&token=f50c4912-2135-49af-97a4-b50c9b3c56a2');
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Yeseva One', cursive;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--dark-color);
  }

  /* width */
  ::-webkit-scrollbar {
  width: 1px;
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

  #nav{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 30px 30px 0px 30px;
  }

  #contents{
      max-width: 1060px;
      max-height: 65vh;
      height: 65vh;
      margin: auto;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      column-gap: 20px;
      overflow: scroll;
      overflow-x: hidden;
  }

  h1{
      text-align: center;
      font-weight: 900;
      font-size: 50px;
      text-transform: uppercase;
      margin: 30px 30px 20px 30px;
  }

  a{
    text-decoration: none;
    color: var(--dark-color);
    margin: 0px 10px;
  }

  /* switch */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--light-color-opacity);
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: var(--dark-color);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--dark-color);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .option_nav{
    margin-right: 10px;
    cursor: pointer;
    font-weight: bold;
  }

  @media screen and (max-width: 768px){
    h1{
      margin: 0px;
    }

    #nav{
      flex-direction: column-reverse;
    }
  }

</style>