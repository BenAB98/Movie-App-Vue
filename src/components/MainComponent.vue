<script setup>
import {
  API_BASE_URL,
  API_VERSION,
  API_IMAGE_BASE_URL,
  API_IMAGE_SIZE
} from '@/constants/api-constants'
import { computed, ref } from 'vue'
import { fetchApi } from '@/utils/fetchAPI'
import Movies from '@/components/Movies.vue'
import Skeleton from '@/components/Skeleton.vue'
const moviesResponse = ref([])

fetchApi(`${API_BASE_URL}${API_VERSION}/movie/top_rated?language=en-US&page=1`)
  .then((response) => (moviesResponse.value = response.results))
  .catch((err) => console.log(err))

const moviesList = computed(() => moviesResponse.value.slice(0, 7))
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
        :index="index"
        :id="movie.id"
        :alt="movie.title"
        :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE}${movie.poster_path}`"
      />
    </template>
  </main>
</template>
