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
router.post('/usuarios', crearUsuario);

router.get('/usuarios', obtenerUsuarios);

router.get('/usuarios/:id', obtenerUsuario);

router.put('/usuarios/:id', actualizarUsuario);

router.delete('/usuarios/:id', eliminarUsuario);

// Rutas para Playlist
router.post('/playlists', crearPlaylist);

router.get('/playlists', obtenerPlaylists);

router.get('/playlists/:id', obtenerPlaylist);

router.put('/playlists/:id', actualizarPlaylist);

router.delete('/playlists/:id', eliminarPlaylist);

// Rutas para Música
router.post('/musica', crearMusica);

router.get('/musica', obtenerMusicas);

router.get('/musica/:id', obtenerMusica);

router.put('/musica/:id', actualizarMusica);

router.delete('/musica/:id', eliminarMusica);

module.exports = router;
