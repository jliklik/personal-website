<script setup>
  import Journey from '../components/Journey.vue'
</script>

<template>
  <div class="bg-black flex-col">
    <Journey :picture="'switch.jpg'" class="flex">
      <div class="journey-text">
        <div>
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
        </div>
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
          I don't just <span style="color: plum">talk code</span>, but I can <span style="color: plum">talk shop</span> as well. 
        </p>
      </div>
    </Journey>
    <Journey :picture="'fp.jpg'">
      <div class="journey-text">
        <p class="">
          Knowing how to program <span style="color: plum">automated systems</span> is a skillset not many developers have. 
          <br>
          <br>
          Automation programming requires a system-wide mindset, a commitment to safety and the ability to think in real-time. 
          Sometimes principles used in traditional software engineering introduce greater risk to a system.
          <br>
          <br>
          However, the PLC industry is often slow to adopt new technologies and there is a high cost for solutions that may not meet individual needs. 
          As a PLC programmer and a software engineer, I can pick the right tool that maximizes 
          <span style="color: plum">functionality and reliability</span>. 
        </p>
      </div>
    </Journey>
    <Journey :picture="'bw.jpg'">
      <div class="journey-text">
        <p class="">
          <span style="color: plum">Embedded systems</span> are what I am most interested in!
          <br>
          <br>
          I have experience in programming <span style="color: plum">microcontrollers</span>, distributed <span style="color: plum">multicomputers</span> 
          and embedded <span style="color: plum">linux</span> PCs.
          I enjoy making drivers - whether it is a control panel for a label printer, a custom ModBus app or 
          an API for a signal processing SBC, send it my way please!
          <br>
          <br>
          As automation shifts towards the cloud, I can help you set up <span style="color: plum">IoT</span> messaging and remote device monitoring.
          Tired of manually running tests or setting up environments? 
          I can also help you create custom <span style="color: plum">pipelines</span> and <span style="color: plum">containerize</span> your environments.
          <br>
          <br>
          Not sure how to tackle a task? I'm always down to do some research and learn about new technologies!
        </p>
      </div>
    </Journey>
</div>
</template>

<script>
 
</script>

<style scoped>
  .journey-text{
    @apply flex flex-grow items-center overflow-auto text-white font-poppins font-normal text-3xl leading-10 ml-5 mr-5 mt-5 mb-5
  }
</style>