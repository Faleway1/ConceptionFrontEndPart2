import { computed, ref, watchEffect } from 'vue';

const getPreferredMode = () => {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const mode = ref(getPreferredMode());

const applyMode = (value) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.classList.toggle('dark', value === 'dark');
  localStorage.setItem('theme', value);
};

applyMode(mode.value);

watchEffect(() => {
  applyMode(mode.value);
});

export default function useColorMode() {
  const toggleMode = () => {
    mode.value = mode.value === 'dark' ? 'light' : 'dark';
  };

  return {
    mode,
    isDark: computed(() => mode.value === 'dark'),
    toggleMode,
  };
}
