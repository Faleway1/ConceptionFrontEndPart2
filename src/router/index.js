import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProjectsPage from '../views/ProjectsPage.vue';
import ProjectDetailPage from '../views/ProjectDetailPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/projects', name: 'projects', component: ProjectsPage },
    { path: '/projects/:id', name: 'project-detail', component: ProjectDetailPage, props: true },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
