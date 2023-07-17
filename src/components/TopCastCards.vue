<template>
  <li
    class="cursor-pointer hover:scale-95 transition-all border shadow-[0_3px_10px_rgb(0,0,0,0.2)] min-h-[231px] max-h-[250px] min-w-[122px] rounded-lg overflow-hidden"
  >
    <img class="object-top object-cover h-[133px] w-[120px]" :src="src" :alt="realName" />
    <p class="p-1 font-medium">{{ realName }}</p>
    <p class="px-1 text-sm">{{ actingName }}</p>
  </li>
</template>

<script setup>
defineProps({
  realName: {
    type: String,
    required: true
  },
  actingName: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  }
})
</script>
