<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-900 dark:text-slate-100">
    <HeaderNav />
    <RouterView />
    <footer class="border-t border-slate-200/70 bg-white py-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
      © 2024 Portfolio développeur — Conçu avec Vue.js & Tailwind CSS
    </footer>
  </div>
</template>

<script setup>
import HeaderNav from './components/HeaderNav.vue';
</script>
