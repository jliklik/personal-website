<script setup>
  import Journey from '../components/Journey.vue'
</script>

<template>
  <div class="bg-black">
    <Journey :picture="'switch.jpg'">
      <div class="journey-text">
        <p class="">
          Hello! My name is Jian Lik. I am a <span style="color: plum">automation</span> and <span style="color: plum">software</span>
          engineer with <span style="color: plum">5+</span> years of experience. I have a strong background in control systems, 
          distributed processing and embedded software. 
          I specialize in software which runs on <span style="color: plum">edge</span> devices, 
          primarily in manufacturing and transportation industries. 
          <br>
          <br>
          I have a unique perspective programming for both R&D and production environments.
          I am not afraid of <span style="color: plum">innovation</span>, but also understand the need for 
          <span style="color: plum">maintainable</span>, easy-to-troubleshoot code. 
          <br>
          <br>
          My broad experience allows me to develop solutions that create the most value for your company.
        </p>
      </div>
    </Journey>
    <Journey :picture="'ada.jpg'">
      <div class="journey-text">
        <p class="">
          My background is in <span style="color: plum">mechatronics</span> engineering from the University of British Columbia.
          The mechatronics engineering program at UBC is a rigorous degree that has a heavy emphasis on systems design. 
          <br>
          <br>
          I had a strong academic track record throughout my degree. 
          I am not afraid of complicated <span style="color: plum">algorithms, linear systems or controls theory.</span>  
          I strive to understand the systems that I program.
          <br>
          <br>
          I graduated with co-op experience in research and manufacturing. 
          I also have hands-on marine engineering experience
          building robotic sailboats with the UBC SailBot team.
          <br>
          <br>
          I don't just <span style="color: plum">talk code</span>, but I can <span style="color: plum">talk shop</span> as well. 
        </p>
      </div>
    </Journey>
    <Journey :blurb="`Hello World`" :picture="'dtb.jpg'"/>
    <Journey :blurb="`Hello World`" :picture="'dtb.jpg'"/>
    <Journey :blurb="`Hello World`" :picture="'dtb.jpg'"/>
    <Journey :blurb="`Hello World`" :picture="'dtb.jpg'"/>
</div>
</template>

<script>
 
</script>

<style scoped>
  .journey-text{
    @apply flex items-center text-white font-bold text-3xl leading-10 ml-5 mr-5 mt-5 mb-5
  }
</style>