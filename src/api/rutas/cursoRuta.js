'use strict';
module.exports = function(app) {
	var cursoLista = require('../controladores/cursoControlador.js');

	// cursoLista Routes
	app.route('/cursos')
		.get(cursoLista.listar_todos_cursos)
		.post(cursoLista.crear_curso);


	app.route('/cursos/:cursoid')
		.get(cursoLista.leer_curso)
		.put(cursoLista.actualizar_curso)
		.delete(cursoLista.eliminar_curso);
};