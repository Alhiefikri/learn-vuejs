<script setup>
import { ref, reactive, computed, watch } from "vue";
import HelloWord from "./components/greeting/HelloWord.vue";
import Card from "./components/slot/Card.vue";
import Layout from "./components/layout/Layout.vue";
import MyInput from "./components/input/MyInput.vue";
import Home from "./components/pages/Home.vue";
import Settings from "./components/pages/Settings.vue";
import Profile from "./components/pages/Profile.vue";
import Parent from "./components/turunan/Parent.vue";

// Bagian script setup adalah tempat kita mendefinisikan logic dan data.
// Variabel 'nama' ini akan kita panggil di template menggunakan interpolation.
// console.log("Hello, Gua Alhie");
// const nama = "Alhie Fikri";
// function greeting(nama) {
//   return `Hello, gua ${nama}`
// }

// // deklarative rendering
// const counter = reactive({ count: 0 });
// function increment(number) {
//   counter.count = counter.count + number;
// }
// const oddoreven = computed(() => {
//   if (counter.count % 2 == 0) return "Angka count genap"
//   return "Angka count ganjil"
// })



// watch(() => counter.count, (newValue, oldValue) => {
//   console.log(`Nilai count berubah dari ${oldValue} ke ${newValue}`)
// })


// const message = ref("Hi");

// message.value = "Hello";

// const link = "https://vuejs.org";

// function getRandomNumber() {
//   return Math.random()
// }

// const randomNumber = computed(() => {
//   return Math.random();
// })

// const search = ref('test');

// function onInput(e) {
//   search.value = e.target.value
// }

// const isLoggedIn = ref(true)
// const nilai = ref(75)

// const todos = ref([
//   { id: 1, text: "Belajar Dasar Vue.js", done: true },
//   { id: 2, text: "Memahami Computed Property", done: true },
//   { id: 3, text: "Praktek Form Binding dengan v-model", done: false },
//   { id: 4, text: "Belajar Conditional Rendering (v-if & v-show)", done: false },
//   { id: 5, text: "Implementasi List Rendering (v-for)", done: false }
// ])
// function callback() {
//   console.log("button di children di click user")
// }

// const nama = ref('');
// const age = ref('');

// function handleChange(e) {
//   nama.value = e
// }

const current = ref('home');

const mapComp = {
  'home': Home,
  'settings': Settings,
  'profile': Profile
}

</script>

<template>

  <!-- <Parent /> -->

  <button @click="current = 'home'">Home</button>
  <button @click="current = 'settings'">Setting</button>
  <button @click="current = 'profile'">Profile</button>

  <Component :is="mapComp[current]" />

  <!-- <div class="container"> -->

  <!-- Interpolation (Mustache Syntax) menggunakan double curly braces {{ }}
    Ini merender nilai dari variabel JavaScript (nama) langsung ke dalam HTML. -->

  <!-- <h1>{{ greeting('Alhie') }}</h1>

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

  <!-- <ul>
    <li v-for="todo in todos" :key="todo.id" class="todo-item" :class="todo.done ? 'done' : 'not-done'">
      {{ todo.text }}
    </li>
  </ul> -->

  <!-- <div>
    <HelloWord message="Hello from parent" />
    <Card>
      <h3>Ini content dari parent</h3>
      <p>Bebas isi apa saja</p>
    </Card>
  </div> -->

  <!-- <Layout @some-event="() => { console.log(`button di children di click user, ${text}`) }">



    <template #header>
      <h1>Judul Halaman</h1>
    </template>

<template #default="{ user }">
      <p>ini main konten</p>
      <p>Halo Nama gua {{ user.name }}, gua berumur {{ user.age }} </p>
    </template>

<template #footer>
      <p>2026 All Right reserved</p>
    </template>
</Layout> -->

  <!-- <MyInput :value="nama" v-model="nama" />
  <MyInput :value="age" v-model="age" />

  <button @click="() => console.log(nama, age)">Submit</button> -->





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
