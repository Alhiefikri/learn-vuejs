<script>
</script>

<template>
  <header>
    <slot name="header"></slot>
  </header>

  <main>
    <slot :user="user"></slot>
    <!-- <button @click="$emit('someEvent')">click</button> -->
    <button @click="handleClick">click</button>
  </main>

  <footer>
    <slot name=" footer"></slot>
  </footer>
</template>

<script setup>
const user = {
  name: "Alhie",
  age: 23
}
const emit = defineEmits(['someEvent'])

function handleClick() {
  emit('someEvent')
}
</script>