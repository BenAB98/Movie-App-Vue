<script setup>
import ButtonPrimary from './ButtonPrimary.vue'
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="lg:max-w-[1170px] container rounded-lg py-6">
    <div class="bg-white p-7 flex flex-col container rounded-lg max-w-md">
      <form action="#" class="flex flex-col gap-y-5 py-4">
        <h2 class="font-bold text-lg text-grayLight mb-4 text-center">
          {{ title }}
        </h2>
        <slot>Pass The Input Tags Please</slot>
        <div class="flex justify-center">
          <button-primary title="Submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
