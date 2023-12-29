<template>
  <div class="flex shrink-0 text-white bg-center bg-cover bg-scale w-full rounded-lg items-center" :style="bgStyle" @mouseover="set_mouse_over" @mouseleave="remove_mouse_over">
    <Transition>
      <div v-if="mouse_over" class="w-10 h-10 rounded-full flex justify-center items-center bg-slate-400 opacity-75 hover:opacity-100 mx-3 cursor-pointer" @click="slide_left">
        <p>&larr;</p>
      </div>
    </Transition>
    <div class="flex grow"></div>
    <Transition>
      <div v-if="mouse_over" class="w-10 h-10 rounded-full flex justify-center items-center bg-slate-400 opacity-75 hover:opacity-100 mx-3 cursor-pointer" @click="slide_right">
        <p>&rarr;</p>
      </div>
    </Transition>
  </div>
</template>

<script>
  export default {
    props: {
      picture: {required: true, type: String}
    },
    data() {
      return {
        picture_st: this.picture,
        mouse_over: false
      }
    },
    computed: {
      bgStyle() {
        return {
          backgroundImage: `url('../../src/assets/${this.picture_st}')`
        }
      },
    },
    methods: {
      set_mouse_over() {
        this.mouse_over = true
      },
      remove_mouse_over() {
        this.mouse_over = false
      },
      slide_left() {
        this.$emit('slide_left')
      },
      slide_right() {
        this.$emit('slide_right')
      }
    }
  }
</script>


<style scoped>
  .v-enter-from{
    opacity: 0;
  }
  .v-enter-active {
    transition: all 0.5s ease;
  }
  .v-leave-active {
    transition: opacity 0.5s ease;
  }
  .v-leave-to {
    opacity: 0;
  }
</style>