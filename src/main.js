Vue.component('sidebar',{
    template: /*html*/`
    <div class="container-fluid">
        <div class="row min-vh-100">
            <aside class="col-md-3 p-0 bg-dark">
                <nav class="navbar flex-column aling-items-center py-5 text-center">
                    <div class="text-center p-3 text-white position-fixed">
                        <h1>Andres Leonardo.</h1>
                        <h3 class="text-muted">Soft­ware Development</h3>
                        <ul class="w-100 p-0" >
                            <li class="nav-item" v-for="(enlace, index) in enlaces">
                                <a class="nav-link" @click="page(index)" id="nav"> 
                                {{enlace}} 
                                </a>
                            </li>
                        </ul>
                        <social></social>
                    </div>                   
                </nav>                
            </aside>
            <info v-if="pagina == 0"></info>
            <about v-if="pagina == 1"></about>
        </div>
    </div>
    `,
    data(){
        return{
            enlaces: [
                "Proyectos", 
                "Sobre mi"
            ],
            pagina : 1
        }
    },
    methods: {
        page: function (page) {
          this.pagina = page
        },
    }
})

