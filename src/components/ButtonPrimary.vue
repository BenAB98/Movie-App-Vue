<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <button class="rounded-lg bg-orange-500 text-white w-1/2 md:w-36 hover:scale-95 transition-all">
    <span class="px-4 py-2 inline-block">{{ title }}</span>
  </button>
</template>

<style scoped></style>
