<template>
  <span
    class="flex h-full bg-center bg-cover bg-scale" :style="bgStyle"
    @mouseover="toggleOnDetailed"
    @mouseleave="toggleOffDetailed"
  >
    <div class="flex-col w-screen tint-background">
      <div class="flex h-1/2 items-center justify-center text-highlight-lg">
        {{ label }}
      </div>
      <Transition mode="out-in">
        <div v-if="mouseover==true" class="flex h-1/2 flex-grow flex-col w-full">
          <div class="flex flex-grow flex-col text-highlight-md mb-20">
            <li class="flex flex-grow no-bullets ml-10" v-for="item in text_list">
              {{ item }}
            </li>
          </div>
        </div>
        <div v-else class="flex h-1/2 w-full justify-center">
          <br><br><br><br>
        </div>
      </Transition>
    </div>
  </span>
</template>

<script>
  export default {
    props: {
      label: {required: true, type: String}, // can bind to labels
      text_list: {required: true, type: Array},
      picture: {required: true, type: String}
    },
    data() { // data is used to maintain state
      return {
        mouseover: false,
        picture_st: this.picture
      }
    },
    computed: {
      bgStyle() {
        return {
          backgroundImage: `url('../../src/assets/${this.picture_st}')`
        }
      }
    },
    methods: {
      toggleOnDetailed() {
        this.mouseover = true;
      },
      toggleOffDetailed() {
        this.mouseover = false;
      },
    }
  }
</script>

<style scoped>
  .v-enter-from{
    opacity: 0;
    transform: translateX(-10%);
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
  .glow-text-shadow {
    text-shadow: #A54CFF 2px 5px;
  }
  .tint-background {
    @apply backdrop-filter backdrop-brightness-25 hover:backdrop-brightness-50
  }
  .text-highlight {
    @apply text-white font-inter
  }
  .text-highlight-lg {
    @apply text-highlight text-5xl font-black
  }
  .text-highlight-md {
    @apply text-highlight text-4xl font-bold
  }
  .no-bullets {
    list-style-type: none;
    text-align: left;
  }
</style>