<script setup>
const footerProps = {
  titles: ['Recent Review', 'Help Center', 'Join Us'],
  lorems: ['Lorem ipsum dolor', 'sit amet consectetur', 'adipisicing elit', 'Animi, tempora'],
  socialMedia: ['Facebook', 'Twitter', 'Google+', 'Pinterest']
}
</script>

<template>
  <footer class="bg-background py-12 px-4 md:px-8">
    <div class="flex flex-col container lg:grid lg:grid-cols-6 lg:max-w-[1170px]">
      <div class="mb-4 lg:pr-2">
        <h3 class="text-grayWhite mb-4 text-lg">About-Us</h3>
        <p class="text-grayLight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus a voluptatum eius.
          Fugiat, tempora ad!
        </p>
      </div>
      <div v-for="item in footerProps.titles" :key="item" class="text-grayLight mb-4">
        <h3 class="text-grayWhite mb-4 text-lg">{{ item }}</h3>
        <a
          v-for="item in footerProps.lorems"
          :key="item"
          href="#"
          rel="nofallow"
          class="block w-fit hover:text-ogangeLink transition-all"
          >{{ item }}</a
        >
      </div>
      <div class="text-grayLight mb-4">
        <h3 class="text-grayWhite mb-4 text-lg">Social Media</h3>
        <a
          v-for="item in footerProps.socialMedia"
          :key="item"
          href="#"
          rel="nofallow"
          class="block w-fit hover:text-ogangeLink transition-all"
          >{{ item }}</a
        >
      </div>
      <div class="text-grayLight mb-4">
        <h3 class="text-grayWhite mb-4 text-lg">Newsletter</h3>
        <form action="#" class="relative">
          <input
            type="email"
            name="email"
            id="email"
            autocomplete="off"
            placeholder="Email Address"
            class="placeholder:text-sm focus:border-ogangeLink transition-all w-full p-2 bg-background text-grayLight border rounded-lg"
          />
          <button type="submit" class="absolute right-2 top-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#FFAA3C"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
    <div class="text-grayLight pt-6 container lg:max-w-[1170px]">
      <p class="">Copyright 2023 Alibaba Academy, Designed by Ben. All rights reserved</p>
    </div>
  </footer>
</template>
