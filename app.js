const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const config = require('./config/config');
const colors = require("colors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connecté à MongoDB.`.bgRed.bold);
  })
  .catch(err => {
    console.error('Erreur de connexion à MongoDB :', err);
  });

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`.bgYellow.bold);
});
