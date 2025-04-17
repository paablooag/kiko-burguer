const mongoose = require('mongoose');
const Menu = require('../models/Menu');
const dotenv = require('dotenv');

dotenv.config();

const menuData = {
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
    { name: "Mini Burger 6 uds.", price: "11,90€", description: "Carne, Queso Cheddar, Ketchup" },
    { name: "Mini Burger 12 uds.", price: "21,90€", description: "Carne, Queso Cheddar, Ketchup" },
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
};

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await Menu.deleteMany({});
    await Menu.create(menuData);
    console.log('Menu data seeded successfully');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error seeding data:', err);
    mongoose.connection.close();
  });