<script setup lang="ts">
// import { ref } from 'vue'

defineProps<{
  nome: string,
  descricao: string,
  valor: number
}>()

</script>

<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <h3 class="card-title">{{ nome }}</h3>
      <p class="card-text">Descrição: {{ descricao }}</p>
      <p class="card-text">Preço: {{ valor }}</p>
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