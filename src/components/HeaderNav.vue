<template>
  <header class="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 text-slate-900 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-100">
    <nav class="flex w-full items-center justify-between px-6 py-4 md:px-10">
      <RouterLink to="/" class="text-lg font-bold text-cyan-600 dark:text-cyan-300">Portfolio</RouterLink>
      <div class="hidden items-center gap-6 text-sm font-medium md:flex">
        <RouterLink to="/" class="hover:text-slate-600 dark:hover:text-white">Accueil</RouterLink>
        <RouterLink to="/projects" class="hover:text-slate-600 dark:hover:text-white">Projets</RouterLink>
        <RouterLink to="/" class="hover:text-slate-600 dark:hover:text-white">À propos</RouterLink>
        <RouterLink to="/" class="hover:text-slate-600 dark:hover:text-white">Contact</RouterLink>
        <button
          type="button"
          class="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-cyan-300 dark:hover:text-cyan-200"
          @click="toggleMode"
        >
          {{ isDark ? 'Light' : 'Dark' }} mode
        </button>
      </div>
      <button class="md:hidden text-slate-900 dark:text-slate-100" @click="toggleMenu" aria-label="Ouvrir le menu">
        ☰
      </button>
    </nav>
    <div v-if="open" class="md:hidden border-t border-slate-200 bg-white px-6 pb-4 dark:border-slate-800 dark:bg-slate-900">
      <div class="flex flex-col gap-2 py-2 text-sm">
        <RouterLink to="/" class="block py-1" @click="toggleMenu">Accueil</RouterLink>
        <RouterLink to="/projects" class="block py-1" @click="toggleMenu">Projets</RouterLink>
        <RouterLink to="/" class="block py-1" @click="toggleMenu">À propos</RouterLink>
        <RouterLink to="/" class="block py-1" @click="toggleMenu">Contact</RouterLink>
        <button
          type="button"
          class="self-start rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-cyan-300 dark:hover:text-cyan-200"
          @click="toggleMode"
        >
          {{ isDark ? 'Light' : 'Dark' }} mode
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import useColorMode from '../composables/useColorMode.js';

const open = ref(false);
const { isDark, toggleMode } = useColorMode();

const toggleMenu = () => {
  open.value = !open.value;
};
</script>
