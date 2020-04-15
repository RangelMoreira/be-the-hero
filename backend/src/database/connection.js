const knex = require('knex');

const configuration = require('../../knexfile');//volta duas pastas para encontrar o arquivo

const connection = knex(configuration.development);//configuração padrão development

module.exports = connection;

