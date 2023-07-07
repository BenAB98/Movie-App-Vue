<script setup>
import { fetchApi } from '../fetchAPI'

fetchApi('https://api.themoviedb.org/3/configuration')
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
</script>

<template>
  <div class="bg-background">
    <header-component />
    <footer-component />
  </div>
</template>

<style scoped></style>
