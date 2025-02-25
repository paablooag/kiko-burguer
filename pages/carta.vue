<template>
  <Header />
  <div class="menu-container">
    <div class="top-row">
      <!-- <h1 class="menu-title">MENÚ K</h1> -->
    </div>

    <div class="combo-switch">
      <span class="combo-text">{{ showCombos ? 'Ver opción sin combo' : 'Ver opción combo combo' }}</span>
      <label class="switch">
        <input type="checkbox" v-model="showCombos" />
        <span class="slider"></span>
      </label>
    </div>

    <section v-if="showCombos" class="burgers combos">
      <h2 class="section-title">COMBOS: Hamburguesa + Patatas + Bebida</h2>
      <ul>
        <li v-for="combo in products.combos" :key="combo.name">
          <div class="burger-item">
            <h2>{{ combo.name }}</h2>
            <span class="price-circle">{{ combo.price }}</span>
          </div>
        </li>
      </ul>

      <hr class="divider" />
      <h2 class="section-title">Bebidas</h2>
      <div class="drinks-container">
        <div class="drinks-block">
          <ul>
            <li v-for="drink in products.drinks.slice(0, 6)" :key="drink.name">
              <div class="burger-item">
                <h2>{{ drink.name }}</h2>
                <span class="price-circle">{{ drink.price }}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="drinks-block drinks-block-2">
          <ul>
            <li v-for="drink in products.drinks.slice(6)" :key="drink.name">
              <div class="burger-item">
                <h2>{{ drink.name }}</h2>
                <span class="price-circle">{{ drink.price }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section v-else>
      <section class="burgers">
        <ul>
          <li v-for="burger in products.burgers" :key="burger.name">
            <div class="burger-item">
              <h2>{{ burger.name }}</h2>
              <span class="price-circle">{{ burger.price }}</span>
            </div>
            <p>{{ burger.description }}</p>
          </li>
        </ul>
      </section>

      <div class="side-by-side">
        <section class="guarnicion">
          <h3>Guarnición</h3>
          <ul>
            <li v-for="side in products.sides" :key="side.name">
              <div class="burger-item">
                <h2>{{ side.name }}</h2>
                <span class="price-circle">{{ side.price }}</span>
              </div>
            </li>
          </ul>
        </section>

        <section class="extras">
          <h3>Extras</h3>
          <ul>
            <li v-for="extra in products.extras" :key="extra.name">
              <div class="burger-item">
                <h2>{{ extra.name }}</h2>
                <span class="price-circle">{{ extra.price }}</span>
              </div>
            </li>
          </ul>
          <p class="gluten-free">Opciones sin Gluten</p>
        </section>
      </div>
    </section>
  </div>
  <Footer />
</template>


<script setup>
import { ref } from 'vue'

// Controla si se muestra el menú normal (false) o los combos (true)
const showCombos = ref(false)


useHead({
  title: 'Kiko Undefiled Burger | Carta',
  meta: [
    { name: 'description', content: 'Descubre la carta de las mejores smash burgers de Kiko Undefiled Burger. Con nuestra selección de hamburguesas frescas y gourmet, disfruta de una deliciosa comida rápida y una experiencia única.' },
    { name: 'author', content: 'Kiko Undefined Burger' },
    { name: 'robots', content: 'index, follow' },
    { name: 'keywords', content: 'burger, hamburguesa, kiko, kiko burger, hamburguesas gourmet, comida rápida Granada' },
  ],
});

// Lista de productos
const products = {
  combos: [
    { name: "COMBO CHEESEBURGER", price: "8,90€" },
    { name: "COMBO DOUBLE DOUBLE", price: "11,90€" },
    { name: "COMBO BACON CHEESEBURGER", price: "9,90€" },
    { name: "COMBO LTC", price: "9,90€" },
    { name: "COMBO CRISPY CHICKEN", price: "8,90€" },
    { name: "COMBO VEGAN BURGER", price: "10,90€" },
  ],
  drinks: [
    { name: "Agua 1L", price: "1,20€" },
    { name: "Agua con gas", price: "1,40€" },
    { name: "Aquarius", price: "1,70€" },
    { name: "Nestea", price: "1,70€" },
    { name: "Coca Cola", price: "1,70€" },
    { name: "Sprite", price: "1,70€" },
    { name: "Fanta Naranja", price: "1,70€" },
    { name: "Fanta Limón", price: "1,70€" },
    { name: "Cerveza Alhambra 33cl", price: "1,90€" },
    { name: "Cerveza Sin Alcohol 33cl", price: "1,90€" },
    { name: "Zumo de naranja", price: "2,50€" },
    { name: "Zumo de melocotón/piña", price: "1,80€" },
  ],
  burgers: [
    { name: "Cheeseburger", price: "4,99€", description: "Carne 90gr, Queso Cheddar, Mostaza, Ketchup, Cebolla" },
    { name: "Double Double", price: "7,99€", description: "Carne 90gr x2, Cheddar x2" },
    { name: "Bacon Cheeseburger", price: "6,99€", description: "Carne 90gr, Cheddar, Bacon" },
    { name: "LTC", price: "6,99€", description: "Carne 90gr, Cheddar, Lechuga, Tomate, Cebolla, Mostaza, Ketchup" },
    { name: "Crispy Chicken", price: "6,99€", description: "Pollo Crispy, Cheddar, Lechuga, Tomate, Mayonesa" },
    { name: "Vegan Burger", price: "7,99€", description: "Pan Vegano, Medallón No Carne, Lechuga, Tomate, Guacamole" },
  ],
  sides: [
    { name: "Patatas Fritas", price: "3,00€" },
    { name: "Boniato Frito", price: "3,50€" },
    { name: "Nuggets de Pollo 6u.", price: "3,99€" },
    { name: "Nuggets de Pollo 12u.", price: "5,50€" },
  ],
  extras: [
    { name: "Extra Cheddar", price: "+0,80€" },
    { name: "Extra Bacon", price: "+0,90€" },
    { name: "Extra Carne", price: "+1,99€" },
  ],
}
</script>

<style scoped>
@font-face {
  font-family: 'Poppins';
  src: url('https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

/* Contenedor principal */
.menu-container {
  background-color: #1d1d1d;
  color: rgb(220, 220, 220);
  padding: 2rem;
  min-height: 100vh;
}

/* Cabecera: "MENÚ K" y logo */
.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu-title {
  font-size: 2.5rem;
  font-weight: bold;
}
.kiko-logo {
  height: 50px;
}

/* Switch para combos */
.combo-switch {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 8%

}
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #aaa;
  transition: 0.4s;
  border-radius: 26px;
}
.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 3px;
  top: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}
input:checked + .slider {
  background-color: #FFD700;
}
input:checked + .slider:before {
  transform: translateX(24px);
}

/* Texto del switch */
.combo-text {
  font-size: 1rem;
  font-style: italic;
}

/* Título de secciones */
.section-title {
  text-transform: uppercase;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #FFD700;
}

/* Sección de hamburguesas/combos */
.burgers ul {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}
.burger-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}
.price-circle {
  border: 2px solid #FFD700;
  border-radius: 50px;
  color: rgb(220, 220, 220);
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  margin-left: 1rem;
}

/* Estilo para la descripción del producto */
.burgers p {
  font-size: 0.9rem;
  width: 75%;
}

/* Línea divisoria */
.divider {
  border: none;
  height: 1px;
  background-color: #FFD700;
  margin: 2rem 0;
}

/* Contenedor de bebidas en dos columnas */
.drinks-container {
  display: flex;
  gap: 2rem;
  align-items: stretch;
}
.drinks-block {
  flex: 1;
  min-width: 250px;
}
.drinks-block ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Guarnición y Extras lado a lado */
.side-by-side {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}
.side-by-side section {
  flex: 1;
}
.side-by-side h3 {
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
  border-bottom: 1px solid #FFD700;
  padding-bottom: 0.5rem;
}
.side-by-side ul {
  list-style: none;
  padding: 0;
}
.side-by-side li {
  margin-bottom: 1.5rem;
}
.gluten-free {
  margin-top: 1rem;
  font-style: italic;
  font-size: 0.9rem;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .top-row {
    flex-direction: column;
    align-items: center;
  }
  .menu-title {
    font-size: 2rem;
    text-align: center;
  }
  .kiko-logo {
    height: 40px;
    margin-top: 0.5rem;
  }
  .combo-switch {
    flex-direction: column;
    margin-top: 20%
  }
  .drinks-container {
    flex-direction: column;
  }
  .side-by-side {
    flex-direction: column;
  }
  /* Aumenta el tamaño de los títulos en móvil */
  .section-title {
    font-size: 1.2rem;
  }
  .burger-item h2 {
    font-size: 1.2rem;
  }
  /* Reduce aún más la descripción del producto en móvil */
  .burgers p {
    font-size: 0.8rem;
  }
  .drinks-block-2 {
    margin-top: -20px;
  }
}
</style>
