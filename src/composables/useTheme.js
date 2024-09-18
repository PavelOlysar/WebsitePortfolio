import { ref, onMounted } from 'vue'

export function useTheme() {
  const isDarkMode = ref(false)

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    const mode = isDarkMode.value ? 'dark' : 'light'
    localStorage.setItem('mode', mode)
  }

  const handleKeydown = (event) => {
    if (event.key === 'M' || event.key === 'm') {
      toggleDarkMode()
    }
  }

  onMounted(() => {
    const savedMode = localStorage.getItem('mode') || 'light'
    isDarkMode.value = savedMode === 'dark'

    window.addEventListener('keydown', handleKeydown)
  })

  return {
    isDarkMode,
    toggleDarkMode
  }
}
