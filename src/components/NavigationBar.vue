<template>
  <div class="flex">
    <ul class="flex flex-grow bg-slate-950">
      <li class="flex li-link">
        <router-link to="/" class="router-link flex flex-grow items-center justify-center">Home</router-link>
      </li>
      <li class="flex li-link">
        <router-link to="/projects" class="router-link flex flex-grow items-center justify-center">Projects</router-link>
      </li>
      <li class="flex li-link">
        <a href="https://github.com/jliklik" class="router-link flex flex-grow items-center justify-center">GitHub</a>
      </li>
    </ul>
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
  .router-link{
    @apply font-bold font-poppins text-white text-xl leading-10 rounded-lg;
  }
</style>