<template>
  <container class="flex flex-row flex-grow">
    <span id="systems"
      class="flex flex-1 flex-row h-full  bg-center bg-cover bg-scale bg-[url('./assets/dtb.jpg')]"
      @mouseover="toggleOnDetailedSystems"
      @mouseleave="toggleOffDetailedSystems"
    >
      <container class="flex flex-grow flex-col items-center tint-background">
        <div class="flex basis-[33.3%]: 33.33% w-full h-full items-center justify-center tint-background text-highlight-lg">
          Systems
        </div>
        <Transition mode="out-in">
          <container v-if="systems_mouseover==true" class="flex basis-[66.6%] flex-grow flex-col ">
            <div class="flex flex-grow w-full items-center justify-center text-center tint-background text-highlight-md" >
              Integration<br>
              <br>
              Analysis<br>
              <br>
              Design<br>
              <br>
            </div>
          </container>
          <div v-else class="flex flex-grow basis-[66.6%] w-full h-full items-center justify-center tint-background">
            <br><br><br><br><br><br>
          </div>
        </Transition>
      </container>
    </span>
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
    name: 'Home',
    data() { // data is used to maintain state
      return {
        systems_mouseover: false,
        software_mouseover: false,
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