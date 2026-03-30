<script setup>
import { ref, reactive, computed } from "vue";

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
// const oddoreven = computed(() => {
//   if (counter.count % 2 == 0) return "Angka count genap"
//   return "Angka count ganjil"
// })


const message = ref("Hi");

message.value = "Hello";

const link = "https://vuejs.org";

function getRandomNumber() {
  return Math.random()
}

const randomNumber = computed(() => {
  return Math.random();
})

const search = ref('test');

function onInput(e) {
  search.value = e.target.value
}
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
    <button @click="increment(1)">Count is {{ counter.count }}</button>
    <p>{{ getRandomNumber() }}</p>
    <p>{{ randomNumber }}</p>
    <p>{{ message }}</p>
    <p>{{ message.split("").reverse().join("") }}</p>
    <a :href="link">Kunjungi Vue pakai vbind</a>
  </div>

  <div class="container">
    <!-- <input type="text" :value="search" @input="onInput"> -->
    <input type="text" v-model="search">
    <p>{{ search }}</p>
  </div>

</template>

<style scoped>
.container {
  padding: 20px;
  text-align: center;
}
</style>
