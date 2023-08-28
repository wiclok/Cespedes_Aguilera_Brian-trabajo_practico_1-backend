const {body} = require('express-validator');

const tituloValidationMU = body('titulo')
  .notEmpty()
  .withMessage('El título es requerido')
  .isLength({max: 20})
  .withMessage('El título no puede contener mas de 20 caracteres');

const artistaValidationMU = body('artista')
  .optional({nullable: true})
  .isLength({max: 20})
  .withMessage('El artista no puede contener mas de 20 caracteres');

const duracionValidationMU = body('duracion').optional({nullable: true});

const generoValidationMU = body('genero')
  .optional({nullable: true})
  .isLength({max: 20})
  .withMessage('El genero no puede contener mas de 20 caracteres');

const tituloValidationMUPUT = body('titulo').optional({nullable: true});

module.exports = {
  tituloValidationMU,
  artistaValidationMU,
  duracionValidationMU,
  generoValidationMU,
  tituloValidationMUPUT,
};
