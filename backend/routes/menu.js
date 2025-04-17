const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');

// Get menu data
router.get('/', async (req, res) => {
  try {
    const menu = await Menu.findOne();
    if (!menu) {
      return res.status(404).json({ message: 'Menu not found' });
    }
    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;