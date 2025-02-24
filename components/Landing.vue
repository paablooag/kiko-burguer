<template>
  <section class="landing">
    <div class="content">
      <!-- Fondo con imagen y overlay gris, animado con zoom -->
      <div class="background-image" :style="{ transform: `scale(${scrollZoom})` }"></div>
      <div class="text">
        <h1>¡Bienvenido a Kiko Burguer!</h1>
        <p>
          Disfruta de nuestras smash burgers, hechas con ingredientes frescos y seleccionados especialmente para ti. <br />¿Estás listo para probarnos?
        </p>
        <button class="cta-button">
          <a href="/carta">Ver Carta</a>
        </button>
      </div>
    </div>

    <!-- Sección de Quiénes Somos -->
    <section class="about-us">
      <div class="about-us-content">
        <div class="about-us-photo">
          <img src="/static/quienes-somos.jpg" alt="Equipo Kiko Burger" />
        </div>
        <div class="about-us-text">
          <h2>Quiénes Somos</h2>
          <p>
            En Kiko Burger, somos un grupo apasionado por crear las mejores hamburguesas con ingredientes frescos y de alta calidad. Nuestra misión es ofrecerte una experiencia única en cada bocado.
          </p>
        </div>
      </div>
    </section>

    <!-- Sección de Pedidos en Línea -->
    <section class="order-online">
      <h2>¿Quieres pedir en Kiko?</h2>
      <p>Haz tu pedido a domicilio a través de las siguientes plataformas:</p>
      <div class="order-links">
        <div class="order-item">
          <a href="https://glovoapp.com/es/" target="_blank" class="order-link glovo">
            <img src="/static/glovo.png" alt="Glovo" />
          </a>
        </div>
        <div class="order-item">
          <a href="https://www.uber-eats.es/" target="_blank" class="order-link ubereats">
            <img src="/static/uber-eats.png" alt="Uber Eats" />
          </a>
        </div>
        <div class="order-item">
          <a href="https://www.just-eat.es/" target="_blank" class="order-link justeat">
            <img src="/static/just-eat.png" alt="Just Eat" />
          </a>
        </div>
      </div>
    </section>

    <!-- Sección de Galería -->
    <section class="gallery">
      <h2></h2>
      <div class="gallery-container">
        <div class="gallery-item gallery-item-1">
          <img src="/static/crispy-chicken.jpg" alt="Crispy Chicken" />
        </div>
        <div class="gallery-item gallery-item-2">
          <img src="/static/smash-manos.jpg" alt="Smash Burger" />
        </div>
        <div class="gallery-item gallery-item-3">
          <img src="/static/smash-1.jpg" alt="Smash Burger 1" />
        </div>
        <div class="gallery-item gallery-item-4">
          <img src="/static/photo-kiko.jpg" alt="Crispy Chicken" />
        </div>
        <div class="gallery-item gallery-item-5">
          <img src="/static/combo-kiko.jpg" alt="Smash Burger 1" />
        </div>
        <div class="gallery-item gallery-item-6">
          <img src="/static/burger-fondo-kiko.jpg" alt="" />
        </div>
      </div>
    </section>

    <!-- Sección de Testimonios -->
    <section class="testimonials">
      <h2>Lo que los <span>KikoLovers</span> dicen de nosotros</h2>
      <div class="testimonials-container">
        <div class="testimonial" v-for="(review, index) in reviews" :key="index">
          <p>"{{ review.text }}"</p>
          <div class="stars">
            <i v-for="star in review.rating" :key="star" class="fas fa-star"></i>
          </div>
          <span class="author">- {{ review.author }}</span>
        </div>
      </div>
    </section>

    <!-- Sección de Redes Sociales -->
    <section class="social-media">
      <h2>Síguenos en Redes Sociales</h2>
      <div class="social-icons">
        <a href="https://www.instagram.com/kikoundefiledburger" target="_blank" class="social-link instagram">
          <i class="fab fa-instagram"></i> @kikoundefiledburger
        </a>
        <a href="https://www.tiktok.com/@kikoundefiledburger" target="_blank" class="social-link tiktok">
          <i class="fab fa-tiktok"></i> @kikoundefiledburger
        </a>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

useHead({
  title: 'Kiko Undefiled Burger | Granada',
  meta: [
    { name: 'description', content: 'Kiko Undefiled Burger es tu local de hamburguesas con productos frescos y seleccionados especialmente para ti. En el centro de Granada, Kiko Undefiled Burger ofrece una experiencia única y agradable para disfrutar de nuestras hamburguesas gourmet.' },
    { name: 'author', content: 'Kiko Undefined Burger' },
    { name: 'robots', content: 'index, follow' },
    { name: 'keywords', content: 'burger, hamburguesa, kiko, kiko burger, hamburguesas gourmet, comida rápida Granada' },
  ],
})

const reviews = ref([
  {
    text: "Hamburguesas muy ricas y patatas deliciosas. La calidad de la carne y de todos los ingredientes excelente. Trato amable y muy rápido. Volveremos seguro, gracias!",
    author: "Carmen López",
    rating: 5,
  },
  {
    text: "Hamburguesas buenísimas, carne de buena calidad. Patatas fritas simples, pero buenas. Las de boniato muy ricas. Sin duda volveremos!",
    author: "Andrea Muñoz",
    rating: 5,
  },
  {
    text: "De las mejores hamburguesas que he comido y a un precio increíble. Los chicos son super amables y atentos. Ojalá fuese de Granada para tenerlo cerca!",
    author: "Nayra Alejandra Arboleda",
    rating: 5,
  },
])

// Variable reactiva para controlar el zoom del fondo
const scrollZoom = ref(1)

const handleScroll = () => {
  const scrollY = window.scrollY
  // Calcula el scale: aumenta sutilmente hasta un 5% extra (1.05)
  const scale = 1 + Math.min(scrollY / 1000, 0.05)
  scrollZoom.value = scale
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Font */
@font-face {
  font-family: 'Poppins';
  src: url('https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

/* Landing */
.landing {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.85);
  color: #FFD700;
  padding: 70px 0;
  font-family: 'Poppins', sans-serif;
}

.content {
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* Fondo con imagen + overlay gris */
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(20, 20, 20, 0.3), rgba(35, 35, 35, 0.821)), url("/static/smash-manos.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s ease-out;
  z-index: 0;
}

.text {
  z-index: 1;
  color: #fff;
  text-align: center;
  padding: 20px;
}

.text h1 {
  font-size: 48px;
  color: #FFD700;
  margin-bottom: 20px;
}

.text p {
  font-size: 24px;
  color: #f1f1f1;
  margin-bottom: 20px;
  line-height: 1.6;
}

.cta-button {
  background-color: #FFD700;
  color: black;
  font-size: 16px;
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.cta-button:hover {
  background-color: #ffca00;
}

.cta-button a {
  text-decoration: none;
  color: #222;
}

/* Sección Quiénes Somos */
.about-us {
  padding: 50px 10px;
  text-align: center;
  background-color: #222;
  width: 98%;
}

.about-us-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.about-us-photo img {
  max-width: 300px;
  border-radius: 10px;
}

.about-us-text {
  max-width: 500px;
}

.about-us h2 {
  font-size: 36px;
  color: #FFD700;
  margin-bottom: 20px;
}

.about-us p {
  font-size: 18px;
  color: #f1f1f1;
  line-height: 1.6;
}

/* Testimonios */
.testimonials {
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.testimonials h2 {
  margin: 4%;
}

.testimonials h2 span {
  color: #FFD700;
  font-style: italic;
}

.testimonials-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.testimonial {
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
}

.testimonial p {
  margin-bottom: 10px;
}

.stars {
  margin: 10px 0;
}

.stars .fa-star {
  color: #FFD700;
}

.author {
  display: block;
  margin-top: 10px;
  font-weight: bold;
  color: #FFD700;
}

/* Galería */
.gallery {
  text-align: center;
  padding: 40px 20px;
  background-color: #222;
  color: #fff;
}

.gallery h2 {
  font-size: 36px;
  color: #FFD700;
  margin-bottom: 30px;
}

.gallery-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.gallery-item {
  width: 25%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery-item img {
  width: 100%;
  object-fit: contain;
}

/* Redes Sociales */
.social-media {
  text-align: center;
  padding: 50px 0;
  color: white;
  background-color: #222;
  width: 100%;
}

.social-media h2 {
  font-size: 32px;
  color: #FFD700;
  margin-bottom: 20px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 30px;
  border-radius: 25px;
  text-decoration: none;
  transition: background 0.3s;
}

.social-link i {
  margin-right: 10px;
  font-size: 22px;
}

/* Instagram */
.instagram {
  background-color: #E1306C;
}

.instagram:hover {
  background-color: #C13584;
}

/* TikTok */
.tiktok {
  background-color: #000;
  border: 2px solid white;
}

.tiktok:hover {
  background-color: #333;
}

/* Sección de pedidos */
.order-online {
  text-align: center;
  color: #FFD700;
  margin-top: 3%;
  margin-bottom: 3%;
}

.order-online h2 {
  font-size: 32px;
  margin-bottom: 20px;
}

.order-online p {
  font-size: 18px;
  margin-bottom: 30px;
  color: white;
  padding: 20px 40px;
}

.order-links {
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
}

.order-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.order-link {
  display: inline-block;
  margin-bottom: 10px;
  width: 110px;
}

.order-item img {
  width: 100%;
  height: auto;
}

.order-text {
  font-size: 16px;
  font-weight: bold;
}

/* Media Queries para responsividad */
@media (max-width: 768px) {
  .order-links {
    gap: 20px;
  }

  .order-item img {
    width: 60%;
    height: auto;
  }

  .text h1 {
    font-size: 36px;
  }

  .text p {
    font-size: 20px;
  }

  .gallery-item {
    width: 33%;
  }
  .gallery-item-1,
  .gallery-item-4,
  .gallery-item-5 {
    display: none;
  }

  .testimonial {
    width: 45%;
  }
}

@media (max-width: 480px) {
  .content {
    height: 80vh;
  }
  .text h1 {
    font-size: 28px;
  }
  .text p {
    font-size: 16px;
  }
  .gallery-item {
    width: 100%;
  }
  .testimonial {
    width: 100%;
  }
  .cta-button {
    font-size: 14px;
    padding: 8px 15px;
  }
}
</style>
