// models/playlist.js
const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario.model');

const Playlist = sequelize.define('Playlist', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

// Establecer la relación uno a muchos con Usuario
Playlist.belongsTo(Usuario);
Usuario.hasMany(Playlist);

module.exports = Playlist;
