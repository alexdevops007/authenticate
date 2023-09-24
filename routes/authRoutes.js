const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);

// Route protégée avec authentification
router.get('/resource-protegee', authMiddleware.authenticateToken, (req, res) => {
  res.json({ message: 'Ceci est une ressource protégée.' });
});

// Route protégée avec authentification et autorisation
router.get('/resource-admin', authMiddleware.authenticateToken, authMiddleware.authorizeUser, (req, res) => {
  res.json({ message: 'Ceci est une ressource accessible uniquement aux administrateurs.' });
});

module.exports = router;
