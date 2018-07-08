const Sequelize = require('sequelize');
const db_test = require('../config/db_test');
const sequelize = new Sequelize(db_test.database, db_test.username, db_test.password, {
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