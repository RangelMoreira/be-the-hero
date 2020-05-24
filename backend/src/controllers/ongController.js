const generateUniqueId = require('../utils/generateUniqueId');

//importando a conexão
const connection = require('../database/connection');

const crypto = require('crypto');


module.exports = {
  async index (request,response) {

    const ongs = await connection('ongs').select('*');
  
    return response.json(ongs)
  },

  async create(request, response){
    const {name, email, whatsapp, city, uf} = request.body;
   
    //gerando valor aleatório para a id
    const id = generateUniqueId();
 
    //inserindo valores
    await connection('ongs').insert({
     id,
     name,
     email,
     whatsapp,
     city,
     uf
    });
 
    return response.json({ id});
  }

}