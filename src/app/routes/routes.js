
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
        db.all('SELECT * FROM livros', function (erro, resultados) {
            resp.marko(
                require('../views/livros/listagem/listagem.marko'),
                {
                    livros: resultados
                }
            );
        });
    });
}