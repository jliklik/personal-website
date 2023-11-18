<template>
  <span
    class="flex flex-1 flex-row h-full bg-center bg-cover bg-scale" :style="bgStyle"
    @mouseover="toggleOnDetailed"
    @mouseleave="toggleOffDetailed"
  >
    <container class="flex flex-grow flex-col items-center tint-background">
      <div class="flex h-1/2 w-full items-center justify-center tint-background text-highlight-lg">
        {{ label }}
      </div>
      <Transition mode="out-in">
        <container v-if="mouseover==true" class="flex h-1/2 flex-grow flex-col w-full">
          <div class="flex flex-grow flex-col tint-background text-highlight-lg" >
            <li class="flex flex-grow no-bullets ml-10" v-for="item in text_list">
              {{ item }}
            </li>
          </div>
        </container>
        <div v-else class="flex h-1/2 w-full items-center justify-center tint-background">
          <br><br><br><br>
        </div>
      </Transition>
    </container>
  </span>
</template>

<script>
  // TODO: convert each flex container into a component and can pass in text and picture
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

  .glow-text-shadow {
    text-shadow: #A54CFF 2px 5px;
  }
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
  .tint-background {
    @apply backdrop-filter backdrop-brightness-25 hover:backdrop-brightness-50
  }
  .text-highlight {
    @apply text-white font-bold font-sans glow-text-shadow
  }
  .text-highlight-lg {
    @apply text-highlight text-5xl
  }
  .text-highlight-md {
    @apply text-highlight text-4xl 
  }
  .no-bullets {
    list-style-type: none;
    text-align: left;
  }
</style>