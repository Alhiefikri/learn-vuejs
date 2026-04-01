<template>
  <div class="settings-page">
    <h1>⚙️ Settings Page</h1>
    <p>Settings juga di-cache dengan Home!</p>

    <div style="margin-top: 20px;">
      <label>
        <input type="checkbox" v-model="notifications" />
        Enable Notifications
      </label>
    </div>

    <p style="margin-top: 10px;">
      Checkbox state: <strong>{{ notifications ? 'ON' : 'OFF' }}</strong>


    </p>
    <div>
      <button @click="show = true">show modal</button>
      <Teleport to="body">
        <div v-if="show" class="overlay">
          <div class="modal">
            <p>ini modal</p>
            <button @click="show = false">close</button>
          </div>

        </div>
      </Teleport>

    </div>
  </div>


</template>

<script setup>
import { ref } from 'vue'
import { onActivated, onDeactivated } from 'vue'

const show = ref(false);


const notifications = ref(false)

console.log("⚙️ [Settings] Component created")

onActivated(() => {
  console.log("⚙️ [Settings] Activated - dari cache")
})

onDeactivated(() => {
  console.log("⚙️ [Settings] Deactivated - masuk cache")
})
</script>

<style scoped>
.settings-page {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.settings-page h1 {
  color: #f59e0b;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
}
</style>