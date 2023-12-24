<script setup>
  import Infographic from '../components/Infographic.vue'
</script>

<template>
  <div class="bg-black">
    <Transition
      appear
      @before-enter="beforeEnter"
      @enter="enter">
      <div class="grid grid-cols-3 divide-x-0 flex-grow border-2 border-black">
        <infographic :label="'SYSTEMS'" :text_list="['Integration', 'Design', 'Analysis']" :picture="'dtb.jpg'"></infographic>
        <infographic :label="'SOFTWARE'" :text_list="['Embedded Systems', 'HMI', 'Devops', 'IoT']" :picture="'sib.jpg'"></infographic>
        <infographic :label="'ENGINEERING'" :text_list="['Prototyping', 'Modeling', 'Testing']" :picture="'cad.jpg'"></infographic>
      </div>
    </Transition>
  </div>
</template>

<script>
  export default {
    methods: {
      toggleOnDetailedSystems() {
        console.log('Systems moused over');
        this.systems_mouseover = true;
      },
      toggleOffDetailedSystems() {
        console.log('Systems moused leave');
        this.systems_mouseover = false;
      }
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
    }
  }
</script>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>