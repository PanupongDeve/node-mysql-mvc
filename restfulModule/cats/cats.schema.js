const Sequelize = require('sequelize');
const mysql = require('../../DesignLayer/Database/mysql/getInstance');

const sequelize = mysql.getDatabase();


const Cat = sequelize.define('cats', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
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
});


Cat
    .sync()
    .then(() => {
        console.log('Cat table created.')
    })

module.exports = Cat;