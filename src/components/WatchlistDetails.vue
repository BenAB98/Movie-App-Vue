<template>
  <div class="flex justify-between">
    <router-link
      :to="{ name: 'movie', params: { id } }"
      class="font-medium text-md text-grayLight inline-block hover:text-ogangeLink transition-all"
      >{{ title }}</router-link
    >
    <div class="flex gap-x-4 pt-1">
      <button @click="$emit('remove')" class="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="cursor-pointer text-grayLight hover:text-red-600 w-5 h-5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineEmits(["remove"])
defineProps({
  title: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
})
</script>
