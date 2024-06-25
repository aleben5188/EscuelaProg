<script setup>
import image from "./assets/matematica.png"

export default {
  data: function () {
    return {
      image: image
    }
  }
}

</script>

<template>

<img v-bind:src="require('assets/matematica.png')" />

<style scoped>

</style>