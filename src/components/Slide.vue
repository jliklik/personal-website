<template>
  <div class="flex items-stretch w-screen justify-center border-2 border-red-700">
    <div class="flex w-1/2 items-stretch justify-center border-2 border-emerald-700">
      <div class="flex justify-center relative inset-0 border-2 border-blue-800" :style="{width: w + 'px', height: h + 'px'}">
        <div class="absolute z-0">
          <svg :height="h" :width="w">
            <circle class="fill-pink-800"
              :cy="w/2"
              :cx="w/2"
              :r="w/2"
            />
          </svg>
        </div>
        <div class="absolute z-20" :style="{top: image_pad + 'px'}">
          <img :src="`../../src/assets/verticross.jpg`" :style="{width: image_dia + 'px', height: image_dia + 'px'}" class="rounded-full">
        </div>
      </div>
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