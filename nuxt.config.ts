// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode',
  },
  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: '/api',
    },
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
})
