<script setup>
import { inject } from 'vue'
const name = inject('name');
</script>

<template>
  <p>
    ini dari child B {{ name }}
  </p>
</template>