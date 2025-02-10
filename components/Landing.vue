<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <section class="landing">
    <div class="content">
      <video class="background-video" autoplay loop muted ref="video">
        <source src="/static/video-kiko-burger.mp4" type="video/mp4" />
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

    
    <!-- Sección de Galería -->
    <section class="gallery">
      <h2></h2>
      <div class="gallery-container">
        <div class="gallery-item">
          <img src="/static/crispy-chicken.jpg" alt="Crispy Chicken" />
        </div>
        <div class="gallery-item">
          <img src="/static/smash-manos.jpg" alt="Smash Burger" />
        </div>
        <div class="gallery-item">
          <img src="/static/smash-1.jpg" alt="Smash Burger 1" />
        </div>
        <div class="gallery-item">
          <img src="/static/photo-kiko.jpg" alt="Crispy Chicken" />
        </div>
        <div class="gallery-item">
          <img src="/static/combo-kiko.jpg" alt="Smash Burger 1" />
        </div>
        <div class="gallery-item">
          <img src="/static/burger-fondo-kiko.jpg" alt="">
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
  font-family: 'Poppins', sans-serif; /* Fuentes */
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
  pointer-events: none; /* Esto desactiva la interacción del video */
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

/* Sección Quiénes Somos */
.about-us {
  padding: 50px 10px;
  text-align: center;
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
  display: flex;  /* Para centrar las imágenes dentro del contenedor */
  justify-content: center;
  align-items: center;
}

.gallery-item img {
  width: 100%;
  object-fit: contain; /* Mantiene la proporción y asegura que la imagen no se recorte */
}

/* Hacemos que la galería no se vea en pantallas pequeñas (móviles) */
@media (max-width: 768px) {
  .gallery {
    display: none; /* Ocultamos la galería en móviles */
  }

  .text h1 {
    font-size: 36px;
  }

  .text p {
    font-size: 20px;
  }

  .gallery-item {
    width: 33%; /* Tres imágenes por fila en tabletas */
  }

  .testimonial {
    width: 45%; /* Ajuste para que los testimonios se vean bien en tabletas */
  }
}

@media (max-width: 768px) {

  .text h1 {
    font-size: 32px;
  }

  .text p {
    font-size: 18px;
  }

  .cta-button {
    font-size: 14px;
    padding: 8px 15px;
  }

  .gallery-item {
    width: 50%; /* Dos imágenes por fila en móviles */
  }

  .testimonial {
    width: 90%; /* Testimonios a toda pantalla en móvil */
  }

  .about-us-content {
    flex-direction: column;
    align-items: center;
  }

  .about-us-text {
    max-width: 90%;
  }

  .sound-button {
    top: 10px;
    right: 10px;
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  /* Ajustes para pantallas muy pequeñas (móviles pequeños) */
  .text h1 {
    font-size: 28px;
  }

  .text p {
    font-size: 16px;
  }

  .gallery-item {
    width: 100%; /* Una imagen por fila en pantallas pequeñas */
  }

  .testimonial {
    width: 100%; /* Testimonios a toda pantalla */
  }

  .cta-button {
    font-size: 14px;
    padding: 8px 15px;
  }
}

</style>
