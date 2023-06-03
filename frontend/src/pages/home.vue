<script setup lang="ts">
import { ref , onMounted, computed} from 'vue'
import { RouterLink, useRoute } from 'vue-router';
import { useEventoService } from '../api/eventoService';
import { EventoCollection} from '../types/index';
import EventoCard from '../components/EventoCard.vue';

const eventoService = useEventoService()
const eventoCollection= ref({} as EventoCollection)
const loading = ref(true)
const eventos = computed(()=>  eventoCollection.value.items)
// const pagination = computed(() => eventoCollection.value.items)
// const eventos = computed(()=>eventoCollection.value.eventos)

const route = useRoute()
const currentPage = route.query.page ? Number(route.query.page) : 1

onMounted(async () => {
  eventoCollection.value = await eventoService.get(currentPage)
  loading.value = false
})

</script>

<template>

  <head>
    <!-- <script src="../assets/js/color-modes.js"></script> -->

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.111.3">
    <title>VQR</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/album/">


</head>
  <body>
    <header data-bs-theme="dark">
    <header class="p-3 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
          </a>
  
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a  class="nav-link px-2 text-secondary">Home</a></li>
            <li><a href="#" class="nav-link px-2 text-white"><router-link to="/criarEvento">Criar Evento</router-link></a></li>
            <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
            <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
            <li><a href="#" class="nav-link px-2 text-white">About</a></li>
          </ul>
  
          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
          </form>
  
          <button type="button" class="btn btn-outline-light me-2"><router-link to="/Login">login</router-link></button>
          <div class="text-end">
            <button type="button" class="btn btn-warning">Cadastrar-se</button>
          </div>
        </div>
      </div>
    </header>


  </header>

<main>

  <div class="album py-5 bg-body-tertiary">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="evento in eventos">
        <EventoCard :id="evento.id"
        :nome="evento.nome" :parque="evento.parque" :cidade="evento.cidade" :local="evento.local" :data="evento.data" :horario="evento.horario" :valor_do_ingresso="evento.valor_do_ingresso" :cover="evento.cover"></EventoCard>
        </div>

        


        <!-- Exemplo do bootstrap -->
        <!-- <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>

</main>

<footer class="text-body-secondary py-5">

</footer>      
</body>


</template>
