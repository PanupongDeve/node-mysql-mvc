const catsRotes = require('./cats/cats.routes');
const fishesRoute = require('./fishes/fishes.routes');


module.exports = (app) => {
    catsRotes(app),
    fishesRoute(app)
}