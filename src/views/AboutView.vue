<script setup>
defineProps(['showExtra'])
</script>

<template>
  <h1>A site for events to better the world.</h1>
  <p v-if="showExtra">Some extra content</p>
</template>

<style scoped></style>
