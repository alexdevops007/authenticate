const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);

// Route protégée
router.get('/resource-protegee', authMiddleware.authenticateToken, (req, res) => {
  res.json({ message: 'Ceci est une ressource protégée.' });
});

module.exports = router;
