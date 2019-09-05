const LivroService = require('../services/livroService');
// Importando a instância do banco
const db = require('../../config/database');

module.exports = (app) => {
    app.get('/', function (req, resp) {
        resp.send(`
            <html lang="PT-BR">
                <head>
                    <meta charset="UTF-8">
                    <title>Node js</title>
                </head>
                <body>
                    <h2>Node</h2>
                </body>
            </html>
    `);
    });

    app.get('/livros', function (req, resp) {
        const livroService = new LivroService(db);
        livroService.lista()
            .then(livros => resp.marko(
                require('../views/livros/listagem/listagem.marko'),
                {
                    livros: livros
                }

            ))
            .catch(erro => console.log(erro));
    });

    app.get('/livros/form', function (req, resp) {
        resp.marko(require('../views/livros/form/form.marko'))
    });

    app.post('/livros', function(req, resp) {
        const livroService = new LivroService(db);
        livroService.adiciona(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => console.log(erro));
    });
}