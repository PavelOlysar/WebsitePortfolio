import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    // NavBar

    hero: {
      lang: 'english',
      highlight1: 'test test test',
      highlight2: 'Hello'
    },

    mode: {
      language: 'Language',
      description: "Press 'L' or click this."
    }
  },
  es: {
    //NavBar

    hero: {
      lang: 'espanol',
      highlight1: 'testo testo testo',
      highlight2: 'Hola'
    },

    mode: {
      language: 'Idioma',
      description: "Presiona 'L' o haz clic aquí."
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('language') || 'en',
  fallbackLocale: 'en',
  messages
})
