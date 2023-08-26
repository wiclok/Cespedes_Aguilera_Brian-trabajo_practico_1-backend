// routes/routes.js
const express = require('express');
const {body, param} = require('express-validator');
const router = express.Router();
const {
  crearUsuario,
  obtenerUsuario,
  obtenerUsuarios,
  eliminarUsuario,
  actualizarUsuario,
} = require('../controllers/usuarioController');
const {
  crearPlaylist,
  obtenerPlaylist,
  obtenerPlaylists,
  eliminarPlaylist,
  actualizarPlaylist,
} = require('../controllers/playlistController');
const {
  crearMusica,
  obtenerMusica,
  obtenerMusicas,
  eliminarMusica,
  actualizarMusica,
} = require('../controllers/musicaController');

// Rutas para Usuario
router.post(
  '/usuarios',
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('correo').isEmail().withMessage('El correo electrónico no es válido'),
    body('contraseña').notEmpty().withMessage('La contraseña es obligatoria'),
  ],
  crearUsuario
);

router.get('/usuarios', obtenerUsuarios);

router.get(
  '/usuarios/:id',
  [param('id').isInt().withMessage('ID de usuario no válido')],
  obtenerUsuario
);

router.put(
  '/usuarios/:id',
  [
    param('id').isInt().withMessage('ID de usuario no válido'),
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('correo').isEmail().withMessage('El correo electrónico no es válido'),
    body('contraseña').notEmpty().withMessage('La contraseña es obligatoria'),
  ],
  actualizarUsuario
);

router.delete(
  '/usuarios/:id',
  [param('id').isInt().withMessage('ID de usuario no válido')],
  eliminarUsuario
);

// Rutas para Playlist
router.post(
  '/playlists',
  [body('nombre').notEmpty().withMessage('El nombre es obligatorio')],
  crearPlaylist
);

router.get('/playlists', obtenerPlaylists);

router.get(
  '/playlists/:id',
  [param('id').isInt().withMessage('ID de playlist no válido')],
  obtenerPlaylist
);

router.put(
  '/playlists/:id',
  [
    param('id').isInt().withMessage('ID de playlist no válido'),
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
  ],
  actualizarPlaylist
);

router.delete(
  '/playlists/:id',
  [param('id').isInt().withMessage('ID de playlist no válido')],
  eliminarPlaylist
);

// Rutas para Música
router.post(
  '/musica',
  [body('titulo').notEmpty().withMessage('El título es obligatorio')],
  crearMusica
);

router.get('/musica', obtenerMusicas);

router.get(
  '/musica/:id',
  [param('id').isInt().withMessage('ID de música no válido')],
  obtenerMusica
);

router.put(
  '/musica/:id',
  [
    param('id').isInt().withMessage('ID de música no válido'),
    body('titulo').notEmpty().withMessage('El título es obligatorio'),
  ],
  actualizarMusica
);

router.delete(
  '/musica/:id',
  [param('id').isInt().withMessage('ID de música no válido')],
  eliminarMusica
);

module.exports = router;
