<template>
  <div :height="h" class="bg-gradient-to-r from-gray-200 to-slate-300 border-2 border-lime-600">
    <div class="flex relative">
      <svg :height="h">
        <rect class="fill-pink-800"
          :x = 0
          :y = "h/2 - 10/2"
          :width="w"
          :height="10"
        />
      </svg>
      <svg :width="circle_w" :height="h" class="absolute z-10 top-0 left-0 right-0 bottom-0">
        <circle class="fill-pink-800"
          :cy="h/2"
          :cx="w/2"
          :r="w-100"
        />
      </svg>
      <div :height="h" class="absolute z-20 left-0" :style="{top: image_pad + 'px', bottom: 0 + 'px'}">
        <img :src="`../../src/assets/verticross.jpg`" :style="{width: image_dia + 'px', height: image_dia + 'px'}" class="rounded-full">
      </div>:
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      h() { return 500; },
      w() { return 500; },
      circle_w() { return this.w*2; },
      image_dia() {return 460 },
      image_pad() {return (this.w - this.image_dia)/2; }
    },
  }
</script>