module.exports = (app) => {
    app.get('/', function (req, resp) {
        resp.end(`
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
}