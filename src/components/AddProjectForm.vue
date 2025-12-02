<template>
  <form @submit.prevent="handleSubmit" class="space-y-4 rounded-xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-semibold text-white">Ajouter un projet</h3>
      <span v-if="submitted" class="text-sm text-cyan-300">Ajouté ✔</span>
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <label class="space-y-2 text-sm">
        <span class="text-slate-300">Titre</span>
        <input v-model="form.title" required class="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white" />
      </label>
      <label class="space-y-2 text-sm">
        <span class="text-slate-300">Type</span>
        <input v-model="form.type" required class="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white" />
      </label>
    </div>
    <label class="space-y-2 text-sm">
      <span class="text-slate-300">Technologies (séparées par des virgules)</span>
      <input v-model="form.tech" required class="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white" />
    </label>
    <label class="space-y-2 text-sm">
      <span class="text-slate-300">Description courte</span>
      <textarea
        v-model="form.description"
        required
        rows="3"
        class="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white"
      ></textarea>
    </label>
    <button type="submit" class="w-full rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-900 hover:bg-cyan-300">Ajouter</button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue';

const emit = defineEmits(['add']);

const form = reactive({
  title: '',
  type: '',
  tech: '',
  description: '',
});

const submitted = ref(false);

const handleSubmit = () => {
  emit('add', {
    title: form.title,
    type: form.type,
    tech: form.tech.split(',').map((t) => t.trim()),
    description: form.description,
  });
  submitted.value = true;
  Object.assign(form, { title: '', type: '', tech: '', description: '' });
  setTimeout(() => (submitted.value = false), 2000);
};
</script>
