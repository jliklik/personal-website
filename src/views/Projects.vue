<script setup>
  import Slide from '../components/Slide.vue'
</script>

<template>
  <div class="flex-col h-screen border-2 border-green-700">
    <div class="flex">
      <button type="button" @click="slide_right" >Forward</button>
      <button class="button" @click="slide_left">Back</button>
    </div>
    <div class="flex flex-grow overflow-x-hidden w-3/5 border-2 border-pink-400">
      <Transition mode = "out-in"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave">
        <Slide class="" ref="slide1" v-if="slideIndex==1"></Slide>
        <Slide class="" ref="slide2" v-else-if="slideIndex==2"></Slide>
      </Transition>
    </div>
  </div>
</template>

<script>
  import gsap from 'gsap';

  export default {
    data() {
      return {
        slideIndex: 0
      }
    },
    mounted() {
      this.slideIndex = 1;
    },
    methods: {
      slide_right() {
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