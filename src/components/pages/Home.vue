<template>
  <div class="home-page">
    <h1>🏠 Home Page</h1>
    <p ref="box">Counter: <strong>{{ count }}</strong></p>
    <button @click="increment">Increment (+)</button>
    <button @click="decrement">Decrement (-)</button>

    <div style="margin-top: 20px; padding: 15px; background: #f0f0f0; border-radius: 8px;">
      <h3>📜 Test KeepAlive:</h3>
      <ol>
        <li>Klik tombol Increment beberapa kali</li>
        <li>Scroll ke bawah</li>
        <li>Klik tombol "Setting" atau "Profile"</li>
        <li>Klik "Home" lagi</li>
        <li><strong>Counter dan scroll position TETAP!</strong> ✅</li>
      </ol>
    </div>

    <div style="margin-top: 20px;">
      <p>👇 Scroll down untuk test scroll position:</p>
      <p v-for="i in 50" :key="i" style="padding: 5px 0;">
        Item {{ i }} - Scroll test line
      </p>
    </div>
  </div>
</template>

<script setup>

import { useCounter } from '@/composables/useCounter'

import {
  onMounted,
  onBeforeUnmount,
  onActivated,
  onDeactivated,
  onBeforeUpdate,
  onUpdated
} from 'vue'


const { count, increment, decrement, box } = useCounter(5, 3)

// Lifecycle hooks untuk KeepAlive
console.log("🏠 [Home] Component created")

onMounted(() => {
  console.log("🏠 [Home] Mounted - pertama kali component dibuat")
})

onBeforeUnmount(() => {
  console.log("🏠 [Home] Will unmount - component akan dihancurkan")
})

// Hook khusus KeepAlive - jalan saat component di-activate dari cache
onActivated(() => {
  console.log("🏠 [Home] Activated - component diaktifkan dari cache")
})

// Hook khusus KeepAlive - jalan saat component di-deactivate (masuk cache)
onDeactivated(() => {
  console.log("🏠 [Home] Deactivated - component disimpan ke cache")
})

onBeforeUpdate(() => {
  console.log('on before update')
})

onUpdated(() => {
  console.log('on updated')
})
</script>

<style scoped>
.home-page {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.home-page h1 {
  color: #42b883;
}

button {
  padding: 8px 16px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

button:hover {
  background: #35a074;
}
</style>