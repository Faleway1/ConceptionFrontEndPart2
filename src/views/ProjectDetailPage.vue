<template>
  <main class="bg-slate-900 py-14">
    <div class="mx-auto max-w-4xl space-y-6 px-6">
      <RouterLink to="/projects" class="text-sm font-semibold text-cyan-300">← Retour aux projets</RouterLink>
      <div v-if="!project" class="rounded-lg border border-slate-800 bg-slate-900/70 p-6 text-slate-300">
        Projet introuvable.
      </div>
      <article v-else class="rounded-xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="text-sm uppercase tracking-[0.2em] text-cyan-300">{{ project.type }}</p>
            <h1 class="text-3xl font-bold text-white">{{ project.title }}</h1>
          </div>
          <span class="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">{{ project.type }}</span>
        </div>
        <p class="mt-4 text-slate-200">{{ project.description }}</p>
        <div class="mt-4 space-y-2 text-slate-300">
          <p><span class="font-semibold text-white">Technologies :</span> {{ project.tech.join(', ') }}</p>
          <p v-if="project.context"><span class="font-semibold text-white">Contexte :</span> {{ project.context }}</p>
          <p v-if="project.outcome"><span class="font-semibold text-white">Résultat :</span> {{ project.outcome }}</p>
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
