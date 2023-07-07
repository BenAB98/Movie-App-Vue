<script setup>
import MainComponent from '../components/MainComponent.vue'
import ScrollingFree from '../layout/ScrollingFree.vue'
import ScrollingPapulars from '../layout/ScrollingPapulars.vue'
</script>

<template>
  <div class="bg-background">
    <header-component />
    <main-component />
    <scrolling-papulars title="What's Papular" />
    <scrolling-free title="Free To Watch" />
    <footer-component />
  </div>
</template>

<style scoped></style>
