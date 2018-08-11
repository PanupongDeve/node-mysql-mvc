const Sequelize = require('sequelize');


const db = {
    database: 'catTests',
    username: 'root',
    password: 'password'
}

const db_test = {
    database: 'cats_test',
    username: 'root',
    password: 'password'
}

module.exports = class Mysql {
    constructor() {
        this.database = this.setUpDatabaseHelper(db);
        this.database_test =this.setUpDatabaseHelper(db_test);
    }

    setUpDatabaseHelper(database) {
        const setupDB = new Sequelize(database.database, database.username, database.password, {
            host: 'mysql',
            dialect: 'mysql',
            operatorsAliases: false,

            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        }); 

        return setupDB;
    }

    connectHelper(database) {
        database
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    }

    setUpDatabase() {
        this.database = this.setUpDatabaseHelper(db);
    }

    setUpDatabaseTest() {
        this.database_test = this.setUpDatabaseHelper(db_test);
    }

    getDatabase() {
        this.setUpDatabase();
        return this.database;
    }

    getDatabase_Test() {
        this.setUpDatabaseTest();
        return this.database_test;
    }

    
    connect() {
        console.log('connecting Database');
        this.setUpDatabase();
        this.connectHelper(this.database);
    }

    connect_test() {
        this.setUpDatabaseTest();
        this.connectHelper(this.database_test);
    }

    
}