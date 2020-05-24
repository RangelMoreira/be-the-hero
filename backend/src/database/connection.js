const knex = require('knex');

//volta duas pastas para encontrar o arquivo
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

//configuração padrão development
const connection = knex(config);

module.exports = connection;

