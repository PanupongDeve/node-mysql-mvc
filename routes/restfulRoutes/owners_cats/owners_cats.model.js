const Sequelize = require('sequelize');
const sequelize = require('../../../database/sequelize');


const OwnerCats = sequelize.define('OwnerCats', {
    ownerId: {
        type: Sequelize.INTEGER(10).UNSIGNED
    },
    catId: {
        type: Sequelize.INTEGER(10).UNSIGNED
    }
});

OwnerCats
    .sync()
    .then(() => {
        console.log('OwnerCats table created.')
    })


    module.exports = OwnerCats;