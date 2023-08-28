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
const {
  nombreValidation,
  correoValidation,
  contraseñaValidation,
  idValidation,
  nombreValidationPUT,
  correoValidationPUT,
  contraseñaValidationPUT,
} = require('./usuario.validation');

const validador = require('../middleware/validator.middleware');
const {
  nombreValidatorPL,
  descripcionValidatorPL,
  descripcionValidatorPLPUT,
  nombreValidationPLPUT,
} = require('./playlist.validation');
const {
  tituloValidationMU,
  artistaValidationMU,
  duracionValidationMU,
  generoValidationMU,
  tituloValidationMUPUT,
} = require('./musica.validation');

// Rutas para Usuario
router.post(
  '/usuarios',
  nombreValidation,
  correoValidation,
  contraseñaValidation,
  validador,
  crearUsuario
);

router.get('/usuarios/:id', idValidation, validador, obtenerUsuario);

router.get('/usuarios/', obtenerUsuarios);

router.put(
  '/usuarios/:id',
  idValidation,
  nombreValidationPUT,
  correoValidationPUT,
  contraseñaValidationPUT,
  validador,
  actualizarUsuario
);

router.delete('/usuarios/:id', idValidation, validador, eliminarUsuario);

// Rutas para Playlist
router.post(
  '/playlists/:ID_usuario',
  nombreValidatorPL,
  descripcionValidatorPL,
  validador,
  crearPlaylist
);

router.get('/playlists', obtenerPlaylists);

router.get('/playlists/:id', idValidation, validador, obtenerPlaylist);

router.put(
  '/playlists/:id',
  idValidation,
  nombreValidationPLPUT,
  descripcionValidatorPLPUT,
  validador,
  actualizarPlaylist
);

router.delete('/playlists/:id', idValidation, validador, eliminarPlaylist);

// Rutas para Música
router.post(
  '/musica/:ID_playlist',
  tituloValidationMU,
  artistaValidationMU,
  duracionValidationMU,
  generoValidationMU,
  validador,
  crearMusica
);

router.get('/musica', obtenerMusicas);

router.get('/musica/:id', idValidation, validador, obtenerMusica);

router.put(
  '/musica/:id',
  idValidation,
  tituloValidationMUPUT,
  validador,
  actualizarMusica
);

router.delete('/musica/:id', idValidation, validador, eliminarMusica);

module.exports = router;
