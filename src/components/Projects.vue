<template>
    <div style="width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      column-gap: 20px;
      overflow: scroll;
      overflow-x: hidden;">
        <div class="project shadow_light" v-for=" index in projects" :key="index">
            <img :src="index.image[0]" :alt="index.name" >
            <div class="texts">
                <h2 v-on:click="showProject(index.slug)">
                    {{index.name}}
                </h2>
                <p>
                    {{index.description.substring(0,120)+".."}}
                </p>
            </div>
        </div>
    </div>        
</template>

<script>
import { getDocs, collection } from "firebase/firestore"
import { db } from "../firebase"

export default {
    name: "Projects",
    data(){
        return{
            projects: []
        }
    },
    methods: {
        showProject : function(destination){
            this.$router.push("/andresleonardo/" + destination);
        },
        get_data: async function(){
            const querySnapshot = await getDocs(collection(db, "projects"));

            querySnapshot.forEach((doc) => {
            this.projects.push(doc.data())
            }) 
        }
    },
    mounted(){
        this.get_data()
    }
}
</script>

<style scoped>

    .project{
        max-width: 300px;
        max-height: 400px;
        margin: 20px 0px;
        padding: 10px 0px;
        transition-duration: .5s;
    }

    .project:hover{
        transition-duration: .5s;
        padding: 10px 0px;
        border-radius: 10px;
        background: var(--light-color);
        box-shadow:  9px 9px 23px var(--box-shadow-firts),
                    -9px -9px 23px var(--box-shadow-second);        
    }

    img{
        height: 250px;
        width: 250px;
        margin: 10px auto;
        filter: grayscale();
        transition-duration: .5s;
        object-fit: cover;
    }

    .project:hover img{
        filter: grayscale(0);
        transition-duration: .5s;
    }

    .texts{
        text-align: left;
        padding: 0 25px;
    }

    .texts p{
        font-size: 14px;
        margin: 0px;
    }

    .texts h2{
        font-size: 15px;
        margin: 5px auto;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
    }

</style>