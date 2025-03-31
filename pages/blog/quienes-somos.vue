<template>
  <Header />
  <div class="about-container">
    <div class="about-header">
      <h1 class="about-title">Nuestra Historia - Kiko Burger Granada</h1>
      <p class="publish-date">Publicado el 24 de marzo de 2025</p>
    </div>

    <section class="about-content">
      <p>
        En <strong>Kiko Undefiled Burger</strong>, ubicado en el corazón de Granada, creemos que una hamburguesa no es solo comida, es una experiencia. Somos una de las <strong>mejores hamburgueserías en Granada</strong>, especializados en <strong>smash burgers</strong> que combinan ingredientes frescos y de alta calidad para ofrecer un sabor único en cada bocado.
      </p>

      <blockquote class="highlight">
        "No hacemos hamburguesas, creamos momentos que quedan en el paladar y en la memoria."
      </blockquote>

      <p>
        Nuestra historia comenzó con una pasión por la comida honesta y sin complicaciones. En <strong>Kiko Burger Granada</strong>, ofrecemos las <strong>mejores smash burgers de Granada</strong>, elaboradas con carne jugosa, pan artesanal y productos seleccionados con esmero. Situados en el centro de Granada, somos el lugar perfecto para los amantes de las <strong>burgers en Granada</strong> que buscan calidad e innovación.
      </p>
      <div class="image">
        <img src="../../static/kiko-logo2.png" alt="Logo Kiko Burger Granada" class="about-image" />
      </div>
      <p>
        Más que una hamburguesería, en <strong>Kiko Undefiled Burger</strong> somos un punto de encuentro para la comunidad. Nos enorgullece ser parte de las <strong>hamburgueserías de Granada</strong> favoritas, donde cada cliente se siente como en casa. Innovamos con recetas únicas y escuchamos a nuestros clientes para seguir siendo una referencia entre las <strong>hamburguesas en Granada centro</strong>.
      </p>

      <p class="closing-message">
        ¡Gracias por ser parte de nuestra historia! Te esperamos en <strong>Kiko Burger Granada</strong> para disfrutar de las <strong>mejores burgers de Granada</strong> y compartir momentos inolvidables.
      </p>
    </section>
  </div>
  <Footer />
</template>

<script setup>
import { ref } from 'vue'


useHead({
title: 'Quiénes Somos | Kiko Burger Granada - Mejores Smash Burgers',
meta: [
  { 
    name: 'description', 
    content: 'Descubre la historia de Kiko Undefiled Burger, tu hamburguesería en Granada centro. Especializados en las mejores smash burgers de Granada con ingredientes frescos y de calidad.' 
  },
  { name: 'author', content: 'Kiko Undefiled Burger' },
  { name: 'robots', content: 'index, follow' },
  { 
    name: 'keywords', 
    content: 'kiko burger granada, mejores smash burgers granada, hamburgueserías granada, burger granada, hamburguesas granada centro, burgers granada' 
  },
  { 
    property: 'og:title', 
    content: 'Quiénes Somos | Kiko Burger Granada - Smash Burgers' 
  },
  { 
    property: 'og:description', 
    content: 'Conoce Kiko Undefiled Burger, la hamburguesería en Granada centro famosa por sus smash burgers. Calidad, sabor y tradición en cada hamburguesa.' 
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
width: 30%;
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