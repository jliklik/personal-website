<template>
  <div class="flex items-stretch w-screen justify-center border-2 border-red-700">
    <div class="relative flex w-1/2 items-stretch justify-center border-2 border-emerald-700">
      <div class="w-[500px] relative">
        <div class="absolute z-0 border-2">
          <svg :height="500" :width="500">
            <circle class="fill-pink-800"
              :cy=250
              :cx=250
              :r=250
            />
          </svg>
        </div>
        <div class="absolute z-20" :style="{top: image_pad + 'px', left: image_pad + 'px'}">
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
      circle_w() { return this.w*2; },
      image_dia() {return 350 },
      image_pad() {return (this.w - this.image_dia)/2; }
    },
  }
</script>