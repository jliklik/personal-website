<script setup>
  console.log('Home')
  import Infographic from '../components/Infographic.vue'
</script>

<template>
  <div class="grid grid-cols-3 divide-x-0 h-screen">
    <infographic :label="'Systems'" :text_list="['Integration', 'Design', 'Analysis']" :picture="'dtb.jpg'"></infographic>
    <infographic :label="'Software'" :text_list="['Embedded Systems', 'HMI', 'Devops', 'IoT']" :picture="'sib.jpg'"></infographic>
    <infographic :label="'Engineering'" :text_list="['Prototyping', 'Modeling', 'Testing']" :picture="'cad.jpg'"></infographic>
  </div>

</template>

<script>
  // TODO: convert each flex container into a component and can pass in text and picture
  export default {
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
</style>