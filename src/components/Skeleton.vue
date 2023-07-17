<template>
  <div class="skeleton"></div>
</template>

<script setup>
defineProps({
  width: String,
  height: String,
  borderRadius: String
})
</script>

<style scoped>
.skeleton {
  width: v-bind(width);
  height: v-bind(height);
  border-radius: v-bind(borderRadius);
  background-color: #f1f2f3;
}
</style>
