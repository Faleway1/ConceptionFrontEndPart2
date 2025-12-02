<template>
  <header class="sticky top-0 z-30 bg-slate-900/80 backdrop-blur border-b border-slate-800">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <RouterLink to="/" class="text-lg font-bold text-cyan-300">Portfolio</RouterLink>
      <div class="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
        <RouterLink to="/" class="hover:text-white">Accueil</RouterLink>
        <RouterLink to="/projects" class="hover:text-white">Projets</RouterLink>
        <RouterLink to="/" class="hover:text-white">À propos</RouterLink>
        <RouterLink to="/" class="hover:text-white">Contact</RouterLink>
      </div>
      <button class="md:hidden text-slate-100" @click="toggleMenu" aria-label="Ouvrir le menu">
        ☰
      </button>
    </nav>
    <div v-if="open" class="md:hidden border-t border-slate-800 bg-slate-900">
      <RouterLink to="/" class="block px-6 py-3" @click="toggleMenu">Accueil</RouterLink>
      <RouterLink to="/projects" class="block px-6 py-3" @click="toggleMenu">Projets</RouterLink>
      <RouterLink to="/" class="block px-6 py-3" @click="toggleMenu">À propos</RouterLink>
      <RouterLink to="/" class="block px-6 py-3" @click="toggleMenu">Contact</RouterLink>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(false);
const toggleMenu = () => {
  open.value = !open.value;
};
</script>
