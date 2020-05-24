const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', ()=>{
    //executa as migrations antes de cada teste
    beforeEach(async () =>{
      //defazendo as migrations anteriores
      await connection.migrate.rollback();
        
      await  connection.migrate.latest();
    });

    //encerra a conexão depois de todos os testes
    afterAll(async () =>{
        await connection.destroy();
    });

    it('shoud be able to create a new ONG', async () =>{
        const response = await request(app)
            .post('/ongs')
            //para chamar o header
            //.set('Authorization','asd');
            .send({                
                name:"aOng",
                email: "contato@aong.com.br",
                whatsapp: "4700000000",
                city:"Rio do Sul",
                uf:"SC"
                
            });
            console.log(response.body);

            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);




    });
});