<template>
  <div :data-theme="theme">
    <div class="navbar fixed bg-base-100 z-40 shadow-sm">
      <div class="navbar-start">
        <a class="btn btn-ghost md:text-xl">Nuxt + Tailwind + DaisyUI Template</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <!-- TODO: You can add menu here -->
      </div>
      <div class="navbar-end">
        <select v-model="theme" class="select select-primary md:w-full md:max-w-xs">
          <option disabled selected>Select Theme</option>
          <option v-for="theme in themes" :value="theme" :key="theme">
            <span class="uppercase">{{ theme }}</span>
          </option>
        </select>
      </div>
    </div>
    <slot />
    <footer class="footer footer-center p-10 bg-base-50">
      <div>
        <h1 class="text-2xl md:text-3xl font-bold">Nuxt + Tailwind + DaisyUI Template</h1>
        <p class="md:font-bold">
          Create beautiful and fast websites without the tedious setup
        </p>
        <p>Copyright © {{new Date().getFullYear()}} - All right reserved</p>
      </div>
      <div>
        <div class="grid grid-flow-col gap-4">
          <a href="#" target="_blank">
            <i class="lab la-twitter text-4xl"></i>
          </a>
          <a href="https://github.com/mycurelabs/nuxt-tailwind-template" target="_blank">
            <i class="lab la-github text-4xl"></i>
          </a>
          <a href="#" target="_blank">
            <i class="lab la-facebook text-4xl"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
const THEMES = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
];
export default {
  setup () {
    const theme = ref(null);
    watch(theme, (value) => {
      localStorage.setItem('daisyui-theme', value);
    });
    onMounted(() => {
      theme.value = localStorage.getItem('daisyui-theme') || 'dark';
    });
    return {
      theme,
      themes: THEMES,
    };
  },
};
</script>
