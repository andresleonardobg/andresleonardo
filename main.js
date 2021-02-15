Vue.component('sidebar',{
    template: /*html*/`
    <div class="container-fluid">
        <div class="row min-vh-100 flex-column flex-md-row">
            <aside class="col-12 col-md-3 col-x1-2 p-0 bg-dark flex-shrink-1">
                <nav class="navbar navbar-expand-md navbar-dark bd-dark flex-md-column flex-row aling-items-center py-2 text-center sticky-top" id="sidebar">
                    <div class="text-center p-3">
                        <a href="#" class="navbar-brand mx-0 font-weight-bold text-nowrap"><h1>Andres Leonardo</h1></a>
                    </div>
                    <div class="collapse navbar-collapse order-last" id="nav">
                        <ul class="navabar-nav flex-column w-100 justify-content-center">
                            <li class="nav-item">
                                <a href="#" class="nav-link text-white"> Sobre mi </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link text-white"> Proyectos </a>
                            </li>
                            </li>
                        </ul>
                    </div>
                    <ul class="nav justify-content-center">
                        <li class="bnav-item">
                            <a href="https://twitter.com/AndresL97587552" class="nav-link text-white" target="_blank"><i class="fab fa-twitter fa-lg"></i></a>
                        </li>
                        <li class="bnav-item">
                            <a href="https://github.com/andresleonardobg" class="nav-link text-white" target="_blank"><i class="fab fa-github fa-lg"></i></i></a>
                        </li>
                        <li class="bnav-item">
                            <a href="https://soundcloud.com/andres-leonardo-801321306" class="nav-link text-white" target="_blank"><i class="fab fa-soundcloud fa-lg"></i></i></a>
                        </li>
                        <li class="bnav-item">
                            <a href="https://www.youtube.com/channel/UCZSr0GC79LQF-RRAcTaVJpg?view_as=subscriber" class="nav-link text-white" target="_blank"><i class="fab fa-youtube fa-lg"></i></a>
                        </li>
                        <li class="bnav-item">
                            <a href="https://www.linkedin.com/in/andres-bermudez/" class="nav-link text-white" target="_blank"><i class="fab fa-linkedin-in fa-lg"></i></i></a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main class="col px-0 flex-grow-1">
                <div class="container py-3">
                    <article>
                        <h1 class="font-weight-light">HI, Hello World</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum corrupti adipisci facere sint in laborum, perspiciatis id fugit aspernatur quis accusantium iusto! Autem veritatis accusantium, perferendis mollitia saepe nobis dicta!</p>
                    </article>
                </div>
            </main>
        </div>
    </div>
    ` 
})

var app = new Vue({
    el: '#app'
})