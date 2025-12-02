<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 text-slate-900 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
    <div class="flex w-full flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:px-12 lg:px-16">
      <div class="flex-1 space-y-4">
        <p class="text-sm uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">Développeur Frontend</p>
        <h1 class="text-4xl font-bold leading-tight text-slate-900 md:text-5xl dark:text-white">
          Construisons des expériences web modernes, performantes et accessibles.
        </h1>
        <p class="max-w-3xl text-lg text-slate-700 dark:text-slate-300">
          Je conçois des interfaces élégantes, réactives et maintenables en combinant Vue.js, Tailwind CSS et de bonnes pratiques produit.
        </p>
        <div class="flex flex-wrap gap-3">
          <RouterLink to="/projects" class="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-white shadow-lg hover:bg-cyan-400">
            Voir mes projets
          </RouterLink>
          <a href="#contact" class="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-900 hover:border-cyan-400 hover:text-cyan-700 dark:border-slate-700 dark:text-white dark:hover:border-cyan-300">
            Me contacter
          </a>
        </div>
      </div>
      <div class="flex-1">
        <div class="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900/70">
          <p class="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Stack favorite</p>
          <ul class="mt-3 space-y-2 text-slate-900 dark:text-white">
            <li>Vue 3 + Composition API</li>
            <li>Tailwind CSS & Design System</li>
            <li>Tests end-to-end</li>
            <li>Accessibilité et performance</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
