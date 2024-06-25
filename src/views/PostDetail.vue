<template>
 
    <h2>vamos a mostrar el detalle de posts, como tomar el ID</h2>

    <div>
      <h3>{{ post.title }}</h3>
      <p>{{post.body}}</p>

      <button @click="back">VOLVER</button>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();  //nos permite acceder a la ruta actual
const id = route.params.id; //obtenemos el id de la ruta actual

const router = useRouter(); //nos permite navegar entre rutas

const back = () => {
  router.push('/posts');
}

const post = ref({});

const fetchPost = async () => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  post.value = response.data;
}

onMounted(fetchPost);

</script>