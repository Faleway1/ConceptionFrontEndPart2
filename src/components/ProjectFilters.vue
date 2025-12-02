<template>
  <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
    <input
      v-model="filters.query"
      type="search"
      placeholder="Rechercher un projet"
      class="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white focus:border-cyan-400 focus:outline-none md:max-w-md"
    />
    <select
      v-model="filters.type"
      class="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white focus:border-cyan-400 focus:outline-none md:w-60"
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
