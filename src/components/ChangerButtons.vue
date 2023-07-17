<template>
  <span class="font-medium cursor-pointer"
    >{{ title }} <span class="text-grayLight">{{ length }}</span></span
  >
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  length: {
    type: [String, Number],
    required: true
  }
})
</script>
