<template>
  <h2>Vista de productos</h2>
  <div>
    <p>Producto {{ id }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const id = route.params.id;

console.log(id);
</script>

<style scoped>
</style>