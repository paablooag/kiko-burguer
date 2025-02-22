// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png', sizes: '32x32' },
      ],
    },
  },
  ssr: true,
  compatibilityDate: '2025-02-13',
})
