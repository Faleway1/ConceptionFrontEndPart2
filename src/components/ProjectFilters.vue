<template>
  <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
    <input
      v-model="filters.query"
      type="search"
      placeholder="Rechercher un projet"
      class="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 shadow-sm focus:border-cyan-400 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white md:max-w-md"
    />
    <select
      v-model="filters.type"
      class="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 shadow-sm focus:border-cyan-400 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white md:w-60"
    >
      <option value="all">Tous les types</option>
      <option v-for="type in projectTypes" :key="type" :value="type">{{ type }}</option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  filters: {
    type: Object,
    required: true,
  },
  projectTypes: {
    type: Array,
    required: true,
  },
});
</script>
