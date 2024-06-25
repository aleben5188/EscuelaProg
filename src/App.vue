<script setup>
</script>

<template>
  <div>
    <router-link to="/">
         Home </router-link>
    <router-link to="/about"> 
       | About</router-link>

      <router-link to="/posts">
      | Post</router-link>

    <br/>
    <router-view ></router-view>
  </div>
</template>

<style scoped>
</style>