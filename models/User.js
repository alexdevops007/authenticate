const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['user', 'admin'], // Rôles utilisateur (ajustez selon vos besoins)
    default: 'user',
  },
});

module.exports = mongoose.model('User', userSchema);
