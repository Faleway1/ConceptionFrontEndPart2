<template>
  <article class="rounded-xl border border-slate-200 bg-white p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
    <div class="flex items-start justify-between">
      <h3 class="text-xl font-semibold text-slate-900 dark:text-white">{{ project.title }}</h3>
      <span class="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">{{ project.type }}</span>
    </div>
    <p class="mt-2 text-slate-700 dark:text-slate-300">{{ project.description }}</p>
    <div class="mt-4 flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
      <span>{{ project.tech.join(', ') }}</span>
      <RouterLink :to="`/projects/${project.id}`" class="text-cyan-600 hover:text-cyan-500 dark:text-cyan-300 dark:hover:text-cyan-200">En savoir plus</RouterLink>
    </div>
  </article>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
