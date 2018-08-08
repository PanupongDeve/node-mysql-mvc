const fishesController = require('./fishes.controller');

module.exports = (app) => {
    app.get('/api/fishes', fishesController.findAll);
    app.get('/api/fishes/:id', fishesController.findById);
    app.patch('/api/fishes/:id', fishesController.updateById);
    app.delete('/api/fishes/:id', fishesController.deleteById);
    app.post('/api/fishes', fishesController.create);
}