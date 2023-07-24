<template>
  <div
    :class="[
      'bg-[#c3c3c3] rounded-lg px-12 py-28 animate-pulse animate-infinite',
      { 'md:col-span-2 lg:col-span-3 row-span-2': props.index === 0 }
    ]"
  ></div>
</template>

<script setup>
const props = defineProps({
  index: Number
})
</script>
