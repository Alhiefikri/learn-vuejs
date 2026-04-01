<template>
  <div class="profile-page">
    <h1>👤 Profile Page</h1>
    <p>Profile <strong>TIDAK di-cache</strong> (exclude dari KeepAlive)</p>
    
    <div style="margin-top: 20px;">
      <input 
        type="text" 
        v-model="name" 
        placeholder="Enter your name"
        style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; width: 100%;"
      />
    </div>
    
    <p style="margin-top: 10px;">
      Input value: <strong>{{ name || '(empty)' }}</strong>
    </p>
    
    <div style="margin-top: 20px; padding: 15px; background: #fee; border-radius: 8px; border-left: 4px solid #ef4444;">
      <h3>⚠️ Perhatikan:</h3>
      <p>Karena Profile <strong>TIDAK di-cache</strong>:</p>
      <ul>
        <li>Setiap kali navigasi ke sini, component di-recreate</li>
        <li>Input value akan <strong>reset</strong></li>
        <li><code>onMounted</code> akan dipanggil setiap kali</li>
        <li><code>onBeforeUnmount</code> akan dipanggil saat keluar</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted, onBeforeUnmount } from 'vue'

const name = ref('')

console.log("👤 [Profile] Component created")

onMounted(() => {
  console.log("👤 [Profile] Mounted - component baru dibuat")
})

onBeforeUnmount(() => {
  console.log("👤 [Profile] Will unmount - component dihancurkan")
})

// onActivated dan onDeactivated TIDAK jalan karena Profile tidak di-cache
</script>

<style scoped>
.profile-page {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.profile-page h1 {
  color: #ef4444;
}
</style>