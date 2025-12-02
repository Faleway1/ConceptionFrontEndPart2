<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
    <div class="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center">
      <div class="flex-1 space-y-4">
        <p class="text-sm uppercase tracking-[0.3em] text-cyan-300">Développeur Frontend</p>
        <h1 class="text-4xl font-bold leading-tight text-white md:text-5xl">
          Construisons des expériences web modernes, performantes et accessibles.
        </h1>
        <p class="max-w-2xl text-lg text-slate-300">
          Je conçois des interfaces élégantes, réactives et maintenables en combinant Vue.js, Tailwind CSS et de bonnes
          pratiques produit.
        </p>
        <div class="flex flex-wrap gap-3">
          <RouterLink to="/projects" class="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-900 shadow-lg">
            Voir mes projets
          </RouterLink>
          <a href="#contact" class="rounded-lg border border-slate-700 px-5 py-3 font-semibold text-white">Me contacter</a>
        </div>
      </div>
      <div class="flex-1">
        <div class="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl">
          <p class="text-sm font-semibold uppercase tracking-wide text-slate-400">Stack favorite</p>
          <ul class="mt-3 space-y-2 text-white">
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
