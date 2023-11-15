<script setup>
  import Infographic from './Infographic.vue'
</script>

<template>
  <container class="flex flex-row flex-grow">
    <infographic :label="'Systems'" :text1="'Integration'" :text2="'Design'" :text3="'Analysis'"></infographic>
    <span class="flex flex-1 flex-row h-full text-white font-bold text-5xl font-sans glow-text-shadow bg-center bg-cover bg-[url('./assets/sib.jpg')]">
      <container class="flex flex-grow flex-col backdrop-filter backdrop-brightness-25 hover:backdrop-brightness-50">
        <div class="flex w-full h-full flex-grow items-center justify-center">
          Software
        </div>
      </container>
    </span>
    <span class="flex flex-1 flex-row h-full text-white font-bold text-5xl font-sans glow-text-shadow bg-center bg-cover bg-[url('./assets/cad.jpg')]">
      <container class="flex flex-grow flex-col backdrop-filter backdrop-brightness-25 hover:backdrop-brightness-50">
        <div class="flex w-full h-full flex-grow items-center justify-center">
          Engineering
        </div>
      </container>
    </span>
  </container>

</template>

<script>
  // TODO: convert each flex container into a component and can pass in text and picture
  export default {
    components: {
      Infographic
    },
    data() { // data is used to maintain state
      return {
        Systems: "Systems",
        Integration: "Integration",
        engineering_mouseover: false,
      }
    },
    methods: {
      toggleOnDetailedSystems() {
        console.log('Systems moused over');
        this.systems_mouseover = true;
      },
      toggleOffDetailedSystems() {
        console.log('Systems moused leave');
        this.systems_mouseover = false;
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