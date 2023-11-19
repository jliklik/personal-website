<script setup>
  import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <div class="flex flex-col">
    <div class="flex-none"><NavigationBar/></div>
  </div>
  <router-view/>
</template>

<style scoped>

</style>
