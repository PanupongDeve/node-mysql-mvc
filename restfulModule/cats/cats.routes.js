const catsController = require('./cats.controller');

module.exports = (app) => {
    app.get('/api/cats', catsController.findAll);
    app.get('/api/cats/:id', catsController.findById);
    app.patch('/api/cats/:id', catsController.updateById);
    app.delete('/api/cats/:id', catsController.deleteById);
    app.post('/api/cats', catsController.create);
}