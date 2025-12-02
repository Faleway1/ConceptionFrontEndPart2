<template>
  <main class="bg-white py-14 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
    <div class="w-full space-y-6 px-6 md:px-12 lg:px-16">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p class="text-sm uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Projets</p>
          <h1 class="text-3xl font-bold text-slate-900 dark:text-white">Tous les projets</h1>
        </div>
        <RouterLink to="/" class="text-sm font-semibold text-cyan-600 hover:text-cyan-500 dark:text-cyan-300">Retour accueil</RouterLink>
      </div>
      <ProjectFilters :filters="filters" :project-types="projectTypes" />
      <div v-if="projectsState.loading" class="text-slate-600 dark:text-slate-300">Chargement...</div>
      <div v-else-if="projectsState.error" class="text-red-500 dark:text-red-300">{{ projectsState.error }}</div>
      <div v-else class="grid gap-4 md:grid-cols-2">
        <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
      </div>
      <AddProjectForm @add="addProject" />
    </div>
  </main>
</template>

<script setup>
import AddProjectForm from '../components/AddProjectForm.vue';
import ProjectCard from '../components/ProjectCard.vue';
import ProjectFilters from '../components/ProjectFilters.vue';
import useProjects from '../composables/useProjects.js';

const { filters, filteredProjects, projectTypes, projectsState, addProject } = useProjects();
</script>
