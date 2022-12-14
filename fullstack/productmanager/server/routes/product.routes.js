const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/api/createProduct', ProductController.createProduct);
    app.get('/api/getAllProducts', ProductController.getAllProducts);
    app.get('/api/oneProduct/:id', ProductController.getOneProduct);
    app.put('/api/updateProduct/:id', ProductController.updateProduct);
    app.delete('/api/deleteProduct/:id', ProductController.deleteProduct);
}