<script setup lang="ts">
import { ref } from 'vue'
const eventos = ref([
    {
        nome: 'Evento 1',
        descricao: 'Descrição do evento 1',
        data: '2021-10-10',
        horario: '10:00',
        local: 'Local do evento 1',
        valor: 10.00,
        imagem: 'https://picsum.photos/200/300'

    },
    {
        nome: 'Evento 2',
        descricao: 'Descrição do evento 2',
        data: '2021-10-10',
        horario: '10:00',
        local: 'Local do evento 2',
        valor: 10.00,
        imagem: 'https://picsum.photos/200/300'

    }
]);

</script>

<template>
  <div class="card shadow-sm">
    <img :src="getUploadURL(cover.url)">
    <div class="card-body">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-text">Volume: {{ number }}</p>
      <p class="card-text">Price: {{ price }}</p>
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