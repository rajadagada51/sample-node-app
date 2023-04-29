const express = require('express');
const db = require('../db');

const router = express.Router();

// Route for fetching items
router.get('/', async (req, res) => {
  try {
    const items = await db.getItems();
    res.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Error fetching items' });
  }
});

module.exports = router;

