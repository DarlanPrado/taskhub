// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'bulma',
    '@/assets/css/global.css',
    '@/assets/icons/css/all.css',
  ]
})
