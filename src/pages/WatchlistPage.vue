<template>
  <div class="bg-background">
    <div
      class="bg-white p-7 flex flex-col gap-y-7 rounded-md container md:grid md:grid-cols-2 md:gap-7 lg:grid-cols-4 lg:max-w-[1170px]"
    >
      <template v-if="watchlist.length">
        <div class="" v-for="movie in watchlist" :key="movie.id">
          <div class="">
            <movies
              :id="movie.id"
              :src="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE}${movie.poster_path}`"
            />
            <watchlist-details
              @remove="handleDeleteWatchlist(movie.id)"
              class="py-4"
              :title="movie.title"
              :description="movie.overview"
              :id="movie.id"
            />
          </div>
        </div>
      </template>
      <loading-spinner v-else class="col-span-4" />
    </div>
  </div>
</template>

<script setup>
import Movies from '@/components/Movies.vue'
import WatchlistDetails from '@/components/WatchlistDetails.vue'
import { fetchApi, addOrRemoveList } from '@/utils/fetchAPI'
import { USER } from '@/utils/keys'
import {
  API_BASE_URL,
  API_VERSION,
  API_IMAGE_BASE_URL,
  API_IMAGE_SIZE
} from '@/constants/api-constants'
import { inject, ref } from 'vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const user = inject(USER)
const userId = inject(USER).value.id
const watchlist = ref([])

fetchApi(`${API_BASE_URL}${API_VERSION}/account/${userId}/watchlist/movies`)
  .then((response) => (watchlist.value = response.results))
  .catch((err) => console.log(err))

async function handleDeleteWatchlist(movieId) {
  await addOrRemoveList(
    `${API_BASE_URL}${API_VERSION}/account/${user.value.id}/watchlist`,
    `${movieId}`,
    false
  )
  window.location.reload()
}
</script>
