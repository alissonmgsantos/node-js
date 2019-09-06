require('marko/node-require').install();
require('marko/express');

// Importando express
const express = require('express');
const app = express();

const methodOverride = require('method-override');

const bodyParser = require('body-parser');

app.use('/estatico', express.static('src/app/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
}));

//Importando o modulo de rotas e repassando express para rota 
const routes = require('../app/routes/routes');
routes(app);
// Exportando app express
module.exports = app;