const jwt = require('jsonwebtoken');
const config = require('../config/config');

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Token d\'authentification manquant.' });
  }

  jwt.verify(token, config.accessTokenSecret, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token d\'authentification invalide.' });
    }
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };
