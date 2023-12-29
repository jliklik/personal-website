<script setup>
  import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <div class="flex-none"><NavigationBar/></div>
    <div class="flex flex-col flex-grow ">
      <router-view class="flex flex-grow"/>
    </div>
  </div>
</template>

<style scoped>

</style>
