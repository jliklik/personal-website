<script setup>
  import Infographic from '../components/Infographic.vue'
</script>

<template>
  <div class="bg-black">
    <Transition
      appear
      @before-enter="beforeEnter"
      @enter="enter">
      <div class="flex-col grow bg-slate-950 text-white">
        <div class="flex h-[40px] w-screen mt-3">
          <ul class="flex w-full bg-slate-950" ref="logo_bar">
            <li class="li-logo-selected">
              <router-link to="/projects" class="logo-default">
                <div class="flex justify-center">
                  <img :src="full_path(`elixir.png`)" class="">
                </div>
              </router-link>
            </li>
            <li class="li-logo-selected">
              <router-link to="/projects" class="logo-default">
                <div class="flex justify-center">
                  <img :src="full_path(`rust.png`)" class="">
                </div>
              </router-link>
            </li>
            <li class="li-logo-selected">
              <router-link to="/projects" class="logo-default">
                <div class="flex justify-center">
                  <img :src="full_path(`python.png`)" class="">
                </div>
              </router-link>
            </li>
            <li class="li-logo-selected">
              <router-link to="/projects" class="logo-default">
                <div class="flex justify-center">
                  <img :src="full_path(`matlab.png`)" class="">
                </div>
              </router-link>
            </li>
            <li class="li-logo-selected">
              <router-link to="/projects" class="logo-default">
                <div class="flex justify-center">
                  <img :src="full_path(`c_lang.png`)" class="">
                </div>
              </router-link>
            </li>
            <li class="li-logo-selected">
              <router-link to="/projects" class="logo-default">
                <div class="flex justify-center">
                  <img :src="full_path(`cpp.png`)" class="">
                </div>
              </router-link>
            </li>
            <li class="li-logo-selected">
              <router-link to="/projects" class="logo-default">
                <div class="flex justify-center">
                  <img :src="full_path(`c_sharp.png`)" class="">
                </div>
              </router-link>
            </li>
            <li class="li-logo-selected">
              <router-link to="/projects" class="logo-default">
                <div class="flex justify-center">
                  <img :src="full_path(`ignition.png`)" class="">
                </div>
              </router-link>
            </li>
            <li class="li-logo-selected">
              <router-link to="/projects" class="logo-default">
                <div class="flex justify-center">
                  <img :src="full_path(`beckhoff.png`)" class="">
                </div>
              </router-link>
            </li>
            <li class="li-logo-selected">
              <router-link to="/projects" class="logo-default">
                <div class="flex justify-center">
                  <img :src="full_path(`rockwell.png`)" class="">
                </div>
              </router-link>
            </li>
            <li class="li-logo-selected">
              <router-link to="/projects" class="logo-default">
                <div class="flex justify-center">
                  <img :src="full_path(`autocad.png`)" class="">
                </div>
              </router-link>
            </li>
            <li class="li-logo-selected">
              <router-link to="/projects" class="logo-default">
                <div class="flex justify-center">
                  <img :src="full_path(`eagle.png`)" class="">
                </div>
              </router-link>
            </li>
            <li class="li-logo-selected">
              <router-link to="/projects" class="logo-default">
                <div class="flex justify-center">
                  <img :src="full_path(`vue.png`)" class="">
                </div>
              </router-link>
            </li>
            <li class="li-logo-selected">
              <router-link to="/projects" class="logo-default">
                <div class="flex justify-center">
                  <img :src="full_path(`javascript.png`)" class="">
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="flex grow mt-5 ml-5">
          <div class="flex w-1/8">
            <img :src="full_path(`switch.jpg`)" class="rounded-lg w-64 h-64 object-cover">
          </div>
          <div class="w-7/8 ml-5">
            Hello! My name is Jian Lik. I am a <span class="px-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full">software</span> and <span class="px-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full">automation</span> engineer with 5+ years of experience.
            <br>
            I have a strong interest in distributed systems and real-time software.
          </div>
        </div>
        <div class="flex grow mt-5 ml-5">
          <div class="w-1/8">
            <img :src="full_path(`ada.jpg`)" class="rounded-lg w-64 h-64 object-cover">
          </div>
          <div class="ml-5">
            My background is in <span class="px-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full">mechatronics</span> engineering from the University of British Columbia.
            <br>
            I am currently completing my masters in <span class="px-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full">computer science</span> online with Georgia Tech.
            <br>
            I had a strong academic track record throughout my degree. I am curious about algorithms, linear systems and controls theory.
          </div>
        </div>
        <div class="flex grow mt-5 ml-5 mb-5">
          <div class="w-1/8">
            <img :src="full_path(`bw.jpg`)" class="rounded-lg w-64 h-64 object-cover">
          </div>
          <div class="ml-5">
            My services include programming <span class="px-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full">embedded linux</span> systems, 
            <span class="px-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full">microcontrollers</span>, 
            <span class="px-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full">PLCs</span> and 
            <span class="px-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full">UI interfaces</span>.
            <br>
            With practical experience in both industrial and R&D environments, I have the wide skillset to develop a solution that meets your needs.
            <br>
            Whether it is interfacing with legacy code or developing a new algorithm, I enjoy the thrill of taking on a new challenge.
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
  export default {
    methods: {
      full_path(picture) {
        return `../../src/assets/${picture}`
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
          duration: 1,
          opacity: 1,
        })
      }
      const afterEnter = () => {
        console.log('after enter')
      }
      return {beforeEnter, enter, afterEnter}
    }
  }
</script>

<style scoped>
  .li-logo-selected{
    @apply flex w-1/2 items-center justify-center transition ease-in-out duration-700 cursor-pointer
  }
  .logo-default{
    @apply flex max-w-full max-h-full rounded-lg mx-2 my-2;
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