require('marko/node-require').install();
require('marko/express');

// Importando express
const express = require('express');
const app = express();

//Importando o modulo de rotas e repassando express para rota 
const routes = require('../app/routes/routes');
routes(app);
// Exportando app express
module.exports = app;