<script setup lang="ts">
import {ref} from 'vue'
// import {useRouter} from 'vue-router'
import {  Evento } from '../types/index';
import { useUploadFile } from '../../composables/useUploadURL'
// import { useErrorUtil } from '../../composables/useApplicationError'
import { useEventoService } from '../api/eventoService'

const eventoService = useEventoService()
const evento = ref<Evento>({} as Evento)
  // const cover = ref<File>()
    // const router = useRouter()

    async function create(){
      const {nome, parque, cidade, local, data, horario, valor_do_ingresso, descricao, qtd_ingressos} = evento.value
    }





</script>

<template>

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.111.3">
    <title>Signin Template · Bootstrap v5.3</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/sign-in/">


<!-- Custom styles for this template -->

    <link href="sign-in.css" rel="stylesheet">
  </head>
  
  <header data-bs-theme="dark">
    <header class="p-3 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
          </a>
  
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 text-white"><router-link to="/">Home</router-link></a></li>
            <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
            <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
            <li><a href="#" class="nav-link px-2 text-white">About</a></li>
          </ul>
  

  
          <div class="text-end">
          
            <!-- <button type="button" class="btn btn-warning">Cadastrar-se</button> -->
          </div>
        </div>
      </div>
    </header>
  </header>

   <body class="bg-body-tertiary">
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol id="check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
      </symbol>
      <symbol id="circle-half" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
      </symbol>
      <symbol id="moon-stars-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
      </symbol>
      <symbol id="sun-fill" viewBox="0 0 16 16">
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
      </symbol>
    </svg>

 <div class="container text-center">
  <main>
    <div class="py-3 text-center">
      <img class="d-block mx-auto mb-4" src="../../LOGO.png" alt="" width="72" height="57">
      <h2>Criar Evento</h2>
      
    </div>

    <div class="container d-flex justify-content-center">

      <div class="col-md-7 col-lg-7 ">

        <form class="needs-validation" novalidate="">
          <div class="row g-3">
              
                <div class="col-12">
                  <label for="email" class="form-label">Nome do evento </label>
                  <input type="text" class="form-control" id="nome" v-model="evento.nome">
                  <!-- <div class="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div> -->
                </div>
                <div class="col-12">
                    <label for="parque" class="form-label"> Parque de vaquejada </label>
                    <input type="text" class="form-control" id="parque" v-model="evento.parque">
                    <!-- <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                    </div> -->
                </div>

                <div class="col-sm-6">
                  <label for="cidade" class="form-label">Cidade</label>
                  <input type="text" class="form-control" id="cidade" placeholder=""  required="" v-model="evento.cidade">
                  <!-- <div class="invalid-feedback">
                    Valid first name is required.
                  </div> -->
                </div>
    
                <div class="col-sm-6">
                  <label for="local" class="form-label">Local</label>
                  <input type="text" class="form-control" id="local" placeholder="" v-model="evento.local" required="">
                  <!-- <div class="invalid-feedback">
                    Valid last name is required.
                  </div> -->
                </div>

                <div class="col-sm-6">
                  <label for="data" class="form-label">Data</label>
                  <input type="date" class="form-control" id="data" placeholder="" v-model="evento.data" required="">
                  <!-- <div class="invalid-feedback">
                    Valid first name is required.
                  </div> -->
                </div>
    
                <div class="col-sm-6">
                  <label for="horario" class="form-label">Horário</label>
                  <input type="time" class="form-control" id="horario" placeholder="" v-model="evento.horario" required="">
                  <!-- <div class="invalid-feedback">
                    Valid last name is required.
                  </div> -->
                </div>
                
                
            <div class="col-12">
              <label for="descricao" class="form-label">Descrição</label>
              <textarea class="form-control" id="descricao" rows="3" v-model="evento.descricao"></textarea>
              <!-- <input type="text" class="form-control" id="address" placeholder="1234 Main St" required=""> -->
              <!-- <div class="invalid-feedback">
                Please enter your shipping address.
              </div> -->
            </div>

            <div class="col-sm-3">
                  <label for="qtdIngressos" class="form-label">N° de ingressos</label>
                  <input type="number" class="form-control" id="qtdIngressos" placeholder="" v-model="evento.qtd_ingressos" required="">
                  <!-- <div class="invalid-feedback">
                    Valid last name is required.
                  </div> -->
            </div>
            <!-- <div class="col-sm-4">
                  <label for="qtdIngressos" class="form-label">Quantidade de ingressos</label>
                  <input type="number" class="form-control" id="qtdIngressos" placeholder="" value="" required="">
                    <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
            </div> -->
            <!-- <div class="col-md-3">
              <label for="zip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="zip" placeholder="" required="">
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div> -->
          </div>

          <hr class="my-4">
          <router-link to="/" class="btn btn-danger">Cancelar</router-link>
          <button class="w-25 btn btn-primary btn-lg" @click="create">Criar evento</button>
        </form>
      </div>
    </div>
  </main>

  <footer class="my-5 pt-5 text-body-secondary text-center text-small">
    <p class="mb-1">© 2017–2023 Company Name</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="#">Privacy</a></li>
      <li class="list-inline-item"><a href="#">Terms</a></li>
      <li class="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer>
</div>

</body>

</template>

<style scoped>

</style>
