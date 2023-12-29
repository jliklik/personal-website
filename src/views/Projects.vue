<script setup>
  import Slide from '../components/Slide.vue'
</script>

<template>
  <div class="bg-black flex-col">
    <Transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div class="flex flex-col h-screen">
        <div class="flex h-[60px]">
          <ul class="flex w-full bg-slate-950" id="logo-bar">
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
            <li :class="c_sharp ? 'li-logo-selected' : 'li-logo-default'" @click="select_fp">
              <img :src="full_path(`c_sharp.png`)" class="logo-default">
            </li>
            <li :class="ignition ? 'li-logo-selected' : 'li-logo-default'" @click="select_fp">
              <img :src="full_path(`ignition.png`)" class="logo-default">
            </li>
            <li :class="rockwell ? 'li-logo-selected' : 'li-logo-default'" @click="select_fp">
              <img :src="full_path(`rockwell.png`)" class="logo-default">
            </li>
            <li :class="beckhoff ? 'li-logo-selected' : 'li-logo-default'" @click="select_fp">
              <img :src="full_path(`beckhoff.png`)" class="logo-default">
            </li>
            <li class="li-logo-default">
              <img :src="full_path(`vue.png`)" class="logo-default">
            </li>
            <li class="li-logo-default">
              <img :src="full_path(`javascript.png`)" class="logo-default">
            </li>
          </ul>
        </div>
        <div class="flex w-full bg-slate-950">
          <div class="h-1 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full mx-1 my-1" ref="bounce_bar"></div>
        </div>
        <div class="flex">
          <button type="button" class="text-white" @click="slide_right" >Forward</button>
          <button class="button" @click="slide_left">Back</button>
        </div>
        <div class="flex grow flex-row w-full overflow-x-hidden border-2 border-pink-400" ref="horizontal">
          <span
            class="flex shrink-0 items-stretch text-white bg-center bg-cover bg-scale w-full" :style="bgStyle"
          >
          </span>
          <span
            class="flex shrink-0 items-stretch text-white bg-center bg-cover bg-scale w-full" :style="bgStyle"
          >
          </span>
          <!-- <Slide class="flex" :picture="'seesaw2.jpg'"></Slide>
          <Slide class="flex" :picture="'yvr.jpg'"></Slide>
          <Slide class="flex" :picture="'yvr.jpg'"></Slide>
          <Slide class="flex" :picture="'yvr.jpg'"></Slide>
          <Slide class="flex" :picture="'yvr.jpg'"></Slide>
          <Slide class="flex" :picture="'yvr.jpg'"></Slide> -->
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
  import gsap from 'gsap';
  import ScrollToPlugin from "gsap/ScrollToPlugin";
  gsap.registerPlugin(ScrollToPlugin);

  export default {
    data() {
      return {
        slideIndex: 0,
        scrollPos: 0,
        screenWidth: 0,
        screenHeight: 0,
        max_slides: 5,
        num_icons: 12,
        corvus_selected: true,
        mda_selected: false,
        fp_selected: false,
        pweb_selected: false,
        bounce_bar_width: 0,
        horizontal_container: Object,
        bounce_bar: Object
      }
    },
    mounted() {
      this.slideIndex = 0;
      this.horizontal_container = this.$refs.horizontal;
      this.bounce_bar = this.$refs.bounce_bar;
      this.updateScreenSize();
      window.addEventListener('resize', this.updateScreenSize);
      this.select_corvus();
    },
    computed: {
      bgStyle() {
        return {
          backgroundImage: `url('../../src/assets/seesaw2.jpg')`
        }
      },
      corvus_width() {
        return this.screenWidth / this.num_icons * 5;
      },
      mda_width() {
        return this.screenWidth / this.num_icons * 3;
      },
      fp_width() {
        return this.screenWidth / this.num_icons * 4;
      },
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
      },
      ignition() {
        if (this.fp_selected == true) {
          return true; 
        } else {
          return false;
        }
      },
      rockwell() {
        if (this.fp_selected == true) {
          return true; 
        } else {
          return false;
        }
      },
      beckhoff() {
        if (this.fp_selected == true) {
          return true; 
        } else {
          return false;
        }
      },
      vue() {
        if (this.pweb_selected == true) {
          return true; 
        } else {
          return false;
        }
      }
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
        this.pweb_selected = false;
        gsap.to(this.bounce_bar, { x: 0, width: this.corvus_width, duration: 1, ease: "poweri.out" });
      },
      select_mda() {
        this.corvus_selected = false;
        this.mda_selected = true;
        this.fp_selected = false;
        this.pweb_selected = false;
        let mda_start = this.screenWidth/this.num_icons*3;
        gsap.to(this.bounce_bar, { x: mda_start, width: this.mda_width, duration: 1, ease: 'poweri.out' });
      },
      select_fp() {
        this.corvus_selected = false;
        this.mda_selected = false;
        this.fp_selected = true;
        this.pweb_selected = false;
        let fp_start = this.screenWidth/this.num_icons*6;
        gsap.to(this.bounce_bar, { x: fp_start, width: this.fp_width, duration: 1, ease: 'poweri.out' });
      },
      select_pweb() {
        this.corvus_selected = false;
        this.mda_selected = false;
        this.fp_selected = false;
        this.pweb_selected = true;
        let fp_start = this.screenWidth/this.num_icons*6;
        gsap.to(this.bounce_bar, { x: fp_start, width: this.fp_width, duration: 1, ease: 'poweri.out' });
      },
      slide_right() {
        if (this.slideIndex < this.max_slides - 1) {
          this.slideIndex = this.slideIndex + 1;
          const container_width = this.horizontal_container.clientWidth * this.slideIndex;
          console.log(container_width);
          gsap.to(this.horizontal_container, { scrollTo: {x: container_width}, duration: 2, ease: 'power2.inOut' });
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
          gsap.to(this.horizontal_container, { scrollTo: {x: container_width}, duration: 2, ease: 'power2.inOut' });
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
    },
    setup() {
      const beforeEnter = (el) => {
        console.log('before enter - set initial state')
        el.style.opacity = 0
      }
      const enter = (el) => {
        console.log('starting to enter - make transition')
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            toggleActions: "restart none restart none"
          },
          duration: 2,
          opacity: 1,
        })
      }
      const afterEnter = () => {
        console.log('after enter')
      }
      return {beforeEnter, enter, afterEnter}
    },
  }
</script>

<style scoped>
  .li-logo-selected{
    @apply flex w-screen justify-center transition ease-in-out duration-700
  }
  .li-logo-default{
    @apply flex w-screen justify-center grayscale hover:grayscale-0 transition ease-in-out duration-700
  }
  .logo-default{
    @apply flex w-1/2 rounded-lg object-scale-down mx-2 my-2;
  }
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>