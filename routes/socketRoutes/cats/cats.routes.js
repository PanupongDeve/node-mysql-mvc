const catsController = require('./cats.controller');

const findAll = async (io, socket) => {
    socket.on('/api/cats', catsController.findAll(io, socket));
}



module.exports = async (io, socket) => {
    findAll(io, socket);
}