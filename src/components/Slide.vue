<template>
  <div class="flex flex-shrink w-full">
    <div class="flex flex-shrink">
      <img :src="picture_path" class="flex flex-shrink rounded-lg flex-grow object-cover">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      picture: {required: true, type: String}
    },
    data() {
      return {
        picture_st: this.picture
      }
    },
    computed: {
      picture_path() { return `../../src/assets/${this.picture_st}` },
      h() { return 500; },
      w() { return 500; },
      image_dia() {return 350 },
      image_pad() {return (this.w - this.image_dia)/2; }
    },
  }
</script>