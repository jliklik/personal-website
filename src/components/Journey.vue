<template>
  <Transition
    appear
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
  >
    <span class="flex h-screen">
      <img :src="imgSrc" class="flex w-1/3 flex-grow object-cover">
      <div class="flex w-2/3 bg-gradient-to-r from-slate-600 to-slate-800">
        <slot>Empty Content</slot>
      </div>
    </span>

  </Transition>
</template>

<script>
  import gsap from 'gsap';
  import ScrollTrigger from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

  // https://www.youtube.com/watch?v=X7IBa7vZjmo
  export default {
    props: {
      picture: {required: true, type: String}
    },
    data() {
      return {
        picture_st: this.picture
      }
    },
    computed: {
      imgSrc() {
        return `../../src/assets/${this.picture_st}`
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
    },
    components: {
    },
    methods: {
      
    }
  }
</script>