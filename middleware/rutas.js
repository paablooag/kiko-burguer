// middleware/rutas.js

export default defineNuxtRouteMiddleware((to, from) => {
    // Definir las rutas permitidas
    const rutasPermitidas = ['/', '/index', '/carta']; // Añadir las rutas válidas
  
    // Si la ruta solicitada no está en la lista de rutas permitidas, redirigir a la página de error
    if (!rutasPermitidas.includes(to.path)) {
      return navigateTo('/error'); // Redirigir a la ruta 404 (o a cualquier otra ruta de error personalizada)
    }
  });