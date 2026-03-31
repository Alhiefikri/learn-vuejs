<script setup>
import { ref } from 'vue'
const props = defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

function handleInput(e) {
  emit('update:modelValue', e.target.value)
}

</script>

<template>
  <input type="text" name="" id="" :value="props.value" @input="handleInput">
</template>