<template>
  <div class="flex">
    <ul class="flex flex-grow bg-gradient-to-r from-violet-800 to-indigo-300">
      <li class="flex li-link">
        <router-link href="#" class="a-link flex flex-grow items-center justify-center">Home</router-link>
      </li>
      <li class="flex li-link">
        <router-link href="#" class="a-link flex flex-grow items-center justify-center">About</router-link>
      </li>
      <li class="flex li-link">
        <router-link href="#" class="a-link flex flex-grow items-center justify-center">Projects</router-link>
      </li>
      <li class="flex li-link">
        <a href="#" class="a-link flex flex-grow items-center justify-center">GitHub</a>
      </li>
    </ul>
    <div class="w-250px bg-gradient-to-r from-slate-800 to-slate-900">
      <ul class="grid grid-cols-[75px_230px] font-bold text-white ml-3">
        <img src="../../src/assets/jl_logo.png" width="50" height="50" class="item1 col-span-1">
        <div class="grid grid-rows-2 mr-3">
          <strong>Jian Lik Ng</strong>
          <span>Software Systems Engineer</span>
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn:hover {
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  }
  .li-link{
    @apply w-28;
  }
  .a-link{
    @apply font-bold text-white text-xl leading-10 hover:bg-violet-600 rounded-lg;
  }
  .glow-text-shadow {
    text-shadow: #A54CFF 2px 5px;
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