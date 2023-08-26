// models/usuario.js
const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha_registro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

Reserva.sync({force: false})
  .then(() => {
    console.log('Tabla de Reservas creada');
  })
  .catch((error) => {
    console.error('Error al crear la tabla de Reservas:', error);
  });

module.exports = Usuario;
