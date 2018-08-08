const ownersController = require('./owners.controller');

module.exports = (app) => {
    app.get('/api/owners', ownersController.findAll);
    app.get('/api/owners/:id', ownersController.findById);
    app.patch('/api/owners/:id', ownersController.updateById);
    app.delete('/api/owners/:id', ownersController.deleteById);
    app.post('/api/owners', ownersController.create);
}