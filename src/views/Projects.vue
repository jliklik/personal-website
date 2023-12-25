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
      <Slide class="flex-shrink-0" ref="slide1"></Slide>
      <Slide class="flex-shrink-0" ref="slide2"></Slide>
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
        horizontalContainer: Object
      }
    },
    mounted() {
      this.slideIndex = 1;
      this.horizontalContainer = this.$refs.horizontal;
    },
    methods: {
      slide_right() {
        // this.$nextTick(() => {
        //   this.$refs.horizontal.animate({scrollLeft: this.scrollPos + 100});
        //   this.scrollPos = this.scrollPos + 100;
        // })
        console.log(this.horizontalContainer);
        gsap.to(this.horizontalContainer, { scrollTo: {x: 250}, duration: 2, ease: 'power2.inOut' });

        this.slideIndex = this.slideIndex + 1;
        console.log(this.slideIndex);
      },
      slide_left() {
        this.slideIndex = this.slideIndex - 1;
        console.log(this.slideIndex);
      },
      beforeEnter(el) {
        console.log("before enter!")
        gsap.set(el, {
          x:-700,
          opacity: 0
        })
        el.style.opacity = 0
      },
      enter(el, done) {
        console.log("enter!")
        gsap.to(el, {
          duration: 0.5,
          x: 0,
          opacity: 1,
          onComplete: done
        })
        el.style.opacity = 1
      },
      leave(el, done) {
        gsap.to(el, {
          duration: 0.5,
          x: 700,
          opacity: 0,
          onComplete: done
        })
      }
    }
  }
</script>


<style scoped>
</style>