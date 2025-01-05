// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  modules: ['nuxt-vuefire'],
  vuefire: {
    auth: {
      enabled: true,
      sessionCookie: false
    },
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_APP_ID,
      messagingSenderId: process.env.FIREBASE_STORAGE_BUCKET,
      appId: process.env.FIREBASE_MESSAGING_SENDER_ID
    },
  },
  app: {
    baseURL: '/vocabulary-app/',  // Set the base URL for the deployed app
  },
})