<template>
    <Header />
    <div class="about-container">
      <div class="about-header">
        <h1 class="about-title">Mini burgers: La Elección Perfecta para Fiestas y Comidas Rápidas</h1>
        <p class="publish-date">Publicado el 16 de abril de 2025</p>
      </div>
  
      <section class="about-content">
        <p>
          Las <strong>mini burgers</strong> se han convertido en la opción favorita para aquellos que buscan una comida rápida, deliciosa y perfecta para cualquier ocasión. Ya sea para una <strong>celebración</strong>, una fiesta o simplemente para disfrutar de una comida casual en el camino, las mini burgers son la solución ideal. En <strong>Kiko Undefiled Burger</strong>, nos especializamos en ofrecer las mejores <strong>hamburguesas de Granada</strong>, y nuestras Mini burgers son perfectas para satisfacer tu hambre sin comprometer el sabor.
        </p>
  
        <blockquote class="highlight">
          "¡Mini burgers, grandes momentos! Perfectas para cualquier ocasión."
        </blockquote>
  
        <p>
          Ya sea que estés buscando una opción de <strong>comida rápida</strong> o desees sorprender a tus invitados en una fiesta, las mini burgers ofrecen una experiencia deliciosa en cada bocado. Gracias a su tamaño práctico, son perfectas para disfrutar mientras vas de camino a tu destino o para compartir en eventos sociales como cumpleaños, reuniones familiares, o incluso en eventos corporativos.
        </p>
  
        <p>
          Las mini burgers no solo son sabrosas, sino que también son versátiles. Puedes personalizarlas con diferentes ingredientes como queso derretido, salsas especiales, cebolla caramelizada, bacon crujiente o incluso opciones vegetarianas para satisfacer todos los gustos. En <strong>Kiko Burger Granada</strong>, nos aseguramos de utilizar ingredientes frescos y de alta calidad para ofrecer la mejor experiencia de Mini burgers en Granada.
        </p>
  
        <!-- 📢 Anuncio insertado aquí -->
        <Adsense ad-slot="1234567890" />
  
        <div class="image">
          <img src="../../static/kiko-mini-burger.jpg" alt="Mini burgers para fiestas, perfectas para comer en el camino y celebraciones" class="about-image" />
        </div>
  
        <p>
          Las <strong>mini burgers</strong> también son una excelente opción para ofrecer en eventos de catering o en reuniones informales. Su tamaño las hace fáciles de manejar, lo que las convierte en el bocado perfecto para disfrutar mientras hablas, te relajas y compartes con amigos y familia. Si estás buscando algo diferente para tu próxima fiesta en Granada, las mini burgers de <strong>Kiko Burger Granada</strong> serán la opción más popular.
        </p>
  
        <p class="closing-message">
          No importa la ocasión, las mini burgers son la elección perfecta. ¡Ven a <strong>Kiko Undefiled Burger</strong> y prueba nuestras deliciosas mini burgers hoy mismo!
        </p>
      </section>
    </div>
    <Footer />
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Adsense from '~/components/Adsense.vue'
  
  useHead({
    title: 'Mini burgers: La Opción Ideal para Fiestas y Comidas Rápidas | Kiko Burger Granada',
    meta: [
      { 
        name: 'description', 
        content: 'Descubre por qué las mini burgers son la opción perfecta para fiestas, celebraciones y comidas rápidas. Mini burgers de calidad en Kiko Burger Granada, ¡perfectas para el camino!' 
      },
      { name: 'author', content: 'Kiko Undefiled Burger' },
      { name: 'robots', content: 'index, follow' },
      { 
        name: 'keywords', 
        content: 'Mini burgers, mini burgers, hamburguesas en Granada, comida rápida, fiestas, hamburguesas para celebraciones, hamburguesas para eventos, burgers Granada'
      },
      { 
        property: 'og:title', 
        content: 'Mini burgers: La Opción Ideal para Fiestas y Comidas Rápidas | Kiko Burger Granada' 
      },
      { 
        property: 'og:description', 
        content: 'Mini burgers perfectas para disfrutar en el camino, en fiestas y celebraciones. ¡Disfruta de las mejores mini burgers de Granada en Kiko Undefiled Burger!' 
      },
      { 
        property: 'og:type', 
        content: 'website' 
      }
    ],
  })
  </script>
  
  <style scoped>
  @font-face {
    font-family: 'Poppins';
    src: url('https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2') format('woff2');
    font-style: normal;
  }
  * {
    font-family: 'Poppins';
  }
  .about-container {
    margin-top: 5%;
    background-color: #1d1d1d;
    color: rgb(220, 220, 220);
    padding: 2rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .about-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .about-title {
    font-size: 3rem;
    font-weight: bold;
    color: #FFD700;
  }
  
  .publish-date {
    font-size: 1rem;
    color: #aaa;
    font-style: italic;
  }
  
  .about-content {
    background: #111;
    padding: 2rem;
    border-radius: 3px;
    max-width: 800px;
  }
  
  .about-content p {
    font-size: 1.2rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
  
  .highlight {
    background-color: #FFD700;
    color: #111;
    padding: 1rem;
    font-style: italic;
    font-size: 1.2rem;
    text-align: center;
    border-radius: 5px;
    margin: 1.5rem 0;
  }
  
  .about-image {
    width: 60%;
    margin: 3%;
  }
  .image {
    text-align: center;
  }
  
  .closing-message {
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
  }
  
  .adsbygoogle {
    margin: 2rem 0;
    min-height: 90px;
  }
  
  @media (max-width: 768px) {
    .about-container {
      margin-top: 13%;
    }
    .about-title {
      font-size: 2.5rem;
    }
    .about-content {
      padding: 1.5rem;
    }
    .about-content p {
      font-size: 1.1rem;
    }
    .highlight {
      font-size: 1.1rem;
    }
  }
  </style>
  