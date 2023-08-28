const {sequelize, DataTypes} = require('../config/database');
const Usuario = require('./Usuario.model');

const Playlist = sequelize.define(
  'playlist',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: 'playlists',
  }
);

module.exports = Playlist;
