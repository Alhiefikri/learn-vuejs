<script setup>
console.log("Hello, Gua Alhie");
const nama = "Alhie Fikri";
</script>

<template>
  <div class="container">
    <h1>Hello, Gua {{ nama }}</h1>
    <p>Gua belajar vue pada sesi kali ini</p>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
  text-align: center;
}
</style>
