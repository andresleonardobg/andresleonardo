<template>
    <div class="content_cards">
        <div class="content_card" v-for=" index in projects" :key="index">
            <div class="project_card shadow_light" @click="sendProjectInfo(index)">
                <img :src="index.image[0]" :alt="index.name" >
                <div class="texts">
                    <h2>
                        {{index.name}}
                    </h2>
                    <p>
                        {{index.description.substring(0,120)+".."}}
                    </p>
                </div>
            </div>
        </div>
    </div>     
</template>

<script>
import { info } from "../firebase"

export default {
    name: "Projects",
    data(){
        return{
            projects: info
        }
    },
    methods: {
        sendProjectInfo: function ( info ) {
            this.$emit('projectInfo', info)
        }
    }
}
</script>

<style scoped>
    .content_cards{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        overflow: scroll;
        overflow-x: hidden;
        padding-top: 10px;
        cursor: pointer;
    }

    .content_card{
        max-width: 300px;
        max-height: 370px;
        width: 300px;
        height: 370px;
        margin: 20px;
        display: flex;
        align-items: center;
    }

    .project_card{
        max-width: 300px;
        max-height: 370px;
        width: 298px;
        height: 368px;
        transition-duration: .5s;
        border: solid 1px var(--border-card-project);
        border-radius: 10px;
    }

    .project_card:hover{
        transition-duration: .5s;
        width: 300px;
        height: 370px;
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
        border-radius: 10px;
    }

    .project_card:hover img{
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
    }

</style>