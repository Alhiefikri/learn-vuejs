<script setup>
import { ref } from 'vue'
const props = defineProps({
  value: String
})

const emit = defineEmits(['change'])

function handleInput(e) {
  emit('change', e.target.value)
}

</script>

<template>
  <input type="text" name="" id="" :value="props.value" @input="handleInput">
</template>