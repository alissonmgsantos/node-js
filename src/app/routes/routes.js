const LivroService = require('../services/livroService');
// Importando a instância do banco
const db = require('../../config/database');

module.exports = (app) => {
    app.get('/', function(req, resp) {
        resp.marko(
            require('../views/home/home.marko')
        );
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

    app.get('/livros/form', function(req, resp) {
        resp.marko(require('../views/livros/form/form.marko'), { livro: {} });
    });

    app.get('/livros/form/:id', function(req, resp) {
        const id = req.params.id;
        const livroService = new LivroService(db);
    
        livroService.buscaPorId(id)
            .then(livro => 
                resp.marko(
                    require('../views/livros/form/form.marko'),
                    { livro: livro }
                )
            )
            .catch(erro => console.log(erro));
    
    });

    app.post('/livros', function(req, resp) {
        const livroService = new LivroService(db);
        livroService.adiciona(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => console.log(erro));
    });

    app.put('/livros', function(req, resp) {
        const livroService = new LivroService(db);
        
        livroService.atualiza(req.body)
                .then(resp.redirect('/livros'))
                .catch(erro => console.log(erro));
    });

    app.delete('/livros/:id', function(req, resp) {
        const id = req.params.id;
    
        const livroService = new LivroService(db);
        livroService.remove(id)
            .then(() => resp.status(200).end())
            .catch(erro => console.log(erro));
    
    });
}