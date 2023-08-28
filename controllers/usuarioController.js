// controllers/usuarioController.js
const Usuario = require('../Models/Usuario.model');
const ctrlUsuario = {};

ctrlUsuario.crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = await Usuario.create(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({mensaje: 'Error al crear usuario'});
    console.error(error);
  }
};

ctrlUsuario.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({mensaje: 'Error al obtener usuarios'});
  }
};

ctrlUsuario.obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({mensaje: 'Usuario no encontrado'});
    }
  } catch (error) {
    res.status(500).json({mensaje: 'Error al obtener usuario'});
  }
};

ctrlUsuario.actualizarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
      await usuario.update(req.body);
      res.json(usuario);
    } else {
      res.status(404).json({mensaje: 'Usuario no encontrado'});
    }
  } catch (error) {
    res.status(400).json({mensaje: 'Error al actualizar usuario'});
    console.log(error);
  }
};

ctrlUsuario.eliminarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
      await usuario.destroy();
      res.json({mensaje: 'Usuario eliminado'});
    } else {
      res.status(404).json({mensaje: 'Usuario no encontrado'});
    }
  } catch (error) {
    res.status(500).json({mensaje: 'Error al eliminar usuario'});
    console.log(error);
  }
};

module.exports = ctrlUsuario;
