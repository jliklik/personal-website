<template>
  <ul class="flex bg-gradient-to-r from-indigo-300 to-violet-800">
    <li>
      <button class="btn w-24 btn-pink glow-text-shadow">Home</button> 
    </li>
    <li>
      <button class="btn w-24 btn-pink glow-text-shadow">GitHub</button>
    </li>
    <li>
      <button class="btn w-24 btn-pink glow-text-shadow">Blog</button>
    </li>
    <li>
      <button class="btn w-24 btn-pink glow-text-shadow">Projects</button>
    </li>
  </ul>
</template>

<style scoped>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-emerald {
    @apply bg-emerald-700 text-white;
  }
  .btn:hover {
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  }
  .btn-pink {
    @apply bg-gradient-to-r from-indigo-500 to-indigo-800 text-white
  }
</style>