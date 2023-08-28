const {sequelize} = require('./config/database');
const Usuario = require('./Models/Usuario.model');
const Playlist = require('./Models/playlist');
const Musica = require('./Models/musica');

Usuario.hasMany(Playlist, {
  foreignKey: 'ID_usuario',
  sourceKey: 'id',
});

Playlist.belongsTo(Usuario, {
  foreignKey: 'ID_usuario',
  sourceKey: 'id',
});

Playlist.hasMany(Musica, {
  foreignKey: 'ID_playlist',
  sourceKey: 'id',
});

Musica.belongsTo(Playlist, {
  foreignKey: 'ID_playlist',
  sourceKey: 'id',
});

Usuario.sync({force: false}).then(() => {
  console.log('Tabla de usuarios creada');
  Playlist.sync({force: false}).then(() => {
    console.log('Tabla de playlist creada');
    Musica.sync({force: false}).then(() => {
      console.log('Tabla de musica');
    });
  });
});

sequelize.models = {
  Usuario,
  Playlist,
  Musica,
};

module.exports = sequelize;
