const catsRotes = require('./cats/cats.routes');


module.exports = (app) => {
    catsRotes(app)
}