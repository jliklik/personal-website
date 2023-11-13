<template>
  <container class="flex flex-row flex-grow">
    <span 
      class="flex flex-1 flex-row h-full text-white font-bold text-5xl font-sans glow-text-shadow bg-center bg-cover bg-[url('./assets/dtb.jpg')]"
      @mouseover="toggleOnDetailedSystems"
      @mouseleave="toggleOffDetailedSystems"
    >
      <container class="flex flex-grow flex-column items-center backdrop-filter backdrop-brightness-25 hover:backdrop-brightness-50">
        <div class="flex flex-grow items-center justify-center h-full border-2">
          Systems
        </div>
        <!-- <transition name="slide" mode="out-in">
          <div v-if="systems_mouseover==true" class="flex h-screen" >
            Hello world!
          </div>
        </transition> -->
      </container>
    </span>
    <span class="flex flex-1 flex-row h-full text-white font-bold text-5xl font-sans glow-text-shadow bg-center bg-cover bg-[url('./assets/sib.jpg')]">
      <container class="flex flex-grow flex-row items-center backdrop-filter backdrop-brightness-25 hover:backdrop-brightness-50">
        <div class="flex flex-grow items-center justify-center h-full">
          Software
        </div>
      </container>
    </span>
    <span class="flex flex-1 flex-row h-full text-white font-bold text-5xl font-sans glow-text-shadow bg-center bg-cover bg-[url('./assets/cad.jpg')]">
      <container class="flex flex-grow flex-row items-center backdrop-filter backdrop-brightness-25 hover:backdrop-brightness-50">
        <div class="flex flex-grow items-center justify-center h-full">
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
</style>