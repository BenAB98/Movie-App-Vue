<script setup>
import {
  API_BASE_URL,
  API_VERSION,
  API_IMAGE_BASE_URL,
  API_IMAGE_SIZE,
  API_AVATAR_SIZE
} from '@/constants/api-constants'
import Tags from '@/components/Tags.vue'
import DetailsComponent from '@/components/DetailsComponent.vue'
import TopCastCards from '@/components/TopCastCards.vue'
import Comments from '@/components/Comments.vue'
import AsideDetails from '@/components/AsideDetails.vue'
import { getDetails, fetchApi } from '@/utils/fetchAPI'
import { useRoute } from 'vue-router'
import { computed, ref, watch } from 'vue'

const route = useRoute()
const details = ref()
const commentsResponse = ref([])
const cast = ref([])
const keywords = ref()

watch(
  () => route.params.id,
  (newId) => {
    getDetails(newId)
      .then((response) => (details.value = response))
      .catch((err) => console.log(err))

    fetchApi(`${API_BASE_URL}${API_VERSION}/movie/${newId}/reviews?language=en-US&page=1`)
      .then((response) => (commentsResponse.value = response.results))
      .catch((err) => console.log(err))

    fetchApi(`${API_BASE_URL}${API_VERSION}/movie/${newId}/credits?language=en-US&page=1`)
      .then((response) => (cast.value = response.cast))
      .catch((err) => console.log(err))

    fetchApi(`${API_BASE_URL}${API_VERSION}/movie/${newId}/keywords`)
      .then((response) => (keywords.value = response.keywords))
      .catch((err) => console.log(err))
  },
  { immediate: true }
)
const year = computed(() => new Date(details.value.release_date).getFullYear())
const hours = computed(() => Math.floor(details.value.runtime / 60))
const mins = computed(() => details.value.runtime % 60)
const genre = computed(() => {
  let allGenres = ''
  for (const item of details.value.genres) {
    allGenres += item.name + '  '
  }
  return allGenres
})
const ageLimit = computed(() => {
  if (details.value.adults) return 18
  return 12
})
const comment = computed(() => {
  if (commentsResponse.value.length > 1) return commentsResponse.value.slice(1, 2)
  return commentsResponse.value.slice(0, 1)
})
</script>

<template>
  <div class="bg-background">
    <details-component
      :cover="`${API_IMAGE_BASE_URL}${API_IMAGE_SIZE}${details.poster_path}`"
      :movie-title="details.title"
      :year="year"
      :full-released-date="details.release_date"
      :hours="hours"
      :mins="mins"
      :score="Math.round(details.vote_average * 10) / 10"
      :genre="genre"
      :age-limit="ageLimit"
      :tagline="details.tagline"
      :overview="details.overview"
    />
    <div class="container lg:max-w-[1170px] lg:grid lg:grid-cols-4">
      <div class="lg:order-1 lg:col-span-3">
        <section class="bg-white text-black p-5 border-b-2 lg:h-[355.6px]">
          <h3 class="text-xl font-medium mb-5 px-2">Top Billed Cast</h3>
          <ul class="flex gap-x-3 overflow-x-auto p-2 [&::-webkit-scrollbar]:hidden">
            <top-cast-cards
              v-for="actor in cast"
              :key="actor.id"
              :real-name="actor.name"
              :acting-name="actor.character"
              :src="`${API_IMAGE_BASE_URL}${API_AVATAR_SIZE}${actor.profile_path}`"
            />
          </ul>
        </section>
      </div>
      <div class="lg:order-3 lg:col-span-3 lg:rounded-bl-lg">
        <template v-if="comment.length">
          <comments
            v-for="item in comment"
            :key="item.id"
            :name="item.author"
            :username="item.author_details.username"
            :comment-rate="item.author_details.rating"
            :date="new Date(item.created_at).toLocaleDateString('en-US')"
            :avatar="`${API_IMAGE_BASE_URL}${API_AVATAR_SIZE}${item.author_details.avatar_path}`"
            :content="item.content"
          />
        </template>
        <div
          v-else
          class="bg-white p-7 border-b-2 lg:h-[460px] lg:rounded-bl-lg flex justify-center items-center"
        >
          <p class="font-bold text-xl">No Comments</p>
        </div>
      </div>
      <div class="border-b-2 lg:order-2">
        <aside-details
          :status="details.status"
          :language="details.original_language"
          :budget="details.budget"
          :revenue="details.revenue"
        />
      </div>
      <div class="lg:order-4">
        <section
          class="bg-white px-7 py-4 flex flex-col gap-y-5 rounded-b-lg lg:rounded-br-lg lg:rounded-bl-none overflow-scroll [&::-webkit-scrollbar]:hidden lg:h-[460px]"
        >
          <h4 class=""><bdi class="font-medium text-lg">Keywords</bdi></h4>
          <ul class="flex flex-wrap gap-2 pb-2">
            <tags v-for="tag in keywords" :key="tag.id" :keyword="tag.name" />
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>
