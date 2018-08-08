const Mysql = require('./Msql');

let mysqlInstance = null;
const getInstance = () => {
    if(mysqlInstance === null) {
        mysqlInstance= new Mysql();
    }

    return mysqlInstance;
}


module.exports = getInstance();