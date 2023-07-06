<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt:String,
  index:{
    type:Number,
    required:true
  }
});
</script>

<template>
  <a href="#" :class="['hover:scale-95 transition-all',{'md:col-span-2 lg:col-span-3 row-span-2':props.index===0}]">
    <img
      :src="src"
      :alt="alt"
      class="rounded-lg w-full h-full"
    />
  </a>
</template>

<style scoped></style>