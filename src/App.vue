<template>
  <div class="min-h-screen bg-slate-900 text-slate-100">
    <HeaderNav />
    <RouterView />
    <footer class="border-t border-slate-800 bg-slate-900 py-6 text-center text-sm text-slate-400">
      © 2024 Portfolio développeur — Conçu avec Vue.js & Tailwind CSS
    </footer>
  </div>
</template>

<script setup>
import HeaderNav from './components/HeaderNav.vue';
</script>
