<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  publishDate: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  },
  id: Number
})
</script>

<template>
  <li class="min-h-[231px] min-w-[150px] overflow-hidden">
    <router-link :to="{ name: 'movie', params: { id } }">
      <img
        class="rounded-lg cursor-pointer hover:scale-95 transition-all rounded-b-md object-top object-cover h-[225px] w-[150px]"
        :src="src"
      />
    </router-link>
    <p class="p-1 font-medium">{{ title }}</p>
    <p class="px-1 text-xs text-grayLight">{{ publishDate }}</p>
  </li>
</template>

<style scoped></style>
