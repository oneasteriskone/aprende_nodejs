'use strict';


var mongoose = require('mongoose'),
  Curso = mongoose.model('Cursos');

exports.listar_todos_cursos = function(req, res) {
  Curso.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};



exports.crear_curso = function(req, res) {
  var new_task = new Curso(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.leer_curso = function(req, res) {
  Curso.findById(req.params.cursoID, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.actualizar_curso = function(req, res) {
  Curso.findOneAndUpdate({
    _id: req.params.cursoID
  }, req.body, {
    new: true
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.eliminar_curso = function(req, res) {
  Curso.remove({
    _id: req.params.cursoID
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({
      message: 'Curso successfully deleted'
    });
  });
};