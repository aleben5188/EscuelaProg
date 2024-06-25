<template>
<h2>Listando </h2>

<ul>
 
  <li v-for="product in products" :key="product.id">
  {{ product.name }} -
 <router-link :to="`/product/${product.id}`">detalle</router-link>
  <button @click="goToProduct(product.id)">Ver detalle</button>
  </li>
</ul>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();


const products = ref([
  { id: 1, name: 'Producto 1', price: 100 },
  { id: 2, name: 'Producto 2', price: 200 },
  { id: 3, name: 'Producto 3', price: 300 },
  { id: 4, name: 'Producto 4', price: 400 },
  { id: 5, name: 'Producto 5', price: 500 },
])


function goToProduct(id) {
  router.push(`/product/${id}`)
}
</script>

<style scoped>
</style>