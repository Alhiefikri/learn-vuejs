<script setup>
import { ref, reactive } from "vue";
// Bagian script setup adalah tempat kita mendefinisikan logic dan data.
// Variabel 'nama' ini akan kita panggil di template menggunakan interpolation.
const nama = "Alhie Fikri";
console.log("Hello, Gua Alhie");

// deklarative rendering
const counter = reactive({ count: 0 });
counter.count++;

const message = ref("Hi");

message.value = "Hello";

const link = "https://vuejs.org"
</script>

<template>
  <div class="container">
    <!-- 
      Interpolation (Mustache Syntax) menggunakan double curly braces {{ }} 
      Ini merender nilai dari variabel JavaScript (nama) langsung ke dalam HTML.
    -->
    <h1>Hello, Gua {{ nama }}</h1>


    <p>Gua belajar vue pada sesi kali ini</p>
  </div>
  <div class="container">
    <p>{{ counter.count }}</p>
    <p>{{ message }}</p>
    <p>{{ message.split("").reverse().join("") }}</p>
    <a :href="link">Kunjungi Vue pakai vbind</a>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
  text-align: center;
}
</style>
