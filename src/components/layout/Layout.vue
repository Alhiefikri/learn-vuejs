<script>
</script>

<template>
  <header>
    <slot name="header"></slot>
  </header>

  <main>
    <slot :user="user"></slot>
  </main>

  <footer>
    <slot name="footer"></slot>
  </footer>
</template>

<script setup>
const user = {
  name: "Alhie",
  age: 23
}
</script>