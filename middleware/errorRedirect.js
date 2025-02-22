// middleware/errorRedirect.js

export default defineNuxtRouteMiddleware((to, from) => {
    // Verifica si la ruta solicitada no existe
    if (to.matched.length === 0) {
      // Redirige a la página de error (como una página de fallback)
      return navigateTo('/error');
    }
  });
  