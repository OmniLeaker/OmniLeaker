import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-chained-backend'
import HttpBackend from 'i18next-http-backend'
import ICU from 'i18next-icu'
import LocalStorageBackend from 'i18next-localstorage-backend'
import locales from './lib/languages'

export const localesList_z = Object.values(locales).map(locale => ({
  value: locale.locale,
  name: locale.nativeName
}))

await i18n
  .use(ICU)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    backend: {
      backends: [
        LocalStorageBackend,
        HttpBackend
      ],
      backendOptions: [
        { 
          defaultVersion: 'v1',
          expirationTime: (import.meta.env.NODE_ENV == null || import.meta.env.NODE_ENV === 'development') ? 1 : 7 * 24 * 60 * 60 * 1000
        },
        { 
          
          loadPath: 'locales/{{lng}}/{{ns}}.json'
        }
      ]
    },
    defaultNS: 'translation',
    fallbackNS: 'translation',
    fallbackLng: {
      'zh-Hans': ['zh-CN', 'en'],
      'zh-Hant': ['zh-TW', 'en'],
      zh: ['zh-CN', 'en'],
      default: ['en']
    },
    debug: import.meta.env.DEBUG,
    
    react: {
      
      
      bindI18n: 'languageChanged loaded',
      
      nsMode: 'default'
    }
  }, (err, t) => {
    if (err != null) console.error('i18n init error:', err)
  })

export default i18n
