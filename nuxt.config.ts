// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        // Favicon en formato .ico
        { rel: 'icon', href: '/favicon.ico' },

        // Opcional: si tienes un favicon en formato .png o con otros tamaños
        { rel: 'icon', type: 'image/png', href: '/favicon.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
        { rel: 'icon', type: 'image/png', href: '/favicon-192x192.png', sizes: '192x192' },
      ],
    },
  },
  ssr: true, 

  compatibilityDate: '2025-02-13',
})