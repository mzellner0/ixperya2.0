import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ca from './locales/ca.json'

const messages = { en, ca }

const url = new URL(window.location.href)
let lang = url.searchParams.get('lang') ?? 'en'

if (lang !== 'en' && lang !== 'ca') {
  lang = 'en'
}

const i18n = createI18n({
  legacy: true,
  locale: lang,
  fallbackLocale: lang,
  messages
})

export default i18n