const Cat = require('../cats/cats.model');
const Fish = require('../fishes/fishes.model');
const Owner = require('../owners/owners.model');
const OwnerCats = require('../owners_cats/owners_cats.model');



Cat.hasMany(Fish);
Owner.belongsToMany(Cat, { through: OwnerCats });
Cat.belongsToMany(Owner, { through: OwnerCats });