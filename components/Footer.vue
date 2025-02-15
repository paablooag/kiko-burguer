<template>
    <footer class="site-footer">
      <div class="footer-content">
        <div class="logo-column">
          <!-- Aquí se reemplaza el SVG por la imagen del logo -->
          <a href="/"><img class="footer-logo" src="/static/kiko-logo2.png" alt="Kiko Undefined Burguer Logo"  /></a>
        </div>
  
        <div class="footer-info second-column">
          <h2 class="footer-business-name">Kiko Undefiled Burguer</h2>
          <p class="footer-business-address">
            C. Nueva San Anton, 16<br />
            Granada Centro, 18005, Granada
          </p>
          <p class="footer-business-phone">Contacto:  629 15 33 56</p>
        </div>
  
        <nav class="footer-nav third-column">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/carta">Carta</a></li>
            <!-- <li><a href="">Contacto</a></li> -->
          </ul>
        </nav>
      </div>
    </footer>
  </template>
  
  <script setup>
    // Si necesitas lógica adicional para el footer, puedes agregarla aquí
  </script>
  
  <style scoped>
    .site-footer {
      background-color: #111111; /* Fondo oscuro */
      color: #eeece6; /* Light beige text */
      padding: 25px;
      width: 100%; /* Se asegura de que ocupe el 100% del ancho disponible */
      box-sizing: border-box;
      min-height: 300px;
      display: flex;
      justify-content: center;
      overflow: hidden; /* Evita que el contenido se salga del área visible */
    }
  
    .footer-content {
      width: 100%;
      max-width: 1200px; /* Ajusta el ancho máximo para centrar el contenido */
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr; /* Tres columnas iguales */
      gap: 30px; /* Aumenta el espacio entre las columnas */
      align-items: center;
    }
  
    .footer-logo {
      max-width: 50%; /* Asegura que el logo se ajuste bien */
      height: auto;
    }
  
    .footer-info {
      max-width: 100%;
    }
  
    .footer-business-name {
      font-size: 18px !important;
      letter-spacing: 3px;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
  
    .footer-business-address,
    .footer-business-phone {
      font-size: 16px;
      margin: 5px 0;
      line-height: 1.5;
      letter-spacing: 1px;
    }
  
    .footer-nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
    }
  
    .footer-nav li {
      margin-right: 15px;
      margin-bottom: 10px;
    }
  
    .footer-nav a {
      color: #ffffff;
      text-decoration: none;
      font-size: 15px;
      transition: color 0.3s ease;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  
    .footer-nav a:hover {
      color: #d1bfa7; /* Color más claro al pasar el ratón */
    }
  
    /* Ajustes responsivos */
    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr; /* Apilar las columnas verticalmente en pantallas pequeñas */
        text-align: center;
        transform: scale(0.90);
      }
  
      .footer-nav ul {
        justify-content: center;
      }
    }
  
    body {
      background: #f7f7f7;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100vh;
    }
  </style>
  