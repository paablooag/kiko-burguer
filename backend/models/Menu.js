const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  combos: [{
    name: { type: String, required: true },
    price: { type: String, required: true },
  }],
  drinks: [{
    name: { type: String, required: true },
    price: { type: String, required: true },
  }],
  burgers: [{
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: false },
  }],
  sides: [{
    name: { type: String, required: true },
    price: { type: String, required: true },
  }],
  extras: [{
    name: { type: String, required: true },
    price: { type: String, required: true },
  }],
}, { timestamps: true });

module.exports = mongoose.model('Menu', menuSchema);