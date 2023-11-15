<template>
  <span
    class="flex flex-1 flex-row h-full  bg-center bg-cover bg-scale bg-[url('./assets/dtb.jpg')]"
    @mouseover="toggleOnDetailed"
    @mouseleave="toggleOffDetailed"
  >
    <container class="flex flex-grow flex-col items-center tint-background">
      <div class="flex basis-[33.3%]: 33.33% w-full h-full items-center justify-center tint-background text-highlight-lg">
        {{ label }}
      </div>
      <Transition mode="out-in">
        <container v-if="mouseover==true" class="flex basis-[66.6%] flex-grow flex-col ">
          <div class="flex flex-grow w-full items-center justify-center text-center tint-background text-highlight-md" >
            {{ text1 }}<br>
            <br>
            {{ text2 }}<br>
            <br>
            {{ text3 }}<br>
            <br>
          </div>
        </container>
        <div v-else class="flex flex-grow basis-[66.6%] w-full h-full items-center justify-center tint-background">
          <br><br><br><br><br><br>
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
      text1: {required: true, type: String},
      text2: {required: true, type: String},
      text3: {required: true, type: String},
    },
    data() { // data is used to maintain state
      return {
        mouseover: false,
      }
    },
    methods: {
      toggleOnDetailed() {
        console.log("hello")
        console.log(this.label);
        this.mouseover = true;
      },
      toggleOffDetailed() {
        // console.log('moused leave');
        this.mouseover = false;
      }
    }
  }
</script>

<style scoped>
  .glow-text-shadow {
    text-shadow: #A54CFF 2px 5px;
  }
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }
  .tint-background {
    @apply backdrop-filter backdrop-brightness-25 hover:backdrop-brightness-50
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
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
</style>