<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>

<div class="login">
  <label>E-mail:</label>
  <input type="email" >
  <label>Senha:</label>
  <input type="password"/>
  <br><br>
  <button>Entrar</button>
</div>

</template>

<style scoped>

.login{
  height: 200px;
  align-content: center;

}
button{
  font-size: 10px;
  padding: 10px;

}

</style>
