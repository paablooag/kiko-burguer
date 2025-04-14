export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
        { rel: 'icon', type: 'image/png', href: '/favicon-192x192.png', sizes: '192x192' },
      ],
    },
  },

  ssr: true,
  devtools: { enabled: true },
  compatibilityDate: '2025-02-13',

  modules: ['nuxt-simple-sitemap'],

  // 👇 Aquí es donde se debe configurar correctamente el sitemap
  runtimeConfig: {
    public: {
    sitemap: {
      siteUrl: 'https://kikoundefiledburger.com',
    }
  }
  }
})
