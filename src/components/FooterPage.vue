<template>
    <div id="footer">
        <ul>
            <li><a href="https://www.linkedin.com/in/andres-bermudez/" target="_blank" class="fa fa-linkedin"></a></li>
            <li><a href="https://github.com/andresleonardobg" target="_blank" class="fa fa-github"></a></li>
            <li><a href="https://www.youtube.com/channel/UCZSr0GC79LQF-RRAcTaVJpg" target="_blank" class="fa fa-youtube"></a></li>
            <!-- 
            <li><a href="" class="fa fa-twitter"></a></li> -->
        </ul>
        <div>
            <h6 style="text-align: center;">2022.</h6>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterPage"
}
</script>

<style scoped>
    #footer{
        max-width: 85vw;
        margin: 10px auto;
        border-top: solid 1px var(--dark-color);
        padding-top: 10px;
    }

    #footer ul{
        display: flex;
        justify-content: center;
        margin: 10px auto;
        padding: 0px;
    }

    #footer ul li{
        list-style: none;
    }

    #footer ul li a{
        text-decoration: none;
        color: var(--second_color);
        font-size: 25px;
        padding: 0 10px;
        
    }

    h6{
        margin: 0px auto;
        font-family: 'Inconsolata', monospace;
    }
</style>