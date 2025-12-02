import { computed, onMounted, reactive, ref } from 'vue';

const projectsState = reactive({
  items: [],
  loading: false,
  error: null,
});

const filters = reactive({
  query: '',
  type: 'all',
});

export default function useProjects() {
  const ready = ref(false);

  const fetchProjects = async () => {
    projectsState.loading = true;
    projectsState.error = null;
    try {
      const response = await fetch('/projects.json');
      const data = await response.json();
      projectsState.items = data.projects || [];
      ready.value = true;
    } catch (err) {
      projectsState.error = 'Impossible de charger les projets.';
    } finally {
      projectsState.loading = false;
    }
  };

  const addProject = (project) => {
    const nextId = Math.max(0, ...projectsState.items.map((p) => Number(p.id))) + 1;
    projectsState.items.unshift({ id: String(nextId), ...project });
  };

  onMounted(() => {
    if (!ready.value && !projectsState.loading) {
      fetchProjects();
    }
  });

  const filteredProjects = computed(() => {
    const query = filters.query.toLowerCase();
    return projectsState.items.filter((project) => {
      const matchesQuery =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.type.toLowerCase().includes(query);
      const matchesType = filters.type === 'all' || project.type === filters.type;
      return matchesQuery && matchesType;
    });
  });

  const projectTypes = computed(() => {
    const types = new Set(['all']);
    projectsState.items.forEach((p) => types.add(p.type));
    return Array.from(types);
  });

  const getProject = (id) => projectsState.items.find((p) => String(p.id) === String(id));

  return {
    projectsState,
    filters,
    filteredProjects,
    projectTypes,
    fetchProjects,
    addProject,
    getProject,
  };
}
