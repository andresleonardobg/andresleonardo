Vue.component('project',{
    template: /*html*/`

    <div 
    class="col text-dark justify-content-left d-flex 
    animate__animated animate__fadeIn">
        <div class= "w-50 h-50 position-relative alignVertical justify-content-left">
            <div v-for = "(card, id) in cards" v-if="id == project">
                <h2>{{card.titulo}}</h2>
                <p>{{card.descripcion}}</p>            
            </div>
        </div>
    </div>    
    `,
    data(){
        return {
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
            } 
        }
    },

    computed: {
        ...Vuex.mapState(['project'])
    }
})