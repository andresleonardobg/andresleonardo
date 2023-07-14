<template>
    <div class="post">
        <div class="content">
            <p class="content_project animate__fadeInUp">
                Hola soy <strong>Andrés Leonardo</strong> programador de software y web apasionado por los proyectos que implican retos donde la innovación tecnológica juegue un papel fundamental. Capaz de crear soluciones a todo tipo de problemas planteados en el manejo y manipulación de la información aplicando análisis, diseño y construcción de soluciones informáticas. Curioso en la diferentes tecnologías en que se pueda aplica la programación. 
            </p>
        </div>  
    </div>
</template>

<script>
export default {
    name: 'AboutMe'
}
</script>

<style scoped>

    .post{
        width: 100%;
        display: flex;
        align-items: center;
        border-radius: 5px;
        padding: 30px;
        background-image: url('https://firebasestorage.googleapis.com/v0/b/web-page-6656c.appspot.com/o/about.webp?alt=media&token=497d0b0e-caa8-4c6c-9466-d4620a82e4aa');
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
    }

    .post div{
        width: 530px;
        padding: 0px;
    }

    .content{
        text-align: left;
        max-height: 530px;
        overflow: scroll;
        overflow-x: hidden;
    }


    .content p{
        max-width: 320px;
        padding: 50px;
        background-color: #000000ab;
        text-align: left;
        font-size: 20px;
        margin: 0px;
        color: #DBD4CC;
    }

    @media screen and (max-width: 768px){
        .post{
            flex-wrap: wrap;
        }

        .post div{
            width: 100%;
        }

        .content{
            border-right: none;
        }

        .content p{
            max-width: 245px;
        }

        
    }

    @media screen and (max-width: 425px){
        .content p{
            max-width: 150px;
            padding: 7px;
            font-size: 12px;
        }
    }


</style>