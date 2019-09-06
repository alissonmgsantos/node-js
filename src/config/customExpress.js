require('marko/node-require').install();
require('marko/express');

// Importando express
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use('/estatico', express.static('src/app/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

//Importando o modulo de rotas e repassando express para rota 
const routes = require('../app/routes/routes');
routes(app);
// Exportando app express
module.exports = app;