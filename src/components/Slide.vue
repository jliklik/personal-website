<template>
  <div class="flex flex-shrink w-full border-2 border-red-700">
    <div class="flex flex-shrink border-2 border-blue-800">
      <img :src="`../../src/assets/verticross.jpg`" class="flex flex-shrink rounded-md flex-grow object-cover border-2">
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      h() { return 500; },
      w() { return 500; },
      image_dia() {return 350 },
      image_pad() {return (this.w - this.image_dia)/2; }
    },
  }
</script>