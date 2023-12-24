<script setup>
  import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <div class="flex-none border-2 border-orange-400"><NavigationBar/></div>
    <div class="flex flex-col flex-grow border-red-800 border-2">
      <router-view class="flex flex-grow border-2 border-orange-400"/>
    </div>
  </div>
</template>

<style scoped>

</style>
