const Sequelize = require('sequelize');
const mysql = require('../../getInstance');
const sequelize = mysql.getDatabase();


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