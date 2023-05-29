<script setup lang="ts">
import { Evento } from '../api/eventoService';
import { useUploadFile } from '../composables/useUploadURL';
const evento = defineProps<Evento>()




</script>

<template>
  <router-link :to="`/mangas/${evento.id}`"></router-link>
  <div class="card shadow-sm">
    <figure>
      <img class="cover" :src="useUploadFile(cover.url)">
    </figure>
    <div class="card-body">
      <h3 class="card-title">{{ nome }}</h3>
      <p class="card-text">Número do evento: {{ id }}</p>
      <p class="card-text">Parque: {{ parque }}</p>
      <p class="card-text">Cidade: {{ cidade }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
        </div>
        <small class="text-body-secondary">9 mins</small>
      </div>
    </div>
  </div>
</template>