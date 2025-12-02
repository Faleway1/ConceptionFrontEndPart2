<template>
  <main>
    <HeroSection />
    <section id="projects" class="border-t border-slate-800 bg-slate-900 py-14">
      <div class="mx-auto flex max-w-6xl flex-col gap-8 px-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm uppercase tracking-[0.2em] text-cyan-300">Projets</p>
            <h2 class="text-3xl font-bold text-white">Quelques réalisations</h2>
          </div>
          <RouterLink to="/projects" class="text-sm font-semibold text-cyan-300">Voir tout</RouterLink>
        </div>
        <ProjectFilters :filters="filters" :project-types="projectTypes" />
        <div class="grid gap-4 md:grid-cols-2">
          <ProjectCard v-for="project in filteredProjects.slice(0, 4)" :key="project.id" :project="project" />
        </div>
      </div>
    </section>

    <section id="skills" class="border-t border-slate-800 bg-slate-900 py-14">
      <div class="mx-auto max-w-6xl px-6">
        <p class="text-sm uppercase tracking-[0.2em] text-cyan-300">Compétences</p>
        <h2 class="text-3xl font-bold text-white">Mon stack</h2>
        <div class="mt-6 grid gap-4 md:grid-cols-3">
          <div class="rounded-xl border border-slate-800 bg-slate-900/70 p-4" v-for="skill in skills" :key="skill.title">
            <h3 class="text-lg font-semibold text-white">{{ skill.title }}</h3>
            <p class="text-slate-300">{{ skill.content }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="border-t border-slate-800 bg-slate-900 py-14">
      <div class="mx-auto max-w-6xl px-6">
        <p class="text-sm uppercase tracking-[0.2em] text-cyan-300">Services</p>
        <h2 class="text-3xl font-bold text-white">Ce que je propose</h2>
        <div class="mt-6 grid gap-4 md:grid-cols-3">
          <div class="rounded-xl border border-slate-800 bg-slate-900/70 p-4" v-for="service in services" :key="service.title">
            <h3 class="text-lg font-semibold text-white">{{ service.title }}</h3>
            <p class="text-slate-300">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="border-t border-slate-800 bg-slate-900 py-14">
      <div class="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row">
        <div class="flex-1 space-y-3">
          <p class="text-sm uppercase tracking-[0.2em] text-cyan-300">À propos</p>
          <h2 class="text-3xl font-bold text-white">Parcours & objectifs</h2>
          <p class="text-slate-300">
            Développeur frontend passionné, j'aime transformer des idées en interfaces utilisables et inclusives. Mon
            objectif : rejoindre une équipe produit en alternance ou accompagner des clients en freelance.
          </p>
          <p class="text-slate-300">
            J'apporte une approche centrée utilisateur, un soin particulier aux performances et une communication claire avec
            les parties prenantes.
          </p>
        </div>
        <div class="flex-1 space-y-4">
          <div class="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
            <h3 class="text-lg font-semibold text-white">Expérience</h3>
            <p class="text-slate-300">Projets personnels, missions d'école et prototypes pour startups locales.</p>
          </div>
          <div class="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
            <h3 class="text-lg font-semibold text-white">Valeurs</h3>
            <p class="text-slate-300">Curiosité, fiabilité, transparence, amélioration continue.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="border-t border-slate-800 bg-slate-900 py-14">
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid gap-8 md:grid-cols-2">
          <div class="space-y-3">
            <p class="text-sm uppercase tracking-[0.2em] text-cyan-300">Contact</p>
            <h2 class="text-3xl font-bold text-white">Discutons de vos besoins</h2>
            <p class="text-slate-300">Email : contact@portfolio.dev (anonymisé) • Téléchargement CV sur demande</p>
            <ul class="space-y-2 text-slate-300">
              <li>Disponibilité : alternance ou missions freelance</li>
              <li>Réponse sous 48h</li>
              <li>Basé à distance, intervention en présentiel possible</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue';
import ProjectCard from '../components/ProjectCard.vue';
import ProjectFilters from '../components/ProjectFilters.vue';
import ContactForm from '../components/ContactForm.vue';
import useProjects from '../composables/useProjects.js';

const { filters, filteredProjects, projectTypes } = useProjects();

const skills = [
  { title: 'Frontend', content: 'Vue 3, Tailwind, animations, accessibilité.' },
  { title: 'Outils', content: 'Git, CI/CD, tests end-to-end, audits Lighthouse.' },
  { title: 'Produit', content: 'Méthodes agiles, ateliers UX, documentation.' },
];

const services = [
  { title: 'Intégration web', description: 'Intégration responsive fidèle aux maquettes.' },
  { title: 'Applications web', description: 'Features Vue.js maintenables et performantes.' },
  { title: 'Optimisation', description: 'Audit performance et accessibilité, corrections ciblées.' },
];
</script>
