
<template>
  <h2>Vista - listando de post</h2>
    <RouterLink to="/form" class="btn btn-primary">Agregar Nuevo Post</RouterLink>
    <ul class="list-group">
        <li class="list-group-item" v-for="post in posts" :key="post.id">
      <RouterLink :to="`/post/${post.id}`">
          {{ post.id }} : {{ post.title }} - {{ post.body }}
      </RouterLink> | 
       <RouterLink :to="`/form/${post.id}`" class="btn btn-secondary">Editar</RouterLink>
     </li>
    </ul>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const posts = ref([])

const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  posts.value = response.data
}

onMounted(fetchPosts)

</script>



