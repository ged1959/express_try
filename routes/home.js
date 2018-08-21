const express = require('express');
const router = express.Router();

// front page
router.get('/', (req, res) => {
  res.send('Exercise List of Genres Structured!');
});

module.exports = router;