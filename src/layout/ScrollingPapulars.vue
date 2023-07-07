<script setup>
import { ref } from 'vue'
import ScrollingMovieCards from '../components/ScrollingMovieCards.vue'
import { fetchApi } from '../fetchAPI'
defineProps({
  title: {
    type: String,
    required: true
  }
})
const moviesList = ref([])
fetchApi('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')
  .then((response) => (moviesList.value = response.results))
  .catch((err) => console.log(err))
</script>

<template>
  <section class="bg-white flex flex-col px-7 py-6 container lg:max-w-[1170px] border-b-2">
    <h2 class="text-2xl text-grayLight font-medium pb-4">{{ title }}</h2>
    <ul class="flex gap-x-3 lg:gap-x-4 overflow-x-auto py-2 [&::-webkit-scrollbar]:hidden">
      <scrolling-movie-cards
        v-for="movie in moviesList"
        :key="movie.id"
        :title="movie.title"
        :publishDate="movie.release_date"
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      />
    </ul>
  </section>
</template>

<style scoped></style>
