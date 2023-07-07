<script setup>
import { ref } from 'vue'
import { fetchApi } from '../fetchAPI'
import Movies from './Movies.vue'
import Skeleton from './Skeleton.vue'
const moviesList = ref([])
fetchApi('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=3')
  .then((response) => (moviesList.value = response.results))
  .catch((err) => console.log(err))
</script>

<template>
  <main
    class="border-b-2 rounded-t-md bg-white p-7 pb-10 flex flex-col gap-y-7 container md:max-w-screen-md lg:max-w-[1170px] md:grid md:grid-cols-2 md:gap-x-7 lg:grid-cols-4 lg:grid-rows-3 lg:max-h-[825px]"
  >
    <template v-for="number in 4" :key="number">
      <skeleton v-if="!moviesList.length" height="100vh" width="100%" borderRadius="12px" />
    </template>
    <template v-for="(movie, index) in moviesList" :key="movie.id">
      <movies
        v-if="index < 7"
        :index="index"
        :alt="movie.title"
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      />
    </template>
  </main>
</template>

<style scoped></style>
