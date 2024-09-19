import { ref, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

export function useLanguage() {
  const { locale } = useI18n()
  const currentLanguage = ref(localStorage.getItem('language') || 'en')

  const toggleLang = () => {
    currentLanguage.value = currentLanguage.value === 'en' ? 'es' : 'en'
    locale.value = currentLanguage.value
  }

  watchEffect(() => {
    localStorage.setItem('language', currentLanguage.value)
  })

  return {
    currentLanguage,
    toggleLang
  }
}
