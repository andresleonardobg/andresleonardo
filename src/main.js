Vue.component('sidebar',{
    template: /*html*/`
    <div class="container-fluid">
        <div class="row min-vh-100">
            <aside class="col-md-3 p-0 bg-dark">
                <nav class="navbar flex-column aling-items-center py-5 text-center ">
                    <div class="text-center p-3 text-white">
                        <h1>Andres Leonardo.</h1>
                        <h3 class="text-muted">Programador</h3>
                    </div>
                    <div>
                        <ul class="w-100 p-0" >
                            <li class="nav-item">
                                <a class="nav-link text-white" @click="Page0"> 
                                {{enlaces[0]}} 
                                </a>
                                <a class="nav-link text-white" @click="Page1"> 
                                {{enlaces[1]}} 
                                </a>
                            </li>
                            </li>
                        </ul>
                    </div>
                </nav>
                <social></social>
            </aside>
            <about v-if="pagina == 0"></about>
            <info v-if="pagina == 1"></info>
        </div>
    </div>
    `,
    data(){
        return{
            enlaces: [
                "Sobre mi", 
                "Proyectos"
            ],
            pagina : 0
        }
    },
    methods: {
        Page0: function () {
          this.pagina = 0
          console.log('pagina 0')
        },
        Page1: function () {
            this.pagina = 1
            console.log('pagina 1')
        }
    }
})

