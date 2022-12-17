const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.post('/api/createAuthor', AuthorController.createAuthor);
    app.get('/api/getAllAuthors', AuthorController.getAllAuthors);
    app.get('/api/getOneAuthor/:id', AuthorController.getOneAuthor);
    app.put('/api/updateAuthor/:id', AuthorController.updateAuthor);
    app.delete('/api/deleteAuthor/:id', AuthorController.deleteAuthor);
}