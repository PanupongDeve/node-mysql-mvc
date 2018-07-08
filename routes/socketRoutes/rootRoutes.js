
const catsRotes = require('./cats/cats.routes');



module.exports = async (io, socket) => {
    catsRotes(io, socket); 
}

