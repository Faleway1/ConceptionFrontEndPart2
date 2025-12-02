<template>
  <main class="bg-white py-14 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
    <div class="w-full space-y-6 px-6 md:px-12 lg:px-16">
      <RouterLink to="/projects" class="text-sm font-semibold text-cyan-600 hover:text-cyan-500 dark:text-cyan-300">← Retour aux projets</RouterLink>
      <div v-if="!project" class="rounded-lg border border-slate-200 bg-white p-6 text-slate-700 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
        Projet introuvable.
      </div>
      <article v-else class="rounded-xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="text-sm uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">{{ project.type }}</p>
            <h1 class="text-3xl font-bold text-slate-900 dark:text-white">{{ project.title }}</h1>
          </div>
          <span class="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">{{ project.type }}</span>
        </div>
        <p class="mt-4 text-slate-700 dark:text-slate-200">{{ project.description }}</p>
        <div class="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
          <p><span class="font-semibold text-slate-900 dark:text-white">Technologies :</span> {{ project.tech.join(', ') }}</p>
          <p v-if="project.context"><span class="font-semibold text-slate-900 dark:text-white">Contexte :</span> {{ project.context }}</p>
          <p v-if="project.outcome"><span class="font-semibold text-slate-900 dark:text-white">Résultat :</span> {{ project.outcome }}</p>
        </div>
      </article>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import useProjects from '../composables/useProjects.js';

const route = useRoute();
const { getProject } = useProjects();

const project = computed(() => getProject(route.params.id));
</script>
