<template>
  <section
    class="container lg:max-w-[1170px] border-b-2 bg-white p-7 flex flex-col items-center rounded-t-lg lg:grid lg:grid-cols-4"
  >
    <figure class="lg:col-span-2">
      <img :src="cover" :alt="movieTitle" class="rounded-lg w-full max-h-[400px]" />
    </figure>
    <div class="w-full flex flex-col justify-center items-center lg:block lg:col-span-2">
      <div class="px-4 py-5 lg:text-center">
        <h1 class="text-2xl font-medium">
          {{ movieTitle }}<span class="text-xl"> ({{ year }})</span>
        </h1>
      </div>
      <div class="px-4 pb-5 flex justify-between w-full lg:block">
        <div class="font-medium flex flex-col items-center gap-x-2 lg:flex-row lg:justify-center">
          <span class="text-lg">User Score</span>
          <span class="text-xl">{{ score }} / 10</span>
        </div>
        <div class="mt-4 lg:hidden">|</div>
        <div class="flex items-center lg:justify-center lg:mt-3">
          <a class="text-lg flex items-center gap-x-2 hover:text-ogangeLink cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-xl">Play Trailer</span>
          </a>
        </div>
      </div>
      <div class="px-4 py-5 flex flex-col justify-center lg:items-center">
        <div class="">
          <span class="mr-1 inline-block border border-grayLight px-1 rounded-sm text-grayLight">{{
            ageLimit
          }}</span>
          <span class="font-medium">{{ fullReleasedDate }} (GB) &bull; </span>
          <span class="font-medium">{{ hours }}h {{ mins }}</span>
        </div>
        <div class="font-medium text-center">
          <span class="">{{ genre }}</span>
        </div>
      </div>
    </div>
    <div :class="['lg:col-span-3 lg:pr-8', { 'lg:col-span-4': !token }]">
      <p class="italic text-grayLight lg:mt-3">
        {{ tagline }}
      </p>
      <h3 class="font-bold text-xl my-3">Overview</h3>
      <p class="mb-7 font-medium">
        {{ overview }}
      </p>
    </div>
    <ul v-if="token" class="w-full flex justify-center lg:mt-10">
      <li class="w-full pl-2 text-center">
        <p class="font-bold">Like</p>
        <button @click="$emit('like')" class="hover:scale-90 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </li>
      <li class="w-full pl-2 text-center">
        <p class="font-bold">Watchlist</p>
        <button @click="$emit('watchlist')" class="hover:scale-90 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            :stroke="['currentColor']"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
        </button>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { inject } from 'vue'
import { TOKEN } from '@/utils/keys'
const token = inject(TOKEN)
defineEmits(['watchlist', 'like'])

defineProps({
  cover: {
    type: String,
    required: true
  },
  movieTitle: {
    type: String,
    required: true
  },
  year: {
    type: [Number, String],
    required: true
  },
  score: {
    type: [Number, String],
    required: true
  },
  fullReleasedDate: {
    type: String,
    required: true
  },
  hours: {
    type: Number,
    required: true
  },
  mins: Number,
  genre: {
    type: String,
    required: true
  },
  tagline: {
    type: String,
    required: true
  },
  overview: {
    type: String,
    required: true
  },
  ageLimit: {
    type: String,
    required: true
  }
})
</script>
