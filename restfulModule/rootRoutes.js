const catsRotes = require('./cats/cats.routes');
const fishesRoute = require('./fishes/fishes.routes');
const ownerRoute = require('./owners/owners.routes');


module.exports = (app) => {
    catsRotes(app),
    fishesRoute(app),
    ownerRoute(app)
}