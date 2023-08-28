// models/musica.js
const {sequelize, DataTypes} = require('../config/database');
const playlist = require('./playlist');

const Musica = sequelize.define('musica', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
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

module.exports = Musica;
