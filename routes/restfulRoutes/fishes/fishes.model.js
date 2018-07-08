const Sequelize = require('sequelize');
const sequelize = require('../../../database/sequelize');

const Fish = sequelize.define('fishes', {
    amount: {
        type: Sequelize.INTEGER(10)
    },
    type: {
        type: Sequelize.STRING
    },
    catId: {
        type: Sequelize.INTEGER(10).UNSIGNED
    },
    createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
        primaryKey: false,
        autoIncrement: false
    },
    updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
        primaryKey: false,
        autoIncrement: false
    }
}, {timestamps: false});

Fish
    .sync()
    .then(() => {
        console.log('Fish table created.')
    })

module.exports = Fish;