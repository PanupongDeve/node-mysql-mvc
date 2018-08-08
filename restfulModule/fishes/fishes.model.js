const Fish = require('./fishes.schema');
const Model = require('../../DesignLayer/Model/Model');


class FishModel extends Model {
    constructor(model) {
        super(model)
    }
}

module.exports = new FishModel(Fish);

