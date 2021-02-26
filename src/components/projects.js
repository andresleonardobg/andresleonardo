Vue.component('project',{
    template: /*html*/`
    <div 
    class="col justify-content-left d-flex 
    animate__animated animate__fadeIn">
        <div class= "position-relative justify-content-center mx-5 my-5">
            <div v-for = "(card, id) in cards" v-if="id == project" class="justify-content-center">
                <h2 class="text-center">{{card.titulo}}</h2>
                <p class="px-5">{{card.herramientas}}</p>
                <div class="container">
                    <div class="row justify-content-center border mb-3" >
                        <img class="img py-3" v-for="img in card.img" v-bind:src="img" >
                    </div>
                </div> 
                <p class="px-5">{{card.descripcion}}</p>
                <a class="px-5" target="_blank" v-for="(repo, id) in card.repositorio" :href="repo.repositorio">Repositorio {{id}}</a><br><br>
                <h3 class="px-5">Proxima actualización</h3>
                <p class="px-5">{{card.siguiente}}</p>       
            </div>
        </div>
    </div>    
    `,
    data(){
        return {
            cards : {
                servoArm: {
                    img : ["img/servo/servomotor.jpg", "img/servo/processing.png", "img/servo/arduino-uno.png", "img/servo/app.png" ],
                    titulo: "Control Servomotor",
                    herramientas: "Este es un pequeño proyecto en el cual tiene la finalidad de poder convertirse en un sistema de control de brazo mecánico basado en Arduino. Inicialmente empecé este proyecto creando un pequeño programa utilizando el lenguaje de programación Processing basado en java el cual simplifica un poco este lenguaje ya que fue creado con la finalidad de introducir a principiantes en la programación y artistas.",
                    descripcion : "Lo primero que realice fue creando un objeto llamado potenciómetro lo cual como su nombre indica funcionaria al igual que uno físico, controlaría el nivel de voltaje. Una vez ya creado lo siguiente fue programar una placa Arduino el cual se puede programar con el lenguaje C/C++, donde conecte un potenciómetro físico y un servomotor a la placa donde su funcionalidad era a medida que movía el potenciómetro el servomotor se movía. Después de ya probado lo básico lo siguiente fue poder realizar una conexión serial lo cual me serviría para poder comunicar el pequeño programa que he creado con Processing directamente con la placa de Arduino, una vez realizado esto cree utilice la función map() para poder modificar los valores del potenciómetro a los valores del rango en grados que se puede mover el servomotor.",
                    repositorio: {
                        repo1 : "https://github.com/andresleonardobg/servoArm"
                    },
                    siguiente: "Al tratar de crear un nuevo objeto potenciómetro y conectar otro servomotor a la placa no responden de manera correcta por lo cual espero encontrar la solución para poder actualizar y seguir con un nuevo paso."
                },
                nodeRed: {
                    img : ["img/nodered/nodered.png", "img/nodered/raspberrypi.png", "img/nodered/moduloDimmer.png", "img/nodered/8266.jpg" ],
                    titulo: "Control Servomotor",
                    herramientas: "Este es un pequeño proyecto en el cual tiene la finalidad de poder convertirse en un sistema de control de brazo mecánico basado en Arduino. Inicialmente empecé este proyecto creando un pequeño programa utilizando el lenguaje de programación Processing basado en java el cual simplifica un poco este lenguaje ya que fue creado con la finalidad de introducir a principiantes en la programación y artistas.",
                    descripcion : "Lo primero que realice fue creando un objeto llamado potenciómetro lo cual como su nombre indica funcionaria al igual que uno físico, controlaría el nivel de voltaje. Una vez ya creado lo siguiente fue programar una placa Arduino el cual se puede programar con el lenguaje C/C++, donde conecte un potenciómetro físico y un servomotor a la placa donde su funcionalidad era a medida que movía el potenciómetro el servomotor se movía. Después de ya probado lo básico lo siguiente fue poder realizar una conexión serial lo cual me serviría para poder comunicar el pequeño programa que he creado con Processing directamente con la placa de Arduino, una vez realizado esto cree utilice la función map() para poder modificar los valores del potenciómetro a los valores del rango en grados que se puede mover el servomotor.",
                    repositorio: "https://github.com/andresleonardobg/servoArm",
                    siguiente: "Al tratar de crear un nuevo objeto potenciómetro y conectar otro servomotor a la placa no responden de manera correcta por lo cual espero encontrar la solución para poder actualizar y seguir con un nuevo paso."
                },
                vidieojuego: {
                    img : ["img/cinco/game.png", "img/cinco/godot.png"],
                    titulo: "Cinco",
                    herramientas: "Este es un videojuego que está siendo desarrollado con Godot engine, un motor de videojuegos opensource creado en argentina y que mantiene una comunidad muy activa. Tiene un lenguaje nativo basado en Python lo cual lo hace una herramienta fácil y rápida de aprender. He estado estudiándolo por mi cuenta en mi tiempo libre ya que mas que jugar a videojuegos me gusta saber como se hacen y este motor me parece una buena herramienta para empezar a crear ya que cuenta con su propio lenguaje llamado GDscript aunque también puede usarse C# o C++ y tambien posee visualscript.",
                    descripcion : "Este proyecto lo he iniciado para probar los conocimientos que he adquirido al estudiarlo a la par tambien he aprendido a manejar otras herramientas opensource como gimp(edición de imagen), krita(dibujo), lmms(música) o blender(3d). En este momento su funcionalidad ha sido terminada he podido implementar su gestión de estados, comunicación entre nodos y escenas que es como el motor trabaja, similar a componentes en frameworks como Vue.",
                    repositorio: {
                        repo1 : "https://github.com/andresleonardobg/Cinco"
                    },
                    siguiente: "El videojuego esta en su fase final hace falta su parte grafica ya que en este momento se encuentra en borrador y ajustar la caja de diálogos que he creado por lo cual se espera poder publicarlo a finales de mes de marzo de 2021."
                },
                appTareas: {
                    img : ["img/servo/servomotor.jpg", "img/servo/processing.png", "img/servo/arduino-uno.png", "img/servo/app.png" ],
                    titulo: "Control Servomotor",
                    herramientas: "Este es un pequeño proyecto en el cual tiene la finalidad de poder convertirse en un sistema de control de brazo mecánico basado en Arduino. Inicialmente empecé este proyecto creando un pequeño programa utilizando el lenguaje de programación Processing basado en java el cual simplifica un poco este lenguaje ya que fue creado con la finalidad de introducir a principiantes en la programación y artistas.",
                    descripcion : "Lo primero que realice fue creando un objeto llamado potenciómetro lo cual como su nombre indica funcionaria al igual que uno físico, controlaría el nivel de voltaje. Una vez ya creado lo siguiente fue programar una placa Arduino el cual se puede programar con el lenguaje C/C++, donde conecte un potenciómetro físico y un servomotor a la placa donde su funcionalidad era a medida que movía el potenciómetro el servomotor se movía. Después de ya probado lo básico lo siguiente fue poder realizar una conexión serial lo cual me serviría para poder comunicar el pequeño programa que he creado con Processing directamente con la placa de Arduino, una vez realizado esto cree utilice la función map() para poder modificar los valores del potenciómetro a los valores del rango en grados que se puede mover el servomotor.",
                    repositorio: ["https://github.com/andresleonardobg/servoArm"],
                    siguiente: "Al tratar de crear un nuevo objeto potenciómetro y conectar otro servomotor a la placa no responden de manera correcta por lo cual espero encontrar la solución para poder actualizar y seguir con un nuevo paso."
                },
                pizzaCore: {
                    img : ["img/pizzacore/pizzacore.png", "img/pizzacore/app.png", "img/pizzacore/app2.png", "img/pizzacore/app3.png" ],
                    titulo: "Pizza Core",
                    herramientas: "Este es una pequeña aplicación creada con el motor de videojuegos Godot la cual surgió como una forma de ayudar a un amigo para gestionar las cuentas de un pequeño restaurante que abrió hace unos meses llamado Pizza Core. He decidido hacerlo con este motor en un inicio dado que contiene nodos o componentes para UI que hacen que el trabajo se mucho más rápido pero dado que a medida que he ido trabajando con mi amigo he visto mas y mas necesidades en esta como poder implementar una base de datos para llevar un registro más eficiente y un modo más ágil de crear ítems ya que constantemente ha estado incluyendo mas productos a su negocio.",
                    descripcion : "En un principio lo que cree fue una pequeña aplicación que pudiera automatizar registros en un archivo csv que contuviera las ventas del día y poder realizar gráficos en Excel, funciono pero a medida que observaba el negocio y como mi amigo añadía mas productos al negocio he tomado la decisión de hacer un aplicación un poco mas compleja pero esta vez sin usar Godot si no tecnologías web html, css, javascript y hacer uso del framework Electronjs con el cual se pueden construir aplicaciones de escritorio, en estos momentos ya he creado una pequeña aplicación donde se pueden crear ítems básicamente cree un CRUD el cual esta conectado a una base de datos Mysql.",
                    repositorio: {
                        Godot : "https://github.com/andresleonardobg/accountControl", 
                        Electronjs : "https://github.com/andresleonardobg/taskAppDesktop"
                    },
                    siguiente: "La siguiente actualización de este aplicativo es poder crear pestañas para cada uno de los tipos de productos que se vendan en este caso comida y bebidas, luego de esto poder implementar una librería que he estado estudiando llamada charts js para poder grafica el movimiento del negocio."
                },
                bateria:{
                    img : ["img/servo/servomotor.jpg", "img/servo/processing.png", "img/servo/arduino-uno.png", "img/servo/app.png" ],
                    titulo: "Control Servomotor",
                    herramientas: "Este es un pequeño proyecto en el cual tiene la finalidad de poder convertirse en un sistema de control de brazo mecánico basado en Arduino. Inicialmente empecé este proyecto creando un pequeño programa utilizando el lenguaje de programación Processing basado en java el cual simplifica un poco este lenguaje ya que fue creado con la finalidad de introducir a principiantes en la programación y artistas.",
                    descripcion : "Lo primero que realice fue creando un objeto llamado potenciómetro lo cual como su nombre indica funcionaria al igual que uno físico, controlaría el nivel de voltaje. Una vez ya creado lo siguiente fue programar una placa Arduino el cual se puede programar con el lenguaje C/C++, donde conecte un potenciómetro físico y un servomotor a la placa donde su funcionalidad era a medida que movía el potenciómetro el servomotor se movía. Después de ya probado lo básico lo siguiente fue poder realizar una conexión serial lo cual me serviría para poder comunicar el pequeño programa que he creado con Processing directamente con la placa de Arduino, una vez realizado esto cree utilice la función map() para poder modificar los valores del potenciómetro a los valores del rango en grados que se puede mover el servomotor.",
                    repositorio: ["https://github.com/andresleonardobg/servoArm"],
                    siguiente: "Al tratar de crear un nuevo objeto potenciómetro y conectar otro servomotor a la placa no responden de manera correcta por lo cual espero encontrar la solución para poder actualizar y seguir con un nuevo paso."
                }                
            } 
        }
    },

    computed: {
        ...Vuex.mapState(['project'])
    }
})