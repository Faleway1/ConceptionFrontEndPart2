<template>
  <form @submit.prevent="handleSubmit" class="space-y-4 rounded-xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl">
    <h3 class="text-xl font-semibold text-white">Me contacter</h3>
    <div class="grid gap-4 md:grid-cols-2">
      <label class="space-y-2 text-sm">
        <span class="text-slate-300">Nom</span>
        <input v-model="form.name" required class="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white" />
      </label>
      <label class="space-y-2 text-sm">
        <span class="text-slate-300">Email</span>
        <input v-model="form.email" type="email" required class="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white" />
      </label>
    </div>
    <label class="space-y-2 text-sm">
      <span class="text-slate-300">Message</span>
      <textarea v-model="form.message" required rows="4" class="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white"></textarea>
    </label>
    <button type="submit" class="w-full rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-900 hover:bg-cyan-300">
      Envoyer
    </button>
    <p v-if="submitted" class="text-sm text-cyan-300">Message envoyé (simulation)</p>
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
