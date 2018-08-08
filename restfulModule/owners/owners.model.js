const Owner = require('./owners.schema');
const Cat = require('../cats/cats.schema');
const Model = require('../../DesignLayer/Model/Model');

class OwnerModel extends Model {
    constructor(model) {
        super(model)
    }

    async findAll() {
        const owners = await this.model.findAll({
            include: [{
                model: Cat
            }]
        });
        return owners;
    }

    async findById(id) {
        const owner = await this.model.findById(id, {
            include: [{
                model: Cat
            }]
        });

        return owner;
    }
}

module.exports = new OwnerModel(Owner);


