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
    resp.marko(
        require('../views/livros/listagem/listagem.marko')
    );
});
}