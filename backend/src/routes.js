const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');

const ProfileController = require('./controllers/ProfileController');
const ongController = require('./controllers/OngController');
const incidentsController = require('./controllers/incidentController');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();
//importando a conexão
// const connection = require('./database/connection');

//criando sessão do usuário
routes.post('/session',sessionController.create)

//listando vários casos de uma ong
routes.get('/profile',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}),ProfileController.index);

//listando valores ongs
routes.get('/ongs', ongController.index);

//crinado valores ongs
routes.post('/ongs',celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), ongController.create);

//criação dos casos das ong
routes.post('/incidents', incidentsController.create);

//listando caso das ongs
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}) ,incidentsController.index);

//deletando casos
routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), incidentsController.delete);

module.exports = routes;