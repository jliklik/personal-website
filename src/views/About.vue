<script setup>
  console.log('About')
  import Journey from '../components/Journey.vue'
</script>

<template>
  <Transition
    appear
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @onMounted="onMounted"
  >
    <h1>About</h1>
  </Transition>
</template>

<script>
  import gsap from 'gsap';
  import ScrollTrigger from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

  // https://www.youtube.com/watch?v=X7IBa7vZjmo
  export default {
    setup() {
      const beforeEnter = (el) => {
        console.log('before enter - set initial state')
        el.style.transform = "translateY(-60px)"
        el.style.opacity = 0
      }
      const onMounted = (el) => {
        console.log('mounted - make transition')
        gsap.to(el, {
          // scrollTrigger: {
          //   trigger: el,
          //   toggleActions: "restart pause reverse none"
          // },
          duration: 1,
          y: 0,
          opacity: 1,
          ease: 'bounce.out'
        })
      }
      const enter = (el) => {
        console.log('starting to enter - make transition')
        gsap.to(el, {
          // scrollTrigger: {
          //   trigger: el,
          //   toggleActions: "restart pause reverse none"
          // },
          duration: 1,
          y: 0,
          opacity: 1,
          ease: 'bounce.out'
        })
      }
      const afterEnter = () => {
        console.log('after enter')
      }
      return {beforeEnter, enter, afterEnter, onMounted}
    },
    components: {
    },
    methods: {
      
    }
  }
</script>

<style scoped>

</style>