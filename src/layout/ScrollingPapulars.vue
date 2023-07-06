<script setup>
import { ref } from 'vue';
import ScrollingMovieCards from '../components/ScrollingMovieCards.vue';
 defineProps({
    title:{
        type:String,
        required:true
    },
 });
 const moviesList = ref([]);

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2E1YTEzZTk4NTk4NDcyNTRjYWQ5M2E5Nzg2MjEzYyIsInN1YiI6IjY0NzFiMmE0YmUyZDQ5MDBiZjlkNWFhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XuVUHSkSjI6SYi-p-Mf-32ZvVklBRRin8sFCmiNqBaE'
  }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
.then(response => response.json())
.then(response => {
  moviesList.value = response.results;
})
.catch(err => console.error(err));

</script>

<template>
  <section class="bg-white flex flex-col px-7 py-6 container lg:max-w-[1170px] border-b-2">
    <h2 class="text-2xl text-grayLight font-medium pb-4">{{title}}</h2>
    <ul class="flex gap-x-3 lg:gap-x-4 overflow-x-auto py-2 [&::-webkit-scrollbar]:hidden">
        <scrolling-movie-cards v-for="movie in moviesList" :key="movie.id" :title="movie.title" :publishDate="movie.release_date" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"/>
    </ul>
  </section>
</template>

<style scoped></style>
