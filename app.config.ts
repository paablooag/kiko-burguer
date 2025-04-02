export default defineAppConfig({
    sitemap: {
      siteUrl: 'https://kikoundefiledburger.com', // URL base
      exclude: ['/admin/**', '/login'], // Rutas a excluir
      autoLastmod: true // Agregar fecha de última modificación automáticamente
    }
  })
  