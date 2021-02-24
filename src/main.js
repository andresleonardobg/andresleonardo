Vue.component('sidebar',{
    template: /*html*/`
    <div class="container-fluid">
        <div class="row min-vh-100">
            <aside class="col-md-3 p-0 bg-dark">
                <nav class="navbar flex-column aling-items-center py-5 text-center">
                    <div class="text-center p-3 text-white position-fixed">
                        <h1 class="animate__animated animate__fadeIn">Andres Leonardo.</h1>
                        <h3 class="text-muted animate__animated animate__fadeIn animate__delay-1s">Soft­ware Development</h3>
                        <ul class="w-100 p-0 animate__animated animate__fadeIn animate__delay-2s" >
                            <li class="nav-item" v-for="(enlace, index) in enlaces">
                                <a class="nav-link" @click="$store.commit('changePage(index)')" id="nav"> 
                                {{enlace}} 
                                </a>
                            </li>
                        </ul>
                        <social class="animate__animated animate__fadeIn animate__delay-3s"></social>
                    </div>                   
                </nav>                
            </aside>
            <info v-if="$store.state.page == 0"></info>
            <about v-if="$store.state.page == 1"></about>
        </div>
    </div>
    `,
    data(){
        return{
            enlaces: [
                "Proyectos", 
                "Sobre mi"
            ]
        }
    },
    methods: {
        page: function (pagina) {
          page = pagina
        }
    },
})

