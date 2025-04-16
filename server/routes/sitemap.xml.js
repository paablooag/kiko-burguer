export default defineEventHandler(() => {
    // Define las rutas que quieres en el sitemap (sin repetir el dominio aquí)
    const routes = [
      '/',
      '/carta',
      '/blog/quienes-somos',
      '/blog/mini-burgers',
      // Agrega más rutas aquí según necesites
    ];
  
    // Genera el XML del sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => {
      return `
    <url>
      <loc>https://kikoundefiledburger.com${route}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>`;
    })
    .join('')}
  </urlset>`;
  
    // Devuelve el sitemap con el tipo de contenido correcto
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  });