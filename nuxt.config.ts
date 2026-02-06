// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'dark',
    fallback: 'light',
    storage: 'localStorage',
    storageKey: 'nuxt-color-mode',
  },
  $development: {
    app: {
      head: {
        title: 'Nuxt Chat',
        titleTemplate: '%s | https://t.me/zzzzzap',
      },
    },
  },

  $production: {
    app: {
      head: {
        title: 'Nuxt Chat',
      },
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/color-mode'],
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    openaiApiKey: '',
  },
})
