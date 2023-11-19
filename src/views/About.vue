<script setup>
  import Journey from '../components/Journey.vue'
</script>

<template>
  <div class="bg-black">
    <Journey :picture="'dtb.jpg'">
      <div class="text-white font-bold text-3xl leading-10 ml-5 mr-5 mt-5 mb-5">
      Hello! My name is Jian Lik. I am a <span style="color: plum">automation</span> and <span style="color: plum">software</span>
      engineer with <span style="color: plum">5+</span> years of experience. I have a strong background in control systems, 
      distributed processing and embedded software. 
      I specialize in software which runs on <span style="color: plum">edge</span> computing devices, 
      primarily in manufacturing and transportation industries. 
      <br>
      <br>
      I have a unique perspective programming for both R&D and production environments.
      I am not afraid of <span style="color: plum">innovation</span>, but also understand the need for 
      <span style="color: plum">maintainable</span>, easy-to-troubleshoot code. 
      <br>
      <br>
      My broad experience allows me to help set a vision
      and propose solutions that create the most value for your company.
      </div>
    </Journey>
    <Journey :blurb="`Hello World`" :picture="'dtb.jpg'"/>
    <Journey :blurb="`Hello World`" :picture="'dtb.jpg'"/>
    <Journey :blurb="`Hello World`" :picture="'dtb.jpg'"/>
    <Journey :blurb="`Hello World`" :picture="'dtb.jpg'"/>
    <Journey :blurb="`Hello World`" :picture="'dtb.jpg'"/>
</div>
</template>

<script>
 
</script>

<style scoped>

</style>