<script setup>
  import NavigationBar from './components/NavigationBar.vue'
  import Home from './components/Home.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <div class="flex-none bg-teal-500 "><NavigationBar/></div>
    <Home/>
  </div>
</template>

<style scoped>

</style>
