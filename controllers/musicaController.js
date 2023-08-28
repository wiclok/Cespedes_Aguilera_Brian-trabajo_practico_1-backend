// controllers/musicaController.js
const Musica = require('../Models/musica');
const ctrlMusica = {};

ctrlMusica.crearMusica = async (req, res) => {
  try {
    const {ID_playlist} = req.params;
    const {titulo, artista, duracion, genero} = req.body;
    const nuevaMusica = new Musica({
      titulo,
      artista,
      duracion,
      genero,
      ID_playlist,
    });
    await nuevaMusica.save();
    res.status(201).json(nuevaMusica);
  } catch (error) {
    res.status(400).json({mensaje: 'Error al crear música'});
    console.log(error);
  }
};

ctrlMusica.obtenerMusicas = async (req, res) => {
  try {
    const musicas = await Musica.findAll();
    res.json(musicas);
  } catch (error) {
    res.status(500).json({mensaje: 'Error al obtener músicas'});
  }
};

ctrlMusica.obtenerMusica = async (req, res) => {
  try {
    const musica = await Musica.findByPk(req.params.id);
    if (musica) {
      res.json(musica);
    } else {
      res.status(404).json({mensaje: 'Música no encontrada'});
    }
  } catch (error) {
    res.status(500).json({mensaje: 'Error al obtener música'});
  }
};

ctrlMusica.actualizarMusica = async (req, res) => {
  try {
    const musica = await Musica.findByPk(req.params.id);
    if (musica) {
      await musica.update(req.body);
      res.json(musica);
    } else {
      res.status(404).json({mensaje: 'Música no encontrada'});
    }
  } catch (error) {
    res.status(400).json({mensaje: 'Error al actualizar música'});
  }
};

ctrlMusica.eliminarMusica = async (req, res) => {
  try {
    const musica = await Musica.findByPk(req.params.id);
    if (musica) {
      await musica.destroy();
      res.json({mensaje: 'Música eliminada'});
    } else {
      res.status(404).json({mensaje: 'Música no encontrada'});
    }
  } catch (error) {
    res.status(500).json({mensaje: 'Error al eliminar música'});
  }
};

module.exports = ctrlMusica;
