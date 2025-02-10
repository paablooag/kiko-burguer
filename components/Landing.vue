<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <section class="landing">
    <div class="content">
      <video class="background-video" autoplay loop muted ref="video">
        <source src="/static/video-kiko-burger.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
      <button class="sound-button" @click="toggleSound">
        <i :class="isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up'"></i>
      </button>
      <div class="text">
        <h1>¡Bienvenido a Kiko Burger!</h1>
        <p>
          Disfruta de nuestras smash burguers, hechas con ingredientes frescos y seleccionados especialmente para ti. <br>¿Estás listo para probarnos?
        </p>
        <button class="cta-button">Ver Carta</button>
      </div>
    </div>

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
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';

// Referencia al video y estado del mute
const video = ref(null);
const isMuted = ref(true);

// Palanca de sonido
const toggleSound = () => {
  if (video.value) {
    isMuted.value = !isMuted.value;
    video.value.muted = isMuted.value;
  }
};

// Reseñas con estrellas y autores
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
]);

// Asegurarse de que el video empiece silenciado
onMounted(() => {
  if (video.value) {
    video.value.muted = true;
  }
});
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
  padding: 70px 0px;
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

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.25 !important;
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

.sound-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 24px;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
}

.sound-button:hover i {
  color: #FFD700;
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
</style>
