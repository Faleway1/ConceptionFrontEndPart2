<template>
  <form @submit.prevent="handleSubmit" class="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
    <h3 class="text-xl font-semibold text-slate-900 dark:text-white">Me contacter</h3>
    <div class="grid gap-4 md:grid-cols-2">
      <label class="space-y-2 text-sm">
        <span class="text-slate-700 dark:text-slate-300">Nom</span>
        <input v-model="form.name" required class="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 focus:border-cyan-400 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
      </label>
      <label class="space-y-2 text-sm">
        <span class="text-slate-700 dark:text-slate-300">Email</span>
        <input v-model="form.email" type="email" required class="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 focus:border-cyan-400 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
      </label>
    </div>
    <label class="space-y-2 text-sm">
      <span class="text-slate-700 dark:text-slate-300">Message</span>
      <textarea v-model="form.message" required rows="4" class="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 focus:border-cyan-400 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"></textarea>
    </label>
    <button type="submit" class="w-full rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-white hover:bg-cyan-400">
      Envoyer
    </button>
    <p v-if="submitted" class="text-sm text-cyan-600 dark:text-cyan-300">Message envoyé (simulation)</p>
    <p class="text-sm text-slate-600 dark:text-slate-400">Le formulaire est non fonctionnel pour cette version. Données non envoyées.</p>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({ name: '', email: '', message: '' });
const submitted = ref(false);

const handleSubmit = () => {
  submitted.value = true;
  setTimeout(() => (submitted.value = false), 2500);
  Object.assign(form, { name: '', email: '', message: '' });
};
</script>
