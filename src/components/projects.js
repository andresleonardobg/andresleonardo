Vue.component('project',{
    template: /*html*/`

    <div 
    class="col justify-content-left d-flex 
    animate__animated animate__fadeIn">
        <div class= "position-relative justify-content-center mx-5 my-5">
            <div v-for = "(card, id) in cards" v-if="id == project" class="justify-content-center">
                <h2 class="text-center">{{card.titulo}}</h2>
                <p class="px-5">{{card.descripcion}}</p>
                <div class="container">
                    <div class="row justify-content-center border mb-3" >
                        <img class="img py-3" v-for="img in card.img" v-bind:src="img" >
                    </div>
                </div>
                <p class="px-5">{{card.descripcion}}</p>           
            </div>
        </div>
    </div>    
    `,
    data(){
        return {
            cards : {
                servoArm: {
                    img : ["img/servomotor.jpg"],
                    titulo: "Control Servomotor",
                    descripcion : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                nodeRed: {
                    img : "img/nodeRed.png",
                    titulo: "Domotica",
                    descripcion : "Control de luces de corriente alterna usando microcontrolador ESP8266 por medio de Mosquitto(MQTT) y NodeRed."
                },
                vidieojuego: {
                    img : "img/cinco.jpg",
                    titulo: "Cinco (Videojuego)",
                    descripcion : "Pequeño juego de tipo 'Point and Click' desarrolado con el mortor de videojuego Godot Engine"
                },
                appTareas: {
                    img : "img/tareas.png",
                    titulo: "Tareas",
                    descripcion : "Pequeña aplicación de escritorio realiza con electron.js y vue.js para control de tareas."
                },
                pizzaCore: {
                    img : "img/pizzacore.png",
                    titulo: "Pizza Core",
                    descripcion : "Aplicación de escritorio para gestionar la contabilización de un pequeño negocio. Creada con el motor de videojuegos Gogot."
                },
                bateria:{
                    img : "img/piezoelectrico.jpg",
                    titulo: "Pads",
                    descripcion : "Creación de Pads usando piezoelectricos y Arduino usando la comunicación MIDI para ulizarse en diferentes programas enfocados a la musica."
                }                
            } 
        }
    },

    computed: {
        ...Vuex.mapState(['project'])
    }
})