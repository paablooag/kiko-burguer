<template>
    <section class="not-found">
      <div class="content">
        <h1>404</h1>
        <p>Lo sentimos, esta página no existe.</p>
        <button @click="goHome" class="cta-button">Volver al Inicio</button>
      </div>
    </section>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const goHome = () => {
    router.push('/'); // Redirige al inicio
  };
  </script>
  
  <style scoped>
  @font-face {
    font-family: 'Poppins';
    src: url('https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  
  .not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    background-color: #2c3e50;
    color: #ecf0f1;
    font-family: 'Poppins', sans-serif;
    flex-direction: column;
    padding: 20px;
  }
  
  .not-found h1 {
    font-size: 120px;
    margin: 0;
    color: #FFD700;
  }
  
  .not-found p {
    font-size: 24px;
    margin: 20px 0;
    color: #ecf0f1;
  }
  
  .cta-button {
    background-color: #FFD700;
    color: black;
    font-size: 18px;
    padding: 10px 25px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    transition: background-color 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #ffca00;
  }
  </style>
  