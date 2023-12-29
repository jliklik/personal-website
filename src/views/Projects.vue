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
          <ul class="flex w-full bg-slate-950" ref="logo_bar">
            <li :class="corvus_state ? 'li-logo-selected' : 'li-logo-default'" @click="select_corvus_and_slide">
              <img :src="full_path(`elixir.png`)" class="logo-default">
            </li>
            <li :class="corvus_state ? 'li-logo-selected' : 'li-logo-default'" @click="select_corvus_and_slide">
              <img :src="full_path(`rust.png`)" class="logo-default">
            </li>
            <li :class="corvus_state ? 'li-logo-selected' : 'li-logo-default'" @click="select_corvus_and_slide">
              <img :src="full_path(`python.png`)" class="logo-default">
            </li>
            <li :class="(corvus_state || mda_state) ? 'li-logo-selected' : 'li-logo-default'" @click="select_mda_and_slide">
              <img :src="full_path(`matlab.png`)" class="logo-default">
            </li>
            <li :class="(corvus_state || mda_state) ? 'li-logo-selected' : 'li-logo-default'" @click="select_mda_and_slide">
              <img :src="full_path(`c_lang.png`)" class="logo-default">
            </li>
            <li :class="mda_state ? 'li-logo-selected' : 'li-logo-default'" @click="select_mda_and_slide">
              <img :src="full_path(`cpp.png`)" class="logo-default">
            </li>
            <li :class="fp_state ? 'li-logo-selected' : 'li-logo-default'" @click="select_fp_and_slide">
              <img :src="full_path(`c_sharp.png`)" class="logo-default">
            </li>
            <li :class="fp_state ? 'li-logo-selected' : 'li-logo-default'" @click="select_fp_and_slide">
              <img :src="full_path(`ignition.png`)" class="logo-default">
            </li>
            <li :class="fp_state ? 'li-logo-selected' : 'li-logo-default'" @click="select_fp_and_slide">
              <img :src="full_path(`beckhoff.png`)" class="logo-default">
            </li>
            <li :class="(fp_state || brock_state) ? 'li-logo-selected' : 'li-logo-default'" @click="select_brock_and_slide">
              <img :src="full_path(`rockwell.png`)" class="logo-default">
            </li>
            <li :class="brock_state ? 'li-logo-selected' : 'li-logo-default'" @click="select_brock_and_slide">
              <img :src="full_path(`autocad.png`)" class="logo-default">
            </li>
            <li :class="psu_state ? 'li-logo-selected' : 'li-logo-default'" @click="select_psu_and_slide">
              <img :src="full_path(`eagle.png`)" class="logo-default">
            </li>
            <li :class="pweb_state ? 'li-logo-selected' : 'li-logo-default'" @click="select_pweb_and_slide">
              <img :src="full_path(`vue.png`)" class="logo-default">
            </li>
            <li :class="pweb_state ? 'li-logo-selected' : 'li-logo-default'" @click="select_pweb_and_slide">
              <img :src="full_path(`javascript.png`)" class="logo-default">
            </li>
          </ul>
        </div>
        <div class="flex w-full bg-slate-950">
          <div class="h-1 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full mx-1 my-1" ref="bounce_bar"></div>
        </div>
        <div class="flex grow">
          <div class="flex-col w-1/3 h-full bg-slate-950">
            <div class="flex mx-5 my-5 h-1/10 items-center justify-center">
              <img :src="full_path(`corvus_energy.png`)" class="w-1/2 rounded-lg object-scale-down">
            </div>
            <div class="flex-col text-white mx-5 my-5 overflow-auto">
              <div class="text-lg">The world's leading supplier of marine batteries.</div>
              <br>
              <div class="text-lg">Developed several new features in Elixir</div>
              <ul class="ml-5 list-disc list-outside">
                <li>Safety shutdown false positive detection</li>
                <li>Serialization/deserialization logic between Elixir terms and C structs for nif calls</li>
                <li>Modbus driver for new IO controller</li>
                <li>Upgraded multicasting app to be more robust</li>
              </ul>
              <br>
              <div class="text-lg">Worked with controls team to implement</div>
              <ul class="ml-5 list-disc list-outside">
                <li>Upgraded current limit, state of charge and state of health models</li>
                <li>Implemented fan control algorithm</li>
                <li>Azure DevOps pipeline to generate MATLAB embedded C code and Elixir nif interface</li>
              </ul>
              <br>
              <div class="text-lg">Azure IoT integration</div>
              <ul class="ml-5 list-disc list-outside">
                <li>Experimented with methods to deliver OTA firmware updates using cloud storage/containers</li>
                <li>Developed MQTT app in rust to receive device twin updates and send reported properties</li>
              </ul>
              <br>
              <div class="text-lg">HIL/SIL testing</div>
              <ul class="ml-5 list-disc list-outside">
                <li>Wrote hardware in loop tests in Python, SIL tests in elixir</li>
                <li>Added drivers to handle new power supplies and load banks (VISA, gRPC) </li>
              </ul>

            </div>
          </div>
          <div class="flex w-2/3">
            <div class="flex flex-row w-full overflow-x-hidden" ref="horizontal">
              <Slide :picture="'dolphin.jpg'" @slide_left="slide_left" @slide_right="slide_right"></Slide>
              <Slide :picture="'shamu.jpg'" @slide_left="slide_left" @slide_right="slide_right"></Slide>
              <Slide :picture="'cp140.jpg'" @slide_left="slide_left" @slide_right="slide_right"></Slide>
              <Slide :picture="'isar_2.jpg'" @slide_left="slide_left" @slide_right="slide_right"></Slide>
              <Slide :picture="'fp_kit.jpg'" @slide_left="slide_left" @slide_right="slide_right"></Slide>
              <Slide :picture="'fp_line.jpg'" @slide_left="slide_left" @slide_right="slide_right"></Slide>
              <Slide :picture="'yvr.jpg'" @slide_left="slide_left" @slide_right="slide_right"></Slide>
              <Slide :picture="'divert.jpg'" @slide_left="slide_left" @slide_right="slide_right"></Slide>
              <Slide :picture="'psu.jpg'" @slide_left="slide_left" @slide_right="slide_right"></Slide>
              <Slide :picture="'pcb.jpg'" @slide_left="slide_left" @slide_right="slide_right"></Slide>
              <Slide :picture="'coding.png'" @slide_left="slide_left" @slide_right="slide_right"></Slide>
            </div>
          </div>
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
        max_slides: 12,
        num_icons: 14,
        corvus_slide_index: 0,
        mda_slide_index: 2,
        fp_slide_index: 4,
        brock_slide_index: 6,
        psu_slide_index: 8,
        pweb_slide_index: 10,
        logo_bar_width: 0,
        horizontal_container: Object,
        logo_bar: Object,
        bounce_bar: Object,
        state: "corvus_state"
      }
    },
    mounted() {
      this.slideIndex = 0;
      this.horizontal_container = this.$refs.horizontal;
      this.logo_bar = this.$refs.logo_bar;
      this.bounce_bar = this.$refs.bounce_bar;
      this.updateScreenSize();
      window.addEventListener('resize', this.updateScreenSize);
      this.select_corvus();
    },
    computed: {
      corvus_width() {
        return this.logo_bar_width / this.num_icons * 5;
      },
      mda_width() {
        return this.logo_bar_width / this.num_icons * 3;
      },
      fp_width() {
        return this.logo_bar_width / this.num_icons * 4;
      },
      brock_width() {
        return this.logo_bar_width / this.num_icons * 2;
      },
      psu_width() {
        return this.logo_bar_width / this.num_icons * 1;
      },
      pweb_width() {
        return this.logo_bar_width / this.num_icons * 2;
      },
      corvus_state() {
        if (this.slideIndex >= this.corvus_slide_index && this.slideIndex <= this.corvus_slide_index + 1 ){
          if (this.state != "corvus_state") {
            this.select_corvus();
          }
          return true;
        } else {
          return false;
        }
      },
      mda_state() {
        if (this.slideIndex >= this.mda_slide_index && this.slideIndex <= this.mda_slide_index + 1 ){
          if (this.state != "mda_state") {
            this.select_mda();
          }
          return true;
        } else {
          return false;
        }
      },
      fp_state() {
        if (this.slideIndex >= this.fp_slide_index && this.slideIndex <= this.fp_slide_index + 1 ){
          if (this.state != "fp_state") {
            this.select_fp();
          }
          return true;
        } else {
          return false;
        }
      },
      brock_state() {
        if (this.slideIndex >= this.brock_slide_index && this.slideIndex <= this.brock_slide_index + 1 ){
          if (this.state != "brock_state") {
            this.select_brock();
          }
          return true;
        } else {
          return false;
        }
      },
      psu_state() {
        if (this.slideIndex >= this.psu_slide_index && this.slideIndex <= this.psu_slide_index + 1 ){
          if (this.state != "psu_state") {
            this.select_psu();
          }
          return true;
        } else {
          return false;
        }
      },
      pweb_state() {
        if (this.slideIndex >= this.pweb_slide_index && this.slideIndex <= this.pweb_slide_index + 1 ){
          if (this.state != "pweb_state") {
            this.select_fp();
          }
          return true;
        } else {
          return false;
        }
      },
    },
    methods: {
      full_path(picture) {
        return `../../src/assets/${picture}`
      },
      full_url(picture) {
        return `url('../../src/assets/${picture}')`
      },
      slide_to_index(slide_index) {
        if ((slide_index < this.max_slides - 1) && (slide_index >= 0)) {
          this.slideIndex = slide_index;
          const pos = this.horizontal_container.clientWidth * this.slideIndex;
          console.log(pos);
          gsap.to(this.horizontal_container, { scrollTo: {x: pos}, duration: 2, ease: 'power2.inOut' });
          console.log(this.slideIndex);
        } else if (slide_index >= this.max_slide) {
          this.slideIndex = this.max_slides - 1;
          console.log(this.slideIndex);
        } else {
          this.slideIndex = 0;
          console.log(this.slideIndex);
        }
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
          const container_width = this.horizontal_container.clientWidth * this.slideIndex;
          console.log(container_width);
          gsap.to(this.horizontal_container, { scrollTo: {x: container_width}, duration: 2, ease: 'power2.inOut' });
          console.log(this.slideIndex);
        } else {
          this.slideIndex = 0;
          console.log(this.slideIndex);
        }
      },
      updateScreenSize() {
        // Update screen size data
        this.screenWidth = window.innerWidth;
        console.log(this.screenWidth)
        this.screenHeight = window.innerHeight;
        this.logo_bar_width = this.logo_bar.offsetWidth;
      },
      select_corvus_and_slide() {
        this.select_corvus();
        this.slide_to_index(this.corvus_slide_index);
      },
      select_corvus() {
        this.state = "corvus_state";
        gsap.to(this.bounce_bar, { x: 0, width: this.corvus_width, duration: 1, ease: "poweri.out" });
      },
      corvus_bg() {
        return {
          backgroundImage: this.full_url('cp140.png')
        }
      },
      select_mda_and_slide() {
        this.select_mda();
        this.slide_to_index(this.mda_slide_index);
      },
      select_mda() {
        this.state = "mda_state";
        let start = this.logo_bar_width/this.num_icons*3;
        gsap.to(this.bounce_bar, { x: start, width: this.mda_width, duration: 1, ease: 'poweri.out' });
      },
      select_fp_and_slide() {
        this.select_fp();
        this.slide_to_index(this.fp_slide_index);
      },
      select_fp() {
        this.state = "fp_state";
        let start = this.logo_bar_width/this.num_icons*6;
        gsap.to(this.bounce_bar, { x: start, width: this.fp_width, duration: 1, ease: 'poweri.out' });
      },
      select_brock_and_slide() {
        this.select_brock();
        this.slide_to_index(this.brock_slide_index);
      },
      select_brock() {
        this.state = "brock_state";
        let start = this.logo_bar_width/this.num_icons*9;
        gsap.to(this.bounce_bar, { x: start, width: this.brock_width, duration: 1, ease: 'poweri.out' });
      },
      select_psu_and_slide() {
        this.select_psu();
        this.slide_to_index(this.psu_slide_index);
      },
      select_psu() {
        this.state = "psu_state";
        let start = this.logo_bar_width/this.num_icons*11;
        gsap.to(this.bounce_bar, { x: start, width: this.psu_width, duration: 1, ease: 'poweri.out' });
      },
      select_pweb_and_slide() {
        this.select_pweb();
        this.slide_to_index(this.pweb_slide_index);
      },
      select_pweb() {
        this.state = "pweb_state";
        let start = this.logo_bar_width/this.num_icons*12;
        gsap.to(this.bounce_bar, { x: start, width: this.pweb_width, duration: 1, ease: 'poweri.out' });
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
    @apply flex w-screen justify-center transition ease-in-out duration-700 cursor-pointer
  }
  .li-logo-default{
    @apply flex w-screen justify-center grayscale hover:grayscale-0 transition ease-in-out duration-700 cursor-pointer
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