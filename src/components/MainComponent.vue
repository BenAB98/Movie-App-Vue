<script setup>
import { ref } from 'vue'
import Movies from './Movies.vue'
const moviesList = ref([]);

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2E1YTEzZTk4NTk4NDcyNTRjYWQ5M2E5Nzg2MjEzYyIsInN1YiI6IjY0NzFiMmE0YmUyZDQ5MDBiZjlkNWFhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XuVUHSkSjI6SYi-p-Mf-32ZvVklBRRin8sFCmiNqBaE'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=3', options)
.then(response => response.json())
.then(response => { console.log(response);
  moviesList.value = response.results;
})
.catch(err => console.error(err));
</script>

<template>
    <main
    class="border-b-2 rounded-t-md bg-white p-7 pb-10 flex flex-col gap-y-7 container md:max-w-screen-md lg:max-w-[1170px] md:grid md:grid-cols-2 md:gap-x-7 lg:grid-cols-4 lg:grid-rows-3 lg:max-h-[825px]">
    <template v-for="(movie,index) in moviesList" :key="movie.id">
      <movies v-if="index<7" :index="index" :alt="movie.title" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"/>
    </template>
    </main>
</template>

<style scoped></style>
