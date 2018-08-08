const Cat = require('../../../../restfulModule/cats/cats.schema');
const Fish = require('../../../../restfulModule/fishes/fishes.schema');
const Owner = require('../../../../restfulModule/owners/owners.schema');
const OwnerCats = require('./MtoM/owners_cats.schema');


class Relation {
    setup() {
        Cat.hasMany(Fish);
        Owner.belongsToMany(Cat, { through: OwnerCats });
        Cat.belongsToMany(Owner, { through: OwnerCats });
    }
}

const relation = new Relation();

module.exports = relation