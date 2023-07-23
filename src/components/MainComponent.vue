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
    <template v-if="!moviesList.length">
      <skeleton v-for="(number, index) in 7" :key="number" :index="index" />
    </template>
    <movies
      v-for="(movie, index) in moviesList"
      :key="movie.id"
      :index="index"
      :id="movie.id"
      :alt="movie.title"
      :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE}${movie.poster_path}`"
    />
  </main>
</template>
