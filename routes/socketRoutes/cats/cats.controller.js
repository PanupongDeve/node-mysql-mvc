const catsServices = require('./cats.services');

const findAll = (io, socket) => {
    return async (data) => {
        const command = data.command
        try {
            switch (command) {
                case 'fetch_cat':
                    io.emit(`/api/cats/${data.catId}`, await catsServices.findById(data.catId));
                    break;
                case 'fetch_cats':
                    io.emit('/api/cats', await catsServices.findAll());
                    break;
                default:
                    break;
            }

        } catch (error) {
            // send Error For user
            console.log(error);
            io.emit('/api/cats', error);
        }
    }
  }

  module.exports = {
    findAll
  }