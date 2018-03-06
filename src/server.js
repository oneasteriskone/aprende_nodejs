var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	Task = require('./api/modelos/cursoModelo'), //created model loading here
	bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cursosDB');


app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());


var routes = require('./api/rutas/cursoRuta');
routes(app);

app.listen(port);


console.log('Cursos API, corriendo en el puerto: ' + port);