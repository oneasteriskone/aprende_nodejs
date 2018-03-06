'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CursoSchema = new Schema({
  nombre: {
    type: String,
    required: 'Hace falta el nombre del curso.'
  },
  fecha_creacion: {
    type: Date,
    default: Date.now
  },
  estado: {
    type: [{
      type: String,
      enum: ['faltante', 'en_progreso', 'completado']
    }],
    default: ['faltante']
  },
  nota: {
    type: String,
    default: 0
  }
});

module.exports = mongoose.model('Cursos', CursoSchema);