<template>
  <main>
    <HeroSection />
    <section id="projects" class="border-t border-slate-200 bg-white py-14 text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <div class="flex w-full flex-col gap-8 px-6 md:px-12 lg:px-16">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p class="text-sm uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Projets</p>
            <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Mes réalisations</h2>
          </div>
          <RouterLink to="/projects" class="text-sm font-semibold text-cyan-600 hover:text-cyan-500 dark:text-cyan-300">Voir tout</RouterLink>
        </div>
        <ProjectFilters :filters="filters" :project-types="projectTypes" />
        <div class="grid gap-4 md:grid-cols-2">
          <ProjectCard v-for="project in filteredProjects.slice(0, 4)" :key="project.id" :project="project" />
        </div>
      </div>
    </section>

    <section id="skills" class="border-t border-slate-200 bg-slate-100 py-14 text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <div class="w-full px-6 md:px-12 lg:px-16">
        <p class="text-sm uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Compétences</p>
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Un socle technique solide</h2>
        <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          <div
            class="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 text-center text-slate-900 dark:border-slate-800 dark:bg-slate-900/70 dark:text-white"
            v-for="skill in skills"
            :key="skill"
          >
            {{ skill }}
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="border-t border-slate-200 bg-white py-14 text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <div class="w-full px-6 md:px-12 lg:px-16">
        <p class="text-sm uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Services</p>
        <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Comment je peux aider</h2>
        <div class="mt-6 grid gap-4 md:grid-cols-3">
          <div class="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/70" v-for="service in services" :key="service.title">
            <h3 class="text-lg font-semibold text-slate-900 dark:text-white">{{ service.title }}</h3>
            <p class="text-slate-700 dark:text-slate-300">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="border-t border-slate-200 bg-slate-100 py-14 text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <div class="flex w-full flex-col gap-6 px-6 md:flex-row md:px-12 lg:px-16">
        <div class="flex-1 space-y-3">
          <p class="text-sm uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">À propos</p>
          <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Parcours & objectifs</h2>
          <p class="text-slate-700 dark:text-slate-300">
            Passionné par le web, j’ai construit des projets variés : dashboards, sites vitrines et outils internes. Mon objectif : rejoindre une équipe en alternance pour continuer d’apprendre tout en apportant mes compétences en intégration et en animation front.
          </p>
          <p class="text-slate-700 dark:text-slate-300">
            Je propose également des missions freelance pour accompagner les entreprises sur leurs besoins d’interface, de performance et d’accessibilité.
          </p>
        </div>
        <div class="flex-1 space-y-4">
          <div class="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/70">
            <h3 class="text-lg font-semibold text-slate-900 dark:text-white">Valeurs</h3>
            <p class="text-slate-700 dark:text-slate-300">Rigueur, collaboration, écoute des utilisateurs.</p>
          </div>
          <div class="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/70">
            <h3 class="text-lg font-semibold text-slate-900 dark:text-white">Façon de travailler</h3>
            <p class="text-slate-700 dark:text-slate-300">Sprints courts, prototypage rapide, feedbacks continus.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="border-t border-slate-200 bg-white py-14 text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <div class="w-full px-6 md:px-12 lg:px-16">
        <div class="grid gap-8 md:grid-cols-2">
          <div class="space-y-3">
            <p class="text-sm uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Contact</p>
            <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Restons en contact</h2>
            <ul class="space-y-2 text-slate-700 dark:text-slate-300">
              <li><span class="font-semibold text-slate-900 dark:text-white">Email</span> contact[at]portfolio.dev</li>
              <li><span class="font-semibold text-slate-900 dark:text-white">LinkedIn</span> linkedin.com/in/mon-profil</li>
              <li><span class="font-semibold text-slate-900 dark:text-white">CV</span> Téléchargement sur demande (PDF)</li>
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
  'HTML5',
  'CSS3',
  'JavaScript',
  'Vue.js',
  'Node.js',
  'Git',
  'SEO',
  'Accessibilité',
  'Performance web',
  'Design systems',
];

const services = [
  { title: 'Intégration web', description: 'Maquettage fidèle aux maquettes Figma, composants réutilisables et responsive.' },
  { title: 'Création de landing pages', description: 'Pages optimisées pour la conversion avec mesures de performance.' },
  { title: 'Audit & optimisation', description: 'Analyse Lighthouse, amélioration de l’accessibilité et du SEO.' },
];
</script>
