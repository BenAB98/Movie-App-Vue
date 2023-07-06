<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from "../components/FooterComponent.vue";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2E1YTEzZTk4NTk4NDcyNTRjYWQ5M2E5Nzg2MjEzYyIsInN1YiI6IjY0NzFiMmE0YmUyZDQ5MDBiZjlkNWFhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XuVUHSkSjI6SYi-p-Mf-32ZvVklBRRin8sFCmiNqBaE'
  }
};

fetch('https://api.themoviedb.org/3/configuration', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
</script>

<template>
    <div class="bg-background">
        <header-component/>
        <footer-component/>
    </div>
</template>

<style scoped></style>
