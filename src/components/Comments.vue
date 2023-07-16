<template>
  <section class="bg-white p-7 border-b-2 lg:h-[460px] lg:rounded-bl-lg">
    <div class="flex justify-between pb-5">
      <h3 class="font-medium text-lg">Social</h3>
      <div class="flex gap-x-3">
        <changer-buttons title="" length="" />
      </div>
    </div>
    <article class="p-4 border rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <header class="flex items-center mb-3">
        <span class="w-24 h-24">
          <img
            :src="avatar"
            alt="profile avatar"
            class="rounded-full w-16 h-16 md:w-24 md:h-24 object-cover"
          />
        </span>
        <div class="ml-4 flex flex-col gap-y-4">
          <div class="font-bold text-lg flex gap-x-2">
            A Review By {{ username }}
            <span class="bg-black flex items-center gap-x-1 p-1 rounded-lg max-h-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="bg-black text-white text-sm">{{ commentRate }}</span>
            </span>
          </div>
          <span class="text-sm">Written By {{ name }} On {{ date }}</span>
        </div>
      </header>
      <div class="">
        <strong class="">{{ title }}</strong>
        <p class="my-4 max-h-48 overflow-hidden indent-4">{{ content }}</p>
      </div>
    </article>
  </section>
</template>

<script setup>
import ChangerButtons from '@/components/ChangerButtons.vue'
defineProps({
  avatar: String,
  name: String,
  username: String,
  date: String,
  content: String,
  commentRate: Number
})
</script>
