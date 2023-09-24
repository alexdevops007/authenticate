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

const authorizeUser = (req, res, next) => {
  // Vous pouvez implémenter votre logique d'autorisation ici.
  // Par exemple, vérifiez si l'utilisateur a les autorisations nécessaires pour accéder à la ressource.

  // Dans cet exemple, nous supposons que l'utilisateur doit avoir un rôle "admin" pour accéder à la ressource.
  if (req.user && req.user.role === 'admin') {
    next(); // L'utilisateur a les autorisations nécessaires.
  } else {
    res.status(403).json({ error: 'Vous n\'avez pas les autorisations nécessaires.' });
  }
};

module.exports = { authenticateToken, authorizeUser };
