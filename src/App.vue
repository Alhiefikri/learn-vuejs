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

const isLoggedIn = ref(true)
const nilai = ref(75)

const todos = ref([
  { id: 1, text: "Belajar Dasar Vue.js", done: true },
  { id: 2, text: "Memahami Computed Property", done: true },
  { id: 3, text: "Praktek Form Binding dengan v-model", done: false },
  { id: 4, text: "Belajar Conditional Rendering (v-if & v-show)", done: false },
  { id: 5, text: "Implementasi List Rendering (v-for)", done: false }
])

</script>

<template>
  <!-- <div class="container">
    
      Interpolation (Mustache Syntax) menggunakan double curly braces {{ }}
      Ini merender nilai dari variabel JavaScript (nama) langsung ke dalam HTML.
   
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
    <input type="text" :value="search" @input="onInput">
    <input type="text" v-model="search">
    <p>{{ search }}</p>
  </div> -->

  <!-- <div class="container">
    <h1 v-if="isLoggedIn">Selamat Datang !</h1>
    <h1 v-else>Silahkan Login terlebih dahulu</h1>
    <h1 v-show="isLoggedIn">Selamat v-show</h1>
  </div>

  <div class="container">
    <p v-if="nilai >= 90">A</p>
    <p v-else-if="nilai >= 80">B</p>
    <p v-else-if="nilai >= 70">C</p>
    <p v-else>Tidak Lulus</p>
  </div> -->

  <ul>
    <li v-for="todo in todos" :key="todo.id" class="todo-item" :class="todo.done ? 'done' : 'not-done'">
      {{ todo.text }}
    </li>
  </ul>

</template>

<style scoped>
.container {
  padding: 20px;
  text-align: center;
}

.todo-item {
  padding: 10px 14px;
  margin-bottom: 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-left: 6px solid;
}

.done {
  border-left-color: #28a745;
}

.not-done {
  border-left-color: #dc3545;
}
</style>
