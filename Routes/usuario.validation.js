// validations.js
const {body, param} = require('express-validator');

const nombreValidation = body('nombre')
  .notEmpty()
  .withMessage('El nombre es requerido.')
  .isAlpha()
  .withMessage('El nombre solo puede contener letras.');

const correoValidation = body('correo')
  .notEmpty()
  .withMessage('El correo es requerido.')
  .isEmail()
  .withMessage('El correo debe ser una dirección de correo válida.');

const contraseñaValidation = body('contraseña')
  .notEmpty()
  .withMessage('La contraseña es requerida.')
  .isLength({min: 6, max: 12})
  .withMessage('La contraseña debe tener entre 6 y 12 caracteres.')
  .matches(/\d/)
  .withMessage('La contraseña debe contener al menos un número.')
  .matches(/[a-z]/)
  .withMessage('La contraseña debe contener al menos una letra minúscula.')
  .matches(/[A-Z]/)
  .withMessage('La contraseña debe contener al menos una letra mayúscula.');

const nombreValidationPUT = body('nombre')
  .optional()
  .isAlpha()
  .withMessage('El nombre solo puede contener letras');

const correoValidationPUT = body('correo')
  .optional()
  .isEmail()
  .withMessage('El correo debe ser una dirrecion de correo valida');

const contraseñaValidationPUT = body('contraseña')
  .optional()
  .isLength({min: 6, max: 12})
  .withMessage('La contraseña debe tener entre 6 y 12 caracteres.')
  .matches(/\d/)
  .withMessage('La contraseña debe contener al menos un número.')
  .matches(/[a-z]/)
  .withMessage('La contraseña debe contener al menos una letra minúscula.')
  .matches(/[A-Z]/)
  .withMessage('La contraseña debe contener al menos una letra mayúscula.');

const idValidation = param('id').isInt().withMessage('ID no válido.');

module.exports = {
  nombreValidation,
  correoValidation,
  contraseñaValidation,
  idValidation,
  nombreValidationPUT,
  correoValidationPUT,
  contraseñaValidationPUT,
};
