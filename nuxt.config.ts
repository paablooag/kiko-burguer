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

  // No necesitas modules ni sitemap, ya que el sitemap se genera manualmente
  modules: [],

  // Mantén runtimeConfig si lo usas en otras partes de la app
  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL ||
        (process.env.NODE_ENV === 'production'
          ? 'https://kikoundefiledburger.com'
          : 'http://localhost:3000'),
    },
  },
});