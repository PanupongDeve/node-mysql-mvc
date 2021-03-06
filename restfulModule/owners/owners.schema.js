const Sequelize = require('sequelize');
const mysql = require('../../DesignLayer/Database/mysql/getInstance');
const sequelize = mysql.getDatabase();


const Owner = sequelize.define('owners', {
    name: {
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
}, {timestamps: false});

Owner
    .sync()
    .then(() => {
        console.log('Owner table created.')
    })




module.exports =  Owner;