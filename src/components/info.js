Vue.component('info',{
    template:/*html*/`
    <main class="col px-0 flex-grow-1">
        <div class="container py-3">
            <div class="row row-cols-3 justify-content-center ">
                <div class="card col m-2 animate__animated animate__fadeInRight" style="width: 18rem;" v-for="(card, index) in cards">
                    <img class="card-img-top" v-bind:src="card.img" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{card.titulo}}</h5>
                        <p class="card-text">{{card.descripcion}}</p>
                        <a href="#" class="btn btn-dark" @click="showProject(index , 2)">Ver mas</a>
                    </div>
                </div>
            </div>
        </div>  
    </main>  
    `,
    data(){
        return{
            cards : {
                servoArm: {
                    img : "img/servomotor.jpg",
                    titulo: "Control Servomotor",
                    descripcion : "Servomotor controlado por comunicación serial usando Arduino y Processing como interfaz grafica."
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
            },

            projects : ''
        }

    },

    methods :{
        showProject: function(proj, page) {
            
            this.$store.state.project = proj
            this.$store.state.count = page
        }
    }
})