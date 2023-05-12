<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
<p>E-mail:</p>
<input type="email">
<p>Senha:</p>
<input type="password"/>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
