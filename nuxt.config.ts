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

  ssr: true, // Asegúrate de que SSR está habilitado si estás usando SSR
  devtools: { enabled: true },
  compatibilityDate: '2025-02-13',
  
  generate: {
    routes: ['/post/1', '/post/2'] // O usa una función para generarlas dinámicamente
  }
})