const Cat = require('./cats.schema');
const Model = require('../../DesignLayer/Model/Model');
const Fish = require('../fishes/fishes.schema');
const Owner = require('../owners/owners.schema');

class CatModel extends Model {
    constructor(model) {
        super(model)
    }

    async findAll() {
        const cats = await this
            .model
            .findAll({
                include: [
                    {
                        model: Fish
                    },
                    {
                        model: Owner
                    },
                ]
            });

        return cats;
    }

    async findById(id) {
        const cat = await this
            .model
            .findById(id, {
                include: [
                    {
                        model: Fish
                    },
                    {
                        model: Owner
                    },
                ]
            });

        return cat;
    }
}

module.exports = new CatModel(Cat);
