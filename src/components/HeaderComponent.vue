<script setup>
import { computed, inject, ref} from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { TOKEN } from '@/utils/keys'
const route = useRoute()
const token = inject(TOKEN)
const hasToken = computed(() => !!token.value)
const hideNav = ref(true)
const hideSearch = ref(true)
const headers = computed(() => ([
  {title: 'Home', to: {name: 'home'}},
  hasToken.value && {title: 'Watchlist', to: {name: 'watchlist'}},
  hasToken.value && {title: 'Profile', to: {name: 'profile'}},
  !hasToken.value && {title: 'Login / SignUp', to: {name: 'login' , query: {redirect: route.fullPath} }},
].filter(Boolean))) 
</script>

<template>
  <header class="bg-background py-8">
    <div
      class="container lg:max-w-[1170px] py-[18px] px-4 flex justify-between items-center text-white"
    >
      <router-link :to="{ name: 'home' }" class="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#FFAA3C"
          class="w-10 h-10 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
          />
        </svg>
        <div class="flex flex-col">
          <h1 class="font-bold text-l">Movie Website</h1>
          <small class="text-[#9198af] text-[0.6rem]">Find your favorite movies</small>
        </div>
      </router-link>
      <nav class="bg-white overflow-hidden rounded-lg flex items-center">
        <button @click="hideNav = !hideNav" class="bg-white px-3 py-2 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="black"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <ul class="hidden lg:flex text-black justify-center items-center">
          <li
            v-for="(item) in headers"
            :key="item.title"
            class="py-2 border-l"
          >
            <router-link
              active-class="text-ogangeLink"
              :to="item.to"
              class="text-grayLight hover:text-ogangeLink transition-all px-4"
              >{{ item.title }}</router-link
            >
          </li>
        </ul>
        <form
          @submit.prevent=""
          :class="[
            'transition-all text-black p-1 max-w-[55px] sm:max-w-full',
            { hidden: hideSearch }
          ]"
        >
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
            autocomplete="off"
          />
        </form>
        <button @click="hideSearch = !hideSearch" class="bg-white p-2 border-l">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#84878D"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </nav>
    </div>
    <div
      :class="{ hidden: hideNav }"
      class="lg:hidden flex flex-col rounded-md bg-white md:max-w-screen-md container"
    >
      <ul class="">
          <li
            v-for="(item) in headers"
            :key="item.title"
            class="py-2 [&:not(:last)]:border-b"
          >
            <router-link
              active-class="text-ogangeLink"
              :to="item.to"
              class="text-grayLight transition-all px-4"
              >{{ item.title }}</router-link
            >
          </li>
      </ul>
    </div>
  </header>
</template>
