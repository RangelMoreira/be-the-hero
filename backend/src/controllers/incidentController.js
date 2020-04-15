const connection = require('../database/connection');

module.exports = {
    //listando casos
    async index(request, response){
        const {page=1} = request.query;
        
        //contando a qtd de registros
        const [count] = await connection('incidents').count();
        //os couchetes fazem pegar apenas a primeira posição do array
        
        console.log(count);
        const incidents = await connection('incidents')
          .join('ongs','ongs.id','=','incidents.ong_id')
          .limit(5)
          .offset((page-1)*5)   //pula de 5 em 5 registros
          .select(['incidents.*',
                'ongs.name',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf']);

          response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);

    },



    //criando caso
    async create(request, response){
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;
        
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({id});
    },

    //deletando caso
    async delete(request, response){
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
          .where('id',id)
          .select('ong_id')
          .first();

        if (incidents.ong_id != ong_id){
            return response.status(401).json({ error: 'Operation not permites' });
            
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();//status 204 significa que é uma resposa sem conteúdo
    }
}