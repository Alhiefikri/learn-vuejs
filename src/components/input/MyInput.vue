<script setup>
import { ref } from 'vue'
const value = defineModel()
</script>

<template>
  <input type="text" v-model="value">
</template>