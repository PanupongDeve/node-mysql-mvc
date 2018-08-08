const Restful = require('./Restful');

let restfulInstance = null;
const getInstance = (app) => {
    if(restfulInstance === null) {
        restfulInstance= new Restful(app);
    }

    return restfulInstance;
}

module.exports = getInstance;