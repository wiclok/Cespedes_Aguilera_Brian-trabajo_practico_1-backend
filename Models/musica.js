// models/musica.js
const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Playlist = require('./playlist');

const Musica = sequelize.define('Musica', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  artista: {
    type: DataTypes.STRING,
  },
  duracion: {
    type: DataTypes.TIME,
  },
  genero: {
    type: DataTypes.STRING,
  },
});

// Establecer la relación uno a muchos con Playlist
Musica.belongsTo(Playlist);
Playlist.hasMany(Musica);

module.exports = Musica;
