const express =  require('express');

const cors = require('cors');

const routes = require('./routes');// ./ para que ele não ache que é um pacote

const app=express();

app.use(cors);
app.use(express.json());
app.use(routes);


app.listen(3333);