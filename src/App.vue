<script setup>
import { ref, reactive } from "vue";

// Bagian script setup adalah tempat kita mendefinisikan logic dan data.
// Variabel 'nama' ini akan kita panggil di template menggunakan interpolation.
console.log("Hello, Gua Alhie");
// const nama = "Alhie Fikri";
function greeting(nama) {
  return `Hello, gua ${nama}`
}

// deklarative rendering
const counter = reactive({ count: 0 });
function increment(number) {
  counter.count = counter.count + number;
}

const message = ref("Hi");

message.value = "Hello";

const link = "https://vuejs.org";
</script>

<template>
  <div class="container">
    <!--
      Interpolation (Mustache Syntax) menggunakan double curly braces {{ }}
      Ini merender nilai dari variabel JavaScript (nama) langsung ke dalam HTML.
    -->
    <h1>{{ greeting('Alhie') }}</h1>

    <p>Gua belajar vue pada sesi kali ini</p>
  </div>
  <div class="container">
    <button @click="increment(2)">Count is {{ counter.count }}</button>
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
