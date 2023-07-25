<script setup>
import FormComponent from '@/components/FormComponent.vue'
import { computed, inject, ref } from 'vue'
import { LOGIN,USER } from '@/utils/keys';
import { useRoute, useRouter } from 'vue-router';
import { useToast } from "vue-toastification";

const toast = useToast();
const user = inject(USER)
const login = inject(LOGIN)
const username = ref('')
const password = ref('')
const route = useRoute()
const router = useRouter()
const redirect = computed(() => route.query?.redirect)
async function signin() {
  await login(username.value, password.value)
  if(user) {
    redirect.value && router.push(redirect.value || { name: 'home' });
    toast.success("Login was Successful")
};
}
</script>
<template>
  <div class="bg-background">
    <form-component title="Login" :submit="signin">
      <div class="border flex items-center justify-center p-2 rounded-lg">
        <span class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </span>
        <input
          v-model="username"
          type="text"
          name="username"
          id="username"
          class="p-2 w-full"
          autocomplete="off"
          placeholder="Username..."
        />
      </div>
      <div class="border flex items-center p-2 rounded-lg">
        <span class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
            />
          </svg>
        </span>
        <input
          v-model="password"
          type="password"
          name="password"
          id="password"
          class="p-2 w-full"
          autocomplete="off"
          placeholder="Password..."
        />
      </div>
      <div class="flex flex-col items-center gap-y-3">
        <a href="#" class="text-grayLight hover:text-ogangeLink transition-all w-fit text-center"
          >Forgot Your Password?</a
        >
        <router-link
          :to="{ name: 'signup' }"
          class="text-grayLight hover:text-ogangeLink transition-all w-fit"
          >Don't Have An Account?</router-link
        >
      </div>
    </form-component>
  </div>
</template>