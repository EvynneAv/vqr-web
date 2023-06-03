<script setup lang="ts">
import { Evento } from '../types/index';
import { useUploadFile } from '../composables/useUploadURL';
const evento = defineProps<Evento>()




</script>

<template>
  <!-- <router-link :to="`/mangas/${evento.id}`"></router-link> -->
  <div class="card shadow-sm">
      <img class="cover" :src="useUploadFile(cover.url)">
    <div class="card-body">
      <h3 class="card-title">{{ nome }}</h3>
      <p class="card-text">Número do evento: {{ id }}</p>
      <p class="card-text">Parque: {{ parque }}</p>
      <p class="card-text">Cidade: {{ cidade }}</p>
      <p class="card-text">Local: {{ local }}</p>
      <p class="card-text">Data: {{ data }}</p>
      <p class="card-text">horário: {{ horario }}</p>
      <p class="card-text">Valor: {{ valor_do_ingresso }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">

        <button class="btn btn-primary d-inline-flex align-items-center" type="button">
        Comprar ingressos</button>
        </div>
        <small class="text-body-secondary">9 mins</small>
      </div>
    </div>
  </div>
</template>