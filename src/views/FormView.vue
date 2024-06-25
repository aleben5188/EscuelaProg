<template>
    <div class="container mt-4">
      <h2 class="text-center">Formulario de Post</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
        <label for="title" class="form-label">Título</label>
         <input type="text" id="title" class="form-control" v-model="post.title" />
        </div>
          <div class="mb-3">
        <label for="Contenido" class="form-label">Contenido</label>
         <textarea type="text" id="Contenido" class="form-control" rows="5" v-model="post.body" > </textarea>
        </div>
          <div class="d-flex justify-content-between">
            <button type="submit" class="btn btn-primary">Guardar</button>
            <button type="button" class="btn btn-danger" @click="handleDelete">Eliminar</button>
          </div>
      </form>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const postId = route.params.id;  


const post = ref ({
  title: '',
  body: ''
});

if (postId){
  const fetchPost = async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/${postId}');
    post.value = response.data;
  }
  fetchPost();
}

const handleSubmit = async () => {
  if (postId){
    await axios.put('https://jsonplaceholder.typicode.com/posts/${postId}', post.value);
  } else{
    await axios.post('https://jsonplaceholder.typicode.com/posts', post.value);
  }
}

</script>