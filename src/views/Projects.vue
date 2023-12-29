<script setup>
  import Slide from '../components/Slide.vue'
</script>

<template>
  <div class="flex-col h-screen">
    <div class="flex h-[60px]">
      <ul class="flex flex-grow bg-slate-950" id="logo-bar">
        <li :class="elixir ? 'li-logo-selected' : 'li-logo-default'" @click="select_corvus">
          <img :src="full_path(`elixir.png`)" class="logo-default">
        </li>
        <li :class="rust ? 'li-logo-selected' : 'li-logo-default'" @click="select_corvus">
          <img :src="full_path(`rust.png`)" class="logo-default">
        </li>
        <li :class="python ? 'li-logo-selected' : 'li-logo-default'" @click="select_corvus">
          <img :src="full_path(`python.png`)" class="logo-default">
        </li>
        <li :class="matlab ? 'li-logo-selected' : 'li-logo-default'" @click="select_mda">
          <img :src="full_path(`matlab.png`)" class="logo-default">
        </li>
        <li :class="c_lang ? 'li-logo-selected' : 'li-logo-default'" @click="select_mda">
          <img :src="full_path(`c_lang.png`)" class="logo-default">
        </li>
        <li :class="cpp ? 'li-logo-selected' : 'li-logo-default'" @click="select_mda">
          <img :src="full_path(`cpp.png`)" class="logo-default">
        </li>
        <li class="li-logo-default">
          <img :src="full_path(`c_sharp.png`)" class="logo-default">
        </li>
        <li class="li-logo-default">
          <img :src="full_path(`vue.png`)" class="logo-default">
        </li>
        <li class="li-logo-default">
          <img :src="full_path(`javascript.png`)" class="logo-default">
        </li>
        <li class="li-logo-default">
          <img :src="full_path(`ignition.png`)" class="logo-default">
        </li>
        <li class="li-logo-default">
          <img :src="full_path(`rockwell.png`)" class="logo-default">
        </li>
        <li class="li-logo-default">
          <img :src="full_path(`beckhoff.png`)" class="logo-default">
        </li>
      </ul>
    </div>
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
  import { ScrollToPlugin } from"gsap/ScrollToPlugin";
  gsap.registerPlugin(ScrollToPlugin);

  export default {
    data() {
      return {
        slideIndex: 0,
        scrollPos: 0,
        screenWidth: 0,
        screenHeight: 0,
        max_slides: 5,
        corvus_selected: false,
        mda_selected: false,
        fp_selected: false,
        horizontalContainer: Object
      }
    },
    computed: {
      elixir() {
        if (this.corvus_selected == true) {
          return true; 
        } else {
          return false;
        }
      },
      rust() {
        if (this.corvus_selected == true) {
          return true; 
        } else {
          return false;
        }
      },
      python() {
        if (this.corvus_selected == true) {
          return true; 
        } else {
          return false;
        }
      },
      matlab() {
        if (this.corvus_selected == true || this.mda_selected == true) {
          return true; 
        } else {
          return false;
        }
      },
      c_lang() {
        if (this.corvus_selected == true || this.mda_selected == true) {
          return true; 
        } else {
          return false;
        }
      },
      cpp() {
        if (this.mda_selected == true) {
          return true; 
        } else {
          return false;
        }
      },
      c_sharp() {
        if (this.fp_selected == true) {
          return true; 
        } else {
          return false;
        }
      }
    },
    mounted() {
      this.slideIndex = 0;
      this.horizontalContainer = this.$refs.horizontal;
      this.updateScreenSize();
      window.addEventListener('resize', this.updateScreenSize);
    },
    methods: {
      full_path(picture) {
        return `../../src/assets/${picture}`
      },
      updateScreenSize() {
        // Update screen size data
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
      },
      select_corvus() {
        this.corvus_selected = true;
        this.mda_selected = false;
        this.fp_selected = false;
      },
      select_mda() {
        this.corvus_selected = false;
        this.mda_selected = true;
        this.fp_selected = false;
      },
      select_fp() {
        this.corvus_selected = false;
        this.mda_selected = false;
        this.fp_selected = true;
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
  .li-logo-selected{
    @apply flex w-full justify-center transition ease-in-out duration-700
  }
  .li-logo-default{
    @apply flex w-full justify-center grayscale hover:grayscale-0 transition ease-in-out duration-700
  }
  .logo-default{
    @apply flex rounded-lg object-scale-down mx-2 my-2;
  }
</style>