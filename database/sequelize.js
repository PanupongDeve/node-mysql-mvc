const Sequelize = require('sequelize');
const db = require('../config/db');
const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
  

});

module.exports = sequelize;