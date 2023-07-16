<template>
  <li class="bg-keywords px-3 py-2 rounded-md cursor-pointer hover:scale-95 transition-all">
    <a class="">{{ keyword }}</a>
  </li>
</template>

<script setup>
defineProps({
  keyword: String
})
</script>
