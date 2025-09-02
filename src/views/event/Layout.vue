<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, computed } from 'vue'
import EventService from '@/services/EventService'

const event = ref(null)

const id = computed(() => props.id)

// const props = defineProps (["id"])
const props = defineProps({
  id: {
    required: true,
  },
})

onMounted(() => {
  EventService.getEventById(id.value)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'event-details', params: { id } }">Details</router-link>
      |
      <router-link :to="{ name: 'event-register', params: { id } }">Register</router-link>
      |
      <router-link :to="{ name: 'event-edit', params: { id } }">Edit</router-link>
    </div>
    <router-view :event="event" />
  </div>
</template>
