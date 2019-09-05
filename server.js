const express = require('express');
const app = express();


app.listen(3000, function() {
    console.log(`Servidor rodando na porta 3000`);
});

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