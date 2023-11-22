// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // modules: ['@nuxtjs/tailwindcss'],
  modules: [
    // Simple usage
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-primevue',
    // With options
    ['@nuxtjs/eslint-module', { /* module options */ }]
  ],
  typescript: {
    typeCheck: true
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ['primevue/resources/themes/tailwind-light/theme.css', '~/assets/css/tailwind.css']
})
