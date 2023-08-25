const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { register, login } = require('../controllers/authController');
const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Protected route accessed' });
});

module.exports = router;
