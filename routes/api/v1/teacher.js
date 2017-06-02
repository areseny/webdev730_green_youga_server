const express = require('express');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're an authorized teacher.",
    // user values passed through from auth middleware
    user: req.user
  });
});

module.exports = router;
