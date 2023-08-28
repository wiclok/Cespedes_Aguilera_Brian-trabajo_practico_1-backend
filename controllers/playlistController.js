// controllers/playlistController.js
const Musica = require('../Models/musica');
const Playlist = require('../Models/playlist');
const ctrlPlaylist = {};

ctrlPlaylist.crearPlaylist = async (req, res) => {
  try {
    const nuevaPlaylist = await Playlist.create(req.body);
    res.status(201).json(nuevaPlaylist);
  } catch (error) {
    res.status(400).json({mensaje: 'Error al crear playlist'});
    console.log(error);
  }
};

ctrlPlaylist.obtenerPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.findAll();
    res.json(playlists);
  } catch (error) {
    res.status(500).json({mensaje: 'Error al obtener playlists'});
  }
};

ctrlPlaylist.obtenerPlaylist = async (req, res) => {
  try {
    const playlistId = req.params.id;
    const playlist = await Playlist.findByPk(playlistId, {
      include: Musica,
    });
    if (playlist) {
      res.json(playlist);
    } else {
      res.status(404).json({mensaje: 'Playlist no encontrada'});
    }
  } catch (error) {
    res.status(500).json({mensaje: 'Error al obtener playlist'});
  }
};

ctrlPlaylist.actualizarPlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findByPk(req.params.id);
    if (playlist) {
      await playlist.update(req.body);
      res.json(playlist);
    } else {
      res.status(404).json({mensaje: 'Playlist no encontrada'});
    }
  } catch (error) {
    res.status(400).json({mensaje: 'Error al actualizar playlist'});
    console.log(error);
  }
};

ctrlPlaylist.eliminarPlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findByPk(req.params.id);
    if (playlist) {
      await playlist.destroy();
      res.json({mensaje: 'Playlist eliminada'});
    } else {
      res.status(404).json({mensaje: 'Playlist no encontrada'});
    }
  } catch (error) {
    res.status(500).json({mensaje: 'Error al eliminar playlist'});
  }
};

module.exports = ctrlPlaylist;
