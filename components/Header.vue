<!-- <template>
  <div class="header">
    <img src="/static/kiko-logo.png" alt="Logo" class="logo">
    <input class="hidden" id="drawer-input" type="checkbox">
    <label for="drawer-input" class="drawer-open">
      <span></span>
    </label>
    <nav class="nav-content">
      <ul class="items">
        <li class="item">
          <a href="#" target="_blank">
            <p>Carta</p>
          </a>
        </li>
        <li class="item">
          <a href="#" target="_blank">
            <p>Ubicación</p>
          </a>
        </li>
        <li class="item">
          <a href="#" target="_blank">
            <p>Sobre nosotros</p>
          </a>
        </li>
        <li class="item">
          <a href="#" target="_blank">
            <p>Redes sociales</p>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'satoshi';
  src: url('https://dl.dropbox.com/scl/fi/cw88jfat68bv2786p2h2w/Satoshi-Regular.woff?rlkey=om4imghk314fc5ioiusz5qo6s&dl=0') format('woff');
}
  /* Font */
  @font-face {
    font-family: 'Poppins';
    src: url('https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

* {
  color: #303336;
  line-height: 1.0;
  -webkit-user-select: none;
  user-select: none;
  font-family: 'Poppins', sans-serif; /* Fuentes */
  z-index: 10;
}

*::-webkit-scrollbar {
  display: none;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  z-index: 1000;
  background-color: rgba(118, 118, 118, 0.85);
  box-shadow: 0 2px 10px rgba(14, 14, 14, 0.3);
}

.logo {
  height: 80px;
  width: auto;
  margin-left: 5%;
}

.drawer-open {
  width: 50px;
  height: 50px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5%;
}

.drawer-open span,
.drawer-open span:before,
.drawer-open span:after {
  content: '';
  height: 2.5px;
  width: 25px;
  background-color: #FFD700;
  transition: 400ms ease-in-out;
  position: absolute;
}

.drawer-open span:before {
  top: -8px;
}

.drawer-open span:after {
  bottom: -8px;
}

#drawer-input:checked ~ .drawer-open span {
  background-color: transparent;
}

#drawer-input:checked ~ .drawer-open span::before {
  transform: rotate(45deg);
  top: 0;
}

#drawer-input:checked ~ .drawer-open span::after {
  transform: rotate(-45deg);
  bottom: 0;
}

#drawer-input:checked ~ .nav-content {
  transition: all 500ms cubic-bezier(.10, .0, .80, .0);
  height: calc(30vh - 30px);
}

#drawer-input:checked ~ .nav-content .items {
  opacity: 1;
  transition: 1500ms 600ms;
}

.hidden {
  display: none;
}

.nav-content {
  position: fixed;
  height: 75px;
  width: 100vw;
  left: 0;
  top: 0;
  margin: 0;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px 0 rgba(3, 3, 3, 0.3);
  min-width: 300px;
  transition: 400ms 350ms;
  z-index: -1;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.85);
}

.nav-content .items {
  opacity: 0;
  transition: 350ms;
  margin-top: 75px;
  padding-inline-start: 0px;
}

.items {
  width: 100%;
  min-width: 300px;
  margin: 0 15px 0;
}

.item {
  list-style: none;
  margin-right: 20px;
}

.item a {
  cursor: pointer;
  text-decoration: none !important;
  display: flex;
  justify-content: center; /* Cambié esto de space-between a center */
  align-items: center; /* Añadí esto para centrar el texto verticalmente */
  height: 100%; /* Asegura que el enlace ocupe todo el alto del contenedor */
}

.item a p {
  margin-top: 12px; /* Elimina el margen superior para evitar desplazamiento */
  transition: 150ms;
  color: #FFD700;
  text-align: center; /* Asegura que el texto esté centrado dentro del contenedor */
  font-size: 25px;

}

.items {
  display: flex;
  flex-direction: column; /* Asegura que los elementos se apilen en una columna */
  width: 100%;
  min-width: 300px;
  margin: 0 15px 0;
  justify-content: center; /* Centra los elementos verticalmente */
  align-items: center; /* Centra los elementos horizontalmente */
}


.item:hover a p {
  color: #cbad00;
}

p {
  font-size: 20px;
}

@media (min-width: 768px) {
  p {
    font-size: 25px;
  }
  #drawer-input:checked ~ .nav-content {
    transition: all 500ms cubic-bezier(.10, .0, .80, .0);
    height: calc(40vh - 30px);
  }
  
}
@media (max-width: 768px) {
  .item a p {
  margin-top: 10px; /* Elimina el margen superior para evitar desplazamiento */
  transition: 150ms;
  color: #FFD700;
  text-align: center; /* Asegura que el texto esté centrado dentro del contenedor */
  font-size: 18px;

}
#drawer-input:checked ~ .nav-content {
  transition: all 500ms cubic-bezier(.10, .0, .80, .0);
  height: calc(40vh - 30px);
}
  
}
</style> -->
<template>
  <div class="header">
    <a href="/"><img src="/static/kiko-logo.png" alt="Logo" class="logo"></a>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'satoshi';
  src: url('https://dl.dropbox.com/scl/fi/cw88jfat68bv2786p2h2w/Satoshi-Regular.woff?rlkey=om4imghk314fc5ioiusz5qo6s&dl=0') format('woff');
}

@font-face {
  font-family: 'Poppins';
  src: url('https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

* {
  color: #303336;
  line-height: 1.0;
  user-select: none;
  font-family: 'Poppins', sans-serif;
  z-index: 10;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 85px;
  z-index: 1000;
  background-color: #111111;
  box-shadow: 0 2px 10px rgba(14, 14, 14, 0.3);
}

.logo {
  height: 75px;
  width: auto;
}
</style>
