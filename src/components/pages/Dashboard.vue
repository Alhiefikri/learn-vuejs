<script setup>
import useFetch from '@/composables/useFetch';

const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts')

console.log(data)
</script>

<template>
  <div>
    <h1>Dashboard Page</h1>
    <div>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error : {{ error }}</div>
      <!-- <pre v-else>{{ data }}</pre> -->
      <div v-for="post in data">
        <p>{{ post.title }}</p>
      </div>
    </div>
    <router-view />
  </div>
</template>
