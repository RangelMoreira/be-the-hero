const express = require('express');

const ProfileController = require('./controllers/incidentController');
const ongController = require('./controllers/OngController');
const incidentsController = require('./controllers/incidentController');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();
//importando a conexão
// const connection = require('./database/connection');

//criando sessão do usuário
routes.post('/session',sessionController.create)

//listando vários casos de uma ong
routes.get('/profile',ProfileController.index);

//listando valores ongs
routes.get('/ongs', ongController.index);

//crinado valores ongs
routes.post('/ongs', ongController.create);

//criação dos casos das ong
routes.post('/incidents', incidentsController.create);

//listando caso das ongs
routes.get('/incidents', incidentsController.index);

//deletando casos
routes.delete('/incidents/:id', incidentsController.delete);

module.exports = routes;