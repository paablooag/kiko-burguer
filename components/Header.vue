<template>
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
        <!-- <li class="item">
            <a href="#" target="_blank">
            <p>Galeria</p>
            </a>
        </li> -->
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

* {
  color: #303336;
  line-height: 1.0;
  -webkit-user-select: none;
  user-select: none;
  font-family: 'satoshi';
  z-index: 10;
}

*::-webkit-scrollbar {
  display: none;
}

/* Haciendo que el header esté fijo en la parte superior */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* Fijamos el header en la parte superior */
  top: 0; /* Arriba */
  left: 0; /* Alineado a la izquierda */
  width: 100%; /* Ancho completo */
  height: 75px;
  z-index: 1000; /* Asegura que el header esté sobre otros elementos */
  background-color: rgba(118, 118, 118, 0.85); /* Fondo oscuro */
  box-shadow: 0 2px 10px rgba(14, 14, 14, 0.3); /* Sombras suaves */
}

/* Estilos para la imagen del logo */
.logo {
  height: 80px;
  width: auto;
  margin-left: 5%;
}

/* Estilos del menú */
.drawer-open {
  width: 50px;
  height: 75px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 5%;
}

.drawer-open span,
.drawer-open span:before,
.drawer-open span:after {
  content: '';
  height: 2.5px;
  width: 25px;
  background-color: #FFD700; /* Amarillo */
  transition: 400ms 350ms;
  position: absolute;
}

.drawer-open span:before {
  bottom: 8px;
}

.drawer-open span:after {
  top: 8px;
}

#drawer-input:checked ~ .drawer-open span {
  width: 0px;
  transition: 100ms;
}

#drawer-input:checked ~ .drawer-open span::before {
  bottom: 0;
  transition: all 400ms 100ms cubic-bezier(.10,.0,.85,.0);
  transform: rotate(45deg);
}

#drawer-input:checked ~ .drawer-open span::after {
  top: 0;
  transition: all 400ms 100ms cubic-bezier(.10,.0,.85,.0);
  transform: rotate(-45deg);
}

#drawer-input:checked ~ .nav-content {
  transition: all 500ms cubic-bezier(.10,.0,.80,.0);
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
  width: 100vw; /* Ocupar todo el ancho de la pantalla */
  left: 0;
  top: 0;
  margin: 0;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px 0 rgba(3,3,3,0.3);
  min-width: 300px;
  transition: 400ms 350ms;
  z-index: -1;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.85); /* Fondo oscuro */
}

.nav-content .items {
  opacity: 0;
  transition: 350ms;
  margin-top: 75px;
  padding-inline-start: 0px;
  background-color: rgba(0, 0, 0, 0.85); /* Fondo oscuro */
}

.items {
  width: 100%;
  min-width: 300px;
  margin: 0 15px 0;
}

.item {
  list-style: none;
  margin-right: 20px;
  border-bottom: solid 2px #FFD700; /* Amarillo */
}

.item:first-child {
  border-top: solid 2px #FFD700; /* Amarillo */
}

.item a {
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
}

.item a p {
  margin-top: 2.5px;
  transition: 150ms;
  color: #FFD700; /* Amarillo */
}

.item:hover a p {
  color: #cbad00; /* Azul suave */
}

p {
  font-size: 20px;
}

@media (min-width: 768px) {
  p {
    font-size: 25px;
  }
  #drawer-input:checked ~ .nav-content {
    transition: all 500ms cubic-bezier(.10,.0,.80,.0);
    height: calc(40vh - 30px);
  }
}
</style>
