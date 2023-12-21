<script setup>
  import Slide from '../components/Slide.vue'
</script>

<template>
  <div class="overflow-x-hidden w-screen flex flex-row">
    <Slide class="shrink-0" ref="slide1"></Slide>
    <Slide class="shrink-0" ref="slide2"></Slide>
    <Slide class="shrink-0" ref="slide3"></Slide>
    <Slide class="shrink-0" ref="slide4"></Slide>
  </div>
</template>

<script>
  import gsap from 'gsap';
  import ScrollTrigger from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

  export default {
    mounted() {
      this.startAnimation() 
    },
    methods: {
      startAnimation() {
        console.log(this.$refs)
        ScrollTrigger.defaults({
          toggleActions: "restart pause resume none",
          markers: true
        });
        let sections = this.$refs;
        gsap.to(sections, {
          xPercent: -100*(sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".shrink-0",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + document.querySelector(".shrink-0").offsetWidth
          }
        })
      }
    }
  }
</script>

<!-- gsap.fromTo('.block-circle', 3, {
  borderRadius: '8px',
  backgroundColor: 'purple',
},
{
  borderRadius: '50%',
  backgroundColor: 'orange',  
}
); -->