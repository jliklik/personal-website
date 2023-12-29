<script setup>
  import Slide from '../components/Slide.vue'
</script>

<template>
  <div class="flex-col h-screen border-2 border-green-700">
    <div class="flex">
      <button type="button" @click="slide_right" >Forward</button>
      <button class="button" @click="slide_left">Back</button>
    </div>
    <div class="overflow-auto flex flex-grow w-3/5 border-2 border-pink-400" ref="horizontal">
      <!-- <Slide class="flex-shrink-0" :picture="'shamu.jpg'"></Slide> -->
      <Slide class="flex-shrink-0" :picture="'yvr.jpg'"></Slide>
      <Slide class="flex-shrink-0" :picture="'yvr.jpg'"></Slide>
      <Slide class="flex-shrink-0" :picture="'yvr.jpg'"></Slide>
      <Slide class="flex-shrink-0" :picture="'yvr.jpg'"></Slide>
      <Slide class="flex-shrink-0" :picture="'yvr.jpg'"></Slide>
    </div>
  </div>
</template>

<script>
  import gsap from 'gsap';
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  gsap.registerPlugin(ScrollToPlugin);

  export default {
    data() {
      return {
        slideIndex: 0,
        scrollPos: 0,
        screenWidth: 0,
        screenHeight: 0,
        max_slides: 5,
        horizontalContainer: Object
      }
    },
    mounted() {
      this.slideIndex = 0;
      this.horizontalContainer = this.$refs.horizontal;
      this.updateScreenSize();
      window.addEventListener('resize', this.updateScreenSize);
    },
    methods: {
      updateScreenSize() {
        // Update screen size data
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
      },
      slide_right() {
        if (this.slideIndex < this.max_slides - 1) {
          this.slideIndex = this.slideIndex + 1;
          const container_width = this.horizontalContainer.clientWidth * this.slideIndex;
          console.log(container_width);
          gsap.to(this.horizontalContainer, { scrollTo: {x: container_width}, duration: 2, ease: 'power2.inOut' });
          console.log(this.slideIndex);
        } else {
          this.slideIndex = this.max_slides - 1;
          console.log(this.slideIndex);
        }
      },
      slide_left() {
        if (this.slideIndex > 0) {
          this.slideIndex = this.slideIndex - 1;
          const container_width = this.screenWidth * 3/5 * this.slideIndex;
          console.log(container_width);
          gsap.to(this.horizontalContainer, { scrollTo: {x: container_width}, duration: 2, ease: 'power2.inOut' });
          console.log(this.slideIndex);
        } else {
          this.slideIndex = 0;
          console.log(this.slideIndex);
        }
      },
      beforeDestroy() {
        // Remove the event listener to prevent memory leaks
        window.removeEventListener('resize', this.updateScreenSize);
      },
    }
  }
</script>


<style scoped>
</style>