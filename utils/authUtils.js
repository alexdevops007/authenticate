const jwt = require('jsonwebtoken');
const config = require('../config/config');

function generateAccessToken(userId) {
  return jwt.sign({ userId }, config.accessTokenSecret, {
    expiresIn: '15m',
  });
}

function generateRefreshToken(userId) {
  return jwt.sign({ userId }, config.refreshTokenSecret, {
    expiresIn: '7d',
  });
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
