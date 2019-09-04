const express = require('express');

const http = require('http');

const server = http.createServer(function (req, resp) {
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

server.listen(3000);
