const {body} = require('express-validator');

const nombreValidatorPL = body('nombre')
  .notEmpty()
  .withMessage('El nombre es requerido')
  .isLength({max: 50})
  .withMessage('El nombre no puede tener mas de 50 caracteres');

const descripcionValidatorPL = body('descripcion')
  .optional({nullable: true})
  .isLength({max: 100})
  .withMessage('La descripcion no puede contener mas de 100 caracteres');

const nombreValidationPLPUT = body('nombre')
  .optional({nullable: true})
  .isLength({max: 50})
  .withMessage('El nombre no puede tener mas de 50 caracteres');

const descripcionValidatorPLPUT = body('descripcion')
  .optional({nullable: true})
  .isLength({max: 100})
  .withMessage('La descripcion no puede tener mas de 100 caracteres');

module.exports = {
  nombreValidatorPL,
  descripcionValidatorPL,
  nombreValidationPLPUT,
  descripcionValidatorPLPUT,
};
