<template>
  <div class="bg-background">
    <div v-if="likedMovies.length" class="bg-white p-7 flex flex-col gap-y-7 rounded-md container lg:max-w-[1170px]">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-y-7">
        <div class="flex items-center">
          <span class="">
            <img
              :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE}${userInfo.avatar.tmdb.avatar_path}`"
              alt="profile picture"
              class="rounded-full mr-4 w-20 h-20 md:w-28 md:h-28"
            />
          </span>
          <div class="">
            <p class="font-bold text-2xl">{{ userInfo.username }}</p>
          </div>
        </div>
        <div class="flex gap-x-4">
          <router-link :to="{ name: 'edit' }">
            <button-primary title="Edit Profile" />
          </router-link>
          <router-link :to="{ name: 'watchlist' }">
            <button-primary title="Watchlist" />
          </router-link>
        </div>
      </div>
      <div class="flex flex-col md:flex-row md:justify-evenly">
        <span class="md:font-medium">Total Number Of Likes : {{ totalLikes }}</span>
        <span class="md:font-medium">Total Number Of Ratings : {{ totalRates }}</span>
      </div>
      <div class="border-t">
        <div
          class="py-7 bg-white container rounded-t-md flex justify-between items-center gap-x-3 lg:max-w-[1170px]"
        >
          <h3 class="font-medium text-lg">Liked By You</h3>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-7 lg:grid-cols-4">
          <movies
            v-for="movie in likedMovies"
            :key="movie.id"
            :id="movie.id"
            :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE}${movie.poster_path}`"
          />
        </div>
      </div>
    </div>
    <loading-spinner v-else/>
  </div>
</template>

<script setup>
import { computed, inject, ref } from 'vue'
import {RouterLink} from 'vue-router'
import ButtonPrimary from '@/components/ButtonPrimary.vue'
import Movies from '@/components/Movies.vue'
import { USER } from '@/utils/keys'
import { fetchApi } from '@/utils/fetchAPI'
import {
  API_BASE_URL,
  API_VERSION,
  API_IMAGE_BASE_URL,
  API_IMAGE_SIZE
} from '@/constants/api-constants'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
const user = inject(USER)
const userId = user.value.id
const userInfo = ref()
const ratedMovies = ref([])
const likedMovies = ref([])
const totalRates = computed(() => ratedMovies.value.length)
const totalLikes = computed(() => likedMovies.value.length)

fetchApi(`${API_BASE_URL}${API_VERSION}/account/${userId}`)
  .then((response) => (userInfo.value = response))
  .catch((err) => console.log(err))

fetchApi(`${API_BASE_URL}${API_VERSION}/account/${userId}/rated/movies`)
  .then((response) => (ratedMovies.value = response.results))
  .catch((err) => console.log(err))

fetchApi(`${API_BASE_URL}${API_VERSION}/account/${userId}/favorite/movies`)
  .then((response) => (likedMovies.value = response.results))
  .catch((err) => console.log(err))
</script>
